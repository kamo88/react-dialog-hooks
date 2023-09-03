import{j as o,c as e,B as p}from"./bodyScrollLock.esm-c7e0770c.js";import{r as i}from"./index-76fb7be0.js";import{u as D}from"./useDialog-8cd6fa1d.js";import"./_commonjsHelpers-de833af9.js";const b=({actionShowDialog:a,actionCloseDialog:l,actionCheckDialogOpen:t})=>{const{ref:m,isOpen:r,showDialog:c,closeDialog:n}=D(),f=i.useCallback(()=>{c(),a("showDialog")},[a,c]),d=i.useCallback(()=>{n(),l("closeDialog")},[l,n]);return i.useEffect(()=>{t(`isOpen: ${r}`)},[t,r]),o.jsxs("div",{className:e("flex flex-col"),children:[o.jsx(p,{onClick:f,children:"showDialog"}),o.jsx("div",{className:e("h-[1000px] w-[500px] outline outline-lime-500"),children:"check scroll lock"}),o.jsx("dialog",{role:"presentation",ref:m,className:e("backdrop:bg-gray-900 backdrop:opacity-80"),onClick:d,children:o.jsxs("div",{className:e("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),role:"presentation",onClick:x=>x.stopPropagation(),children:[o.jsx("div",{className:e("flex-initial","h-8"),children:"header"}),o.jsx("div",{className:e("flex-auto","overflow-y-scroll"),children:o.jsx("div",{className:e("h-[500px]"),children:"main"})}),o.jsx("div",{className:e("flex-initial","h-max pt-2","grid"),children:o.jsx(p,{onClick:d,children:"closeDialog"})})]})})]})},k=`import { useDialog } from '@kamo88/react-dialog-hooks';

const DialogExample = () => {

    const { ref, isOpen, showDialog, closeDialog } = useDialog();

    return (
        <div>
            <button type="button" onClick={showDialog}>showDialog</button>
            <dialog
              role="presentation"
              ref={ref}
              onClick={closeDialog}
            >
                <div role="presentation" onClick={(e) => e.stopPropagation()}>
                    <div>header</div>
                    <div>main</div>
                    <div>
                        footer
                        <button type="button" onClick={closeDialog}>closeDialog</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
  };
`,y={title:"hooks/useDialog",component:b,parameters:{layout:"centered",docs:{source:{code:k}}},tags:["autodocs"],argTypes:{actionShowDialog:{action:"showDialog",description:`**Not Dialog Component Props**<br>
      This is props for use in storybook.<br>
      See 'show code' for actual usage in this page.
    `},actionCloseDialog:{action:"closeDialog",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `},actionCheckDialogOpen:{action:"check isOpen",description:`**Not Dialog Component Props**<br>
    This is props for use in storybook.<br>
    See 'show code' for actual usage in this page.
  `}}},s={};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,y as default};
//# sourceMappingURL=UseDialog.stories-dbc759ea.js.map
