import { expect, test, describe, beforeAll, vi, afterAll } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { noop } from '@/utils/noop';
import {
  DialogExample as DialogExampleBase,
  Props as DialogProps,
} from './Dialog.example';
import { useDialog } from './hooks/useDialog';

type DialogTestProps = Omit<
  DialogProps,
  'isOpen' | 'handleShowDialog' | 'initialFocus'
> & {
  initialFocus: boolean;
  handleClickAway: () => void;
};

const DialogTest: FC<DialogTestProps> = ({
  shouldFocusTrap,
  initialFocus,
  handleCloseDialogMain,
  handleCloseDialogSub,
  handleClickAway,
  ...props
}) => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  const shouldFocusTrapCal = useMemo(() => {
    if (shouldFocusTrap) return undefined;
    return false;
  }, [shouldFocusTrap]);

  const initialFocusCal = useMemo(() => {
    if (initialFocus) return undefined;
    return false;
  }, [initialFocus]);

  const closeMain = useCallback(() => {
    handleCloseDialogMain();
    closeDialog();
  }, [closeDialog, handleCloseDialogMain]);

  const closeSub = useCallback(() => {
    handleCloseDialogSub();
    closeDialog();
  }, [closeDialog, handleCloseDialogSub]);

  const clickAway = useCallback(() => {
    handleClickAway();
    closeDialog();
  }, [closeDialog, handleClickAway]);

  return (
    <DialogExampleBase
      {...props}
      ref={ref}
      isOpen={isOpen}
      shouldFocusTrap={shouldFocusTrapCal}
      initialFocus={initialFocusCal}
      handleShowDialog={showDialog}
      handleCloseDialogMain={closeMain}
      handleCloseDialogSub={closeSub}
      handleClickAway={clickAway}
    />
  );
};

let showOrigin: typeof HTMLDialogElement.prototype.show = noop;
let showModalOrigin: typeof HTMLDialogElement.prototype.showModal = noop;
let closeOrigin: typeof HTMLDialogElement.prototype.close = noop;

beforeAll(() => {
  showOrigin = HTMLDialogElement.prototype.show;
  showModalOrigin = HTMLDialogElement.prototype.showModal;
  closeOrigin = HTMLDialogElement.prototype.close;
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
    default: vi.fn(({ children }: { children: ReactNode }) => children),
  }));
});

afterAll(() => {
  HTMLDialogElement.prototype.show = showOrigin;
  HTMLDialogElement.prototype.showModal = showModalOrigin;
  HTMLDialogElement.prototype.close = closeOrigin;
  vi.clearAllMocks();
});

const handleCloseDialogMain = vi.fn();
const handleCloseDialogSub = vi.fn();
const handleClickAway = vi.fn();

describe('components/Dialog', () => {
  const { rerender } = render(
    <DialogTest
      data-testid="test-dialog"
      shouldFocusTrap
      initialFocus
      handleCloseDialogMain={handleCloseDialogMain}
      handleCloseDialogSub={handleCloseDialogSub}
      handleClickAway={handleClickAway}
    />,
  );

  const showDialogButton =
    screen.getByText<HTMLButtonElement>('showDialog!!!!');

  test('close', () => {
    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    expect(dialog.open).toBe(false);
  });

  test('showDialog', async () => {
    fireEvent.click(showDialogButton);

    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    expect(dialog.open).toBe(true);
  });

  test('close main', async () => {
    const mainButton = screen.getByText<HTMLButtonElement>(
      'closeDialog main!!!!',
    );
    fireEvent.click(mainButton);
    expect(handleCloseDialogMain).toBeCalledTimes(1);

    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    expect(dialog.open).toBe(false);
  });

  test('close sub', async () => {
    fireEvent.click(showDialogButton);
    const subButton = screen.getByText<HTMLButtonElement>(
      'closeDialog sub!!!!',
    );
    fireEvent.click(subButton);
    expect(handleCloseDialogSub).toBeCalledTimes(1);

    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    expect(dialog.open).toBe(false);
  });

  test('click away', async () => {
    fireEvent.click(showDialogButton);
    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    fireEvent.click(dialog);
    expect(handleClickAway).toBeCalledTimes(1);
    expect(dialog.open).toBe(false);
  });

  test('shouldFocusTrap: false (focus-trap-react is mock)', () => {
    rerender(
      <DialogTest
        data-testid="test-dialog"
        shouldFocusTrap={false}
        initialFocus={false}
        handleCloseDialogMain={handleCloseDialogMain}
        handleCloseDialogSub={handleCloseDialogSub}
        handleClickAway={handleClickAway}
      />,
    );

    const dialog = screen.getByTestId<HTMLDialogElement>('test-dialog');
    expect(dialog.children).toHaveLength(1);
  });
});
