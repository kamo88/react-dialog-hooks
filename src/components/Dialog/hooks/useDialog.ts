import { useCallback, useEffect, useRef, useState } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const isOpenRef = useRef(false);

  const showDialog = useCallback(() => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;
    setIsOpen(true);
    ref.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setIsOpen(false);
    ref.current?.close();
  }, []);

  useEffect(() => () => closeDialog(), [closeDialog]);

  return {
    ref,
    isOpen,
    showDialog,
    closeDialog,
  };
};
