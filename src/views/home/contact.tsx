import FormInput from 'components/form/input';
import PhoneField from 'components/form/phone-field';
import FormTextarea from 'components/form/textarea';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const form = useForm();

  const onSubmit = (data: any) => {};
  return (
    <div className="lg:px-0 px-3 mb-12">
      <div
        className="container mx-auto p-10 mb-6   h-[400px] rounded-2xl w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/contact-info.png")`,
        }}
      >
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h1 className="font-semibold text-3xl text-white">
            Savolingiz bormi?
          </h1>
          <p className="text-white">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio matt
          </p>
          <Link
            href={'tel:+998901682272'}
            className="font-semibold text-3xl text-white"
          >
            +998 (90) 168-22-72{' '}
          </Link>
          <div>
            <Button className="text-[#FF7043] bg-white hover:bg-white px-24 cursor-pointer">
              Bepul maslahat
            </Button>
          </div>
        </div>
      </div>
      <div className="border border-[#E1E1E1] container mx-auto p-6 rounded-[12px]">
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4'>
          <FormInput
            label="Ism"
            methods={form}
            name="full_name"
            placeholder="Ismingiz"
            required
            className="h-[40px] shadow-none bg-gray-100"
          />
          <PhoneField methods={form} name="phone" label="Telefon raqam" 
          className='h-[40px]'  
          />
          <FormInput
            type="email"
            label="Email"
            placeholder="Email manzilingiz"
            methods={form}
            name="email"
            required
            className="h-[40px] shadow-none bg-gray-100"
          />
          <FormTextarea
            name="comment"
            methods={form}
            label="Xabar"
            placeholder="Sizning xabaringiz"
            required
            wrapperClassName="col-span-3 "
            className='bg-gray-100'
          />
          <Button type='submit' className='col-span-3 cursor-pointer'>Ariza qoldirish</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
