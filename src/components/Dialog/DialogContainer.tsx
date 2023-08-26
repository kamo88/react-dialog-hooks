import { FC, ReactNode } from 'react';
import FocusTrap from 'focus-trap-react';

export type Props = {
  children: ReactNode;
  isOpen: boolean;
  clickOutsideDeactivates: boolean;
  initialFocus?: false;
};

export const DialogContainer: FC<Props> = ({
  children,
  isOpen,
  clickOutsideDeactivates,
  initialFocus,
}) => {
  if (!isOpen) return null;

  return (
    <FocusTrap
      focusTrapOptions={{
        clickOutsideDeactivates,
        initialFocus,
      }}
    >
      <div role="presentation" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </FocusTrap>
  );
};
