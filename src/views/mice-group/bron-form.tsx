'use client';

import type React from 'react';
import { toast } from 'sonner';
import { useGet } from 'hooks/useGet';
import { usePost } from 'hooks/usePost';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button';
import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import ErrorMessage from 'components/ui/error-message';
import { Label } from 'components/ui/label';
import { Checkbox } from 'components/ui/checkbox';
import FormDatePicker from 'components/form/date-picker';
import { MICE_SERVICES_APPLICATIONS } from 'constants/api-endpoints';

export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split('/').map(Number);

  if (!day || !month || !year) return '';

  const date = new Date(year, month - 1, day);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

function parseDateDMY(dateString: string) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
}

type FormType = {
  people_count: string;
  start: string;
  end: string;
  comment: string;
  full_name: string;
  email: string;
  phone: string;
  services?: number[];
};

export interface ServerErrorResponse {
  response?: {
    data?: Record<string, string>;
  };
}

export default function BookingForm() {
  const { data, isSuccess } = useGet('services');
  const { mutate, isPending } = usePost();

  const form = useForm<FormType>({
    defaultValues: {
      people_count: '',
      start: '',
      end: '',
      comment: '',
      full_name: '',
      email: '',
      phone: '',
      services: [],
    },
  });

  const watchedServices = form.watch('services') || [];

  const handleSubmit = (values: FormType) => {
    const formattedData = {
      ...values,
      start: formatDate(values.start),
      end: formatDate(values.end),
    };

    if (!data.services || data.services.length === 0) {
      form.setError('services', {
        type: 'manual',
        message: 'Iltimos, kamida bitta Service xizmat turini tanlang.',
      });
      return;
    }

    mutate(MICE_SERVICES_APPLICATIONS, formattedData, {
      onSuccess: () => {
        toast.success('Xush kelibsiz! buyurtma qabul qilindi');
        form.reset();
      },
      onError: (error: ServerErrorResponse) => {
        if (error.response?.data) {
          const errors = error.response.data;
          Object.entries(errors).forEach(([key, message]) => {
            form.setError(key as keyof FormType, {
              type: 'server',
              message: message as string,
            });
          });
        } else {
          toast.error('Xatolik yuz berdi.');
        }
      },
    });
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
      <FormInput
        variant="clean"
        type="number"
        methods={form}
        name="people_count"
        className="mt-1 2xl:h-[50px] h-[40px]"
        label={'Ishtirokchilar sonini tanlang'}
        placeholder={'Ishtirokchilar sonini tanlang'}
        message={'Ishtirokchilar sonini kiriting'}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end">
        <FormDatePicker
          methods={form}
          name="start"
          label={'Kelish va ketish sanasi'}
          message={'Kelish sanasini kiriting'}
          placeholder={'Kelish sanasi'}
          className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
          required
          fromDate={new Date()}
        />
        <FormDatePicker
          message={'Ketish sanasini kiriting'}
          methods={form}
          name="end"
          placeholder={'Ketish sanasi'}
          className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
          required
          fromDate={
            form.watch('start')
              ? new Date(parseDateDMY(form.watch('start')))
              : new Date()
          }
        />
      </div>

      <div>
        <Label
          className={`block text-sm mb-1 ${
            form.formState.errors.services ? 'text-destructive' : ''
          }`}
        >
          {'Xizmatlar turi'} <span className="text-red-500">*</span>
        </Label>
        <div className="w-full mt-1 flex flex-wrap gap-3">
          {isSuccess &&
            data?.map((item: { title: string; id: number }) => (
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

                    form.setValue('services', updatedServices);
                    if (updatedServices.length > 0) {
                      form.clearErrors('services');
                    }
                  }}
                  id={`services-${item.id}`}
                />
                <Label htmlFor={`services-${item.id}`}>{item.title}</Label>
              </div>
            ))}
        </div>

        {form.formState.errors.services && (
          <ErrorMessage className="mt-2">
            {form.formState.errors.services.message?.toString()}
          </ErrorMessage>
        )}
      </div>

      <FormTextarea
        label={"Qo'shimcha talablar"}
        methods={form}
        name="comment"
        rows={8}
        wrapperClassName={'h-[120px]'}
        className="h-full mt-1"
        message={"Qo'shimcha talablarni kiriting"}
      />

      <div className="pt-4">
        <h1 className="text-lg font-semibold mb-4">{"Aloqa ma'lumotlari"}</h1>
        <div className="space-y-4">
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
        </div>
      </div>

      <Button loading={isPending} type="submit" className="w-full">
        {'Buyurtmani yuborish'}
      </Button>
    </form>
  );
}
