/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e,h as i}from "./chunk-deb847e6.js";class n{constructor(){this._isOpen=!1,this.lastOnEnd=0,this.isAnimating=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeEnabled=!0,this.maxEdgeStart=50}typeChanged(t, e){const i=this.contentEl;i&&e&&(i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(t){this.updateState(),this.ionMenuChange.emit({disabled:t,open:this._isOpen})}sideChanged(){this.isEndSide=i(this.win,this.side)}swipeEnabledChanged(){this.updateState()}async componentWillLoad(){null==this.type&&(this.type="ios"===this.mode?"reveal":"overlay"),this.isServer?this.disabled=!0:this.menuCtrl=await this.lazyMenuCtrl.componentOnReady()}componentDidLoad(){if(this.isServer)return;const t=this.el.parentNode,e=this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");if(!e||!e.tagName)return void console.error('Menu: must have a "content" element to listen for drag events on.');this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged();let i=!this.disabled;!0!==i&&void 0!==i||(i=!this.menuCtrl.getMenus().some(t=>t.side===this.side&&!t.disabled)),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),this.disabled=!i}componentDidUnload(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.target.isPane(this.el),this.updateState()}onBackdropClick(t){const e=t.path;e&&!e.includes(this.menuInnerEl)&&this.lastOnEnd<t.timeStamp-100&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return this._isOpen}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!this.isActive()||this.isAnimating||t===this._isOpen?this._isOpen:(this.beforeAnimation(),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),t)}isActive(){return!this.disabled&&!this.isPaneVisible}getWidth(){return this.width}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl.createAnimation(this.type,this))}async startAnimation(t,e){const i=this.animation.reverse(!t);e?await i.playAsync():i.playSync()}canSwipe(){return this.swipeEnabled&&!this.isAnimating&&this.isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&(e=this.win,i=t.currentX,n=this.isEndSide,s=this.maxEdgeStart,n?i>=e.innerWidth-s:i<=s));var e,i,n,s}onWillStart(){return this.beforeAnimation(),this.loadAnimation()}onDragStart(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()}onDragMove(t){if(!this.isAnimating||!this.animation)return;const e=s(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}onDragEnd(t){if(!this.isAnimating||!this.animation)return;const e=this._isOpen,i=this.isEndSide,n=s(t.deltaX,e,i),a=this.width,o=n/a,r=t.velocityX,h=a/2,l=r>=0&&(r>.2||t.deltaX>h),d=r<=0&&(r<-.2||t.deltaX<-h),c=e?i?l:d:i?d:l;let u=!e&&c;e&&!c&&(u=!0);const m=(c?1-o:o)*a;let p=0;if(m>5){const t=m/Math.abs(r);p=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(u),{clearExistingCallacks:!0}).progressEnd(c,o,p)}beforeAnimation(){this.isAnimating,this.el.classList.add(a),this.backdropEl&&this.backdropEl.classList.add(o),this.isAnimating=!0}afterAnimation(t){this.isAnimating,this._isOpen=t,this.isAnimating=!1,this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(r),this.ionOpen.emit()):(this.el.classList.remove(a),this.contentEl&&this.contentEl.classList.remove(r),this.backdropEl&&this.backdropEl.classList.remove(o),this.ionClose.emit())}updateState(){!this.isActive()&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),this.isAnimating}forceClosing(){this._isOpen,this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)}hostData(){const{isEndSide:t,type:e,disabled:i,isPaneVisible:n}=this;return{role:"complementary",class:{[`menu-type-${e}`]:!0,"menu-enabled":!i,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":n}}}render(){return[t("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t,onClick:this.onBackdropClick.bind(this)},t("slot",null)),t("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}),t("ion-gesture",{canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:!this.isActive()||!this.swipeEnabled,gestureName:"menu-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"window",disableScroll:!0})]}static get is(){return"ion-menu"}static get encapsulation(){return"shadow"}static get properties(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},getWidth:{method:!0},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},setOpen:{method:!0},side:{type:String,attr:"side",watchCallbacks:["sideChanged"]},swipeEnabled:{type:Boolean,attr:"swipe-enabled",watchCallbacks:["swipeEnabledChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:304px;height:100%;contain:strict;background:var(--ion-background-color,#fff)}:host(.menu-side-start) .menu-inner{right:auto;left:0}:host(.menu-side-end) .menu-inner{right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}.menu-content-open .ion-pane,.menu-content-open .toolbar,.menu-content-open ion-content,.menu-content-open ion-pane{pointer-events:none}\@media (max-width:340px){.menu-inner{width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}.app-ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}"}static get styleMode(){return"ios"}}function s(t,e,i){return Math.max(0,e!==i?-t:t)}const a="show-menu",o="show-backdrop",r="menu-content-open";class h{constructor(){this.autoHide=!0}hostData(){return{class:{button:!0}}}render(){const e=this.config.get("menuIcon","menu");return t("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},t("button",null,t("slot",null,t("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1}))))}static get is(){return"ion-menu-button"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}}static get style(){return":host{pointer-events:all;color:var(--ion-color-base);--ion-color-base:var(--ion-color-primary, #3880ff)}button{margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;color:inherit;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-font-kerning:none;font-kerning:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon{margin:0;padding:0;pointer-events:none;font-size:31px}"}static get styleMode(){return"ios"}}class l{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){this.updateVisibility()}async onClick(){const t=await d(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return t.toggle(this.menu)}return!1}async updateVisibility(){const t=await d(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){const t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}}render(){return t("slot",null)}static get is(){return"ion-menu-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return":host(.menu-toggle-hidden){display:none}"}}function d(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}export{n as IonMenu,h as IonMenuButton,l as IonMenuToggle};