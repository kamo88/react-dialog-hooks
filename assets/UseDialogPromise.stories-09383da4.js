import{d as v,e as D,a as R,j as n,c,B as k}from"./bodyScrollLock.esm-5102fa00.js";import{r as i}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const S=()=>{},x={main:"main",sub:"sub",abort:"abort"},N=()=>{const o=i.useRef(null),l=i.useRef(new Promise(e=>{e("abort")})),s=i.useRef(()=>S),[h,t]=i.useState(!1),u=i.useCallback(()=>{var e,a;return(e=o.current)!=null&&e.open||(t(!0),(a=o.current)==null||a.showModal(),o.current&&v(o.current,{allowTouchMove:()=>!0}),l.current=new Promise(r=>{s.current=r})),l.current},[]),p=i.useCallback(()=>{var e,a,r;(e=o.current)!=null&&e.open&&(t(!1),(a=o.current)==null||a.close(),(r=s.current)==null||r.call(s,"main"),o.current&&D(o.current))},[]),d=i.useCallback(()=>{var e,a,r;(e=o.current)!=null&&e.open&&(t(!1),(a=o.current)==null||a.close(),(r=s.current)==null||r.call(s,"sub"),o.current&&D(o.current))},[]),g=i.useCallback(()=>{var e,a,r;(e=o.current)!=null&&e.open&&(t(!1),(a=o.current)==null||a.close(),(r=s.current)==null||r.call(s,"abort"),o.current&&D(o.current))},[]);return i.useEffect(()=>{const e=o.current;return()=>{var a;t(!1),e==null||e.close(),(a=s.current)==null||a.call(s,"abort"),R()}},[]),{ref:o,isOpen:h,showDialog:u,closeDialogMain:p,closeDialogSub:d,closeDialogAbort:g}},P=({actionShowDialog:o,actionCloseDialog:l,actionCheckDialogOpen:s})=>{const{ref:h,isOpen:t,showDialog:u,closeDialogMain:p,closeDialogSub:d,closeDialogAbort:g}=N(),e=i.useCallback(async()=>{const f=await u();let b="no dialog response";switch(f){case x.main:b="promise dialog response: main";break;case x.sub:b="promise dialog response: sub";break;case x.abort:b="promise dialog response: abort";break}o(b)},[o,u]),a=i.useCallback(()=>{p(),l("closeDialogMain")},[l,p]),r=i.useCallback(()=>{d(),l("closeDialogSub")},[l,d]),j=i.useCallback(()=>{g(),l("closeDialogAbort")},[l,g]);return i.useEffect(()=>{s(`isOpen: ${t}`)},[s,t]),n.jsxs("div",{className:c("flex flex-col"),children:[n.jsx(k,{onClick:e,children:"showDialog"}),n.jsx("div",{className:c("h-[1000px] w-[500px] outline outline-lime-500"),children:"check scroll lock"}),n.jsx("dialog",{role:"presentation",ref:h,className:c("backdrop:bg-gray-900 backdrop:opacity-80"),onClick:j,children:n.jsxs("div",{className:c("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),role:"presentation",onClick:f=>f.stopPropagation(),children:[n.jsx("div",{className:c("flex-initial","h-8"),children:"header"}),n.jsx("div",{className:c("flex-auto","overflow-y-scroll"),children:n.jsx("div",{className:c("h-[500px]"),children:"main"})}),n.jsxs("div",{className:c("flex-initial","h-max pt-2","flex items-center justify-between"),children:[n.jsx(k,{onClick:a,children:"closeDialogMain"}),n.jsx(k,{onClick:r,children:"closeDialogSub"})]})]})})]})},M=`import { useDialogPromise, DialogResponse } from '@kamo88/react-dialog-hooks';

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
`,T={title:"hooks/useDialogPromise",component:P,parameters:{layout:"centered",docs:{source:{code:M}}},tags:["autodocs"],argTypes:{actionShowDialog:{action:"showDialog",description:`**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `},actionCloseDialog:{action:"closeDialog",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionCheckDialogOpen:{action:"check isOpen",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `}}},m={};var w,y,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const B=["Default"];export{m as Default,B as __namedExportsOrder,T as default};
//# sourceMappingURL=UseDialogPromise.stories-09383da4.js.map
