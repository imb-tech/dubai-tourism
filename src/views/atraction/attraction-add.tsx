import { CartIcon, WhatsappIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import React from 'react';
import { toast } from 'sonner';
import { usePost } from 'hooks/usePost';
import { BASKETCREATE } from 'constants/api-endpoints';
import { useModal } from 'hooks/use-modal';
import { useAuthStore } from 'store/auth-store';
import { useRouter } from 'next/navigation';

const AddToCartAttraction = ({ data }: { data: AtractionCreate[] }) => {
  const { openModal } = useModal('auth');
  const { token } = useAuthStore();
  const { push } = useRouter();

  const { mutate, isPending } = usePost({
    onSuccess: () => {
      toast.success("Savatchaga qo'shildi!");
      push('/checkout');
    },
  });

  const handleClick = () => {
    if (token) {
      mutate(BASKETCREATE, { attractions: [...data] });
    } else {
      openModal();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      <Button
        disabled={isPending}
        loading={isPending}
        className="lg:bg-primary bg-accent hover:bg-accent lg:hover:bg-primary lg:text-white text-black"
        onClick={handleClick}
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
    </div>
  );
};

export default AddToCartAttraction;
