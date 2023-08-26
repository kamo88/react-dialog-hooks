import { forwardRef } from 'react';
import { Dialog } from '.';

export type Props = {
  portalTargetId?: string;
  isOpen: boolean;
  className?: string;
  shouldFocusTrap: boolean | undefined;
  initialFocus: false | undefined;
  handleShowDialog: () => void;
  handleCloseDialogMain: () => void;
  handleCloseDialogSub: () => void;
  handleClickAway?: () => void;
};

export const DialogExampleBase = forwardRef<HTMLDialogElement, Props>(
  (
    {
      portalTargetId,
      isOpen,
      className,
      shouldFocusTrap,
      initialFocus,
      handleShowDialog,
      handleCloseDialogMain,
      handleCloseDialogSub,
      handleClickAway,
    },
    ref,
  ) => (
    <div>
      <button type="button" onClick={handleShowDialog}>
        showDialog!!!!
      </button>
      <Dialog
        portalTargetId={portalTargetId}
        className={className}
        shouldFocusTrap={shouldFocusTrap}
        initialFocus={initialFocus}
        ref={ref}
        isOpen={isOpen}
        onClickAway={handleClickAway}
      >
        <div>
          <div>header</div>
          <div>main</div>
          <div>
            <button type="button" onClick={handleCloseDialogMain}>
              closeDialog main!!!!
            </button>
            <button type="button" onClick={handleCloseDialogSub}>
              closeDialog sub!!!!
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  ),
);
