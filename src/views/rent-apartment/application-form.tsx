'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button';
import FormInput from 'components/form/input';
import { usePost } from 'hooks/usePost';
import { APARTMENTS_APPLICATIONS } from 'constants/api-endpoints';
import { toast } from 'sonner';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import { useModal } from 'hooks/use-modal';

type FormType = {
  comment: string;
  full_name: string;
  email: string;
  phone: string;
};

const ApplicationFormApartment = () => {
  const form = useForm<FormType>();
  const { closeModal } = useModal('apartments');
  const { mutate } = usePost({
    onSuccess: () => {
      toast.success('Your booking aplication is send successfully');
      closeModal();
    },
  });

  const onSubmit = (data: FormType) => {
    if (data) {
      mutate(APARTMENTS_APPLICATIONS, { ...data, type: 'apartments' });
    } else {
      toast.error('The data was not entered correctly.');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          variant="clean"
          methods={form}
          name="full_name"
          className="mt-1 2xl:h-[50px] h-[40px]"
          label={'Ism'}
          placeholder={'Ismingiz'}
          message={'Ismingizni kiriting'}
          required
        />
        <PhoneField
          methods={form}
          name="phone"
          className="mt-1 2xl:h-[50px] h-[40px]"
          required={form.watch('email') ? false : true}
        />
        <FormInput
          methods={form}
          name="email"
          className="mt-1 2xl:h-[50px] h-[40px] "
          label={'Email'}
          placeholder={'Email manzilingiz'}
          required={form.watch('phone') ? false : true}
          message={'Ismingizni kiriting'}
          variant="clean"
        />
        <FormTextarea
          label={'Xabar'}
          methods={form}
          name="comment"
          rows={8}
          wrapperClassName={'h-[120px]'}
          className="h-full mt-1"
          message={'Xabarni kiriting'}
        />
        <Button type="submit" className="w-full">
          leave a request
        </Button>
      </form>
    </div>
  );
};

export default ApplicationFormApartment;
