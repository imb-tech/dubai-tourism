'use client';

import React from 'react';
import { Button } from '../ui/button';
import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import { useAuthStore } from 'store/auth-store';
import { toast } from 'sonner';
import Modal from 'components/custom/modal';
import EmailVerification from 'views/auth/message-code';
import Register from 'views/auth/register';
import Login from 'views/auth/login';
import { useModal } from 'hooks/use-modal';
import { useTextStore } from 'store/auth';
import { cn } from 'lib/utils';
import { usePathname } from 'next/navigation';
import { LoginIcon } from 'components/icons';

export default function UserMenu({ data }: { data: Profile | undefined }) {
  const { openModal } = useModal('auth');
  const pathname = usePathname();
  const { text } = useTextStore();
  const { token, clearToken } = useAuthStore();

  const functionLogOut = async () => {
    clearToken();
    toast.warning('Muavffaqiyatli chiqdingiz!');
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <div className="flex gap-2">
      {token ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={cn(
                ' shadow-none  border-none flex gap-1 items-center',
                pathname === '/'
                  ? 'hover:bg-white bg-white text-orange-500'
                  : 'bg-[#F5F5F5] hover:bg-[#ebe8e8] text-black '
              )}
            >
              <User size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioItem
              className={("p-2 cursor-pointer hover:text-blue-600 border-b rounded shadow-none")}
              value="1"
            >
             <div className='flex flex-col'>
             <span className='capitalize'>{data?.first_name} {data?.last_name}</span>
             <span>{data?.email || data?.phone}</span>
             </div>
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              onClick={functionLogOut}
              className="p-2 cursor-pointer hover:text-blue-600"
              value="2"
            >
              <LogOut size={18} />
              Chiqish
            </DropdownMenuRadioItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={openModal}
          className={cn(
            ' shadow-none  flex gap-1 items-center',
            pathname === '/'
              ? 'hover:bg-white bg-white text-orange-500'
              : 'bg-[#F5F5F5] hover:bg-[#ebe8e8] text-black '
          )}
        >
          <LoginIcon /> Login
        </Button>
      )}

      <Modal
        modalKey="auth"
        title={
          text === 'login'
            ? 'Login'
            : text === 'register'
            ? 'Register'
            : 'Email confirmation'
        }
        titleClass="lg:text-3xl font-semibold text-2xl"
      >
        {text === 'login' ? (
          <Login />
        ) : text === 'register' ? (
          <Register />
        ) : (
          <EmailVerification/>
        )}
      </Modal>
    </div>
  );
}
