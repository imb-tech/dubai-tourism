import Link from 'next/link';
import Navbar from './navbar';
import Image from 'next/image';
import ServicesButton from './services-button';
import { usePathname } from 'next/navigation';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import { CartIcon, LoginIcon, User2Icon } from 'components/icons';
import Modal from 'components/custom/modal';
import Register from 'views/auth/register';
import { useModal } from 'hooks/use-modal';
import { useTextStore } from 'store/auth';
import Login from 'views/auth/login';
import EmailVerification from 'views/auth/message-code';
import { useOtpTimerStore } from 'store/useOtpTimerStore';
import { useAuthStore } from 'store/auth-store';
import { User } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal('auth');
  const { timer, isActive } = useOtpTimerStore();
  const { token } = useAuthStore();
  const { text } = useTextStore();

  console.log(token);

  return (
    <header className="bg-transparent z-10 relative ">
      <div className="container lg:px-0 px-3 py-4 mx-auto flex items-center justify-center gap-[10px] flex-col">
        <div className="flex items-center self-stretch justify-between gap-6">
          <Link href="/" className=" lg:w-40 w-32">
            <Image
              priority
              height={79}
              width={192}
              src={pathname === '/' ? '/logo.png' : '/logo-dark.png'}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </Link>
          <Navbar pathname={pathname} />

          <div className="hidden lg:flex flex-col items-start gap-1">
            <a
              href="tel:+998900002323"
              className={cn(
                'font-bold   border-b',
                pathname === '/' ? 'text-white' : ''
              )}
            >
              {' '}
              +998 90 000-23-23
            </a>
            <a
              href="#"
              className={cn(
                'text-sm ',
                pathname === '/' ? 'text-gray-300' : 'text-[#00000099]'
              )}
            >
              OAE, Dubai, 12 block, 12 street
            </a>
          </div>
          <div className="flex items-end gap-3  h-[45px]">
            {token ? (
              <Button
                className={cn(
                  ' shadow-none  flex gap-1 items-center',
                  pathname === '/'
                    ? 'hover:bg-white bg-white text-orange-500'
                    : 'bg-[#F5F5F5] text-black '
                )}
              >
                <User size={20} />
              </Button>
            ) : (
              <Button
                onClick={openModal}
                className={cn(
                  ' shadow-none  flex gap-1 items-center',
                  pathname === '/'
                    ? 'hover:bg-white bg-white text-orange-500'
                    : 'bg-[#F5F5F5] text-black '
                )}
              >
                <LoginIcon /> Login
              </Button>
            )}
            <Button
              className={cn(
                '  shadow-none ',
                pathname === '/'
                  ? 'hover:bg-white bg-white text-orange-500 '
                  : 'bg-[#F5F5F5] text-black '
              )}
            >
              <CartIcon />
            </Button>
          </div>
        </div>
        <ServicesButton pathname={pathname} />
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
            <EmailVerification isActive={isActive} timer={timer} />
          )}
        </Modal>
      </div>
    </header>
  );
}
