/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;function n(t,n,e,i){if(t.shadowRoot){let r=t.querySelector("input.aux-input");r||((r=t.ownerDocument.createElement("input")).type="hidden",r.classList.add("aux-input"),t.appendChild(r)),r.disabled=i,r.name=n,r.value=e}}function e(t,n,e){return Math.max(t,Math.min(n,e))}function i(t,n){if(!t){const t="ASSERT: "+n;throw console.error(t),new Error(t)}}function r(t){return t.timeStamp||Date.now()}function o(t){if(t){const n=t.changedTouches;if(n&&n.length>0){const t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function a(t,n){const e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error(`"${n}" is not a valid value for [side]. Use "start" or "end" instead.`)}}function u(t){return s(t,0)}function s(t,n){const e=t._original||t;return{_original:t,emit:c(e.emit.bind(e),n)}}function c(t,n=0){let e;return(...i)=>{clearTimeout(e),e=setTimeout(t,n,...i)}}export{r as a,o as b,u as c,n as d,i as e,e as f,s as g,a as h,c as i};