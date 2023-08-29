import { useCallback, useEffect, useRef, useState } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const showDialog = useCallback(() => {
    if (ref.current?.open) return;
    setIsOpen(true);
    ref.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    if (!ref.current?.open) return;
    setIsOpen(false);
    ref.current?.close();
  }, []);

  useEffect(() => {
    const dialogRef = ref.current;
    return () => {
      setIsOpen(false);
      dialogRef?.close();
    };
  }, []);

  return {
    ref,
    isOpen,
    showDialog,
    closeDialog,
  };
};
