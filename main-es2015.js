(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"haul-logo\">\n    <img src=\"../../assets/haul-lite.png\" class=\"logo\">\n</div>\n<div class=\"login-form\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"login-form\">\n        <mat-form-field class=\"input\">\n            <input matInput type=\"email\" placeholder=\"username\" value=\"\" formControlName=\"username\">\n        </mat-form-field>\n        <mat-form-field class=\"input\">\n            <input matInput type=\"password\" placeholder=\"password\" value=\"\" formControlName=\"password\">\n        </mat-form-field>\n        <button mat-raised-button (click)=\"onSubmit()\" color=\"accent\" class=\"login-btn\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/account/account.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/account/account.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>account works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/create/create.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/create/create.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/history/history.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/history/history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/jobs/jobs.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/jobs/jobs.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-form-field\" class=\"search\">\n    <input matInput type=\"text\" placeholder=\"Search\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"search\">\n        <mat-icon>search</mat-icon>\n    </button>\n</mat-form-field>\n\n<mat-expansion-panel *ngFor=\"let job of jobsList, let i = index\">\n    <mat-expansion-panel-header class=\"flex\">\n        <mat-panel-title>\n            {{job.name}}\n        </mat-panel-title>\n        <mat-panel-description class=\"distance\">\n            <div>{{job.currentDistance}}</div>\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n    <div class=\"description\">{{job.description}}</div>\n    <div class=\"weight\">Approx. load: {{job.weight}}lbs</div>\n    <div class=\"flex-end\">\n        <div class=\"flex\">\n            <div>\n                <b>{{job.pay | currency}}</b>\n            </div>\n        </div>\n        <div>\n            <button mat-raised-button color=\"accent\" (click)=\"bid(i)\">Bid</button>\n        </div>\n    </div>\n</mat-expansion-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/site.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/site.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER ALWAYS VISIBILE WHILE IN SITE, HOLDS NOTIFICATIONS MENU-->\n<mat-toolbar class=\"toolbar\">\n   <img src=\"../../assets/horiz-logo.png\" class=\"horizontal-logo\">\n    <div [matMenuTriggerFor]=\"notificationMenu\" matBadge=\"!\" matBadgeColor=\"accent\">\n        <mat-icon>notifications</mat-icon>\n        <mat-menu #notificationMenu=\"matMenu\" xPosition=\"before\">\n            <button routerLink=\"/jobs\" routerLinkActive=\"active\" mat-menu-item>2 New Jobs posted</button>\n        </mat-menu>\n    </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n<!-- FOOTER ALWAYS VISIBILE WHILE IN SITE, ACTS AS NAV-->\n<div class=\"footer\">\n    <div routerLink=\"/jobs\" routerLinkActive=\"active\">\n        <mat-icon>local_shipping</mat-icon>\n    </div>\n    <div routerLink=\"/history\" routerLinkActive=\"active\">\n        <mat-icon>query_builder</mat-icon>\n    </div>\n    <div routerLink=\"/create\" routerLinkActive=\"active\">\n        <mat-icon>add</mat-icon>\n    </div>\n    <div routerLink=\"/account\" routerLinkActive=\"active\">\n        <mat-icon>account_circle</mat-icon>\n    </div>\n    <div [matMenuTriggerFor]=\"logoutMenu\">\n        <mat-icon>power_settings_new</mat-icon>\n        <mat-menu #logoutMenu=\"matMenu\">\n            <button routerLink=\"/welcome\" routerLinkActive=\"active\" mat-menu-item>Logout</button>\n        </mat-menu>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _site_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site/jobs/jobs.component */ "./src/app/site/jobs/jobs.component.ts");
/* harmony import */ var _site_history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site/history/history.component */ "./src/app/site/history/history.component.ts");
/* harmony import */ var _site_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site/account/account.component */ "./src/app/site/account/account.component.ts");
/* harmony import */ var _site_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site/create/create.component */ "./src/app/site/create/create.component.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site/site.component */ "./src/app/site/site.component.ts");









const routes = [
    {
        path: '',
        component: _site_site_component__WEBPACK_IMPORTED_MODULE_8__["SiteComponent"],
        children: [
            {
                path: 'jobs',
                component: _site_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"]
            },
            {
                path: 'history',
                component: _site_history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"]
            },
            {
                path: 'account',
                component: _site_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]
            },
            {
                path: 'create',
                component: _site_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"]
            }
        ]
    },
    {
        path: 'welcome',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '**',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer {\n  display: flex;\n  justify-content: space-evenly;\n  bottom: 0px;\n  position: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hubGlzY2FyL0Rlc2t0b3AvaGF1bExpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufSIsIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url === '/login' || this.router.url === '/') {
            this.notLogin = false;
        }
        else {
            this.notLogin = true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _site_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site/account/account.component */ "./src/app/site/account/account.component.ts");
/* harmony import */ var _site_history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site/history/history.component */ "./src/app/site/history/history.component.ts");
/* harmony import */ var _site_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site/create/create.component */ "./src/app/site/create/create.component.ts");
/* harmony import */ var _site_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site/jobs/jobs.component */ "./src/app/site/jobs/jobs.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./site/site.component */ "./src/app/site/site.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _site_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
            _site_history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"],
            _site_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__["JobsComponent"],
            _site_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
            _site_site_component__WEBPACK_IMPORTED_MODULE_21__["SiteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  display: flex;\n  flex-flow: column;\n}\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label*/\n  color: black !important;\n}\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: black !important;\n}\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: black !important;\n}\n.haul-logo {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.logo {\n  width: 350px;\n  height: 350px;\n}\n.login-btn {\n  width: 65%;\n  margin-left: 17.5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hubGlzY2FyL0Rlc2t0b3AvaGF1bExpdGUvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VDQUUsd0JBQXdCO0VERXRCLHVCQUFBO0FDQUo7QURHRztFQ0RELDRCQUE0QjtFREcxQixrQ0FBQTtBQ0RKO0FESUU7RUNGQSx5Q0FBeUM7RURJeEMsa0NBQUE7QUNGSDtBREtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNKSjtBRE9BO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICB9XG4gIFxuICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9IFxuICBcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7O1xuICB9XG5cbi5oYXVsLWxvZ297XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb2dve1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4ubG9naW4tYnRue1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luLWxlZnQ6MTcuNSU7XG59IiwiLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLmhhdWwtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxvZ28ge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG59XG4ubG9naW4tYnRuIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luLWxlZnQ6IDE3LjUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LoginComponent = class LoginComponent {
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.notLogin = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        return this.loginForm;
    }
    onSubmit() {
        if (this.loginForm.controls.username.value === 'billy@gmail.com' && this.loginForm.controls.password.value === 'happy1') {
            this.router.navigateByUrl('jobs');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/site/account/account.component.less":
/*!*****************************************************!*\
  !*** ./src/app/site/account/account.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/site/account/account.component.ts":
/*!***************************************************!*\
  !*** ./src/app/site/account/account.component.ts ***!
  \***************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.less */ "./src/app/site/account/account.component.less")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/site/create/create.component.less":
/*!***************************************************!*\
  !*** ./src/app/site/create/create.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/site/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/site/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateComponent = class CreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/create/create.component.html"),
        styles: [__webpack_require__(/*! ./create.component.less */ "./src/app/site/create/create.component.less")]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/site/history/history.component.less":
/*!*****************************************************!*\
  !*** ./src/app/site/history/history.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/site/history/history.component.ts":
/*!***************************************************!*\
  !*** ./src/app/site/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.less */ "./src/app/site/history/history.component.less")]
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/site/jobs/jobs.component.less":
/*!***********************************************!*\
  !*** ./src/app/site/jobs/jobs.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 95%;\n  margin-left: 2.5%;\n}\n.mat-content {\n  display: flex;\n  flex: 1;\n  align-items: center !important;\n  flex-direction: row;\n  overflow: hidden;\n}\n.description {\n  padding-bottom: 5px;\n}\n.distance {\n  display: flex;\n  justify-content: flex-end;\n}\n.flex {\n  display: flex;\n  align-items: center;\n}\n.flex-end {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hubGlzY2FyL0Rlc2t0b3AvaGF1bExpdGUvc3JjL2FwcC9zaXRlL2pvYnMvam9icy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2l0ZS9qb2JzL2pvYnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksbUJBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS9qb2JzL2pvYnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoe1xuICAgIHdpZHRoOjk1JTtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbn1cblxuLm1hdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5kaXN0YW5jZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLnNlYXJjaCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuLm1hdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5kaXN0YW5jZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleC1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/site/jobs/jobs.component.ts":
/*!*********************************************!*\
  !*** ./src/app/site/jobs/jobs.component.ts ***!
  \*********************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JobsComponent = class JobsComponent {
    constructor() { }
    ngOnInit() {
        this.jobsList = [
            {
                name: 'Chandlee and Sons Construction Comp LLC',
                currentDistance: '25.6mi',
                weight: 1500,
                description: 'Removing debris from jobsite after home demolition.',
                pay: 1375
            },
            {
                name: 'Ginger Ragsdale',
                currentDistance: '31.7mi',
                weight: 3000,
                description: 'Transport of two large gears, pre wrapped and palleted.',
                pay: 1890
            },
            {
                name: 'Suwanee Welding & Fabrication',
                currentDistance: '17.9mi',
                weight: 4300,
                description: 'Load and transport of large metal build frame pieces. Total of eight pieces.',
                pay: 1375
            },
            {
                name: 'Bubba and Bros Loggin',
                currentDistance: '22.5',
                weight: 6000,
                description: 'Load and haul of 25-45ft oak trees, de-limbed.',
                pay: 1375
            }
        ];
    }
    //COMPLETES A BID, FIRES OFF THE BOTTOMSHEET SUCCESS MESSAGE, REMOVES THAT JOB FROM AVAILABLE TO HISTORY
    bid(i) {
        this.jobsList.splice(i, 1);
    }
};
JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: __webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/jobs/jobs.component.html"),
        styles: [__webpack_require__(/*! ./jobs.component.less */ "./src/app/site/jobs/jobs.component.less")]
    })
], JobsComponent);



/***/ }),

/***/ "./src/app/site/site.component.less":
/*!******************************************!*\
  !*** ./src/app/site/site.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n}\n.horizontal-logo {\n  height: 85px;\n  margin-top: 5px;\n  margin-left: -50px;\n}\n.footer {\n  width: 100%;\n  bottom: 0px;\n  position: fixed;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hubGlzY2FyL0Rlc2t0b3AvaGF1bExpdGUvc3JjL2FwcC9zaXRlL3NpdGUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NpdGUvc2l0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaXRlL3NpdGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvcml6b250YWwtbG9nb3tcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbn1cblxuLmZvb3RlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSIsIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ob3Jpem9udGFsLWxvZ28ge1xuICBoZWlnaHQ6IDg1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xufVxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/site/site.component.ts":
/*!****************************************!*\
  !*** ./src/app/site/site.component.ts ***!
  \****************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SiteComponent = class SiteComponent {
    constructor() { }
    ngOnInit() {
    }
};
SiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-site',
        template: __webpack_require__(/*! raw-loader!./site.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/site.component.html"),
        styles: [__webpack_require__(/*! ./site.component.less */ "./src/app/site/site.component.less")]
    })
], SiteComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnliscar/Desktop/haulLite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map