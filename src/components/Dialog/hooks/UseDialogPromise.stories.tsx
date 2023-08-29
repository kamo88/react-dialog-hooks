import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/Button/Button.example';

import { useDialogPromise, DialogResponse } from './useDialogPromise';

type Props = {
  actionShowDialog: (value: unknown) => void;
  actionCloseDialog: (value: unknown) => void;
  actionCheckDialogOpen: (value: unknown) => void;
};

const DialogExample: FC<Props> = ({
  actionShowDialog,
  actionCloseDialog,
  actionCheckDialogOpen,
}) => {
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
    let value = 'no dialog response';
    switch (dialogRes) {
      case DialogResponse.main:
        value = 'promise dialog response: main';
        break;
      case DialogResponse.sub:
        value = 'promise dialog response: sub';
        break;
      case DialogResponse.abort:
        value = 'promise dialog response: abort';
        break;
      default:
        break;
    }
    actionShowDialog(value);
  }, [actionShowDialog, showDialog]);

  const handleCloseDialogMain = useCallback(() => {
    closeDialogMain();
    actionCloseDialog('closeDialogMain');
  }, [actionCloseDialog, closeDialogMain]);

  const handleCloseDialogSub = useCallback(() => {
    closeDialogSub();
    actionCloseDialog('closeDialogSub');
  }, [actionCloseDialog, closeDialogSub]);

  const handleCloseDialogAbort = useCallback(() => {
    closeDialogAbort();
    actionCloseDialog('closeDialogAbort');
  }, [actionCloseDialog, closeDialogAbort]);

  useEffect(() => {
    actionCheckDialogOpen(`isOpen: ${isOpen}`);
  }, [actionCheckDialogOpen, isOpen]);

  return (
    <div>
      <Button onClick={handleShowDialog}>showDialog</Button>
      <dialog
        role="presentation"
        ref={ref}
        className={clsx('backdrop:bg-gray-900 backdrop:opacity-80')}
        onClick={handleCloseDialogAbort}
      >
        <div
          className={clsx(
            'h-80 w-96 p-2',
            'flex flex-col justify-between',
            'divide-y divide-solid',
          )}
          role="presentation"
          onClick={(e) => e.stopPropagation()}
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
            <Button onClick={handleCloseDialogMain}>closeDialogMain</Button>
            <Button onClick={handleCloseDialogSub}>closeDialogSub</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const code = `import { useDialogPromise, DialogResponse } from '@kamo88/react-dialog-hooks';

const DialogExample = () => {

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
      if (dialogRes === DialogResponse.main) {
        // main processing ex) primary button\`s action
        return;
      }
  
      if (dialogRes === DialogResponse.sub) {
        // sub processing ex) secondary button\`s action
        return;
      }
  
      if (dialogRes === DialogResponse.abort) {
        // abort processing ex) click away\`s action & This Component\`s unmount
      }
    }, [showDialog]);

    return (
        <div>
            <button type="button" onClick={handleShowDialog}>showDialog</button>
            <dialog
              role="presentation"
              ref={ref}
              onClick={closeDialogAbort}
            >
                <div role="presentation" onClick={(e) => e.stopPropagation()}>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer
                        <button type="button" onClick={closeDialogMain}>closeDialogMain</button>
                        <button type="button" onClick={closeDialogSub}>closeDialogSub</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
  };
`;

const meta = {
  title: 'hooks/useDialogPromise',
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
      action: 'showDialog',
      description: `**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `,
    },
    actionCloseDialog: {
      action: 'closeDialog',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `,
    },
    actionCheckDialogOpen: {
      action: 'check isOpen',
      description: `**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `,
    },
  },
} satisfies Meta<typeof DialogExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
