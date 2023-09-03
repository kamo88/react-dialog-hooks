![license](https://img.shields.io/npm/l/%40kamo88%2Freact-dialog-hooks)
![npm (scoped)](https://img.shields.io/npm/v/%40kamo88/react-dialog-hooks)
[![codecov](https://codecov.io/gh/kamo88/react-dialog-hooks/graph/badge.svg?token=W77V28C2TY)](https://codecov.io/gh/kamo88/react-dialog-hooks)
[![pages-build-deployment](https://github.com/kamo88/react-dialog-hooks/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/kamo88/react-dialog-hooks/actions/workflows/pages/pages-build-deployment)

```
npm i @kamo88/react-dialog-hooks
```

or

Please choose your @version

```
<script src="https://unpkg.com/@kamo88/react-dialog-hooks@0.9.1/dist/umd/index.js" crossorigin></script>
```

<details>

<summary>from CDN</summary>

```html
<!doctype html>
<html>
  <head>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/@kamo88/react-dialog-hooks@0.9.1/dist/umd/index.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Hello() {
        const { ref, isOpen, showDialog, closeDialog } =
          Kamo88Dialog.useDialog();
        return (
          <div>
            <button type="button" onClick={showDialog}>
              showDialog
            </button>
            <Kamo88Dialog.Dialog
              ref={ref}
              isOpen={isOpen}
              onClickAway={closeDialog}
            >
              <div>
                <div>header</div>
                <div>Hello World!</div>
                <div>
                  <button type="button" onClick={closeDialog}>
                    closeDialog main
                  </button>
                  <button type="button" onClick={closeDialog}>
                    closeDialog sub
                  </button>
                </div>
              </div>
            </Kamo88Dialog.Dialog>
          </div>
        );
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />);
    </script>
  </body>
</html>
```

</details>

# @kamo88/react-dialog-hooks

This React component & hooks are to be displayed using the \<dialog\> tag.

[storybook](https://kamo88.github.io/react-dialog-hooks/)

## Description

1. Hooks for using the dialog tag.
2. Using [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) to stop the body scrolling.
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

</details>

### Dialog

<details>

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
