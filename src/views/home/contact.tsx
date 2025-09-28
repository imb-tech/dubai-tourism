'use client';
import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import { Button } from 'components/ui/button';
import { APPLICATIONS } from 'constants/api-endpoints';
import { usePost } from 'hooks/usePost';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
  first_name: string;
  phone: string;
  email: string;
  text: string;
};

const Contact = () => {
  const form = useForm<FormValues>();

  const { mutate, isPending } = usePost({
    onSuccess: () => {
      toast.success('Successful');
      form.reset();
    },
  });

  const onSubmit = (data: FormValues) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== null && value !== ''
      )
    );
    mutate(APPLICATIONS, cleanedData);
  };

  return (
    <div className="lg:px-0 px-3 mb-12">
      <div className="container mx-auto lg:p-10 p-6 mb-6 lg:bg-[url(/images/contact-info.png)] bg-[#FF5533] lg:h-[400px] rounded-2xl w-full bg-cover bg-center">
        <div className="lg:w-1/2 w-full flex flex-col lg:gap-6 gap-5">
          <h1 className="font-semibold lg:text-3xl text-2xl text-white">
            Do you have a question?
          </h1>
          <p className="text-white">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio matt
          </p>
          <Link
            href={'tel:+998901682272'}
            className="font-semibold lg:text-3xl text-2xl text-white"
          >
            +998 (90) 168-22-72{' '}
          </Link>
          <div>
            <Button className="text-[#FF5533] lg:w-0 w-full bg-white hover:bg-white px-24 cursor-pointer">
              Bepul maslahat
            </Button>
          </div>
        </div>
      </div>
      <div className="border border-[#E1E1E1] container mx-auto lg:p-6 p-4 rounded-[12px]">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 "
        >
          <FormInput
            variant="clean"
            label="Ism"
            methods={form}
            name="first_name"
            placeholder="Ismingiz"
            required
            className="h-[40px]"
          />
          <PhoneField
            methods={form}
            name="phone"
            label="Telefon raqam"
            className="h-[40px] "
            required={form.watch('email') ? false : true}
          />
          <FormInput
            variant="clean"
            type="email"
            label="Email"
            placeholder="Email manzilingiz"
            methods={form}
            name="email"
            required={form.watch('phone') ? false : true}
            className="h-[40px]"
          />
          <FormTextarea
            name="text"
            methods={form}
            label="Xabar"
            placeholder="Sizning xabaringiz"
            required
            className="border-none"
            wrapperClassName="lg:col-span-3  "
          />
          <Button
            disabled={isPending}
            loading={isPending}
            type="submit"
            className="lg:col-span-3 cursor-pointer"
          >
            Ariza qoldirish
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
