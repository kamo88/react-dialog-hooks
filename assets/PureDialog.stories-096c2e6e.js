import{j as o,B as l,c as s}from"./Dialog-b006cbce.js";import{r as i}from"./index-61bf1805.js";import{u as k}from"./useDialog-6a2956c7.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const w=({actionShowDialog:t,actionCloseDialogMain:n,actionCloseDialogSub:r,actionClickAbort:c,actionIsOpen:p})=>{const{ref:D,isOpen:d,showDialog:g,closeDialog:e}=k();i.useEffect(()=>{p(`isOpen: ${d}`)},[d,p]);const b=i.useCallback(()=>{g(),t("showDialog")},[t,g]),f=i.useCallback(()=>{e(),n("closeDialog")},[n,e]),x=i.useCallback(()=>{e(),r("closeDialog")},[r,e]),C=i.useCallback(()=>{e(),c("closeDialog")},[c,e]);return o.jsxs("div",{children:[o.jsx(l,{onClick:b,children:"showDialog!!!!"}),o.jsx("dialog",{role:"presentation",className:s("backdrop:bg-gray-900 backdrop:opacity-80"),ref:D,onClick:C,children:o.jsxs("div",{className:s("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),children:[o.jsx("div",{className:s("flex-initial","h-8"),children:"header"}),o.jsx("div",{className:s("flex-auto","overflow-y-scroll"),children:o.jsx("div",{className:s("h-[500px]"),children:"main"})}),o.jsxs("div",{className:s("flex-initial","h-max pt-2","flex items-center justify-between"),children:[o.jsx(l,{onClick:f,children:"closeDialog main!!!!"}),o.jsx(l,{onClick:x,children:"closeDialog sub!!!!"})]})]})})]})},v=`const DialogExample: FC = () => {
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
`,B={title:"pure dialog",component:w,parameters:{layout:"centered",docs:{source:{code:v}}},tags:["autodocs"],argTypes:{actionShowDialog:{action:"actionShowDialog",description:`**Not Dialog Component Props**<br>
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
  `},actionIsOpen:{action:"actionIsOpen",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    Check isOpen state.<br>
    See 'show code' for actual usage in this page.
  `}}},a={};var u,h,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const E=["Dialog"];export{a as Dialog,E as __namedExportsOrder,B as default};
//# sourceMappingURL=PureDialog.stories-096c2e6e.js.map
