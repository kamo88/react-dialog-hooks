import{j as T}from"./Dialog-b006cbce.js";import{r as e}from"./index-61bf1805.js";import{D as F}from"./Dialog.example-65a78a81.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const A=()=>{},m={main:"main",sub:"sub",abort:"abort"},M=()=>{const i=e.useRef(null),r=e.useRef(new Promise(s=>{s("abort")})),o=e.useRef(()=>A),[l,n]=e.useState(!1),c=e.useCallback(()=>{var s,a;return(s=o.current)==null||s.call(o,"abort"),n(!0),(a=i.current)==null||a.showModal(),r.current=new Promise(p=>{o.current=p}),r.current},[]),u=e.useCallback(()=>{var s,a;n(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"main")},[]),d=e.useCallback(()=>{var s,a;n(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"sub")},[]),t=e.useCallback(()=>{var s,a;n(!1),(s=i.current)==null||s.close(),(a=o.current)==null||a.call(o,"abort")},[]);return e.useEffect(()=>()=>t(),[t]),{ref:i,isOpen:l,showDialog:c,closeDialogMain:u,closeDialogSub:d,closeDialogAbort:t}},N=({className:i,shouldFocusTrap:r,initialFocus:o,actionShowDialog:l,actionCloseDialogMain:n,actionCloseDialogSub:c,actionClickAbort:u})=>{const{ref:d,isOpen:t,showDialog:s,closeDialogMain:a,closeDialogSub:p,closeDialogAbort:D}=M(),w=e.useMemo(()=>{if(!r)return!1},[r]),k=e.useMemo(()=>{if(!o)return!1},[o]),y=e.useCallback(async()=>{const S=await s();let g="no dialog response";switch(S){case m.main:g="promise dialog response: main";break;case m.sub:g="promise dialog response: sub";break;case m.abort:g="promise dialog response: abort";break}l(g)},[l,s]),x=e.useCallback(()=>{a(),n("closeDialogMain")},[n,a]),P=e.useCallback(()=>{p(),c("closeDialogSub")},[c,p]),R=e.useCallback(()=>{D(),u("closeDialogAbort")},[u,D]);return T.jsx(F,{className:i,ref:d,isOpen:t,shouldFocusTrap:w,initialFocus:k,handleShowDialog:y,handleCloseDialogMain:x,handleCloseDialogSub:P,handleClickAway:R})},E=`const DialogExample: FC = () => {
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
`,I={title:"components/Dialog/useDialogPromise",component:N,parameters:{layout:"centered",docs:{source:{code:E}}},tags:["autodocs"],argTypes:{className:{control:"text",description:`Dialog Component Props<br>
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
  `}}},b={args:{shouldFocusTrap:!0,initialFocus:!0}};var h,f,C;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    shouldFocusTrap: true,
    initialFocus: true
  }
}`,...(C=(f=b.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const W=["Dialog"];export{b as Dialog,W as __namedExportsOrder,I as default};
//# sourceMappingURL=DialogPromise.stories-40c5e31d.js.map
