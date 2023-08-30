![NPM](https://img.shields.io/npm/l/%40kamo88%2Freact-dialog-hooks)
![npm (scoped)](https://img.shields.io/npm/v/%40kamo88/react-dialog-hooks)
[![pages-build-deployment](https://github.com/kamo88/react-dialog/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/kamo88/react-dialog/actions/workflows/pages/pages-build-deployment)
[![package-publish-to-npm](https://github.com/kamo88/react-dialog/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/kamo88/react-dialog/actions/workflows/publish.yml)

```
npm i @kamo88/react-dialog-hooks
```

# @kamo88/react-dialog-hooks

This React component & hooks are to be displayed using the \<dialog\> tag.

[storybook](https://kamo88.github.io/react-dialog-hooks/)

## Description

1. Hooks for using the dialog tag.
2. Dialog Component uses [react-use/useLockBodyScroll](https://github.com/streamich/react-use/blob/master/docs/useLockBodyScroll.md) to scroll the body and stop.
3. Dialog Component loops focus to a focusable element in the content using [focus-trap-react](https://github.com/focus-trap/focus-trap-react#readme).
4. Dialog Component can be styled using className. ex) [tailwindcss](https://tailwindcss.com/) , css modules ([@emotion/react](https://www.npmjs.com/package/@emotion/react) is also available)

## Usage

### useDialog

Normal usage.

Of course, you can also create markup using regular dialog tags.

<details>

<summary>example</summary>

```tsx
import { useDialog } from '@kamo88/react-dialog-hooks';

const UseDialogExample = () => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  return (
    <div>
      <button type="button" onClick={showDialog}>
        showDialog
      </button>
      <dialog role="presentation" ref={ref} onClick={closeDialog}>
        <div role="presentation" onClick={(e) => e.stopPropagation()}>
          <div>header</div>
          <div>main</div>
          <div>
            footer
            <button type="button" onClick={closeDialog}>
              closeDialog
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
```

</details>

### useDialogPromise

The use of showDialog's return is Promise.<br>
Wait for user operation in a Promise and handle it with its return ('main', 'sub', 'abort' type string).<br>
※ The same behavior can be implemented in useDialog, even though Promise cannot be used.

<details>

<summary>example</summary>

```tsx
import { useCallback } from 'react';
import { useDialogPromise, DialogResponse } from '@kamo88/react-dialog-hooks';

const UseDialogPromiseExample = () => {
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
      // main processing ex) primary button`s action
      return;
    }

    if (dialogRes === DialogResponse.sub) {
      // sub processing ex) secondary button`s action
      return;
    }

    if (dialogRes === DialogResponse.abort) {
      // abort processing ex) click away`s action & This Component`s unmount
    }
  }, [showDialog]);

  return (
    <div>
      <button type="button" onClick={handleShowDialog}>
        showDialog
      </button>
      <dialog role="presentation" ref={ref} onClick={closeDialogAbort}>
        <div role="presentation" onClick={(e) => e.stopPropagation()}>
          <div>header</div>
          <div>main</div>
          <div>
            footer
            <button type="button" onClick={closeDialogMain}>
              closeDialogMain
            </button>
            <button type="button" onClick={closeDialogSub}>
              closeDialogSub
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
```

### Dialog

<detail>

<summary>example</summary>

```tsx
import { Dialog, useDialog } from '@kamo88/react-dialog-hooks';

const DialogComponentExample = () => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  return (
    <div>
      <button type="button" onClick={showDialog}>
        showDialog
      </button>
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
            <button type="button" onClick={closeDialog}>
              closeDialog main
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
```

</detail>

</details>

## Dialog Component Props

| key             | type                                 | required | default   | description                                                                                               |
| --------------- | ------------------------------------ | -------- | --------- | --------------------------------------------------------------------------------------------------------- |
| ref             | React.RefObject\<HTMLDialogElement\> | ⭕       |           | dialog ref                                                                                                |
| children        | ReactNode                            | ⭕       |           | dialog contents.<br>Basically, include elements that can focus.                                           |
| isOpen          | boolean                              | ⭕       |           | dialog open state                                                                                         |
| shouldFocusTrap | boolean                              |          | true      |                                                                                                           |
| initialFocus    | undefined or false                   |          | undefined | This is based on the [focus-trap-react](https://github.com/focus-trap/focus-trap-react#readme) property.  |
| onClickAway     | () => void                           |          |           | Event when backdrop in Dialog is clicked.<br>This is an alternative to the click event in the dialog tag. |

& \<dialog\> element\`s attributes
