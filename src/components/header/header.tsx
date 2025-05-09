import Link from 'next/link';
import Navbar from './navbar';
import Image from 'next/image';
import ServicesButton from './services-button';
import { usePathname } from 'next/navigation';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import { CartIcon, LoginIcon } from 'components/icons';
import Modal from 'components/custom/modal';
import Register from 'views/auth/register';
import { useModal } from 'hooks/use-modal';
import { useTextStore } from 'store/auth';
import Login from 'views/auth/login';
import EmailVerification from 'views/auth/message-code';
import { useOtpTimerStore } from 'store/useOtpTimerStore';
import { useAuthStore } from 'store/auth-store';
import { User } from 'lucide-react';
import { useGet } from 'hooks/useGet';
import { LOGIN, PROFILE } from 'constants/api-endpoints';
import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { usePost } from 'hooks/usePost';
import { toast } from 'sonner';

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal('auth');
  const { timer, isActive } = useOtpTimerStore();
  const { closeModal } = useModal('auth');
  const { token, setToken } = useAuthStore();
  const { text } = useTextStore();
  const hasCalledRef = useRef(false);
  const { mutate, isPending } = usePost({
    onSuccess: (data) => {
      if (data?.access_token) {
        setToken(data?.access_token);
      }
      closeModal();
      toast.success('Muavffaqiyatli kirdingiz!');
    },
  });
  const { data } = useGet(PROFILE, { options: { enabled: Boolean(token) } });

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email && !hasCalledRef.current && !token) {
      hasCalledRef.current = true;
      mutate(LOGIN, { email: session.user.email, via: 'google',first_name:session?.user?.name?.split(" ")[0], last_name:session?.user?.name?.split(" ")[1] });
    }
  }, [session, mutate, token]);


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

          {token ? (
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
          ) : null}
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
