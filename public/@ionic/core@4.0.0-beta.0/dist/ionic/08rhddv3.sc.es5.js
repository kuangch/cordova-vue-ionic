/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("08rhddv3",["exports","./chunk-422fe0b2.js","./chunk-f869b949.js"],function(t,e,o){var n=window.Ionic.h,i=function(){function t(){this.isCancelVisible=!1,this.shouldBlur=!0,this.shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}return t.prototype.debounceChanged=function(){this.ionChange=e.debounceEvent(this.ionChange,this.debounce)},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.ionChange.emit({value:e})},t.prototype.componentDidLoad=function(){this.positionElements(),this.debounceChanged()},t.prototype.clearInput=function(){var t=this;this.ionClear.emit(),setTimeout(function(){var e=t.value;void 0!==e&&""!==e&&(t.value="",t.ionInput.emit())},64),this.shouldBlur=!1},t.prototype.cancelSearchbar=function(){this.ionCancel.emit(),this.clearInput(),this.shouldBlur=!0,this.activated=!1},t.prototype.onInput=function(t){var e=t.target;e&&(this.value=e.value),this.ionInput.emit(t)},t.prototype.inputUpdated=function(){this.positionElements()},t.prototype.onBlur=function(){var t=(this.el.shadowRoot||this.el).querySelector(".searchbar-input");if(!1===this.shouldBlur)return t.focus(),this.shouldBlur=!0,this.ionBlur.emit(),void this.inputUpdated();this.focused=!1,this.positionElements()},t.prototype.onFocus=function(){this.activated=!0,this.focused=!0,this.ionFocus.emit(),this.inputUpdated(),this.positionElements()},t.prototype.positionElements=function(){var t=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},t.prototype.positionPlaceholder=function(){var t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-input"),o=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),o.removeAttribute("style");else{var n=this.doc,i=n.createElement("span");i.innerHTML=this.placeholder,n.body.appendChild(i);var a=i.offsetWidth;i.remove();var s="calc(50% - "+a/2+"px)",c="calc(50% - "+(a/2+30)+"px)";t?(e.style.paddingRight=s,o.style.marginRight=c):(e.style.paddingLeft=s,o.style.marginLeft=c)}},t.prototype.positionCancelButton=function(){var t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),o=this.focused;if(e&&o!==this.isCancelVisible){var n=e.style;if(this.isCancelVisible=o,o)t?n.marginLeft="0":n.marginRight="0";else{var i=e.offsetWidth;i>0&&(t?n.marginLeft=-i+"px":n.marginRight=-i+"px")}}},t.prototype.hostData=function(){return{class:Object.assign({},o.createColorClasses(this.color),{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}},t.prototype.render=function(){var t=this,e=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),o=this.searchIcon||"search",i=this.showCancelButton?n("button",{type:"button",tabIndex:"ios"!==this.mode||this.activated?void 0:-1,onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?n("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon}):this.cancelButtonText):null;return[n("div",{class:"searchbar-input-container"},"md"===this.mode&&i,n("ion-icon",{mode:this.mode,icon:o,class:"searchbar-search-icon"}),n("input",{ref:function(e){return t.nativeInput=e},class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),n("button",{type:"button",class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)},n("ion-icon",{mode:this.mode,icon:e,class:"searchbar-clear-icon"}))),"ios"===this.mode&&i]},Object.defineProperty(t,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[data-ion-searchbar-md-host]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.searchbar-icon[data-ion-searchbar-md]{pointer-events:none}.searchbar-input-container[data-ion-searchbar-md]{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input[data-ion-searchbar-md]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input[data-ion-searchbar-md]::-webkit-search-cancel-button{display:none}.searchbar-clear-button[data-ion-searchbar-md]{margin:0;display:none;min-height:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus[data-ion-searchbar-md-host]   .searchbar-clear-button[data-ion-searchbar-md]{display:block}[data-ion-searchbar-md-host]{padding:8px;background:inherit;font-family:var(--ion-font-family,inherit)}.searchbar-search-icon[data-ion-searchbar-md]{left:16px;top:11px;width:21px;height:21px;color:var(--ion-text-color-step-400,#666)}.searchbar-cancel-button[data-ion-searchbar-md]{left:10px;top:0;margin:0;display:none;height:100%;border:0;background-color:transparent;color:var(--ion-text-color-step-100,#1a1a1a);font-size:1.8em}.searchbar-cancel-button[data-ion-searchbar-md], .searchbar-search-icon[data-ion-searchbar-md]{position:absolute}.searchbar-cancel-button.activated[data-ion-searchbar-md], .searchbar-search-icon.activated[data-ion-searchbar-md]{background-color:transparent}.searchbar-input[data-ion-searchbar-md]{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color-step-150,#262626);font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-input[data-ion-searchbar-md]::-moz-placeholder{color:var(--ion-placeholder-text-color,#999)}.searchbar-input[data-ion-searchbar-md]:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999)}.searchbar-input[data-ion-searchbar-md]::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-color,#999)}.searchbar-clear-button[data-ion-searchbar-md]{right:13px;top:0;padding:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.activated[data-ion-searchbar-md]{background-color:transparent}.searchbar-clear-icon[data-ion-searchbar-md]{width:22px;height:100%;color:var(--ion-text-color-step-400,#666)}.searchbar-has-focus.searchbar-show-cancel[data-ion-searchbar-md-host]   .searchbar-search-icon[data-ion-searchbar-md]{display:none}.searchbar-has-focus.searchbar-show-cancel[data-ion-searchbar-md-host]   .searchbar-cancel-button[data-ion-searchbar-md]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}ion-toolbar[data-ion-searchbar-md-host], ion-toolbar   [data-ion-searchbar-md-host]{padding:3px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();t.IonSearchbar=i,Object.defineProperty(t,"__esModule",{value:!0})});