[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![npm version](https://badge.fury.io/js/@kamo88%2Freact-dialog.svg?v=0.9.4)](https://badge.fury.io/js/@kamo88%2Freact-dialog)
[![pages-build-deployment](https://github.com/kamo88/react-dialog/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/kamo88/react-dialog/actions/workflows/pages/pages-build-deployment)
[![package-publish-to-npm](https://github.com/kamo88/react-dialog/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/kamo88/react-dialog/actions/workflows/publish.yml)

```
npm i @kamo88/react-dialog-hooks
```

# @kamo88/react-dialog

This React component & hooks are to be displayed using the \<dialog\> tag.

[storybook](https://kamo88.github.io/react-dialog-hooks/)

## Description

1. Stop body scrolling when displaying dialogs using [react-use/useLockBodyScroll](https://github.com/streamich/react-use/blob/master/docs/useLockBodyScroll.md).
2. Loop the focus only within the content in the dialog using [focus-trap-react](https://github.com/focus-trap/focus-trap-react#readme).
3. As we are using createPotal functionality of react-dom, please set portalTargetId ("root-modal" by default) in the props of the Dialog component.
4. Set the style of the dialog backdrop using the className of the props. ex) [tailwindcss](https://tailwindcss.com/) , css modules ([@emotion/react](https://www.npmjs.com/package/@emotion/react) is also available)

## Usage

### useDialog

Normal usage.

<details>

<summary>example</summary>

```tsx
import { Dialog, useDialog } from '@kamo88/react-dialog-hooks';

const ShowDialogComponent = () => {
  const { ref, isOpen, showDialog, closeDialog } = useDialog();

  return (
    <>
      <button type="button" onClick={showDialog}>
        showDialog
      </button>
      <Dialog ref={ref} isOpen={isOpen} onClickAway={closeDialog}>
        <div>
          <div>header</div>
          <div>main</div>
          <div>
            footer
            <button type="button" onClick={closeDialog}>
              closeDialog
            </button>
          </div>
        </div>
      </Dialog>
    </>
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
import {
  Dialog,
  useDialogPromise,
  DialogResponse,
} from '@kamo88/react-dialog-hooks';

const ShowPromiseDialogComponent = () => {
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
      <button type="button" onClick={handleShowDialog}>
        showDialog
      </button>
      <Dialog ref={ref} isOpen={isOpen} onClickAway={closeDialogAbort}>
        <div>
          <div>header</div>
          <div>main</div>
          <div>
            footer
            <button type="button" onClick={closeDialogMain}>
              closeDialog main
            </button>
            <button type="button" onClick={closeDialogSub}>
              closeDialog sub
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
```

</details>

## Dialog Props

| key             | type                                 | required | default    | description                                                                                                                                             |
| --------------- | ------------------------------------ | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ref             | React.RefObject\<HTMLDialogElement\> | ⭕       |            | dialog ref                                                                                                                                              |
| portalTargetId  | string                               |          | root-modal | ReactDom.createPortal\`s target element id                                                                                                              |
| children        | ReactNode                            | ⭕       |            | dialog contents                                                                                                                                         |
| isOpen          | boolean                              | ⭕       |            | dialog open state                                                                                                                                       |
| shouldFocusTrap | boolean                              |          | true       |                                                                                                                                                         |
| initialFocus    | undefined or false                   |          | undefined  | This is based on the [focus-trap-react](https://github.com/focus-trap/focus-trap-react#readme) property.                                                |
| className       | string                               |          |            | This is \<dialog\> element\`s className.<br> Please use CSS framework. ex) tailwindcss. <br> As a side note, you can also use css props (@emotion/css). |
| onClickAway     | () => void                           |          |            | Event when backdrop in Dialog is clicked.                                                                                                               |
