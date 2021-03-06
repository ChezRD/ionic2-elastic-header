/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './elastic-header.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/index';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/animation/animation_queue';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from '@angular/forms/src/form_builder';
import * as import28 from '@angular/core/src/di/injector';
import * as import29 from '../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import30 from '../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import31 from '../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import32 from '../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import33 from '../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import34 from '../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import35 from '../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import36 from '../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import37 from '@angular/core/src/i18n/tokens';
import * as import38 from '@angular/core/src/application_tokens';
import * as import39 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import40 from '@angular/platform-browser/src/dom/events/key_events';
import * as import41 from '@angular/core/src/zone/ng_zone';
import * as import42 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import43 from '@angular/core/src/console';
import * as import44 from '@angular/core/src/error_handler';
import * as import45 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import46 from '@angular/platform-browser/src/dom/animation_driver';
import * as import47 from '@angular/core/src/render/api';
import * as import48 from '@angular/core/src/security';
import * as import49 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import50 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import51 from '@angular/http/src/interfaces';
import * as import52 from '@angular/http/src/http';
class ElasticHeaderModuleInjector extends import0.NgModuleInjector<import1.ElasticHeaderModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _IonicModule_7:import8.IonicModule;
  _ElasticHeaderModule_8:import1.ElasticHeaderModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _ApplicationInitStatus_12:import10.ApplicationInitStatus;
  _Testability_13:import11.Testability;
  _ApplicationRef__14:import12.ApplicationRef_;
  __ApplicationRef_15:any;
  __Compiler_16:import13.Compiler;
  __APP_ID_17:any;
  __DOCUMENT_18:any;
  __HAMMER_GESTURE_CONFIG_19:import14.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_20:any[];
  __EventManager_21:import15.EventManager;
  _DomSharedStylesHost_22:import16.DomSharedStylesHost;
  __AnimationDriver_23:any;
  __DomRootRenderer_24:import17.DomRootRenderer_;
  __RootRenderer_25:any;
  __DomSanitizer_26:import18.DomSanitizerImpl;
  __Sanitizer_27:any;
  __AnimationQueue_28:import19.AnimationQueue;
  __ViewUtils_29:import20.ViewUtils;
  __IterableDiffers_30:any;
  __KeyValueDiffers_31:any;
  __SharedStylesHost_32:any;
  __Title_33:import21.Title;
  __BrowserXhr_34:import22.BrowserXhr;
  __ResponseOptions_35:import23.BaseResponseOptions;
  __XSRFStrategy_36:any;
  __XHRBackend_37:import24.XHRBackend;
  __RequestOptions_38:import25.BaseRequestOptions;
  __Http_39:any;
  __RadioControlRegistry_40:import26.RadioControlRegistry;
  __FormBuilder_41:import27.FormBuilder;
  constructor(parent:import28.Injector) {
    super(parent,[
      import29.ActionSheetCmpNgFactory,
      import30.AlertCmpNgFactory,
      import31.IonicAppNgFactory,
      import32.LoadingCmpNgFactory,
      import33.ModalCmpNgFactory,
      import34.PickerCmpNgFactory,
      import35.PopoverCmpNgFactory,
      import36.ToastCmpNgFactory
    ]
    ,([] as any[]));
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == null)) { (this.__LOCALE_ID_9 = import3._localeFactory(this.parent.get(import37.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_15():any {
    if ((this.__ApplicationRef_15 == null)) { (this.__ApplicationRef_15 = this._ApplicationRef__14); }
    return this.__ApplicationRef_15;
  }
  get _Compiler_16():import13.Compiler {
    if ((this.__Compiler_16 == null)) { (this.__Compiler_16 = new import13.Compiler()); }
    return this.__Compiler_16;
  }
  get _APP_ID_17():any {
    if ((this.__APP_ID_17 == null)) { (this.__APP_ID_17 = import38._appIdRandomProviderFactory()); }
    return this.__APP_ID_17;
  }
  get _DOCUMENT_18():any {
    if ((this.__DOCUMENT_18 == null)) { (this.__DOCUMENT_18 = import4._document()); }
    return this.__DOCUMENT_18;
  }
  get _HAMMER_GESTURE_CONFIG_19():import14.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_19 == null)) { (this.__HAMMER_GESTURE_CONFIG_19 = new import14.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_19;
  }
  get _EVENT_MANAGER_PLUGINS_20():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_20 == null)) { (this.__EVENT_MANAGER_PLUGINS_20 = [
      new import39.DomEventsPlugin(),
      new import40.KeyEventsPlugin(),
      new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_19)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_20;
  }
  get _EventManager_21():import15.EventManager {
    if ((this.__EventManager_21 == null)) { (this.__EventManager_21 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_20,this.parent.get(import41.NgZone))); }
    return this.__EventManager_21;
  }
  get _AnimationDriver_23():any {
    if ((this.__AnimationDriver_23 == null)) { (this.__AnimationDriver_23 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_23;
  }
  get _DomRootRenderer_24():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_24 == null)) { (this.__DomRootRenderer_24 = new import17.DomRootRenderer_(this._DOCUMENT_18,this._EventManager_21,this._DomSharedStylesHost_22,this._AnimationDriver_23,this._APP_ID_17)); }
    return this.__DomRootRenderer_24;
  }
  get _RootRenderer_25():any {
    if ((this.__RootRenderer_25 == null)) { (this.__RootRenderer_25 = import42._createConditionalRootRenderer(this._DomRootRenderer_24,this.parent.get(import42.NgProbeToken,(null as any)),this.parent.get(import12.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_25;
  }
  get _DomSanitizer_26():import18.DomSanitizerImpl {
    if ((this.__DomSanitizer_26 == null)) { (this.__DomSanitizer_26 = new import18.DomSanitizerImpl()); }
    return this.__DomSanitizer_26;
  }
  get _Sanitizer_27():any {
    if ((this.__Sanitizer_27 == null)) { (this.__Sanitizer_27 = this._DomSanitizer_26); }
    return this.__Sanitizer_27;
  }
  get _AnimationQueue_28():import19.AnimationQueue {
    if ((this.__AnimationQueue_28 == null)) { (this.__AnimationQueue_28 = new import19.AnimationQueue(this.parent.get(import41.NgZone))); }
    return this.__AnimationQueue_28;
  }
  get _ViewUtils_29():import20.ViewUtils {
    if ((this.__ViewUtils_29 == null)) { (this.__ViewUtils_29 = new import20.ViewUtils(this._RootRenderer_25,this._Sanitizer_27,this._AnimationQueue_28)); }
    return this.__ViewUtils_29;
  }
  get _IterableDiffers_30():any {
    if ((this.__IterableDiffers_30 == null)) { (this.__IterableDiffers_30 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_30;
  }
  get _KeyValueDiffers_31():any {
    if ((this.__KeyValueDiffers_31 == null)) { (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_31;
  }
  get _SharedStylesHost_32():any {
    if ((this.__SharedStylesHost_32 == null)) { (this.__SharedStylesHost_32 = this._DomSharedStylesHost_22); }
    return this.__SharedStylesHost_32;
  }
  get _Title_33():import21.Title {
    if ((this.__Title_33 == null)) { (this.__Title_33 = new import21.Title()); }
    return this.__Title_33;
  }
  get _BrowserXhr_34():import22.BrowserXhr {
    if ((this.__BrowserXhr_34 == null)) { (this.__BrowserXhr_34 = new import22.BrowserXhr()); }
    return this.__BrowserXhr_34;
  }
  get _ResponseOptions_35():import23.BaseResponseOptions {
    if ((this.__ResponseOptions_35 == null)) { (this.__ResponseOptions_35 = new import23.BaseResponseOptions()); }
    return this.__ResponseOptions_35;
  }
  get _XSRFStrategy_36():any {
    if ((this.__XSRFStrategy_36 == null)) { (this.__XSRFStrategy_36 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_36;
  }
  get _XHRBackend_37():import24.XHRBackend {
    if ((this.__XHRBackend_37 == null)) { (this.__XHRBackend_37 = new import24.XHRBackend(this._BrowserXhr_34,this._ResponseOptions_35,this._XSRFStrategy_36)); }
    return this.__XHRBackend_37;
  }
  get _RequestOptions_38():import25.BaseRequestOptions {
    if ((this.__RequestOptions_38 == null)) { (this.__RequestOptions_38 = new import25.BaseRequestOptions()); }
    return this.__RequestOptions_38;
  }
  get _Http_39():any {
    if ((this.__Http_39 == null)) { (this.__Http_39 = import5.httpFactory(this._XHRBackend_37,this._RequestOptions_38)); }
    return this.__Http_39;
  }
  get _RadioControlRegistry_40():import26.RadioControlRegistry {
    if ((this.__RadioControlRegistry_40 == null)) { (this.__RadioControlRegistry_40 = new import26.RadioControlRegistry()); }
    return this.__RadioControlRegistry_40;
  }
  get _FormBuilder_41():import27.FormBuilder {
    if ((this.__FormBuilder_41 == null)) { (this.__FormBuilder_41 = new import27.FormBuilder()); }
    return this.__FormBuilder_41;
  }
  createInternal():import1.ElasticHeaderModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._IonicModule_7 = new import8.IonicModule();
    this._ElasticHeaderModule_8 = new import1.ElasticHeaderModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._ApplicationInitStatus_12 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER,(null as any)));
    this._Testability_13 = new import11.Testability(this.parent.get(import41.NgZone));
    this._ApplicationRef__14 = new import12.ApplicationRef_(this.parent.get(import41.NgZone),this.parent.get(import43.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_12,this.parent.get(import11.TestabilityRegistry,(null as any)),this._Testability_13);
    this._DomSharedStylesHost_22 = new import16.DomSharedStylesHost(this._DOCUMENT_18);
    return this._ElasticHeaderModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.IonicModule)) { return this._IonicModule_7; }
    if ((token === import1.ElasticHeaderModule)) { return this._ElasticHeaderModule_8; }
    if ((token === import37.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import44.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_12; }
    if ((token === import11.Testability)) { return this._Testability_13; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__14; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_15; }
    if ((token === import13.Compiler)) { return this._Compiler_16; }
    if ((token === import38.APP_ID)) { return this._APP_ID_17; }
    if ((token === import45.DOCUMENT)) { return this._DOCUMENT_18; }
    if ((token === import14.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_19; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_20; }
    if ((token === import15.EventManager)) { return this._EventManager_21; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_22; }
    if ((token === import46.AnimationDriver)) { return this._AnimationDriver_23; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_24; }
    if ((token === import47.RootRenderer)) { return this._RootRenderer_25; }
    if ((token === import18.DomSanitizer)) { return this._DomSanitizer_26; }
    if ((token === import48.Sanitizer)) { return this._Sanitizer_27; }
    if ((token === import19.AnimationQueue)) { return this._AnimationQueue_28; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_29; }
    if ((token === import49.IterableDiffers)) { return this._IterableDiffers_30; }
    if ((token === import50.KeyValueDiffers)) { return this._KeyValueDiffers_31; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_32; }
    if ((token === import21.Title)) { return this._Title_33; }
    if ((token === import22.BrowserXhr)) { return this._BrowserXhr_34; }
    if ((token === import23.ResponseOptions)) { return this._ResponseOptions_35; }
    if ((token === import51.XSRFStrategy)) { return this._XSRFStrategy_36; }
    if ((token === import24.XHRBackend)) { return this._XHRBackend_37; }
    if ((token === import25.RequestOptions)) { return this._RequestOptions_38; }
    if ((token === import52.Http)) { return this._Http_39; }
    if ((token === import26.RadioControlRegistry)) { return this._RadioControlRegistry_40; }
    if ((token === import27.FormBuilder)) { return this._FormBuilder_41; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__14.ngOnDestroy();
    this._DomSharedStylesHost_22.ngOnDestroy();
  }
}
export const ElasticHeaderModuleNgFactory:import0.NgModuleFactory<import1.ElasticHeaderModule> = new import0.NgModuleFactory(ElasticHeaderModuleInjector,import1.ElasticHeaderModule);