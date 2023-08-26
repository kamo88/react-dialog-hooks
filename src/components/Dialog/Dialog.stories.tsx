import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useMemo } from 'react';

import { useDialog } from '.';
import { DialogExampleBase } from './DialogExampleBase';
import type { Props as DialogExampleBaseProps } from './DialogExampleBase';

type Props = Pick<DialogExampleBaseProps, 'portalTargetId' | 'className'> & {
  shouldFocusTrap: boolean;
  initialFocus: boolean;
  actionShowDialog: (value: unknown) => void;
  actionCloseDialogMain: (value: unknown) => void;
  actionCloseDialogSub: (value: unknown) => void;
  actionClickAbort: (value: unknown) => void;
};

const DialogExample: FC<Props> = ({
  portalTargetId,
  className,
  shouldFocusTrap,
  initialFocus,
  actionShowDialog,
  actionCloseDialogMain,
  actionCloseDialogSub,
  actionClickAbort,
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

  const handleShowDialog = useCallback(() => {
    showDialog();
    actionShowDialog('showDialog');
  }, [actionShowDialog, showDialog]);

  const handleCloseDialogMain = useCallback(() => {
    closeDialog();
    actionCloseDialogMain('closeDialog');
  }, [actionCloseDialogMain, closeDialog]);

  const handleCloseDialogSub = useCallback(() => {
    closeDialog();
    actionCloseDialogSub('closeDialog');
  }, [actionCloseDialogSub, closeDialog]);

  const handleCloseDialogAway = useCallback(() => {
    closeDialog();
    actionClickAbort('closeDialog');
  }, [actionClickAbort, closeDialog]);

  return (
    <DialogExampleBase
      portalTargetId={portalTargetId}
      className={className}
      ref={ref}
      isOpen={isOpen}
      shouldFocusTrap={shouldFocusTrapCal}
      initialFocus={initialFocusCal}
      handleShowDialog={handleShowDialog}
      handleCloseDialogMain={handleCloseDialogMain}
      handleCloseDialogSub={handleCloseDialogSub}
      handleClickAway={handleCloseDialogAway}
    />
  );
};

const meta = {
  title: 'components/Dialog',
  component: DialogExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    portalTargetId: { control: 'text' },
    className: { control: 'text' },
    shouldFocusTrap: { control: 'boolean' },
    initialFocus: { control: 'boolean' },
    actionShowDialog: { action: 'actionShowDialog' },
    actionCloseDialogMain: { action: 'actionCloseDialogMain' },
    actionCloseDialogSub: { action: 'actionCloseDialogSub' },
    actionClickAbort: { action: 'actionClickAbort' },
  },
} satisfies Meta<typeof DialogExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  args: {
    shouldFocusTrap: true,
    initialFocus: true,
  },
};
