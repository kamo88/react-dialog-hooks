import{j as o,B as p,c as e}from"./Button.example-919e019c.js";import{r as i}from"./index-61bf1805.js";import{u as x}from"./useDialog-b0d77f91.js";import"./_commonjsHelpers-de833af9.js";const b=({actionShowDialog:a,actionCloseDialog:t,actionCheckDialogOpen:l})=>{const{ref:m,isOpen:r,showDialog:n,closeDialog:c}=x(),D=i.useCallback(()=>{n(),a("showDialog")},[a,n]),d=i.useCallback(()=>{c(),t("closeDialog")},[t,c]);return i.useEffect(()=>{l(`isOpen: ${r}`)},[l,r]),o.jsxs("div",{children:[o.jsx(p,{onClick:D,children:"showDialog"}),o.jsx("dialog",{role:"presentation",ref:m,className:e("backdrop:bg-gray-900 backdrop:opacity-80"),onClick:d,children:o.jsxs("div",{className:e("h-80 w-96 p-2","flex flex-col justify-between","divide-y divide-solid"),role:"presentation",onClick:f=>f.stopPropagation(),children:[o.jsx("div",{className:e("flex-initial","h-8"),children:"header"}),o.jsx("div",{className:e("flex-auto","overflow-y-scroll"),children:o.jsx("div",{className:e("h-[500px]"),children:"main"})}),o.jsx("div",{className:e("flex-initial","h-max pt-2","grid"),children:o.jsx(p,{onClick:d,children:"closeDialog"})})]})})]})},k=`import { useDialog } from '@kamo88/react-dialog-hooks';

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
  `}}},s={};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,y as default};
//# sourceMappingURL=UseDialog.stories-e00fac25.js.map
