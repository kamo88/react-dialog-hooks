import { expect, test, describe, beforeAll, vi, afterAll } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FC, ReactNode, useCallback } from 'react';
import { Dialog, Props as DialogProps } from './Dialog';
import { useDialog } from './hooks/useDialog';

const handleClickAway = vi.fn();

type DialogTestProps = Omit<
  DialogProps,
  'children' | 'isOpen' | 'onClickAway' | 'data-testid'
> & {
  hasOnClickAway?: boolean;
};

const DialogTest: FC<DialogTestProps> = ({
  shouldFocusTrap,
  initialFocus,
  hasOnClickAway = false,
  ...props
}) => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  const onClickAway = useCallback(() => {
    handleClickAway();
    closeDialog();
  }, [closeDialog]);

  return (
    <div>
      <p data-testid="p">{isOpen ? 'true' : 'false'}</p>
      <button type="button" data-testid="button" onClick={showDialog}>
        showDialog
      </button>
      <Dialog
        ref={ref}
        isOpen={isOpen}
        shouldFocusTrap={shouldFocusTrap}
        initialFocus={initialFocus}
        onClickAway={hasOnClickAway ? onClickAway : undefined}
        data-testid="dialog"
        {...props}
      >
        <div data-testid="dialog-contents">dialog contents</div>
      </Dialog>
    </div>
  );
};

const showOrigin = HTMLDialogElement.prototype.show;
const showModalOrigin = HTMLDialogElement.prototype.showModal;
const closeOrigin = HTMLDialogElement.prototype.close;

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = true;
  });
  HTMLDialogElement.prototype.showModal = vi.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = true;
  });
  HTMLDialogElement.prototype.close = vi.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = false;
  });

  vi.mock('focus-trap-react', () => ({
    default: vi.fn(({ children }: { children: ReactNode }) => (
      <div data-testid="focus-trap">{children}</div>
    )),
  }));
});

afterAll(() => {
  HTMLDialogElement.prototype.show = showOrigin;
  HTMLDialogElement.prototype.showModal = showModalOrigin;
  HTMLDialogElement.prototype.close = closeOrigin;
  vi.clearAllMocks();
});

describe('components/Dialog', () => {
  const { rerender } = render(<DialogTest />);

  describe('shouldFocusTrap: default,initialFocus: default & no onClickAway event = exist focus-trap-react', () => {
    const p = screen.getByTestId<HTMLParagraphElement>('p');
    const button = screen.getByTestId<HTMLButtonElement>('button');
    const dialog = screen.getByTestId<HTMLDialogElement>('dialog');

    test('no display', () => {
      const focusTrap = screen.queryByTestId<HTMLDivElement>('focus-trap');
      expect(focusTrap).toBeNull();
    });

    test('showDialog', () => {
      fireEvent.click(button);
      const focusTrap = screen.queryByTestId<HTMLDivElement>('focus-trap');

      expect(p.textContent).toBe('true');
      expect(dialog.open).toBe(true);
      expect(dialog.firstChild).toEqual(focusTrap);
    });

    test('click focus-trap first child', () => {
      const focusTrap = screen.queryByTestId<HTMLDivElement>('focus-trap');

      fireEvent.click(focusTrap!.firstChild!);

      expect(p.textContent).toBe('true');
      expect(dialog.open).toBe(true);
      expect(dialog.firstChild).toEqual(focusTrap);
      rerender(<DialogTest shouldFocusTrap={false} />);
    });
  });

  describe('shouldFocusTrap: false = no focus-trap-react', () => {
    const p = screen.getByTestId<HTMLParagraphElement>('p');
    const button = screen.getByTestId<HTMLButtonElement>('button');
    const dialog = screen.getByTestId<HTMLDialogElement>('dialog');

    test('showDialog', () => {
      fireEvent.click(button);
      const focusTrap = screen.queryByTestId<HTMLDivElement>('focus-trap');

      const dialogContents =
        screen.getByTestId<HTMLDivElement>('dialog-contents');

      expect(p.textContent).toBe('true');
      expect(dialog.open).toBe(true);
      expect(dialog.firstChild).toEqual(dialogContents);
      expect(focusTrap).toBeNull();
    });
  });
});
