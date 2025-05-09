'use client';
import type React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/ui/button';
import { useForm } from 'react-hook-form';
import FormInputOTP from 'components/form/input-otp';
import { useTextStore } from 'store/auth';
import { useOtpTimerStore } from 'store/useOtpTimerStore';
import { NEW_CODE, VERIFY } from 'constants/api-endpoints';
import { usePost } from 'hooks/usePost';
import { toast } from 'sonner';
import { useAuthStore } from 'store/auth-store';
import { useModal } from 'hooks/use-modal';

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
};

const formSchema = z.object({
  code: z.string().length(6, {
    message: 'The verification code must contain 6 digits.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function EmailVerification({
  isActive,
  timer,
}: {
  timer: number;
  isActive: boolean;
}) {
  const { resetTimer } = useOtpTimerStore();
  const { setToken } = useAuthStore();
  const { closeModal } = useModal('auth');
  const { user, setText, clearUser, clearText } = useTextStore();

  const { mutate } = usePost({
    onSuccess: (data) => {
      if (data?.access) {
        setToken(data?.access);
      }
      closeModal();
      clearText();
      clearUser();
      toast.success('Successful');
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(VERIFY, { ...data, email: user?.email });
  };

  const resetCode = () => {
    if (isActive) {
      resetTimer();
      mutate(NEW_CODE, user);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center my-3">
        <p className="text-muted-foreground mt-2">
          We have sent a confirmation code to the email
        </p>
        <p className="font-medium mt-1">{user?.email}</p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInputOTP methods={form} name="code" length={6} />

        <div className="text-center text-sm text-muted-foreground">
          {isActive ? (
            <p>Resend code via: {formatTime(timer)}</p>
          ) : (
            <button
              type="button"
              onClick={resetCode}
              className="text-sm cursor-pointer text-muted-foreground hover:text-primary"
            >
              Resend code
            </button>
          )}
        </div>

        <Button type="submit" className="w-full ">
          Confirm
        </Button>

        <div className="text-center">
          <button
            onClick={() => {
              if (user?.email && user?.first_name) {
                setText('register');
              } else {
                setText('login');
              }
            }}
            type="button"
            className="text-sm  text-muted-foreground hover:text-primary cursor-pointer"
          >
            Change email address
          </button>
        </div>
      </form>
    </div>
  );
}
