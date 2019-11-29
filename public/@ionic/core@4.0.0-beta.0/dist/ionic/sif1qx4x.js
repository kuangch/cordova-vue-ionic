/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{a as t,b as o}from "./chunk-d3672675.js";import{e as s,f as n,g as i,i as r,a,b as l,c as p,d as c}from "./chunk-06643eba.js";import{a as d,e as m}from "./chunk-11949516.js";function h(e, t, o){let s="top",n="left";const i=t.querySelector(".popover-content"),r=i.getBoundingClientRect(),a=r.width,l=r.height,p=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=d&&"top"in d?d.top:c/2-l/2,h=d&&"left"in d?d.left:p/2,y=d&&d.width||0,u=d&&d.height||0,f=t.querySelector(".popover-arrow"),g=f.getBoundingClientRect(),b=g.width,w=g.height;d||(f.style.display="none");const D={top:m+u,left:h+y/2-b/2},P={top:m+u+(w-1),left:h+y/2-a/2};let S=!1,E=!1;P.left<v+25?(S=!0,P.left=v):a+v+P.left+25>p&&(E=!0,P.left=p-a-v,n="right"),m+u+l>c&&m-l>0?(D.top=m-(w+1),console.log(D),console.log(m),console.log(l),P.top=m-l-(w-1),t.className=t.className+" popover-bottom",s="bottom"):m+u+l>c&&(i.style.bottom=v+"%"),f.style.top=D.top+"px",f.style.left=D.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",S&&(CSS.supports("left","constant(safe-area-inset-left)")?i.style.left=`calc(${P.left}px + constant(safe-area-inset-left)`:CSS.supports("left","env(safe-area-inset-left)")&&(i.style.left=`calc(${P.left}px + env(safe-area-inset-left)`)),E&&(CSS.supports("right","constant(safe-area-inset-right)")?i.style.left=`calc(${P.left}px - constant(safe-area-inset-right)`:CSS.supports("right","env(safe-area-inset-right)")&&(i.style.left=`calc(${P.left}px - env(safe-area-inset-right)`)),i.style.transformOrigin=s+" "+n;const k=new e,W=new e;W.addElement(t.querySelector("ion-backdrop")),W.fromTo("opacity",.01,.08);const B=new e;return B.addElement(t.querySelector(".popover-wrapper")),B.fromTo("opacity",.01,1),Promise.resolve(k.addElement(t).easing("ease").duration(100).add(W).add(B))}const v=5;function y(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const n=new e;return n.addElement(t.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),s.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(s).add(n))}function u(e,t,o){let s="top",n="left";const i=t.querySelector(".popover-content"),r=i.getBoundingClientRect(),a=r.width,l=r.height,p=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=d&&"top"in d?d.top:c/2-l/2,h=d&&"left"in d?d.left:p/2-a/2,v=d&&d.height||0,y={top:m,left:h};y.left<f?y.left=f:a+f+y.left>p&&(y.left=p-a-f,n="right"),m+v+l>c&&m-l>0?(y.top=m-l,t.className=t.className+" popover-bottom",s="bottom"):m+v+l>c&&(i.style.bottom=f+"px"),i.style.top=y.top+"px",i.style.left=y.left+"px",i.style.transformOrigin=s+" "+n;const u=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.08);const b=new e;b.addElement(t.querySelector(".popover-wrapper")),b.fromTo("opacity",.01,1);const w=new e;w.addElement(t.querySelector(".popover-content")),w.fromTo("scale",.001,1);const D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(u.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(b).add(w).add(D))}const f=12;function g(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const n=new e;return n.addElement(t.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),s.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(s).add(n))}class b{constructor(){this.presented=!1,this.keyboardClose=!0,this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.willAnimate=!0}componentDidLoad(){this.ionPopoverDidLoad.emit()}componentDidUnload(){this.ionPopoverDidUnload.emit()}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(null,s)}lifecycle(e){const t=this.usersElement,o=w[e.type];if(t&&o){const s=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(s)}}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const o=Object.assign({},this.componentProps,{popover:this.el});return this.usersElement=await t(this.delegate,e,this.component,["popover-viewport"],o),r(this,"popoverEnter",h,u,this.ev)}async dismiss(e,t){await n(this,e,t,"popoverLeave",y,g,this.ev),await o(this.delegate,this.usersElement)}onDidDismiss(e){return i(this.el,"ionPopoverDidDismiss",e)}onWillDismiss(e){return i(this.el,"ionPopoverWillDismiss",e)}hostData(){const e=this.translucent?d(this.mode,"popover-translucent"):{};return{style:{zIndex:1e4+this.overlayId},"no-router":!0,class:Object.assign({},d(this.mode,"popover"),e,m(this.cssClass))}}render(){const t=d(this.mode,"popover-wrapper");return[e("ion-backdrop",{tappable:this.enableBackdropDismiss}),e("div",{class:t},e("div",{class:"popover-arrow"}),e("div",{class:"popover-content"}))]}static get is(){return"ion-popover"}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},ev:{type:"Any",attr:"ev"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]}static get style(){return"ion-popover{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10}.popover-content ion-content,.popover-content ion-scroll{contain:none}.popover-content ion-scroll{position:relative}ion-popover-controller{display:none}.popover-ios .popover-content{border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color,#000)}.popover-ios .popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-ios .popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:var(--ion-background-color,#fff);content:\"\";z-index:10}.popover-ios.popover-bottom .popover-arrow{top:auto;bottom:-10px}.popover-ios.popover-bottom .popover-arrow::after{top:-6px}.popover-translucent-ios .popover-arrow::after,.popover-translucent-ios .popover-content{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"}static get styleMode(){return"ios"}}const w={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"};class D{constructor(){this.popovers=new Map}popoverWillPresent(e){this.popovers.set(e.target.overlayId,e.target)}popoverWillDismiss(e){this.popovers.delete(e.target.overlayId)}escapeKeyUp(){c(this.popovers)}create(e){return a(this.doc.createElement("ion-popover"),e)}dismiss(e,t,o=-1){return l(e,t,this.popovers,o)}getTop(){return p(this.popovers)}static get is(){return"ion-popover-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}static get listeners(){return[{name:"body:ionPopoverWillPresent",method:"popoverWillPresent"},{name:"body:ionPopoverWillDismiss",method:"popoverWillDismiss"},{name:"body:ionPopoverDidUnload",method:"popoverWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]}}export{b as IonPopover,D as IonPopoverController};