import{j as t,B as f,c}from"./Button.example-919e019c.js";import{r as a}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const j=()=>{},k={main:"main",sub:"sub",abort:"abort"},v=()=>{const i=a.useRef(null),r=a.useRef(new Promise(o=>{o("abort")})),e=a.useRef(()=>j),[h,l]=a.useState(!1),u=a.useCallback(()=>{var o,s;return(o=i.current)!=null&&o.open||(l(!0),(s=i.current)==null||s.showModal(),r.current=new Promise(n=>{e.current=n})),r.current},[]),p=a.useCallback(()=>{var o,s,n;(o=i.current)!=null&&o.open&&(l(!1),(s=i.current)==null||s.close(),(n=e.current)==null||n.call(e,"main"))},[]),g=a.useCallback(()=>{var o,s,n;(o=i.current)!=null&&o.open&&(l(!1),(s=i.current)==null||s.close(),(n=e.current)==null||n.call(e,"sub"))},[]),d=a.useCallback(()=>{var o,s,n;(o=i.current)!=null&&o.open&&(l(!1),(s=i.current)==null||s.close(),(n=e.current)==null||n.call(e,"abort"))},[]);return a.useEffect(()=>{const o=i.current;return()=>{var s;l(!1),o==null||o.close(),(s=e.current)==null||s.call(e,"abort")}},[]),{ref:i,isOpen:h,showDialog:u,closeDialogMain:p,closeDialogSub:g,closeDialogAbort:d}},R=({actionShowDialog:i,actionCloseDialog:r,actionCheckDialogOpen:e})=>{const{ref:h,isOpen:l,showDialog:u,closeDialogMain:p,closeDialogSub:g,closeDialogAbort:d}=v(),o=a.useCallback(async()=>{const D=await u();let b="no dialog response";switch(D){case k.main:b="promise dialog response: main";break;case k.sub:b="promise dialog response: sub";break;case k.abort:b="promise dialog response: abort";break}i(b)},[i,u]),s=a.useCallback(()=>{p(),r("closeDialogMain")},[r,p]),n=a.useCallback(()=>{g(),r("closeDialogSub")},[r,g]),y=a.useCallback(()=>{d(),r("closeDialogAbort")},[r,d]);return a.useEffect(()=>{e(`isOpen: ${l}`)},[e,l]),t.jsxs("div",{children:[t.jsx(f,{onClick:o,children:"showDialog"}),t.jsx("dialog",{role:"presentation",ref:h,className:c("backdrop:bg-gray-900 backdrop:opacity-80"),onClick:y,children:t.jsxs("div",{className:c("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),role:"presentation",onClick:D=>D.stopPropagation(),children:[t.jsx("div",{className:c("flex-initial","h-8"),children:"header"}),t.jsx("div",{className:c("flex-auto","overflow-y-scroll"),children:t.jsx("div",{className:c("h-[500px]"),children:"main"})}),t.jsxs("div",{className:c("flex-initial","h-max pt-2","flex items-center justify-between"),children:[t.jsx(f,{onClick:s,children:"closeDialogMain"}),t.jsx(f,{onClick:n,children:"closeDialogSub"})]})]})})]})},P=`import { useDialogPromise, DialogResponse } from '@kamo88/react-dialog-hooks';

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
`,E={title:"hooks/useDialogPromise",component:R,parameters:{layout:"centered",docs:{source:{code:P}}},tags:["autodocs"],argTypes:{actionShowDialog:{action:"showDialog",description:`**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `},actionCloseDialog:{action:"closeDialog",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionCheckDialogOpen:{action:"check isOpen",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `}}},m={};var x,w,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const O=["Default"];export{m as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=UseDialogPromise.stories-893526f9.js.map
