webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routableComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_list_list_component__ = __webpack_require__("../../../../../src/app/views/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_actions_create_edit_create_edit_component__ = __webpack_require__("../../../../../src/app/views/actions/create-edit/create-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_actions_create_edit_create_wizard_component__ = __webpack_require__("../../../../../src/app/views/actions/create-edit/create-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_actions_delete_delete_component__ = __webpack_require__("../../../../../src/app/views/actions/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_details_view_details_view_component__ = __webpack_require__("../../../../../src/app/views/details-view/details-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/views/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_settings_settings_component__ = __webpack_require__("../../../../../src/app/views/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_actions_vm_vm_action_modal_component__ = __webpack_require__("../../../../../src/app/views/actions/vm/vm-action-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_entry_point_entry_point_component__ = __webpack_require__("../../../../../src/app/views/entry-point/entry.point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_vm_views_vm_monitor_component__ = __webpack_require__("../../../../../src/app/views/vm-views/vm-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_vm_views_vm_configure_component__ = __webpack_require__("../../../../../src/app/views/vm-views/vm-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_vm_views_vm_portlet_component__ = __webpack_require__("../../../../../src/app/views/vm-views/vm-portlet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_host_views_host_summary_component__ = __webpack_require__("../../../../../src/app/views/host-views/host.summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_host_views_host_monitor_component__ = __webpack_require__("../../../../../src/app/views/host-views/host.monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_settings_user_settings_user_component__ = __webpack_require__("../../../../../src/app/views/settings-user/settings-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_command_command_component__ = __webpack_require__("../../../../../src/app/views/command/command.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_shell_command_shell_command_component__ = __webpack_require__("../../../../../src/app/views/shell-command/shell-command.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_logs_logs_component__ = __webpack_require__("../../../../../src/app/views/logs/logs.component.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index.html', },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4__views_actions_create_edit_create_edit_component__["a" /* CreateEditComponent */] },
    { path: 'create-wizard', component: __WEBPACK_IMPORTED_MODULE_5__views_actions_create_edit_create_wizard_component__["a" /* CreateWizardComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_4__views_actions_create_edit_create_edit_component__["a" /* CreateEditComponent */] },
    { path: 'delete', component: __WEBPACK_IMPORTED_MODULE_6__views_actions_delete_delete_component__["a" /* DeleteComponent */] },
    { path: 'vm-action-modal', component: __WEBPACK_IMPORTED_MODULE_10__views_actions_vm_vm_action_modal_component__["a" /* VmActionModalComponent */] },
    {
        path: 'entry-point',
        component: __WEBPACK_IMPORTED_MODULE_11__views_entry_point_entry_point_component__["a" /* EntryPointComponent */],
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_8__views_welcome_welcome_component__["a" /* WelcomeComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__views_settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__views_list_list_component__["a" /* ListComponent */] },
            { path: 'usersettings', component: __WEBPACK_IMPORTED_MODULE_17__views_settings_user_settings_user_component__["a" /* SettingsUserComponent */] },
            { path: 'command', component: __WEBPACK_IMPORTED_MODULE_18__views_command_command_component__["a" /* CommandComponent */] },
            { path: 'shellcommand', component: __WEBPACK_IMPORTED_MODULE_19__views_shell_command_shell_command_component__["a" /* ShellCommandComponent */] },
            { path: 'logs', component: __WEBPACK_IMPORTED_MODULE_20__views_logs_logs_component__["a" /* LogsComponent */] }
        ]
    },
    { path: 'vm-monitor', component: __WEBPACK_IMPORTED_MODULE_12__views_vm_views_vm_monitor_component__["a" /* VmMonitorComponent */] },
    { path: 'vm-configure', component: __WEBPACK_IMPORTED_MODULE_13__views_vm_views_vm_configure_component__["a" /* VmConfigureComponent */] },
    { path: 'vm-portlet', component: __WEBPACK_IMPORTED_MODULE_14__views_vm_views_vm_portlet_component__["a" /* VmPortletComponent */] },
    { path: 'host-summary', component: __WEBPACK_IMPORTED_MODULE_15__views_host_views_host_summary_component__["a" /* HostSummaryComponent */] },
    { path: 'host-monitor', component: __WEBPACK_IMPORTED_MODULE_16__views_host_views_host_monitor_component__["a" /* HostMonitorComponent */] },
    { path: '**', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routableComponents = [
    __WEBPACK_IMPORTED_MODULE_4__views_actions_create_edit_create_edit_component__["a" /* CreateEditComponent */],
    __WEBPACK_IMPORTED_MODULE_5__views_actions_create_edit_create_wizard_component__["a" /* CreateWizardComponent */],
    __WEBPACK_IMPORTED_MODULE_6__views_actions_delete_delete_component__["a" /* DeleteComponent */],
    __WEBPACK_IMPORTED_MODULE_8__views_welcome_welcome_component__["a" /* WelcomeComponent */],
    __WEBPACK_IMPORTED_MODULE_9__views_settings_settings_component__["a" /* SettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_17__views_settings_user_settings_user_component__["a" /* SettingsUserComponent */],
    __WEBPACK_IMPORTED_MODULE_10__views_actions_vm_vm_action_modal_component__["a" /* VmActionModalComponent */],
    __WEBPACK_IMPORTED_MODULE_19__views_shell_command_shell_command_component__["a" /* ShellCommandComponent */],
    __WEBPACK_IMPORTED_MODULE_20__views_logs_logs_component__["a" /* LogsComponent */],
    __WEBPACK_IMPORTED_MODULE_18__views_command_command_component__["a" /* CommandComponent */],
    __WEBPACK_IMPORTED_MODULE_2__views_list_list_component__["a" /* ListComponent */],
    __WEBPACK_IMPORTED_MODULE_7__views_details_view_details_view_component__["a" /* DetailsViewComponent */],
    __WEBPACK_IMPORTED_MODULE_12__views_vm_views_vm_monitor_component__["a" /* VmMonitorComponent */],
    __WEBPACK_IMPORTED_MODULE_13__views_vm_views_vm_configure_component__["a" /* VmConfigureComponent */],
    __WEBPACK_IMPORTED_MODULE_14__views_vm_views_vm_portlet_component__["a" /* VmPortletComponent */],
    __WEBPACK_IMPORTED_MODULE_11__views_entry_point_entry_point_component__["a" /* EntryPointComponent */],
    __WEBPACK_IMPORTED_MODULE_3__page_not_found_component__["a" /* PageNotFoundComponent */]
];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<div class=\"appContent\" *ngIf=\"initialized\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.appContent {\n  width: 100%;\n  height: 100%; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACG,eAAc;EACd,YAAW;EACX,aAAY,EACd;;AAED;EACG,YAAW;EACX,aAAY,EACd","file":"app.component.scss","sourcesContent":[":host {\r\n   display: block;\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n\r\n.appContent {\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(translate, router, route, globalService) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.globalService = globalService;
        this.initialThemeLoadComplete = false;
    }
    Object.defineProperty(AppComponent.prototype, "initialized", {
        get: function () {
            return this.globalService.htmlClientSdk.isInitialized() &&
                this.initialThemeLoadComplete;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.addLangs(["en-US", "de-DE", "fr-FR"]);
        this.translate.setDefaultLang('en-US');
        this.globalService.htmlClientSdk.initialize(function () {
            var locale = _this.globalService.htmlClientSdk.app.getClientLocale();
            if (locale && _this.translate.getLangs().indexOf(locale) > 0) {
                _this.translate.use(locale);
            }
            _this.subscription = _this.route.queryParams.subscribe(function (params) {
                var view = params['view'];
                if (view) {
                    // Replace the entry URL with the redirected one. The side effect is that
                    // in the browser's history will remain only one record. So one will be
                    // able to move back to the previous client's URL.
                    _this.router.navigate(['/' + view, params], { queryParams: params, replaceUrl: true });
                }
            });
            if (_this.globalService.htmlClientSdk.app.getTheme &&
                _this.globalService.htmlClientSdk.event.onThemeChanged) {
                _this.loadTheme(true, _this.globalService.htmlClientSdk.app.getTheme());
                _this.globalService.htmlClientSdk.event.onThemeChanged(_this.loadTheme.bind(_this, false));
            }
            else {
                _this.loadTheme(true, { name: 'light' });
            }
        });
    };
    AppComponent.prototype.loadTheme = function (firstLoad, theme) {
        var _this = this;
        var themeName = theme.name;
        var supportedThemeNames = ['light', 'dark'];
        if (supportedThemeNames.indexOf(themeName) === -1) {
            themeName = supportedThemeNames[0];
        }
        var styleSheetLinkElement = document.getElementById('theme-stylesheet-link');
        var themeCssUrl = "theme-" + themeName + ".bundle.css";
        if (firstLoad) {
            var initialThemeLoadCompleteListener_1 = function (event) {
                _this.initialThemeLoadComplete = true;
                styleSheetLinkElement.removeEventListener('load', initialThemeLoadCompleteListener_1);
                styleSheetLinkElement.removeEventListener('error', initialThemeLoadCompleteListener_1);
            };
            styleSheetLinkElement.addEventListener('load', initialThemeLoadCompleteListener_1);
            styleSheetLinkElement.addEventListener('error', initialThemeLoadCompleteListener_1);
        }
        styleSheetLinkElement.setAttribute("href", themeCssUrl);
        document.documentElement.setAttribute("data-theme", themeName);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_clarity_icons__ = __webpack_require__("../../../../clarity-icons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_clarity_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_clarity_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_hosts_service__ = __webpack_require__("../../../../../src/app/services/hosts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_header_header_component__ = __webpack_require__("../../../../../src/app/views/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_status_status_component__ = __webpack_require__("../../../../../src/app/views/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_modal_label_input_modal_label_input_component__ = __webpack_require__("../../../../../src/app/views/modal-label-input/modal-label-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_tabs_summary_summary_component__ = __webpack_require__("../../../../../src/app/views/tabs/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_tabs_monitor_monitor_component__ = __webpack_require__("../../../../../src/app/views/tabs/monitor/monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_tabs_configure_configure_component__ = __webpack_require__("../../../../../src/app/views/tabs/configure/configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_tabs_hosts_hosts_list_component__ = __webpack_require__("../../../../../src/app/views/tabs/hosts/hosts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_tabs_configure_settings_settings_component__ = __webpack_require__("../../../../../src/app/views/tabs/configure/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_tabs_configure_additional_additional_view_component__ = __webpack_require__("../../../../../src/app/views/tabs/configure/additional/additional-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_clarity_icons_shapes_all_shapes__ = __webpack_require__("../../../../clarity-icons/shapes/all-shapes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_clarity_icons_shapes_all_shapes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_clarity_icons_shapes_all_shapes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_entry_point_entry_point_component__ = __webpack_require__("../../../../../src/app/views/entry-point/entry.point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_host_views_host_summary_component__ = __webpack_require__("../../../../../src/app/views/host-views/host.summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__views_host_views_host_monitor_component__ = __webpack_require__("../../../../../src/app/views/host-views/host.monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_ssh_service__ = __webpack_require__("../../../../../src/app/services/ssh.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_6_clarity_icons__["ClarityIcons"].add({
            "chassisIcon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><title>chassis</title><g id=\"083e8a78-1df0-436f-9a22-5827915fd5f3\" data-name=\"Layer 1\"><path d=\"M.53,9H14.47a.53.53,0,0,1,.53.53v2.93a.53.53,0,0,1-.53.53H.54A.54.54,0,0,1,0,12.47V9.54A.53.53,0,0,1,.53,9Z\" fill=\"#cbd9e0\"/><path d=\"M15,9,13.17,4.07c-.15-.29-.22-.51-.77-.51H3.6c-.54,0-.62.23-.77.52L1,9Z\" fill=\"#cad8df\"/><path d=\"M.54,9H14.47a.53.53,0,0,1,.53.53v2.93a.53.53,0,0,1-.53.53H.54A.54.54,0,0,1,0,12.47V9.55A.54.54,0,0,1,.54,9Z\" fill=\"#9bb2ba\"/><path d=\"M15.44,9H.66a1,1,0,0,1,1-1H14.48A1,1,0,0,1,15.44,9Z\" fill=\"#fff\"/><path d=\"M15,14H1a1,1,0,0,1-1-1V9.26L2,3.77A1.2,1.2,0,0,1,3.23,3h9.39a1.2,1.2,0,0,1,1.23.77l.06.12L16,9.56V13A1,1,0,0,1,15,14ZM3.26,4C3,4,3,4,2.93,4.22L1,9.69V13l14,0,0-3.42v0L13,4.23C12.89,4,12.89,4,12.66,4Z\" fill=\"#235d80\"/><rect x=\"2\" y=\"10\" width=\"1\" height=\"2\" fill=\"#235d80\"/><rect x=\"4\" y=\"10.04\" width=\"0.91\" height=\"1.93\" fill=\"#235d80\"/><rect x=\"6\" y=\"10\" width=\"1\" height=\"2\" fill=\"#235d80\"/><rect x=\"8.02\" y=\"10\" width=\"3.98\" height=\"1\" fill=\"#235d80\"/><rect x=\"13\" y=\"10\" width=\"1\" height=\"1\" fill=\"#235d80\"/></g></svg>"
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["a" /* ClarityModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["b" /* routableComponents */],
                __WEBPACK_IMPORTED_MODULE_27__views_entry_point_entry_point_component__["a" /* EntryPointComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_tabs_summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_tabs_monitor_monitor_component__["a" /* MonitorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_tabs_configure_configure_component__["a" /* ConfigureComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_tabs_hosts_hosts_list_component__["a" /* HostListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_tabs_configure_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_tabs_configure_additional_additional_view_component__["a" /* AdditionalViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_status_status_component__["a" /* StatusComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_modal_label_input_modal_label_input_component__["a" /* ModalLabelInputComponent */],
                __WEBPACK_IMPORTED_MODULE_30__views_host_views_host_summary_component__["a" /* HostSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_31__views_host_views_host_monitor_component__["a" /* HostMonitorComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_chassis_service__["a" /* ChassisService */], __WEBPACK_IMPORTED_MODULE_10__services_modal_service__["a" /* ModalConfigService */], __WEBPACK_IMPORTED_MODULE_11__services_resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_9__services_hosts_service__["a" /* HostsService */], __WEBPACK_IMPORTED_MODULE_26__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_28__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_29__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_33__services_ssh_service__["a" /* SSHService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/model/chassis.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chassis; });
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var Chassis = (function () {
    function Chassis() {
    }
    Chassis.DEFAULT_CHASSIS_PAGE_SIZE = 10;
    Chassis.PROP_CHASSIS_PAGE_SIZE = "com.vmware.samples.customobject.numberChassisPerPage";
    return Chassis;
}());

//# sourceMappingURL=chassis.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/command.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
/**
* Command history
*/
var Command = (function () {
    function Command() {
    }
    return Command;
}());

//# sourceMappingURL=command.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/host.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Host; });
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var Host = (function () {
    function Host() {
    }
    return Host;
}());

//# sourceMappingURL=host.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
    UserModel
*/
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n    <article class=\"template animated slideInRight\">\n      <h4>Page Not Found!</h4>\n    </article>\n  "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/chassis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChassisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChassisService = (function (_super) {
    __extends(ChassisService, _super);
    function ChassisService(httpService) {
        var _this = _super.call(this) || this;
        _this.httpService = httpService;
        return _this;
    }
    /**
     * Creates a new object of type Chassis
     * @param chassis - the created object.
     */
    ChassisService.prototype.create = function (chassis) {
        var _this = this;
        chassis.name = chassis.name.trim();
        return new Promise(function (resolve, reject) {
            _this.httpService.post("chassis/create", JSON.stringify(chassis))
                .subscribe(function (result) {
                if (result) {
                    chassis.id = result;
                    chassis.healthStatus = 45;
                    chassis.complianceStatus = 81;
                    resolve(chassis);
                }
                else {
                    reject("Failed to create chassis.");
                }
            });
        });
    };
    /**
     * Edit the given chassis.
     * @param chassis - the edited chassis.
     */
    ChassisService.prototype.edit = function (chassis) {
        var _this = this;
        var newChassis = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), chassis);
        newChassis.name = newChassis.name.trim();
        return new Promise(function (resolve, reject) {
            _this.httpService.put("chassis/edit", JSON.stringify(chassis))
                .subscribe(function (result) {
                resolve(result);
            });
        });
    };
    ChassisService.prototype.delete = function () {
        var _this = this;
        var chassisIds = this.htmlClientSdk.app.getContextObjects().join(",");
        return new Promise(function (resolve, reject) {
            _this.httpService.delete("chassis/delete", "ids=" + chassisIds)
                .subscribe(function () {
                resolve(true);
            });
        });
    };
    /**
     * Retrieves all related Chassis to the provided objectId
     * @param objectId
     */
    ChassisService.prototype.getRelatedChassis = function (objectId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.get("hosts/" + objectId + "/chassis")
                .subscribe(function (result) {
                if (result) {
                    resolve(result);
                }
                else {
                    reject("Failed to get related chassis for object '" + objectId + "'.");
                }
            });
        });
    };
    ChassisService.prototype.getAllChassis = function () {
        var _this = this;
        var data;
        return new Promise(function (resolve, reject) {
            _this.httpService.get("chassis/list")
                .subscribe(function (result) {
                if (result) {
                    data = result;
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var chassis = data_1[_i];
                        chassis.healthStatus = 45;
                        chassis.complianceStatus = 81;
                    }
                    resolve(data);
                }
                else {
                    reject("Failed to get a list of all chassis.");
                }
            });
        });
    };
    ChassisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]) === "function" && _a || Object])
    ], ChassisService);
    return ChassisService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]));

//# sourceMappingURL=chassis.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService() {
        this.htmlClientSdk = window.htmlClientSdk;
    }
    GlobalService.WEB_CONTEXT_PATH = "" + window.location.origin + window.location.pathname + "/../rest";
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hosts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HostsService = (function (_super) {
    __extends(HostsService, _super);
    function HostsService(httpService) {
        var _this = _super.call(this) || this;
        _this.httpService = httpService;
        return _this;
    }
    /**
     * Sends a get message to get all connected hosts
     */
    HostsService.prototype.getConnectedHosts = function (chassis) {
        var _this = this;
        var endpoint = chassis ? "chassis/" + chassis.id + "/hosts" : "hosts";
        return new Promise(function (resolve, reject) {
            _this.httpService.get(endpoint)
                .subscribe(function (result) {
                if (result) {
                    resolve(result);
                }
                else {
                    reject("Failed to get a list of hosts.");
                }
            });
        });
    };
    /**
     * Sends a message to edit the Host object
     */
    HostsService.prototype.edit = function (host) {
        var _this = this;
        var endpoint = "hosts";
        return new Promise(function (resolve, reject) {
            _this.httpService.put(endpoint, host)
                .subscribe(function (result) {
                if (!result) {
                    reject("Failed to assign selected chassis to host.");
                }
                else {
                    resolve();
                }
            });
        });
    };
    HostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object])
    ], HostsService);
    return HostsService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */]));

//# sourceMappingURL=hosts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.JSON_HEADERS = {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json;charset=utf-8'
        };
        _this.CACHE_CONTROL_HEADERS = {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        };
        /**
         * Default callback for handling errors on http calls.
         */
        _this.handleError = function (error) {
            var DEFAULT_ERROR_MESSAGE = 'Backend server error';
            var throwable;
            try {
                throwable = (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) ? error.json() : error;
            }
            catch (e) {
                // Response is not JSON, so expect a general HTTP error.
                throwable = error;
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(throwable || DEFAULT_ERROR_MESSAGE);
        };
        return _this;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.getSessionInfo = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.htmlClientSdk.app.getSessionInfo(function (sessionInfo) {
                observer.next(sessionInfo);
                observer.complete();
            });
        });
    };
    /**
     * Performs HTTP GET request against the remote plugin REST endpoint.
     *
     * @param {string} path
     *    Sub-path the GET request will be made for.
     */
    HttpService.prototype.get = function (path, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function (si) {
            return _this.doGetOrDelete(_this.http.get.bind(_this.http), si, path, params);
        });
    };
    /**
     * Performs HTTP POST request against the remote plugin REST endpoint.
     *
     * @param {string} path
     *    Sub-path the request will be made for.
     * @param {any} body (optional)
     *    The body of the request.
     * @param {string} params optional
     *    Query string parameters of the request.
     */
    HttpService.prototype.post = function (path, body, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function (si) {
            return _this.doPostOrPut(_this.http.post.bind(_this.http), si, path, body, params);
        });
    };
    /**
     * Performs HTTP PUT request against the remote plugin REST endpoint.
     *
     * @param {string} path
     *    Sub-path the request will be made for.
     * @param {any} body (optional)
     *    The body of the request.
     * @param {string} params optional
     *    Query string parameters of the request.
     */
    HttpService.prototype.put = function (path, body, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function (si) {
            return _this.doPostOrPut(_this.http.put.bind(_this.http), si, path, body, params);
        });
    };
    /**
     * Performs HTTP DELETE request against the remote plugin REST endpoint.
     *
     * @param {string} path
     *    Sub-path the request will be made for.
     * @param {string} params optional
     *    Query string parameters of the request.
     */
    HttpService.prototype.delete = function (path, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function (si) {
            return _this.doGetOrDelete(_this.http.delete.bind(_this.http), si, path, params);
        });
    };
    HttpService.convertPath = function (path) {
        return __WEBPACK_IMPORTED_MODULE_7__global_service__["a" /* GlobalService */].WEB_CONTEXT_PATH + "/" + path;
    };
    HttpService.prototype.doGetOrDelete = function (httpMethod, si, path, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function () {
            return httpMethod(HttpService_1.convertPath(path), _this.getRequestOptionsArgs(params, si))
                .catch(_this.handleError)
                .share()
                .map(function (response) { return HttpService_1.parseResponse(response); });
        });
    };
    HttpService.prototype.doPostOrPut = function (httpMethod, si, path, body, params) {
        var _this = this;
        return this.getSessionInfo().flatMap(function () {
            return httpMethod(HttpService_1.convertPath(path), body, _this.getRequestOptionsArgs(params, si))
                .catch(_this.handleError)
                .share()
                .map(function (response) { return HttpService_1.parseResponse(response); });
        });
    };
    HttpService.prototype.getRequestOptionsArgs = function (params, si) {
        return {
            params: params,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](__WEBPACK_IMPORTED_MODULE_8_lodash__["extend"]({}, this.JSON_HEADERS, this.CACHE_CONTROL_HEADERS, {
                "vmware-api-gateway-url": this.htmlClientSdk.app
                    .getApiEndpoints().uiApiEndpoint.fullUrl,
                "vmware-api-session-id": si.sessionToken
            }))
        };
    };
    /**
     * Parses HTTP response as JSON.
     *
     * @param {Response} response
     *    HTTP response.
     *
     * @throw Error
     *    If the response is not valid JSON.
     */
    HttpService.parseResponse = function (response) {
        var out = null;
        try {
            out = response.json();
        }
        catch (e) {
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
        }
        return out;
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HttpService);
    return HttpService;
    var HttpService_1, _a;
}(__WEBPACK_IMPORTED_MODULE_7__global_service__["a" /* GlobalService */]));

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalConfigService = (function () {
    function ModalConfigService(resources) {
        this.resources = resources;
    }
    ModalConfigService.prototype.createAddConfig = function () {
        var addAction = {
            url: "index.html?view=create",
            title: this.resources.getString("shared.modal.createChassis"),
            size: { width: 700, height: 400 }
        };
        return addAction;
    };
    ModalConfigService.prototype.createAddWizardConfig = function () {
        var addWizardAction = {
            url: "index.html?view=create-wizard",
            closable: false,
            size: { width: 800, height: 500 }
        };
        return addWizardAction;
    };
    ModalConfigService.prototype.createDeleteConfig = function () {
        var deleteAction = {
            url: "index.html?view=delete",
            size: { width: 400, height: 120 },
            closable: false
        };
        return deleteAction;
    };
    ModalConfigService.prototype.createEditConfig = function () {
        var editAction = {
            url: "index.html?view=edit",
            title: this.resources.getString("shared.modal.editChassis"),
            size: { width: 780, height: 500 }
        };
        return editAction;
    };
    ModalConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _a || Object])
    ], ModalConfigService);
    return ModalConfigService;
    var _a;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceService = (function () {
    function ResourceService(translate) {
        var _this = this;
        this.translate = translate;
        var strings = ["shared.modal.createChassis",
            "shared.modal.editChassis",
            "common.active",
            "common.standBy",
            "shared.modal.createChassis",
            "shared.modal.editChassis",
            "actions.create.emptyNameError",
            "actions.create.usedNameError"];
        this.translate.get(strings).subscribe(function (result) {
            _this.localizedStrings = result;
        });
    }
    ResourceService.prototype.getString = function (str) {
        return this.localizedStrings && this.localizedStrings.hasOwnProperty(str) ? this.localizedStrings[str] : str;
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
    ], ResourceService);
    return ResourceService;
    var _a;
}());

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ssh.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SSHService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SSHService = (function (_super) {
    __extends(SSHService, _super);
    function SSHService(httpService) {
        var _this = _super.call(this) || this;
        _this.httpService = httpService;
        return _this;
    }
    /**
     Sends a command to server
     */
    SSHService.prototype.execute = function (command) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.httpService.post("api/executeCmd", command)
                .subscribe(function (result) {
                if (result) {
                    command.result = result;
                    resolve(command);
                }
                else {
                    reject("Failed to execute.");
                }
            });
        }));
    };
    SSHService.prototype.executeShell = function (command) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.httpService.post("api/executeShellCmd", command)
                .subscribe(function (result) {
                if (result) {
                    command.result = result;
                    resolve(command);
                }
                else {
                    reject("Failed to execute.");
                }
            });
        }));
    };
    SSHService.prototype.getLogs = function () {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.httpService.get("api/getLogs").subscribe(function (result) {
                if (result) {
                    resolve(result);
                }
                else {
                    reject("Failed");
                }
            });
        }));
    };
    SSHService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object])
    ], SSHService);
    return SSHService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */]));

//# sourceMappingURL=ssh.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(httpService) {
        var _this = _super.call(this) || this;
        _this.httpService = httpService;
        return _this;
    }
    /**
        Update userinfo on server
    */
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.httpService.post("api/updUser", user).subscribe(function (result) {
                if (result) {
                    user.status = true;
                    user.password = "******";
                    resolve(user);
                }
                else {
                    reject("Failed to update.");
                }
            });
        }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationUtil = (function () {
    function ValidationUtil() {
    }
    ValidationUtil.isNullOrEmpty = function (name) {
        return !(name && name.trim().length != 0);
    };
    ValidationUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ValidationUtil);
    return ValidationUtil;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Copyright (c) 2017 VMware, Inc. All rights reserved. */

/**
 * In production mode there is no 'window' object in build-time.
 * This wrapper-service solves the problem
 */
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "window", {
        get: function () {
            return (function () {
                return window;
            })();
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], WindowService);
    return WindowService;
}());

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/app/views/actions/create-edit/create-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<form (ngSubmit)=\"onSubmit()\" class=\"modal-content-chassis\">\r\n    <section class=\"form-block\">\r\n        <modal-label-input\r\n                [inputId]=\"'chassisName'\"\r\n                [inputValue]=\"chassis.name\"\r\n                [labelValue]=\"'common.name'\"\r\n                [placeholderValue]=\"'actions.namePlaceholder'\"\r\n                [valueRequired]=\"true\"\r\n                [invalidValue]=\"!isValid() || chassisExists\"\r\n                [invalidValueError]=\"invalidNameError()\"\r\n                (inputValueChanged)=\"nameChanged($event)\">\r\n        </modal-label-input>\r\n\r\n        <modal-label-input\r\n                [inputId]=\"'chassisServerType'\"\r\n                [inputValue]=\"chassis.serverType\"\r\n                [labelValue]=\"'common.serverType'\"\r\n                [placeholderValue]=\"'actions.serverTypePlaceholder'\"\r\n                (inputValueChanged)=\"serverTypeChanged($event)\">\r\n        </modal-label-input>\r\n\r\n        <modal-label-input\r\n                [inputId]=\"'chassisDimensions'\"\r\n                [inputValue]=\"chassis.dimensions\"\r\n                [labelValue]=\"'common.dimensions'\"\r\n                [placeholderValue]=\"'actions.dimensionsPlaceholder'\"\r\n                (inputValueChanged)=\"dimensionsChanged($event)\">\r\n        </modal-label-input>\r\n\r\n        <div class=\"form-group\">\r\n            <label>\r\n                {{ 'common.state' | translate }}:\r\n                <div role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md tooltip-top-right\">\r\n                    <clr-icon class=\"info-icon\" shape=\"info-circle\" size=\"18\"></clr-icon>\r\n                    <span class=\"tooltip-content\">{{ 'actions.whatCanTheStateBe' | translate }}</span>\r\n                </div>\r\n            </label>\r\n            <clr-checkbox id=\"chassisState\" name=\"state\" [(ngModel)]=\"chassis.isActive \">\r\n                {{ 'common.active' | translate }}\r\n            </clr-checkbox>\r\n        </div>\r\n\r\n        <div class=\"group\">\r\n            <hosts-list-view\r\n               [preselectedHostsIds]=\"chassis.relatedHostsIds || []\"\r\n               (hostsSelectionChange)=\"onHostsSelectionChange($event)\"\r\n               (onNavigateToHostObject)=\"onNavigateToHostObject()\">\r\n            </hosts-list-view>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn\" (click)=\"onCancel()\" id=\"cancelBtn\">{{ 'common.cancel' | translate }}</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\"\r\n                    [disabled]=\"!isValid()\" id=\"saveBtn\">{{ 'common.ok' | translate }}</button>\r\n        </div>\r\n    </section>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/actions/create-edit/create-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_edit__ = __webpack_require__("../../../../../src/app/views/actions/create-edit/create-edit.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Represents a form for creating or editing a chassis.
 */
var CreateEditComponent = (function (_super) {
    __extends(CreateEditComponent, _super);
    function CreateEditComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateEditComponent.prototype.onSubmit = function () {
        if (this.isEditAction()) {
            this.edit();
        }
        else {
            this.create();
        }
    };
    CreateEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/actions/create-edit/create-edit.component.html")
        })
    ], CreateEditComponent);
    return CreateEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__create_edit__["a" /* CreateEditChassis */]));

//# sourceMappingURL=create-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/actions/create-edit/create-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEditChassis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation__ = __webpack_require__("../../../../../src/app/services/validation.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CreateEditChassis = (function () {
    function CreateEditChassis(chassisService, resourceService, route) {
        this.chassisService = chassisService;
        this.resourceService = resourceService;
        this.route = route;
        this.action = route.snapshot.url[0].path;
        this.chassis = new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]();
    }
    CreateEditChassis.prototype.ngOnInit = function () {
        if (this.isEditAction()) {
            Object.assign(this.chassis, this.chassisService.htmlClientSdk.app.getContextObjects()[0]);
        }
    };
    CreateEditChassis.prototype.onCancel = function (result) {
        this.chassisService.htmlClientSdk.modal.close(result);
    };
    CreateEditChassis.prototype.isValid = function () {
        return !__WEBPACK_IMPORTED_MODULE_5__services_validation__["a" /* ValidationUtil */].isNullOrEmpty(this.chassis.name);
    };
    CreateEditChassis.prototype.invalidNameError = function () {
        if (!this.chassisExists) {
            return this.resourceService.getString("actions.create.emptyNameError");
        }
        else {
            return this.resourceService.getString("actions.create.usedNameError");
        }
    };
    CreateEditChassis.prototype.isEditAction = function () {
        return this.action === CreateEditChassis.EDIT_ACTION;
    };
    CreateEditChassis.prototype.nameChanged = function (newValue) {
        this.chassis.name = newValue;
    };
    CreateEditChassis.prototype.serverTypeChanged = function (newValue) {
        this.chassis.serverType = newValue;
    };
    CreateEditChassis.prototype.dimensionsChanged = function (newValue) {
        this.chassis.dimensions = newValue;
    };
    CreateEditChassis.prototype.onCreateChassisFailed = function () {
        this.chassisExists = true;
    };
    CreateEditChassis.prototype.create = function () {
        var _this = this;
        this.chassisExists = false;
        this.chassisService.create(this.chassis)
            .then(function (result) {
            if (result) {
                _this.onCancel(result);
            }
            else {
                _this.onCreateChassisFailed();
            }
        })
            .catch(function () {
            _this.onCancel();
        });
    };
    CreateEditChassis.prototype.edit = function () {
        var _this = this;
        this.chassisService.edit(this.chassis)
            .then(function (chassisObjectUpdated) {
            if (!chassisObjectUpdated) {
                _this.chassisExists = true;
            }
            else {
                _this.onCancel(_this.chassis);
            }
        })
            .catch(function () {
            _this.onCancel();
        });
    };
    CreateEditChassis.prototype.onHostsSelectionChange = function (selectedHosts) {
        this.chassis.relatedHostsIds = selectedHosts;
    };
    CreateEditChassis.prototype.onNavigateToHostObject = function () {
        this.onCancel();
    };
    CreateEditChassis.EDIT_ACTION = "edit";
    CreateEditChassis = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__services_resource_service__["a" /* ResourceService */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], CreateEditChassis);
    return CreateEditChassis;
    var _a, _b, _c;
}());

//# sourceMappingURL=create-edit.js.map

/***/ }),

/***/ "../../../../../src/app/views/actions/create-edit/create-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<clr-wizard #wizard\r\n            [clrWizardOpen]=\"true\"\r\n            [clrWizardSize]=\"'lg'\"\r\n            [clrWizardPreventModalAnimation]=\"true\"\r\n            class=\"clr-wizard--inline clr-wizard--no-shadow\"\r\n            style=\"height: 500px;\">\r\n\r\n    <clr-wizard-title>Add Chassis</clr-wizard-title>\r\n\r\n    <clr-wizard-button [type]=\"'cancel'\" (click)=\"onCancel()\">{{ 'common.cancel' | translate }}</clr-wizard-button>\r\n    <clr-wizard-button [type]=\"'previous'\">{{ 'common.back' | translate }}</clr-wizard-button>\r\n    <clr-wizard-button [type]=\"'next'\">{{ 'common.next' | translate }}</clr-wizard-button>\r\n    <clr-wizard-button [type]=\"'finish'\">{{ 'common.ok' | translate }}</clr-wizard-button>\r\n\r\n    <clr-wizard-page [clrWizardPageNextDisabled]=\"!isValid()\">\r\n        <ng-template clrPageTitle>\r\n            {{ 'actions.create.wizardPage1' | translate }}\r\n        </ng-template>\r\n        <form>\r\n            <modal-label-input\r\n                    [customStyle]=\"{'padding-left': '120px'}\"\r\n                    [inputId]=\"'chassisName'\"\r\n                    [inputValue]=\"chassis.name\"\r\n                    [labelValue]=\"'common.name'\"\r\n                    [placeholderValue]=\"'actions.namePlaceholder'\"\r\n                    [valueRequired]=\"true\"\r\n                    [invalidValue]=\"!isValid() || chassisExists\"\r\n                    [invalidValueError]=\"invalidNameError()\"\r\n                    (inputValueChanged)=\"nameChanged($event)\">\r\n            </modal-label-input>\r\n\r\n            <modal-label-input\r\n                    [customStyle]=\"{'padding-left': '120px'}\"\r\n                    [inputId]=\"'chassisServerType'\"\r\n                    [inputValue]=\"chassis.serverType\"\r\n                    [labelValue]=\"'common.serverType'\"\r\n                    [placeholderValue]=\"'actions.serverTypePlaceholder'\"\r\n                    (inputValueChanged)=\"serverTypeChanged($event)\">\r\n            </modal-label-input>\r\n        </form>\r\n    </clr-wizard-page>\r\n    <clr-wizard-page>\r\n        <ng-template clrPageTitle>\r\n            {{ 'actions.create.wizardPage2' | translate }}\r\n        </ng-template>\r\n        <form>\r\n            <modal-label-input\r\n                    [customStyle]=\"{'padding-left': '120px'}\"\r\n                    [inputId]=\"'chassisDimensions'\"\r\n                    [inputValue]=\"chassis.dimensions\"\r\n                    [labelValue]=\"'common.dimensions'\"\r\n                    [placeholderValue]=\"'actions.dimensionsPlaceholder'\"\r\n                    (inputValueChanged)=\"dimensionsChanged($event)\">\r\n            </modal-label-input>\r\n\r\n            <div class=\"form-group\" style=\"padding-left: 120px\">\r\n                <label>\r\n                    {{ 'common.state' | translate }}:\r\n                    <div role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md tooltip-top-right\">\r\n                        <clr-icon class=\"info-icon\" shape=\"info-circle\" size=\"18\"></clr-icon>\r\n                        <span class=\"tooltip-content\">{{ 'actions.whatCanTheStateBe' | translate }}</span>\r\n                    </div>\r\n                </label>\r\n                <clr-checkbox id=\"chassisState\" name=\"state\" [(ngModel)]=\"chassis.isActive \">\r\n                    {{ 'common.active' | translate }}\r\n                </clr-checkbox>\r\n            </div>\r\n        </form>\r\n    </clr-wizard-page>\r\n    <clr-wizard-page #myFinishPage (clrWizardPageOnLoad)=\"loadReadyToCompletePageData()\"\r\n                     clrWizardPagePreventDefault=\"true\"\r\n                     (clrWizardPageOnCommit)=\"onSubmit()\"\r\n                     (clrWizardPageOnCancel)=\"onCancel()\"\r\n                     (clrWizardPagePrevious)=\"onGoBack()\">\r\n        <ng-template clrPageTitle>\r\n            {{ 'actions.create.wizardPage3' | translate }}\r\n        </ng-template>\r\n        <form>\r\n            <clr-alert *ngIf=\"chassisExists\" clrAlertType=\"alert-danger\">\r\n                <div class=\"alert-item\">\r\n                    {{ 'actions.create.usedNameError' | translate }}\r\n                </div>\r\n            </clr-alert>\r\n            <form>\r\n                <div class=\"form-group\" style=\"margin-bottom: 0px\">\r\n                    <span>{{ 'common.name' | translate }}:</span>\r\n                    <span>{{readyToCompleteData.name}}</span>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-bottom: 0px\">\r\n                    <span>{{ 'common.serverType' | translate }}:</span>\r\n                    <span>{{readyToCompleteData.serverType}}</span>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-bottom: 0px\">\r\n                    <span>{{ 'common.dimensions' | translate }}:</span>\r\n                    <span>{{readyToCompleteData.dimensions}}</span>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-bottom: 0px\">\r\n                    <span>{{ 'common.state' | translate }}:</span>\r\n                    <span>\r\n                    <chassis-status [isActive]=\"readyToCompleteData.state\"></chassis-status>\r\n                </span>\r\n                </div>\r\n            </form>\r\n        </form>\r\n    </clr-wizard-page>\r\n</clr-wizard>"

/***/ }),

/***/ "../../../../../src/app/views/actions/create-edit/create-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_edit__ = __webpack_require__("../../../../../src/app/views/actions/create-edit/create-edit.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateWizardComponent = (function (_super) {
    __extends(CreateWizardComponent, _super);
    function CreateWizardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.readyToCompleteData = {};
        return _this;
    }
    CreateWizardComponent.prototype.formatEmptyOrNullValue = function (value) {
        if (value == null || value.trim() == "") {
            return "--";
        }
        return value;
    };
    CreateWizardComponent.prototype.loadReadyToCompletePageData = function () {
        this.readyToCompleteData = {
            name: this.chassis.name,
            serverType: this.formatEmptyOrNullValue(this.chassis.serverType),
            dimensions: this.formatEmptyOrNullValue(this.chassis.dimensions),
            state: this.chassis.isActive
        };
    };
    CreateWizardComponent.prototype.onCreateChassisFailed = function () {
        _super.prototype.onCreateChassisFailed.call(this);
        this.finishPage.completed = false;
    };
    CreateWizardComponent.prototype.onSubmit = function () {
        this.finishPage.completed = true;
        this.create();
    };
    CreateWizardComponent.prototype.onGoBack = function () {
        this.wizard.previous();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("wizard"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["b" /* Wizard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["b" /* Wizard */]) === "function" && _a || Object)
    ], CreateWizardComponent.prototype, "wizard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("myFinishPage"),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["c" /* WizardPage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_clarity_angular__["c" /* WizardPage */]) === "function" && _b || Object)
    ], CreateWizardComponent.prototype, "finishPage", void 0);
    CreateWizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/actions/create-edit/create-wizard.component.html"),
            styles: ["\n         .appContent {\n            padding: 0 0 0 0 !important;\n         }\n      "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
        })
    ], CreateWizardComponent);
    return CreateWizardComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__create_edit__["a" /* CreateEditChassis */]));

//# sourceMappingURL=create-wizard.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/actions/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<form (ngSubmit)=\"onSubmit()\" class=\"modal-content-delete\" #deleteChassisForm=\"ngForm\">\r\n    <div class=\"modal-body content\">\r\n        {{ 'actions.delete.deleteTheChassis' | translate }}?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\" type=\"button\" (click)=\"onCancel()\">{{ 'common.no' | translate }}</button>\r\n        <button class=\"btn btn-primary\" type=\"submit\">{{ 'common.yes' | translate }}</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/actions/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteComponent = (function () {
    function DeleteComponent(chassisService) {
        this.chassisService = chassisService;
    }
    DeleteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.chassisService.delete()
            .then(function (result) {
            _this.chassisService.htmlClientSdk.modal.close(result);
        })
            .catch(function () {
            _this.chassisService.htmlClientSdk.modal.close();
        });
    };
    DeleteComponent.prototype.onCancel = function () {
        this.chassisService.htmlClientSdk.modal.close();
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: '[delete-dialog-content]',
            template: __webpack_require__("../../../../../src/app/views/actions/delete/delete.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */]) === "function" && _a || Object])
    ], DeleteComponent);
    return DeleteComponent;
    var _a;
}());

//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/actions/vm/vm-action-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<form (ngSubmit)=\"onSubmit()\" class=\"vm-action-modal-content\">\r\n    <section class=\"form-block\">\r\n        <modal-label-input\r\n                [inputId]=\"'name'\"\r\n                [labelValue]=\"'common.name'\">\r\n        </modal-label-input>\r\n        <modal-label-input\r\n                [inputId]=\"'type'\"\r\n                [labelValue]=\"'common.serverType'\">\r\n        </modal-label-input>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn\" (click)=\"onClose()\" id=\"cancelBtn\">{{ 'common.cancel' | translate }}</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" id=\"okBtn\">{{ 'common.ok' | translate }}</button>\r\n        </div>\r\n    </section>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/actions/vm/vm-action-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmActionModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VmActionModalComponent = (function () {
    function VmActionModalComponent(chassisService) {
        this.chassisService = chassisService;
    }
    VmActionModalComponent.prototype.closeModal = function () {
        this.chassisService.htmlClientSdk.modal.close();
    };
    VmActionModalComponent.prototype.onClose = function () {
        this.closeModal();
    };
    VmActionModalComponent.prototype.onSubmit = function () {
        this.closeModal();
    };
    VmActionModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/actions/vm/vm-action-modal.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */]) === "function" && _a || Object])
    ], VmActionModalComponent);
    return VmActionModalComponent;
    var _a;
}());

//# sourceMappingURL=vm-action-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/command/command.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\n<div class=\"viewTitle\">{{ 'common.execute1' | translate }}</div>\n\n<div class=\"clr-row\">\n    <clr-stack-view>\n        <clr-stack-block>\n            <clr-stack-label>{{ 'actions.executecmd' | translate }}</clr-stack-label>\n            <clr-stack-content>\n            <span>\n            <input type=\"text\" [(ngModel)]=\"command\"/>\n                </span>\n            </clr-stack-content>\n        </clr-stack-block>\n    </clr-stack-view>\n</div>\n\n<div class=\"clr-row text-center\">\n    <button class=\"btn btn-sm\" (click)=\"onExecute()\">{{ 'common.run' | translate }}</button>\n</div>\n\n<div class=\"clr-row\">\n    <div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                {{'actions.executionsuccess'| translate}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"alert alert-warning\" *ngIf=\"showFailMessage\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                {{'actions.executionfail'| translate}}</span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"clr-row\" *ngIf=\"showSuccessMessage\">\n    <h3>{{command}}</h3>\n</div>\n\n<div class=\"clr-row\" *ngIf=\"showSuccessMessage\">\n    <p style=\"white-space: pre-line;\">{{result}}</p>\n</div>\n\n\n\n<!--<div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">-->\n<!--    <div class=\"alert-items\">-->\n<!--        <div class=\"alert-item static\">-->\n<!--            <div class=\"alert-icon-wrapper\">-->\n<!--                <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>-->\n<!--            </div>-->\n<!--            <span class=\"alert-text\">-->\n<!--                {{ 'settings.theNumberOfDisplayedChassisPerPage' | translate }}-->\n<!--                '{{hostname}}' {{ 'settings.wasUpdatedInTheWebLocalStorage' | translate }}.-->\n<!--            </span>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/views/command/command.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__ = __webpack_require__("../../../../../src/app/services/ssh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_command_model__ = __webpack_require__("../../../../../src/app/model/command.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CommandComponent = (function () {
    function CommandComponent(sshService) {
        this.sshService = sshService;
    }
    CommandComponent.prototype.ngOnInit = function () {
        // let user = localStorage.getItem("sshuser") as Object;
        this.command = "";
        this.result = "";
        this.showSuccessMessage = false;
        this.showFailMessage = false;
    };
    CommandComponent.prototype.onExecute = function () {
        var _this = this;
        this.showSuccessMessage = false;
        this.showFailMessage = false;
        var command = new __WEBPACK_IMPORTED_MODULE_2__model_command_model__["a" /* Command */]();
        command.result = "";
        command.cmd = this.command;
        this.sshService.execute(command).then(function (res) {
            if (res) {
                _this.result = res.result;
                _this.showSuccessMessage = true;
                _this.sshService.htmlClientSdk.modal.close(res);
            }
            else {
                _this.showFailMessage = true;
                console.log("HERE");
            }
        }).catch(function () {
            _this.showFailMessage = true;
            console.log("HERE2");
            _this.sshService.htmlClientSdk.modal.close();
        });
    };
    CommandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/command/command.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */]) === "function" && _a || Object])
    ], CommandComponent);
    return CommandComponent;
    var _a;
}());

//# sourceMappingURL=command.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/details-view/details-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<custom-header [chassis]=\"chassis\"\r\n      (chassisUpdated)=\"onChassisUpdated($event)\"\r\n      (chassisDeleted)=\"onChassisDeleted($event)\"></custom-header>\r\n<clr-tabs>\r\n   <clr-tab>\r\n      <button clrTabLink>{{ 'main.summary' | translate }}</button>\r\n      <clr-tab-content *clrIfActive>\r\n         <summary-view [chassis]=\"chassis\"></summary-view>\r\n      </clr-tab-content>\r\n   </clr-tab>\r\n\r\n   <clr-tab>\r\n      <button clrTabLink>{{ 'main.monitor' | translate }}</button>\r\n      <clr-tab-content *clrIfActive>\r\n         <monitor-view [chassis]=\"chassis\"\r\n               (chassisUpdated)=\"onChassisUpdated($event)\"></monitor-view>\r\n      </clr-tab-content>\r\n   </clr-tab>\r\n\r\n   <clr-tab>\r\n      <button clrTabLink>{{ 'main.configure' | translate }}</button>\r\n      <clr-tab-content *clrIfActive>\r\n         <configure-view [chassis]=\"chassis\"\r\n               (chassisUpdated)=\"onChassisUpdated($event)\"></configure-view>\r\n      </clr-tab-content>\r\n   </clr-tab>\r\n   <clr-tab>\r\n      <button clrTabLink>{{ 'vsphere.objects.hosts' | translate }}</button>\r\n      <clr-tab-content *clrIfActive>\r\n         <hosts-list-view [chassis]=\"chassis\"></hosts-list-view>\r\n      </clr-tab-content>\r\n   </clr-tab>\r\n\r\n</clr-tabs>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/details-view/details-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\n:host {\n  display: block; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/details-view/details-view.component.scss"],"names":[],"mappings":"AAAA,wDAAwD;AAExD;EACG,eAAc,EAChB","file":"details-view.component.scss","sourcesContent":["/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\r\n\r\n:host {\r\n   display: block;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/details-view/details-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsViewComponent = (function () {
    function DetailsViewComponent() {
        this.chassisUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.chassisDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DetailsViewComponent.prototype.onChassisUpdated = function (chassis) {
        this.chassis = chassis;
        this.chassisUpdated.emit(chassis);
    };
    DetailsViewComponent.prototype.onChassisDeleted = function (chassis) {
        this.chassisDeleted.emit(chassis);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], DetailsViewComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DetailsViewComponent.prototype, "chassisUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DetailsViewComponent.prototype, "chassisDeleted", void 0);
    DetailsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "details-view",
            template: __webpack_require__("../../../../../src/app/views/details-view/details-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/details-view/details-view.component.scss")]
        })
    ], DetailsViewComponent);
    return DetailsViewComponent;
    var _a;
}());

//# sourceMappingURL=details-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/entry-point/entry.point.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div class=\"main-container\">\r\n   <div class=\"content-container\">\r\n      <nav class=\"sidenav\">\r\n         <section class=\"sidenav-content\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./welcome']\">{{ 'welcome.title' | translate }}</a>\r\n<!--            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./settings']\">{{ 'common.settings' | translate }}</a>-->\r\n<!--            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./list']\">{{ 'list.chassisList' | translate }}</a>-->\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./usersettings']\">{{ 'list.userSettings' | translate }}</a>\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./command']\">{{ 'list.executeCommand' | translate }}</a>\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./shellcommand']\">{{ 'list.executeShellCommand' | translate }}</a>\r\n<!--            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['./logs']\">{{ 'list.logs' | translate }}</a>-->\r\n         </section>\r\n      </nav>\r\n\r\n      <div class=\"content-area\">\r\n         <router-outlet></router-outlet>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/entry-point/entry.point.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\n#container {\n  margin: 10px; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/entry-point/entry.point.component.scss"],"names":[],"mappings":"AAAA,wDAAwD;AAExD;EACE,aAAY,EACb","file":"entry.point.component.scss","sourcesContent":["/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\r\n\r\n#container {\r\n  margin: 10px;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/entry-point/entry.point.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntryPointComponent = (function () {
    function EntryPointComponent() {
    }
    EntryPointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/entry-point/entry.point.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/entry-point/entry.point.component.scss")],
        })
    ], EntryPointComponent);
    return EntryPointComponent;
}());

//# sourceMappingURL=entry.point.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div *ngIf=\"chassis\">\r\n   <span class=\"chassis-title\">{{chassis.name}}</span>\r\n   <clr-dropdown [clrCloseMenuOnItemClick]=\"true\">\r\n      <button type=\"button\" class=\"dropdown-toggle btn btn-link\" clrDropdownTrigger>\r\n         {{ 'common.actions' | translate }}\r\n         <clr-icon shape=\"caret down\" class=\"is-info\"></clr-icon>\r\n      </button>\r\n      <clr-dropdown-menu>\r\n         <button type=\"button\" clrDropdownItem (click)=\"onEdit()\"><clr-icon shape=\"edit\"></clr-icon> {{ 'common.edit' | translate }}</button>\r\n         <button type=\"button\" clrDropdownItem (click)=\"onDelete()\"><clr-icon shape=\"times-circle\"></clr-icon> {{ 'common.delete' | translate }}</button>\r\n         <button type=\"button\" class=\"btn btn-link\" clrDropdownItem [ngClass]=\"(chassis.isActive) ? 'disabled' : 'enabled'\"\r\n                 (click)=\"(!chassis.isActive) ? onActivate() : null\">\r\n            <clr-icon shape=\"check\"></clr-icon>\r\n            {{ 'common.activate' | translate }}\r\n         </button>\r\n      </clr-dropdown-menu>\r\n   </clr-dropdown>\r\n\r\n   <clr-alert [clrAlertType]=\"'alert-success'\" [clrAlertSizeSmall]=\"true\" (clrAlertClosedChange)=\"onAlertClose()\" *ngIf=\"this.showAlert\">\r\n      <div class=\"alert-item\">\r\n           <span class=\"alert-text\">\r\n               {{ 'header.theChassisIsNowActive' | translate }}\r\n           </span>\r\n      </div>\r\n   </clr-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\n.chassis-title {\n  margin-right: 20px; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/header/header.component.scss"],"names":[],"mappings":"AAAA,wDAAwD;AAExD;EACG,mBAAkB,EACpB","file":"header.component.scss","sourcesContent":["/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\r\n\r\n.chassis-title {\r\n   margin-right: 20px;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(zone, chassisService, modalService) {
        this.zone = zone;
        this.chassisService = chassisService;
        this.modalService = modalService;
        this.chassisUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.chassisDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.showAlert = false;
    };
    HeaderComponent.prototype.onDelete = function () {
        var _this = this;
        var config = this.modalService.createDeleteConfig();
        config.contextObjects = [this.chassis.id];
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.chassisDeleted.emit(_this.chassis);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    HeaderComponent.prototype.onEdit = function () {
        var _this = this;
        var config = this.modalService.createEditConfig();
        config.contextObjects = [Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), this.chassis)];
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.chassis = result;
                    _this.chassisUpdated.emit(_this.chassis);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    HeaderComponent.prototype.onActivate = function () {
        var _this = this;
        var newChassis = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), this.chassis);
        newChassis.isActive = true;
        this.chassisService.edit(newChassis)
            .then(function () {
            _this.showAlert = true;
            _this.chassis = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), _this.chassis);
            _this.chassis.isActive = true;
            _this.chassisUpdated.emit(_this.chassis);
        })
            .catch(function () {
        });
    };
    HeaderComponent.prototype.onAlertClose = function () {
        this.showAlert = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "chassisUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "chassisDeleted", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "custom-header",
            template: __webpack_require__("../../../../../src/app/views/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalConfigService */]) === "function" && _d || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/host-views/host.monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\r\n   <clr-datagrid [clrDgLoading]=\"loading\"\r\n                 [(clrDgSelected)]=\"selectedChassis\"\r\n                 [clDgRowSelection]=\"true\">\r\n      <clr-dg-action-bar>\r\n         <div class=\"btn-group\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-link clr-no-border-button\"\r\n                    (click)=\"updateChassisRelation()\">\r\n               <clr-icon shape=\"plus\"></clr-icon>\r\n               Update\r\n            </button>\r\n         </div>\r\n      </clr-dg-action-bar>\r\n      <clr-dg-placeholder>{{ 'list.noData' | translate }}\r\n      </clr-dg-placeholder>\r\n\r\n      <clr-dg-column>{{ 'common.name' | translate }}</clr-dg-column>\r\n      <clr-dg-column>{{ 'common.state' | translate }}</clr-dg-column>\r\n\r\n      <clr-dg-row *clrDgItems=\"let chassis of chassisList\"\r\n                  [clrDgItem]=\"chassis\">\r\n         <clr-dg-cell>\r\n            <clr-icon shape=\"chassisIcon\"></clr-icon>\r\n            <span>{{chassis.name}}</span>\r\n         </clr-dg-cell>\r\n         <clr-dg-cell>\r\n            <chassis-status [isActive]=\"chassis.isActive\"></chassis-status>\r\n         </clr-dg-cell>\r\n      </clr-dg-row>\r\n      <clr-dg-footer>\r\n         <clr-dg-pagination #pagination\r\n                            [clrDgPageSize]=\"numberOfChassisPerPage\"></clr-dg-pagination>\r\n      </clr-dg-footer>\r\n   </clr-datagrid>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/host-views/host.monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostMonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hosts_service__ = __webpack_require__("../../../../../src/app/services/hosts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_host_model__ = __webpack_require__("../../../../../src/app/model/host.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */





var HostMonitorComponent = (function () {
    function HostMonitorComponent(chassisService, hostsService) {
        this.chassisService = chassisService;
        this.hostsService = hostsService;
        this.loading = true;
    }
    HostMonitorComponent.prototype.ngOnInit = function () {
        this.contextObjectId =
            this.chassisService.htmlClientSdk.app.getContextObjects()[0].id;
        this.loadData();
    };
    Object.defineProperty(HostMonitorComponent.prototype, "selectedChassis", {
        get: function () {
            return this._selectedChassis;
        },
        set: function (chassis) {
            this._selectedChassis = chassis;
        },
        enumerable: true,
        configurable: true
    });
    HostMonitorComponent.prototype.updateChassisRelation = function () {
        var _this = this;
        this.loading = true;
        var host = new __WEBPACK_IMPORTED_MODULE_3__model_host_model__["a" /* Host */]();
        host.id = this.contextObjectId;
        host.relatedChassisIds = this.selectedChassis.map(function (chassis) {
            return chassis.id;
        });
        this.hostsService.edit(host).then(function (resolve) { return _this.loading = false; }, function (reject) { return _this.loading = false; });
    };
    HostMonitorComponent.prototype.loadData = function () {
        var _this = this;
        this.chassisService.getAllChassis().then(function (chassis) {
            _this.chassisList = chassis;
            _this.selectedChassis = _this.filterRelatedChassis();
            _this.loading = false;
        });
    };
    HostMonitorComponent.prototype.filterRelatedChassis = function () {
        var _this = this;
        if (!this.chassisList || this.chassisList.length < 1) {
            return null;
        }
        return this.chassisList.filter(function (chassis) {
            return !!chassis.relatedHostsIds &&
                chassis.relatedHostsIds.indexOf(_this.contextObjectId) > -1;
        });
    };
    HostMonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/host-views/host.monitor.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__services_hosts_service__["a" /* HostsService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hosts_service__["a" /* HostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hosts_service__["a" /* HostsService */]) === "function" && _b || Object])
    ], HostMonitorComponent);
    return HostMonitorComponent;
    var _a, _b;
}());

//# sourceMappingURL=host.monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/host-views/host.summary.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-stack-view>\r\n   <clr-stack-block *ngIf=\"loading\">\r\n      <span class=\"spinner spinner-inline\"></span>\r\n      <span>Loading...</span>\r\n   </clr-stack-block>\r\n   <clr-stack-block *ngIf=\"!loading\">\r\n      <clr-stack-label>Number Of Chassis</clr-stack-label>\r\n      <clr-stack-content (click)=\"navigateToHostMonitorView()\">\r\n         <a>{{numberOfRelaterChassis}}</a>\r\n      </clr-stack-content>\r\n   </clr-stack-block>\r\n</clr-stack-view>"

/***/ }),

/***/ "../../../../../src/app/views/host-views/host.summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "a {\n  color: var(--link-color);\n  cursor: pointer; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/host-views/host.summary.component.scss"],"names":[],"mappings":"AAAA;EACG,yBAAwB;EACxB,gBAAe,EACjB","file":"host.summary.component.scss","sourcesContent":["a {\r\n   color: var(--link-color);\r\n   cursor: pointer;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/host-views/host.summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */


var HostSummaryComponent = (function () {
    function HostSummaryComponent(chassisService) {
        this.chassisService = chassisService;
        this.loading = true;
    }
    HostSummaryComponent_1 = HostSummaryComponent;
    HostSummaryComponent.prototype.ngOnInit = function () {
        this.contextObjectId =
            this.chassisService.htmlClientSdk.app.getContextObjects()[0].id;
        this.loadData();
    };
    HostSummaryComponent.prototype.navigateToHostMonitorView = function () {
        var navigateParams = {
            targetViewId: HostSummaryComponent_1.HOST_SUMMARY_VIEW_NAVIGATION_ID,
            objectId: this.contextObjectId
        };
        this.chassisService.htmlClientSdk.app.navigateTo(navigateParams);
    };
    HostSummaryComponent.prototype.loadData = function () {
        var _this = this;
        this.chassisService.getRelatedChassis(this.contextObjectId)
            .then(function (chassis) {
            _this.numberOfRelaterChassis = chassis.length;
            _this.loading = false;
        });
    };
    HostSummaryComponent.HOST_SUMMARY_VIEW_NAVIGATION_ID = "hostMonitor";
    HostSummaryComponent = HostSummaryComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/host-views/host.summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/host-views/host.summary.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */]) === "function" && _a || Object])
    ], HostSummaryComponent);
    return HostSummaryComponent;
    var HostSummaryComponent_1, _a;
}());

//# sourceMappingURL=host.summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<div class=\"spinner-overlay \" *ngIf=\"loading\">\r\n   <span class=\"spinner\"></span>\r\n</div>\r\n<div class=\"viewTitle\">{{ 'list.chassisList' | translate }}</div>\r\n<div class=\"chassis-list-view\">\r\n   <div class=\"chassises-datagrid-container\">\r\n      <clr-datagrid [(clrDgSelected)]=\"selectedChassis\"\r\n            [clDgRowSelection]=\"true\">\r\n         <clr-dg-placeholder>{{ 'list.noData' | translate }}\r\n         </clr-dg-placeholder>\r\n         <clr-dg-action-bar>\r\n            <div class=\"btn-group\">\r\n               <button type=\"button\" class=\"btn btn-sm btn-secondary\"\r\n                     (click)=\"onAdd()\">\r\n                  <clr-icon shape=\"plus\"></clr-icon>\r\n                  {{ 'list.addChassis' | translate }}\r\n               </button>\r\n               <button type=\"button\" class=\"btn btn-sm btn-secondary\"\r\n                     (click)=\"onAddWizard()\">\r\n                  <clr-icon shape=\"plus\"></clr-icon>\r\n                  {{ 'list.addChassisWizard' | translate }}\r\n               </button>\r\n               <button type=\"button\" class=\"btn btn-sm btn-secondary\"\r\n                     (click)=\"onEdit()\"\r\n                     [disabled]=\"selectedChassis.length != 1\">\r\n                  <clr-icon shape=\"pencil\"></clr-icon>\r\n                  {{ 'common.edit' | translate }}\r\n               </button>\r\n               <button type=\"button\" class=\"btn btn-sm btn-secondary\"\r\n                     (click)=\"onDelete()\"\r\n                     [disabled]=\"selectedChassis.length <= 0\">\r\n                  <clr-icon shape=\"times-circle\"></clr-icon>\r\n                  {{ 'common.delete' | translate }}\r\n               </button>\r\n            </div>\r\n         </clr-dg-action-bar>\r\n\r\n         <clr-dg-column>{{ 'common.name' | translate }}</clr-dg-column>\r\n         <clr-dg-column>{{ 'common.state' | translate }}</clr-dg-column>\r\n\r\n         <clr-dg-row *clrDgItems=\"let chassis of chassisList\"\r\n               [clrDgItem]=\"chassis\">\r\n            <clr-dg-cell>\r\n               <clr-icon shape=\"chassisIcon\"></clr-icon>\r\n               <span (contextmenu)=\"onContextMenu()\">{{chassis.name}}</span>\r\n            </clr-dg-cell>\r\n            <clr-dg-cell>\r\n               <chassis-status [isActive]=\"chassis.isActive\"></chassis-status>\r\n            </clr-dg-cell>\r\n         </clr-dg-row>\r\n         <clr-dg-footer>\r\n            <clr-dg-pagination #pagination\r\n                  [clrDgPageSize]=\"numberOfChassisPerPage\"></clr-dg-pagination>\r\n         </clr-dg-footer>\r\n      </clr-datagrid>\r\n   </div>\r\n   <div class=\"splitter\"></div>\r\n   <div class=\"details-container\">\r\n      <div *ngIf=\"selectedChassis.length === 0\" class=\"details-message\">{{\r\n         'list.noObjectsSelected' | translate }}\r\n      </div>\r\n      <div *ngIf=\"selectedChassis.length > 1\" class=\"details-message\">{{\r\n         'list.multipleObjectsSelected' | translate }}\r\n      </div>\r\n      <details-view [chassis]=\"selectedChassis[0]\"\r\n            *ngIf=\"selectedChassis.length === 1\"\r\n            (chassisUpdated)=\"onChassisUpdated($event)\"\r\n            (chassisDeleted)=\"onChassisDeleted($event)\"></details-view>\r\n   </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\n:host {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.chassis-list-view {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 100%;\n  height: 100%; }\n\n.datagrid-container {\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n  margin-right: 40px; }\n\nclr-datagrid {\n  margin-top: -7px;\n  min-width: 400px;\n  height: auto !important; }\n\n.details-container {\n  -ms-flex: 1 1 100%;\n      flex: 1 1 100%; }\n\n.details-message {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.splitter {\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n  width: 1px;\n  margin: 0 20px;\n  background-color: var(--border-color); }\n\n.spinner-overlay {\n  position: absolute;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: auto;\n  background: var(--overlay-color); }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/list/list.component.scss"],"names":[],"mappings":"AAAA,wDAAwD;AAExD;EACG,mBAAkB;EAClB,qBAAa;EAAb,cAAa;EACb,2BAAsB;MAAtB,uBAAsB;EACtB,YAAW;EACX,aAAY;EACZ,iBAAgB,EAClB;;AAED;EACG,mBAAc;MAAd,eAAc;EACd,qBAAa;EAAb,cAAa;EACb,wBAAmB;MAAnB,oBAAmB;EACnB,YAAW;EACX,aAAY,EACd;;AAED;EACG,mBAAc;MAAd,eAAc;EACd,mBAAkB,EACpB;;AAED;EACG,iBAAgB;EAChB,iBAAgB;EAChB,wBAAuB,EACzB;;AAED;EACG,mBAAc;MAAd,eAAc,EAChB;;AAED;EACG,qBAAa;EAAb,cAAa;EACb,YAAW;EACX,aAAY;EACZ,uBAAmB;MAAnB,oBAAmB;EACnB,sBAAuB;MAAvB,wBAAuB,EACzB;;AAED;EACG,mBAAc;MAAd,eAAc;EACd,WAAU;EACV,eAAc;EACd,sCAAqC,EACvC;;AAED;EACG,mBAAkB;EAClB,WAAU;EACV,qBAAa;EAAb,cAAa;EACb,uBAAmB;MAAnB,oBAAmB;EACnB,sBAAuB;MAAvB,wBAAuB;EACvB,YAAW;EACX,aAAY;EACZ,qBAAoB;EACpB,iCAAgC,EAClC","file":"list.component.scss","sourcesContent":["/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\r\n\r\n:host {\r\n   position: relative;\r\n   display: flex;\r\n   flex-direction: column;\r\n   width: 100%;\r\n   height: 100%;\r\n   min-height: 100%;\r\n}\r\n\r\n.chassis-list-view {\r\n   flex: 1 1 auto;\r\n   display: flex;\r\n   flex-direction: row;\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n\r\n.datagrid-container {\r\n   flex: 0 0 auto;\r\n   margin-right: 40px;\r\n}\r\n\r\nclr-datagrid {\r\n   margin-top: -7px;\r\n   min-width: 400px;\r\n   height: auto !important;\r\n}\r\n\r\n.details-container {\r\n   flex: 1 1 100%;\r\n}\r\n\r\n.details-message {\r\n   display: flex;\r\n   width: 100%;\r\n   height: 100%;\r\n   align-items: center;\r\n   justify-content: center;\r\n}\r\n\r\n.splitter {\r\n   flex: 0 0 auto;\r\n   width: 1px;\r\n   margin: 0 20px;\r\n   background-color: var(--border-color);\r\n}\r\n\r\n.spinner-overlay {\r\n   position: absolute;\r\n   z-index: 1;\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   width: 100%;\r\n   height: 100%;\r\n   pointer-events: auto;\r\n   background: var(--overlay-color);\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(zone, chassisService, modalService) {
        this.zone = zone;
        this.chassisService = chassisService;
        this.modalService = modalService;
        this.loading = false;
        this.onContextMenu = ListComponent_1.preventContextMenu;
    }
    ListComponent_1 = ListComponent;
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chassisMap = new Map();
        this.selectedChassis = [];
        this.numberOfChassisPerPage = __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].DEFAULT_CHASSIS_PAGE_SIZE;
        var persistedNumberOfChassisPerPage = parseInt(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].PROP_CHASSIS_PAGE_SIZE));
        if (persistedNumberOfChassisPerPage && persistedNumberOfChassisPerPage > 0) {
            this.numberOfChassisPerPage = persistedNumberOfChassisPerPage;
        }
        this.chassisService.htmlClientSdk.event.onGlobalRefresh(function () {
            if (_this.loading) {
                return;
            }
            _this.zone.run(function () {
                _this.refresh();
            });
        });
        this.refresh();
    };
    ListComponent.prototype.onAdd = function () {
        var _this = this;
        var config = this.modalService.createAddConfig();
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.chassisMap.set(result.id, result);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    ListComponent.prototype.onAddWizard = function () {
        var _this = this;
        var config = this.modalService.createAddWizardConfig();
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.chassisMap.set(result.id, result);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    ListComponent.prototype.onDelete = function () {
        var _this = this;
        var config = this.modalService.createDeleteConfig();
        config.contextObjects = this.selectedChassis.map(function (value) {
            return value.id;
        });
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    /*
                       Copy the collection so that we don't modify it while
                       traversing it, because this leads to bugs i.e. some
                       items not being removed from the collection (this is a
                       common iterator problem)
                     */
                    _this.selectedChassis.concat().forEach(function (item) {
                        _this.onChassisDeleted(item);
                    });
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    ListComponent.prototype.onEdit = function () {
        var _this = this;
        var config = this.modalService.createEditConfig();
        config.contextObjects = this.selectedChassis.map(function (value) {
            return Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), value);
        });
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.onChassisUpdated(result);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    Object.defineProperty(ListComponent.prototype, "chassisList", {
        /**
         * Returns array of chassis objects.
         */
        get: function () {
            if (this.chassisMap) {
                return Array.from(this.chassisMap.values());
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.onChassisUpdated = function (chassis) {
        this.chassisMap.set(chassis.id, chassis);
        for (var i = 0; i < this.selectedChassis.length; i++) {
            var selectedChassis = this.selectedChassis[i];
            if (selectedChassis.id !== chassis.id) {
                continue;
            }
            this.selectedChassis[i] = chassis;
            break;
        }
    };
    ListComponent.prototype.onChassisDeleted = function (chassis) {
        this.chassisMap.delete(chassis.id);
        for (var i = 0; i < this.selectedChassis.length; i++) {
            var selectedChassis = this.selectedChassis[i];
            if (selectedChassis.id !== chassis.id) {
                continue;
            }
            this.selectedChassis.splice(i, 1);
            break;
        }
    };
    /**
     * Refresh the list of chassis objects.
     */
    ListComponent.prototype.refresh = function () {
        var _this = this;
        this.loading = true;
        this.chassisService.getAllChassis().then(function (result) {
            _this.loading = false;
            var oldSelectedChassisIds = {};
            _this.selectedChassis.forEach(function (item) { return oldSelectedChassisIds[item.id] = undefined; });
            _this.selectedChassis = [];
            _this.chassisMap = new Map();
            result.forEach(function (item) {
                _this.chassisMap.set(item.id, item);
                if (oldSelectedChassisIds.hasOwnProperty(item.id)) {
                    _this.selectedChassis.push(item);
                }
            });
        });
    };
    ListComponent.preventContextMenu = function () {
        return false;
    };
    ListComponent = ListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chassis_service__["a" /* ChassisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalConfigService */]) === "function" && _c || Object])
    ], ListComponent);
    return ListComponent;
    var ListComponent_1, _a, _b, _c;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewTitle\">{{ 'logs.title' | translate }}</div>\n\n\n<div style=\"direction: rtl\">\n    <button class=\"btn btn-sm\" (click)=\"onRefresh()\">{{ 'common.refresh' | translate }}</button>\n</div>\n\n<div class=\"alert alert-success\" *ngIf=\"showSuccessPage\">\n    <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n                <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n            </div>\n            <span class=\"alert-text\">\n                {{ 'logs.updated' | translate }}\n                '{{time | date: 'medium'}}'.\n            </span>\n        </div>\n    </div>\n</div>\n\n<div class=\"clr-row\" *ngIf=\"showSuccessPage\" style=\"max-height: 500px; overflow: scroll;\">\n    <p style=\"white-space: pre-line;\">{{logData}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__ = __webpack_require__("../../../../../src/app/services/ssh.service.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LogsComponent = (function () {
    function LogsComponent(sshService) {
        this.sshService = sshService;
    }
    LogsComponent.prototype.ngOnInit = function () {
        this.showSuccessPage = false;
        this.logData = "";
    };
    LogsComponent.prototype.onRefresh = function () {
        var _this = this;
        this.showSuccessPage = false;
        this.sshService.getLogs().then(function (result) {
            if (result) {
                _this.showSuccessPage = true;
                _this.logData = result;
                _this.time = Date.now();
            }
        });
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/logs/logs.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */]) === "function" && _a || Object])
    ], LogsComponent);
    return LogsComponent;
    var _a;
}());

//# sourceMappingURL=logs.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/modal-label-input/modal-label-input.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div class=\"form-group\" [ngStyle]=\"customStyle\">\r\n    <label for=\"{{inputId}}\" class=\"{{valueRequired? 'required' : ''}}\">{{labelValue | translate}}</label>\r\n    <input *ngIf=\"!valueRequired\"\r\n           type=\"text\"\r\n           id=\"{{inputId}}\"\r\n           size=\"{{inputSize}}\"\r\n           placeholder=\"{{placeholderValue | translate}}\"\r\n           [ngModel]=\"inputValue\"\r\n           (ngModelChange)=\"onInputValueChanged($event)\">\r\n\r\n    <label *ngIf=\"valueRequired\"\r\n           for=\"{{inputId}}_with_tooltip\"\r\n           [class.invalid]=\"invalidValue\"\r\n           aria-haspopup=\"true\" role=\"tooltip\"\r\n           class=\"tooltip tooltip-validation tooltip-bottom-left tooltip-md\">\r\n        <input type=\"text\"\r\n               id=\"{{inputId}}_with_tooltip\"\r\n               size=\"{{inputSize}}\"\r\n               placeholder=\"{{placeholderValue | translate}}\"\r\n               [ngModel]=\"inputValue\"\r\n               (ngModelChange)=\"onInputValueChanged($event)\" required>\r\n        <span class=\"tooltip-content\">\r\n            {{invalidValueError}}\r\n        </span>\r\n    </label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/modal-label-input/modal-label-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLabelInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalLabelInputComponent = (function () {
    function ModalLabelInputComponent() {
        this.inputSize = 40;
        this.inputValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ModalLabelInputComponent.prototype.onInputValueChanged = function (newValue) {
        this.inputValueChanged.emit(newValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalLabelInputComponent.prototype, "customStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalLabelInputComponent.prototype, "inputId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ModalLabelInputComponent.prototype, "inputSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalLabelInputComponent.prototype, "inputValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], ModalLabelInputComponent.prototype, "inputValueChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalLabelInputComponent.prototype, "labelValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalLabelInputComponent.prototype, "placeholderValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalLabelInputComponent.prototype, "invalidValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalLabelInputComponent.prototype, "valueRequired", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalLabelInputComponent.prototype, "invalidValueError", void 0);
    ModalLabelInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "modal-label-input",
            template: __webpack_require__("../../../../../src/app/views/modal-label-input/modal-label-input.component.html")
        })
    ], ModalLabelInputComponent);
    return ModalLabelInputComponent;
    var _a;
}());

//# sourceMappingURL=modal-label-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/settings-user/settings-user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\n<div class=\"viewTitle\">{{ 'common.settings' | translate }}</div>\n\n<div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\n    <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n                <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n            </div>\n            <span class=\"alert-text\">\n                {{ 'settings.updatedUserSettingsInServer' | translate }}\n                '{{hostname}}'.\n            </span>\n        </div>\n    </div>\n</div>\n<div style=\"direction: rtl\">\n    <button class=\"btn btn-sm\" (click)=\"onUpdate()\">\n        <span *ngIf=\"isAvailable == true\">{{'common.update' | translate }}</span>\n        <span *ngIf=\"isAvailable == false\">{{'common.set' | translate }}</span>\n    </button>\n</div>\n<clr-stack-view>\n    <clr-stack-block>\n        <clr-stack-label>{{ 'settings.username' | translate }}</clr-stack-label>\n        <clr-stack-content>\n            <span>\n            <input type=\"text\" [(ngModel)]=\"username\"/>\n                </span>\n        </clr-stack-content>\n    </clr-stack-block>\n\n    <clr-stack-block>\n        <clr-stack-label>{{ 'settings.password' | translate }}</clr-stack-label>\n        <clr-stack-content>\n            <span>\n            <input type=\"password\" [(ngModel)]=\"password\"/>\n                </span>\n        </clr-stack-content>\n    </clr-stack-block>\n\n    <clr-stack-block>\n        <clr-stack-label>{{ 'settings.hostname' | translate }}</clr-stack-label>\n        <clr-stack-content>\n            <span>\n            <input type=\"text\" [(ngModel)]=\"hostname\"/>\n                </span>\n        </clr-stack-content>\n    </clr-stack-block>\n</clr-stack-view>\n"

/***/ }),

/***/ "../../../../../src/app/views/settings-user/settings-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SettingsUserComponent = (function () {
    function SettingsUserComponent(userService) {
        this.userService = userService;
    }
    SettingsUserComponent.prototype.ngOnInit = function () {
        // let user = localStorage.getItem("sshuser") as Object;
        var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */](), JSON.parse(localStorage.getItem("sshuser")));
        this.username = user.username;
        this.password = user.password;
        this.hostname = user.hostname;
        this.isAvailable = false;
        this.showSuccessMessage = false;
    };
    SettingsUserComponent.prototype.onUpdate = function () {
        var _this = this;
        this.showSuccessMessage = false;
        var user = new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]();
        user.username = this.username;
        user.password = this.password;
        user.hostname = this.hostname;
        this.userService.updateUser(user).then(function (result) {
            if (result) {
                localStorage.setItem("sshuser", JSON.stringify(result));
                _this.showSuccessMessage = true;
                _this.isAvailable = true;
                _this.userService.htmlClientSdk.modal.close(result);
            }
        }).catch(function () {
            _this.userService.htmlClientSdk.modal.close();
        });
    };
    SettingsUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/settings-user/settings-user.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], SettingsUserComponent);
    return SettingsUserComponent;
    var _a;
}());

//# sourceMappingURL=settings-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<div class=\"viewTitle\">{{ 'common.settings' | translate }}</div>\r\n\r\n<div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\r\n    <div class=\"alert-items\">\r\n        <div class=\"alert-item static\">\r\n            <div class=\"alert-icon-wrapper\">\r\n                <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\r\n            </div>\r\n            <span class=\"alert-text\">\r\n                {{ 'settings.theNumberOfDisplayedChassisPerPage' | translate }}\r\n                '{{numberOfChassisPerPage}}' {{ 'settings.wasUpdatedInTheWebLocalStorage' | translate }}.\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"direction: rtl\">\r\n    <button class=\"btn btn-sm\" (click)=\"onUpdate()\">{{ 'common.update' | translate }}</button>\r\n</div>\r\n<clr-stack-view>\r\n    <clr-stack-block>\r\n        <clr-stack-label>{{ 'settings.numberOfChassisPerPage' | translate }}</clr-stack-label>\r\n        <clr-stack-content>\r\n            <span>\r\n            <input type=\"number\" min=\"1\" max=\"20\"  [(ngModel)]=\"numberOfChassisPerPage\"/>\r\n                </span>\r\n        </clr-stack-content>\r\n    </clr-stack-block>\r\n</clr-stack-view>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsComponent = (function () {
    function SettingsComponent() {
        this.numberOfChassisPerPage = __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].DEFAULT_CHASSIS_PAGE_SIZE;
        this.showSuccessMessage = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var value = parseInt(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].PROP_CHASSIS_PAGE_SIZE));
        if (value && value > 0) {
            this.numberOfChassisPerPage = value;
        }
    };
    /**
     * Sets the new value in the local storage.
     * @param numberChassisPerPage -
     * number of chassis displayed in the chassis list per page.
     */
    SettingsComponent.prototype.setNumberChassisPerPageInLocalStorage = function (numberChassisPerPage) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].PROP_CHASSIS_PAGE_SIZE, numberChassisPerPage.toString());
    };
    /**
     * Triggered when user clicks on "Update" button.
     */
    SettingsComponent.prototype.onUpdate = function () {
        var value = parseInt(this.numberOfChassisPerPage.toString());
        if (value === Number.NaN || value <= 0) {
            value = __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */].DEFAULT_CHASSIS_PAGE_SIZE;
        }
        this.numberOfChassisPerPage = value;
        this.setNumberChassisPerPageInLocalStorage(value);
        this.showSuccessMessage = true;
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/settings/settings.component.html")
        })
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/shell-command/shell-command.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\n<div class=\"viewTitle\">{{ 'common.execute2' | translate }}</div>\n\n<div class=\"clr-row\">\n    <clr-stack-view>\n        <clr-stack-block>\n            <clr-stack-label>{{ 'actions.executeshellcmd' | translate }}</clr-stack-label>\n            <clr-stack-content>\n            <span>\n            <input type=\"text\" [(ngModel)]=\"command\"/>\n                </span>\n            </clr-stack-content>\n        </clr-stack-block>\n    </clr-stack-view>\n</div>\n\n\n<div class=\"clr-row text-center\">\n    <button class=\"btn btn-sm\" (click)=\"onExecute()\">{{ 'common.run' | translate }}</button>\n</div>\n\n<div class=\"clr-row\">\n    <div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                {{'actions.executionsuccess'| translate}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"showFailMessage\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                {{'actions.executionfail'| translate}}</span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"clr-row\" *ngIf=\"showSuccessMessage\">\n    <h3>{{command}}</h3>\n</div>\n\n<div class=\"clr-row\" *ngIf=\"showSuccessMessage\">\n    <p style=\"white-space: pre-line;\">{{result}}</p>\n</div>\n\n\n\n<!--<div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">-->\n<!--    <div class=\"alert-items\">-->\n<!--        <div class=\"alert-item static\">-->\n<!--            <div class=\"alert-icon-wrapper\">-->\n<!--                <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>-->\n<!--            </div>-->\n<!--            <span class=\"alert-text\">-->\n<!--                {{ 'settings.theNumberOfDisplayedChassisPerPage' | translate }}-->\n<!--                '{{hostname}}' {{ 'settings.wasUpdatedInTheWebLocalStorage' | translate }}.-->\n<!--            </span>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/views/shell-command/shell-command.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellCommandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__ = __webpack_require__("../../../../../src/app/services/ssh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_command_model__ = __webpack_require__("../../../../../src/app/model/command.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ShellCommandComponent = (function () {
    function ShellCommandComponent(sshService) {
        this.sshService = sshService;
    }
    ShellCommandComponent.prototype.ngOnInit = function () {
        // let user = localStorage.getItem("sshuser") as Object;
        this.command = "";
        this.result = "";
        this.showSuccessMessage = false;
        this.showFailMessage = false;
    };
    ShellCommandComponent.prototype.onExecute = function () {
        var _this = this;
        this.showSuccessMessage = false;
        this.showFailMessage = false;
        var command = new __WEBPACK_IMPORTED_MODULE_2__model_command_model__["a" /* Command */]();
        command.result = "";
        command.cmd = this.command;
        this.sshService.executeShell(command).then(function (res) {
            if (res) {
                _this.result = res.result;
                _this.showSuccessMessage = true;
                _this.sshService.htmlClientSdk.modal.close(res);
            }
            else {
                _this.showFailMessage = true;
            }
        }).catch(function () {
            _this.showFailMessage = true;
            _this.sshService.htmlClientSdk.modal.close();
        });
    };
    ShellCommandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/shell-command/shell-command.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ssh_service__["a" /* SSHService */]) === "function" && _a || Object])
    ], ShellCommandComponent);
    return ShellCommandComponent;
    var _a;
}());

//# sourceMappingURL=shell-command.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<clr-icon class=\"status-icon\" [attr.shape]=\"isActive ? 'check' : 'exclamation-circle'\"></clr-icon>\r\n{{isActive ? ('common.active' | translate) : ('common.standBy' | translate)}}\r\n"

/***/ }),

/***/ "../../../../../src/app/views/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = (function () {
    function StatusComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], StatusComponent.prototype, "isActive", void 0);
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "chassis-status",
            template: __webpack_require__("../../../../../src/app/views/status/status.component.html")
        })
    ], StatusComponent);
    return StatusComponent;
}());

//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/additional/additional-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div>\r\n   {{ 'tabs.configure.additional.provideYourAdditionalSettingsHere' | translate }}.\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/additional/additional-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdditionalViewComponent = (function () {
    function AdditionalViewComponent() {
    }
    AdditionalViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'additional-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/configure/additional/additional-view.component.html")
        })
    ], AdditionalViewComponent);
    return AdditionalViewComponent;
}());

//# sourceMappingURL=additional-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/configure.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div class=\"main-container\">\r\n   <div class=\"content-container\">\r\n      <div class=\"content-area\">\r\n         <settings-view (chassisUpdated)=\"afterChassisUpdatedHandler($event)\"\r\n                        [chassis]=\"chassis\"\r\n                        *ngIf=\"contentType === 'settings'\">\r\n         </settings-view>\r\n         <additional-view *ngIf=\"contentType === 'additional'\"></additional-view>\r\n      </div>\r\n      <nav class=\"sidenav\">\r\n         <section class=\"sidenav-content\">\r\n            <section class=\"nav-group collapsible\">\r\n               <input id=\"settings-category\" type=\"checkbox\">\r\n               <label for=\"settings-category\">{{ 'common.settings' | translate }}</label>\r\n               <ul class=\"nav-list\">\r\n                  <li><a class=\"nav-link\"\r\n                         (click)=\"setContent('settings')\"\r\n                         [class.active]=\"contentType === 'settings'\">\r\n                     {{ 'common.general' | translate }}\r\n                  </a></li>\r\n               </ul>\r\n            </section>\r\n               <a class=\"nav-link\" (click)=\"setContent('additional')\"\r\n                  [class.active]=\"contentType === 'additional'\">\r\n                  {{ 'tabs.configure.additionalSettings' | translate }}\r\n               </a>\r\n         </section>\r\n      </nav>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/configure.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\n#container {\n  margin: 10px; }\n\n.sidenav .sidenav-content > .nav-link {\n  margin-top: 0.5rem; }\n", "", {"version":3,"sources":["/home/anikl9705/Intel/html-client-sdk/samples/ssh-app/src/main/ui/src/app/views/tabs/configure/configure.component.scss"],"names":[],"mappings":"AAAA,wDAAwD;AAExD;EACE,aAAY,EACb;;AAED;EACE,mBAAkB,EACnB","file":"configure.component.scss","sourcesContent":["/*Copyright (c) 2018 VMware, Inc. All rights reserved.*/\r\n\r\n#container {\r\n  margin: 10px;\r\n}\r\n\r\n.sidenav .sidenav-content>.nav-link {\r\n  margin-top: 0.5rem;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigureComponent = (function () {
    function ConfigureComponent() {
        this.chassisUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ConfigureComponent.prototype.ngOnInit = function () {
        this.contentType = '';
    };
    ConfigureComponent.prototype.setContent = function (name) {
        this.contentType = name;
    };
    ConfigureComponent.prototype.afterChassisUpdatedHandler = function (chassis) {
        this.chassis = chassis;
        this.chassisUpdated.emit(chassis);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], ConfigureComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ConfigureComponent.prototype, "chassisUpdated", void 0);
    ConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'configure-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/configure/configure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/tabs/configure/configure.component.scss")],
        })
    ], ConfigureComponent);
    return ConfigureComponent;
    var _a;
}());

//# sourceMappingURL=configure.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<clr-stack-view *ngIf=\"chassis\">\r\n   <clr-stack-header>\r\n      {{ 'tabs.configure.settings.chassisSettings' | translate }}\r\n      <button\r\n            (click)=\"onEdit()\"\r\n            class=\"stack-action btn btn-md btn-link\"\r\n            type=\"button\">{{ 'common.edit' | translate }}\r\n      </button>\r\n   </clr-stack-header>\r\n\r\n   <clr-stack-block>\r\n      <clr-stack-label>{{ 'common.name' | translate }}</clr-stack-label>\r\n      <clr-stack-content>{{chassis.name}}</clr-stack-content>\r\n   </clr-stack-block>\r\n   <clr-stack-block>\r\n      <clr-stack-label>{{ 'common.serverType' | translate }}</clr-stack-label>\r\n      <clr-stack-content>{{chassis.serverType}}</clr-stack-content>\r\n   </clr-stack-block>\r\n   <clr-stack-block>\r\n      <clr-stack-label>{{ 'common.dimensions' | translate }}</clr-stack-label>\r\n      <clr-stack-content>{{chassis.dimensions}}</clr-stack-content>\r\n   </clr-stack-block>\r\n   <clr-stack-block>\r\n      <clr-stack-label>{{ 'common.state' | translate }}</clr-stack-label>\r\n      <clr-stack-content>\r\n         <chassis-status [isActive]=\"chassis.isActive\"></chassis-status>\r\n      </clr-stack-content>\r\n   </clr-stack-block>\r\n</clr-stack-view>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/configure/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__ = __webpack_require__("../../../../../src/app/services/chassis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(chassisService, zone, modalService) {
        this.chassisService = chassisService;
        this.zone = zone;
        this.modalService = modalService;
        this.chassisUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SettingsComponent.prototype.onEdit = function () {
        var _this = this;
        var config = this.modalService.createEditConfig();
        config.contextObjects = [Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_chassis_model__["a" /* Chassis */](), this.chassis)];
        config.onClosed = function (result) {
            if (result) {
                _this.zone.run(function () {
                    _this.chassis = result;
                    _this.chassisUpdated.emit(_this.chassis);
                });
            }
        };
        this.chassisService.htmlClientSdk.modal.open(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], SettingsComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "chassisUpdated", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'settings-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/configure/settings/settings.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chassis_service__["a" /* ChassisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalConfigService */]) === "function" && _d || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/hosts/hosts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<clr-datagrid [clrDgLoading]=\"loading\"\r\n              [(clrDgSelected)]=\"selectedHosts\"\r\n              [clDgRowSelection]=\"!!preselectedHostsIds\">\r\n   <clr-dg-placeholder>{{ 'list.noData' | translate }}</clr-dg-placeholder>\r\n\r\n   <clr-dg-column>{{ 'common.name' | translate }}</clr-dg-column>\r\n   <clr-dg-column>{{ 'common.state' | translate }}</clr-dg-column>\r\n   <clr-dg-column>{{ 'vsphere.memorySize' | translate }}</clr-dg-column>\r\n   <clr-dg-column>{{ 'common.cpus' | translate }}</clr-dg-column>\r\n   <clr-dg-column>{{ 'vsphere.vcName' | translate }}</clr-dg-column>\r\n\r\n   <clr-dg-row *clrDgItems=\"let host of connectedHosts\" [clrDgItem]=\"host\">\r\n\r\n      <clr-dg-cell>\r\n         <clr-icon shape=\"host\"></clr-icon>\r\n         <a [routerLink]=\"\" (click)=\"navigateToHostObject(host.id)\"\r\n               (contextmenu)=\"onContextMenu()\">{{host.name}}</a>\r\n      </clr-dg-cell>\r\n      <clr-dg-cell>{{host.state}}</clr-dg-cell>\r\n      <clr-dg-cell>{{host.memorySize}} (MB)</clr-dg-cell>\r\n      <clr-dg-cell>{{host.numCpus}}</clr-dg-cell>\r\n      <clr-dg-cell>{{host.vCenterName}}</clr-dg-cell>\r\n   </clr-dg-row>\r\n</clr-datagrid>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/hosts/hosts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hosts_service__ = __webpack_require__("../../../../../src/app/services/hosts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostListComponent = (function () {
    function HostListComponent(hostsService) {
        this.hostsService = hostsService;
        this._selectedHosts = [];
        this.hostsSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onNavigateToHostObject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loading = false;
        this.onContextMenu = HostListComponent_1.preventContextMenu;
    }
    HostListComponent_1 = HostListComponent;
    HostListComponent.prototype.ngOnInit = function () {
        this.retrieveHosts();
    };
    Object.defineProperty(HostListComponent.prototype, "selectedHosts", {
        /**
         * Getter of the two-way binding with the Datagrid's selected items
         */
        get: function () {
            return this._selectedHosts;
        },
        /**
         * Setter of the two-way binding with the Datagrid's selected items
         * @param selectedHosts - array of the updated Datagrid's selection
         */
        set: function (selectedHosts) {
            this._selectedHosts = selectedHosts;
            if (!!selectedHosts) {
                this.emitHostSelectionChangeEvent(selectedHosts);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Navigate To the host summary view of a given objectId
     */
    HostListComponent.prototype.navigateToHostObject = function (objectId) {
        var navigateParams = {
            objectId: objectId
        };
        this.hostsService.htmlClientSdk.app.navigateTo(navigateParams);
        this.onNavigateToHostObject.emit();
    };
    /**
     * Refresh the list of host objects.
     */
    HostListComponent.prototype.retrieveHosts = function () {
        var _this = this;
        this.loading = true;
        this.hostsService.getConnectedHosts(this.chassis)
            .then(function (result) {
            _this.connectedHosts = result;
            _this.selectedHosts =
                _this.filterPreselectedHosts(_this.connectedHosts);
            _this.loading = false;
        });
    };
    /**
     * Filter out an array of preselected Host objects out of all connected
     * Hosts objects
     * @param hostsList
     */
    HostListComponent.prototype.filterPreselectedHosts = function (hostsList) {
        var _this = this;
        if (!this.preselectedHostsIds) {
            return null;
        }
        return hostsList.filter(function (host) {
            return _this.preselectedHostsIds.indexOf(host.id) >= 0;
        });
    };
    /**
     * Notify the consumers that Host objects selection has changed.
     * @param selectedHosts
     */
    HostListComponent.prototype.emitHostSelectionChangeEvent = function (selectedHosts) {
        this.hostsSelectionChange.emit(selectedHosts.map(function (host) {
            return host.id;
        }));
    };
    HostListComponent.preventContextMenu = function () {
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HostListComponent.prototype, "preselectedHostsIds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], HostListComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], HostListComponent.prototype, "hostsSelectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], HostListComponent.prototype, "onNavigateToHostObject", void 0);
    HostListComponent = HostListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'hosts-list-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/hosts/hosts-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_hosts_service__["a" /* HostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hosts_service__["a" /* HostsService */]) === "function" && _b || Object])
    ], HostListComponent);
    return HostListComponent;
    var HostListComponent_1, _a, _b;
}());

//# sourceMappingURL=hosts-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/monitor/monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n\r\n<div class=\"col-xs-12 col-sm-6\">\r\n   <div class=\"card\">\r\n      <div class=\"card-block\">\r\n         <h4 class=\"card-title\">{{ 'tabs.monitor.chassisStatusInformation' | translate }}</h4>\r\n         <div class=\"progress-block\">\r\n            <label>{{ 'common.health' | translate }}</label>\r\n            <div class=\"progress-static danger\">\r\n               <div class=\"progress-meter\" [attr.data-value]=\"chassis.healthStatus\"></div>\r\n            </div>\r\n            <span>&emsp;{{chassis.healthStatus}}%</span>\r\n         </div>\r\n         <div class=\"progress-block\">\r\n            <label>{{ 'common.compliance' | translate }}</label>\r\n            <div class=\"progress-static success\">\r\n               <div class=\"progress-meter\" [attr.data-value]=\"chassis.complianceStatus\"></div>\r\n            </div>\r\n            <span>&emsp;{{chassis.complianceStatus}}%</span>\r\n         </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n         <button class=\"btn btn-link\" (click)=\"refreshData()\">{{ 'common.refresh' | translate }}</button>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/monitor/monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitorComponent = (function () {
    function MonitorComponent() {
        this.chassisUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MonitorComponent.prototype.refreshData = function () {
        this.chassis = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */](), this.chassis);
        this.chassis.healthStatus = Math.floor(Math.random() * 100) + 1;
        this.chassis.complianceStatus = Math.floor(Math.random() * 100) + 1;
        this.chassisUpdated.emit(this.chassis);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], MonitorComponent.prototype, "chassis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], MonitorComponent.prototype, "chassisUpdated", void 0);
    MonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'monitor-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/monitor/monitor.component.html")
        })
    ], MonitorComponent);
    return MonitorComponent;
    var _a;
}());

//# sourceMappingURL=monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/tabs/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Copyright (c) 2018 VMware, Inc. All rights reserved. -->\r\n<div class=\"row\">\r\n   <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            {{ 'tabs.summary.mainInformation' | translate }}\r\n         </div>\r\n         <div class=\"card-block\">\r\n            <clr-stack-view *ngIf=\"chassis\">\r\n               <clr-stack-block>\r\n                  <clr-stack-label>{{ 'common.name' | translate }}</clr-stack-label>\r\n                  <clr-stack-content>{{chassis.name}}</clr-stack-content>\r\n               </clr-stack-block>\r\n               <clr-stack-block>\r\n                  <clr-stack-label>{{ 'common.state' | translate }}</clr-stack-label>\r\n                  <clr-stack-content>\r\n                     <chassis-status [isActive]=\"chassis.isActive\"></chassis-status>\r\n                  </clr-stack-content>\r\n               </clr-stack-block>\r\n            </clr-stack-view>\r\n         </div>\r\n      </div>\r\n   </div>\r\n\r\n   <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            {{ 'tabs.summary.additionalDetails' | translate }}\r\n         </div>\r\n         <div class=\"card-block\">\r\n            <clr-stack-view *ngIf=\"chassis\">\r\n               <clr-stack-block>\r\n                  <clr-stack-label>{{ 'common.serverType' | translate }}</clr-stack-label>\r\n                  <clr-stack-content>{{chassis.serverType}}</clr-stack-content>\r\n               </clr-stack-block>\r\n               <clr-stack-block>\r\n                  <clr-stack-label>{{ 'common.dimensions' | translate }}</clr-stack-label>\r\n                  <clr-stack-content>{{chassis.dimensions}}</clr-stack-content>\r\n               </clr-stack-block>\r\n            </clr-stack-view>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tabs/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__ = __webpack_require__("../../../../../src/app/model/chassis.model.ts");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = (function () {
    function SummaryComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_chassis_model__["a" /* Chassis */]) === "function" && _a || Object)
    ], SummaryComponent.prototype, "chassis", void 0);
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'summary-view',
            template: __webpack_require__("../../../../../src/app/views/tabs/summary/summary.component.html")
        })
    ], SummaryComponent);
    return SummaryComponent;
    var _a;
}());

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-configure.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ 'vsphere.vm.configure' | translate }}</h4>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VmConfigureComponent = (function () {
    function VmConfigureComponent() {
    }
    VmConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/vm-views/vm-configure.component.html")
        })
    ], VmConfigureComponent);
    return VmConfigureComponent;
}());

//# sourceMappingURL=vm-configure.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ 'vsphere.vm.monitor' | translate }}</h4>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmMonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VmMonitorComponent = (function () {
    function VmMonitorComponent() {
    }
    VmMonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/vm-views/vm-monitor.component.html")
        })
    ], VmMonitorComponent);
    return VmMonitorComponent;
}());

//# sourceMappingURL=vm-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-portlet.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ 'vsphere.vm.portlet' | translate }}</h4>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/vm-views/vm-portlet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmPortletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VmPortletComponent = (function () {
    function VmPortletComponent() {
    }
    VmPortletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/vm-views/vm-portlet.component.html")
        })
    ], VmPortletComponent);
    return VmPortletComponent;
}());

//# sourceMappingURL=vm-portlet.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewTitle\">{{'welcome.title' | translate }}</div>\r\n<div>{{ 'welcome.text' | translate }}</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* Copyright (c) 2018 VMware, Inc. All rights reserved. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/welcome/welcome.component.html")
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    console.log(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]);
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map