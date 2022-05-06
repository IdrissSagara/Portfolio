(self["webpackChunksb_ui_kit_pro_angular"] = self["webpackChunksb_ui_kit_pro_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_landings_landings-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/landings/landings-routing.module */ 30913)).then((m) => m.LandingsRoutingModule),
    },
    {
        path: 'landings',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_landings_landings-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/landings/landings-routing.module */ 30913)).then((m) => m.LandingsRoutingModule),
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_pages_pages-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/pages/pages-routing.module */ 78804)).then((m) => m.PagesRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_error_error-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/error/error-routing.module */ 13005)).then((m) => m.ErrorRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_app-common_app-common-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/app-common/app-common-routing.module */ 94646)).then((m) => m.AppCommonRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_error_error-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! modules/error/error-routing.module */ 13005)).then((m) => m.ErrorRoutingModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'legacy',
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 34689);





let AppComponent = class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.ChildActivationEnd))
            .subscribe((event) => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this.titleService.setTitle(snapshot.data.title || 'SB UI Kit Pro Angular');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: ` <router-outlet></router-outlet> `,
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/app-common.module */ 13939);
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/navigation/navigation.module */ 13276);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule.forRoot(),
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__.NavigationModule.forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 13939:
/*!*****************************************************!*\
  !*** ./src/modules/app-common/app-common.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCommonModule": function() { return /* binding */ AppCommonModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/icons/icons.module */ 84539);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ 83943);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 74973);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives */ 36227);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards */ 86330);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ 33538);
var AppCommonModule_1;

/* tslint:disable: ordered-imports*/



/* Modules */


const modules = [_modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__.IconsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModule];
/* Containers */

/* Components */

/* Directives */

/* Guards */

/* Services */

let AppCommonModule = AppCommonModule_1 = class AppCommonModule {
    static forRoot() {
        return {
            ngModule: AppCommonModule_1,
            providers: [
                ..._services__WEBPACK_IMPORTED_MODULE_6__.services,
                ..._guards__WEBPACK_IMPORTED_MODULE_5__.guards,
                { provide: 'window', useValue: window },
            ],
        };
    }
};
AppCommonModule = AppCommonModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ...modules],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_2__.containers,
            ..._components__WEBPACK_IMPORTED_MODULE_3__.components,
            ..._directives__WEBPACK_IMPORTED_MODULE_4__.directives,
        ],
        exports: [
            ..._containers__WEBPACK_IMPORTED_MODULE_2__.containers,
            ..._components__WEBPACK_IMPORTED_MODULE_3__.components,
            ..._directives__WEBPACK_IMPORTED_MODULE_4__.directives,
            ...modules,
        ],
    })
], AppCommonModule);



/***/ }),

/***/ 27433:
/*!***********************************************************!*\
  !*** ./src/modules/app-common/classes/card-base.class.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardBase": function() { return /* binding */ CardBase; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let CardBase = class CardBase {
    constructor() {
        this.cardClasses = [];
    }
    ngOnInit() {
        if (this.background) {
            this.cardClasses.push(this.background);
        }
        if (this.color) {
            this.cardClasses.push(this.color);
        }
        if (this.classes) {
            this.cardClasses.push(...this.classes);
        }
    }
};
CardBase.ctorParameters = () => [];
CardBase.propDecorators = {
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
CardBase = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)()
    // tslint:disable-next-line: directive-class-suffix
], CardBase);



/***/ }),

/***/ 67819:
/*!*************************************************!*\
  !*** ./src/modules/app-common/classes/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardBase": function() { return /* reexport safe */ _card_base_class__WEBPACK_IMPORTED_MODULE_0__.CardBase; }
/* harmony export */ });
/* harmony import */ var _card_base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-base.class */ 27433);



/***/ }),

/***/ 95147:
/*!********************************************************************!*\
  !*** ./src/modules/app-common/components/alert/alert.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": function() { return /* binding */ AlertComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alert.component.html */ 8753);
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component.scss */ 92908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let AlertComponent = class AlertComponent {
    constructor() {
        this.dismissable = false;
        this.icon = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dismissed = false;
    }
    ngOnInit() {
    }
    closeAlert() {
        this.dismissed = true;
        this.closed.emit();
    }
};
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dismissable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-alert',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertComponent);



/***/ }),

/***/ 29972:
/*!**********************************************************************!*\
  !*** ./src/modules/app-common/components/border/border.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderComponent": function() { return /* binding */ BorderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_border_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./border.component.html */ 85857);
/* harmony import */ var _border_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border.component.scss */ 63214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let BorderComponent = class BorderComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
BorderComponent.ctorParameters = () => [];
BorderComponent.propDecorators = {
    borderType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    borderClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
BorderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-border',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_border_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_border_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BorderComponent);



/***/ }),

/***/ 93621:
/*!**********************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-accordion-faq/card-accordion-faq.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardAccordionFaqComponent": function() { return /* binding */ CardAccordionFaqComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_accordion_faq_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-accordion-faq.component.html */ 6076);
/* harmony import */ var _card_accordion_faq_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-accordion-faq.component.scss */ 64721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let CardAccordionFaqComponent = class CardAccordionFaqComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.oneAtATime = true;
        this.header = false;
        this.collapsed = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.divElements = this.collapsibleSections.map((section) => section.nativeElement);
        for (const divIndex in this.divElements) {
            this.divElements[divIndex].addEventListener('transitionend', (event) => {
                if (!this.collapsed[divIndex]) {
                    this.divElements[divIndex].style.height = '';
                }
            });
        }
        for (const index in this.divElements) {
            if (index !== '0') {
                this.divElements[index].style.height = 0 + 'px';
                this.collapsed[index] = true;
            }
        }
        this.collapsed[0] = false;
        this.changeDetectorRef.detectChanges();
    }
    toggle(index) {
        if (this.collapsed[index]) {
            return this._expand(index);
        }
        else {
            return this._collapse(index);
        }
    }
    _collapse(index) {
        const navHeight = this.divElements[index].scrollHeight;
        const elementTransition = this.divElements[index].style.transition;
        this.divElements[index].style.transition = '';
        requestAnimationFrame(() => {
            this.divElements[index].style.height = navHeight + 'px';
            this.divElements[index].style.transition = elementTransition;
            requestAnimationFrame(() => {
                this.divElements[index].style.height = 0 + 'px';
                this.collapsed[index] = true;
                this.changeDetectorRef.detectChanges();
            });
        });
    }
    _expand(index) {
        this.divElements[index].style.height = this.divElements[index].scrollHeight + 'px';
        this.collapsed[index] = false;
        if (this.oneAtATime) {
            for (const collapsedIndex in this.collapsed) {
                if (!this.collapsed[collapsedIndex] && parseInt(collapsedIndex, 10) !== index) {
                    this._collapse(parseInt(collapsedIndex, 10));
                }
            }
        }
        this.changeDetectorRef.markForCheck();
    }
};
CardAccordionFaqComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
CardAccordionFaqComponent.propDecorators = {
    collapsibleSections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChildren, args: ['collapsibleSection',] }],
    faqs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    oneAtATime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CardAccordionFaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-card-accordion-faq',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_accordion_faq_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_accordion_faq_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardAccordionFaqComponent);



/***/ }),

/***/ 78849:
/*!******************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-collapsable/card-collapsable.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardCollapsableComponent": function() { return /* binding */ CardCollapsableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_collapsable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-collapsable.component.html */ 11290);
/* harmony import */ var _card_collapsable_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-collapsable.component.scss */ 10416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardCollapsableComponent = class CardCollapsableComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor(changeDetectorRef) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.headerText = '';
        this.collapsed = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.divElement = this.collapsibleSection.nativeElement;
        this.divElement.addEventListener('transitionend', (event) => {
            if (!this.collapsed) {
                this.divElement.style.height = '';
            }
        });
    }
    toggle() {
        if (this.collapsed) {
            return this.expand();
        }
        return this.collapse();
    }
    collapse() {
        const navHeight = this.divElement.scrollHeight;
        const elementTransition = this.divElement.style.transition;
        this.divElement.style.transition = '';
        requestAnimationFrame(() => {
            this.divElement.style.height = navHeight + 'px';
            this.divElement.style.transition = elementTransition;
            requestAnimationFrame(() => {
                this.divElement.style.height = 0 + 'px';
                this.collapsed = true;
                this.changeDetectorRef.markForCheck();
            });
        });
    }
    expand() {
        this.divElement.style.height = this.divElement.scrollHeight + 'px';
        this.collapsed = false;
    }
};
CardCollapsableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
CardCollapsableComponent.propDecorators = {
    collapsibleSection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['collapsibleSection',] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardCollapsableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card-collapsable',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_collapsable_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_collapsable_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardCollapsableComponent);



/***/ }),

/***/ 15007:
/*!****************************************************************************!*\
  !*** ./src/modules/app-common/components/card-icon/card-icon.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardIconComponent": function() { return /* binding */ CardIconComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-icon.component.html */ 23521);
/* harmony import */ var _card_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-icon.component.scss */ 7910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardIconComponent = class CardIconComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor() {
        super();
        this.iconBackground = 'bg-primary';
    }
    ngOnInit() {
        super.ngOnInit();
    }
};
CardIconComponent.ctorParameters = () => [];
CardIconComponent.propDecorators = {
    iconBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card-icon',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardIconComponent);



/***/ }),

/***/ 66537:
/*!******************************************************************************!*\
  !*** ./src/modules/app-common/components/card-image/card-image.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardImageComponent": function() { return /* binding */ CardImageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-image.component.html */ 45074);
/* harmony import */ var _card_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-image.component.scss */ 48050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardImageComponent = class CardImageComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor() {
        super();
    }
    ngOnInit() {
        super.ngOnInit();
    }
};
CardImageComponent.ctorParameters = () => [];
CardImageComponent.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card-image',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_image_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_image_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardImageComponent);



/***/ }),

/***/ 57560:
/*!****************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-navigation/card-navigation.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardNavigationComponent": function() { return /* binding */ CardNavigationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-navigation.component.html */ 85673);
/* harmony import */ var _card_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-navigation.component.scss */ 37884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardNavigationComponent = class CardNavigationComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor(changeDetectorRef) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.navType = 'tabbed';
        this.selectedIndex = 0;
        this.selectedIndexForFade = 0;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.fadeableElement = this.fadeableSection.nativeElement;
        this.fadeableElement.addEventListener('transitionend', (event) => {
            this.selectedIndexForFade = this.selectedIndex;
            this.fadeableElement.style.opacity = '100';
            this.changeDetectorRef.detectChanges();
        });
    }
    setSelectedIndex(index) {
        this.fadeableElement.style.opacity = '0';
        this.selectedIndex = index;
    }
};
CardNavigationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
CardNavigationComponent.propDecorators = {
    fadeableSection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['fadeableSection',] }],
    navNames: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    navType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardNavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card-navigation',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardNavigationComponent);



/***/ }),

/***/ 65927:
/*!********************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardViewDetailsComponent": function() { return /* binding */ CardViewDetailsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-view-details.component.html */ 77698);
/* harmony import */ var _card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-view-details.component.scss */ 22717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardViewDetailsComponent = class CardViewDetailsComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor() {
        super();
        this.link = '';
    }
    ngOnInit() {
        super.ngOnInit();
    }
};
CardViewDetailsComponent.ctorParameters = () => [];
CardViewDetailsComponent.propDecorators = {
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardViewDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card-view-details',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_view_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_view_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardViewDetailsComponent);



/***/ }),

/***/ 66333:
/*!******************************************************************!*\
  !*** ./src/modules/app-common/components/card/card.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": function() { return /* binding */ CardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card.component.html */ 45579);
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.scss */ 66849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let CardComponent = class CardComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor() {
        super();
        this.scrollable = false;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.headerActions) {
            this.cardClasses.push('sb-card-header-actions');
        }
        if (this.scrollable) {
            this.cardClasses.push('sb-card-scrollable');
        }
    }
};
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    headerActions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-card',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardComponent);



/***/ }),

/***/ 68047:
/*!**************************************************************************!*\
  !*** ./src/modules/app-common/components/dropdown/dropdown.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": function() { return /* binding */ DropdownComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dropdown.component.html */ 38614);
/* harmony import */ var _dropdown_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.component.scss */ 60336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let DropdownComponent = class DropdownComponent {
    constructor() {
        this.style = 'icon';
        this.placement = 'bottom-start';
        this.customClasses = [];
        this.dropdownButtonClasses = [];
        this.dropdownMenuClasses = [];
    }
    ngOnInit() {
        if (this.style === 'icon') {
            this.dropdownButtonClasses.push(...['sb-btn-icon', 'sb-btn-transparent-dark']);
            this.customClasses.push('no-caret');
        }
        if (this.background) {
            this.dropdownButtonClasses.push(this.background);
        }
        if (this.color) {
            this.dropdownButtonClasses.push(this.color);
        }
        if (this.classes) {
            this.customClasses.push(...this.classes);
        }
        if (this.animation) {
            this.dropdownMenuClasses.push(this.animation);
        }
    }
};
DropdownComponent.ctorParameters = () => [];
DropdownComponent.propDecorators = {
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-dropdown',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dropdown_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DropdownComponent);



/***/ }),

/***/ 74973:
/*!****************************************************!*\
  !*** ./src/modules/app-common/components/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": function() { return /* binding */ components; },
/* harmony export */   "AlertComponent": function() { return /* reexport safe */ _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent; },
/* harmony export */   "CardCollapsableComponent": function() { return /* reexport safe */ _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_3__.CardCollapsableComponent; },
/* harmony export */   "CardIconComponent": function() { return /* reexport safe */ _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_4__.CardIconComponent; },
/* harmony export */   "CardImageComponent": function() { return /* reexport safe */ _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_5__.CardImageComponent; },
/* harmony export */   "CardNavigationComponent": function() { return /* reexport safe */ _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_6__.CardNavigationComponent; },
/* harmony export */   "CardViewDetailsComponent": function() { return /* reexport safe */ _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_7__.CardViewDetailsComponent; },
/* harmony export */   "CardComponent": function() { return /* reexport safe */ _card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardComponent; },
/* harmony export */   "DropdownComponent": function() { return /* reexport safe */ _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.DropdownComponent; },
/* harmony export */   "LoremIpsumComponent": function() { return /* reexport safe */ _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_10__.LoremIpsumComponent; },
/* harmony export */   "ProgressbarComponent": function() { return /* reexport safe */ _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_13__.ProgressbarComponent; },
/* harmony export */   "ProgresscardComponent": function() { return /* reexport safe */ _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_14__.ProgresscardComponent; },
/* harmony export */   "BorderComponent": function() { return /* reexport safe */ _border_border_component__WEBPACK_IMPORTED_MODULE_1__.BorderComponent; },
/* harmony export */   "PageHeaderComponent": function() { return /* reexport safe */ _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__.PageHeaderComponent; },
/* harmony export */   "PageSectionComponent": function() { return /* reexport safe */ _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_12__.PageSectionComponent; },
/* harmony export */   "CardAccordionFaqComponent": function() { return /* reexport safe */ _card_accordion_faq_card_accordion_faq_component__WEBPACK_IMPORTED_MODULE_2__.CardAccordionFaqComponent; }
/* harmony export */ });
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ 95147);
/* harmony import */ var _border_border_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border/border.component */ 29972);
/* harmony import */ var _card_accordion_faq_card_accordion_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-accordion-faq/card-accordion-faq.component */ 93621);
/* harmony import */ var _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-collapsable/card-collapsable.component */ 78849);
/* harmony import */ var _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-icon/card-icon.component */ 15007);
/* harmony import */ var _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-image/card-image.component */ 66537);
/* harmony import */ var _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-navigation/card-navigation.component */ 57560);
/* harmony import */ var _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-view-details/card-view-details.component */ 65927);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ 66333);
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown/dropdown.component */ 68047);
/* harmony import */ var _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lorem-ipsum/lorem-ipsum.component */ 10861);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-header/page-header.component */ 59130);
/* harmony import */ var _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-section/page-section.component */ 99405);
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./progressbar/progressbar.component */ 76819);
/* harmony import */ var _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progresscard/progresscard.component */ 38820);















const components = [
    _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
    _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_3__.CardCollapsableComponent,
    _card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardComponent,
    _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_4__.CardIconComponent,
    _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_5__.CardImageComponent,
    _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_6__.CardNavigationComponent,
    _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_7__.CardViewDetailsComponent,
    _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.DropdownComponent,
    _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_10__.LoremIpsumComponent,
    _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_13__.ProgressbarComponent,
    _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_14__.ProgresscardComponent,
    _border_border_component__WEBPACK_IMPORTED_MODULE_1__.BorderComponent,
    _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__.PageHeaderComponent,
    _page_section_page_section_component__WEBPACK_IMPORTED_MODULE_12__.PageSectionComponent,
    _card_accordion_faq_card_accordion_faq_component__WEBPACK_IMPORTED_MODULE_2__.CardAccordionFaqComponent,
];

















/***/ }),

/***/ 10861:
/*!********************************************************************************!*\
  !*** ./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoremIpsumComponent": function() { return /* binding */ LoremIpsumComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lorem_ipsum_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lorem-ipsum.component.html */ 43294);
/* harmony import */ var _lorem_ipsum_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lorem-ipsum.component.scss */ 70554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LoremIpsumComponent = class LoremIpsumComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LoremIpsumComponent.ctorParameters = () => [];
LoremIpsumComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-lorem-ipsum',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_lorem_ipsum_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lorem_ipsum_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoremIpsumComponent);



/***/ }),

/***/ 59130:
/*!********************************************************************************!*\
  !*** ./src/modules/app-common/components/page-header/page-header.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": function() { return /* binding */ PageHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page-header.component.html */ 53568);
/* harmony import */ var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss */ 78133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);





let PageHeaderComponent = class PageHeaderComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.borderClasses = 'text-white';
    }
    ngOnInit() {
        this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(this.backgroundImage);
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer }
];
PageHeaderComponent.propDecorators = {
    headerClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    borderType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    borderClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-page-header',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PageHeaderComponent);



/***/ }),

/***/ 99405:
/*!**********************************************************************************!*\
  !*** ./src/modules/app-common/components/page-section/page-section.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSectionComponent": function() { return /* binding */ PageSectionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_page_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page-section.component.html */ 83307);
/* harmony import */ var _page_section_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-section.component.scss */ 9246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);





let PageSectionComponent = class PageSectionComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.borderClasses = 'text-white';
    }
    ngOnInit() {
        this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(this.backgroundImage);
    }
};
PageSectionComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer }
];
PageSectionComponent.propDecorators = {
    sectionClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    borderType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    borderClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PageSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-page-section',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_page_section_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_section_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PageSectionComponent);



/***/ }),

/***/ 76819:
/*!********************************************************************************!*\
  !*** ./src/modules/app-common/components/progressbar/progressbar.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressbarComponent": function() { return /* binding */ ProgressbarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./progressbar.component.html */ 15400);
/* harmony import */ var _progressbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component.scss */ 15793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ProgressbarComponent = class ProgressbarComponent {
    constructor() {
        this.bgColor = 'bg-primary';
        this.striped = false;
        this.animated = false;
        this.progressBarClasses = [];
    }
    ngOnInit() {
        this.progressBarClasses.push(this.bgColor);
        if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
        }
        if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
        }
    }
};
ProgressbarComponent.ctorParameters = () => [];
ProgressbarComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ProgressbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-progress-bar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_progressbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgressbarComponent);



/***/ }),

/***/ 38820:
/*!**********************************************************************************!*\
  !*** ./src/modules/app-common/components/progresscard/progresscard.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgresscardComponent": function() { return /* binding */ ProgresscardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_progresscard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./progresscard.component.html */ 69022);
/* harmony import */ var _progresscard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progresscard.component.scss */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/classes */ 67819);





let ProgresscardComponent = class ProgresscardComponent extends _common_classes__WEBPACK_IMPORTED_MODULE_2__.CardBase {
    constructor() {
        super();
        this.progressBarColor = 'bg-primary';
        this.striped = false;
        this.animated = false;
        this.progressBarClasses = [];
    }
    ngOnInit() {
        this.progressBarClasses.push(this.progressBarColor);
        if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
        }
        if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
        }
    }
};
ProgresscardComponent.ctorParameters = () => [];
ProgresscardComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    progressBarColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ProgresscardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-progress-card',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_progresscard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_progresscard_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgresscardComponent);



/***/ }),

/***/ 83943:
/*!****************************************************!*\
  !*** ./src/modules/app-common/containers/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containers": function() { return /* binding */ containers; },
/* harmony export */   "VersionComponent": function() { return /* reexport safe */ _version_version_component__WEBPACK_IMPORTED_MODULE_0__.VersionComponent; }
/* harmony export */ });
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version/version.component */ 95122);

const containers = [_version_version_component__WEBPACK_IMPORTED_MODULE_0__.VersionComponent];



/***/ }),

/***/ 95122:
/*!************************************************************************!*\
  !*** ./src/modules/app-common/containers/version/version.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionComponent": function() { return /* binding */ VersionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./version.component.html */ 71026);
/* harmony import */ var _version_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.component.scss */ 47196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/app-common/services */ 33538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74294);






let VersionComponent = class VersionComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
        this.utilityService.version$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe((v) => (this.version = v));
    }
};
VersionComponent.ctorParameters = () => [
    { type: _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
VersionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'sb-version',
        template: _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_version_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VersionComponent);



/***/ }),

/***/ 36227:
/*!****************************************************!*\
  !*** ./src/modules/app-common/directives/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directives": function() { return /* binding */ directives; },
/* harmony export */   "ScrollSpyDirective": function() { return /* reexport safe */ _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollSpyDirective; }
/* harmony export */ });
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-spy.directive */ 82796);

const directives = [_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollSpyDirective];



/***/ }),

/***/ 82796:
/*!*******************************************************************!*\
  !*** ./src/modules/app-common/directives/scroll-spy.directive.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": function() { return /* binding */ ScrollSpyDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/services */ 33538);



let ScrollSpyDirective = class ScrollSpyDirective {
    constructor(utilityService, _elRef) {
        this.utilityService = utilityService;
        this._elRef = _elRef;
        this.inViewportOptions = {
        // rootMargin: '-1px 0px -1px 0px',
        };
        this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
    }
    ngOnInit() {
        if (!this.hasIntersectionObserver) {
            this.inViewport = true;
            console.log('### INFO: Unable to find IntersectionObserver');
        }
    }
    ngAfterViewInit() {
        if (this.hasIntersectionObserver) {
            const IntersectionObserver = this.utilityService.window.IntersectionObserver;
            this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), Object.assign(Object.assign({}, this.inViewportOptions), { root: this.utilityService.window.document.querySelector('#layoutSidenav_content') }));
            this.observer.observe(this._elRef.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this.observer) {
            this.observer.unobserve(this._elRef.nativeElement);
        }
    }
    intersectionObserverCallback(entries) {
        entries.forEach((entry) => {
            if (this.inViewport === entry.isIntersecting) {
                return;
            }
            this.inViewport = entry.isIntersecting;
        });
    }
    intersectionObserverFeatureDetection() {
        // Exits early if all IntersectionObserver and IntersectionObserverEntry
        // features are natively supported.
        if ('IntersectionObserver' in this.utilityService.window &&
            'IntersectionObserverEntry' in this.utilityService.window) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            if (!('isIntersecting' in
                this.utilityService.window.IntersectionObserverEntry.prototype)) {
                Object.defineProperty(this.utilityService.window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                    get() {
                        return this.intersectionRatio > 0;
                    },
                });
            }
            return true;
        }
        return false;
    }
};
ScrollSpyDirective.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_0__.UtilityService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
ScrollSpyDirective.propDecorators = {
    inViewportOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
ScrollSpyDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[sbproScrollSpy]',
    })
], ScrollSpyDirective);



/***/ }),

/***/ 37110:
/*!***********************************************************!*\
  !*** ./src/modules/app-common/guards/app-common.guard.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCommonGuard": function() { return /* binding */ AppCommonGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41964);



let AppCommonGuard = class AppCommonGuard {
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
    }
};
AppCommonGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AppCommonGuard);



/***/ }),

/***/ 86330:
/*!************************************************!*\
  !*** ./src/modules/app-common/guards/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guards": function() { return /* binding */ guards; },
/* harmony export */   "AppCommonGuard": function() { return /* reexport safe */ _app_common_guard__WEBPACK_IMPORTED_MODULE_0__.AppCommonGuard; }
/* harmony export */ });
/* harmony import */ var _app_common_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-common.guard */ 37110);

const guards = [_app_common_guard__WEBPACK_IMPORTED_MODULE_0__.AppCommonGuard];



/***/ }),

/***/ 33538:
/*!**************************************************!*\
  !*** ./src/modules/app-common/services/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services": function() { return /* binding */ services; },
/* harmony export */   "UtilityService": function() { return /* reexport safe */ _utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService; },
/* harmony export */   "LoremIpsumService": function() { return /* reexport safe */ _lorem_ipsum_service__WEBPACK_IMPORTED_MODULE_0__.LoremIpsumService; }
/* harmony export */ });
/* harmony import */ var _lorem_ipsum_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lorem-ipsum.service */ 25778);
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.service */ 82422);


const services = [_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService, _lorem_ipsum_service__WEBPACK_IMPORTED_MODULE_0__.LoremIpsumService];




/***/ }),

/***/ 25778:
/*!****************************************************************!*\
  !*** ./src/modules/app-common/services/lorem-ipsum.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoremIpsumService": function() { return /* binding */ LoremIpsumService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LoremIpsumService = class LoremIpsumService {
    constructor() {
    }
    lorem() {
        return (`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` +
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` +
            `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.` +
            `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
    }
};
LoremIpsumService.ctorParameters = () => [];
LoremIpsumService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], LoremIpsumService);



/***/ }),

/***/ 82422:
/*!************************************************************!*\
  !*** ./src/modules/app-common/services/utility.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": function() { return /* binding */ UtilityService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 68096);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ 96967);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lity */ 98784);
/* harmony import */ var lity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lity__WEBPACK_IMPORTED_MODULE_2__);






let UtilityService = class UtilityService {
    constructor(http) {
        this.http = http;
        this._window = window;
        this.parse = JSON.parse;
        this.stringify = JSON.stringify;
        this.localStorage = localStorage;
        this._copyToClipboard = (copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default());
        this._AOS = (aos__WEBPACK_IMPORTED_MODULE_0___default());
        this._lity = (lity__WEBPACK_IMPORTED_MODULE_2___default());
    }
    get window() {
        return this._window;
    }
    get AOS() {
        return this._AOS;
    }
    get version$() {
        return this.http.get('/assets/version', { responseType: 'text' });
    }
    getStoredObject(objectName) {
        const objectString = this.localStorage.getItem(objectName);
        if (!objectString) {
            return undefined;
        }
        return this.parse(objectString);
    }
    storeObject(objectName, objectToStore) {
        this.localStorage.setItem(objectName, this.stringify(objectToStore));
    }
    copyToClipboard(text, options) {
        this._copyToClipboard(text, options);
    }
};
UtilityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UtilityService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], UtilityService);



/***/ }),

/***/ 20642:
/*!********************************************!*\
  !*** ./src/modules/icons/icons.feather.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featherIcons": function() { return /* binding */ featherIcons; }
/* harmony export */ });
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-feather/icons */ 940);
/* All feather icons -> https://github.com/michaelbazos/angular-feather#available-icons */

const featherIcons = {
    Activity: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Activity,
    AlertTriangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.AlertTriangle,
    Archive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Archive,
    ArrowUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ArrowUpLeft,
    BarChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BarChart,
    Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Award,
    ArrowRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ArrowRight,
    Bell: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Bell,
    Book: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Book,
    Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Bookmark,
    BookOpen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BookOpen,
    Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Check,
    CheckCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CheckCircle,
    ChevronUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronUp,
    ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronDown,
    ChevronRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronRight,
    Circle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Circle,
    Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Clipboard,
    Clock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Clock,
    CloudRain: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CloudRain,
    Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Code,
    Copy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Copy,
    CornerRightDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CornerRightDown,
    DollarSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DollarSign,
    Download: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Download,
    Droplet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Droplet,
    Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Edit,
    Edit3: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Edit3,
    ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ExternalLink,
    Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Eye,
    Feather: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Feather,
    File: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.File,
    FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FileText,
    Film: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Film,
    Filter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Filter,
    Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Flag,
    Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Globe,
    Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Heart,
    HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HelpCircle,
    Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Home,
    Info: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Info,
    Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Layers,
    Layout: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Layout,
    LifeBuoy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.LifeBuoy,
    Link: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Link,
    Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Lock,
    LogOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.LogOut,
    Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Mail,
    Maximize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Maximize,
    Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Menu,
    Moon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Moon,
    MoreVertical: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.MoreVertical,
    MousePointer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.MousePointer,
    Package: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Package,
    PieChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.PieChart,
    PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.PlusCircle,
    Repeat: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Repeat,
    Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Search,
    Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Settings,
    Share: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Share,
    Sidebar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Sidebar,
    Sliders: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Sliders,
    Smartphone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Smartphone,
    Smile: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Smile,
    Sun: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Sun,
    Sunset: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Sunset,
    Tool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Tool,
    Trash2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Trash2,
    TrendingUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.TrendingUp,
    Truck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Truck,
    Tv: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Tv,
    Type: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Type,
    User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.User,
    UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.UserPlus,
    Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Users,
    X: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.X,
    XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.XCircle,
    Zap: angular_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Zap,
};


/***/ }),

/***/ 90512:
/*!********************************************************!*\
  !*** ./src/modules/icons/icons.font-awesome-brands.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontAwesomeBrandsIcons": function() { return /* binding */ fontAwesomeBrandsIcons; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 65115);
/* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=brands&m=free */

const fontAwesomeBrandsIcons = {
    faBootstrap: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBootstrap,
    faFacebook: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFacebook,
    faFacebookF: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFacebookF,
    faGithub: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithub,
    faGoogle: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGoogle,
    faHtml5: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHtml5,
    faInstagram: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagram,
    faLinkedinIn: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLinkedinIn,
    faTwitter: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter,
};


/***/ }),

/***/ 98494:
/*!*********************************************************!*\
  !*** ./src/modules/icons/icons.font-awesome-regular.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontAwesomeRegularIcons": function() { return /* binding */ fontAwesomeRegularIcons; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 51903);
/* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=regular&m=free */

const fontAwesomeRegularIcons = {
    faArrowAltCircleDown: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowAltCircleDown,
    faBell: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBell,
    faCheckCircle: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle,
    faCircle: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircle,
    faDotCircle: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faDotCircle,
    faFlag: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFlag,
    faHandshake: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHandshake,
};


/***/ }),

/***/ 58277:
/*!*******************************************************!*\
  !*** ./src/modules/icons/icons.font-awesome-solid.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontAwesomeSolidIcons": function() { return /* binding */ fontAwesomeSolidIcons; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 49976);
/* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=solid&m=free */

const fontAwesomeSolidIcons = {
    faAngleDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleDown,
    faAngleRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleRight,
    faArchive: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArchive,
    faArrowLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowLeft,
    faArrowRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowRight,
    faBars: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBars,
    faBookmark: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBookmark,
    faBookOpen: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBookOpen,
    faBriefcase: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBriefcase,
    faCar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCar,
    faChartArea: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChartArea,
    faChartBar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChartBar,
    faChartPie: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChartPie,
    faCheck: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheck,
    faChevronDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChevronDown,
    faChevronRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChevronRight,
    faChevronUp: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChevronUp,
    faClock: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClock,
    faCode: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCode,
    faColumns: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faColumns,
    faCouch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCouch,
    faExclamation: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faExclamation,
    faExclamationTriangle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faExclamationTriangle,
    faFile: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFile,
    faFilePdf: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFilePdf,
    faFlag: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFlag,
    faGift: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGift,
    faGlobe: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGlobe,
    faHome: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHome,
    faLongArrowAltRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLongArrowAltRight,
    faMobileAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMobileAlt,
    faMotorcycle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMotorcycle,
    faPaperclip: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPaperclip,
    faPlay: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlay,
    faPlus: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlus,
    faPlusCircle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlusCircle,
    faQuestion: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faQuestion,
    faSearch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSearch,
    faShoppingCart: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faShoppingCart,
    faStar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStar,
    faStarHalfAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStarHalfAlt,
    faStoreAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStoreAlt,
    faTable: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTable,
    faTachometerAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTachometerAlt,
    faUser: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser,
};


/***/ }),

/***/ 84539:
/*!*******************************************!*\
  !*** ./src/modules/icons/icons.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": function() { return /* binding */ IconsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 54163);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.feather */ 20642);
/* harmony import */ var _icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.font-awesome-solid */ 58277);
/* harmony import */ var _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.font-awesome-regular */ 98494);
/* harmony import */ var _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.font-awesome-brands */ 90512);
/* tslint:disable: ordered-imports*/








let IconsModule = class IconsModule {
    constructor(library) {
        library.addIconPacks(_icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_1__.fontAwesomeSolidIcons, _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_2__.fontAwesomeRegularIcons, _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_3__.fontAwesomeBrandsIcons);
    }
};
IconsModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconLibrary }
];
IconsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule.pick(_icons_feather__WEBPACK_IMPORTED_MODULE_0__.featherIcons)],
        exports: [angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule],
    })
], IconsModule);



/***/ }),

/***/ 99459:
/*!****************************************************!*\
  !*** ./src/modules/navigation/components/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": function() { return /* binding */ components; }
/* harmony export */ });
const components = [];


/***/ }),

/***/ 62436:
/*!**********************************************************************!*\
  !*** ./src/modules/navigation/containers/footer/footer.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 90362);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 69118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    footerClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sb-footer',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 55718:
/*!****************************************************!*\
  !*** ./src/modules/navigation/containers/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containers": function() { return /* binding */ containers; },
/* harmony export */   "TopNavComponent": function() { return /* reexport safe */ _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__.TopNavComponent; },
/* harmony export */   "FooterComponent": function() { return /* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent; }
/* harmony export */ });
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 62436);
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav/top-nav.component */ 31164);


const containers = [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__.TopNavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent];




/***/ }),

/***/ 31164:
/*!************************************************************************!*\
  !*** ./src/modules/navigation/containers/top-nav/top-nav.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavComponent": function() { return /* binding */ TopNavComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-nav.component.html */ 95564);
/* harmony import */ var _top_nav_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav.component.scss */ 76681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);
/* harmony import */ var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/navigation/services */ 56325);






let TopNavComponent = class TopNavComponent {
    constructor(navigationService, utilityService) {
        this.navigationService = navigationService;
        this.utilityService = utilityService;
        this.topNavClasses = 'fixed-top';
        this.brandClasses = 'text-primary';
        this.buttonClasses = 'btn-primary';
        this.isTransparentFixed = false;
        this.scrolledClassAdded = false;
        this.isMenuCollapsed = true;
    }
    scrollHandler(event) {
        if (!this.isTransparentFixed) {
            return;
        }
        if (this.utilityService.window.scrollY > 0 && !this.scrolledClassAdded) {
            this.scrolledClassAdded = true;
            this.topNavClasses = `${this.topNavClasses} navbar-scrolled`;
            return;
        }
        if (this.utilityService.window.scrollY === 0) {
            this.scrolledClassAdded = false;
            this.topNavClasses = this.topNavClasses.replace(' navbar-scrolled', '');
        }
    }
    ngOnInit() {
        if (this.topNavClasses.match('bg-transparent') && this.topNavClasses.match('fixed-top')) {
            this.isTransparentFixed = true;
        }
    }
    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }
};
TopNavComponent.ctorParameters = () => [
    { type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__.NavigationService },
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
TopNavComponent.propDecorators = {
    topNavClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    brandClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    buttonClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    scrollHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['window:scroll', ['$event'],] }]
};
TopNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sb-top-nav',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_top_nav_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_nav_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopNavComponent);



/***/ }),

/***/ 45952:
/*!************************************************!*\
  !*** ./src/modules/navigation/guards/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guards": function() { return /* binding */ guards; },
/* harmony export */   "NavigationGuard": function() { return /* reexport safe */ _navigation_guard__WEBPACK_IMPORTED_MODULE_0__.NavigationGuard; }
/* harmony export */ });
/* harmony import */ var _navigation_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.guard */ 56344);

const guards = [_navigation_guard__WEBPACK_IMPORTED_MODULE_0__.NavigationGuard];



/***/ }),

/***/ 56344:
/*!***********************************************************!*\
  !*** ./src/modules/navigation/guards/navigation.guard.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationGuard": function() { return /* binding */ NavigationGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41964);



let NavigationGuard = class NavigationGuard {
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
    }
};
NavigationGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], NavigationGuard);



/***/ }),

/***/ 15786:
/*!*************************************************!*\
  !*** ./src/modules/navigation/layouts/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layouts": function() { return /* binding */ layouts; },
/* harmony export */   "LayoutErrorComponent": function() { return /* reexport safe */ _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_0__.LayoutErrorComponent; },
/* harmony export */   "LayoutLandingComponent": function() { return /* reexport safe */ _layout_landing_layout_landing_component__WEBPACK_IMPORTED_MODULE_1__.LayoutLandingComponent; }
/* harmony export */ });
/* harmony import */ var _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-error/layout-error.component */ 88790);
/* harmony import */ var _layout_landing_layout_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-landing/layout-landing.component */ 5595);


const layouts = [_layout_landing_layout_landing_component__WEBPACK_IMPORTED_MODULE_1__.LayoutLandingComponent, _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_0__.LayoutErrorComponent];




/***/ }),

/***/ 88790:
/*!*******************************************************************************!*\
  !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutErrorComponent": function() { return /* binding */ LayoutErrorComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./layout-error.component.html */ 57957);
/* harmony import */ var _layout_error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-error.component.scss */ 97417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LayoutErrorComponent = class LayoutErrorComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LayoutErrorComponent.ctorParameters = () => [];
LayoutErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sb-layout-error',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_layout_error_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_layout_error_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LayoutErrorComponent);



/***/ }),

/***/ 5595:
/*!***********************************************************************************!*\
  !*** ./src/modules/navigation/layouts/layout-landing/layout-landing.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutLandingComponent": function() { return /* binding */ LayoutLandingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_layout_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./layout-landing.component.html */ 19067);
/* harmony import */ var _layout_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-landing.component.scss */ 58077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let LayoutLandingComponent = class LayoutLandingComponent {
    constructor() {
        this.footerClasses = 'bg-light footer-light';
    }
    ngOnInit() {
    }
};
LayoutLandingComponent.ctorParameters = () => [];
LayoutLandingComponent.propDecorators = {
    footerClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
LayoutLandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'sbpro-layout-landing',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_layout_landing_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_layout_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LayoutLandingComponent);



/***/ }),

/***/ 13276:
/*!*****************************************************!*\
  !*** ./src/modules/navigation/navigation.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": function() { return /* binding */ NavigationModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/app-common.module */ 13939);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 99459);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ 55718);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ 15786);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ 45952);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ 56325);
var NavigationModule_1;

/* tslint:disable: ordered-imports*/



/* Modules */

/* Components */

/* Containers */

/* Layouts */

/* Guards */

/* Services */

let NavigationModule = NavigationModule_1 = class NavigationModule {
    static forRoot() {
        return {
            ngModule: NavigationModule_1,
            providers: [..._services__WEBPACK_IMPORTED_MODULE_5__.services, ..._guards__WEBPACK_IMPORTED_MODULE_4__.guards],
        };
    }
};
NavigationModule = NavigationModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_2__.containers,
            ..._components__WEBPACK_IMPORTED_MODULE_1__.components,
            ..._layouts__WEBPACK_IMPORTED_MODULE_3__.layouts,
        ],
        exports: [
            ..._containers__WEBPACK_IMPORTED_MODULE_2__.containers,
            ..._components__WEBPACK_IMPORTED_MODULE_1__.components,
            ..._layouts__WEBPACK_IMPORTED_MODULE_3__.layouts,
        ],
        providers: [{ provide: 'window', useValue: window }],
    })
], NavigationModule);



/***/ }),

/***/ 56325:
/*!**************************************************!*\
  !*** ./src/modules/navigation/services/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services": function() { return /* binding */ services; },
/* harmony export */   "NavigationService": function() { return /* reexport safe */ _navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService; }
/* harmony export */ });
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.service */ 31563);

const services = [_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService];



/***/ }),

/***/ 31563:
/*!***************************************************************!*\
  !*** ./src/modules/navigation/services/navigation.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": function() { return /* binding */ NavigationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 34689);





let NavigationService = class NavigationService {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this._sideNavVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this._routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this._currentURL$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.ChildActivationEnd))
            .subscribe((event) => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this._routeData$.next(snapshot.data);
            this._currentURL$.next(router.url);
        });
    }
    sideNavVisible$() {
        return this._sideNavVisible$;
    }
    toggleSideNav(visibility) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        }
        else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }
    routeData$() {
        return this._routeData$;
    }
    currentURL$() {
        return this._currentURL$;
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], NavigationService);



/***/ }),

/***/ 92908:
/*!**********************************************************************!*\
  !*** ./src/modules/app-common/components/alert/alert.component.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 63214:
/*!************************************************************************!*\
  !*** ./src/modules/app-common/components/border/border.component.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 64721:
/*!************************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-accordion-faq/card-accordion-faq.component.scss ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".collapse {\n  overflow: hidden;\n  transition: height 0.2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtYWNjb3JkaW9uLWZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFESiIsImZpbGUiOiJjYXJkLWFjY29yZGlvbi1mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29yZS92YXJpYWJsZXMuc2Nzcyc7XG5cbi5jb2xsYXBzZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbn0iXX0= */");

/***/ }),

/***/ 10416:
/*!********************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-collapsable/card-collapsable.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: contents;\n}\n\n.card-collapsable-arrow {\n  cursor: pointer;\n}\n\n.collapse {\n  overflow: hidden;\n  transition: height 0.2s ease-out;\n}\n\n.card-deck :host {\n  flex: 1 0 0%;\n  margin-right: 0.75rem;\n  margin-bottom: 0;\n  margin-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtY29sbGFwc2FibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUlBO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQURKIiwiZmlsZSI6ImNhcmQtY29sbGFwc2FibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29yZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmNhcmQtY29sbGFwc2FibGUtYXJyb3cge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uY2FyZC1kZWNrIDpob3N0IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 7910:
/*!******************************************************************************!*\
  !*** ./src/modules/app-common/components/card-icon/card-icon.component.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n:host ::ng-deep .card-body {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFESiIsImZpbGUiOiJjYXJkLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29yZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 48050:
/*!********************************************************************************!*\
  !*** ./src/modules/app-common/components/card-image/card-image.component.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoiY2FyZC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ 37884:
/*!******************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-navigation/card-navigation.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\na.nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESiIsImZpbGUiOiJjYXJkLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29yZS92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuYS5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ 22717:
/*!**********************************************************************************************!*\
  !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.scss ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6ImNhcmQtdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL2NvcmUvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ 66849:
/*!********************************************************************!*\
  !*** ./src/modules/app-common/components/card/card.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ 60336:
/*!****************************************************************************!*\
  !*** ./src/modules/app-common/components/dropdown/dropdown.component.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 70554:
/*!**********************************************************************************!*\
  !*** ./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3JlbS1pcHN1bS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 78133:
/*!**********************************************************************************!*\
  !*** ./src/modules/app-common/components/page-header/page-header.component.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 9246:
/*!************************************************************************************!*\
  !*** ./src/modules/app-common/components/page-section/page-section.component.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 15793:
/*!**********************************************************************************!*\
  !*** ./src/modules/app-common/components/progressbar/progressbar.component.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6InByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL2NvcmUvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ 17988:
/*!************************************************************************************!*\
  !*** ./src/modules/app-common/components/progresscard/progresscard.component.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzc2NhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 47196:
/*!**************************************************************************!*\
  !*** ./src/modules/app-common/containers/version/version.component.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 69118:
/*!************************************************************************!*\
  !*** ./src/modules/navigation/containers/footer/footer.component.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 76681:
/*!**************************************************************************!*\
  !*** ./src/modules/navigation/containers/top-nav/top-nav.component.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 97417:
/*!*********************************************************************************!*\
  !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 58077:
/*!*************************************************************************************!*\
  !*** ./src/modules/navigation/layouts/layout-landing/layout-landing.component.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 8753:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/alert/alert.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"icon; else withoutIcon\"\n    ><div class=\"alert alert-icon\" *ngIf=\"!dismissed\" [ngClass]=\"classes\" role=\"alert\">\n        <div class=\"btn-close\" *ngIf=\"dismissable\" type=\"button\" aria-label=\"Close\" (click)=\"closeAlert()\"><span aria-hidden=\"true\">×</span></div>\n        <ng-content select=\".alert-icon-aside\"></ng-content>\n        <div class=\"alert-icon-content\">\n            <h5 class=\"alert-heading\" *ngIf=\"heading\">{{heading}}</h5>\n            <ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container>\n        </div></div></ng-container\n><ng-template #withoutIcon\n    ><div class=\"alert\" *ngIf=\"!dismissed\" [ngClass]=\"classes\" role=\"alert\">\n        <div class=\"btn-close\" *ngIf=\"dismissable\" type=\"button\" aria-label=\"Close\" (click)=\"closeAlert()\"><span aria-hidden=\"true\">×</span></div>\n        <h5 class=\"alert-heading\" *ngIf=\"heading\">{{heading}}</h5>\n        <ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></div></ng-template\n><ng-template #defaultContent><ng-content></ng-content></ng-template>\n");

/***/ }),

/***/ 85857:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/border/border.component.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"svg-border-rounded\" *ngIf='borderType === \"rounded\"' [ngClass]=\"borderClasses\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\" fill=\"currentColor\"><path d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path></svg>\n</div>\n<div class=\"svg-border-waves\" *ngIf='borderType === \"waves\"' [ngClass]=\"borderClasses\">\n    <svg class=\"wave\" style=\"pointer-events: none\" fill=\"currentColor\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1920 75\">\n        <defs>\n            <style>\n                .a {\n                    fill: none;\n                }\n                .b {\n                    clip-path: url(#a);\n                }\n                .d {\n                    opacity: 0.5;\n                    isolation: isolate;\n                }\n            </style>\n            <clippath id=\"a\"><rect class=\"a\" width=\"1920\" height=\"75\"></rect></clippath>\n        </defs>\n        <title>wave</title>\n        <g class=\"b\"><path class=\"c\" d=\"M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48\"></path></g>\n        <g class=\"b\"><path class=\"d\" d=\"M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10\"></path></g>\n        <g class=\"b\"><path class=\"d\" d=\"M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24\"></path></g>\n        <g class=\"b\"><path class=\"d\" d=\"M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150\"></path></g>\n    </svg>\n</div>\n<div class=\"svg-border-angled\" *ngIf='borderType === \"angled\"' [ngClass]=\"borderClasses\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" fill=\"currentColor\"><polygon points=\"0,100 100,0 100,100\"></polygon></svg>\n</div>\n");

/***/ }),

/***/ 6076:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-accordion-faq/card-accordion-faq.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"accordion mb-5\">\n    <div class=\"accordion-item\" *ngIf=\"header\">\n        <div class=\"accordion-body\">\n            <div class=\"d-flex justify-content-between align-items-center py-3\">\n                <div class=\"me-2\">\n                    <h4 class=\"mb-0\"><ng-content select=\".header-title\"></ng-content></h4>\n                    <p class=\"small text-gray-500 mb-0\"><ng-content select=\".header-subtitle\"></ng-content></p>\n                </div>\n                <div class=\"ms-2\"><div class=\"badge bg-success-soft rounded-pill text-success\">{{faqs.length}} Answers</div></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"accordion-item\" *ngFor=\"let faq of faqs; let i = index\">\n        <h2 class=\"accordion-header\"><button class=\"accordion-button py-4\" [ngClass]=\"{collapsed: collapsed[i]}\" (click)=\"toggle(i)\" data-bs-toggle=\"collapse\" href=\"javascript:void(0);\">{{faq.question}}</button></h2>\n        <div class=\"accordion-collapse collapse show\" #collapsibleSection><div class=\"accordion-body\">{{faq.answer}}</div></div>\n    </div>\n</div>\n");

/***/ }),

/***/ 11290:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-collapsable/card-collapsable.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-collapsable mb-4\" [ngClass]=\"cardClasses\">\n    <a class=\"card-header\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggle()\" data-toggle=\"collapse\" role=\"button\" [attr.aria-expanded]=\"!collapsed\"\n        >{{headerText}}\n        <div class=\"card-collapsable-arrow\"><fa-icon class=\"me-1\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></div\n    ></a>\n    <div class=\"collapse show\" #collapsibleSection><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\n</div>\n");

/***/ }),

/***/ 23521:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-icon/card-icon.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-icon mb-4\">\n    <div class=\"row gx-0\">\n        <div class=\"col-auto card-icon-aside\" [ngClass]=\"iconBackground\"><ng-content select=\".card-icon\"></ng-content></div>\n        <div class=\"col\"><ng-content select=\".card-body\"></ng-content></div>\n    </div>\n</div>\n");

/***/ }),

/***/ 45074:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-image/card-image.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\" [ngClass]=\"cardClasses\">\n    <ng-container *ngIf='placement === \"top\"'><img class=\"card-img-top\" [src]=\"src\" alt=\"alt\" /><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></ng-container><ng-container *ngIf='placement === \"bottom\"'><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container><img class=\"card-img-bottom\" [src]=\"src\" alt=\"alt\" /></ng-container\n    ><ng-container *ngIf='placement === \"left\"'\n        ><div class=\"row gx-0\">\n            <div class=\"col-md-4\"><img class=\"img-fluid\" [src]=\"src\" alt=\"alt\" /></div>\n            <div class=\"col-md-8\"><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></div></div></ng-container\n    ><ng-container *ngIf='placement === \"right\"'\n        ><div class=\"row gx-0\">\n            <div class=\"col-md-8\"><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></div>\n            <div class=\"col-md-4\"><img class=\"img-fluid\" [src]=\"src\" alt=\"alt\" /></div></div></ng-container\n    ><ng-container *ngIf='placement === \"overlay\"'><img class=\"card-img\" [src]=\"src\" alt=\"alt\" /><ng-content select=\".card-img-overlay\"></ng-content></ng-container><ng-content select=\".card-footer\"></ng-content>\n</div>\n<ng-template #cardBody><ng-content select=\".card-body\"></ng-content></ng-template>\n");

/***/ }),

/***/ 85673:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-navigation/card-navigation.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\" [ngClass]=\"cardClasses\">\n    <ng-container *ngIf='navType !== \"vertical\"'\n        ><div class=\"card-header border-bottom\">\n            <ng-container *ngIf='navType === \"tabbed\"'\n                ><ul class=\"nav nav-tabs card-header-tabs\" role=\"tablist\">\n                    <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                </ul></ng-container\n            ><ng-container *ngIf='navType === \"pill\"'\n                ><ul class=\"nav nav-pills card-header-pills\" role=\"tablist\">\n                    <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                </ul></ng-container\n            >\n        </div>\n        <div class=\"card-body\">\n            <div class=\"tab-content\">\n                <div class=\"tab-pane fade show active\" #fadeableSection role=\"tabpanel\" aria-labelledby=\"overview-tab\"><ng-container *ngTemplateOutlet=\"templates[selectedIndexForFade]\"></ng-container></div>\n            </div></div></ng-container\n    ><ng-container *ngIf='navType === \"vertical\"'\n        ><ng-content select=\".card-header\"></ng-content>\n        <div class=\"card-body\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-3\">\n                    <ul class=\"nav nav-pills flex-column\" role=\"tablist\">\n                        <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade show active\" #fadeableSection role=\"tabpanel\" aria-labelledby=\"overview-tab\"><ng-container *ngTemplateOutlet=\"templates[selectedIndexForFade]\"></ng-container></div>\n                    </div>\n                </div>\n            </div></div></ng-container\n    ><ng-content select=\".card-footer\"></ng-content>\n</div>\n");

/***/ }),

/***/ 77698:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white mb-4\" [ngClass]=\"cardClasses\">\n    <ng-content select=\".card-body\"></ng-content>\n    <div class=\"card-footer d-flex align-items-center justify-content-between\">\n        <a class=\"small text-white stretched-link\" [routerLink]=\"link\">View Details</a>\n        <div class=\"small text-white\"><fa-icon [icon]='[\"fas\", \"angle-right\"]'></fa-icon></div>\n    </div>\n</div>\n");

/***/ }),

/***/ 45579:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\" [ngClass]=\"cardClasses\"><ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\n");

/***/ }),

/***/ 38614:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/dropdown/dropdown.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown me-3\" [ngClass]=\"customClasses\" ngbDropdown [placement]=\"placement\" display=\"dynamic\">\n    <button class=\"btn dropdown-toggle\" [ngClass]=\"dropdownButtonClasses\" ngbDropdownToggle data-cy=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><ng-content select=\".dropdown-trigger\"></ng-content></button>\n    <div class=\"dropdown-menu dropdown-menu-end border-0 shadow\" [ngClass]=\"dropdownMenuClasses\" ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\"><ng-content select=\".dropdown-items\"></ng-content></div>\n</div>\n");

/***/ }),

/***/ 43294:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n");

/***/ }),

/***/ 53568:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/page-header/page-header.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"page-header-ui\" [ngClass]=\"headerClasses\" [style.background-image]=\"safeBackgroudImage\"><ng-content></ng-content><sbpro-border [borderType]=\"borderType\" [borderClasses]=\"borderClasses\"></sbpro-border></header>\n");

/***/ }),

/***/ 83307:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/page-section/page-section.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section [ngClass]=\"sectionClasses\" [style.background-image]=\"safeBackgroudImage\"><ng-content></ng-content><sbpro-border [borderType]=\"borderType\" [borderClasses]=\"borderClasses\"></sbpro-border></section>\n");

/***/ }),

/***/ 15400:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progressbar/progressbar.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress\">\n    <div class=\"progress-bar\" [ngClass]=\"progressBarClasses\" role=\"progressbar\" [ngStyle]='{width: value + \"%\"}' aria-valuenow=\"value/100\" aria-valuemin=\"0\" aria-valuemax=\"100\"><ng-content></ng-content></div>\n</div>\n");

/***/ }),

/***/ 69022:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progresscard/progresscard.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-progress mb-4\" [ngClass]=\"cardClasses\">\n    <ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content>\n    <div class=\"progress rounded-0\"><div class=\"progress-bar\" [ngClass]=\"progressBarClasses\" role=\"progressbar\" [ngStyle]='{width: value + \"%\"}' aria-valuenow=\"value/100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>\n</div>\n");

/***/ }),

/***/ 71026:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>{{version}}</span>\n");

/***/ }),

/***/ 90362:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer pt-10 pb-5 mt-auto\" [ngClass]=\"footerClasses\">\n    <div class=\"container px-5\">\n        <div class=\"row gx-5\">\n            <div class=\"col-lg-3\">\n                <div class=\"footer-brand\">SB UI Kit Pro</div>\n                <div class=\"mb-3\">Build better websites</div>\n                <div class=\"icon-list-social mb-5\">\n                    <a class=\"icon-list-social-link\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"instagram\"]'></fa-icon></a><a class=\"icon-list-social-link\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook\"]'></fa-icon></a><a class=\"icon-list-social-link\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a><a class=\"icon-list-social-link\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a>\n                </div>\n            </div>\n            <div class=\"col-lg-9\">\n                <div class=\"row gx-5\">\n                    <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n                        <div class=\"text-uppercase-expanded text-xs mb-4\">Product</div>\n                        <ul class=\"list-unstyled mb-0\">\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Landing</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Pages</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Sections</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Documentation</a></li>\n                            <li><a href=\"javascript:void(0);\">Changelog</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n                        <div class=\"text-uppercase-expanded text-xs mb-4\">Technical</div>\n                        <ul class=\"list-unstyled mb-0\">\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Documentation</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Changelog</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Theme Customizer</a></li>\n                            <li><a href=\"javascript:void(0);\">UI Kit</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 mb-5 mb-md-0\">\n                        <div class=\"text-uppercase-expanded text-xs mb-4\">Includes</div>\n                        <ul class=\"list-unstyled mb-0\">\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Utilities</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Components</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Layouts</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Code Samples</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Products</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Affiliates</a></li>\n                            <li><a href=\"javascript:void(0);\">Updates</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"text-uppercase-expanded text-xs mb-4\">Legal</div>\n                        <ul class=\"list-unstyled mb-0\">\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Privacy Policy</a></li>\n                            <li class=\"mb-2\"><a href=\"javascript:void(0);\">Terms and Conditions</a></li>\n                            <li><a href=\"javascript:void(0);\">License</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr class=\"my-5\" />\n        <div class=\"row gx-5 align-items-center\">\n            <div class=\"col-md-6 small\">Copyright &copy; Your Website 2021</div>\n            <div class=\"col-md-6 text-md-end small\">\n                <a href=\"javascript:void(0);\">Privacy Policy</a>\n                &middot;\n                <a href=\"javascript:void(0);\">Terms &amp; Conditions</a>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ 95564:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-marketing navbar-expand-lg\" sbproScrollSpy [ngClass]=\"topNavClasses\">\n    <div class=\"container px-5\">\n        <a class=\"navbar-brand\" routerLink=\"/\" [ngClass]=\"brandClasses\">SB UI Kit Pro</a><button class=\"navbar-toggler\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><i-feather name=\"menu\"></i-feather></button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isMenuCollapsed\">\n            <ul class=\"navbar-nav ms-auto me-lg-5\">\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li>\n                <li class=\"nav-item dropdown dropdown-xl no-caret\" ngbDropdown>\n                    <a class=\"nav-link dropdown-toggle pointer\" id=\"navbarDropdownDemos\" ngbDropdownToggle data-cy=\"landingsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Landings<fa-icon class=\"dropdown-arrow\" [icon]='[\"fas\", \"chevron-right\"]'></fa-icon></a>\n                    <div class=\"dropdown-menu dropdown-menu-end animated--fade-in-up me-lg-n25 me-xl-n15\" ngbDropdownMenu aria-labelledby=\"navbarDropdownDemos\">\n                        <div class=\"row gx-0\">\n                            <div class=\"col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block\" style=\"background-image: url('/assets/img/backgrounds/bg-dropdown-xl.jpg')\">\n                                <div class=\"d-flex h-100 w-100 align-items-center justify-content-center\">\n                                    <div class=\"text-white text-center z-1\">\n                                        <div class=\"mb-3\">Multipurpose landing pages for a variety of projects.</div>\n                                        <a class=\"btn btn-white btn-sm text-primary\">View All</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-7 p-lg-5\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6\">\n                                        <h6 class=\"dropdown-header text-primary\">Applications</h6>\n                                        <a class=\"dropdown-item\" routerLink=\"/landings/mobile-app\">Mobile App</a><a class=\"dropdown-item\" routerLink=\"/landings/desktop-app\">Desktop App</a>\n                                        <div class=\"dropdown-divider border-0\"></div>\n                                        <h6 class=\"dropdown-header text-primary\">Business</h6>\n                                        <a class=\"dropdown-item\" routerLink=\"/landings/multipurpose\">Multipurpose</a><a class=\"dropdown-item\" routerLink=\"/landings/agency\">Agency</a><a class=\"dropdown-item\" routerLink=\"/landings/press\">Press</a><a class=\"dropdown-item\" routerLink=\"/landings/directory\">Directory</a><a class=\"dropdown-item\" routerLink=\"/landings/rental\">Rental</a><a class=\"dropdown-item\" routerLink=\"/landings/real-estate\">Real Estate</a><a class=\"dropdown-item\" routerLink=\"/landings/classifieds\">Classifieds</a>\n                                        <div class=\"dropdown-divider border-0\"></div>\n                                        <h6 class=\"dropdown-header text-primary\">Lead Generation</h6>\n                                        <a class=\"dropdown-item\" routerLink=\"/landings/lead-capture\">Lead Capture</a>\n                                        <div class=\"dropdown-divider border-0 d-lg-none\"></div>\n                                    </div>\n                                    <div class=\"col-lg-6\">\n                                        <h6 class=\"dropdown-header text-primary\">Personal</h6>\n                                        <a class=\"dropdown-item\" routerLink=\"/landings/resume\">Resume</a><a class=\"dropdown-item\" routerLink=\"/landings/portfolio\">Portfolio</a>\n                                        <div class=\"dropdown-divider border-0\"></div>\n                                        <h6 class=\"dropdown-header text-primary\">Header Styles</h6>\n                                        <a class=\"dropdown-item\" routerLink=\"/landings/basic\">Basic</a><a class=\"dropdown-item\" routerLink=\"/landings/basic-signup\">Basic (Signup)</a><a class=\"dropdown-item\" routerLink=\"/landings/graphic\">Graphic</a><a class=\"dropdown-item\" routerLink=\"/landings/graphic-signup\">Graphic (Signup)</a><a class=\"dropdown-item\" routerLink=\"/landings/inner-page\">Inner Page</a><a class=\"dropdown-item\" routerLink=\"/landings/nav-only\">Nav Only</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown dropdown-xl no-caret\" ngbDropdown>\n                    <a class=\"nav-link dropdown-toggle pointer\" id=\"navbarDropdownPages\" ngbDropdownToggle data-cy=\"pagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Pages<fa-icon class=\"dropdown-arrow\" [icon]='[\"fas\", \"chevron-right\"]'></fa-icon></a>\n                    <div class=\"dropdown-menu dropdown-menu-end animated--fade-in-up me-lg-n20 me-xl-n15\" ngbDropdownMenu aria-labelledby=\"navbarDropdownPages\">\n                        <div class=\"row gx-0\">\n                            <div class=\"col-lg-4 p-lg-5\">\n                                <h6 class=\"dropdown-header text-primary\">Company</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/basic-page\">Basic Page</a><a class=\"dropdown-item\" routerLink=\"/pages/about\">About</a><a class=\"dropdown-item\" routerLink=\"/pages/pricing\">Pricing</a><a class=\"dropdown-item\" routerLink=\"/pages/contact\">Contact</a><a class=\"dropdown-item\" routerLink=\"/pages/team\">Team</a><a class=\"dropdown-item\" routerLink=\"/pages/terms\">Terms</a>\n                                <div class=\"dropdown-divider border-0\"></div>\n                                <h6 class=\"dropdown-header text-primary\">Support</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/help-center\">Help Center</a><a class=\"dropdown-item\" routerLink=\"/pages/knowledgebase\">Knowledgebase</a><a class=\"dropdown-item\" routerLink=\"/pages/message-center\">Message Center</a><a class=\"dropdown-item\" routerLink=\"/pages/support-ticket\">Support Ticket</a>\n                                <div class=\"dropdown-divider border-0 d-lg-none\"></div>\n                            </div>\n                            <div class=\"col-lg-4 p-lg-5\">\n                                <h6 class=\"dropdown-header text-primary\">Careers</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/careers-list\">Careers List</a><a class=\"dropdown-item\" routerLink=\"/pages/position-details\">Position Details</a>\n                                <div class=\"dropdown-divider border-0\"></div>\n                                <h6 class=\"dropdown-header text-primary\">Blog</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/overview\">Overview</a><a class=\"dropdown-item\" routerLink=\"/pages/post\">Post</a><a class=\"dropdown-item\" routerLink=\"/pages/archive\">Archive</a>\n                                <div class=\"dropdown-divider border-0\"></div>\n                                <h6 class=\"dropdown-header text-primary\">Portfolio</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/grid\">Grid</a><a class=\"dropdown-item\" routerLink=\"/pages/large-grid\">Large Grid</a><a class=\"dropdown-item\" routerLink=\"/pages/masonry\">Masonry</a><a class=\"dropdown-item\" routerLink=\"/pages/case-study\">Case Study</a><a class=\"dropdown-item\" routerLink=\"/pages/project\">Project</a>\n                            </div>\n                            <div class=\"col-lg-4 p-lg-5\">\n                                <h6 class=\"dropdown-header text-primary\">Error</h6>\n                                <a class=\"dropdown-item\" routerLink=\"/pages/error-400\">400 Error</a><a class=\"dropdown-item\" routerLink=\"/pages/error-401\">401 Error</a><a class=\"dropdown-item\" routerLink=\"/pages/error-403\">403 Error</a><a class=\"dropdown-item\" routerLink=\"/pages/error-404-1\">404 Error (Option 1)</a><a class=\"dropdown-item\" routerLink=\"/pages/error-404-2\">404 Error (Option 2)</a><a class=\"dropdown-item\" routerLink=\"/pages/error-500\">500 Error</a><a class=\"dropdown-item\" routerLink=\"/pages/error-503\">503 Error</a><a class=\"dropdown-item\" routerLink=\"/pages/error-504\">504 Error</a>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown no-caret\" ngbDropdown>\n                    <a class=\"nav-link dropdown-toggle pointer\" id=\"navbarDropdownDocs\" ngbDropdownToggle data-cy=\"documentationDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Documentation<fa-icon class=\"dropdown-arrow\" [icon]='[\"fas\", \"chevron-right\"]'></fa-icon></a>\n                    <div class=\"dropdown-menu dropdown-menu-end animated--fade-in-up\" ngbDropdownMenu aria-labelledby=\"navbarDropdownDocs\">\n                        <a class=\"dropdown-item py-3\" href=\"https://docs.startbootstrap.com/sb-ui-kit-pro-angular\"\n                            ><div class=\"icon-stack bg-primary-soft text-primary me-4\"><fa-icon [icon]='[\"fas\", \"book-open\"]'></fa-icon></div>\n                            <div>\n                                <div class=\"small text-gray-500\">Documentation</div>\n                                Usage instructions and reference\n                            </div></a\n                        >\n                        <div class=\"dropdown-divider m-0\"></div>\n                        <a class=\"dropdown-item py-3\" href=\"https://docs.startbootstrap.com/sb-ui-kit-pro-angular/development-create\"\n                            ><div class=\"icon-stack bg-primary-soft text-primary me-4\"><fa-icon [icon]='[\"fas\", \"code\"]'></fa-icon></div>\n                            <div>\n                                <div class=\"small text-gray-500\">Develop</div>\n                                Create a landing page\n                            </div></a\n                        >\n                        <div class=\"dropdown-divider m-0\"></div>\n                        <a class=\"dropdown-item py-3\" href=\"https://docs.startbootstrap.com/sb-ui-kit-pro-angular/changelog\"\n                            ><div class=\"icon-stack bg-primary-soft text-primary me-4\"><fa-icon [icon]='[\"fas\", \"file\"]'></fa-icon></div>\n                            <div>\n                                <div class=\"small text-gray-500\">Changelog</div>\n                                Updates and changes\n                            </div></a\n                        >\n                    </div>\n                </li>\n            </ul>\n            <a class=\"btn btn-primary fw-500 ms-lg-4\" href=\"https://shop.startbootstrap.com/product/sb-ui-kit-pro-angular/\" [ngClass]=\"buttonClasses\">Buy Now<i-feather class=\"ms-2\" name=\"arrow-right\"></i-feather></a>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ 57957:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"layoutError\">\n    <div id=\"layoutError_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutError_footer\"><sb-footer></sb-footer></div>\n</div>\n");

/***/ }),

/***/ 19067:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-landing/layout-landing.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"layoutDefault\">\n    <div id=\"layoutDefault_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutDefault_footer\"><sb-footer [footerClasses]=\"footerClasses\"></sb-footer></div>\n</div>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map