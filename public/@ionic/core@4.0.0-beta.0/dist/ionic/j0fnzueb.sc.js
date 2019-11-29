/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{b as t,f as s}from "./chunk-11949516.js";class n{constructor(){this.disabled=!1}valueChanged(e){this.updateButtons(),this.ionChange.emit({value:e})}segmentClick(e){const t=e.target;this.value=t.value}componentDidLoad(){if(void 0===this.value){const e=this.getButtons().find(e=>e.checked);e&&(this.value=e.value)}this.updateButtons()}updateButtons(){const e=this.value;for(const t of this.getButtons())t.checked=t.value===e}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},t(this.color),{"segment-disabled":this.disabled,"in-toolbar":s("ion-toolbar",this.el),"in-color-toolbar":s("ion-toolbar.ion-color",this.el)})}}render(){return e("slot",null)}static get is(){return"ion-segment"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return"[data-ion-segment-ios-host]{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit)}.segment-disabled[data-ion-segment-ios-host]{opacity:.4;pointer-events:none}[data-ion-segment-ios-slot] > ion-segment-button{--border-radius:4px;--border-width:1px;--border-style:solid;--border-color:var(--ion-color-base);--background:transparent;--transition:100ms all linear;--icon-size:26px;height:32px;color:var(--ion-color-base);font-size:13px;line-height:37px}[data-ion-segment-ios-slot] > .segment-checked{--background:var(--ion-color-base);color:var(--ion-color-contrast)}[data-ion-segment-ios-slot] > .segment-button-disabled{color:rgba(var(--ion-color-base-rgb),.5);pointer-events:none}[data-ion-segment-ios-slot] > ion-segment-button:hover:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}[data-ion-segment-ios-slot] > ion-segment-button:active:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}.in-toolbar[data-ion-segment-ios-host]{left:0;right:0;top:0;bottom:0;position:absolute}[data-ion-segment-ios-host].in-toolbar [data-ion-segment-ios-slot] > ion-segment-button{max-width:100px;height:30px;font-size:12px;line-height:22px}.in-color-toolbar[data-ion-segment-ios-host]{--ion-color-base:inherit}[data-ion-segment-ios-host].in-color-toolbar [data-ion-segment-ios-slot] > ion-segment-button{--border-color:currentColor;color:inherit}[data-ion-segment-ios-host].in-color-toolbar [data-ion-segment-ios-slot] > ion-segment-button.segment-checked{--background:var(--ion-color-contrast);--border-color:var(--ion-color-contrast);color:var(--ion-color-base)}"}static get styleMode(){return"ios"}}let a=0;class o{constructor(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+a++}checkedChanged(e,t){e&&!t&&this.ionSelect.emit()}hostData(){const{disabled:e,checked:s,color:n}=this;return{class:Object.assign({},t(n),{"segment-button-disabled":e,"segment-checked":s}),tappable:!0}}render(){return[e("button",{"aria-pressed":this.checked,class:"segment-button-native",disabled:this.disabled,onClick:()=>this.checked=!0},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",{tapClick:!0,parent:this.el}))]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ion-segment-button-host]{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;-webkit-box-flex:1;-ms-flex:1;flex:1}[data-ion-segment-button-host]:first-of-type   .segment-button-native[data-ion-segment-button]{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}[data-ion-segment-button-host]:not(:first-of-type)   .segment-button-native[data-ion-segment-button]{border-left-width:0}[data-ion-segment-button-host]:last-of-type   .segment-button-native[data-ion-segment-button]{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.segment-button-native[data-ion-segment-button]{margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:inherit;font-size:inherit;font-weight:inherit;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:inherit;white-space:nowrap;contain:content;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.segment-button-native[data-ion-segment-button]:active, .segment-button-native[data-ion-segment-button]:focus{outline:0}[data-ion-segment-button-slot] > ion-icon{font-size:var(--icon-size)}"}}export{n as IonSegment,o as IonSegmentButton};