import { CartIcon, WhatsappIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';
import { useAtractionStore } from '../../store/atraction';
import { toast } from 'sonner';

const AddToCartAttraction = ({ data }: { data: Atraction[] }) => {
  const { addAtraction } = useAtractionStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      <Button
        onClick={() => {
          addAtraction(data);
          toast.success("Savatchaga qo'shildi!");
        }}
        size="lg"
      >
        <CartIcon />
        Savatchaga qo'shish
      </Button>
      <Button
        size="lg"
        variant="ghost"
        className="bg-[#52C41A] hover:bg-white text-white  hover:text-primary gap-1"
      >
        <WhatsappIcon size={25} />
        <span>Whatsapp</span>
      </Button>
    </div>
  );
};

export default AddToCartAttraction;
