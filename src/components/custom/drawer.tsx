'use client';
import { ReactNode } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useModal } from 'hooks/use-modal';
import { Drawer, DrawerContent, DrawerTitle } from 'components/ui/drawer';

type Props = {
  modalKey?: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  size?: string;
  onClose?: () => void;
};

const CustomDrawer = ({
  title,
  children,
  modalKey = 'default',
  className = '',
  size = 'lg',
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
    <Drawer open={isOpen} onOpenChange={handleClose}>
      <DrawerContent
        className={`max-w-${size} ` + className}
        aria-describedby=""
      >
        {title && (
          <DrawerTitle className="text-center my-3">{title}</DrawerTitle>
        )}
        {!title && (
          <VisuallyHidden>
            <DrawerTitle>title</DrawerTitle>
          </VisuallyHidden>
        )}
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
