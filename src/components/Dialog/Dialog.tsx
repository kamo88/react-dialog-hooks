import {
  ReactNode,
  forwardRef,
  memo,
  useMemo,
  HtmlHTMLAttributes,
} from 'react';
import { useLockBodyScroll } from 'react-use';
import { DialogContainer } from './DialogContainer';

export type Props = Omit<
  HtmlHTMLAttributes<HTMLDialogElement>,
  'className' | 'children'
> & {
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
      children,
      isOpen,
      shouldFocusTrap = true,
      onClickAway,
      initialFocus,
      ...dialogProps
    },
    ref,
  ) => {
    const clickOutsideDeactivates = useMemo(
      () => Boolean(onClickAway),
      [onClickAway],
    );

    useLockBodyScroll(isOpen);

    return (
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
      </dialog>
    );
  },
);

export const Dialog = memo(DialogBase);
