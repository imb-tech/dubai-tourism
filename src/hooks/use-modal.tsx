import { useCallback } from "react";
import { useModalStore } from "store/modal";

export function useModal(modalKey = "default") {
  const { openModals, openModal, closeModal } = useModalStore();

  const isOpen = !!openModals[modalKey];

  const open = useCallback(() => openModal(modalKey), [modalKey, openModal]);
  const close = useCallback(() => closeModal(modalKey), [modalKey, closeModal]);

  return { isOpen, openModal: open, closeModal: close };
}
