'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'lib/query-client';
import Contact from 'views/home/contact';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <main className="min-h-screen ">{children}</main>
            <Contact />
            <Footer />
            <Toaster richColors />
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
