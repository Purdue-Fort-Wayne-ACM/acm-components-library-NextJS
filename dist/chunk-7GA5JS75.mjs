import n,{useEffect as r,useState as h}from"react";import{jsx as d}from"react/jsx-runtime";function a({children:l}){let[t,o]=h("light");r(()=>{let e=localStorage.getItem("theme");e&&o(e),document.documentElement.setAttribute("data-theme",e||"light")},[]);let m=()=>{let e=t==="light"?"dark":"light";o(e),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)};return d(c.Provider,{value:{theme:t,toggleTheme:m},children:l})}var c=n.createContext(null),u=a;export{a,c as b,u as c};
