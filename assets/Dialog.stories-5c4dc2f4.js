import{j as y,D as x}from"./Dialog.example-30ed56f3.js";import{r as o}from"./index-6bd1afc7.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const S=()=>{const r=o.useRef(null),[c,i]=o.useState(!1),s=o.useRef(!1),n=o.useCallback(()=>{var e;s.current||(s.current=!0,i(!0),(e=r.current)==null||e.showModal())},[]),a=o.useCallback(()=>{var e;s.current&&(s.current=!1,i(!1),(e=r.current)==null||e.close())},[]);return o.useEffect(()=>()=>a(),[a]),{ref:r,isOpen:c,showDialog:n,closeDialog:a}},F=({portalTargetId:r,className:c,shouldFocusTrap:i,initialFocus:s,actionShowDialog:n,actionCloseDialogMain:a,actionCloseDialogSub:e,actionClickAbort:u})=>{const{ref:f,isOpen:h,showDialog:p,closeDialog:t}=S(),D=o.useMemo(()=>{if(!i)return!1},[i]),m=o.useMemo(()=>{if(!s)return!1},[s]),C=o.useCallback(()=>{p(),n("showDialog")},[n,p]),w=o.useCallback(()=>{t(),a("closeDialog")},[a,t]),T=o.useCallback(()=>{t(),e("closeDialog")},[e,t]),k=o.useCallback(()=>{t(),u("closeDialog")},[u,t]);return y.jsx(x,{portalTargetId:r,className:c,ref:f,isOpen:h,shouldFocusTrap:D,initialFocus:m,handleShowDialog:C,handleCloseDialogMain:w,handleCloseDialogSub:T,handleClickAway:k})},v=`const DialogExample: FC = () => {
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
`,A={title:"components/Dialog/Default",component:F,parameters:{layout:"centered",docs:{source:{code:v}}},tags:["autodocs"],argTypes:{portalTargetId:{control:"text",description:`Dialog Component Props<br>
        This is createPortal\`s target element id.<br>
        not required<br>
        default: "root-modal"`},className:{control:"text",description:`Dialog Component Props<br>
    This is <dialog> element\`s className.
    Please use CSS framework. ex) tailwindcss.<br>
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
  `}}},l={args:{shouldFocusTrap:!0,initialFocus:!0}};var d,g,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    shouldFocusTrap: true,
    initialFocus: true
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const M=["Dialog"];export{l as Dialog,M as __namedExportsOrder,A as default};
//# sourceMappingURL=Dialog.stories-5c4dc2f4.js.map
