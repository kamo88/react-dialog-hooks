import { noop } from '@/utils/noop';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export const DialogResponse = {
  main: 'main',
  sub: 'sub',
  abort: 'abort',
} as const;

export type DialogResponseState =
  (typeof DialogResponse)[keyof typeof DialogResponse];

export const useDialogPromise = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const promiseState = useRef(
    new Promise<DialogResponseState>((resolve) => {
      resolve('abort');
    }),
  );

  const resolveState = useRef<((value: DialogResponseState) => void) | null>(
    () => noop,
  );

  const [isOpen, setIsOpen] = useState(false);

  const showDialog = useCallback(() => {
    if (ref.current?.open) {
      return promiseState.current;
    }

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
        // allowTouchMove: (el) => getIsDialogChild(el, ref),
      });
    }
    promiseState.current = new Promise<DialogResponseState>((resolve) => {
      resolveState.current = resolve;
    });
    return promiseState.current;
  }, []);

  const closeDialogMain = useCallback(() => {
    if (!ref.current?.open) return;
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('main');
    if (ref.current) {
      enableBodyScroll(ref.current);
    }
  }, []);

  const closeDialogSub = useCallback(() => {
    if (!ref.current?.open) return;
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('sub');
    if (ref.current) {
      enableBodyScroll(ref.current);
    }
  }, []);

  const closeDialogAbort = useCallback(() => {
    if (!ref.current?.open) return;
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('abort');
    if (ref.current) {
      enableBodyScroll(ref.current);
    }
  }, []);

  useEffect(() => {
    const dialogRef = ref.current;

    return () => {
      setIsOpen(false);
      dialogRef?.close();
      resolveState.current?.('abort');
      clearAllBodyScrollLocks();
    };
  }, []);

  return {
    ref,
    isOpen,
    showDialog,
    closeDialogMain,
    closeDialogSub,
    closeDialogAbort,
  };
};
