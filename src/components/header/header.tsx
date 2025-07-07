import Link from 'next/link';
import Navbar from './navbar';
import Image from 'next/image';
import ServicesButton from './services-button';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import { CartIcon } from 'components/icons';
import { useModal } from 'hooks/use-modal';
import { useAuthStore } from 'store/auth-store';
import { useGet } from 'hooks/useGet';
import { LOGIN, PROFILE } from 'constants/api-endpoints';
import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { usePost } from 'hooks/usePost';
import { toast } from 'sonner';
import UserMenu from './user-menu';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter()
  const { closeModal } = useModal('auth');
  const { token, setToken } = useAuthStore();
  const hasCalledRef = useRef(false);

  const { mutate } = usePost({
    onSuccess: (data) => {
      if (data?.access) {
        setToken(data?.access);
      }
      closeModal();
      toast.success('Muavffaqiyatli kirdingiz!');
    },
  });

  const { data } = useGet<Profile>(PROFILE, {
    options: { enabled: Boolean(token) },
  });

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email && !hasCalledRef.current && !token) {
      hasCalledRef.current = true;
      mutate(LOGIN, {
        email: session.user.email,
        via: 'google',
        first_name: session?.user?.name?.split(' ')[0],
        last_name: session?.user?.name?.split(' ')[1],
      });
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

          {/* {token ? (
            <div className="hidden lg:flex flex-col items-start gap-1">
              <a
                href={
                  data?.phone ? `tel:${data?.phone}` : `mailto:${data?.email}`
                }
                className={cn(
                  'font-bold   border-b',
                  pathname === '/' ? 'text-white' : ''
                )}
              >
                {' '}
                {data?.email || data?.phone}
              </a>
              <span
                className={cn(
                  'text-sm capitalize',
                  pathname === '/' ? 'text-gray-300' : 'text-[#00000099]'
                )}
              >
                {data?.first_name} {data?.last_name}
              </span>
            </div>
          ) : null} */}
          <div className="flex items-end gap-3  h-[45px]">
            <UserMenu data={data} />
            <Button
            onClick={()=>{
              router.push("/checkout")
            }}
              className={cn(
                '  shadow-none ',
                pathname === '/'
                  ? 'hover:bg-white bg-white text-orange-500 '
                  : 'bg-[#F5F5F5] hover:bg-[#ebe8e8] text-black '
              )}
            >
              <CartIcon />
            </Button>
          </div>
        </div>
        <ServicesButton pathname={pathname} />
      </div>
    </header>
  );
}
