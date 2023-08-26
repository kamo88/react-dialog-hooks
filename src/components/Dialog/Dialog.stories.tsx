import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useMemo } from 'react';

import { useDialog } from '.';
import { DialogExample as DialogExampleBase } from './Dialog.example';
import type { Props as DialogExampleBaseProps } from './Dialog.example';

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

const code = `const DialogExample: FC = () => {
    const { ref, isOpen, showDialog, closeDialog } = useDialog();
  
    return (
        <>
            <button type="button" onClick={showDialog}>showDialog</button>
            <Dialog
                portalTargetId={portalTargetId}
                className={className}
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
                        <button type="button" onClick={closeDialog}>closeDialog</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
  };
`;

const meta = {
  title: 'components/Dialog/Default',
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
    portalTargetId: {
      control: 'text',
      description: `Dialog Component Props<br>
        This is createPortal\`s target element id.<br>
        not required<br>
        default: "root-modal"`,
    },
    className: {
      control: 'text',
      description: `Dialog Component Props<br>
    This is <dialog> element\`s className.
    Please use CSS framework. ex) tailwindcss.<br>
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
