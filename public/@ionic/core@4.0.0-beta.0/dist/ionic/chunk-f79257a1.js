/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;import "./chunk-9b785f2c.js";const i=()=>import("./ios.transition.js"),e=()=>import("./md.transition.js");function t(n){return new Promise(t=>{n.queue.write(async()=>{!function(n){const i=n.enteringEl,e=n.leavingEl;(function(n, i, e){n&&(n.style.zIndex="back"===e?"99":"101"),i&&(i.style.zIndex="100")})(i,e,n.direction),n.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),a(i,!1),e&&a(e,!1)}(n);const c=await async function(n){if(n.leavingEl&&!1!==n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await i()).iosTransitionAnimation:(await e()).mdTransitionAnimation}(n),l=c?async function(n,i){await o(i,!0);const e=await i.animationCtrl.create(n,i.baseEl,i);return s(i.window,i.enteringEl,i.leavingEl),await function(n,i){const e=i.progressCallback,t=new Promise(i=>n.onFinish(i));return e?(n.progressStart(),e(n)):n.play(),t}(e,i),e.hasCompleted&&r(i.window,i.enteringEl,i.leavingEl),e}(c,n):async function(n){const i=n.enteringEl,e=n.leavingEl;return i&&i.classList.remove("ion-page-invisible"),e&&e.classList.remove("ion-page-invisible"),await o(n,!1),s(n.window,i,e),r(n.window,i,e),null}(n);t(l)})})}function a(n,i){i?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}async function o(n,i){const e=(null!=n.deepWait?n.deepWait:i)?[d(n.enteringEl),d(n.leavingEl)]:[l(n.enteringEl),l(n.leavingEl)];await Promise.all(e),await async function(n,i){n&&await n(i)}(n.viewIsReady,n.enteringEl)}function s(n,i,e){c(n,e,"ionViewWillLeave"),c(n,i,"ionViewWillEnter")}function r(n,i,e){c(n,i,"ionViewDidEnter"),c(n,e,"ionViewDidLeave")}function c(n,i,e){if(i){const t=new(0,n.CustomEvent)(e,{bubbles:!1,cancelable:!1});i.dispatchEvent(t)}}function l(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}async function d(n){const i=n;if(i){if(i.componentOnReady&&await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(d))}}export{c as a,a as b,t as c};