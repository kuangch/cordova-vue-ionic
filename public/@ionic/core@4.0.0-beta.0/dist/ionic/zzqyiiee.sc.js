/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{c as t,d as i}from "./chunk-deb847e6.js";import{b as s,f as c}from "./chunk-11949516.js";class o{constructor(){this.inputId=`ion-cb-${n++}`,this.labelId=`${this.inputId}-lbl`,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}componentWillLoad(){this.emitStyle()}componentDidLoad(){this.ionStyle=t(this.ionStyle)}checkedChanged(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}onChange(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:Object.assign({},s(this.color),{"in-item":c(".item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}}render(){return i(this.el,this.name,this.value,this.disabled),[e("div",{class:"checkbox-icon"},e("div",{class:"checkbox-inner"})),e("input",{type:"checkbox",id:this.inputId,"aria-labelledby":this.labelId,onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,name:this.name,value:this.value,disabled:this.disabled})]}static get is(){return"ion-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ion-checkbox-md-host]{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast);display:inline-block;position:relative;--size:16px;--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:var(--ion-border-color, #c1c4cd);--background:var(--ion-item-background-color, var(--ion-background-color, #fff));--transition:background 280ms cubic-bezier(0.4, 0, 0.2, 1)}.checkbox-checked[data-ion-checkbox-md-host]   .checkbox-icon[data-ion-checkbox-md]{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked[data-ion-checkbox-md-host]   .checkbox-inner[data-ion-checkbox-md]{opacity:1}input[data-ion-checkbox-md]{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.checkbox-icon[data-ion-checkbox-md]{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner[data-ion-checkbox-md]{border-color:var(--checkmark-color);opacity:0}.checkbox-checked[data-ion-checkbox-md-host]   .checkbox-inner[data-ion-checkbox-md]{left:calc(var(--size) * .3);top:calc(var(--size) * .05);position:absolute;width:calc(var(--size) * .3125);height:calc(var(--size) * .625);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:calc(var(--size) * .125);border-top-width:0;border-left-width:0;border-style:solid}.checkbox-disabled[data-ion-checkbox-md-host]{opacity:.3;pointer-events:none}.checkbox-key[data-ion-checkbox-md-host]   .checkbox-icon[data-ion-checkbox-md]::after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item[data-ion-checkbox-md-host]{margin:9px 36px 9px 4px;display:block;position:static}.in-item[slot=end][data-ion-checkbox-md-host]{margin:11px 10px 10px 0}"}static get styleMode(){return"md"}}let n=0;export{o as IonCheckbox};