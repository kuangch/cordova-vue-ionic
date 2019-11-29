/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{g as e}from "./chunk-deb847e6.js";import{b as s}from "./chunk-11949516.js";class i{constructor(){this.isCancelVisible=!1,this.shouldBlur=!0,this.shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentDidLoad(){this.positionElements(),this.debounceChanged()}clearInput(){this.ionClear.emit(),setTimeout(()=>{const t=this.value;void 0!==t&&""!==t&&(this.value="",this.ionInput.emit())},64),this.shouldBlur=!1}cancelSearchbar(){this.ionCancel.emit(),this.clearInput(),this.shouldBlur=!0,this.activated=!1}onInput(t){const e=t.target;e&&(this.value=e.value),this.ionInput.emit(t)}inputUpdated(){this.positionElements()}onBlur(){const t=(this.el.shadowRoot||this.el).querySelector(".searchbar-input");if(!1===this.shouldBlur)return t.focus(),this.shouldBlur=!0,this.ionBlur.emit(),void this.inputUpdated();this.focused=!1,this.positionElements()}onFocus(){this.activated=!0,this.focused=!0,this.ionFocus.emit(),this.inputUpdated(),this.positionElements()}positionElements(){const t=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-input"),s=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),s.removeAttribute("style");else{const i=this.doc,o=i.createElement("span");o.innerHTML=this.placeholder,i.body.appendChild(o);const a=o.offsetWidth;o.remove();const n="calc(50% - "+a/2+"px)",c="calc(50% - "+(a/2+30)+"px)";t?(e.style.paddingRight=n,s.style.marginRight=c):(e.style.paddingLeft=n,s.style.marginLeft=c)}}positionCancelButton(){const t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),s=this.focused;if(e&&s!==this.isCancelVisible){const i=e.style;if(this.isCancelVisible=s,s)t?i.marginLeft="0":i.marginRight="0";else{const s=e.offsetWidth;s>0&&(t?i.marginLeft=-s+"px":i.marginRight=-s+"px")}}}hostData(){return{class:Object.assign({},s(this.color),{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}}render(){const e=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),s=this.searchIcon||"search",i=this.showCancelButton?t("button",{type:"button",tabIndex:"ios"!==this.mode||this.activated?void 0:-1,onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?t("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon}):this.cancelButtonText):null;return[t("div",{class:"searchbar-input-container"},"md"===this.mode&&i,t("ion-icon",{mode:this.mode,icon:s,class:"searchbar-search-icon"}),t("input",{ref:t=>this.nativeInput=t,class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),t("button",{type:"button",class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)},t("ion-icon",{mode:this.mode,icon:e,class:"searchbar-clear-icon"}))),"ios"===this.mode&&i]}static get is(){return"ion-searchbar"}static get encapsulation(){return"scoped"}static get properties(){return{activated:{state:!0},animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ion-searchbar-ios-host]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.searchbar-icon[data-ion-searchbar-ios]{pointer-events:none}.searchbar-input-container[data-ion-searchbar-ios]{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input[data-ion-searchbar-ios]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input[data-ion-searchbar-ios]::-webkit-search-cancel-button{display:none}.searchbar-clear-button[data-ion-searchbar-ios]{margin:0;padding:0;display:none;min-height:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus[data-ion-searchbar-ios-host]   .searchbar-clear-button[data-ion-searchbar-ios]{display:block}[data-ion-searchbar-ios-host]{padding:12px;height:60px;font-family:var(--ion-font-family,inherit);contain:strict}.searchbar-input-container[data-ion-searchbar-ios]{height:36px;contain:strict}.searchbar-search-icon[data-ion-searchbar-ios]{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;color:var(--ion-text-color-step-400,#666);contain:strict}.searchbar-input[data-ion-searchbar-ios]{padding:0 28px;border-radius:10px;height:100%;background-color:rgba(var(--ion-text-color-rgb,0,0,0),.07);color:var(--ion-text-color,#000);font-size:14px;font-weight:400;contain:strict}.searchbar-input[data-ion-searchbar-ios]::-moz-placeholder{color:var(--ion-text-color-step-400,#666)}.searchbar-input[data-ion-searchbar-ios]:-ms-input-placeholder{color:var(--ion-text-color-step-400,#666)}.searchbar-input[data-ion-searchbar-ios]::-webkit-input-placeholder{text-indent:0;color:var(--ion-text-color-step-400,#666)}.searchbar-clear-button[data-ion-searchbar-ios]{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent;color:var(--ion-text-color-step-400,#666)}.searchbar-clear-icon[data-ion-searchbar-ios]{width:18px;height:100%}.searchbar-cancel-button[data-ion-searchbar-ios]{padding:0 0 0 8px;display:none;-ms-flex-negative:0;flex-shrink:0;border:0;outline:0;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-left-aligned[data-ion-searchbar-ios-host]   .searchbar-search-icon[data-ion-searchbar-ios]{margin-left:0}.searchbar-left-aligned[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]{padding-left:30px}.searchbar-show-cancel.searchbar-animated[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios], .searchbar-show-cancel.searchbar-has-focus[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]{display:block}.searchbar-animated[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios], .searchbar-animated[data-ion-searchbar-ios-host]   .searchbar-search-icon[data-ion-searchbar-ios]{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]{opacity:1;pointer-events:auto}.searchbar-animated[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]{margin-right:-100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}.ion-color[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]{color:var(--ion-color-base)}.ion-color[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]:hover{color:var(--ion-color-tint)}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios], ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-cancel-button[data-ion-searchbar-ios]{color:currentColor}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-search-icon[data-ion-searchbar-ios], ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-search-icon[data-ion-searchbar-ios]{color:currentColor;opacity:.5}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios], ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]::-moz-placeholder, ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]::-moz-placeholder{color:currentColor;opacity:.5}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]:-ms-input-placeholder, ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]:-ms-input-placeholder{color:currentColor;opacity:.5}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]::-webkit-input-placeholder, ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-input[data-ion-searchbar-ios]::-webkit-input-placeholder{text-indent:0;color:currentColor;opacity:.5}ion-toolbar.ion-color[data-ion-searchbar-ios-host]   .searchbar-clear-button[data-ion-searchbar-ios], ion-toolbar.ion-color   [data-ion-searchbar-ios-host]   .searchbar-clear-button[data-ion-searchbar-ios]{color:currentColor;opacity:.5}"}static get styleMode(){return"ios"}}export{i as IonSearchbar};