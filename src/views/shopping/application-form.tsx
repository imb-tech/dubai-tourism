'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button';
import FormInput from 'components/form/input';
import { usePost } from 'hooks/usePost';
import { SHOPPING_GOLDS_APPLICATIONS } from 'constants/api-endpoints';
import { toast } from 'sonner';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import { Clock, Loader, MapPinHouse } from 'lucide-react';
import FormDatePicker from 'components/form/date-picker';
import { formatDate } from 'views/mice-group/bron-form';

type FormType = {
  full_name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  address: string;
  comment: string;
  lon?: number;
  lat?: number;
};

const ApplicationFormShoppping = () => {
  const [loadingAddress, setLoadingAddress] = useState(false);
  const form = useForm<FormType>();
  const { mutate } = usePost({
    onSuccess: () => {
      toast.success('Your booking aplication is send successfully');
    },
  });

  const onSubmit = (data: FormType) => {
    if (data) {
      mutate(SHOPPING_GOLDS_APPLICATIONS, data);
    } else {
      toast.error('The data was not entered correctly.');
    }
  };

  const getCurrentLocationWithAddress = async () => {
    setLoadingAddress(true);
    if (!navigator.geolocation) {
      setLoadingAddress(false);
      toast.error('Your browser does not support Geolocation');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            toast.error('Failed to fetch address');
            return;
          }

          const data = await response.json();
          const address = data.display_name || 'Address not found';

          form.setValue('address', address);
          form.setValue('lat', latitude);
          form.setValue('lon', longitude);
        } catch (error) {
          toast.error('Error fetching address');
        } finally {
          setLoadingAddress(false);
        }
      },
      () => {
        toast.error('Permission denied or location unavailable');
        setLoadingAddress(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 3000,
      }
    );
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
          type="email"
          className="mt-1 2xl:h-[50px] h-[40px] "
          label={'Email'}
          placeholder={'Email manzilingiz'}
          required={form.watch('phone') ? false : true}
          message={'Ismingizni kiriting'}
          variant="clean"
        />
        <div className="grid sm:grid-cols-2 gap-3">
          <FormDatePicker
            methods={form}
            name="date"
            label="Uchrashuv sanasi"
            required
            className="mt-1 2xl:h-[50px] h-[40px] "
          />
          <FormInput
            required
            variant="clean"
            name="time"
            label="Uchrashuv vaqti"
            methods={form}
            type="time"
            prefixIcon={
              <div className="flex items-center text-foreground mt-1">
                <Clock size={18} />
              </div>
            }
            className="bg-background  appearance-none [&::-webkit-calendar-picker-indicator]:hidden mt-1  2xl:h-[50px] h-[40px]"
          />
        </div>
        <FormInput
          required
          variant="clean"
          name="address"
          label="Manzilingiz"
          placeholder={
            loadingAddress ? 'Manzil olinmoqda...' : 'Manzilingizni kiriting'
          }
          methods={form}
          type="text"
          prefixIcon={
            <div className="flex items-center text-foreground hover:text-primary mt-1 border-l-2 pl-1">
              {loadingAddress ? (
                <Loader size={18} className="animate-spin text-primary" />
              ) : (
                <MapPinHouse
                  onClick={getCurrentLocationWithAddress}
                  size={18}
                />
              )}
            </div>
          }
          className="bg-background  appearance-none [&::-webkit-calendar-picker-indicator]:hidden mt-1  2xl:h-[50px] h-[40px]"
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

export default ApplicationFormShoppping;
