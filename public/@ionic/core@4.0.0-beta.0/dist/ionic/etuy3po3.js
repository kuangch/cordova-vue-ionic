/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e}from "./chunk-deb847e6.js";class i{constructor(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}tapClickChanged(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)}ionActivated(t){this.addRipple(t.detail.x,t.detail.y)}touchStart(t){this.lastClick=e(t);const i=t.touches[0];this.addRipple(i.clientX,i.clientY)}mouseDown(t){const i=e(t);this.lastClick<i-1e3&&this.addRipple(t.pageX,t.pageY)}componentDidLoad(){this.tapClickChanged(this.tapClick)}addRipple(t,e){let i,o,l;this.queue.read(()=>{const a=this.el.getBoundingClientRect(),s=a.width,c=a.height;l=Math.min(2*Math.sqrt(s*s+c*c),n),i=t-a.left-l/2,o=e-a.top-l/2}),this.queue.write(()=>{const t=this.doc.createElement("div");t.classList.add("ripple-effect");const e=t.style,n=Math.max(a*Math.sqrt(l),s);e.top=o+"px",e.left=i+"px",e.width=l+"px",e.height=l+"px",e.animationDuration=n+"ms",(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>t.remove(),n+50)})}render(){return null}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}}static get listeners(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"}}const a=35,s=260,n=550;export{i as IonRippleEffect};