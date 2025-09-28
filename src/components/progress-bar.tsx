'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    NProgress.done();

    return () => {
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
