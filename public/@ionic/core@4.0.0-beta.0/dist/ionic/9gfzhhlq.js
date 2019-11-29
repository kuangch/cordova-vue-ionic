/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{b as t}from "./chunk-11949516.js";const s={lines:{dur:1e3,lines:12,fn:(e, t, s)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/s-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e, t, s)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/s-e}ms`}})},bubbles:{dur:1e3,circles:9,fn:(e, t, s)=>{const n=`${e*t/s-e}ms`,r=2*Math.PI*t/s;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e, t, s)=>{const n=t/s,r=`${e*n-e}ms`,i=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":r}}}},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})}};class n{constructor(){this.paused=!1}getName(){let e=this.name||this.config.get("spinner");return e?("ios"===e?(console.warn('spinner "ios" has been renamed to "lines"'),e="lines"):"ios-small"===e&&(console.warn('spinner "ios-small" has been renamed to "lines-small"'),e="lines-small"),e):"md"===this.mode?"crescent":"lines"}hostData(){return{class:Object.assign({},t(this.color),{[`spinner-${this.getName()}`]:!0,"spinner-paused":!!this.paused})}}render(){const e=this.getName(),t=s[e]||s.lines,n="number"==typeof this.duration&&this.duration>10?this.duration:t.dur,a=[];if(t.circles)for(let e=0;e<t.circles;e++)a.push(r(t,n,e,t.circles));else if(t.lines)for(let e=0;e<t.lines;e++)a.push(i(t,n,e,t.lines));return a}static get is(){return"ion-spinner"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}}static get style(){return":host{display:inline-block;position:relative;width:28px;height:28px}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}:host(.spinner-bubbles) svg{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}\@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}:host(.spinner-lines){--ion-color-base:var(--ion-text-color-step-400, #666666)}:host(.spinner-bubbles){--ion-color-base:var(--ion-text-color, #000)}:host(.spinner-circles){--ion-color-base:var(--ion-text-color-step-400, #666666)}:host(.spinner-crescent){--ion-color-base:var(--ion-text-color, #000)}:host(.spinner-dots){--ion-color-base:var(--ion-text-color-step-300, #4d4d4d)}"}static get styleMode(){return"ios"}}function r(t,s,n,r){const i=t.fn(s,n,r);return i.style["animation-duration"]=`${s}ms`,e("svg",{viewBox:"0 0 64 64",style:i.style},e("circle",{transform:"translate(32,32)",r:i.r}))}function i(t,s,n,r){const i=t.fn(s,n,r);return i.style["animation-duration"]=`${s}ms`,e("svg",{viewBox:"0 0 64 64",style:i.style},e("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}export{n as IonSpinner};