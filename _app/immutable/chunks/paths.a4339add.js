import{n as c,s as p}from"./scheduler.b3c879a1.js";const e=[];function d(i,l=c){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=l(r,f)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_isa5jv)==null?void 0:a.base)??"/portfolio";var u;const q=((u=globalThis.__sveltekit_isa5jv)==null?void 0:u.assets)??h;export{q as a,h as b,d as w};