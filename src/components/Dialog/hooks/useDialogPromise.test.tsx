import { expect, test, describe, afterAll, beforeAll, vi } from 'vitest';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { useCallback } from 'react';
import { useDialogPromise, DialogResponse } from './useDialogPromise';

const handleCloseDialogMain = vi.fn();
const handleCloseDialogSub = vi.fn();
const handleCloseDialogAbort = vi.fn();

const ConnectDialog = () => {
  const {
    ref,
    isOpen,
    showDialog,
    closeDialogMain,
    closeDialogSub,
    closeDialogAbort,
  } = useDialogPromise();

  const handleShowDialog = useCallback(async () => {
    const dialogRes = await showDialog();

    switch (dialogRes) {
      case DialogResponse.main:
        handleCloseDialogMain();
        break;
      case DialogResponse.sub:
        handleCloseDialogSub();
        break;
      case DialogResponse.abort:
        handleCloseDialogAbort();
        break;
      default:
        break;
    }
  }, [showDialog]);

  return (
    <div>
      <p data-testid="p">{isOpen ? 'true' : 'false'}</p>
      <button data-testid="button" type="button" onClick={handleShowDialog}>
        showDialog
      </button>
      <dialog
        role="presentation"
        data-testid="dialog"
        ref={ref}
        onClick={closeDialogAbort}
      >
        <button
          data-testid="closeDialogMain"
          type="button"
          onClick={closeDialogMain}
        >
          closeDialogMain
        </button>
        <button
          data-testid="closeDialogSub"
          type="button"
          onClick={closeDialogSub}
        >
          closeDialogSub
        </button>
      </dialog>
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

describe('hooks/useDialogPromise', () => {
  test('return', () => {
    const { result } = renderHook(() => useDialogPromise());
    expect(result.current.ref.current).toBeNull();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.showDialog).toBeTruthy();
    expect(result.current.closeDialogMain).toBeTruthy();
    expect(result.current.closeDialogSub).toBeTruthy();
    expect(result.current.closeDialogAbort).toBeTruthy();
  });

  describe('connect dialog', () => {
    const { unmount } = render(<ConnectDialog />);

    const p = screen.getByTestId<HTMLParagraphElement>('p');
    const button = screen.getByTestId<HTMLButtonElement>('button');
    const dialog = screen.getByTestId<HTMLDialogElement>('dialog');
    const closeMainButton =
      screen.getByTestId<HTMLButtonElement>('closeDialogMain');
    const closeSubButton =
      screen.getByTestId<HTMLButtonElement>('closeDialogSub');

    test('showDialog', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });
    });

    test('closeDialogMain', async () => {
      fireEvent.click(closeMainButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        expect(handleCloseDialogMain).toBeCalledTimes(1);
      });
    });

    test('closeDialogSub', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });
      fireEvent.click(closeSubButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        expect(handleCloseDialogSub).toBeCalledTimes(1);
      });
    });

    test('closeDialogAbort', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });
      fireEvent.click(dialog);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        expect(handleCloseDialogAbort).toBeCalledTimes(1);
      });
    });

    test('showDialog in a row', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
        // call 'showDialog', 'closeDialogSub', 'closeDialogAbort' & this case 1
        expect(HTMLDialogElement.prototype.showModal).toBeCalledTimes(4);
      });
    });

    test('closeDialogMain in a row', async () => {
      fireEvent.click(closeMainButton);
      fireEvent.click(closeMainButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        // call 'closeDialogMain', 'closeDialogSub', 'closeDialogAbort' & this case 1
        expect(HTMLDialogElement.prototype.close).toBeCalledTimes(4);
      });
    });

    test('closeDialogSub in a row', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });

      fireEvent.click(closeSubButton);
      fireEvent.click(closeSubButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        /**
         * call
         * 'closeDialogMain',
         * 'closeDialogSub',
         * 'closeDialogAbort',
         * 'closeDialogMain in a row'
         * this case 1
         */
        expect(HTMLDialogElement.prototype.close).toBeCalledTimes(5);
      });
    });

    test('closeDialogAbort in a row', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });

      fireEvent.click(dialog);
      fireEvent.click(dialog);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
        expect(p.textContent).toBe('false');
        /**
         * call
         * 'closeDialogMain',
         * 'closeDialogSub',
         * 'closeDialogAbort',
         * 'closeDialogMain in a row',
         * 'closeDialogSub in a row',
         * this case 1
         */
        expect(HTMLDialogElement.prototype.close).toBeCalledTimes(6);
      });
    });

    test('unmount', async () => {
      fireEvent.click(button);
      await waitFor(() => {
        expect(dialog.open).toBe(true);
        expect(p.textContent).toBe('true');
      });

      unmount();
      await waitFor(() => {
        /**
         * call
         * 'closeDialogMain',
         * 'closeDialogSub',
         * 'closeDialogAbort',
         * 'closeDialogMain in a row',
         * 'closeDialogSub in a row',
         * 'closeDialogAbort in a row',
         * this case 1
         */
        expect(HTMLDialogElement.prototype.close).toBeCalledTimes(7);
      });
    });
  });
});
