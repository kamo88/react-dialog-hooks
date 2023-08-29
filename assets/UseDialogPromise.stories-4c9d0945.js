import{j as i,B as f,c as t}from"./Button.example-919e019c.js";import{r as a}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const j=()=>{},k={main:"main",sub:"sub",abort:"abort"},R=()=>{const n=a.useRef(null),r=a.useRef(new Promise(s=>{s("abort")})),o=a.useRef(()=>j),[m,l]=a.useState(!1),c=a.useCallback(()=>{var s,e;return(s=o.current)==null||s.call(o,"abort"),l(!0),(e=n.current)==null||e.showModal(),r.current=new Promise(h=>{o.current=h}),r.current},[]),u=a.useCallback(()=>{var s,e;l(!1),(s=n.current)==null||s.close(),(e=o.current)==null||e.call(o,"main")},[]),p=a.useCallback(()=>{var s,e;l(!1),(s=n.current)==null||s.close(),(e=o.current)==null||e.call(o,"sub")},[]),g=a.useCallback(()=>{var s,e;l(!1),(s=n.current)==null||s.close(),(e=o.current)==null||e.call(o,"abort")},[]);return a.useEffect(()=>{const s=n.current;return()=>{var e;l(!1),s==null||s.close(),(e=o.current)==null||e.call(o,"abort")}},[]),{ref:n,isOpen:m,showDialog:c,closeDialogMain:u,closeDialogSub:p,closeDialogAbort:g}},v=({actionShowDialog:n,actionCloseDialog:r,actionCheckDialogOpen:o})=>{const{ref:m,isOpen:l,showDialog:c,closeDialogMain:u,closeDialogSub:p,closeDialogAbort:g}=R(),s=a.useCallback(async()=>{const D=await c();let d="no dialog response";switch(D){case k.main:d="promise dialog response: main";break;case k.sub:d="promise dialog response: sub";break;case k.abort:d="promise dialog response: abort";break}n(d)},[n,c]),e=a.useCallback(()=>{u(),r("closeDialogMain")},[r,u]),h=a.useCallback(()=>{p(),r("closeDialogSub")},[r,p]),y=a.useCallback(()=>{g(),r("closeDialogAbort")},[r,g]);return a.useEffect(()=>{o(`isOpen: ${l}`)},[o,l]),i.jsxs("div",{children:[i.jsx(f,{onClick:s,children:"showDialog"}),i.jsx("dialog",{role:"presentation",ref:m,className:t("backdrop:bg-gray-900 backdrop:opacity-80"),onClick:y,children:i.jsxs("div",{className:t("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),role:"presentation",onClick:D=>D.stopPropagation(),children:[i.jsx("div",{className:t("flex-initial","h-8"),children:"header"}),i.jsx("div",{className:t("flex-auto","overflow-y-scroll"),children:i.jsx("div",{className:t("h-[500px]"),children:"main"})}),i.jsxs("div",{className:t("flex-initial","h-max pt-2","flex items-center justify-between"),children:[i.jsx(f,{onClick:e,children:"closeDialogMain"}),i.jsx(f,{onClick:h,children:"closeDialogSub"})]})]})})]})},P=`import { useDialogPromise, DialogResponse } from '@kamo88/react-dialog-hooks';

const DialogExample = () => {

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
        // abort processing ex) click away\`s action & This Component\`s unmount
      }
    }, [showDialog]);

    return (
        <div>
            <button type="button" onClick={handleShowDialog}>showDialog</button>
            <dialog
              role="presentation"
              ref={ref}
              onClick={closeDialogAbort}
            >
                <div role="presentation" onClick={(e) => e.stopPropagation()}>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer
                        <button type="button" onClick={closeDialogMain}>closeDialogMain</button>
                        <button type="button" onClick={closeDialogSub}>closeDialogSub</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
  };
`,E={title:"hooks/useDialogPromise",component:v,parameters:{layout:"centered",docs:{source:{code:P}}},tags:["autodocs"],argTypes:{actionShowDialog:{action:"showDialog",description:`**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `},actionCloseDialog:{action:"closeDialog",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionCheckDialogOpen:{action:"check isOpen",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `}}},b={};var x,w,C;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(w=b.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const O=["Default"];export{b as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=UseDialogPromise.stories-4c9d0945.js.map
