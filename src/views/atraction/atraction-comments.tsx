'use client';
import Modal from 'components/custom/modal';
import CommentCard from 'components/shared/comment-card';
import { Button } from 'components/ui/button';
import React from 'react';
import WriteComment from './atraction-comment';
import { useModal } from 'hooks/use-modal';

export default function WtpComments() {
  const { openModal } = useModal('write-comment');
  return (
    <div className="lg:px-6 px-3 py-6 rounded-lg border mt-5">
      <h2 className="text-3xl font-semibold mb-5">Reviews</h2>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-3">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <CommentCard key={i} />
          ))}
        <li className="md:col-span-2 col-span-1 flex flex-col  md:flex-row items-center justify-center gap-2">
          <Button variant="secondary" className="shadow-none w-full md:w-max">
            Ko’proq ko’rish
          </Button>
          <Button onClick={openModal} className="shadow-none w-full md:w-max">
            Izoh qoldirish
            <span className="text-transparent"></span>
          </Button>
        </li>
      </ul>

      <Modal modalKey="write-comment" className="max-w-xl">
        <WriteComment />
      </Modal>
    </div>
  );
}
