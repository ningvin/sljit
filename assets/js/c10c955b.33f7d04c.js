"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[959],{9424:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"general/use-cases/bytecode-interpreters","title":"Bytecode Interpreters","description":"Generating machine code from bytecode with SLJIT.","source":"@site/../general/use-cases/bytecode-interpreters.md","sourceDirName":"general/use-cases","slug":"/general/use-cases/bytecode-interpreters","permalink":"/sljit/docs/general/use-cases/bytecode-interpreters","draft":false,"unlisted":false,"editUrl":"https://github.com/zherczeg/sljit/docs/docs/../general/use-cases/bytecode-interpreters.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Generating machine code from bytecode with SLJIT."},"sidebar":"generalSidebar","previous":{"title":"Overview","permalink":"/sljit/docs/general/use-cases/overview"},"next":{"title":"Pattern Matching","permalink":"/sljit/docs/category/pattern-matching"}}');var r=s(4848),i=s(8453);const c={sidebar_position:2,description:"Generating machine code from bytecode with SLJIT."},o="Bytecode Interpreters",a={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"bytecode-interpreters",children:"Bytecode Interpreters"})}),"\n",(0,r.jsx)(t.p,{children:"SLJIT's approach is very effective for bytecode interpreters, since their machine-independent bytecode (middle-level representation) typically contains instructions which either can be easly translated to machine code, or which are not worth to translate to machine code in the first place."}),"\n",(0,r.jsx)(t.p,{children:"The following table gives a possible mapping for a subset of bytecode instructions targeting a stack machine:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Bytecode Instruction"}),(0,r.jsx)(t.th,{children:"Effect"}),(0,r.jsx)(t.th,{children:"Mapping to SLJIT"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pop"})}),(0,r.jsx)(t.td,{children:"Pop a value from the stack."}),(0,r.jsx)(t.td,{children:"\u2705 Easy to implement, just decrement the stack pointer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"add"})}),(0,r.jsx)(t.td,{children:"Pop two values from the stack. Add them and push the result onto the stack."}),(0,r.jsxs)(t.td,{children:["\u2705 Easy to implement if ",(0,r.jsx)(t.code,{children:"value"}),' is limited to a single type (e.g. integers). More complex types may require additional checks and dispatching. In those cases, it may be beneficial to just JIT the "fast path" (e.g. the integer case).']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"resolve"})}),(0,r.jsxs)(t.td,{children:["Pop a value representing the identifier of a variable from the stack. Lookup the variable by its identifier. If found, push its address onto the stack. Otherwise push ",(0,r.jsx)(t.code,{children:"NULL"})," onto the stack."]}),(0,r.jsx)(t.td,{children:"\u274c Not suitable for JIT compilation. Call a native C/C++ helper instead."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(6540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);