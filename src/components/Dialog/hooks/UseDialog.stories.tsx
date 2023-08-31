import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/Button/Button.example';

import { useDialog } from './useDialog';

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
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  const handleShowDialog = useCallback(() => {
    showDialog();
    actionShowDialog('showDialog');
  }, [actionShowDialog, showDialog]);

  const handleCloseDialog = useCallback(() => {
    closeDialog();
    actionCloseDialog('closeDialog');
  }, [actionCloseDialog, closeDialog]);

  useEffect(() => {
    actionCheckDialogOpen(`isOpen: ${isOpen}`);
  }, [actionCheckDialogOpen, isOpen]);

  return (
    <div className={clsx('flex flex-col')}>
      <Button onClick={handleShowDialog}>showDialog</Button>
      <div className={clsx('h-[1000px] w-[500px] outline outline-lime-500')}>
        check scroll lock
      </div>
      <dialog
        role="presentation"
        ref={ref}
        className={clsx('backdrop:bg-gray-900 backdrop:opacity-80')}
        onClick={handleCloseDialog}
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
          <div className={clsx('flex-initial', 'h-max pt-2', 'grid')}>
            <Button onClick={handleCloseDialog}>closeDialog</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const code = `import { useDialog } from '@kamo88/react-dialog-hooks';

const DialogExample = () => {

    const { ref, isOpen, showDialog, closeDialog } = useDialog();

    return (
        <div>
            <button type="button" onClick={showDialog}>showDialog</button>
            <dialog
              role="presentation"
              ref={ref}
              onClick={closeDialog}
            >
                <div role="presentation" onClick={(e) => e.stopPropagation()}>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer
                        <button type="button" onClick={closeDialog}>closeDialog</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
  };
`;

const meta = {
  title: 'hooks/useDialog',
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
