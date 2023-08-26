import { useCallback, useEffect, useRef, useState } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const showDialog = useCallback(() => {
    setIsOpen(true);
    ref.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
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
