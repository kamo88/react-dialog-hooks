import{j as v,D as F}from"./DialogExampleBase-8bbb4f80.js";import{r as e}from"./index-6bd1afc7.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const d={main:"main",sub:"sub",abort:"abort"},A=()=>{const a=e.useRef(null),r=e.useRef(new Promise(o=>{o("abort")})),s=e.useRef(()=>()=>{}),[n,t]=e.useState(!1),l=e.useCallback(()=>{var o;return s.current("abort"),t(!0),(o=a.current)==null||o.showModal(),r.current=new Promise(p=>{s.current=p}),r.current},[]),c=e.useCallback(()=>{var o;t(!1),(o=a.current)==null||o.close(),s.current("main")},[]),u=e.useCallback(()=>{var o;t(!1),(o=a.current)==null||o.close(),s.current("sub")},[]),i=e.useCallback(()=>{var o;t(!1),(o=a.current)==null||o.close(),s.current("abort")},[]);return e.useEffect(()=>()=>i(),[i]),{ref:a,isOpen:n,showDialog:l,closeDialogMain:c,closeDialogSub:u,closeDialogAbort:i}},M=({portalTargetId:a,className:r,shouldFocusTrap:s,initialFocus:n,actionShowDialog:t,actionCloseDialogMain:l,actionCloseDialogSub:c,actionClickAbort:u})=>{const{ref:i,isOpen:o,showDialog:p,closeDialogMain:m,closeDialogSub:D,closeDialogAbort:h}=A(),k=e.useMemo(()=>{if(!s)return!1},[s]),S=e.useMemo(()=>{if(!n)return!1},[n]),y=e.useCallback(async()=>{const R=await p();let g="no dialog response";switch(R){case d.main:g="promise dialog response: main";break;case d.sub:g="promise dialog response: sub";break;case d.abort:g="promise dialog response: abort";break}t(g)},[t,p]),T=e.useCallback(()=>{m(),l("closeDialogMain")},[l,m]),x=e.useCallback(()=>{D(),c("closeDialogSub")},[c,D]),P=e.useCallback(()=>{h(),u("closeDialogAbort")},[u,h]);return v.jsx(F,{portalTargetId:a,className:r,ref:i,isOpen:o,shouldFocusTrap:k,initialFocus:S,handleShowDialog:y,handleCloseDialogMain:T,handleCloseDialogSub:x,handleClickAway:P})},N=`const DialogExample: FC = () => {
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
`,j={title:"components/Dialog/Promise",component:M,parameters:{layout:"centered",docs:{source:{code:N}}},tags:["autodocs"],argTypes:{portalTargetId:{control:"text",description:`Dialog Component Props<br>
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
  `}}},b={args:{shouldFocusTrap:!0,initialFocus:!0}};var f,C,w;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shouldFocusTrap: true,
    initialFocus: true
  }
}`,...(w=(C=b.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const _=["Dialog"];export{b as Dialog,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=DialogPromise.stories-4bb7fa08.js.map
