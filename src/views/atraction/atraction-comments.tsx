'use client';
import Modal from 'components/custom/modal';
import CommentCard from 'components/shared/comment-card';
import { Button } from 'components/ui/button';
import React, { useState } from 'react';
import WriteComment from './atraction-comment';
import { useModal } from 'hooks/use-modal';
import { useGet } from 'hooks/useGet';

type Props = {
  slug: string;
};

export default function WtpComments({ slug }: Props) {
  const { openModal } = useModal('write-comment');
  const [viewCount, setViewCount] = useState<number>(6);

  const { data, isSuccess } = useGet<{
    results: { text: string; rating: number; full_name: string }[];
  }>('services/comment', {
    params: { attraction__slug: slug, page_size: viewCount },
    options: { enabled: !!slug },
  });

  return (
    <div className="lg:px-6 px-3 py-6 rounded-lg border">
      <h2 className="text-3xl font-semibold mb-5">Reviews</h2>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-3">
        {isSuccess &&
          data?.results?.map((item, i) => <CommentCard key={i} item={item} />)}
        <li className="md:col-span-2 col-span-1 flex flex-col  md:flex-row items-center justify-center gap-2">
          <Button
            onClick={() => {
              if (viewCount === 6) {
                setViewCount(12000);
              } else {
                setViewCount(6);
              }
            }}
            variant="secondary"
            className="shadow-none w-full md:w-max"
          >
            {viewCount===6 ? "Ko'proq ko'rish" : "Yashirish"}
          </Button>
          <Button onClick={openModal} className="shadow-none w-full md:w-max">
            Izoh qoldirish
            <span className="text-transparent"></span>
          </Button>
        </li>
      </ul>

      <Modal modalKey="write-comment" className="max-w-xl">
        <WriteComment slug={slug} />
      </Modal>
    </div>
  );
}
