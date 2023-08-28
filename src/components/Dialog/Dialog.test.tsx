import { expect, test, describe, beforeAll, vi, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { FC, useMemo } from 'react';
import { DialogExample as DialogExampleBase } from './Dialog.example';
import { useDialog } from './hooks/useDialog';

type DialogTestProps = {
  portalTargetId?: string;
  className?: string;
  shouldFocusTrap?: boolean;
  initialFocus?: boolean;
};

const DialogTest: FC<DialogTestProps> = ({
  shouldFocusTrap,
  initialFocus,
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

  return (
    <DialogExampleBase
      {...props}
      ref={ref}
      isOpen={isOpen}
      shouldFocusTrap={shouldFocusTrapCal}
      initialFocus={initialFocusCal}
      handleShowDialog={showDialog}
      handleCloseDialogMain={closeDialog}
      handleCloseDialogSub={closeDialog}
      handleClickAway={closeDialog}
    />
  );
};

const showOrigin: typeof HTMLDialogElement.prototype.show =
  HTMLDialogElement.prototype.show;
const showModalOrigin: typeof HTMLDialogElement.prototype.showModal =
  HTMLDialogElement.prototype.showModal;
const closeOrigin: typeof HTMLDialogElement.prototype.close =
  HTMLDialogElement.prototype.close;

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

afterAll(() => {
  HTMLDialogElement.prototype.show = showOrigin;
  HTMLDialogElement.prototype.showModal = showModalOrigin;
  HTMLDialogElement.prototype.close = closeOrigin;
});

describe('components/Dialog', () => {
  render(<DialogTest />);

  test('no dialog', () => {
    const dialog = document.body.querySelector('dialog');
    expect(dialog).toBeTruthy();
    const dialogContents = dialog?.children[0];
    expect(dialogContents).toBeTruthy(); // FIXME can get dialog contents
  });

  //   test('showDialog', async () => {
  //     screen.getByText('showDialog!!!!').click();

  //     const dialog = document.body.querySelector('dialog');
  //     const header = dialog?.children[0].children[0].textContent;
  //     expect(dialog).toBeTruthy();
  //     expect(header).toBe('header');
  //   });
});
