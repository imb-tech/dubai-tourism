'use client';
import { ReactNode } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog';
import { useModal } from 'hooks/use-modal';
import { Button } from 'components/ui/button';
import { X } from 'lucide-react';
import { cn } from 'lib/utils';

type Props = {
  modalKey?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  size?:
    | 'max-w-lg'
    | 'max-w-xl'
    | 'max-w-2xl'
    | 'max-w-3xl'
    | 'max-w-4xl'
    | 'max-w-5xl'
    | 'max-w-6xl'
    | 'max-w-7xl'
    | 'max-w-full'
    | 'max-w-sm'
    | 'max-w-md';
  onClose?: () => void;
  titleClass?: string;
};

// Modal component that uses the context to control visibility
const Modal = ({
  title,
  description,
  children,
  titleClass,
  modalKey = 'default',
  className = '',
  size = 'max-w-lg',
  onClose,
}: Props) => {
  const { isOpen, closeModal } = useModal(modalKey);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {isOpen && (
        <DialogContent className={cn(size, className)} >
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 rounded-md h-8 w-8 bg-[#f5222d39] hover:bg-[#f5222d39] text-[#F5222D] hover:text-[#f5222dbc]"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
          {title ? (
            <DialogTitle className={titleClass}>{title}</DialogTitle>
          ) : (
            <VisuallyHidden>
              <DialogTitle>title</DialogTitle>
            </VisuallyHidden>
          )}
          {description && <DialogDescription>{description}</DialogDescription>}
          {children}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Modal;
