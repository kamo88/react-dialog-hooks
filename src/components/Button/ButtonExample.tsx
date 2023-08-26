import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

export type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, onClick }) => (
  <button
    className={clsx(
      'bg-violet-500',
      'hover:bg-violet-600',
      'focus:outline-none focus:ring focus:ring-violet-300',
      'active:bg-violet-700',
    )}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
