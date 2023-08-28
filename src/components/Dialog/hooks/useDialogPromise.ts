import { noop } from '@/utils/noop';
import { useCallback, useEffect, useRef, useState } from 'react';

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
    resolveState.current?.('abort');
    setIsOpen(true);
    ref.current?.showModal();
    promiseState.current = new Promise<DialogResponseState>((resolve) => {
      resolveState.current = resolve;
    });
    return promiseState.current;
  }, []);

  const closeDialogMain = useCallback(() => {
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('main');
  }, []);

  const closeDialogSub = useCallback(() => {
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('sub');
  }, []);

  const closeDialogAbort = useCallback(() => {
    setIsOpen(false);
    ref.current?.close();
    resolveState.current?.('abort');
  }, []);

  useEffect(() => () => closeDialogAbort(), [closeDialogAbort]);

  return {
    ref,
    isOpen,
    showDialog,
    closeDialogMain,
    closeDialogSub,
    closeDialogAbort,
  };
};
