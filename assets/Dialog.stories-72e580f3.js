import{j as y}from"./Dialog-b006cbce.js";import{r as s}from"./index-61bf1805.js";import{u as T}from"./useDialog-6a2956c7.js";import{D as x}from"./Dialog.example-8ed32d47.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const F=({className:g,shouldFocusTrap:a,initialFocus:i,actionShowDialog:t,actionCloseDialogMain:r,actionCloseDialogSub:n,actionClickAbort:l})=>{const{ref:b,isOpen:m,showDialog:c,closeDialog:o}=T(),h=s.useMemo(()=>{if(!a)return!1},[a]),D=s.useMemo(()=>{if(!i)return!1},[i]),f=s.useCallback(()=>{c(),t("showDialog")},[t,c]),C=s.useCallback(()=>{o(),r("closeDialog")},[r,o]),w=s.useCallback(()=>{o(),n("closeDialog")},[n,o]),k=s.useCallback(()=>{o(),l("closeDialog")},[l,o]);return y.jsx(x,{className:g,ref:b,isOpen:m,shouldFocusTrap:h,initialFocus:D,handleShowDialog:f,handleCloseDialogMain:C,handleCloseDialogSub:w,handleClickAway:k})},S=`const DialogExample: FC = () => {
    const { ref, isOpen, showDialog, closeDialog } = useDialog();
  
    return (
        <>
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
                        <button type="button" onClick={closeDialog}>closeDialog</button>
                    </div>
                </div>
            </Dialog>
        </>
    );
  };
`,M={title:"components/Dialog/useDialog",component:F,parameters:{layout:"centered",docs:{source:{code:S}}},tags:["autodocs"],argTypes:{className:{control:"text",description:`Dialog Component Props<br>
    This is <dialog> element\`s className.
    Please use CSS framework. code ex) tailwindcss.<br>
    not required<br>
    As a side note, you can also use css props (@emotion/css).
    `},shouldFocusTrap:{control:"boolean",description:`**Dialog Component Props**<br>
    not required<br>
    This will be props whether to use focus-trap or not.<br>
    When using this function, please put focusable elements in the children.<br>
    default: true
    `},initialFocus:{control:"boolean",description:`**Dialog Component Props**<br>
    not required<br>
    This is based on the focus-trap property.<br>
    type: undefined | false<br>
    default: undefined ≒ auto focus
    `},actionShowDialog:{action:"actionShowDialog",description:`**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `},actionCloseDialogMain:{action:"actionCloseDialogMain",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionCloseDialogSub:{action:"actionCloseDialogSub",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionClickAbort:{action:"actionClickAbort",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `}}},e={args:{shouldFocusTrap:!0,initialFocus:!0}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    shouldFocusTrap: true,
    initialFocus: true
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Dialog"];export{e as Dialog,j as __namedExportsOrder,M as default};
//# sourceMappingURL=Dialog.stories-72e580f3.js.map
