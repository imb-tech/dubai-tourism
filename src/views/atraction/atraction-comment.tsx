import { useQueryClient } from '@tanstack/react-query';
import { NotRateIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { useModal } from 'hooks/use-modal';
import { usePost } from 'hooks/usePost';
import React, { useState } from 'react';
import { toast } from 'sonner';

type Props = {
  slug: string;
};
export default function WriteComment({ slug }: Props) {
  const queryCliet = useQueryClient();
  const { closeModal } = useModal('write-comment');
  const [state, setState] = useState<number>(-1);
  const [text, setText] = useState<string>('');

  const { mutate, isPending } = usePost({
    onSuccess: () => {
      toast.success("Qabul qilindi");
      queryCliet.refetchQueries({ queryKey: ['services/comment'] });
      closeModal();
      setState(-1);
      setText('');
    },
  });

  const handleClick = (i: number) => {
    setState(i);
  };

  const handleSubmit = () => {
    mutate('services/comment', { text, rating: state + 1, attraction: slug });
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <p>Sizning reytingingiz:</p>
        <div className="flex items-center gap-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span
                className={state >= i ? 'text-[#FAAD14]' : ''}
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
              >
                <NotRateIcon bg={state >= i ? 'text-[#FAAD14]' : ''} />
              </span>
            ))}
        </div>
      </div>
      <fieldset className="flex flex-col mt-3">
        <label htmlFor="comment">Izoh</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          id="comment"
          placeholder="Sizning izohingiz"
          rows={3}
          className="bg-secondary rounded-md ring-0 focus:ring-0 outline-none py-1 px-2 placeholder:text-black/20"
        />
      </fieldset>

      <Button
        type="button"
        onClick={handleSubmit}
        disabled={isPending || !text}
        loading={isPending}
        className="w-full mt-2"
      >
        Izoh qoldirish
      </Button>
    </div>
  );
}
