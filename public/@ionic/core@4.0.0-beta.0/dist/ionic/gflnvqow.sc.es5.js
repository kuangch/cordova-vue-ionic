/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("gflnvqow",["exports","./chunk-e0d2f4ab.js"],function(t,e){var r=window.Ionic.h,n=!!(CSS&&CSS.supports&&CSS.supports("--a","0")),i=["","xs","sm","md","lg","xl"],o=function(){function t(){}return t.prototype.onResize=function(){this.el.forceUpdate()},t.prototype.getColumns=function(t){for(var r,n=0,o=i;n<o.length;n++){var l=o[n],u=e.isMatch(l),s=this[t+l.charAt(0).toUpperCase()+l.slice(1)];u&&void 0!==s&&(r=s)}return r},t.prototype.calculateSize=function(){var t=this.getColumns("size");if(t&&""!==t){var e="auto"===t?"auto":n?"calc(calc("+t+" / var(--ion-grid-columns, 12)) * 100%)":t/12*100+"%";return{flex:"0 0 "+e,width:""+e,"max-width":""+e}}},t.prototype.calculatePosition=function(t,e){var r,i=this.getColumns(t);if(i)return(r={})[e]=n?"calc(calc("+i+" / var(--ion-grid-columns, 12)) * 100%)":i>0&&i<12?i/12*100+"%":"auto",r},t.prototype.calculateOffset=function(){return this.calculatePosition("offset","margin-left")},t.prototype.calculatePull=function(){return this.calculatePosition("pull","right")},t.prototype.calculatePush=function(){return this.calculatePosition("push","left")},t.prototype.hostData=function(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}},t.prototype.render=function(){return r("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-col"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-col-host]{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@media (min-width:576px){[data-ion-col-host]{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}\@media (min-width:768px){[data-ion-col-host]{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}\@media (min-width:992px){[data-ion-col-host]{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}\@media (min-width:1200px){[data-ion-col-host]{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(){this.fixed=!1}return t.prototype.hostData=function(){return{class:{"grid-fixed":this.fixed}}},t.prototype.render=function(){return r("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-grid"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{fixed:{type:Boolean,attr:"fixed"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-grid-host]{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}.grid-fixed[data-ion-grid-host]{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){[data-ion-grid-host]{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}.grid-fixed[data-ion-grid-host]{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){[data-ion-grid-host]{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}.grid-fixed[data-ion-grid-host]{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){[data-ion-grid-host]{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}.grid-fixed[data-ion-grid-host]{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){[data-ion-grid-host]{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}.grid-fixed[data-ion-grid-host]{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding][data-ion-grid-host]{padding:0}[data-ion-grid-host][no-padding] [data-ion-grid-slot] > ion-col{padding:0}"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){}return t.prototype.render=function(){return r("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-row"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-row-host]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),t}();t.IonCol=o,t.IonGrid=l,t.IonRow=u,Object.defineProperty(t,"__esModule",{value:!0})});