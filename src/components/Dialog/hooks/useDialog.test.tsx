import { expect, test, describe, afterAll, beforeAll, vi } from 'vitest';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useDialog } from './useDialog';

const ConnectDialog = () => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  return (
    <div>
      <p data-testId="p">{isOpen ? 'true' : 'false'}</p>
      <button data-testId="button" type="button" onClick={showDialog}>
        showDialog
      </button>
      <dialog
        role="presentation"
        data-testId="dialog"
        ref={ref}
        onClick={closeDialog}
      />
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
});

afterAll(() => {
  HTMLDialogElement.prototype.show = showOrigin;
  HTMLDialogElement.prototype.showModal = showModalOrigin;
  HTMLDialogElement.prototype.close = closeOrigin;
  vi.clearAllMocks();
});

describe('hooks/useDialog', () => {
  test('return', () => {
    const { result } = renderHook(useDialog);

    expect(result.current.ref.current).toBeNull();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.showDialog).toBeTruthy();
    expect(result.current.closeDialog).toBeTruthy();
  });

  describe('connect dialog', () => {
    const { unmount } = render(<ConnectDialog />);

    const p = screen.getByTestId<HTMLParagraphElement>('p');
    const button = screen.getByTestId<HTMLButtonElement>('button');
    const dialog = screen.getByTestId<HTMLDialogElement>('dialog');

    test('showDialog', () => {
      fireEvent.click(button);

      expect(dialog.open).toBe(true);
      expect(p.textContent).toBe('true');
    });

    test('closeDialog', () => {
      fireEvent.click(dialog);

      expect(dialog.open).toBe(false);
      expect(p.textContent).toBe('false');
    });

    test('showDialog in a row', () => {
      fireEvent.click(button);

      expect(dialog.open).toBe(true);

      fireEvent.click(button);

      expect(dialog.open).toBe(true);

      // call 'showDialog' & this case 1
      expect(HTMLDialogElement.prototype.showModal).toBeCalledTimes(2);
      expect(dialog.open).toBe(true);
    });

    test('closeDialog in a row', () => {
      fireEvent.click(dialog);

      expect(dialog.open).toBe(false);

      fireEvent.click(dialog);

      expect(dialog.open).toBe(false);

      // call 'closeDialog' & this case 1
      expect(HTMLDialogElement.prototype.close).toBeCalledTimes(2);
    });

    test('unmount', () => {
      unmount();

      // call 'closeDialog' & 'closeDialog in a row' & this case 1
      expect(HTMLDialogElement.prototype.close).toBeCalledTimes(3);
    });
  });
});
