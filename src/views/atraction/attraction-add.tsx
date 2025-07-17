import { CartIcon, WhatsappIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';
import { toast } from 'sonner';
import { usePost } from 'hooks/usePost';
import { BASKETCREATE } from 'constants/api-endpoints';

const AddToCartAttraction = ({ data }: { data: AtractionCreate[] }) => {
  const { mutate } = usePost({
    onSuccess: () => {
      toast.success("Savatchaga qo'shildi!");
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      <Button
        className="lg:bg-primary bg-accent hover:bg-accent lg:hover:bg-primary lg:text-white text-black"
        onClick={() => {
          mutate(BASKETCREATE, { attractions: [...data] });
        }}
        size="lg"
      >
        <CartIcon />
        Savatchaga qo'shish
      </Button>
      <Button
        size="lg"
        variant="ghost"
        className="bg-[#52C41A]  text-white hover:text-white hover:bg-[#52C41A] gap-1"
      >
        <WhatsappIcon size={25} />
        <span>Whatsapp</span>
      </Button>
      <Button
        className="lg:hidden md:col-span-2 bg-primary"
        variant="default"
        size="lg"
      >
        Purchase now
      </Button>
    </div>
  );
};

export default AddToCartAttraction;
