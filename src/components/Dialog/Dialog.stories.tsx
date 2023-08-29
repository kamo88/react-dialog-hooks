import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useMemo } from 'react';

import { Button } from '@/components/Button/Button.example';
import { clsx } from 'clsx';
import { useDialog } from '.';
import { Dialog } from './Dialog';
import type { Props as DialogProps } from './Dialog';

type Props = Pick<
  DialogProps,
  'className' | 'shouldFocusTrap' | 'initialFocus'
> & {
  actionShowDialog: (value: unknown) => void;
  actionCloseDialog: (value: unknown) => void;
};

const DialogExample: FC<Props> = ({
  className,
  shouldFocusTrap,
  initialFocus,
  actionShowDialog,
  actionCloseDialog,
}) => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  const initialFocusCal = useMemo(() => {
    if (initialFocus) return undefined;
    return initialFocus;
  }, [initialFocus]);

  const handleShowDialog = useCallback(() => {
    showDialog();
    actionShowDialog('showDialog');
  }, [actionShowDialog, showDialog]);

  const handleCloseDialogMain = useCallback(() => {
    closeDialog();
    actionCloseDialog('closeDialog click main');
  }, [actionCloseDialog, closeDialog]);

  const handleCloseDialogSub = useCallback(() => {
    closeDialog();
    actionCloseDialog('closeDialog click sub');
  }, [actionCloseDialog, closeDialog]);

  const handleCloseDialogAway = useCallback(() => {
    closeDialog();
    actionCloseDialog('closeDialog click away');
  }, [actionCloseDialog, closeDialog]);

  return (
    <div>
      <Button onClick={handleShowDialog}>showDialog</Button>
      <Dialog
        className={clsx('backdrop:bg-gray-900 backdrop:opacity-80', className)}
        ref={ref}
        isOpen={isOpen}
        shouldFocusTrap={shouldFocusTrap}
        initialFocus={initialFocusCal}
        onClickAway={handleCloseDialogAway}
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
      </Dialog>
    </div>
  );
};

const code = `import { Dialog, useDialog } from '@kamo88/react-dialog-hooks';

const DialogExample = () => {

    const { ref, isOpen, showDialog, closeDialog } = useDialog();
  
    return (
        <div>
            <button type="button" onClick={showDialog}>showDialog</button>
            <Dialog
                className="backdrop:bg-gray-900 backdrop:opacity-80"
                ref={ref}
                isOpen={isOpen}
                className="dialogClass"
                shouldFocusTrap
                initialFocus={false}
                onClickAway={closeDialog}
            >
                <div>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer 
                        <button type="button" onClick={closeDialog}>closeDialog main</button>
                        <button type="button" onClick={closeDialog}>closeDialog sub</button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
  };
`;

const meta = {
  title: 'components/Dialog',
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
    className: {
      control: 'text',
      description: `Dialog Component Props<br>
    This is <dialog> element\`s className.
    Please use CSS framework. code ex) tailwindcss.<br>
    not required<br>
    As a side note, you can also use css props (@emotion/css).
    `,
    },
    shouldFocusTrap: {
      control: 'boolean',
      description: `**Dialog Component Props**<br>
    not required<br>
    This will be props whether to use focus-trap or not.<br>
    When using this function, please put focusable elements in the children.<br>
    default: true
    `,
    },
    initialFocus: {
      control: 'boolean',
      description: `**Dialog Component Props**<br>
    not required<br>
    This is based on the focus-trap property.<br>
    type: undefined | false<br>
    default: undefined ≒ auto focus
    `,
    },
    actionShowDialog: {
      action: 'actionShowDialog',
      description: `**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `,
    },
    actionCloseDialog: {
      action: 'actionCloseDialog',
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
