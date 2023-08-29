import{r as c}from"./index-61bf1805.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=c,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,o){var e,n={},i=null,u=null;o!==void 0&&(i=""+o),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(u=r.ref);for(e in r)d.call(r,e)&&!g.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:y,type:t,key:i,ref:u,props:n,_owner:v.current}}s.Fragment=m;s.jsx=a;s.jsxs=a;l.exports=s;var x=l.exports;function p(t){var r,o,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=p(t[r]))&&(e&&(e+=" "),e+=o);else for(r in t)t[r]&&(e&&(e+=" "),e+=r);return e}function b(){for(var t,r,o=0,e="";o<arguments.length;)(t=arguments[o++])&&(r=p(t))&&(e&&(e+=" "),e+=r);return e}const f=({children:t,onClick:r})=>x.jsx("button",{className:b("bg-violet-500","hover:bg-violet-600","focus:outline-none focus:ring focus:ring-violet-300","active:bg-violet-700"),type:"button",onClick:r,children:t});try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}export{f as B,b as c,x as j};
//# sourceMappingURL=Button.example-919e019c.js.map
