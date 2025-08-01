'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button';
import FormInput from 'components/form/input';
import { useTextStore } from 'store/auth';
import { useOtpTimerStore } from 'store/useOtpTimerStore';
import { usePost } from 'hooks/usePost';
import { LOGIN } from 'constants/api-endpoints';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

type Formtype = {
  email: string;
};

const Login = () => {
  const { setText, clearText, setUser, user } = useTextStore();
  const form = useForm<Formtype>();
  const { startTimer } = useOtpTimerStore();
  const { mutate, isPending } = usePost({
    onSuccess: () => {
      setText('code');
      toast.success('Successful');
      startTimer();
    },
  });

  const onSubmit = (data: Formtype) => {
    if (data.email) {
      setUser(data);
      mutate(LOGIN, { ...data, via: 'input' });
    } else {
      toast.error('The data was not entered correctly.');
    }
  };

  useEffect(() => {
    if (user?.email && !user?.first_name) {
      form.reset(user);
    }
  }, [user, form]);

  return (
    <div className="space-y-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          variant="clean"
          methods={form}
          name="email"
          type="email"
          className="mt-1 2xl:h-[50px] h-[40px] "
          label={'Email'}
          placeholder={'Email manzilingiz'}
          required
          message={'Ismingizni kiriting'}
        />
        <Button
          loading={isPending}
          disabled={isPending}
          type="submit"
          className="w-full"
        >
          Login
        </Button>
      </form>

      <div className="relative flex items-center justify-center text-xs uppercase">
        <div className="h-[1px] w-full bg-gray-300" />
        <span className="bg-white px-2 text-muted-foreground whitespace-nowrap">
          or log in with
        </span>
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Button
          onClick={() => signIn('google')}
          variant="outline"
          className="flex items-center justify-center gap-2 shadow-none bg-[#F5F5F5] border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Google
        </Button>
        {/* <Button
          variant="outline"
          className="flex items-center justify-center gap-2 shadow-none bg-[#F5F5F5] border-none"
        >
          <Image
            src={'/apple.png'}
            alt="apple logo"
            width={25}
            height={25}
            priority
          />
          Apple
        </Button> */}
      </div>

      <div className="text-center text-sm">
        <span
          onClick={() => {
            clearText();
            setText('register');
          }}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Don't have an account? Register
        </span>
      </div>
    </div>
  );
};

export default Login;
