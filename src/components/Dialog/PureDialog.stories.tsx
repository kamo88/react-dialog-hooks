import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useEffect } from 'react';

import { Button } from '@/components/Button/Button.example';
import { clsx } from 'clsx';
import { useDialog } from '.';

type Props = {
  actionShowDialog: (value: unknown) => void;
  actionCloseDialogMain: (value: unknown) => void;
  actionCloseDialogSub: (value: unknown) => void;
  actionClickAbort: (value: unknown) => void;
  actionIsOpen: (value: unknown) => void;
};

const DialogExample: FC<Props> = ({
  actionShowDialog,
  actionCloseDialogMain,
  actionCloseDialogSub,
  actionClickAbort,
  actionIsOpen,
}) => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  useEffect(() => {
    actionIsOpen(`isOpen: ${isOpen}`);
  }, [isOpen, actionIsOpen]);

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
    <div>
      <Button onClick={handleShowDialog}>showDialog!!!!</Button>
      <dialog
        role="presentation"
        className={clsx('backdrop:bg-gray-900 backdrop:opacity-80')}
        ref={ref}
        onClick={handleCloseDialogAway}
      >
        <div
          className={clsx(
            'h-80 w-96 p-2',
            'flex flex-col justify-between',
            'divide-y divide-solid',
          )}
        >
          <div className={clsx('flex-initial', 'h-8')}>header</div>
          <div className={clsx('flex-auto', 'overflow-y-scroll')}>
            <div className={clsx('h-[500px]')}>main</div>
          </div>
          <div
            className={clsx(
              'flex-initial',
              'h-max pt-2',
              'flex items-center justify-between',
            )}
          >
            <Button onClick={handleCloseDialogMain}>
              closeDialog main!!!!
            </Button>
            <Button onClick={handleCloseDialogSub}>closeDialog sub!!!!</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const code = `const DialogExample: FC = () => {
    const { ref, isOpen, showDialog, closeDialog } = useDialog();
  
    return (
        <>
          <p>dialog {isOpen ? 'open' : 'close'}</p>
          <button type="button" onClick={showDialog}>showDialog</button>
          <dialog
            role="presentation"
            ref={ref}
            onClick={closeDialog}
          >
            <div>
              <div>header</div>
              <div>main</div>
              <div>
                footer
                <Button onClick={closeDialog}>
                  closeDialog main!!!!
                </Button>
                <Button onClick={closeDialog}>closeDialog sub!!!!</Button>
              </div>
            </div>
          </dialog>
        </>
    );
  };
`;

const meta = {
  title: 'pure dialog',
  component: DialogExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      source: {
        code,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    actionShowDialog: {
      action: 'actionShowDialog',
      description: `**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `,
    },
    actionCloseDialogMain: {
      action: 'actionCloseDialogMain',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `,
    },
    actionCloseDialogSub: {
      action: 'actionCloseDialogSub',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `,
    },
    actionClickAbort: {
      action: 'actionClickAbort',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `,
    },
    actionIsOpen: {
      action: 'actionIsOpen',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    Check isOpen state.<br>
    See 'show code' for actual usage in this page.
  `,
    },
  },
} satisfies Meta<typeof DialogExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dialog: Story = {};
