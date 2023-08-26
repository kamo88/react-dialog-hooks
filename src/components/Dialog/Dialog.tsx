import { ReactNode, forwardRef, memo, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import { DialogContainer } from './DialogContainer';

export type Props = {
  /**
   * createPortal target element id
   * default: #root-modal
   */
  portalTargetId?: string;
  children: ReactNode;
  isOpen: boolean;
  /**
   * focus trap in dialog
   * default: true
   */
  shouldFocusTrap?: boolean;
  onClickAway?: () => void;
  initialFocus?: false;
  className?: string;
};

const DialogBase = forwardRef<HTMLDialogElement, Props>(
  (
    {
      portalTargetId = 'root-modal',
      children,
      isOpen,
      shouldFocusTrap = true,
      onClickAway,
      initialFocus,
      ...dialogProps
    },
    ref,
  ) => {
    const target = useRef(document.getElementById(portalTargetId));

    const clickOutsideDeactivates = useMemo(
      () => Boolean(onClickAway),
      [onClickAway],
    );

    useLockBodyScroll(isOpen);

    if (!target.current) return null;

    return createPortal(
      <dialog
        role="presentation"
        ref={ref}
        {...dialogProps}
        onClick={onClickAway}
      >
        {shouldFocusTrap ? (
          <DialogContainer
            isOpen={isOpen}
            clickOutsideDeactivates={clickOutsideDeactivates}
            initialFocus={initialFocus}
          >
            {children}
          </DialogContainer>
        ) : (
          children
        )}
      </dialog>,
      target.current,
    );
  },
);

export const Dialog = memo(DialogBase);
