import{j as F,D as A}from"./Dialog.example-30ed56f3.js";import{r as e}from"./index-6bd1afc7.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const m={main:"main",sub:"sub",abort:"abort"},M=()=>{const i=e.useRef(null),n=e.useRef(new Promise(s=>{s("abort")})),o=e.useRef(()=>()=>{}),[l,r]=e.useState(!1),c=e.useCallback(()=>{var s,a;return(s=o.current)==null||s.call(o,"abort"),r(!0),(a=i.current)==null||a.showModal(),n.current=new Promise(g=>{o.current=g}),n.current},[]),u=e.useCallback(()=>{var s,a;r(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"main")},[]),p=e.useCallback(()=>{var s,a;r(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"sub")},[]),t=e.useCallback(()=>{var s,a;r(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"abort")},[]);return e.useEffect(()=>()=>t(),[t]),{ref:i,isOpen:l,showDialog:c,closeDialogMain:u,closeDialogSub:p,closeDialogAbort:t}},N=({portalTargetId:i,className:n,shouldFocusTrap:o,initialFocus:l,actionShowDialog:r,actionCloseDialogMain:c,actionCloseDialogSub:u,actionClickAbort:p})=>{const{ref:t,isOpen:s,showDialog:a,closeDialogMain:g,closeDialogSub:D,closeDialogAbort:h}=M(),k=e.useMemo(()=>{if(!o)return!1},[o]),y=e.useMemo(()=>{if(!l)return!1},[l]),T=e.useCallback(async()=>{const S=await a();let b="no dialog response";switch(S){case m.main:b="promise dialog response: main";break;case m.sub:b="promise dialog response: sub";break;case m.abort:b="promise dialog response: abort";break}r(b)},[r,a]),x=e.useCallback(()=>{g(),c("closeDialogMain")},[c,g]),P=e.useCallback(()=>{D(),u("closeDialogSub")},[u,D]),R=e.useCallback(()=>{h(),p("closeDialogAbort")},[p,h]);return F.jsx(A,{portalTargetId:i,className:n,ref:t,isOpen:s,shouldFocusTrap:k,initialFocus:y,handleShowDialog:T,handleCloseDialogMain:x,handleCloseDialogSub:P,handleClickAway:R})},E=`const DialogExample: FC = () => {
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
                className={className}
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
`,j={title:"components/Dialog/Promise",component:N,parameters:{layout:"centered",docs:{source:{code:E}}},tags:["autodocs"],argTypes:{portalTargetId:{control:"text",description:`Dialog Component Props<br>
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
  `}}},d={args:{shouldFocusTrap:!0,initialFocus:!0}};var f,C,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shouldFocusTrap: true,
    initialFocus: true
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const _=["Dialog"];export{d as Dialog,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=DialogPromise.stories-ce438f00.js.map
