'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button';
import FormInput from 'components/form/input';
import { usePost } from 'hooks/usePost';
import { CONCIERGES_APPLICATIONS } from 'constants/api-endpoints';
import { toast } from 'sonner';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import { Label } from 'components/ui/label';
import { Checkbox } from 'components/ui/checkbox';
import ErrorMessage from 'components/ui/error-message';
import { useGet } from 'hooks/useGet';

type FormType = {
  comment: string;
  full_name: string;
  email: string;
  phone: string;
  concierges?: number[];
};

const data2 = [
  {
    id: 1,
    title: 'Yatch rentel',
  },
  {
    id: 2,
    title: 'Helicopter tour',
  },
  {
    id: 3,
    title: 'Safari tour',
  },
  {
    id: 4,
    title: 'Water sport',
  },
];

const ApplicationFormVIP = () => {
  const form = useForm<FormType>();
  const { data, isSuccess } = useGet('services');
  const watchedServices = form.watch('concierges') || [];

  const { mutate } = usePost({
    onSuccess: () => {
      toast.success('Your booking aplication is send successfully');
    },
  });

  const onSubmit = (data: FormType) => {
    if (!data.concierges || data.concierges.length === 0) {
      form.setError('concierges', {
        type: 'manual',
        message: 'Iltimos, kamida bitta VIP xizmat turini tanlang.',
      });
      return;
    }

    if (data) {
      mutate(CONCIERGES_APPLICATIONS, { ...data, });
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
          type='email'
          className="mt-1 2xl:h-[50px] h-[40px] "
          label={'Email'}
          placeholder={'Email manzilingiz'}
          required={form.watch('phone') ? false : true}
          message={'Ismingizni kiriting'}
          variant="clean"
        />

        <div>
          <Label
            className={`block text-sm mb-1 ${
              form.formState.errors.concierges ? 'text-destructive' : ''
            }`}
          >
            {'VIP sertive type'} <span className="text-red-500">*</span>
          </Label>
          <div className="w-full mt-1 flex flex-wrap gap-3">
            {
              data2?.map((item: { title: string; id: number }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={watchedServices.includes(item.id)}
                    onCheckedChange={() => {
                      const updatedServices = watchedServices.includes(item.id)
                        ? watchedServices.filter((s) => s !== item.id)
                        : [...watchedServices, item.id];

                      form.setValue('concierges', updatedServices);
                      if (updatedServices.length > 0) {
                        form.clearErrors('concierges');
                      }
                    }}
                    id={`concierges-${item.id}`}
                  />
                  <Label htmlFor={`concierges-${item.id}`}>{item.title}</Label>
                </div>
              ))}
          </div>

          {form.formState.errors.concierges && (
            <ErrorMessage className="mt-2">
              {form.formState.errors.concierges.message?.toString()}
            </ErrorMessage>
          )}
        </div>
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

export default ApplicationFormVIP;
