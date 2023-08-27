import type { Meta, StoryObj } from '@storybook/react';
import { FC, useCallback, useMemo } from 'react';

import { useDialogPromise, DialogResponse } from '.';
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
  const {
    ref,
    isOpen,
    showDialog,
    closeDialogMain,
    closeDialogSub,
    closeDialogAbort,
  } = useDialogPromise();

  const shouldFocusTrapCal = useMemo(() => {
    if (shouldFocusTrap) return undefined;
    return false;
  }, [shouldFocusTrap]);

  const initialFocusCal = useMemo(() => {
    if (initialFocus) return undefined;
    return false;
  }, [initialFocus]);

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
    actionCloseDialogMain('closeDialogMain');
  }, [actionCloseDialogMain, closeDialogMain]);

  const handleCloseDialogSub = useCallback(() => {
    closeDialogSub();
    actionCloseDialogSub('closeDialogSub');
  }, [actionCloseDialogSub, closeDialogSub]);

  const handleCloseDialogAway = useCallback(() => {
    closeDialogAbort();
    actionClickAbort('closeDialogAbort');
  }, [actionClickAbort, closeDialogAbort]);

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
        // abort processing ex) click away\`s action & Dialog\`s unmount
      }

    }, [showDialog]);
  
    return (
        <>
            <button type="button" onClick={handleShowDialog}>showDialog</button>
            <Dialog
                portalTargetId={portalTargetId}
                className="backdrop:bg-gray-900 backdrop:opacity-80"
                ref={ref}
                isOpen={isOpen}
                className="dialogClass"
                shouldFocusTrap
                initialFocus={false}
                onClickAway={closeDialogAbort}
            >
                <div>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer 
                        <button type="button" onClick={closeDialogMain}>closeDialog main</button>
                        <button type="button" onClick={closeDialogSub}>closeDialog sub</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
  };
`;

const meta = {
  title: 'components/Dialog/Promise',
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
