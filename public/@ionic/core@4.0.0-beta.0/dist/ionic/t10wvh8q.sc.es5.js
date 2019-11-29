/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("t10wvh8q",["exports","./chunk-f869b949.js"],function(e,t){var n=window.Ionic.h,r=function(){function e(){}return e.prototype.srcChanged=function(){this.addIO()},e.prototype.componentDidLoad=function(){this.addIO()},e.prototype.addIO=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.loadSrc=e.src,e.removeIO(),e.ionImgDidLoad.emit())}),this.io.observe(this.el)):setTimeout(function(){return e.loadSrc=e.src},200))},e.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){return n("img",{src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(e,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-img-host]{display:block}img[data-ion-img]{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return e.prototype.hostData=function(){return{class:Object.assign({},t.createColorClasses(this.color))}},e.prototype.render=function(){return n("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-note-md-host]{color:var(--ion-color-base);--ion-color-base:var(--ion-text-color-step-800, #cccccc);font-family:var(--ion-font-family,inherit)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.hostData=function(){return{class:t.createColorClasses(this.color)}},e.prototype.render=function(){return n("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-text-host]{--ion-color-base:currentColor;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),e}();e.IonImg=r,e.IonNote=o,e.IonText=i,Object.defineProperty(e,"__esModule",{value:!0})});