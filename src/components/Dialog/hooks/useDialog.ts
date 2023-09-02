import { useCallback, useEffect, useRef, useState } from 'react';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const showDialog = useCallback(() => {
    if (ref.current?.open) return;
    setIsOpen(true);
    ref.current?.showModal();
    if (ref.current) {
      /**
       * The dialog should appear on the entire screen.
       * The only touchable elements other than the dialog should be the dialog's child elements.
       */
      disableBodyScroll(ref.current, {
        allowTouchMove: () => true,
        /**
         * One accurate determination process.
         * ./getIsDialogChild
         */
        // allowTouchMove: (el) => getIsDialogChild(el, ref.current),
      });
    }
  }, []);

  const closeDialog = useCallback(() => {
    if (!ref.current?.open) return;
    setIsOpen(false);
    ref.current?.close();
    if (ref.current) {
      enableBodyScroll(ref.current);
    }
  }, []);

  useEffect(() => {
    const dialogRef = ref.current;
    return () => {
      setIsOpen(false);
      dialogRef?.close();
      clearAllBodyScrollLocks();
    };
  }, []);

  return {
    ref,
    isOpen,
    showDialog,
    closeDialog,
  };
};
