/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function r(n,r){return!!r.closest(n)}function t(n){return n?{"ion-color":!0,[`ion-color-${n}`]:!0}:null}function o(n,r){return{[r]:!0,[`${r}-${n}`]:!!n}}function e(n){const r={};return function(n){return n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[]}(n).forEach(n=>r[n]=!0),r}async function i(n,r,t,o){if(r&&"#"!==r[0]&&-1===r.indexOf("://")){const e=n.document.querySelector("ion-router");if(e)return t&&t.preventDefault(),await e.componentOnReady(),e.push(r,o)}return Promise.resolve()}function u(n){const r=n.parentNode;return r&&11===r.NODE_TYPE?r.host:r}export{o as a,t as b,u as c,i as d,e,r as f};