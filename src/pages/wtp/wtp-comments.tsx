"use client"
import Modal from 'components/custom/modal';
import CommentCard from 'components/shared/comment-card';
import { Button } from 'components/ui/button';
import React from 'react';
import WriteComment from './write-comment';
import { useModal } from 'hooks/use-modal';

export default function WtpComments() {
  const { openModal } = useModal('write-comment');
  return (
    <div className="p-6 rounded-lg border mt-5">
      <h2 className="text-3xl font-semibold m-0">Reviews</h2>
      <ul className="grid grid-cols-2 gap-2 mt-3">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <CommentCard key={i} />
          ))}
        <li className="col-span-2 flex items-center justify-center gap-2">
          <Button variant="secondary" className="shadow-none">
            Ko’proq ko’rish
          </Button>
          <Button onClick={openModal}>
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
