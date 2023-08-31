import {
  ReactNode,
  forwardRef,
  memo,
  useMemo,
  HtmlHTMLAttributes,
  useEffect,
} from 'react';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { DialogContainer } from './DialogContainer';

export type Props = Omit<
  HtmlHTMLAttributes<HTMLDialogElement>,
  'children' | 'onClick'
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

    useEffect(
      () => () => {
        clearAllBodyScrollLocks();
      },
      [ref],
    );

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
