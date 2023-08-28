import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/Button/Button.example';
import { Dialog, Props as DialogProps } from '.';

export type Props = Omit<
  DialogProps,
  'children' | 'shouldFocusTrap' | 'initialFocus' | 'onClickAway'
> & {
  isOpen: boolean;
  className?: string;
  shouldFocusTrap: boolean | undefined;
  initialFocus: false | undefined;
  handleShowDialog: () => void;
  handleCloseDialogMain: () => void;
  handleCloseDialogSub: () => void;
  handleClickAway?: () => void;
};

export const DialogExample = forwardRef<HTMLDialogElement, Props>(
  (
    {
      isOpen,
      className,
      shouldFocusTrap,
      initialFocus,
      handleShowDialog,
      handleCloseDialogMain,
      handleCloseDialogSub,
      handleClickAway,
      ...dialogProps
    },
    ref,
  ) => (
    <div>
      <Button onClick={handleShowDialog}>showDialog!!!!</Button>
      <Dialog
        className={clsx('backdrop:bg-gray-900 backdrop:opacity-80', className)}
        shouldFocusTrap={shouldFocusTrap}
        initialFocus={initialFocus}
        ref={ref}
        isOpen={isOpen}
        onClickAway={handleClickAway}
        {...dialogProps}
      >
        <div
          className={clsx(
            'h-80 w-96 p-2',
            'flex flex-col justify-between',
            'divide-y divide-solid',
          )}
        >
          <div className={clsx('flex-initial', 'h-8')}>header</div>
          <div className={clsx('flex-auto', 'overflow-y-scroll')}>
            <div className={clsx('h-[500px]')}>main</div>
          </div>
          <div
            className={clsx(
              'flex-initial',
              'h-max pt-2',
              'flex items-center justify-between',
            )}
          >
            <Button onClick={handleCloseDialogMain}>
              closeDialog main!!!!
            </Button>
            <Button onClick={handleCloseDialogSub}>closeDialog sub!!!!</Button>
          </div>
        </div>
      </Dialog>
    </div>
  ),
);
