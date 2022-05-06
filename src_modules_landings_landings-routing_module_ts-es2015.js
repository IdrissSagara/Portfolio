(self["webpackChunksb_ui_kit_pro_angular"] = self["webpackChunksb_ui_kit_pro_angular"] || []).push([["src_modules_landings_landings-routing_module_ts"],{

/***/ 84789:
/*!**************************************************!*\
  !*** ./src/modules/landings/components/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": function() { return /* binding */ components; }
/* harmony export */ });
const components = [];


/***/ }),

/***/ 14539:
/*!********************************************************************!*\
  !*** ./src/modules/landings/containers/agency/agency.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyComponent": function() { return /* binding */ AgencyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_agency_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./agency.component.html */ 67633);
/* harmony import */ var _agency_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency.component.scss */ 83816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let AgencyComponent = class AgencyComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
AgencyComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
AgencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-agency',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_agency_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_agency_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AgencyComponent);



/***/ }),

/***/ 87338:
/*!********************************************************************************!*\
  !*** ./src/modules/landings/containers/basic-signup/basic-signup.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSignupComponent": function() { return /* binding */ BasicSignupComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_basic_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./basic-signup.component.html */ 13746);
/* harmony import */ var _basic_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-signup.component.scss */ 4695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let BasicSignupComponent = class BasicSignupComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
BasicSignupComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
BasicSignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-basic-signup',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_basic_signup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_basic_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BasicSignupComponent);



/***/ }),

/***/ 29649:
/*!******************************************************************!*\
  !*** ./src/modules/landings/containers/basic/basic.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicComponent": function() { return /* binding */ BasicComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./basic.component.html */ 23781);
/* harmony import */ var _basic_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.component.scss */ 48654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let BasicComponent = class BasicComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
BasicComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
BasicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-basic',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_basic_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BasicComponent);



/***/ }),

/***/ 49617:
/*!******************************************************************************!*\
  !*** ./src/modules/landings/containers/classifieds/classifieds.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassifiedsComponent": function() { return /* binding */ ClassifiedsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_classifieds_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./classifieds.component.html */ 76804);
/* harmony import */ var _classifieds_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classifieds.component.scss */ 65574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let ClassifiedsComponent = class ClassifiedsComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
ClassifiedsComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
ClassifiedsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-classifieds',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_classifieds_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_classifieds_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassifiedsComponent);



/***/ }),

/***/ 50464:
/*!******************************************************************************!*\
  !*** ./src/modules/landings/containers/desktop-app/desktop-app.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopAppComponent": function() { return /* binding */ DesktopAppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_desktop_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./desktop-app.component.html */ 67404);
/* harmony import */ var _desktop_app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-app.component.scss */ 51913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let DesktopAppComponent = class DesktopAppComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
DesktopAppComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
DesktopAppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-desktop-app',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_desktop_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_desktop_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DesktopAppComponent);



/***/ }),

/***/ 15811:
/*!**************************************************************************!*\
  !*** ./src/modules/landings/containers/directory/directory.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryComponent": function() { return /* binding */ DirectoryComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_directory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./directory.component.html */ 9841);
/* harmony import */ var _directory_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.component.scss */ 82577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let DirectoryComponent = class DirectoryComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
DirectoryComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
DirectoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-directory',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_directory_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_directory_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DirectoryComponent);



/***/ }),

/***/ 86550:
/*!************************************************************************************!*\
  !*** ./src/modules/landings/containers/graphic-signup/graphic-signup.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicSignupComponent": function() { return /* binding */ GraphicSignupComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_graphic_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./graphic-signup.component.html */ 89043);
/* harmony import */ var _graphic_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphic-signup.component.scss */ 1205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let GraphicSignupComponent = class GraphicSignupComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
GraphicSignupComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
GraphicSignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-graphic-signup',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_graphic_signup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_graphic_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GraphicSignupComponent);



/***/ }),

/***/ 14952:
/*!**********************************************************************!*\
  !*** ./src/modules/landings/containers/graphic/graphic.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicComponent": function() { return /* binding */ GraphicComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_graphic_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./graphic.component.html */ 35679);
/* harmony import */ var _graphic_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphic.component.scss */ 43696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let GraphicComponent = class GraphicComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
GraphicComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
GraphicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-graphic',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_graphic_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_graphic_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GraphicComponent);



/***/ }),

/***/ 88687:
/*!****************************************************************!*\
  !*** ./src/modules/landings/containers/home/home.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.component.html */ 62907);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 87814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let HomeComponent = class HomeComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-home',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeComponent);



/***/ }),

/***/ 60543:
/*!**************************************************!*\
  !*** ./src/modules/landings/containers/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containers": function() { return /* binding */ containers; },
/* harmony export */   "LandingsComponent": function() { return /* reexport safe */ _landings_landings_component__WEBPACK_IMPORTED_MODULE_10__.LandingsComponent; },
/* harmony export */   "HomeComponent": function() { return /* reexport safe */ _home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent; },
/* harmony export */   "MultiPurposeComponent": function() { return /* reexport safe */ _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_13__.MultiPurposeComponent; },
/* harmony export */   "MobileAppComponent": function() { return /* reexport safe */ _mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_12__.MobileAppComponent; },
/* harmony export */   "DesktopAppComponent": function() { return /* reexport safe */ _desktop_app_desktop_app_component__WEBPACK_IMPORTED_MODULE_4__.DesktopAppComponent; },
/* harmony export */   "AgencyComponent": function() { return /* reexport safe */ _agency_agency_component__WEBPACK_IMPORTED_MODULE_0__.AgencyComponent; },
/* harmony export */   "PressComponent": function() { return /* reexport safe */ _press_press_component__WEBPACK_IMPORTED_MODULE_16__.PressComponent; },
/* harmony export */   "DirectoryComponent": function() { return /* reexport safe */ _directory_directory_component__WEBPACK_IMPORTED_MODULE_5__.DirectoryComponent; },
/* harmony export */   "RentalComponent": function() { return /* reexport safe */ _rental_rental_component__WEBPACK_IMPORTED_MODULE_18__.RentalComponent; },
/* harmony export */   "RealEstateComponent": function() { return /* reexport safe */ _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_17__.RealEstateComponent; },
/* harmony export */   "ClassifiedsComponent": function() { return /* reexport safe */ _classifieds_classifieds_component__WEBPACK_IMPORTED_MODULE_3__.ClassifiedsComponent; },
/* harmony export */   "LeadCaptureComponent": function() { return /* reexport safe */ _lead_capture_lead_capture_component__WEBPACK_IMPORTED_MODULE_11__.LeadCaptureComponent; },
/* harmony export */   "VideoFeatureComponent": function() { return /* reexport safe */ _video_feature_video_feature_component__WEBPACK_IMPORTED_MODULE_20__.VideoFeatureComponent; },
/* harmony export */   "ResumeComponent": function() { return /* reexport safe */ _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__.ResumeComponent; },
/* harmony export */   "PortfolioComponent": function() { return /* reexport safe */ _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__.PortfolioComponent; },
/* harmony export */   "BasicComponent": function() { return /* reexport safe */ _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__.BasicComponent; },
/* harmony export */   "BasicSignupComponent": function() { return /* reexport safe */ _basic_signup_basic_signup_component__WEBPACK_IMPORTED_MODULE_1__.BasicSignupComponent; },
/* harmony export */   "GraphicComponent": function() { return /* reexport safe */ _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_7__.GraphicComponent; },
/* harmony export */   "GraphicSignupComponent": function() { return /* reexport safe */ _graphic_signup_graphic_signup_component__WEBPACK_IMPORTED_MODULE_6__.GraphicSignupComponent; },
/* harmony export */   "InnerPageComponent": function() { return /* reexport safe */ _inner_page_inner_page_component__WEBPACK_IMPORTED_MODULE_9__.InnerPageComponent; },
/* harmony export */   "NavOnlyComponent": function() { return /* reexport safe */ _nav_only_nav_only_component__WEBPACK_IMPORTED_MODULE_14__.NavOnlyComponent; }
/* harmony export */ });
/* harmony import */ var _agency_agency_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency/agency.component */ 14539);
/* harmony import */ var _basic_signup_basic_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-signup/basic-signup.component */ 87338);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ 29649);
/* harmony import */ var _classifieds_classifieds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classifieds/classifieds.component */ 49617);
/* harmony import */ var _desktop_app_desktop_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop-app/desktop-app.component */ 50464);
/* harmony import */ var _directory_directory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory/directory.component */ 15811);
/* harmony import */ var _graphic_signup_graphic_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphic-signup/graphic-signup.component */ 86550);
/* harmony import */ var _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphic/graphic.component */ 14952);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ 88687);
/* harmony import */ var _inner_page_inner_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inner-page/inner-page.component */ 20640);
/* harmony import */ var _landings_landings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landings/landings.component */ 31056);
/* harmony import */ var _lead_capture_lead_capture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lead-capture/lead-capture.component */ 9234);
/* harmony import */ var _mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mobile-app/mobile-app.component */ 70616);
/* harmony import */ var _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multi-purpose/multi-purpose.component */ 71637);
/* harmony import */ var _nav_only_nav_only_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-only/nav-only.component */ 68132);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 67966);
/* harmony import */ var _press_press_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./press/press.component */ 82850);
/* harmony import */ var _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./real-estate/real-estate.component */ 6561);
/* harmony import */ var _rental_rental_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rental/rental.component */ 73737);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resume/resume.component */ 29977);
/* harmony import */ var _video_feature_video_feature_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./video-feature/video-feature.component */ 88122);





















const containers = [
    _landings_landings_component__WEBPACK_IMPORTED_MODULE_10__.LandingsComponent,
    _home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent,
    _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_13__.MultiPurposeComponent,
    _mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_12__.MobileAppComponent,
    _desktop_app_desktop_app_component__WEBPACK_IMPORTED_MODULE_4__.DesktopAppComponent,
    _agency_agency_component__WEBPACK_IMPORTED_MODULE_0__.AgencyComponent,
    _press_press_component__WEBPACK_IMPORTED_MODULE_16__.PressComponent,
    _directory_directory_component__WEBPACK_IMPORTED_MODULE_5__.DirectoryComponent,
    _rental_rental_component__WEBPACK_IMPORTED_MODULE_18__.RentalComponent,
    _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_17__.RealEstateComponent,
    _classifieds_classifieds_component__WEBPACK_IMPORTED_MODULE_3__.ClassifiedsComponent,
    _lead_capture_lead_capture_component__WEBPACK_IMPORTED_MODULE_11__.LeadCaptureComponent,
    _video_feature_video_feature_component__WEBPACK_IMPORTED_MODULE_20__.VideoFeatureComponent,
    _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__.ResumeComponent,
    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__.PortfolioComponent,
    _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__.BasicComponent,
    _basic_signup_basic_signup_component__WEBPACK_IMPORTED_MODULE_1__.BasicSignupComponent,
    _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_7__.GraphicComponent,
    _graphic_signup_graphic_signup_component__WEBPACK_IMPORTED_MODULE_6__.GraphicSignupComponent,
    _inner_page_inner_page_component__WEBPACK_IMPORTED_MODULE_9__.InnerPageComponent,
    _nav_only_nav_only_component__WEBPACK_IMPORTED_MODULE_14__.NavOnlyComponent,
];























/***/ }),

/***/ 20640:
/*!****************************************************************************!*\
  !*** ./src/modules/landings/containers/inner-page/inner-page.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnerPageComponent": function() { return /* binding */ InnerPageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_inner_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inner-page.component.html */ 73543);
/* harmony import */ var _inner_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inner-page.component.scss */ 34842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let InnerPageComponent = class InnerPageComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
InnerPageComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
InnerPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-inner-page',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_inner_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inner_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InnerPageComponent);



/***/ }),

/***/ 31056:
/*!************************************************************************!*\
  !*** ./src/modules/landings/containers/landings/landings.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingsComponent": function() { return /* binding */ LandingsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_landings_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landings.component.html */ 80915);
/* harmony import */ var _landings_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landings.component.scss */ 9390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let LandingsComponent = class LandingsComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
LandingsComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
LandingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-landings',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_landings_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landings_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingsComponent);



/***/ }),

/***/ 9234:
/*!********************************************************************************!*\
  !*** ./src/modules/landings/containers/lead-capture/lead-capture.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadCaptureComponent": function() { return /* binding */ LeadCaptureComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lead_capture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lead-capture.component.html */ 14989);
/* harmony import */ var _lead_capture_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead-capture.component.scss */ 84323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);







let LeadCaptureComponent = class LeadCaptureComponent {
    constructor(utilityService, fb, modalService) {
        this.utilityService = utilityService;
        this.fb = fb;
        this.modalService = modalService;
        this.signupForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    get emailControl() {
        return this.signupForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
    // Accessors
    get firstNameControl() {
        return this.signupForm.get('firstName');
    }
    get firstNameControlValid() {
        return this.firstNameControl.touched && !this.firstNameControlInvalid;
    }
    get firstNameControlInvalid() {
        return this.firstNameControl.touched && this.firstNameControl.hasError('required');
    }
    get lastNameControl() {
        return this.signupForm.get('lastName');
    }
    get lastNameControlValid() {
        return this.lastNameControl.touched && !this.lastNameControlInvalid;
    }
    get lastNameControlInvalid() {
        return this.lastNameControl.touched && this.lastNameControl.hasError('required');
    }
    get companyControl() {
        return this.signupForm.get('company');
    }
    get companyControlValid() {
        return this.companyControl.touched && !this.companyControlInvalid;
    }
    get companyControlInvalid() {
        return this.companyControl.touched && this.companyControl.hasError('required');
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
    onSubmit() {
        if (this.signupForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then((result) => {
            }, (reason) => {
            });
        }
        for (const key in this.signupForm.controls) {
            const control = this.signupForm.controls[key];
            control.markAllAsTouched();
        }
    }
};
LeadCaptureComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal }
];
LeadCaptureComponent.propDecorators = {
    confirmationModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['confirmationModal',] }]
};
LeadCaptureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'sbpro-lead-capture',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_lead_capture_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lead_capture_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeadCaptureComponent);



/***/ }),

/***/ 70616:
/*!****************************************************************************!*\
  !*** ./src/modules/landings/containers/mobile-app/mobile-app.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileAppComponent": function() { return /* binding */ MobileAppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mobile_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mobile-app.component.html */ 88917);
/* harmony import */ var _mobile_app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-app.component.scss */ 85131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let MobileAppComponent = class MobileAppComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
MobileAppComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
MobileAppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-mobile-app',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_mobile_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mobile_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MobileAppComponent);



/***/ }),

/***/ 71637:
/*!**********************************************************************************!*\
  !*** ./src/modules/landings/containers/multi-purpose/multi-purpose.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiPurposeComponent": function() { return /* binding */ MultiPurposeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_multi_purpose_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./multi-purpose.component.html */ 39100);
/* harmony import */ var _multi_purpose_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-purpose.component.scss */ 91009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let MultiPurposeComponent = class MultiPurposeComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
MultiPurposeComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
MultiPurposeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-multi-purpose',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_multi_purpose_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_multi_purpose_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MultiPurposeComponent);



/***/ }),

/***/ 68132:
/*!************************************************************************!*\
  !*** ./src/modules/landings/containers/nav-only/nav-only.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOnlyComponent": function() { return /* binding */ NavOnlyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nav_only_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nav-only.component.html */ 386);
/* harmony import */ var _nav_only_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-only.component.scss */ 65873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let NavOnlyComponent = class NavOnlyComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
NavOnlyComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
NavOnlyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-nav-only',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_nav_only_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nav_only_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavOnlyComponent);



/***/ }),

/***/ 67966:
/*!**************************************************************************!*\
  !*** ./src/modules/landings/containers/portfolio/portfolio.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": function() { return /* binding */ PortfolioComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./portfolio.component.html */ 25604);
/* harmony import */ var _portfolio_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component.scss */ 22673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let PortfolioComponent = class PortfolioComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
PortfolioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-portfolio',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_portfolio_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PortfolioComponent);



/***/ }),

/***/ 82850:
/*!******************************************************************!*\
  !*** ./src/modules/landings/containers/press/press.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressComponent": function() { return /* binding */ PressComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_press_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./press.component.html */ 69169);
/* harmony import */ var _press_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./press.component.scss */ 69019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let PressComponent = class PressComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
PressComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
PressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-press',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_press_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_press_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PressComponent);



/***/ }),

/***/ 6561:
/*!******************************************************************************!*\
  !*** ./src/modules/landings/containers/real-estate/real-estate.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateComponent": function() { return /* binding */ RealEstateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_real_estate_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./real-estate.component.html */ 65077);
/* harmony import */ var _real_estate_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./real-estate.component.scss */ 32844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let RealEstateComponent = class RealEstateComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
RealEstateComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
RealEstateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-real-estate',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_real_estate_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_real_estate_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RealEstateComponent);



/***/ }),

/***/ 73737:
/*!********************************************************************!*\
  !*** ./src/modules/landings/containers/rental/rental.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentalComponent": function() { return /* binding */ RentalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rental_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rental.component.html */ 96024);
/* harmony import */ var _rental_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rental.component.scss */ 90580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let RentalComponent = class RentalComponent {
    constructor(utilityService, loremIpsumService) {
        this.utilityService = utilityService;
        this.loremIpsumService = loremIpsumService;
        this.faqs = [
            {
                question: 'Is there a minimum number of nights?',
                answer: this.loremIpsumService.lorem(),
            },
            {
                question: 'How close is the nearest grocery store?',
                answer: this.loremIpsumService.lorem(),
            },
            {
                question: 'Is there a discount for longer term rental periods?',
                answer: this.loremIpsumService.lorem(),
            },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
RentalComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.LoremIpsumService }
];
RentalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-rental',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_rental_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rental_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RentalComponent);



/***/ }),

/***/ 29977:
/*!********************************************************************!*\
  !*** ./src/modules/landings/containers/resume/resume.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": function() { return /* binding */ ResumeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resume.component.html */ 67087);
/* harmony import */ var _resume_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.component.scss */ 75302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let ResumeComponent = class ResumeComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
ResumeComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
ResumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-resume',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resume_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResumeComponent);



/***/ }),

/***/ 88122:
/*!**********************************************************************************!*\
  !*** ./src/modules/landings/containers/video-feature/video-feature.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoFeatureComponent": function() { return /* binding */ VideoFeatureComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_video_feature_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./video-feature.component.html */ 26367);
/* harmony import */ var _video_feature_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-feature.component.scss */ 13696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/services */ 33538);





let VideoFeatureComponent = class VideoFeatureComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.utilityService.AOS.init({
            disable: 'mobile',
            duration: 600,
            once: true,
        });
    }
};
VideoFeatureComponent.ctorParameters = () => [
    { type: _common_services__WEBPACK_IMPORTED_MODULE_2__.UtilityService }
];
VideoFeatureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-video-feature',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_video_feature_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_video_feature_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideoFeatureComponent);



/***/ }),

/***/ 70921:
/*!**********************************************!*\
  !*** ./src/modules/landings/guards/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guards": function() { return /* binding */ guards; },
/* harmony export */   "LandingsGuard": function() { return /* reexport safe */ _landings_guard__WEBPACK_IMPORTED_MODULE_0__.LandingsGuard; }
/* harmony export */ });
/* harmony import */ var _landings_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landings.guard */ 86437);

const guards = [_landings_guard__WEBPACK_IMPORTED_MODULE_0__.LandingsGuard];



/***/ }),

/***/ 86437:
/*!*******************************************************!*\
  !*** ./src/modules/landings/guards/landings.guard.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingsGuard": function() { return /* binding */ LandingsGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41964);



let LandingsGuard = class LandingsGuard {
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
    }
};
LandingsGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], LandingsGuard);



/***/ }),

/***/ 30913:
/*!*********************************************************!*\
  !*** ./src/modules/landings/landings-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; },
/* harmony export */   "LandingsRoutingModule": function() { return /* binding */ LandingsRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _landings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landings.module */ 45566);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 60543);

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        data: {
            title: 'Accueil - Portfolio',
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
    },
    {
        path: 'landings',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'multipurpose',
            },
            {
                path: 'mobile-app',
                data: {
                    title: 'Mobile App - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.MobileAppComponent,
            },
            {
                path: 'desktop-app',
                data: {
                    title: 'Desktop App - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.DesktopAppComponent,
            },
            {
                path: 'multipurpose',
                data: {
                    title: 'Multipurpose - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.MultiPurposeComponent,
            },
            {
                path: 'agency',
                data: {
                    title: 'Agency - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.AgencyComponent,
            },
            {
                path: 'press',
                data: {
                    title: 'Press - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.PressComponent,
            },
            {
                path: 'directory',
                data: {
                    title: 'Directory - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.DirectoryComponent,
            },
            {
                path: 'rental',
                data: {
                    title: 'Rental - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.RentalComponent,
            },
            {
                path: 'real-estate',
                data: {
                    title: 'Real Estate - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.RealEstateComponent,
            },
            {
                path: 'classifieds',
                data: {
                    title: 'Classifieds - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.ClassifiedsComponent,
            },
            {
                path: 'lead-capture',
                data: {
                    title: 'Lead Capture - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.LeadCaptureComponent,
            },
            {
                path: 'video-feature',
                data: {
                    title: 'Video Feature - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.VideoFeatureComponent,
            },
            {
                path: 'resume',
                data: {
                    title: 'Resume - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent,
            },
            {
                path: 'portfolio',
                data: {
                    title: 'Portfolio - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
            },
            {
                path: 'basic',
                data: {
                    title: 'Basic - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.BasicComponent,
            },
            {
                path: 'basic-signup',
                data: {
                    title: 'Basic (Signup) - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.BasicSignupComponent,
            },
            {
                path: 'graphic',
                data: {
                    title: 'Graphic - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.GraphicComponent,
            },
            {
                path: 'graphic-signup',
                data: {
                    title: 'Graphic (Signup) - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.GraphicSignupComponent,
            },
            {
                path: 'inner-page',
                data: {
                    title: 'Inner Page - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.InnerPageComponent,
            },
            {
                path: 'nav-only',
                data: {
                    title: 'Nav Only - SB UI Kit Pro Angular',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_1__.NavOnlyComponent,
            },
        ],
    },
];
let LandingsRoutingModule = class LandingsRoutingModule {
};
LandingsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_landings_module__WEBPACK_IMPORTED_MODULE_0__.LandingsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], LandingsRoutingModule);



/***/ }),

/***/ 45566:
/*!*************************************************!*\
  !*** ./src/modules/landings/landings.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingsModule": function() { return /* binding */ LandingsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/app-common.module */ 13939);
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/navigation/navigation.module */ 13276);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ 84789);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ 60543);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ 70921);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ 55897);

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let LandingsModule = class LandingsModule {
};
LandingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule,
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__.NavigationModule,
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_5__.services, ..._guards__WEBPACK_IMPORTED_MODULE_4__.guards],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_3__.containers, ..._components__WEBPACK_IMPORTED_MODULE_2__.components],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_3__.containers, ..._components__WEBPACK_IMPORTED_MODULE_2__.components],
    })
], LandingsModule);



/***/ }),

/***/ 55897:
/*!************************************************!*\
  !*** ./src/modules/landings/services/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services": function() { return /* binding */ services; },
/* harmony export */   "LandingsService": function() { return /* reexport safe */ _landings_service__WEBPACK_IMPORTED_MODULE_0__.LandingsService; }
/* harmony export */ });
/* harmony import */ var _landings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landings.service */ 3175);

const services = [_landings_service__WEBPACK_IMPORTED_MODULE_0__.LandingsService];



/***/ }),

/***/ 3175:
/*!***********************************************************!*\
  !*** ./src/modules/landings/services/landings.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingsService": function() { return /* binding */ LandingsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41964);



let LandingsService = class LandingsService {
    constructor() {
    }
    getLandings$() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
    }
};
LandingsService.ctorParameters = () => [];
LandingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], LandingsService);



/***/ }),

/***/ 83816:
/*!**********************************************************************!*\
  !*** ./src/modules/landings/containers/agency/agency.component.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuY3kuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4695:
/*!**********************************************************************************!*\
  !*** ./src/modules/landings/containers/basic-signup/basic-signup.component.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 48654:
/*!********************************************************************!*\
  !*** ./src/modules/landings/containers/basic/basic.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 65574:
/*!********************************************************************************!*\
  !*** ./src/modules/landings/containers/classifieds/classifieds.component.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzc2lmaWVkcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 51913:
/*!********************************************************************************!*\
  !*** ./src/modules/landings/containers/desktop-app/desktop-app.component.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNrdG9wLWFwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 82577:
/*!****************************************************************************!*\
  !*** ./src/modules/landings/containers/directory/directory.component.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1205:
/*!**************************************************************************************!*\
  !*** ./src/modules/landings/containers/graphic-signup/graphic-signup.component.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 43696:
/*!************************************************************************!*\
  !*** ./src/modules/landings/containers/graphic/graphic.component.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 87814:
/*!******************************************************************!*\
  !*** ./src/modules/landings/containers/home/home.component.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 34842:
/*!******************************************************************************!*\
  !*** ./src/modules/landings/containers/inner-page/inner-page.component.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbm5lci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 9390:
/*!**************************************************************************!*\
  !*** ./src/modules/landings/containers/landings/landings.component.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 84323:
/*!**********************************************************************************!*\
  !*** ./src/modules/landings/containers/lead-capture/lead-capture.component.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkLWNhcHR1cmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 85131:
/*!******************************************************************************!*\
  !*** ./src/modules/landings/containers/mobile-app/mobile-app.component.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 91009:
/*!************************************************************************************!*\
  !*** ./src/modules/landings/containers/multi-purpose/multi-purpose.component.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aS1wdXJwb3NlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 65873:
/*!**************************************************************************!*\
  !*** ./src/modules/landings/containers/nav-only/nav-only.component.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtb25seS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 22673:
/*!****************************************************************************!*\
  !*** ./src/modules/landings/containers/portfolio/portfolio.component.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 69019:
/*!********************************************************************!*\
  !*** ./src/modules/landings/containers/press/press.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 32844:
/*!********************************************************************************!*\
  !*** ./src/modules/landings/containers/real-estate/real-estate.component.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFsLWVzdGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 90580:
/*!**********************************************************************!*\
  !*** ./src/modules/landings/containers/rental/rental.component.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW50YWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 75302:
/*!**********************************************************************!*\
  !*** ./src/modules/landings/containers/resume/resume.component.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 13696:
/*!************************************************************************************!*\
  !*** ./src/modules/landings/containers/video-feature/video-feature.component.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1mZWF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 67633:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/agency/agency.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-black footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-80 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\" backgroundImage='url(\"https://source.unsplash.com/faEfWCdOKIg/1500x900\")'\n        ><div class=\"page-header-ui-content py-5\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <div data-aos=\"fade-up\">\n                            <h1 class=\"page-header-ui-title\">We are a branding and design studio</h1>\n                            <p class=\"page-header-ui-text\">We are a group of creatives and developers who design, build, and optimize brands and digital experiences.</p>\n                        </div>\n                        <button class=\"btn btn-primary fw-500\" data-aos=\"fade-up\" data-aos-delay=\"100\">Learn More</button>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"droplet\"></i-feather></div>\n                    <h2>Design</h2>\n                    <p class=\"mb-0\">We start by creating a set of brand guidelines and standards</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h2>Develop</h2>\n                    <p class=\"mb-0\">Our award winning development team creates personalized digital experiences</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"truck\"></i-feather></div>\n                    <h2>Deliver</h2>\n                    <p class=\"mb-0\">Our products are created on time, and to your exact specifications</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 brands text-gray-500 align-items-center mb-5\">\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500.01 816.05\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>google</title>\n                        <path d=\"M307.89.07h22.23c77.18,1.68,153.1,32.72,207.63,87.67-20.13,20.55-40.69,40.27-60.4,60.82-30.62-27.68-67.53-49.08-107.8-56.63C310,79.35,245.81,90.68,195.89,124.65c-54.53,35.66-91.44,96.06-99.41,160.66-8.81,63.76,9.22,130.87,50.75,180.37,39.85,48.23,100.67,78.44,163.59,80.53,58.73,3.36,120-14.68,162.75-55.79,33.56-28.94,49.08-73,54.11-115.77-69.63,0-139.26.42-208.89,0V288.24H612c15.1,92.7-6.71,197.15-77.18,263.43-47,47-112,74.66-178.28,80.11-64.17,6.3-130.45-5.87-187.5-36.91C100.67,558.38,46.14,496.72,19.3,424.15-5.87,357.45-6.29,282,17.2,214.84,38.59,153.6,79.7,99.48,132.55,61.73,183.31,24.4,245,3.85,307.89.07Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1989.93,21.88h89.77v599c-29.78,0-60,.42-89.77-.42.42-199.25,0-398.91,0-598.58Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M811.66,229.52C867,219,927,230.78,972.73,263.91c41.53,29.37,70.47,75.51,79.28,125.84,11.33,58.31-2.93,122.07-40.68,168.21-40.69,51.59-107.39,79.28-172.4,75.08-59.57-3.35-117.45-33.14-152.69-81.79-39.85-53.69-49.5-127.52-27.68-190.44,21.81-67.53,83.47-119.13,153.1-131.29m12.58,79.7a112.72,112.72,0,0,0-58.72,37.33c-40.69,48.66-38.17,127.93,6.71,173.24,25.59,26,64.18,38.17,99.83,31,33.14-5.88,62.08-28.11,78-57.47,27.69-49.92,19.72-118.71-22.65-157.72-27.26-25.17-67.11-35.65-103.19-26.42Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1256.29,229.52c63.34-12.17,132.55,5.45,180,49.91,77.18,69.22,85.57,198.83,19.72,278.53-39.85,50.33-104.45,78-168.21,75.08-60.82-1.68-120.8-31.88-156.88-81.79-40.69-54.95-49.49-130.46-26.42-194.63,23.07-65.44,83.47-115.36,151.84-127.1m12.59,79.7a114.63,114.63,0,0,0-58.73,36.91c-40.27,47.82-38.59,125.84,4.62,171.56,25.58,27.26,65.43,40.69,102.34,33.14,32.72-6.29,62.08-28.11,78-57.47,27.27-50.33,19.3-119.13-23.49-158.14-27.26-25.16-67.11-35.23-102.76-26Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1633.39,253.85c48.24-30.2,112.42-38.59,164.43-12.59,16.36,7.13,29.78,19.3,42.78,31.46.42-11.32,0-23.07.42-34.81,28.11.42,56.21,0,84.74.42v370c-.42,55.79-14.69,114.94-55,155.62-44,44.89-111.58,58.73-172.4,49.5-65-9.65-121.65-57-146.82-117,25.17-12.16,51.6-21.81,77.6-33.14,14.69,34.4,44.47,63.76,81.8,70.47s80.54-2.51,104.87-33.55c26-31.88,26-75.51,24.74-114.52-19.29,18.88-41.52,35.66-68.37,42-58.3,16.36-122.48-3.78-167.36-43.21-45.31-39.43-72.15-100.25-69.64-160.65,1.26-68.37,39.85-134.23,98.16-169.88m86.83,53.69c-25.59,4.19-49.5,18.46-65.86,38.17-39.43,47-39.43,122.06.42,168.2,22.65,27.27,59.15,42.37,94.38,38.6,33.14-3.36,63.76-24.33,80.12-53.28,27.68-49.07,23.07-115.77-14.26-158.55-23.07-26.43-60-39.43-94.8-33.14Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M2187.5,275.24c50.34-47,127.94-62.92,192.53-38.17,61.25,23.07,100.26,81.37,120,141.36-91,37.75-181.63,75.08-272.65,112.83,12.58,23.91,31.88,45.72,57.88,54.53,36.5,13,80.12,8.39,110.74-15.94,12.17-9.22,21.82-21.39,31-33.13,23.07,15.52,46.14,30.62,69.21,46.14-32.71,49.07-87.66,83.47-146.81,88.92-65.43,8-135.06-17.19-177.43-68.37-69.63-80.54-62.92-215.6,15.52-288.17m44.88,77.6c-14.26,20.55-20.13,45.72-19.71,70.47q91.23-37.76,182.46-75.92c-10.06-23.49-34.39-37.75-59.14-41.53C2296.14,298.73,2254.61,320.12,2232.38,352.84Z\" transform=\"translate(0.01 -0.07)\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.17 585\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>product-hunt</title>\n                        <g id=\"Page-1\">\n                            <g id=\"product-hunt-logo-horizontal-orange\">\n                                <path d=\"M585.54,292.5C585.54,454.11,454.64,585,293,585S.54,454.11.54,292.5,131.43,0,293,0s292.5,130.89,292.5,292.5m-253.5,0H249.16V204.75H332a43.88,43.88,0,0,1,0,87.75m0-146.25H190.66v292.5h58.5V351H332a102.38,102.38,0,0,0,0-204.75\" transform=\"translate(-0.54)\" />\n                                <path d=\"M892.91,256.67c0-16.09-12.43-25.84-28.52-25.84H821.24v51.43h43.15C880.48,282.26,892.91,272.51,892.91,256.67ZM780.54,390V195h89.7c41.68,0,64.35,28,64.35,61.67,0,33.39-22.91,61.42-64.35,61.42H821.49V390Z\" id=\"Fill-5\" transform=\"translate(-0.54)\" />\n                                <path d=\"M959.21,390V247.89h36.56v18.77c10-11.94,27.06-22.18,44.36-22.18v35.59a55.68,55.68,0,0,0-10-.73c-12.19,0-28.28,6.82-34.13,15.84v95.06h-36.8Z\" id=\"Fill-7\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1162.74,317.12c0-21.45-12.68-40.22-35.59-40.22-22.67,0-35.34,18.77-35.34,40.22,0,21.94,12.67,40.46,35.34,40.46,22.91,0,35.59-18.77,35.59-40.46m-109,0c0-39.24,27.55-72.64,73.13-72.64,46.07,0,73.61,33.4,73.61,72.64S1173,390,1126.91,390c-45.58,0-73.13-33.64-73.13-72.88\" id=\"Fill-9\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1323.37,341.74v-49c-6.09-9.26-19.26-15.84-31.2-15.84-21,0-35.34,16.33-35.34,40.22,0,24.13,14.38,40.46,35.34,40.46,11.94,0,25.11-6.58,31.2-15.84Zm0,48.26V368.79c-11,13.9-25.84,21.21-42.9,21.21-34.86,0-61.43-26.33-61.43-72.88,0-45.09,26.09-72.64,61.43-72.64a52.84,52.84,0,0,1,42.9,21.21V195h36.81V390Z\" id=\"Fill-11\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1489.85,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-13\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1553.71,317.12c0-42.41,31-72.64,73.62-72.64,28.51,0,45.58,12.43,54.84,25.11L1658.28,292c-6.58-9.75-16.57-14.87-29.25-14.87-22.18,0-37.54,16.09-37.54,40.22s15.6,40.47,37.54,40.47a34.8,34.8,0,0,0,29.25-15.12l23.89,22.43c-9.26,12.67-26.33,25.35-54.84,25.35-42.66-.49-73.62-30.71-73.62-73.37\" id=\"Fill-15\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1713.61,351.73V279.58H1690.7V247.65h22.91V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-17\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2011.72,390V305.91h-90.43V390h-40.71V195h40.71v75.32h90.43V195h41.19V390Z\" id=\"Fill-19\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2183.32,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-21\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2349.56,390V302.74c0-19.26-10-25.84-25.6-25.84-14.38,0-25.35,8-31.68,16.09v97h-36.57V247.89h36.57v17.8c9-10.24,26.08-21.21,48.5-21.21,30.71,0,45.34,17.31,45.34,44.12V390Z\" id=\"Fill-23\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2430,351.73V279.58h-22.91V247.65H2430V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-25\" transform=\"translate(-0.54)\" />\n                            </g>\n                        </g>\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 1701.12 416.6\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>mailchimp</title>\n                        <path\n                            d=\"M477.52,202.2Zm1143.4,103.7h.6c34.4,0,58.7-23.9,58.9-58,.1-16.9-4.8-32.4-13.8-43.6-9.5-11.8-22.8-18.1-38.5-18.3h-.3c-21.2,0-40.8,16.1-60.1,49.1l-1.5,2.6-1-2.9c-4.9-14.2-9.2-26-11.8-33-1.8-4.9-2.6-7.1-2.8-7.9-.9-3.6-4-5.8-8-5.8a14.14,14.14,0,0,0-7.6,2.4,8.84,8.84,0,0,0-4.3,6l-.1.4c-19.3,60.2-35.2,89.4-48.7,89.4a5.94,5.94,0,0,1-4.6-1.9c-3.5-3.9-2.7-13.2-1.5-26,.9-9.4,1.9-20.1,1.5-31.4-.8-21.8-12.7-34.9-31.9-35-24.4,0-40.1,25.9-47.4,41.4l-2.2,4.6-.5-5.1c-1.8-19.1-8.2-42-28.5-42.1-23.7,0-41.7,27.7-52.7,51l-2.9,6.2.3-6.9c1.3-31.1,2.4-49.4,3.2-54.5s.4-8.5-1.3-10.5c-1.6-1.8-4.6-2.5-8.9-2.2-7.6.5-11.4,5.1-17.3,20.5-9.6,25.4-33.9,84.4-53.4,84.4a11.58,11.58,0,0,1-9.2-3.9c-8.2-9.3-4.9-34.6-.4-69.6l.3-2.6c2.1-16.6-1.5-20.1-10.5-21.7a12.41,12.41,0,0,0-2.7-.3c-7.2,0-10.5,6.9-17.2,26-11.9,34-27.3,69.8-45.2,69.8a13.55,13.55,0,0,1-2-.2c-9.5-1.6-9.3-15.7-9-33.6.1-9.7.3-20.6-1.2-30.5-2.7-17.8-13.1-28.8-27.3-29-28.3,0-47.3,36.2-56.2,57.8l-2,4.9-.7-5.2c-1.7-13.9-2.9-27.8-3.4-41.7v-.5l.3-.4c52.9-66.6,76.6-114.7,77-155.8C1124.62,16,1112.52.2,1092,0c-15,0-50.7,12.5-63.1,128.3a649.91,649.91,0,0,0-3.7,65.4v.4l-.2.3c-24.2,35-75.9,95.3-126.4,95.3-45.7,0-82.2-37-82.2-102.2,0-87.5,61.9-141.2,108.5-141.2h.4c10.1.1,18.8,2.9,25.1,8.2a27.68,27.68,0,0,1,9.9,22.2c-.1,12.1-4,18.3-7.8,24.3-1,1.5-1.9,3.1-2.8,4.7s-1.7,4-.5,6.1,4.4,3.4,8.2,3.4c11.1,0,27.9-16.1,28-40.2.2-25.3-21.1-51.4-59.2-51.4C868.62,23.6,791,86.9,791,189.4c0,72.5,45.5,122.7,107.1,122.7,43.7,0,87-31.3,125.2-83.6l2.3-3.2.2,3.9c.8,19.1,2.2,34.2,3.2,45.2.7,7.1,1.1,12.2,1.1,15-.1,6.2,1,10.5,3.1,13.1s5.5,3.9,10.6,3.9c8.6,0,10.3-5.9,13.7-20.3l1-4.1c4.2-17.5,19.9-74.7,43.4-74.7a11.82,11.82,0,0,1,8.9,3.4c5.2,5.5,4.6,16.8,4,29.9-.4,8.2-.8,16.6,0,24.8,2.2,22.2,11.8,33,29.3,33.2,18,0,36.7-19.3,46.6-37.3l1.9-3.4.7,3.8c1.8,9.6,10,41.2,35.6,41.2,23.2,0,43.1-24.4,64.8-74.6l2.9-6.6-.2,7.2c-.5,19-1.5,42.3-1.5,60.2,0,13.9,1.4,19.2,7.8,19.2l1.5.1c6.2,0,10.3-3.7,12.4-11,16.4-57.2,30.6-83.8,44.6-83.8,13.7.1,15,25.2,16.1,69.7l.1,3.1c.3,15.5.9,22.4,10.5,22.5,7.3,0,9.1-5.8,12.9-19.9.7-2.7,1.5-5.7,2.4-8.9,13.2-45.9,24.2-64.7,37.9-64.7,11.7.1,12.3,12.1,12.6,16.1.5,8.5-.4,17.4-1.3,26-.8,8-1.6,16.2-1.3,23.9.7,18,10.6,27.9,27.7,28.1,22.3,0,42.3-26,59.9-77.4l1.2-3.6,1.4,3.5c3.2,8.1,7.4,19,11.2,32l.1.5-.2.5c-17,37.8-29.1,80-29.2,102.5-.2,29.7,13.2,48.9,34.2,49.1h.4c11.4,0,38-4.6,38.6-47,.2-17.4-3.9-42-12.2-73.1l-1-3.6,3.1,2a62.44,62.44,0,0,0,34.6,11ZM1047.22,162c.5-10.6,1.4-21,2.6-30.8,8.2-63.1,25.4-107.1,41.8-107.1h.1c7.8.1,11.7,6,11.6,17.6-.2,28.5-18.3,69.3-53.6,121.2l-2.8,4.1.3-5ZM1570,388.8a12.66,12.66,0,0,1-10.8,5.2c-5.2,0-9.2-1.9-11.8-5.4-7.5-10-5.4-33.5,6.8-76.1,1.5-5.1,3-10.2,4.7-15.2l1.4-4.3,1.2,4.3C1575.82,346.5,1578.72,377.3,1570,388.8Zm4.5-126.1-.3-.5-.5-1.6.2-.5c16.2-33.4,34.8-52.6,51-52.6h.2c18.3.1,30.9,16.6,30.7,39.9-.1,15.6-7,24.6-12.7,29.4a37.84,37.84,0,0,1-23.9,8.6c-21.5-.1-36.2-12.4-44.7-22.7Zm50.4-53.8ZM540.12,300.4c25-2,44.9-36,52.3-50.6l1.9-3.8.7,4.1c3.5,20.5,14.7,54.8,49.5,55.1h.3c15.1,0,32.1-9.2,49.4-26.6l1.3-1.3.9,1.5c11.6,19.4,27.2,29.8,43.8,28.9,24.4-1.3,39.3-18.6,40.6-30.6a10.36,10.36,0,0,0-2.2-7.9c-2.2-2.5-5.4-2.7-7.7-.5l-1.1,1.1c-5.7,5.5-16.3,15.6-27.8,16.2-14.1.7-24.6-7.8-31.4-25.2l-.3-.7.5-.6C749.72,208.6,777,131,774.32,79c-1.2-24.1-8.2-52.8-34.6-52.8h-2c-10.1.5-19.2,5.3-27.2,14.3-24.4,27.3-37.2,94.5-32.5,171.3a175,175,0,0,0,8.2,44.3l.3.8-.5.6c-14.4,16.9-28.7,26.1-40.1,26.1-27.5,0-26.6-46.1-24.4-84.3.5-8.2,1.2-13.5-1.3-16.5-1.7-2.1-4.7-3.2-8.9-3.2h-.5c-9.8,0-11.8,2-16.8,16.5-10.4,30.2-31,80.8-51.6,80.8-5.7-.1-10.1-2-13.1-5.8-10-12.8-2.4-44.7,3.7-70.4,1.1-4.6,2.2-9,3.1-13.1q1.95-9.15-1.2-13.2c-2.2-2.7-6.5-3.8-12.1-3.3-8.9.7-14.5,4.4-17.3,21.3l-.6,3.5-2.1-2.5c-3.9-5.7-11.4-12.5-25.4-12.5-1.2,0-2.5.1-3.8.2-14.9,1.2-31.9,11.6-44.4,27.2a90.7,90.7,0,0,0-19.5,64.6c.1,1.2.3,2.4.5,3.6l.1.7-.5.5c-8.7,9.5-17.5,14.3-26.3,14.3-13.5-.1-21.3-10.2-21.3-26.9,0-28.2,19.1-113.3,19.1-144.1,0-32.8-14.6-50.6-40-50.8h-.4c-37,0-65.9,42-93.5,128.5-2.6,8.3-5.2,16.6-7.6,25l-3.9,13,1.1-13.5q3.75-43.5,5.2-87.1c1.4-41.8-4.3-68.7-17.3-82.2-7-7.3-16.3-10.9-28.4-11h-.3c-45.3,0-67,76.4-82.9,130.4-4.8,16.3-14.2,53-20.5,78.1l3.7-6c2.8-31.6,10.9-110.8,10.3-153.8-.6-46.1-15.9-66.8-49.8-67h-.4c-18.1,0-30.6,9-38,16.5C6.92,52.8-.38,70.5,0,85.8c.2,9.3,5.9,17.5,10.3,17.5,2.8,0,4.4-3.8,5-6,10.5-34.6,24-51.5,41.4-51.5,7.2.1,12.6,2.2,16.6,6.5,13.6,14.6,11.1,53.9,6.6,125.4-1.4,23-3.1,49.1-4.5,78.8q-.3,7.35-.9,14.7c-1.3,20.6-2.4,36.9,5.4,38.1,10.2,1.6,16.8-2.5,20.2-12.6,5-14.9,16.3-55.8,38.1-130.4,20.9-71.6,36.7-97.7,57-97.7,23.4,0,25.1,40.1,20.8,124.8-.9,17.9-2.1,38.3-3.1,60.4-.1,3.1-.3,6.1-.4,9-.9,18.3-1.6,32.8,3.6,38.3a9,9,0,0,0,6.8,2.6c10.1,0,13.2-8.9,18.2-23.6.9-2.6,1.8-5.4,2.9-8.3,34.7-95.7,60.4-178.8,94.8-178.8,10.3,0,18.4,8.4,18.4,24.8,0,37.8-18.5,110.8-18.5,147.8,0,13.3,3.8,25.2,11,33.5,7.4,8.6,17.8,13.2,29.9,13.3h.3c11.5,0,23.5-5.6,35.7-16.6l1.1-1,.9,1.2c8,10.8,20.9,16.6,34.9,15.5,21.4-1.7,39.4-20.7,46.1-38.7l1.3-3.5,1.3,3.5c5.2,13.4,16,29.5,38.9,27.6ZM737.42,50.2h.4a8,8,0,0,1,6.4,3.6c8.5,11.5,8.6,53.4-6,101.2-8.4,27.3-19.6,53-32.5,74.5l-2.1,3.4-.5-4c-1.5-11.5-2.3-23.6-2.8-33.8-3.7-72,18.1-143.9,37.1-144.9ZM499.92,218.8c-7.5,30.1-21.9,66.5-47.8,68.6l-2.1.1c-10.7,0-16.8-7-17.9-20.9-1.4-17.4,6.1-37.7,19.1-51.8,8.3-9,17.6-13.9,26.3-13.9h.2c11,.1,18.6,8.9,22.2,17.1l.2.4-.2.4ZM620,108.3a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4A17.12,17.12,0,0,0,637,125.3c.2-9.3-7.5-16.9-17-17Zm601.2,0a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4a17.05,17.05,0,0,0,17.2-16.8c.2-9.3-7.5-16.9-17-17Z\"\n                        />\n                        <path d=\"M1689.42,286.8a11.75,11.75,0,1,0,11.7,11.8A11.74,11.74,0,0,0,1689.42,286.8Zm0,21.8a10,10,0,1,1,10-10A10,10,0,0,1,1689.42,308.6Zm5.2-13.1c0-2.4-1.2-3.8-4.3-3.8h-5.2v13.5h1.7v-5.9h2.4l4,5.9h1.9l-4-5.9C1693.12,299,1694.62,298,1694.62,295.5Zm-5.5,2.3h-2.2v-4.6h3c1.5,0,3,.5,3,2.2C1692.92,297.7,1690.92,297.8,1689.12,297.8Z\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-sm-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500 705.92\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>instagram</title>\n                        <path\n                            d=\"M143.25,0c-22.87,0-52.51,24.24-70,40.38C34.82,74.55,0,137.29,0,187.65c0,71.56,60.86,98.57,76.25,98.57,5.08,0,9.4-2.62,9.4-9.51,0-5.39-3.42-9.89-6.83-14.5C64.73,240.66,60.2,220.1,60.2,192.37,60.2,134.54,86.87,81.54,109,57.28c4.08-4.39,13.3-13.87,16.06-13.87s3.41,2.23,3.41,9.12L125.89,431c0,59.17-17.07,82.67-17.07,96.61,0,6.12,2.65,7.71,7.71,7.71,24,0,47.84-29.21,54.6-39.86,21-36.23,26.12-64.51,26.12-146.09v-318c0-8.61-2.41-12.33-10.59-17.64C174.7,6.11,161,0,143.25,0Zm685,1.06C817,1.1,812.2,7,811.67,25.22l-2.5,75.47-66-2.29c-4-.1-5.81,1.17-7.56,4.69C730,113.6,727,121.83,727,135.55c0,11.16,5.06,12.35,9.58,12.35l68.68,2-.21,144.19c0,30.59-19.3,70.26-53.55,103.26a77.33,77.33,0,0,0,2.78-20.42c0-29.58-19-56.4-44.43-75.37l-62-46.61c13-15,35-44.83,35-70,0-19.51-12.27-27.7-35.14-27.7-32.27,0-69.7,29.55-69.7,73.4,0,16,7.11,30.36,17.91,41.36-14.92,28.32-36,65.57-51.71,92.1-11.84,20.31-31.87,51.43-43.73,51.43-8.74,0-12.77-13.75-12.77-66.57,0-43.89,3.11-91.6,4.68-137.4,0-10.5-1.72-20.19-15.35-29.68-12.54-8-28-19.25-44-19.25-35.46,0-59.61,32.62-76.18,64.53-17.15,33.06-26.42,60.92-39.5,101.35l1.44-139.13c.45-9.92-2.06-13.77-10-17.15-10.3-4.36-25.46-9.4-38.9-9.4-11.24,0-12.61,4.85-12.61,16.65L255.9,346.42l-.17,64.39c0,58.05,7.27,67.73,41.72,67.73,19.07,0,25.18-2.24,25.55-18.09.53-10.49,5.54-35.89,12.33-61.37,19.84-75.19,43.35-134.67,83.89-180,4.22-4.4,7.49-2.82,6.83,3.42,0,0-6.41,101.76-6.41,143.38,0,74,11.39,112.66,48.22,112.66,36.15,0,71.66-46.45,91-77.8l62.18-104c40.28,34.33,68.4,60.95,68.4,93.33,0,20.12-12.7,39.81-32,39.81-24.17,0-39.62-25.49-55.94-25.49-13.55,0-31,26.16-31,41,0,14,30.61,33.86,85.52,33.86,81.06,0,124.54-55.63,150.63-117.23,5,73.12,34.13,115.82,79.57,115.82,29.8,0,64.24-37.65,79.91-83.64,0,0,1.55,11.94,13.45,36.4,16.38,31.94,41.28,46.61,72.21,46.61,38.46,0,71.37-23.32,91.45-62.45,3,29.65,28,62.31,68,62.31,25.14,0,48-19.26,63.09-51,0,0,19.48,52.39,75.83,52.39,31.65,0,69.13-29.32,78.08-50.63l1,31L1345.65,536c-24.27,23.57-50.1,57.43-50.1,94.92,0,47.67,45,75.09,84.63,75.09,41.18,0,68.5-26.09,83.47-48,18.84-28.28,26.79-81.6,26.79-133.71l-1.86-78.36C1544.93,384,1589,298.39,1608.66,237.81l42.77-1.12c8.29-.56,7.88,2.7,6.73,7.53-7.52,31.77-14.08,67.75-14.08,103.57,0,59.2,13.63,84.95,33.23,106,17,17.64,34,23.59,51.82,23.59,34.88,0,56.77-28.8,63.72-47,16.38,31.94,40.51,46.82,71.43,46.82,38.47,0,71.37-23.32,91.46-62.45,3,29.65,27.94,62.31,68,62.31,29.91,0,47.26-17.26,60.91-49.78.27,10.46.67,21.61,1,32.06.36,5.41,4.69,8.84,8.56,10.25,12.71,4.81,23.87,7.22,33.9,7.22,26.15,0,31.82-5.37,31.82-22.46,0-28.2.83-72.74,8.84-108.5,8.5-35.61,21.34-75.91,39-104,1.6-2.9,5.51-2.14,5.68,1.37,2.54,60,6.55,161.59,22.32,187.89,7.77,12.54,19.8,21.68,37.8,21.68,8.44,0,18.79-3.59,21.44-5.84,2.68-2.09,4-4.42,3.87-8.73,0-76.71,23.92-151,47.88-200.91.66-1.48,2.53-1.6,2.46.35L2347.89,293c0,90.78,6.54,148.13,51.89,175.7a59.36,59.36,0,0,0,29.18,7.57,60.85,60.85,0,0,0,54.64-33.8c8.47-16.19,16.4-47.36,16.4-65,0-6.83.08-18-11.12-18-6.14,0-9.83,4.52-11.3,11.37-3.57,14.83-6.5,27.54-12,42.21-5.29,14-13.19,22.14-22.56,22.14-11,0-16.59-8.66-19.79-14-14-21.42-15.17-70.63-15.17-111.7l3.38-105.72c0-8.75-3.65-19.22-17.14-26.94-9.06-5.21-32-15-46-15-13,0-19.32,7.37-24,18.2-8.81,19.44-38.25,95.69-46.15,157.68-.28,1.63-2.32,2-2.46-.11-4.1-43.84-6.21-96.66-6.16-132.29,0-10.77-2.64-26.18-25.49-36.16-11.11-4.6-20.29-7.42-31.51-7.42-13.92,0-16.92,6.81-21.9,15.84-15.77,29.13-26.67,67.12-43,115l.25-109.66c0-5.13-3.14-11.85-12.15-13.66-22.32-5.13-32.66-7.46-41.46-7.46-6.41,0-9.93,5.1-9.93,10.63l-1.2,187c-4.32,22.89-21.82,77.52-46.65,77.52-20.38,0-29.89-20.65-29.89-107l3.7-140.25c0-8.86-5.81-12.58-14.29-16.34-12.12-4.81-21.76-6.72-34.08-6.72-15.46,0-20.76,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-105.68,72.49-105.68,177.82-.59,29.54,6.55,58.9,6.55,58.9-5.46,24.51-18.27,44.49-36,44.49-22.34,0-36.58-31.58-36.58-86.32,0-54.9,20.91-116.82,20.91-133.6,0-19.51-12.78-31.86-35.41-31.86-11.34,0-53.39,9.54-75,12.67,0,0,2.43-10.26,2.25-18.34,0-19.24-9-31.29-31.44-31.29-27.38,0-47.49,19.55-47.49,52.91,0,15,8.62,28.82,20,36.26-14.81,61.78-38.89,107.73-74.38,159.06L1491,189c0-6.76-1.8-11-15-16.09a83.33,83.33,0,0,0-32.77-6.52c-20.84,0-19.46,14.88-18.34,26-9.54-16.9-30.4-37-62.6-37-87.73,0-114.67,133.79-101.46,228.8,0,11.58-11.31,52.7-36.86,52.7-20.38,0-29.88-20.65-29.88-107l3.73-140.25c0-8.87-5.86-12.59-14.33-16.34-12.12-4.81-21.73-6.72-34-6.72-15.46,0-20.77,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-106.29,66.29-106.29,171.62,0,40.21-34.62,101.57-58.89,101.57-13.49,0-27.85-24.76-27.85-88,.07-43.11,5.95-189.89,5.95-189.89l84.74-1.37c4,0,6.38-4.46,7.88-7.18,3.89-7.9,5.77-13.15,5.77-22.6,0-8.53-1.7-11.64-12.63-12.25L882,103l3.59-78.68c.26-5-2.74-8.21-8.16-10.63C861,7.28,841,1.1,828.29,1.1Zm256.46,206.15c22.59,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.92-127.44,56.33-127.44Zm813.64,0c22.6,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.93-127.44,56.33-127.44Zm-516.06.43c29.49,0,42.53,30.39,42.53,89.31,0,88.83-26.4,139.4-58.47,139.4-20.48,0-44-33.61-42.78-99.73,0-42.27,13.79-129,58.72-129Zm49.92,297.16v35c0,116.1-30.94,135.92-55.8,135.92-9.42,0-32.49-7.11-32.49-35.84,0-40.15,42-85.83,55-99.94l33.26-35.13Z\"\n                            transform=\"translate(0 -0.04)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2498.04 632\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>pinterest</title>\n                        <path\n                            d=\"M574.55,222.78c27.1,0,53.11-22.57,57.63-50.41,5.35-27.1-13-49.66-40.11-49.66s-53.1,22.56-57.7,49.66C529.09,200.21,546.71,222.78,574.55,222.78ZM2414,303.32h60.64c8.31,0,13.17-3.37,15.05-11.13q4.35-18,8.95-36c1.79-7-2.27-12.27-10-12.27h-59.83c4.31-17.14,21.09-72.81,21.09-109.11C2449.85,62.36,2388.3.7,2301,.7c-98.63,0-162.8,66.19-162.8,159.33,0,27.17,10.14,58.83,22.7,78.48q-8.11-.47-16.24-.46c-74.94,0-122.15,40.65-122.15,99.81,0,55.52,43.77,77.09,85,91.45,36.61,12.75,70.31,18.69,70.31,47.28,0,19.28-18.54,30.6-54.84,30.6-43.06,0-66.73-20.28-72.75-28,4.08-3.2,10.15-10.83,10.15-23.55,0-17.79-12.49-32.31-35.7-32.31-19.63,0-36.23,16-40.4,37.08-31.54,25.8-66,42.52-114.78,42.52-48.06,0-73-25-73-78.2,11.27,3.43,40.61,7.55,60,7.55,81.39,0,136.86-37,136.86-111,0-39.83-35-81.65-104.12-81.65H1889c-91,0-141.92,57.62-164.17,121q-9.35-2.25-18.73-4.37a144.59,144.59,0,0,0,8.55-48.41c0-31.3-19.38-68.22-71.26-68.22-36.13,0-70.41,23.67-94.16,59.14,5.91-23.14,9.83-38.55,10.08-39.58,1.55-6.05-1-12.79-10.41-12.79h-53.24c-7.59,0-12.94,2.68-15.1,11.32-1.45,5.76-19.74,77.53-37.55,147.42-11.21,43.58-69.24,97.82-142.17,97.82-48.08,0-73-26.64-73-79.86,12.58,5,40.61,9.21,60,9.21,84.7,0,136.86-37,136.86-111,0-39.82-35-81.64-104.13-81.64h-.15c-102.43,0-165.18,79.56-175.81,169.77-4.42,37.5-36.07,89-70.38,89-16.72,0-26-10.5-26-28.32,0-15.4,10.84-53,22.71-100.21,4-15.78,10-39.86,16.72-66.53h55.69c8.29,0,13.15-3.37,15-11.13,2.67-11.16,7.56-30.64,9-36,1.79-7-2.25-12.27-10-12.27h-54.76s25.21-100.59,25.81-103.17c2.43-10.23-6.13-16.14-15.09-14.25,0,0-42.32,8.28-50.17,9.92s-14,5.93-16.87,17.3L1023.78,244h-44c-8.29,0-13.16,3.39-15,11.12q-4.38,18-8.94,36c-1.82,7,2.24,12.27,10,12.27H1009c-.3,1.23-15.57,59.32-27.92,111.33-5.82,25-25.29,83.55-57.17,83.55-19,0-27.09-9.61-27.09-30.22,0-32.45,31.94-113.69,31.94-150.55,0-49.24-26.42-77.77-80.54-77.77-34.11,0-69.48,22-84.47,41.36,0,0,4.55-15.83,6.1-21.91,1.66-6.43-1.78-12.74-10.22-12.74H706.67c-11.26,0-14.37,6-16,12.64-.66,2.65-19.73,77.52-38,149.4-12.52,49.22-42.94,90.34-75.47,90.34-16.72,0-24.17-10.49-24.17-28.32,0-15.4,9.95-53.4,21.82-100.57,14.45-57.43,27.2-104.72,28.56-110.24,1.78-7.08-1.39-13.25-10.51-13.25H539.61c-9.64,0-13.08,5.06-15.11,12.09,0,0-15,56.72-30.85,119.86-11.53,45.82-24.25,92.49-24.25,114.42,0,39.13,17.57,68.63,65.88,68.63,37.28,0,66.78-18.91,89.31-43-3.31,13-5.42,21.3-5.63,22.14-2,7.45.41,14,9.19,14h54.47c9.49,0,13.13-3.81,15.11-12.08,1.91-7.89,42.59-167.92,42.59-167.92,10.76-43,37.36-71.45,74.77-71.45,17.75,0,33.11,11.75,31.33,34.58-2,25.12-32.27,115.35-32.27,155,0,30,11.12,68.76,67.55,68.76,38.46,0,66.78-18.44,87.37-42.24,7.54,25.26,27.51,42.24,64.15,42.24,60.89,0,97.59-36.11,119.15-72.39,17.89,42.15,59.8,72.37,121.25,72.37,62.64,0,111.11-26.41,145.46-62.3l-10.71,42c-1.95,7.57,1.35,13.52,10.23,13.52h53.92c7.38,0,12.63-3.76,14.55-11.51.94-3.81,8.73-33.91,19.74-76.69,21-81.86,54.86-166.79,105.68-166.79,17.92,0,25.27,10,25.27,25.81a38.38,38.38,0,0,1-4,17.32c-24.63-4.9-44.45,7.26-44.45,33.56,0,17.14,18,32.71,42.37,32.71,18.59,0,34-4.56,46.23-12.81Q1696,400,1714,404.08a238.06,238.06,0,0,0-2.83,35.87c0,65.7,46.92,121.42,131,121.42,65.9,0,111.12-24.1,150.15-55,18.77,30.71,66.15,55.52,128.31,55.52,85.19,0,133.51-44.3,133.51-102.85,0-53-43.51-72.51-88.38-88.75-36.47-13.18-66.89-20.34-66.89-46.12,0-21.12,16.63-30.79,45.14-30.79a140,140,0,0,1,39.79,6.07c7.35,18.4,22.57,38.78,48.55,38.78,22,0,31.85-17.38,31.85-33.39,0-45.58-75.92-50.36-75.92-148.1,0-60.78,34.39-110.92,105.62-110.92,49.49,0,81.81,31.38,81.81,82,0,41.76-25.33,116.1-25.33,116.1h-43c-8.28,0-13.16,3.38-15,11.12q-4.36,18-9,36c-1.81,7,2.25,12.27,10,12.27h42s-43.46,160.26-43.46,189.41c0,39.13,22,68.62,70.38,68.62,68.35,0,111.07-44.42,129.64-109,1.44-5-1.39-9.06-6.45-9.06h-26.08c-5.2,0-8.22,3-9.54,8.05-5.89,22.93-20.49,47.05-49.23,47.05-16.72,0-26-10.49-26-28.32,0-15.39,10.19-51.44,22.73-100.2,6-23.22,16.61-66.54,16.61-66.54ZM1875,300.58c24.17,0,35.65,16.08,35.65,35.24,0,32.42-25.13,52.18-64.45,52.18-14.07,0-33.75-3.33-45.36-7.2C1805.73,351,1827.31,300.58,1875,300.58Zm-568.59,0c26.46,0,35.64,16.08,35.64,35.24,0,32.42-25.13,52.18-64.44,52.18-14.08,0-33.75-3.33-45.36-7.2C1237.12,351,1256.25,300.58,1306.42,300.58ZM260.41,0C87.94,0,1,123.66,1,226.78c0,62.43,23.64,118,74.34,138.67,8.31,3.41,15.76.12,18.17-9.08,1.67-6.37,5.64-22.44,7.41-29.14,2.44-9.1,1.49-12.29-5.22-20.23-14.62-17.24-24-39.57-24-71.19,0-91.74,68.64-173.87,178.73-173.87,97.49,0,151.05,59.57,151.05,139.12,0,104.67-46.32,193-115.09,193-38,0-66.41-31.41-57.3-69.93,10.91-46,32.05-95.61,32.05-128.81,0-29.71-16-54.5-49-54.5-38.82,0-70,40.16-70,94,0,34.27,11.58,57.45,11.58,57.45L107.08,490.05C93.21,548.76,105,620.74,106,628c.58,4.31,6.12,5.33,8.63,2.08,3.58-4.67,49.81-61.75,65.54-118.79,4.44-16.15,25.53-99.78,25.53-99.78,12.61,24.05,49.47,45.25,88.68,45.25,116.69,0,195.87-106.39,195.87-248.8C490.24,100.28,399,0,260.41,0Z\"\n                            transform=\"translate(-0.98)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.05 610.45\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>dribbble</title>\n                        <path\n                            d=\"M764,245.62a51.8,51.8,0,1,0-51.78-51.8A51.8,51.8,0,0,0,764,245.62Zm1709.12,177c-7.88-5.54-14-6.46-19,4.3-87,188.38-233.55,94.38-219,102.65,32.51-14.87,118-83.45,105.09-178.14-7.84-57.87-57.51-83.54-110.23-74.35-92,16.05-125.88,115.3-108.65,203.18,3,15.09,8.41,27.54,13.79,39.73-104,84.57-145.29-75.7-150-94.85-.18-1,80.3-68.11,102.68-228,23.47-167.54-30-198-84.63-197.09-101.13,1.76-128.46,213.06-91.75,389.17-3.07.8-17.38,8.72-40.38,9.61-16.54-52.06-87.25-97.7-105.75-80.11-46.31,44,11.23,130,51.72,136.74-24.32,149.8-176.43,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31C1747,40,1725.42.79,1676.55,2.73c-94,3.72-104.24,215.08-93.21,365.09-.55-3.69-5.78,18.23-44.31,29.13-9.11-50.58-90.56-101.35-109.73-76.94-35.89,45.68,26.31,127.14,55.77,132.82-24.32,149.8-176.42,112.7-148.11-75,49.54-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-104.23,215.09-93.21,365.1-.55-3.75-5.91,18.89-46,29.61-1.34-65.63-83.08-95.72-102.72-74.78-35,37.32,8,113.91,47.81,132.83-24.32,149.8-176.42,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-101.58,225.71-90.56,375.72-31,132.67-134.8,298.35-121.31-33.54,1.33-23.28,2.79-32.12-8.82-40.84-8.7-6.78-28.48-3.52-39.29-3.25-13.14.53-16.43,8.22-19.34,19.84-6.76,30-8,59.1-8.94,98.79-.64,18.57-2.13,27.23-9.28,52.55s-47.88,71.58-70.19,63.84c-30.94-10.64-20.79-98-15-158,4.83-47.43-10.64-68.73-50.28-76.48-23.21-4.84-37.31-4.09-61.48-11.71-22.86-7.21-28-50.44-76.78-36-26.67,7.89-9.52,64.39-15.93,106.26-31.51,206-97.07,211.64-127.48,111.58C432.25,133.3,334.89,1,277.91,1c-59.35,0-127.2,40.89-98.47,302.47-14-4.08-18.26-6.27-33.56-6.27C59.4,297.24.48,367.15.48,453.4S59.4,609.56,145.89,609.56c51.05,0,86.9-23.22,114.05-59.13,17.71,25.36,39.28,59.52,78.72,58,117.57-4.58,151.76-245.75,155.8-259.2,12.57,1.94,24.46,5.61,36.06,7.54,19.34,2.91,20.75,10.56,20.31,30-5.13,164,25.14,221.45,93.8,221.45,38.25,0,72.34-37.58,95.83-64.46C758,580,786,607.11,823.45,608.22c90.87,2.26,125.66-142.58,122.49-123.52-2.49,15,29.48,122.7,123,123.09,115.88.49,137.42-126.94,140-148.29.32-4.24.46-3.8,0,0l-.09,1.3c36.79-6.85,55.77-26.57,55.77-26.57s29.54,175.54,139,173.57c113.63-2.06,135.05-117.25,137.87-139.72.37-5.33.59-4.7,0,0,0,.22,0,.44,0,.66,43.7-15.89,55.2-31.85,55.2-31.85s23.47,172.05,139,173.56c102.91,1.34,141.05-104,141.27-148.15,17.36.18,49.46-10.3,48.71-10.89,0,0,37.7,150.43,143,158.15,49.42,3.63,86.5-27.81,107.63-42.15,49.67,40.22,215.06,91.6,319.49-85.45,14.74-25.42-17-55.43-22.51-59.35ZM141.72,551.16c-50.46,0-82.82-46.66-82.82-97s29.7-97,80.16-97c22.71,0,35.34,2.5,53,17.88,3.21,12.64,12.3,41.79,16.72,55,5.93,17.72,13,32.79,20.08,49.2-10.15,42.09-43.44,71.83-87.16,71.83Zm123-174.57c-2.1-3.34-1.66-1.29-4-4.45C251.42,347,233.6,290.82,231.53,227c-2.33-72.16,9.69-156.74,45.15-156.74,24,0,49.56,171.42-12,306.3ZM975.15,301.4c-5.69-42.82-6-233.71,39.84-228.45C1040.29,83.2,999,263.33,975.15,301.4Zm334.64,0c-5.69-42.82-6-233.71,39.84-228.45C1374.93,83.2,1333.58,263.33,1309.79,301.4Zm332,2.66c-5.69-42.82-6-233.72,39.84-228.46C1706.9,85.85,1665.55,266,1641.76,304.06ZM2008.27,61.77c41.89-4.34,40.17,178.63-43.93,294.14-10.85-41.75-27.48-279.8,43.93-294.14Zm176.1,393.71c-13.46-68,21.32-112.62,57.16-117.52,12.53-2,30.69,6.12,34.31,21.29,5.95,28.6-.86,71-81.09,124.84a109.85,109.85,0,0,1-10.37-28.61Z\"\n                            transform=\"translate(-0.48 0)\"\n                        />\n                    </svg>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center z-1\">\n                <div class=\"col-lg-8\" data-aos=\"fade-up\">\n                    <div class=\"card lift mb-n15\">\n                        <div class=\"card-body p-2\">\n                            <div class=\"video overlay bg-img-cover rounded\" style=\"background-image: url('https://source.unsplash.com/wD1LRb9OeEo/1500x900')\">\n                                <a class=\"video-link\" href=\"assets/video/video.mp4\" data-lity><fa-icon [icon]='[\"fas\", \"play\"]'></fa-icon></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-img-cover overlay overlay-80\" backgroundImage='url(\"https://source.unsplash.com/yTwXpLO5HAA/1500x900\")'\n        ><div class=\"container px-5 position-relative\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10\">\n                    <div class=\"display-4 text-center py-10 my-10 text-white\">Effective <span class=\"text-primary\">design</span> is finding that perfect balance between the way something <span class=\"text-primary\">looks</span> and how it <span class=\"text-primary\">functions</span>.</div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-header headerClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-white mt-n15\"\n        ><div class=\"container px-5 z-1\">\n            <div class=\"card mb-5\" data-aos=\"fade-right\">\n                <div class=\"row gx-0\">\n                    <div class=\"col-md-6\"><img class=\"img-fluid\" src=\"https://source.unsplash.com/6LBBOwkPzyQ/800x550\" alt=\"...\" /></div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card-body d-flex align-items-center justify-content-center h-100 flex-column\">\n                            <h3 class=\"card-title fw-bold text-uppercase mb-2\">Cocooil</h3>\n                            <p class=\"card-text fw-light mb-4\">Body Oil</p>\n                            <a class=\"btn btn-outline-dark fw-500\" [routerLink]=\"\">View Case Study</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card mb-5\" data-aos=\"fade-left\">\n                <div class=\"row gx-0\">\n                    <div class=\"col-md-6 order-1 order-md-0\">\n                        <div class=\"card-body d-flex align-items-center justify-content-center h-100 flex-column\">\n                            <h3 class=\"card-title fw-bold text-uppercase mb-2\">Balitello</h3>\n                            <p class=\"card-text fw-light mb-4\">Designer Socks</p>\n                            <a class=\"btn btn-outline-dark fw-500\" [routerLink]=\"\">View Case Study</a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 order-0 order-md-1\"><img class=\"img-fluid\" src=\"https://source.unsplash.com/XfHvAwu6E8E/800x550\" alt=\"...\" /></div>\n                </div>\n            </div>\n            <div class=\"card\" data-aos=\"fade-right\">\n                <div class=\"row gx-0\">\n                    <div class=\"col-md-6\"><img class=\"img-fluid\" src=\"https://source.unsplash.com/7LNatQYMzm4/800x550\" alt=\"...\" /></div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card-body d-flex align-items-center justify-content-center h-100 flex-column\">\n                            <h3 class=\"card-title fw-bold text-uppercase mb-2\">Headphones</h3>\n                            <p class=\"card-text fw-light mb-4\">Premium Audio</p>\n                            <a class=\"btn btn-outline-dark fw-500\" [routerLink]=\"\">View Case Study</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-header headerClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-black\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-xl-6 col-lg-8 col-md-10 text-center my-10 py-10\">\n                    <h2>Ready to get Started?</h2>\n                    <p class=\"lead text-gray-500 mb-5\">We'd love to hear from you about your branding and digital needs. We are currently accepting new clients.</p>\n                    <a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Contact us</a>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 13746:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/basic-signup/basic-signup.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-secondary page-header-ui-dark\" borderType=\"waves\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                    </div>\n                </div>\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-6 col-lg-8 text-center\">\n                        <form class=\"row row-cols-1 row-cols-md-auto g-3 align-items-center mb-3\">\n                            <div class=\"col flex-grow-1\"><label class=\"sr-only\" for=\"inputEmail\">Enter your email...</label><input class=\"form-control form-control-solid w-100\" id=\"inputEmail\" type=\"email\" placeholder=\"Enter your email...\" /></div>\n                            <div class=\"col\"><button class=\"btn btn-teal fw-500\" type=\"submit\">Sign Up</button></div>\n                        </form>\n                        <p class=\"page-header-ui-text small mb-0\">By signing up, you agree to our <a href=\"#!\">terms of service</a></p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"waves\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-teal text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our modular, block-based build system makes building your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-teal text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">This UI Kit is build mobile-first, meaning it is will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-teal text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 23781:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/basic/basic.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"angled\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                        <a class=\"btn btn-teal fw-500\" [routerLink]=\"\">Get Started</a><a class=\"btn btn-link fw-500\" [routerLink]=\"\">Learn More</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"angled\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our modular, block-based build system makes building your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">This UI Kit is build mobile-first, meaning it is will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 76804:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/classifieds/classifieds.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-light footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-repeat bg-primary page-header-ui-dark\" borderType=\"waves\" borderClasses=\"text-light\" backgroundImage='url(\"assets/img/backgrounds/pattern-shapes.png\")'\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Buy and sell used items</h1>\n                        <p class=\"page-header-ui-text mb-5\">Out with the old, in with the new! Your trash is another's treasure. Start making money, or find great deals today!</p>\n                        <a class=\"btn btn-teal fw-500 me-2\" [routerLink]=\"\">Start Selling</a><a class=\"btn btn-link fw-500\" [routerLink]=\"\">Browse Categories</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <h2 class=\"mb-4\">Recent postings</h2>\n            <div class=\"row gx-5\">\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$115</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/tG36rvCeqng/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Gray Bicycle</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 2 days ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$29</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/nHOz7sp5nHE/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Hanimex Camera</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 3 days ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$999</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/GkFQEOubrCo/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Macbook Pro</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 4 hours ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$19</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/3bdSGpKVAmk/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Assorted Skin Care</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 29 minutes ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$59</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/w9IHmVSNBfU/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Brown Ukulele</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 3 days ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$249</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/bpg-ngqrPc8/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Leather Sofa</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 2 hours ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$219</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/fZuleEfeA1Q/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Green Suede Sofa</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 2 days ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$89</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/rjhAiP3cj9E/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Metal Chairs</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 5 days ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$89</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/5ba6j8d_oXY/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Wireless Earbuds</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 1 month ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$34,999</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/ESoE_buQvNQ/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Muscle Car</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 1 week ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$69</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/zuE9jsaVHuA/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Hardwood Dresser</div>\n                            <div class=\"text-xs text-gray-500\">Waterlow, CO &middot; 2 weeks ago</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-xl-3 col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right card-flag-lg\">$9,999</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/WuRsjF4iZK0/800x500\" alt=\"...\" />\n                        <div class=\"card-body p-3\">\n                            <div class=\"card-title small mb-0\">Classic Motorcycle</div>\n                            <div class=\"text-xs text-gray-500\">Readcaster, CO &middot; 1 week ago</div>\n                        </div></a\n                    >\n                </div>\n            </div>\n            <div class=\"mb-10\">\n                <a class=\"text-arrow-icon\" [routerLink]=\"\">See more deals near you<i-feather name=\"arrow-right\"></i-feather></a>\n            </div>\n            <h2 class=\"mb-4\">Browse Categories</h2>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-3 col-md-6 mb-5\">\n                    <a class=\"card lift border-bottom-lg border-red\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-red text-white mb-2\"><fa-icon [icon]='[\"fas\", \"car\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Cars</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5\">\n                    <a class=\"card lift border-bottom-lg border-orange\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-orange text-white mb-2\"><fa-icon [icon]='[\"fas\", \"home\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Housing</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5\">\n                    <a class=\"card lift border-bottom-lg border-yellow\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-yellow text-white mb-2\"><fa-icon [icon]='[\"fas\", \"gift\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Free</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5\">\n                    <a class=\"card lift border-bottom-lg border-green\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-green text-white mb-2\"><fa-icon [icon]='[\"fas\", \"mobile-alt\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Tech</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card lift border-bottom-lg border-cyan\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-cyan text-white mb-2\"><fa-icon [icon]='[\"fas\", \"couch\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Furniture</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card lift border-bottom-lg border-blue\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-blue text-white mb-2\"><fa-icon [icon]='[\"fas\", \"briefcase\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Jobs</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card lift border-bottom-lg border-purple\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-purple text-white mb-2\"><fa-icon [icon]='[\"fas\", \"motorcycle\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Leisure</div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <a class=\"card lift border-bottom-lg border-pink\" [routerLink]=\"\"\n                        ><div class=\"card-body text-center\">\n                            <div class=\"icon-stack icon-stack-xl bg-pink text-white mb-2\"><fa-icon [icon]='[\"fas\", \"shopping-cart\"]'></fa-icon></div>\n                            <div class=\"small text-gray-600\">Other</div>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <h2 class=\"mb-4\">Browse by city</h2>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Atlanta, GA</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Austin, TX</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Baltimore, MD</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Boston, MA</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Chicago, IL</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Cleveland, OH</a></div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Columbus, OH</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Dallas, TX</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Denver, CO</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Detroit, MI</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Houston, TX</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Las Vegas, NV</a></div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Los Angeles, CA</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Miami, FL</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Nashville, TN</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">New York, NY</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Orlando, FL</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Philadelphia, PA</a></div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Phoenix, AZ</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Portland, OR</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">San Francisco, CA</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Seattle, WA</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">Tampa, FL</a></div>\n                    <div class=\"mb-2\"><a [routerLink]=\"\">See more...</a></div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary py-10\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <h2 class=\"display-4 text-white fw-500\">Get the app!</h2>\n                    <p class=\"lead text-white-50 mb-5\">Buy and sell items from your device with our new mobile app!</p>\n                    <div class=\"mb-5 mb-lg-0\">\n                        <a class=\"me-3\" href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/app-store-badge.svg\" style=\"height: 3rem\" /></a><a href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/google-play-badge.svg\" style=\"height: 3rem\" /></a>\n                        <div class=\"page-header-ui-text mt-2 text-xs font-italic text-white-50\">* Requires Android OS 4.3+ or Apple iOS 9.3+</div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 67404:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/desktop-app/desktop-app.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-white page-header-ui-light\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\" data-aos=\"fade\">\n                        <h1 class=\"page-header-ui-title\">Introducing a full suite of premium products</h1>\n                        <p class=\"page-header-ui-text\">Build a marketing site for your desktop app with this easy to use layout included with SB UI Kit Pro</p>\n                        <button class=\"btn btn-primary fw-500\">Get Started</button><button class=\"btn btn-link fw-500\">Learn More</button>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"pb-10 pt-1 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"device-laptop text-gray-200 mt-n10\" data-aos=\"fade-up\">\n                <svg class=\"device-container\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"83.911 298.53 426.962 243.838\"><path d=\"M474.843 516.208V309.886c0-6.418-4.938-11.355-11.354-11.355H131.791c-6.417 0-11.354 4.938-11.354 11.355v206.816H83.911v13.326c4.938 7.896 31.098 12.34 40.969 12.34h345.024c10.366 0 36.526-4.936 40.969-12.34v-13.326h-36.03v-.494zM134.26 313.341h326.762v203.361H134.26V313.341z\"></path></svg><img class=\"device-screenshot\" src=\"assets/img/demo/app-desktop-demo-screenshot.jpg\" />\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pb-10 pt-0 bg-light\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 brands text-gray-500 align-items-center\">\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500.01 816.05\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>google</title>\n                        <path d=\"M307.89.07h22.23c77.18,1.68,153.1,32.72,207.63,87.67-20.13,20.55-40.69,40.27-60.4,60.82-30.62-27.68-67.53-49.08-107.8-56.63C310,79.35,245.81,90.68,195.89,124.65c-54.53,35.66-91.44,96.06-99.41,160.66-8.81,63.76,9.22,130.87,50.75,180.37,39.85,48.23,100.67,78.44,163.59,80.53,58.73,3.36,120-14.68,162.75-55.79,33.56-28.94,49.08-73,54.11-115.77-69.63,0-139.26.42-208.89,0V288.24H612c15.1,92.7-6.71,197.15-77.18,263.43-47,47-112,74.66-178.28,80.11-64.17,6.3-130.45-5.87-187.5-36.91C100.67,558.38,46.14,496.72,19.3,424.15-5.87,357.45-6.29,282,17.2,214.84,38.59,153.6,79.7,99.48,132.55,61.73,183.31,24.4,245,3.85,307.89.07Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1989.93,21.88h89.77v599c-29.78,0-60,.42-89.77-.42.42-199.25,0-398.91,0-598.58Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M811.66,229.52C867,219,927,230.78,972.73,263.91c41.53,29.37,70.47,75.51,79.28,125.84,11.33,58.31-2.93,122.07-40.68,168.21-40.69,51.59-107.39,79.28-172.4,75.08-59.57-3.35-117.45-33.14-152.69-81.79-39.85-53.69-49.5-127.52-27.68-190.44,21.81-67.53,83.47-119.13,153.1-131.29m12.58,79.7a112.72,112.72,0,0,0-58.72,37.33c-40.69,48.66-38.17,127.93,6.71,173.24,25.59,26,64.18,38.17,99.83,31,33.14-5.88,62.08-28.11,78-57.47,27.69-49.92,19.72-118.71-22.65-157.72-27.26-25.17-67.11-35.65-103.19-26.42Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1256.29,229.52c63.34-12.17,132.55,5.45,180,49.91,77.18,69.22,85.57,198.83,19.72,278.53-39.85,50.33-104.45,78-168.21,75.08-60.82-1.68-120.8-31.88-156.88-81.79-40.69-54.95-49.49-130.46-26.42-194.63,23.07-65.44,83.47-115.36,151.84-127.1m12.59,79.7a114.63,114.63,0,0,0-58.73,36.91c-40.27,47.82-38.59,125.84,4.62,171.56,25.58,27.26,65.43,40.69,102.34,33.14,32.72-6.29,62.08-28.11,78-57.47,27.27-50.33,19.3-119.13-23.49-158.14-27.26-25.16-67.11-35.23-102.76-26Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1633.39,253.85c48.24-30.2,112.42-38.59,164.43-12.59,16.36,7.13,29.78,19.3,42.78,31.46.42-11.32,0-23.07.42-34.81,28.11.42,56.21,0,84.74.42v370c-.42,55.79-14.69,114.94-55,155.62-44,44.89-111.58,58.73-172.4,49.5-65-9.65-121.65-57-146.82-117,25.17-12.16,51.6-21.81,77.6-33.14,14.69,34.4,44.47,63.76,81.8,70.47s80.54-2.51,104.87-33.55c26-31.88,26-75.51,24.74-114.52-19.29,18.88-41.52,35.66-68.37,42-58.3,16.36-122.48-3.78-167.36-43.21-45.31-39.43-72.15-100.25-69.64-160.65,1.26-68.37,39.85-134.23,98.16-169.88m86.83,53.69c-25.59,4.19-49.5,18.46-65.86,38.17-39.43,47-39.43,122.06.42,168.2,22.65,27.27,59.15,42.37,94.38,38.6,33.14-3.36,63.76-24.33,80.12-53.28,27.68-49.07,23.07-115.77-14.26-158.55-23.07-26.43-60-39.43-94.8-33.14Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M2187.5,275.24c50.34-47,127.94-62.92,192.53-38.17,61.25,23.07,100.26,81.37,120,141.36-91,37.75-181.63,75.08-272.65,112.83,12.58,23.91,31.88,45.72,57.88,54.53,36.5,13,80.12,8.39,110.74-15.94,12.17-9.22,21.82-21.39,31-33.13,23.07,15.52,46.14,30.62,69.21,46.14-32.71,49.07-87.66,83.47-146.81,88.92-65.43,8-135.06-17.19-177.43-68.37-69.63-80.54-62.92-215.6,15.52-288.17m44.88,77.6c-14.26,20.55-20.13,45.72-19.71,70.47q91.23-37.76,182.46-75.92c-10.06-23.49-34.39-37.75-59.14-41.53C2296.14,298.73,2254.61,320.12,2232.38,352.84Z\" transform=\"translate(0.01 -0.07)\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.17 585\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>product-hunt</title>\n                        <g id=\"Page-1\">\n                            <g id=\"product-hunt-logo-horizontal-orange\">\n                                <path d=\"M585.54,292.5C585.54,454.11,454.64,585,293,585S.54,454.11.54,292.5,131.43,0,293,0s292.5,130.89,292.5,292.5m-253.5,0H249.16V204.75H332a43.88,43.88,0,0,1,0,87.75m0-146.25H190.66v292.5h58.5V351H332a102.38,102.38,0,0,0,0-204.75\" transform=\"translate(-0.54)\" />\n                                <path d=\"M892.91,256.67c0-16.09-12.43-25.84-28.52-25.84H821.24v51.43h43.15C880.48,282.26,892.91,272.51,892.91,256.67ZM780.54,390V195h89.7c41.68,0,64.35,28,64.35,61.67,0,33.39-22.91,61.42-64.35,61.42H821.49V390Z\" id=\"Fill-5\" transform=\"translate(-0.54)\" />\n                                <path d=\"M959.21,390V247.89h36.56v18.77c10-11.94,27.06-22.18,44.36-22.18v35.59a55.68,55.68,0,0,0-10-.73c-12.19,0-28.28,6.82-34.13,15.84v95.06h-36.8Z\" id=\"Fill-7\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1162.74,317.12c0-21.45-12.68-40.22-35.59-40.22-22.67,0-35.34,18.77-35.34,40.22,0,21.94,12.67,40.46,35.34,40.46,22.91,0,35.59-18.77,35.59-40.46m-109,0c0-39.24,27.55-72.64,73.13-72.64,46.07,0,73.61,33.4,73.61,72.64S1173,390,1126.91,390c-45.58,0-73.13-33.64-73.13-72.88\" id=\"Fill-9\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1323.37,341.74v-49c-6.09-9.26-19.26-15.84-31.2-15.84-21,0-35.34,16.33-35.34,40.22,0,24.13,14.38,40.46,35.34,40.46,11.94,0,25.11-6.58,31.2-15.84Zm0,48.26V368.79c-11,13.9-25.84,21.21-42.9,21.21-34.86,0-61.43-26.33-61.43-72.88,0-45.09,26.09-72.64,61.43-72.64a52.84,52.84,0,0,1,42.9,21.21V195h36.81V390Z\" id=\"Fill-11\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1489.85,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-13\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1553.71,317.12c0-42.41,31-72.64,73.62-72.64,28.51,0,45.58,12.43,54.84,25.11L1658.28,292c-6.58-9.75-16.57-14.87-29.25-14.87-22.18,0-37.54,16.09-37.54,40.22s15.6,40.47,37.54,40.47a34.8,34.8,0,0,0,29.25-15.12l23.89,22.43c-9.26,12.67-26.33,25.35-54.84,25.35-42.66-.49-73.62-30.71-73.62-73.37\" id=\"Fill-15\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1713.61,351.73V279.58H1690.7V247.65h22.91V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-17\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2011.72,390V305.91h-90.43V390h-40.71V195h40.71v75.32h90.43V195h41.19V390Z\" id=\"Fill-19\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2183.32,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-21\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2349.56,390V302.74c0-19.26-10-25.84-25.6-25.84-14.38,0-25.35,8-31.68,16.09v97h-36.57V247.89h36.57v17.8c9-10.24,26.08-21.21,48.5-21.21,30.71,0,45.34,17.31,45.34,44.12V390Z\" id=\"Fill-23\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2430,351.73V279.58h-22.91V247.65H2430V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-25\" transform=\"translate(-0.54)\" />\n                            </g>\n                        </g>\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 1701.12 416.6\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>mailchimp</title>\n                        <path\n                            d=\"M477.52,202.2Zm1143.4,103.7h.6c34.4,0,58.7-23.9,58.9-58,.1-16.9-4.8-32.4-13.8-43.6-9.5-11.8-22.8-18.1-38.5-18.3h-.3c-21.2,0-40.8,16.1-60.1,49.1l-1.5,2.6-1-2.9c-4.9-14.2-9.2-26-11.8-33-1.8-4.9-2.6-7.1-2.8-7.9-.9-3.6-4-5.8-8-5.8a14.14,14.14,0,0,0-7.6,2.4,8.84,8.84,0,0,0-4.3,6l-.1.4c-19.3,60.2-35.2,89.4-48.7,89.4a5.94,5.94,0,0,1-4.6-1.9c-3.5-3.9-2.7-13.2-1.5-26,.9-9.4,1.9-20.1,1.5-31.4-.8-21.8-12.7-34.9-31.9-35-24.4,0-40.1,25.9-47.4,41.4l-2.2,4.6-.5-5.1c-1.8-19.1-8.2-42-28.5-42.1-23.7,0-41.7,27.7-52.7,51l-2.9,6.2.3-6.9c1.3-31.1,2.4-49.4,3.2-54.5s.4-8.5-1.3-10.5c-1.6-1.8-4.6-2.5-8.9-2.2-7.6.5-11.4,5.1-17.3,20.5-9.6,25.4-33.9,84.4-53.4,84.4a11.58,11.58,0,0,1-9.2-3.9c-8.2-9.3-4.9-34.6-.4-69.6l.3-2.6c2.1-16.6-1.5-20.1-10.5-21.7a12.41,12.41,0,0,0-2.7-.3c-7.2,0-10.5,6.9-17.2,26-11.9,34-27.3,69.8-45.2,69.8a13.55,13.55,0,0,1-2-.2c-9.5-1.6-9.3-15.7-9-33.6.1-9.7.3-20.6-1.2-30.5-2.7-17.8-13.1-28.8-27.3-29-28.3,0-47.3,36.2-56.2,57.8l-2,4.9-.7-5.2c-1.7-13.9-2.9-27.8-3.4-41.7v-.5l.3-.4c52.9-66.6,76.6-114.7,77-155.8C1124.62,16,1112.52.2,1092,0c-15,0-50.7,12.5-63.1,128.3a649.91,649.91,0,0,0-3.7,65.4v.4l-.2.3c-24.2,35-75.9,95.3-126.4,95.3-45.7,0-82.2-37-82.2-102.2,0-87.5,61.9-141.2,108.5-141.2h.4c10.1.1,18.8,2.9,25.1,8.2a27.68,27.68,0,0,1,9.9,22.2c-.1,12.1-4,18.3-7.8,24.3-1,1.5-1.9,3.1-2.8,4.7s-1.7,4-.5,6.1,4.4,3.4,8.2,3.4c11.1,0,27.9-16.1,28-40.2.2-25.3-21.1-51.4-59.2-51.4C868.62,23.6,791,86.9,791,189.4c0,72.5,45.5,122.7,107.1,122.7,43.7,0,87-31.3,125.2-83.6l2.3-3.2.2,3.9c.8,19.1,2.2,34.2,3.2,45.2.7,7.1,1.1,12.2,1.1,15-.1,6.2,1,10.5,3.1,13.1s5.5,3.9,10.6,3.9c8.6,0,10.3-5.9,13.7-20.3l1-4.1c4.2-17.5,19.9-74.7,43.4-74.7a11.82,11.82,0,0,1,8.9,3.4c5.2,5.5,4.6,16.8,4,29.9-.4,8.2-.8,16.6,0,24.8,2.2,22.2,11.8,33,29.3,33.2,18,0,36.7-19.3,46.6-37.3l1.9-3.4.7,3.8c1.8,9.6,10,41.2,35.6,41.2,23.2,0,43.1-24.4,64.8-74.6l2.9-6.6-.2,7.2c-.5,19-1.5,42.3-1.5,60.2,0,13.9,1.4,19.2,7.8,19.2l1.5.1c6.2,0,10.3-3.7,12.4-11,16.4-57.2,30.6-83.8,44.6-83.8,13.7.1,15,25.2,16.1,69.7l.1,3.1c.3,15.5.9,22.4,10.5,22.5,7.3,0,9.1-5.8,12.9-19.9.7-2.7,1.5-5.7,2.4-8.9,13.2-45.9,24.2-64.7,37.9-64.7,11.7.1,12.3,12.1,12.6,16.1.5,8.5-.4,17.4-1.3,26-.8,8-1.6,16.2-1.3,23.9.7,18,10.6,27.9,27.7,28.1,22.3,0,42.3-26,59.9-77.4l1.2-3.6,1.4,3.5c3.2,8.1,7.4,19,11.2,32l.1.5-.2.5c-17,37.8-29.1,80-29.2,102.5-.2,29.7,13.2,48.9,34.2,49.1h.4c11.4,0,38-4.6,38.6-47,.2-17.4-3.9-42-12.2-73.1l-1-3.6,3.1,2a62.44,62.44,0,0,0,34.6,11ZM1047.22,162c.5-10.6,1.4-21,2.6-30.8,8.2-63.1,25.4-107.1,41.8-107.1h.1c7.8.1,11.7,6,11.6,17.6-.2,28.5-18.3,69.3-53.6,121.2l-2.8,4.1.3-5ZM1570,388.8a12.66,12.66,0,0,1-10.8,5.2c-5.2,0-9.2-1.9-11.8-5.4-7.5-10-5.4-33.5,6.8-76.1,1.5-5.1,3-10.2,4.7-15.2l1.4-4.3,1.2,4.3C1575.82,346.5,1578.72,377.3,1570,388.8Zm4.5-126.1-.3-.5-.5-1.6.2-.5c16.2-33.4,34.8-52.6,51-52.6h.2c18.3.1,30.9,16.6,30.7,39.9-.1,15.6-7,24.6-12.7,29.4a37.84,37.84,0,0,1-23.9,8.6c-21.5-.1-36.2-12.4-44.7-22.7Zm50.4-53.8ZM540.12,300.4c25-2,44.9-36,52.3-50.6l1.9-3.8.7,4.1c3.5,20.5,14.7,54.8,49.5,55.1h.3c15.1,0,32.1-9.2,49.4-26.6l1.3-1.3.9,1.5c11.6,19.4,27.2,29.8,43.8,28.9,24.4-1.3,39.3-18.6,40.6-30.6a10.36,10.36,0,0,0-2.2-7.9c-2.2-2.5-5.4-2.7-7.7-.5l-1.1,1.1c-5.7,5.5-16.3,15.6-27.8,16.2-14.1.7-24.6-7.8-31.4-25.2l-.3-.7.5-.6C749.72,208.6,777,131,774.32,79c-1.2-24.1-8.2-52.8-34.6-52.8h-2c-10.1.5-19.2,5.3-27.2,14.3-24.4,27.3-37.2,94.5-32.5,171.3a175,175,0,0,0,8.2,44.3l.3.8-.5.6c-14.4,16.9-28.7,26.1-40.1,26.1-27.5,0-26.6-46.1-24.4-84.3.5-8.2,1.2-13.5-1.3-16.5-1.7-2.1-4.7-3.2-8.9-3.2h-.5c-9.8,0-11.8,2-16.8,16.5-10.4,30.2-31,80.8-51.6,80.8-5.7-.1-10.1-2-13.1-5.8-10-12.8-2.4-44.7,3.7-70.4,1.1-4.6,2.2-9,3.1-13.1q1.95-9.15-1.2-13.2c-2.2-2.7-6.5-3.8-12.1-3.3-8.9.7-14.5,4.4-17.3,21.3l-.6,3.5-2.1-2.5c-3.9-5.7-11.4-12.5-25.4-12.5-1.2,0-2.5.1-3.8.2-14.9,1.2-31.9,11.6-44.4,27.2a90.7,90.7,0,0,0-19.5,64.6c.1,1.2.3,2.4.5,3.6l.1.7-.5.5c-8.7,9.5-17.5,14.3-26.3,14.3-13.5-.1-21.3-10.2-21.3-26.9,0-28.2,19.1-113.3,19.1-144.1,0-32.8-14.6-50.6-40-50.8h-.4c-37,0-65.9,42-93.5,128.5-2.6,8.3-5.2,16.6-7.6,25l-3.9,13,1.1-13.5q3.75-43.5,5.2-87.1c1.4-41.8-4.3-68.7-17.3-82.2-7-7.3-16.3-10.9-28.4-11h-.3c-45.3,0-67,76.4-82.9,130.4-4.8,16.3-14.2,53-20.5,78.1l3.7-6c2.8-31.6,10.9-110.8,10.3-153.8-.6-46.1-15.9-66.8-49.8-67h-.4c-18.1,0-30.6,9-38,16.5C6.92,52.8-.38,70.5,0,85.8c.2,9.3,5.9,17.5,10.3,17.5,2.8,0,4.4-3.8,5-6,10.5-34.6,24-51.5,41.4-51.5,7.2.1,12.6,2.2,16.6,6.5,13.6,14.6,11.1,53.9,6.6,125.4-1.4,23-3.1,49.1-4.5,78.8q-.3,7.35-.9,14.7c-1.3,20.6-2.4,36.9,5.4,38.1,10.2,1.6,16.8-2.5,20.2-12.6,5-14.9,16.3-55.8,38.1-130.4,20.9-71.6,36.7-97.7,57-97.7,23.4,0,25.1,40.1,20.8,124.8-.9,17.9-2.1,38.3-3.1,60.4-.1,3.1-.3,6.1-.4,9-.9,18.3-1.6,32.8,3.6,38.3a9,9,0,0,0,6.8,2.6c10.1,0,13.2-8.9,18.2-23.6.9-2.6,1.8-5.4,2.9-8.3,34.7-95.7,60.4-178.8,94.8-178.8,10.3,0,18.4,8.4,18.4,24.8,0,37.8-18.5,110.8-18.5,147.8,0,13.3,3.8,25.2,11,33.5,7.4,8.6,17.8,13.2,29.9,13.3h.3c11.5,0,23.5-5.6,35.7-16.6l1.1-1,.9,1.2c8,10.8,20.9,16.6,34.9,15.5,21.4-1.7,39.4-20.7,46.1-38.7l1.3-3.5,1.3,3.5c5.2,13.4,16,29.5,38.9,27.6ZM737.42,50.2h.4a8,8,0,0,1,6.4,3.6c8.5,11.5,8.6,53.4-6,101.2-8.4,27.3-19.6,53-32.5,74.5l-2.1,3.4-.5-4c-1.5-11.5-2.3-23.6-2.8-33.8-3.7-72,18.1-143.9,37.1-144.9ZM499.92,218.8c-7.5,30.1-21.9,66.5-47.8,68.6l-2.1.1c-10.7,0-16.8-7-17.9-20.9-1.4-17.4,6.1-37.7,19.1-51.8,8.3-9,17.6-13.9,26.3-13.9h.2c11,.1,18.6,8.9,22.2,17.1l.2.4-.2.4ZM620,108.3a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4A17.12,17.12,0,0,0,637,125.3c.2-9.3-7.5-16.9-17-17Zm601.2,0a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4a17.05,17.05,0,0,0,17.2-16.8c.2-9.3-7.5-16.9-17-17Z\"\n                        />\n                        <path d=\"M1689.42,286.8a11.75,11.75,0,1,0,11.7,11.8A11.74,11.74,0,0,0,1689.42,286.8Zm0,21.8a10,10,0,1,1,10-10A10,10,0,0,1,1689.42,308.6Zm5.2-13.1c0-2.4-1.2-3.8-4.3-3.8h-5.2v13.5h1.7v-5.9h2.4l4,5.9h1.9l-4-5.9C1693.12,299,1694.62,298,1694.62,295.5Zm-5.5,2.3h-2.2v-4.6h3c1.5,0,3,.5,3,2.2C1692.92,297.7,1690.92,297.8,1689.12,297.8Z\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-sm-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500 705.92\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>instagram</title>\n                        <path\n                            d=\"M143.25,0c-22.87,0-52.51,24.24-70,40.38C34.82,74.55,0,137.29,0,187.65c0,71.56,60.86,98.57,76.25,98.57,5.08,0,9.4-2.62,9.4-9.51,0-5.39-3.42-9.89-6.83-14.5C64.73,240.66,60.2,220.1,60.2,192.37,60.2,134.54,86.87,81.54,109,57.28c4.08-4.39,13.3-13.87,16.06-13.87s3.41,2.23,3.41,9.12L125.89,431c0,59.17-17.07,82.67-17.07,96.61,0,6.12,2.65,7.71,7.71,7.71,24,0,47.84-29.21,54.6-39.86,21-36.23,26.12-64.51,26.12-146.09v-318c0-8.61-2.41-12.33-10.59-17.64C174.7,6.11,161,0,143.25,0Zm685,1.06C817,1.1,812.2,7,811.67,25.22l-2.5,75.47-66-2.29c-4-.1-5.81,1.17-7.56,4.69C730,113.6,727,121.83,727,135.55c0,11.16,5.06,12.35,9.58,12.35l68.68,2-.21,144.19c0,30.59-19.3,70.26-53.55,103.26a77.33,77.33,0,0,0,2.78-20.42c0-29.58-19-56.4-44.43-75.37l-62-46.61c13-15,35-44.83,35-70,0-19.51-12.27-27.7-35.14-27.7-32.27,0-69.7,29.55-69.7,73.4,0,16,7.11,30.36,17.91,41.36-14.92,28.32-36,65.57-51.71,92.1-11.84,20.31-31.87,51.43-43.73,51.43-8.74,0-12.77-13.75-12.77-66.57,0-43.89,3.11-91.6,4.68-137.4,0-10.5-1.72-20.19-15.35-29.68-12.54-8-28-19.25-44-19.25-35.46,0-59.61,32.62-76.18,64.53-17.15,33.06-26.42,60.92-39.5,101.35l1.44-139.13c.45-9.92-2.06-13.77-10-17.15-10.3-4.36-25.46-9.4-38.9-9.4-11.24,0-12.61,4.85-12.61,16.65L255.9,346.42l-.17,64.39c0,58.05,7.27,67.73,41.72,67.73,19.07,0,25.18-2.24,25.55-18.09.53-10.49,5.54-35.89,12.33-61.37,19.84-75.19,43.35-134.67,83.89-180,4.22-4.4,7.49-2.82,6.83,3.42,0,0-6.41,101.76-6.41,143.38,0,74,11.39,112.66,48.22,112.66,36.15,0,71.66-46.45,91-77.8l62.18-104c40.28,34.33,68.4,60.95,68.4,93.33,0,20.12-12.7,39.81-32,39.81-24.17,0-39.62-25.49-55.94-25.49-13.55,0-31,26.16-31,41,0,14,30.61,33.86,85.52,33.86,81.06,0,124.54-55.63,150.63-117.23,5,73.12,34.13,115.82,79.57,115.82,29.8,0,64.24-37.65,79.91-83.64,0,0,1.55,11.94,13.45,36.4,16.38,31.94,41.28,46.61,72.21,46.61,38.46,0,71.37-23.32,91.45-62.45,3,29.65,28,62.31,68,62.31,25.14,0,48-19.26,63.09-51,0,0,19.48,52.39,75.83,52.39,31.65,0,69.13-29.32,78.08-50.63l1,31L1345.65,536c-24.27,23.57-50.1,57.43-50.1,94.92,0,47.67,45,75.09,84.63,75.09,41.18,0,68.5-26.09,83.47-48,18.84-28.28,26.79-81.6,26.79-133.71l-1.86-78.36C1544.93,384,1589,298.39,1608.66,237.81l42.77-1.12c8.29-.56,7.88,2.7,6.73,7.53-7.52,31.77-14.08,67.75-14.08,103.57,0,59.2,13.63,84.95,33.23,106,17,17.64,34,23.59,51.82,23.59,34.88,0,56.77-28.8,63.72-47,16.38,31.94,40.51,46.82,71.43,46.82,38.47,0,71.37-23.32,91.46-62.45,3,29.65,27.94,62.31,68,62.31,29.91,0,47.26-17.26,60.91-49.78.27,10.46.67,21.61,1,32.06.36,5.41,4.69,8.84,8.56,10.25,12.71,4.81,23.87,7.22,33.9,7.22,26.15,0,31.82-5.37,31.82-22.46,0-28.2.83-72.74,8.84-108.5,8.5-35.61,21.34-75.91,39-104,1.6-2.9,5.51-2.14,5.68,1.37,2.54,60,6.55,161.59,22.32,187.89,7.77,12.54,19.8,21.68,37.8,21.68,8.44,0,18.79-3.59,21.44-5.84,2.68-2.09,4-4.42,3.87-8.73,0-76.71,23.92-151,47.88-200.91.66-1.48,2.53-1.6,2.46.35L2347.89,293c0,90.78,6.54,148.13,51.89,175.7a59.36,59.36,0,0,0,29.18,7.57,60.85,60.85,0,0,0,54.64-33.8c8.47-16.19,16.4-47.36,16.4-65,0-6.83.08-18-11.12-18-6.14,0-9.83,4.52-11.3,11.37-3.57,14.83-6.5,27.54-12,42.21-5.29,14-13.19,22.14-22.56,22.14-11,0-16.59-8.66-19.79-14-14-21.42-15.17-70.63-15.17-111.7l3.38-105.72c0-8.75-3.65-19.22-17.14-26.94-9.06-5.21-32-15-46-15-13,0-19.32,7.37-24,18.2-8.81,19.44-38.25,95.69-46.15,157.68-.28,1.63-2.32,2-2.46-.11-4.1-43.84-6.21-96.66-6.16-132.29,0-10.77-2.64-26.18-25.49-36.16-11.11-4.6-20.29-7.42-31.51-7.42-13.92,0-16.92,6.81-21.9,15.84-15.77,29.13-26.67,67.12-43,115l.25-109.66c0-5.13-3.14-11.85-12.15-13.66-22.32-5.13-32.66-7.46-41.46-7.46-6.41,0-9.93,5.1-9.93,10.63l-1.2,187c-4.32,22.89-21.82,77.52-46.65,77.52-20.38,0-29.89-20.65-29.89-107l3.7-140.25c0-8.86-5.81-12.58-14.29-16.34-12.12-4.81-21.76-6.72-34.08-6.72-15.46,0-20.76,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-105.68,72.49-105.68,177.82-.59,29.54,6.55,58.9,6.55,58.9-5.46,24.51-18.27,44.49-36,44.49-22.34,0-36.58-31.58-36.58-86.32,0-54.9,20.91-116.82,20.91-133.6,0-19.51-12.78-31.86-35.41-31.86-11.34,0-53.39,9.54-75,12.67,0,0,2.43-10.26,2.25-18.34,0-19.24-9-31.29-31.44-31.29-27.38,0-47.49,19.55-47.49,52.91,0,15,8.62,28.82,20,36.26-14.81,61.78-38.89,107.73-74.38,159.06L1491,189c0-6.76-1.8-11-15-16.09a83.33,83.33,0,0,0-32.77-6.52c-20.84,0-19.46,14.88-18.34,26-9.54-16.9-30.4-37-62.6-37-87.73,0-114.67,133.79-101.46,228.8,0,11.58-11.31,52.7-36.86,52.7-20.38,0-29.88-20.65-29.88-107l3.73-140.25c0-8.87-5.86-12.59-14.33-16.34-12.12-4.81-21.73-6.72-34-6.72-15.46,0-20.77,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-106.29,66.29-106.29,171.62,0,40.21-34.62,101.57-58.89,101.57-13.49,0-27.85-24.76-27.85-88,.07-43.11,5.95-189.89,5.95-189.89l84.74-1.37c4,0,6.38-4.46,7.88-7.18,3.89-7.9,5.77-13.15,5.77-22.6,0-8.53-1.7-11.64-12.63-12.25L882,103l3.59-78.68c.26-5-2.74-8.21-8.16-10.63C861,7.28,841,1.1,828.29,1.1Zm256.46,206.15c22.59,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.92-127.44,56.33-127.44Zm813.64,0c22.6,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.93-127.44,56.33-127.44Zm-516.06.43c29.49,0,42.53,30.39,42.53,89.31,0,88.83-26.4,139.4-58.47,139.4-20.48,0-44-33.61-42.78-99.73,0-42.27,13.79-129,58.72-129Zm49.92,297.16v35c0,116.1-30.94,135.92-55.8,135.92-9.42,0-32.49-7.11-32.49-35.84,0-40.15,42-85.83,55-99.94l33.26-35.13Z\"\n                            transform=\"translate(0 -0.04)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2498.04 632\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>pinterest</title>\n                        <path\n                            d=\"M574.55,222.78c27.1,0,53.11-22.57,57.63-50.41,5.35-27.1-13-49.66-40.11-49.66s-53.1,22.56-57.7,49.66C529.09,200.21,546.71,222.78,574.55,222.78ZM2414,303.32h60.64c8.31,0,13.17-3.37,15.05-11.13q4.35-18,8.95-36c1.79-7-2.27-12.27-10-12.27h-59.83c4.31-17.14,21.09-72.81,21.09-109.11C2449.85,62.36,2388.3.7,2301,.7c-98.63,0-162.8,66.19-162.8,159.33,0,27.17,10.14,58.83,22.7,78.48q-8.11-.47-16.24-.46c-74.94,0-122.15,40.65-122.15,99.81,0,55.52,43.77,77.09,85,91.45,36.61,12.75,70.31,18.69,70.31,47.28,0,19.28-18.54,30.6-54.84,30.6-43.06,0-66.73-20.28-72.75-28,4.08-3.2,10.15-10.83,10.15-23.55,0-17.79-12.49-32.31-35.7-32.31-19.63,0-36.23,16-40.4,37.08-31.54,25.8-66,42.52-114.78,42.52-48.06,0-73-25-73-78.2,11.27,3.43,40.61,7.55,60,7.55,81.39,0,136.86-37,136.86-111,0-39.83-35-81.65-104.12-81.65H1889c-91,0-141.92,57.62-164.17,121q-9.35-2.25-18.73-4.37a144.59,144.59,0,0,0,8.55-48.41c0-31.3-19.38-68.22-71.26-68.22-36.13,0-70.41,23.67-94.16,59.14,5.91-23.14,9.83-38.55,10.08-39.58,1.55-6.05-1-12.79-10.41-12.79h-53.24c-7.59,0-12.94,2.68-15.1,11.32-1.45,5.76-19.74,77.53-37.55,147.42-11.21,43.58-69.24,97.82-142.17,97.82-48.08,0-73-26.64-73-79.86,12.58,5,40.61,9.21,60,9.21,84.7,0,136.86-37,136.86-111,0-39.82-35-81.64-104.13-81.64h-.15c-102.43,0-165.18,79.56-175.81,169.77-4.42,37.5-36.07,89-70.38,89-16.72,0-26-10.5-26-28.32,0-15.4,10.84-53,22.71-100.21,4-15.78,10-39.86,16.72-66.53h55.69c8.29,0,13.15-3.37,15-11.13,2.67-11.16,7.56-30.64,9-36,1.79-7-2.25-12.27-10-12.27h-54.76s25.21-100.59,25.81-103.17c2.43-10.23-6.13-16.14-15.09-14.25,0,0-42.32,8.28-50.17,9.92s-14,5.93-16.87,17.3L1023.78,244h-44c-8.29,0-13.16,3.39-15,11.12q-4.38,18-8.94,36c-1.82,7,2.24,12.27,10,12.27H1009c-.3,1.23-15.57,59.32-27.92,111.33-5.82,25-25.29,83.55-57.17,83.55-19,0-27.09-9.61-27.09-30.22,0-32.45,31.94-113.69,31.94-150.55,0-49.24-26.42-77.77-80.54-77.77-34.11,0-69.48,22-84.47,41.36,0,0,4.55-15.83,6.1-21.91,1.66-6.43-1.78-12.74-10.22-12.74H706.67c-11.26,0-14.37,6-16,12.64-.66,2.65-19.73,77.52-38,149.4-12.52,49.22-42.94,90.34-75.47,90.34-16.72,0-24.17-10.49-24.17-28.32,0-15.4,9.95-53.4,21.82-100.57,14.45-57.43,27.2-104.72,28.56-110.24,1.78-7.08-1.39-13.25-10.51-13.25H539.61c-9.64,0-13.08,5.06-15.11,12.09,0,0-15,56.72-30.85,119.86-11.53,45.82-24.25,92.49-24.25,114.42,0,39.13,17.57,68.63,65.88,68.63,37.28,0,66.78-18.91,89.31-43-3.31,13-5.42,21.3-5.63,22.14-2,7.45.41,14,9.19,14h54.47c9.49,0,13.13-3.81,15.11-12.08,1.91-7.89,42.59-167.92,42.59-167.92,10.76-43,37.36-71.45,74.77-71.45,17.75,0,33.11,11.75,31.33,34.58-2,25.12-32.27,115.35-32.27,155,0,30,11.12,68.76,67.55,68.76,38.46,0,66.78-18.44,87.37-42.24,7.54,25.26,27.51,42.24,64.15,42.24,60.89,0,97.59-36.11,119.15-72.39,17.89,42.15,59.8,72.37,121.25,72.37,62.64,0,111.11-26.41,145.46-62.3l-10.71,42c-1.95,7.57,1.35,13.52,10.23,13.52h53.92c7.38,0,12.63-3.76,14.55-11.51.94-3.81,8.73-33.91,19.74-76.69,21-81.86,54.86-166.79,105.68-166.79,17.92,0,25.27,10,25.27,25.81a38.38,38.38,0,0,1-4,17.32c-24.63-4.9-44.45,7.26-44.45,33.56,0,17.14,18,32.71,42.37,32.71,18.59,0,34-4.56,46.23-12.81Q1696,400,1714,404.08a238.06,238.06,0,0,0-2.83,35.87c0,65.7,46.92,121.42,131,121.42,65.9,0,111.12-24.1,150.15-55,18.77,30.71,66.15,55.52,128.31,55.52,85.19,0,133.51-44.3,133.51-102.85,0-53-43.51-72.51-88.38-88.75-36.47-13.18-66.89-20.34-66.89-46.12,0-21.12,16.63-30.79,45.14-30.79a140,140,0,0,1,39.79,6.07c7.35,18.4,22.57,38.78,48.55,38.78,22,0,31.85-17.38,31.85-33.39,0-45.58-75.92-50.36-75.92-148.1,0-60.78,34.39-110.92,105.62-110.92,49.49,0,81.81,31.38,81.81,82,0,41.76-25.33,116.1-25.33,116.1h-43c-8.28,0-13.16,3.38-15,11.12q-4.36,18-9,36c-1.81,7,2.25,12.27,10,12.27h42s-43.46,160.26-43.46,189.41c0,39.13,22,68.62,70.38,68.62,68.35,0,111.07-44.42,129.64-109,1.44-5-1.39-9.06-6.45-9.06h-26.08c-5.2,0-8.22,3-9.54,8.05-5.89,22.93-20.49,47.05-49.23,47.05-16.72,0-26-10.49-26-28.32,0-15.39,10.19-51.44,22.73-100.2,6-23.22,16.61-66.54,16.61-66.54ZM1875,300.58c24.17,0,35.65,16.08,35.65,35.24,0,32.42-25.13,52.18-64.45,52.18-14.07,0-33.75-3.33-45.36-7.2C1805.73,351,1827.31,300.58,1875,300.58Zm-568.59,0c26.46,0,35.64,16.08,35.64,35.24,0,32.42-25.13,52.18-64.44,52.18-14.08,0-33.75-3.33-45.36-7.2C1237.12,351,1256.25,300.58,1306.42,300.58ZM260.41,0C87.94,0,1,123.66,1,226.78c0,62.43,23.64,118,74.34,138.67,8.31,3.41,15.76.12,18.17-9.08,1.67-6.37,5.64-22.44,7.41-29.14,2.44-9.1,1.49-12.29-5.22-20.23-14.62-17.24-24-39.57-24-71.19,0-91.74,68.64-173.87,178.73-173.87,97.49,0,151.05,59.57,151.05,139.12,0,104.67-46.32,193-115.09,193-38,0-66.41-31.41-57.3-69.93,10.91-46,32.05-95.61,32.05-128.81,0-29.71-16-54.5-49-54.5-38.82,0-70,40.16-70,94,0,34.27,11.58,57.45,11.58,57.45L107.08,490.05C93.21,548.76,105,620.74,106,628c.58,4.31,6.12,5.33,8.63,2.08,3.58-4.67,49.81-61.75,65.54-118.79,4.44-16.15,25.53-99.78,25.53-99.78,12.61,24.05,49.47,45.25,88.68,45.25,116.69,0,195.87-106.39,195.87-248.8C490.24,100.28,399,0,260.41,0Z\"\n                            transform=\"translate(-0.98)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.05 610.45\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>dribbble</title>\n                        <path\n                            d=\"M764,245.62a51.8,51.8,0,1,0-51.78-51.8A51.8,51.8,0,0,0,764,245.62Zm1709.12,177c-7.88-5.54-14-6.46-19,4.3-87,188.38-233.55,94.38-219,102.65,32.51-14.87,118-83.45,105.09-178.14-7.84-57.87-57.51-83.54-110.23-74.35-92,16.05-125.88,115.3-108.65,203.18,3,15.09,8.41,27.54,13.79,39.73-104,84.57-145.29-75.7-150-94.85-.18-1,80.3-68.11,102.68-228,23.47-167.54-30-198-84.63-197.09-101.13,1.76-128.46,213.06-91.75,389.17-3.07.8-17.38,8.72-40.38,9.61-16.54-52.06-87.25-97.7-105.75-80.11-46.31,44,11.23,130,51.72,136.74-24.32,149.8-176.43,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31C1747,40,1725.42.79,1676.55,2.73c-94,3.72-104.24,215.08-93.21,365.09-.55-3.69-5.78,18.23-44.31,29.13-9.11-50.58-90.56-101.35-109.73-76.94-35.89,45.68,26.31,127.14,55.77,132.82-24.32,149.8-176.42,112.7-148.11-75,49.54-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-104.23,215.09-93.21,365.1-.55-3.75-5.91,18.89-46,29.61-1.34-65.63-83.08-95.72-102.72-74.78-35,37.32,8,113.91,47.81,132.83-24.32,149.8-176.42,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-101.58,225.71-90.56,375.72-31,132.67-134.8,298.35-121.31-33.54,1.33-23.28,2.79-32.12-8.82-40.84-8.7-6.78-28.48-3.52-39.29-3.25-13.14.53-16.43,8.22-19.34,19.84-6.76,30-8,59.1-8.94,98.79-.64,18.57-2.13,27.23-9.28,52.55s-47.88,71.58-70.19,63.84c-30.94-10.64-20.79-98-15-158,4.83-47.43-10.64-68.73-50.28-76.48-23.21-4.84-37.31-4.09-61.48-11.71-22.86-7.21-28-50.44-76.78-36-26.67,7.89-9.52,64.39-15.93,106.26-31.51,206-97.07,211.64-127.48,111.58C432.25,133.3,334.89,1,277.91,1c-59.35,0-127.2,40.89-98.47,302.47-14-4.08-18.26-6.27-33.56-6.27C59.4,297.24.48,367.15.48,453.4S59.4,609.56,145.89,609.56c51.05,0,86.9-23.22,114.05-59.13,17.71,25.36,39.28,59.52,78.72,58,117.57-4.58,151.76-245.75,155.8-259.2,12.57,1.94,24.46,5.61,36.06,7.54,19.34,2.91,20.75,10.56,20.31,30-5.13,164,25.14,221.45,93.8,221.45,38.25,0,72.34-37.58,95.83-64.46C758,580,786,607.11,823.45,608.22c90.87,2.26,125.66-142.58,122.49-123.52-2.49,15,29.48,122.7,123,123.09,115.88.49,137.42-126.94,140-148.29.32-4.24.46-3.8,0,0l-.09,1.3c36.79-6.85,55.77-26.57,55.77-26.57s29.54,175.54,139,173.57c113.63-2.06,135.05-117.25,137.87-139.72.37-5.33.59-4.7,0,0,0,.22,0,.44,0,.66,43.7-15.89,55.2-31.85,55.2-31.85s23.47,172.05,139,173.56c102.91,1.34,141.05-104,141.27-148.15,17.36.18,49.46-10.3,48.71-10.89,0,0,37.7,150.43,143,158.15,49.42,3.63,86.5-27.81,107.63-42.15,49.67,40.22,215.06,91.6,319.49-85.45,14.74-25.42-17-55.43-22.51-59.35ZM141.72,551.16c-50.46,0-82.82-46.66-82.82-97s29.7-97,80.16-97c22.71,0,35.34,2.5,53,17.88,3.21,12.64,12.3,41.79,16.72,55,5.93,17.72,13,32.79,20.08,49.2-10.15,42.09-43.44,71.83-87.16,71.83Zm123-174.57c-2.1-3.34-1.66-1.29-4-4.45C251.42,347,233.6,290.82,231.53,227c-2.33-72.16,9.69-156.74,45.15-156.74,24,0,49.56,171.42-12,306.3ZM975.15,301.4c-5.69-42.82-6-233.71,39.84-228.45C1040.29,83.2,999,263.33,975.15,301.4Zm334.64,0c-5.69-42.82-6-233.71,39.84-228.45C1374.93,83.2,1333.58,263.33,1309.79,301.4Zm332,2.66c-5.69-42.82-6-233.72,39.84-228.46C1706.9,85.85,1665.55,266,1641.76,304.06ZM2008.27,61.77c41.89-4.34,40.17,178.63-43.93,294.14-10.85-41.75-27.48-279.8,43.93-294.14Zm176.1,393.71c-13.46-68,21.32-112.62,57.16-117.52,12.53-2,30.69,6.12,34.31,21.29,5.95,28.6-.86,71-81.09,124.84a109.85,109.85,0,0,1-10.37-28.61Z\"\n                            transform=\"translate(-0.48 0)\"\n                        />\n                    </svg>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our customizable, block-based build system makes creating your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center\">\n                        <div class=\"text-xs text-uppercase-expanded text-primary mb-2\">Application Features</div>\n                        <h2 class=\"mb-5\">We have a simple solution to a complex problem</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-green-soft text-green mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                            <h5>Components</h5>\n                            <p class=\"card-text small\">Our product is full of customized and extendable components.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-red-soft text-red mb-4\"><i-feather name=\"tool\"></i-feather></div>\n                            <h5>Utilities</h5>\n                            <p class=\"card-text small\">Powerful utility classes makes it easy to customize your product.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4\"><i-feather name=\"layout\"></i-feather></div>\n                            <h5>Layouts</h5>\n                            <p class=\"card-text small\">Our flex based layouts offer a beautifully reponsive approach.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\" data-aos=\"fade-up\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-purple-soft text-purple mb-4\"><i-feather name=\"book\"></i-feather></div>\n                            <h5>Documentation</h5>\n                            <p class=\"card-text small\">Our code is fully documented with instructions and usage examples.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-md-0\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-blue-soft text-blue mb-4\"><i-feather name=\"code\"></i-feather></div>\n                            <h5>Code Snippets</h5>\n                            <p class=\"card-text small\">Use code snippets to easily drop new components into your project.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-orange-soft text-orange mb-4\"><i-feather name=\"package\"></i-feather></div>\n                            <h5>Plugins</h5>\n                            <p class=\"card-text small\">We've implemented powerful third party plugins for added functionality.</p>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 align-items-center justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"badge bg-primary-soft text-primary badge-marketing rounded-pill mb-3\">Get Started!</div>\n                    <div class=\"mb-5\">\n                        <h2>Here's What You Get</h2>\n                        <p class=\"lead\">When you purchase this UI Kit, you get access to a robust suite of powerful tools and components to help you build your next landing page quickly and easily.</p>\n                    </div>\n                    <div class=\"row gx-5\">\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Landing Pages</h6>\n                            <p class=\"mb-2 small\">We've crafted landing page examples for many popular business and product types.</p>\n                            <a class=\"small text-arrow-icon\" href=\"#!\">Learn More<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Page Examples</h6>\n                            <p class=\"mb-2 small mb-0\">Use our pre-built page examples to quickly create inner pages to your website.</p>\n                            <a class=\"small text-arrow-icon\" href=\"#!\">Learn More<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                    </div>\n                    <div class=\"row gx-5\">\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Layouts</h6>\n                            <p class=\"mb-2 small mb-0\">Our flex box based layout options make your site beautifully responsive and adaptable to any device.</p>\n                            <a class=\"small text-arrow-icon\" href=\"#!\">Learn More<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Modular Sections</h6>\n                            <p class=\"small mb-0\">All of the sections on each page are modular, so you can drop them into an existing page, or start with a new one!</p>\n                            <a class=\"small text-arrow-icon\" href=\"#!\">Learn More<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-9 col-lg-6\" data-aos=\"slide-left\">\n                    <div class=\"mb-4\">\n                        <div class=\"content-skewed content-skewed-left\"><img class=\"img-fluid content-skewed-item shadow-lg rounded-3\" src=\"assets/img/demo/app-desktop-demo-screenshot.jpg\" /></div>\n                    </div>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pt-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"text-center mb-5\">\n                <h2>Simple Pricing</h2>\n                <p class=\"lead\">Easy pricing means no suprises.</p>\n            </div>\n            <div class=\"row gx-5 z-1\">\n                <div class=\"col-lg-4 mb-5 mb-lg-n10\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-light text-dark rounded-pill badge-marketing badge-sm\">Free</div>\n                                <div class=\"pricing-price\"><sup>$</sup>0<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">1 user</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Community support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-circle text-gray-200\"></i></span>Style customizer\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-circle text-gray-200\"></i></span>Custom components\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-circle text-gray-200\"></i></span>Expanded utilities\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-circle text-gray-200\"></i></span>Third-party integration\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-circle text-gray-200\"></i></span>Layout options\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-n10\" data-aos=\"fade-up\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-primary-soft rounded-pill badge-marketing badge-sm text-primary\">Standard</div>\n                                <div class=\"pricing-price\"><sup>$</sup>19<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Up to 15 users</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Email and live chat support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Style customizer</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Custom components</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Expanded utilities</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Third-party integration</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><i class=\"far fa-check-circle text-teal\"></i></span><span class=\"text-dark\">Layout options</span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-lg-n10\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-light text-dark rounded-pill badge-marketing badge-sm\">Enterprise</div>\n                                <p class=\"card-text py-10\">We offer discounts for larger organizations. Contact us to inquire about enterprise level plans!</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pb-10 pt-15 bg-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-10 mt-5\">\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What is SB UI Kit Pro?</h5>\n                            <p class=\"text-white-50\">SB UI Kit Pro is a fully coded, responsive, Bootstrap based UI toolkit for developers.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What can I build with SB UI Kit Pro?</h5>\n                            <p class=\"text-white-50\">Build anything you want to using this UI kit! It is flexible, multipurpose, and full of tools for you to use during development.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">Do I get free updates?</h5>\n                            <p class=\"text-white-50\">All of Start Bootstrap's premium products will come with updates for feature additions, bugfixes, and other small updates.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What frameworks does it integrate with?</h5>\n                            <p class=\"text-white-50\">Our Angular based version of SB UI Kit Pro is built to integrate with the Angular framework!</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center text-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"badge bg-transparent-light rounded-pill badge-marketing mb-4\">Get Started</div>\n                    <h2 class=\"text-white\">Save time with SB UI Kit Pro</h2>\n                    <p class=\"lead text-white-50 mb-5\">Start Bootstrap's premium UI Kit beautifully and intuitively extends the Bootstrap framework making it easy to build your next project!</p>\n                    <a class=\"btn btn-teal fw-500\" [routerLink]=\"\">Buy Now!</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-img-cover overlay overlay-primary overlay-80 pt-15\" backgroundImage='url(\"https://source.unsplash.com/e3OUQGT9bWU/1400x900\")' borderType=\"rounded\" borderClasses=\"text-white\"><div style=\"height: 35vh\"></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pb-10 bg-white\" borderType=\"waves\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-6 mt-n10 mb-5 mb-lg-0 z-1\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-primary text-white flex-shrink-0\"><i-feather name=\"edit-3\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-primary\">Work smarter, not harder</h5>\n                                    <p class=\"card-text text-gray-600\">Learn more about how our product can save you time and effort in the long run!</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-6 mt-0 mt-lg-n10 z-1\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-secondary text-white flex-shrink-0\"><i-feather name=\"code\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-secondary\">Built for developers</h5>\n                                    <p class=\"card-text text-gray-600\">Our components, utilities, and layouts are built with developers in mind.</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n            </div>\n            <div class=\"row gx-5 align-items-center\">\n                <div class=\"col-lg-6\">\n                    <h4>Get the latest news</h4>\n                    <p class=\"lead text-gray-500 mb-0\">Stay in the loop with the latest updates and features added to our application!</p>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"input-group mb-2\">\n                        <input class=\"form-control form-control-solid\" type=\"text\" placeholder=\"youremail@example.com\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" />\n                        <div class=\"input-group-append\"><button class=\"btn btn-primary\" id=\"button-addon2\" type=\"button\">Sign up</button></div>\n                    </div>\n                    <div class=\"small text-gray-500\">You can unsubscribe at any time.</div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 9841:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/directory/directory.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay page-header-ui-dark\" borderType=\"angled\" borderClasses=\"text-light\" backgroundImage='url(\"https://source.unsplash.com/hrlvr2ZlUNk/1500x700\")'\n        ><div class=\"page-header-ui-content position-relative\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Find the best businesses in town</h1>\n                        <p class=\"page-header-ui-text mb-5\">Search for restaurants, contractors, and other local businesses in your area to find out which ones are the best!</p>\n                    </div>\n                </div>\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-6 col-lg-8 text-center\">\n                        <form class=\"row row-cols-1 row-cols-md-auto g-3 align-items-center\">\n                            <div class=\"col flex-grow-1\"><label class=\"sr-only\" for=\"inputEmail\">Find local businesses...</label><input class=\"form-control form-control-solid\" id=\"inputEmail\" type=\"text\" placeholder=\"Find local businesses...\" /></div>\n                            <div class=\"col\"><button class=\"btn btn-teal fw-500\" type=\"submit\">Search</button></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"angled\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"mb-5 text-center\">\n                        <div class=\"text-xs text-uppercase-expanded text-primary mb-2\">Browse Businesses</div>\n                        <p class=\"lead mb-0\">Not sure what to search for? Browse some of the most popular categories.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Yr4n8O_3UPc/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Restaurants</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/YbGMa1Jz1yY/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Dry Cleaning</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Cl-OpYWFFm0/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Painters</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/E285pJbC4uE/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Medical</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5 mb-lg-0\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/CQfNt66ttZM/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Gyms</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5 mb-lg-0\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/tNALoIZhqVM/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Coffee</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3 mb-5 mb-md-0\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/r3XvSBEQQLo/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Events</h6></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-lg-4 col-xl-3\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/WCm4dFvZnMM/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\"><h6 class=\"card-title mb-0\">Breweries</h6></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pt-5 pb-10 bg-white\" borderType=\"angled\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"card mt-n15 mb-10 z-1\">\n                <div class=\"card-body p-5\">\n                    <div class=\"row gx-5 align-items-center\">\n                        <div class=\"col-lg-6\">\n                            <h4>Get the latest news</h4>\n                            <p class=\"lead text-gray-500 mb-0\">Stay in the loop with the latest updates and features added to our application!</p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"input-group mb-2\">\n                                <input class=\"form-control form-control-solid\" type=\"text\" placeholder=\"youremail@example.com\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" />\n                                <div class=\"input-group-append\"><button class=\"btn btn-primary\" id=\"button-addon2\" type=\"button\">Sign up</button></div>\n                            </div>\n                            <div class=\"small text-gray-500\">You can unsubscribe at any time.</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"mb-5 text-center\">\n                        <div class=\"text-xs text-uppercase-expanded text-primary mb-2\">New Businesses</div>\n                        <p class=\"lead mb-0\">Here are some of the most popular new businesses in your area.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/E6HjQaB7UEA/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\">\n                            <h6 class=\"card-title mb-0\">The Bamboo Ranch</h6>\n                            <div class=\"text-yellow\"><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star-half-alt\"]'></fa-icon></div>\n                            <div class=\"small mb-2\">(12 Reviews)</div>\n                            <div class=\"small\">Upper West Ceon, Gram</div>\n                        </div>\n                        <div class=\"card-footer text-center text-xs\"><fa-icon class=\"me-1\" [icon]='[\"fas\", \"store-alt\"]'></fa-icon>Opened 2 weeks ago</div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/ODNxWmNja2U/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\">\n                            <h6 class=\"card-title mb-0\">Lakeside Oyster</h6>\n                            <div class=\"text-yellow\"><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star-half-alt\"]'></fa-icon></div>\n                            <div class=\"small mb-2\">(8 Reviews)</div>\n                            <div class=\"small\">East Fom, Kugan</div>\n                        </div>\n                        <div class=\"card-footer text-center text-xs\"><fa-icon class=\"me-1\" [icon]='[\"fas\", \"store-alt\"]'></fa-icon>Opened 1 months ago</div></a\n                    >\n                </div>\n                <div class=\"col-lg-4\">\n                    <a class=\"card lift\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/sWEpcc0Rm0U/800x500\" alt=\"...\" />\n                        <div class=\"card-body text-center py-3\">\n                            <h6 class=\"card-title mb-0\">Wild Junction</h6>\n                            <div class=\"text-yellow\"><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star-half-alt\"]'></fa-icon><i class=\"far fa-star\"></i></div>\n                            <div class=\"small mb-2\">(29 Reviews)</div>\n                            <div class=\"small\">Shotles Wood, Drada</div>\n                        </div>\n                        <div class=\"card-footer text-center text-xs\"><fa-icon class=\"me-1\" [icon]='[\"fas\", \"store-alt\"]'></fa-icon>Opened 2 months ago</div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 89043:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/graphic-signup/graphic-signup.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-primary footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-white page-header-ui-light py-lg-5\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 align-items-center\">\n                    <div class=\"col-lg-7\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                        <form class=\"row row-cols-1 row-cols-md-auto g-3 align-items-center mb-3\">\n                            <div class=\"col flex-grow-1\"><label class=\"sr-only\" for=\"inputEmail\">Enter your email...</label><input class=\"form-control form-control-solid w-100\" id=\"inputEmail\" type=\"email\" placeholder=\"Enter your email...\" /></div>\n                            <div class=\"col\"><button class=\"btn btn-primary fw-500\" type=\"submit\">Sign Up</button></div>\n                        </form>\n                        <p class=\"page-header-ui-text small mb-0\">By signing up, you agree to our <a href=\"#!\">terms of service</a></p>\n                    </div>\n                    <div class=\"col-lg-5 d-none d-lg-block\"><img class=\"img-fluid ps-xl-5\" src=\"assets/img/illustrations/creativity.svg\" /></div>\n                </div>\n            </div></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-primary\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our modular, block-based build system makes building your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">This UI Kit is build mobile-first, meaning it is will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 35679:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/graphic/graphic.component.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-light page-header-ui-light py-lg-5\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 align-items-center\">\n                    <div class=\"col-lg-7\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                        <a class=\"btn btn-primary fw-500 me-2\" href=\"javascript:void(0);\">Get Started<fa-icon class=\"ms-1\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"btn btn-primary-soft text-primary fw-500\" href=\"javascript:void(0);\">Learn More</a>\n                    </div>\n                    <div class=\"col-lg-5 d-none d-lg-block\"><img class=\"img-fluid ps-xl-5\" src=\"assets/img/illustrations/creativity.svg\" /></div>\n                </div>\n            </div></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our modular, block-based build system makes building your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">This UI Kit is build mobile-first, meaning it is will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 62907:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/home/home.component.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-light footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-light fixed-top\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-white page-header-ui-light\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-5\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 align-items-center\">\n                    <div class=\"col-lg-6\" data-aos=\"fade-up\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster with SB UI Kit Pro</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                        <a class=\"btn btn-lg btn-primary fw-500 me-3\" routerLink=\"/landings/multipurpose\">View Demo<i-feather class=\"ms-2\" name=\"arrow-right\"></i-feather></a><a class=\"btn btn-lg btn-primary-soft text-primary fw-500\" href=\"https://docs.startbootstrap.com/sb-ui-kit-pro-angular\">Documentation</a>\n                    </div>\n                    <div class=\"col-lg-6 d-none d-lg-block\" data-aos=\"fade-up\" data-aos-delay=\"50\"><img class=\"img-fluid\" src=\"assets/img/illustrations/programming.svg\" /></div>\n                </div>\n            </div></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"text-center mb-10\">\n                        <div class=\"badge rounded-pill bg-primary-soft text-primary badge-marketing mb-3\">12 Demos!</div>\n                        <h2>Landing Pages</h2>\n                        <p class=\"lead\">When you purchase this UI Kit, you get access to a robust suite of powerful landing page demos to help you get started.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 1 - Multipurpose</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/multipurpose\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-multipurpose.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 2 - Mobile App</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/mobile-app\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-app-mobile.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 3 - Desktop App</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/desktop-app\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-app-desktop.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 4 - Agency</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/agency\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-agency.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 5 - Lead Capture</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/lead-capture\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-lead-capture.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 6 - Press</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/press\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-press.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 7 - Directory</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/directory\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-directory.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 8 - Rental</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/rental\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-rental.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 9 - Real Estate</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/real-estate\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-real-estate.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 10 - Classifieds</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/classifieds\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-classifieds.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 11 - Resume</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/resume\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-resume.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 12 - Portfolio</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/portfolio\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-portfolio.png\" /></a>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"text-center mb-10\">\n                        <div class=\"badge rounded-pill bg-primary-soft text-primary badge-marketing mb-3\">19 Pages!</div>\n                        <h2>Inner Pages</h2>\n                        <p class=\"lead\">A group of pre-build inner page demos are available to get your started when building out the rest of your project!</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Company Pages</h6>\n                    <div class=\"list-group small shadow mb-5\">\n                        <a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/basic-page\">Basic Page<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/about\">About Page<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/pricing\">Pricing Page<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/contact\">Contact Page<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a\n                        ><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/terms\">Terms Page<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                    </div>\n                    <h6 class=\"mb-3\">Careers Pages</h6>\n                    <div class=\"list-group small shadow\">\n                        <a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/careers-list\">Careers List<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/position-details\">Position Details<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Support Pages</h6>\n                    <div class=\"list-group small shadow mb-5\">\n                        <a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/help-center\">Help Center<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/knowledgebase\">Knowledgebase<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/message-center\">Message Center<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/support-ticket\">Support Ticket<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                    </div>\n                    <h6 class=\"mb-3\">Blog Pages</h6>\n                    <div class=\"list-group small shadow\">\n                        <a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/overview\">Overview<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/post\">Post<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/archive\">Archive<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Portfolio Pages</h6>\n                    <div class=\"list-group small shadow\">\n                        <a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/grid\">Grid<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/large-grid\">Large Grid<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/masonry\">Masonry<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/case-study\">Case Study<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a\n                        ><a class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\" routerLink=\"/pages/project\">Project<fa-icon class=\"fa-xs text-gray-400\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                    </div>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"text-center mb-10\">\n                        <div class=\"badge rounded-pill bg-primary-soft text-primary badge-marketing mb-3\">Customizable!</div>\n                        <h2>Header Examples</h2>\n                        <p class=\"lead\">Build your own landing page by starting with one of these customizable header examples! You can customize the colors, content, borders, and more!</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 1 - Basic</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/basic\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-basic.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 2 - Basic (Signup)</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/basic-signup\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-basic-signup.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 3 - Graphic</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/graphic\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-graphic.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 4 - Graphic (Signup)</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/graphic-signup\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-graphic-signup.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 5 - Inner Page</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/inner-page\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-inner-page.png\" /></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <h6 class=\"mb-3\">Demo 6 - Nav Only</h6>\n                    <a class=\"d-block rounded-3 lift lift-lg\" routerLink=\"/landings/nav-only\"><img class=\"img-fluid rounded-3\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/header-nav-only.png\" /></a>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"text-center mb-10\">\n                        <h2>Documentation</h2>\n                        <p class=\"lead\">Comprehensive documentation includes usage instructions, component reference, and utility class usage instructions</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 text-center mb-5\">\n                    <div class=\"display-1 fw-bold text-gray-400\">70+</div>\n                    <div class=\"h5\">Custom/Extended Components</div>\n                    <p>We've extended and restyled Bootstrap's default components, and built a suite of new custom components.</p>\n                </div>\n                <div class=\"col-lg-4 text-center mb-5\">\n                    <div class=\"display-1 fw-bold text-gray-400\">35+</div>\n                    <div class=\"h5\">Pre-Built Page Examples</div>\n                    <p>Our pre-built page examples are a perfect way to get inspired for creating new pages and views.</p>\n                </div>\n                <div class=\"col-lg-4 text-center mb-5\">\n                    <div class=\"display-1 fw-bold text-gray-400\">100+</div>\n                    <div class=\"h5\">Custom/Extended Utilites</div>\n                    <p>We've extended and created new utility classes to give you more control over your content with minimal custom CSS.</p>\n                </div>\n            </div>\n            <div class=\"text-center\"><a class=\"btn btn-primary fw-500\" href=\"https://docs.startbootstrap.com/sb-ui-kit-pro-angular\">View Documentation</a></div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 73543:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/inner-page/inner-page.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Inner Page</h1>\n                        <p class=\"page-header-ui-text mb-0\">Create inner pages within your project</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our modular, block-based build system makes building your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">This UI Kit is build mobile-first, meaning it is will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 80915:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/landings/landings.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>landings</p>\n");

/***/ }),

/***/ 14989:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/lead-capture/lead-capture.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-white footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-repeat bg-secondary page-header-ui-dark\" borderType=\"angled\" borderClasses=\"text-wite\" backgroundImage='url(\"https://www.transparenttextures.com/patterns/inspiration-geometry.png\")'\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 align-items-center\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"badge badge-marketing rounded-pill bg-secondary-soft text-secondary mb-3\">Start today!</div>\n                        <h1 class=\"page-header-ui-title\">Get more leads, more customers, and more revenue</h1>\n                        <p class=\"page-header-ui-text\">Stop losing leads because of a non-optimized landing page. Start converting your users to paying customers and winning more sales today with a new landing page!</p>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"card rounded-3 text-dark\">\n                            <div class=\"card-header py-4\">Sign up and get our free e-book!</div>\n                            <div class=\"card-body\">\n                                <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n                                    <div class=\"row\">\n                                        <div class=\"mb-3 col-md-6\"><label class=\"small text-gray-600\" for=\"leadCapFirstName\">First Name</label><input class=\"form-control\" id=\"leadCapFirstName\" data-cy=\"firstNameInput\" type=\"text\" formControlName=\"firstName\" [class.is-valid]=\"firstNameControlValid\" [class.is-invalid]=\"firstNameControlInvalid\" /></div>\n                                        <div class=\"invalid-feedback\" *ngIf='firstNameControl.hasError(\"required\")'>First Name required.</div>\n                                        <div class=\"mb-3 col-md-6\"><label class=\"small text-gray-600\" for=\"leadCapLastName\">Last Name</label><input class=\"form-control\" id=\"leadCapLastName\" data-cy=\"lastNameInput\" type=\"text\" formControlName=\"lastName\" [class.is-valid]=\"lastNameControlValid\" [class.is-invalid]=\"lastNameControlInvalid\" /></div>\n                                        <div class=\"invalid-feedback\" *ngIf='lastNameControl.hasError(\"required\")'>Last Name required.</div>\n                                    </div>\n                                    <div class=\"mb-3\">\n                                        <label class=\"small text-gray-600\" for=\"leadCapEmail\">Email address</label><input class=\"form-control\" id=\"leadCapEmail\" data-cy=\"emailInput\" type=\"email\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                        <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                        <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                                    </div>\n                                    <div class=\"mb-0\">\n                                        <label class=\"small text-gray-600\" for=\"leadCapCompany\">Company or Organization</label><input class=\"form-control\" id=\"leadCapCompany\" data-cy=\"companyInput\" type=\"text\" formControlName=\"company\" [class.is-valid]=\"companyControlValid\" [class.is-invalid]=\"companyControlInvalid\" />\n                                        <div class=\"invalid-feedback\" *ngIf='companyControl.hasError(\"required\")'>Company or Organization required.</div>\n                                    </div>\n                                    <div class=\"d-grid\"><button class=\"btn btn-primary fw-500 mt-4\" data-cy=\"submitButton\" type=\"submit\" [disabled]=\"signupForm.invalid\">Download Now</button></div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-template #confirmationModal let-modal\n            ><div class=\"modal-header\">\n                <h5 class=\"modal-title\">Sing Up Form Data</h5>\n                <div class=\"btn-close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></div>\n            </div>\n            <div class=\"modal-body\">\n                Wired up and ready to go. Just add a backend. <br /><br />\n                firstName: <code>{{signupForm.value.firstName}}</code>\n                <br />\n                lastName: <code>{{signupForm.value.lastName}}</code>\n                <br />\n                email: <code>{{signupForm.value.email}}</code>\n                <br />\n                company: <code>{{signupForm.value.company}}</code> <br />\n            </div>\n            <div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"modal.close()\">Close</button></div></ng-template\n        ></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-5 bg-white\" borderType=\"angled\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded text-end mb-5 text-gray-300\">Here's where you can find us</div>\n            <div class=\"row gx-5 brands text-gray-500 align-items-center\">\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500.01 816.05\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>google</title>\n                        <path d=\"M307.89.07h22.23c77.18,1.68,153.1,32.72,207.63,87.67-20.13,20.55-40.69,40.27-60.4,60.82-30.62-27.68-67.53-49.08-107.8-56.63C310,79.35,245.81,90.68,195.89,124.65c-54.53,35.66-91.44,96.06-99.41,160.66-8.81,63.76,9.22,130.87,50.75,180.37,39.85,48.23,100.67,78.44,163.59,80.53,58.73,3.36,120-14.68,162.75-55.79,33.56-28.94,49.08-73,54.11-115.77-69.63,0-139.26.42-208.89,0V288.24H612c15.1,92.7-6.71,197.15-77.18,263.43-47,47-112,74.66-178.28,80.11-64.17,6.3-130.45-5.87-187.5-36.91C100.67,558.38,46.14,496.72,19.3,424.15-5.87,357.45-6.29,282,17.2,214.84,38.59,153.6,79.7,99.48,132.55,61.73,183.31,24.4,245,3.85,307.89.07Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1989.93,21.88h89.77v599c-29.78,0-60,.42-89.77-.42.42-199.25,0-398.91,0-598.58Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M811.66,229.52C867,219,927,230.78,972.73,263.91c41.53,29.37,70.47,75.51,79.28,125.84,11.33,58.31-2.93,122.07-40.68,168.21-40.69,51.59-107.39,79.28-172.4,75.08-59.57-3.35-117.45-33.14-152.69-81.79-39.85-53.69-49.5-127.52-27.68-190.44,21.81-67.53,83.47-119.13,153.1-131.29m12.58,79.7a112.72,112.72,0,0,0-58.72,37.33c-40.69,48.66-38.17,127.93,6.71,173.24,25.59,26,64.18,38.17,99.83,31,33.14-5.88,62.08-28.11,78-57.47,27.69-49.92,19.72-118.71-22.65-157.72-27.26-25.17-67.11-35.65-103.19-26.42Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1256.29,229.52c63.34-12.17,132.55,5.45,180,49.91,77.18,69.22,85.57,198.83,19.72,278.53-39.85,50.33-104.45,78-168.21,75.08-60.82-1.68-120.8-31.88-156.88-81.79-40.69-54.95-49.49-130.46-26.42-194.63,23.07-65.44,83.47-115.36,151.84-127.1m12.59,79.7a114.63,114.63,0,0,0-58.73,36.91c-40.27,47.82-38.59,125.84,4.62,171.56,25.58,27.26,65.43,40.69,102.34,33.14,32.72-6.29,62.08-28.11,78-57.47,27.27-50.33,19.3-119.13-23.49-158.14-27.26-25.16-67.11-35.23-102.76-26Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M1633.39,253.85c48.24-30.2,112.42-38.59,164.43-12.59,16.36,7.13,29.78,19.3,42.78,31.46.42-11.32,0-23.07.42-34.81,28.11.42,56.21,0,84.74.42v370c-.42,55.79-14.69,114.94-55,155.62-44,44.89-111.58,58.73-172.4,49.5-65-9.65-121.65-57-146.82-117,25.17-12.16,51.6-21.81,77.6-33.14,14.69,34.4,44.47,63.76,81.8,70.47s80.54-2.51,104.87-33.55c26-31.88,26-75.51,24.74-114.52-19.29,18.88-41.52,35.66-68.37,42-58.3,16.36-122.48-3.78-167.36-43.21-45.31-39.43-72.15-100.25-69.64-160.65,1.26-68.37,39.85-134.23,98.16-169.88m86.83,53.69c-25.59,4.19-49.5,18.46-65.86,38.17-39.43,47-39.43,122.06.42,168.2,22.65,27.27,59.15,42.37,94.38,38.6,33.14-3.36,63.76-24.33,80.12-53.28,27.68-49.07,23.07-115.77-14.26-158.55-23.07-26.43-60-39.43-94.8-33.14Z\" transform=\"translate(0.01 -0.07)\" />\n                        <path d=\"M2187.5,275.24c50.34-47,127.94-62.92,192.53-38.17,61.25,23.07,100.26,81.37,120,141.36-91,37.75-181.63,75.08-272.65,112.83,12.58,23.91,31.88,45.72,57.88,54.53,36.5,13,80.12,8.39,110.74-15.94,12.17-9.22,21.82-21.39,31-33.13,23.07,15.52,46.14,30.62,69.21,46.14-32.71,49.07-87.66,83.47-146.81,88.92-65.43,8-135.06-17.19-177.43-68.37-69.63-80.54-62.92-215.6,15.52-288.17m44.88,77.6c-14.26,20.55-20.13,45.72-19.71,70.47q91.23-37.76,182.46-75.92c-10.06-23.49-34.39-37.75-59.14-41.53C2296.14,298.73,2254.61,320.12,2232.38,352.84Z\" transform=\"translate(0.01 -0.07)\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.17 585\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>product-hunt</title>\n                        <g id=\"Page-1\">\n                            <g id=\"product-hunt-logo-horizontal-orange\">\n                                <path d=\"M585.54,292.5C585.54,454.11,454.64,585,293,585S.54,454.11.54,292.5,131.43,0,293,0s292.5,130.89,292.5,292.5m-253.5,0H249.16V204.75H332a43.88,43.88,0,0,1,0,87.75m0-146.25H190.66v292.5h58.5V351H332a102.38,102.38,0,0,0,0-204.75\" transform=\"translate(-0.54)\" />\n                                <path d=\"M892.91,256.67c0-16.09-12.43-25.84-28.52-25.84H821.24v51.43h43.15C880.48,282.26,892.91,272.51,892.91,256.67ZM780.54,390V195h89.7c41.68,0,64.35,28,64.35,61.67,0,33.39-22.91,61.42-64.35,61.42H821.49V390Z\" id=\"Fill-5\" transform=\"translate(-0.54)\" />\n                                <path d=\"M959.21,390V247.89h36.56v18.77c10-11.94,27.06-22.18,44.36-22.18v35.59a55.68,55.68,0,0,0-10-.73c-12.19,0-28.28,6.82-34.13,15.84v95.06h-36.8Z\" id=\"Fill-7\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1162.74,317.12c0-21.45-12.68-40.22-35.59-40.22-22.67,0-35.34,18.77-35.34,40.22,0,21.94,12.67,40.46,35.34,40.46,22.91,0,35.59-18.77,35.59-40.46m-109,0c0-39.24,27.55-72.64,73.13-72.64,46.07,0,73.61,33.4,73.61,72.64S1173,390,1126.91,390c-45.58,0-73.13-33.64-73.13-72.88\" id=\"Fill-9\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1323.37,341.74v-49c-6.09-9.26-19.26-15.84-31.2-15.84-21,0-35.34,16.33-35.34,40.22,0,24.13,14.38,40.46,35.34,40.46,11.94,0,25.11-6.58,31.2-15.84Zm0,48.26V368.79c-11,13.9-25.84,21.21-42.9,21.21-34.86,0-61.43-26.33-61.43-72.88,0-45.09,26.09-72.64,61.43-72.64a52.84,52.84,0,0,1,42.9,21.21V195h36.81V390Z\" id=\"Fill-11\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1489.85,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-13\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1553.71,317.12c0-42.41,31-72.64,73.62-72.64,28.51,0,45.58,12.43,54.84,25.11L1658.28,292c-6.58-9.75-16.57-14.87-29.25-14.87-22.18,0-37.54,16.09-37.54,40.22s15.6,40.47,37.54,40.47a34.8,34.8,0,0,0,29.25-15.12l23.89,22.43c-9.26,12.67-26.33,25.35-54.84,25.35-42.66-.49-73.62-30.71-73.62-73.37\" id=\"Fill-15\" transform=\"translate(-0.54)\" />\n                                <path d=\"M1713.61,351.73V279.58H1690.7V247.65h22.91V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-17\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2011.72,390V305.91h-90.43V390h-40.71V195h40.71v75.32h90.43V195h41.19V390Z\" id=\"Fill-19\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2183.32,390V369a66.28,66.28,0,0,1-48.75,21c-30.47,0-44.85-16.58-44.85-43.63V247.89h36.56V332c0,19.25,10,25.59,25.6,25.59,14.13,0,25.35-7.8,31.68-15.84V247.89h36.57V390Z\" id=\"Fill-21\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2349.56,390V302.74c0-19.26-10-25.84-25.6-25.84-14.38,0-25.35,8-31.68,16.09v97h-36.57V247.89h36.57v17.8c9-10.24,26.08-21.21,48.5-21.21,30.71,0,45.34,17.31,45.34,44.12V390Z\" id=\"Fill-23\" transform=\"translate(-0.54)\" />\n                                <path d=\"M2430,351.73V279.58h-22.91V247.65H2430V209.87h36.57v38h28v31.93h-28v62.4c0,9,4.63,15.6,12.67,15.6,5.36,0,10.73-1.95,12.68-4.38l7.8,27.78c-5.37,4.88-15.12,9-30.47,9-25.84-.24-39.25-13.4-39.25-38.51\" id=\"Fill-25\" transform=\"translate(-0.54)\" />\n                            </g>\n                        </g>\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-lg-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 1701.12 416.6\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>mailchimp</title>\n                        <path\n                            d=\"M477.52,202.2Zm1143.4,103.7h.6c34.4,0,58.7-23.9,58.9-58,.1-16.9-4.8-32.4-13.8-43.6-9.5-11.8-22.8-18.1-38.5-18.3h-.3c-21.2,0-40.8,16.1-60.1,49.1l-1.5,2.6-1-2.9c-4.9-14.2-9.2-26-11.8-33-1.8-4.9-2.6-7.1-2.8-7.9-.9-3.6-4-5.8-8-5.8a14.14,14.14,0,0,0-7.6,2.4,8.84,8.84,0,0,0-4.3,6l-.1.4c-19.3,60.2-35.2,89.4-48.7,89.4a5.94,5.94,0,0,1-4.6-1.9c-3.5-3.9-2.7-13.2-1.5-26,.9-9.4,1.9-20.1,1.5-31.4-.8-21.8-12.7-34.9-31.9-35-24.4,0-40.1,25.9-47.4,41.4l-2.2,4.6-.5-5.1c-1.8-19.1-8.2-42-28.5-42.1-23.7,0-41.7,27.7-52.7,51l-2.9,6.2.3-6.9c1.3-31.1,2.4-49.4,3.2-54.5s.4-8.5-1.3-10.5c-1.6-1.8-4.6-2.5-8.9-2.2-7.6.5-11.4,5.1-17.3,20.5-9.6,25.4-33.9,84.4-53.4,84.4a11.58,11.58,0,0,1-9.2-3.9c-8.2-9.3-4.9-34.6-.4-69.6l.3-2.6c2.1-16.6-1.5-20.1-10.5-21.7a12.41,12.41,0,0,0-2.7-.3c-7.2,0-10.5,6.9-17.2,26-11.9,34-27.3,69.8-45.2,69.8a13.55,13.55,0,0,1-2-.2c-9.5-1.6-9.3-15.7-9-33.6.1-9.7.3-20.6-1.2-30.5-2.7-17.8-13.1-28.8-27.3-29-28.3,0-47.3,36.2-56.2,57.8l-2,4.9-.7-5.2c-1.7-13.9-2.9-27.8-3.4-41.7v-.5l.3-.4c52.9-66.6,76.6-114.7,77-155.8C1124.62,16,1112.52.2,1092,0c-15,0-50.7,12.5-63.1,128.3a649.91,649.91,0,0,0-3.7,65.4v.4l-.2.3c-24.2,35-75.9,95.3-126.4,95.3-45.7,0-82.2-37-82.2-102.2,0-87.5,61.9-141.2,108.5-141.2h.4c10.1.1,18.8,2.9,25.1,8.2a27.68,27.68,0,0,1,9.9,22.2c-.1,12.1-4,18.3-7.8,24.3-1,1.5-1.9,3.1-2.8,4.7s-1.7,4-.5,6.1,4.4,3.4,8.2,3.4c11.1,0,27.9-16.1,28-40.2.2-25.3-21.1-51.4-59.2-51.4C868.62,23.6,791,86.9,791,189.4c0,72.5,45.5,122.7,107.1,122.7,43.7,0,87-31.3,125.2-83.6l2.3-3.2.2,3.9c.8,19.1,2.2,34.2,3.2,45.2.7,7.1,1.1,12.2,1.1,15-.1,6.2,1,10.5,3.1,13.1s5.5,3.9,10.6,3.9c8.6,0,10.3-5.9,13.7-20.3l1-4.1c4.2-17.5,19.9-74.7,43.4-74.7a11.82,11.82,0,0,1,8.9,3.4c5.2,5.5,4.6,16.8,4,29.9-.4,8.2-.8,16.6,0,24.8,2.2,22.2,11.8,33,29.3,33.2,18,0,36.7-19.3,46.6-37.3l1.9-3.4.7,3.8c1.8,9.6,10,41.2,35.6,41.2,23.2,0,43.1-24.4,64.8-74.6l2.9-6.6-.2,7.2c-.5,19-1.5,42.3-1.5,60.2,0,13.9,1.4,19.2,7.8,19.2l1.5.1c6.2,0,10.3-3.7,12.4-11,16.4-57.2,30.6-83.8,44.6-83.8,13.7.1,15,25.2,16.1,69.7l.1,3.1c.3,15.5.9,22.4,10.5,22.5,7.3,0,9.1-5.8,12.9-19.9.7-2.7,1.5-5.7,2.4-8.9,13.2-45.9,24.2-64.7,37.9-64.7,11.7.1,12.3,12.1,12.6,16.1.5,8.5-.4,17.4-1.3,26-.8,8-1.6,16.2-1.3,23.9.7,18,10.6,27.9,27.7,28.1,22.3,0,42.3-26,59.9-77.4l1.2-3.6,1.4,3.5c3.2,8.1,7.4,19,11.2,32l.1.5-.2.5c-17,37.8-29.1,80-29.2,102.5-.2,29.7,13.2,48.9,34.2,49.1h.4c11.4,0,38-4.6,38.6-47,.2-17.4-3.9-42-12.2-73.1l-1-3.6,3.1,2a62.44,62.44,0,0,0,34.6,11ZM1047.22,162c.5-10.6,1.4-21,2.6-30.8,8.2-63.1,25.4-107.1,41.8-107.1h.1c7.8.1,11.7,6,11.6,17.6-.2,28.5-18.3,69.3-53.6,121.2l-2.8,4.1.3-5ZM1570,388.8a12.66,12.66,0,0,1-10.8,5.2c-5.2,0-9.2-1.9-11.8-5.4-7.5-10-5.4-33.5,6.8-76.1,1.5-5.1,3-10.2,4.7-15.2l1.4-4.3,1.2,4.3C1575.82,346.5,1578.72,377.3,1570,388.8Zm4.5-126.1-.3-.5-.5-1.6.2-.5c16.2-33.4,34.8-52.6,51-52.6h.2c18.3.1,30.9,16.6,30.7,39.9-.1,15.6-7,24.6-12.7,29.4a37.84,37.84,0,0,1-23.9,8.6c-21.5-.1-36.2-12.4-44.7-22.7Zm50.4-53.8ZM540.12,300.4c25-2,44.9-36,52.3-50.6l1.9-3.8.7,4.1c3.5,20.5,14.7,54.8,49.5,55.1h.3c15.1,0,32.1-9.2,49.4-26.6l1.3-1.3.9,1.5c11.6,19.4,27.2,29.8,43.8,28.9,24.4-1.3,39.3-18.6,40.6-30.6a10.36,10.36,0,0,0-2.2-7.9c-2.2-2.5-5.4-2.7-7.7-.5l-1.1,1.1c-5.7,5.5-16.3,15.6-27.8,16.2-14.1.7-24.6-7.8-31.4-25.2l-.3-.7.5-.6C749.72,208.6,777,131,774.32,79c-1.2-24.1-8.2-52.8-34.6-52.8h-2c-10.1.5-19.2,5.3-27.2,14.3-24.4,27.3-37.2,94.5-32.5,171.3a175,175,0,0,0,8.2,44.3l.3.8-.5.6c-14.4,16.9-28.7,26.1-40.1,26.1-27.5,0-26.6-46.1-24.4-84.3.5-8.2,1.2-13.5-1.3-16.5-1.7-2.1-4.7-3.2-8.9-3.2h-.5c-9.8,0-11.8,2-16.8,16.5-10.4,30.2-31,80.8-51.6,80.8-5.7-.1-10.1-2-13.1-5.8-10-12.8-2.4-44.7,3.7-70.4,1.1-4.6,2.2-9,3.1-13.1q1.95-9.15-1.2-13.2c-2.2-2.7-6.5-3.8-12.1-3.3-8.9.7-14.5,4.4-17.3,21.3l-.6,3.5-2.1-2.5c-3.9-5.7-11.4-12.5-25.4-12.5-1.2,0-2.5.1-3.8.2-14.9,1.2-31.9,11.6-44.4,27.2a90.7,90.7,0,0,0-19.5,64.6c.1,1.2.3,2.4.5,3.6l.1.7-.5.5c-8.7,9.5-17.5,14.3-26.3,14.3-13.5-.1-21.3-10.2-21.3-26.9,0-28.2,19.1-113.3,19.1-144.1,0-32.8-14.6-50.6-40-50.8h-.4c-37,0-65.9,42-93.5,128.5-2.6,8.3-5.2,16.6-7.6,25l-3.9,13,1.1-13.5q3.75-43.5,5.2-87.1c1.4-41.8-4.3-68.7-17.3-82.2-7-7.3-16.3-10.9-28.4-11h-.3c-45.3,0-67,76.4-82.9,130.4-4.8,16.3-14.2,53-20.5,78.1l3.7-6c2.8-31.6,10.9-110.8,10.3-153.8-.6-46.1-15.9-66.8-49.8-67h-.4c-18.1,0-30.6,9-38,16.5C6.92,52.8-.38,70.5,0,85.8c.2,9.3,5.9,17.5,10.3,17.5,2.8,0,4.4-3.8,5-6,10.5-34.6,24-51.5,41.4-51.5,7.2.1,12.6,2.2,16.6,6.5,13.6,14.6,11.1,53.9,6.6,125.4-1.4,23-3.1,49.1-4.5,78.8q-.3,7.35-.9,14.7c-1.3,20.6-2.4,36.9,5.4,38.1,10.2,1.6,16.8-2.5,20.2-12.6,5-14.9,16.3-55.8,38.1-130.4,20.9-71.6,36.7-97.7,57-97.7,23.4,0,25.1,40.1,20.8,124.8-.9,17.9-2.1,38.3-3.1,60.4-.1,3.1-.3,6.1-.4,9-.9,18.3-1.6,32.8,3.6,38.3a9,9,0,0,0,6.8,2.6c10.1,0,13.2-8.9,18.2-23.6.9-2.6,1.8-5.4,2.9-8.3,34.7-95.7,60.4-178.8,94.8-178.8,10.3,0,18.4,8.4,18.4,24.8,0,37.8-18.5,110.8-18.5,147.8,0,13.3,3.8,25.2,11,33.5,7.4,8.6,17.8,13.2,29.9,13.3h.3c11.5,0,23.5-5.6,35.7-16.6l1.1-1,.9,1.2c8,10.8,20.9,16.6,34.9,15.5,21.4-1.7,39.4-20.7,46.1-38.7l1.3-3.5,1.3,3.5c5.2,13.4,16,29.5,38.9,27.6ZM737.42,50.2h.4a8,8,0,0,1,6.4,3.6c8.5,11.5,8.6,53.4-6,101.2-8.4,27.3-19.6,53-32.5,74.5l-2.1,3.4-.5-4c-1.5-11.5-2.3-23.6-2.8-33.8-3.7-72,18.1-143.9,37.1-144.9ZM499.92,218.8c-7.5,30.1-21.9,66.5-47.8,68.6l-2.1.1c-10.7,0-16.8-7-17.9-20.9-1.4-17.4,6.1-37.7,19.1-51.8,8.3-9,17.6-13.9,26.3-13.9h.2c11,.1,18.6,8.9,22.2,17.1l.2.4-.2.4ZM620,108.3a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4A17.12,17.12,0,0,0,637,125.3c.2-9.3-7.5-16.9-17-17Zm601.2,0a16.9,16.9,0,1,0-.3,33.8l.1,1.4v-1.4a17.05,17.05,0,0,0,17.2-16.8c.2-9.3-7.5-16.9-17-17Z\"\n                        />\n                        <path d=\"M1689.42,286.8a11.75,11.75,0,1,0,11.7,11.8A11.74,11.74,0,0,0,1689.42,286.8Zm0,21.8a10,10,0,1,1,10-10A10,10,0,0,1,1689.42,308.6Zm5.2-13.1c0-2.4-1.2-3.8-4.3-3.8h-5.2v13.5h1.7v-5.9h2.4l4,5.9h1.9l-4-5.9C1693.12,299,1694.62,298,1694.62,295.5Zm-5.5,2.3h-2.2v-4.6h3c1.5,0,3,.5,3,2.2C1692.92,297.7,1690.92,297.8,1689.12,297.8Z\" />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center mb-5 mb-sm-0\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500 705.92\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>instagram</title>\n                        <path\n                            d=\"M143.25,0c-22.87,0-52.51,24.24-70,40.38C34.82,74.55,0,137.29,0,187.65c0,71.56,60.86,98.57,76.25,98.57,5.08,0,9.4-2.62,9.4-9.51,0-5.39-3.42-9.89-6.83-14.5C64.73,240.66,60.2,220.1,60.2,192.37,60.2,134.54,86.87,81.54,109,57.28c4.08-4.39,13.3-13.87,16.06-13.87s3.41,2.23,3.41,9.12L125.89,431c0,59.17-17.07,82.67-17.07,96.61,0,6.12,2.65,7.71,7.71,7.71,24,0,47.84-29.21,54.6-39.86,21-36.23,26.12-64.51,26.12-146.09v-318c0-8.61-2.41-12.33-10.59-17.64C174.7,6.11,161,0,143.25,0Zm685,1.06C817,1.1,812.2,7,811.67,25.22l-2.5,75.47-66-2.29c-4-.1-5.81,1.17-7.56,4.69C730,113.6,727,121.83,727,135.55c0,11.16,5.06,12.35,9.58,12.35l68.68,2-.21,144.19c0,30.59-19.3,70.26-53.55,103.26a77.33,77.33,0,0,0,2.78-20.42c0-29.58-19-56.4-44.43-75.37l-62-46.61c13-15,35-44.83,35-70,0-19.51-12.27-27.7-35.14-27.7-32.27,0-69.7,29.55-69.7,73.4,0,16,7.11,30.36,17.91,41.36-14.92,28.32-36,65.57-51.71,92.1-11.84,20.31-31.87,51.43-43.73,51.43-8.74,0-12.77-13.75-12.77-66.57,0-43.89,3.11-91.6,4.68-137.4,0-10.5-1.72-20.19-15.35-29.68-12.54-8-28-19.25-44-19.25-35.46,0-59.61,32.62-76.18,64.53-17.15,33.06-26.42,60.92-39.5,101.35l1.44-139.13c.45-9.92-2.06-13.77-10-17.15-10.3-4.36-25.46-9.4-38.9-9.4-11.24,0-12.61,4.85-12.61,16.65L255.9,346.42l-.17,64.39c0,58.05,7.27,67.73,41.72,67.73,19.07,0,25.18-2.24,25.55-18.09.53-10.49,5.54-35.89,12.33-61.37,19.84-75.19,43.35-134.67,83.89-180,4.22-4.4,7.49-2.82,6.83,3.42,0,0-6.41,101.76-6.41,143.38,0,74,11.39,112.66,48.22,112.66,36.15,0,71.66-46.45,91-77.8l62.18-104c40.28,34.33,68.4,60.95,68.4,93.33,0,20.12-12.7,39.81-32,39.81-24.17,0-39.62-25.49-55.94-25.49-13.55,0-31,26.16-31,41,0,14,30.61,33.86,85.52,33.86,81.06,0,124.54-55.63,150.63-117.23,5,73.12,34.13,115.82,79.57,115.82,29.8,0,64.24-37.65,79.91-83.64,0,0,1.55,11.94,13.45,36.4,16.38,31.94,41.28,46.61,72.21,46.61,38.46,0,71.37-23.32,91.45-62.45,3,29.65,28,62.31,68,62.31,25.14,0,48-19.26,63.09-51,0,0,19.48,52.39,75.83,52.39,31.65,0,69.13-29.32,78.08-50.63l1,31L1345.65,536c-24.27,23.57-50.1,57.43-50.1,94.92,0,47.67,45,75.09,84.63,75.09,41.18,0,68.5-26.09,83.47-48,18.84-28.28,26.79-81.6,26.79-133.71l-1.86-78.36C1544.93,384,1589,298.39,1608.66,237.81l42.77-1.12c8.29-.56,7.88,2.7,6.73,7.53-7.52,31.77-14.08,67.75-14.08,103.57,0,59.2,13.63,84.95,33.23,106,17,17.64,34,23.59,51.82,23.59,34.88,0,56.77-28.8,63.72-47,16.38,31.94,40.51,46.82,71.43,46.82,38.47,0,71.37-23.32,91.46-62.45,3,29.65,27.94,62.31,68,62.31,29.91,0,47.26-17.26,60.91-49.78.27,10.46.67,21.61,1,32.06.36,5.41,4.69,8.84,8.56,10.25,12.71,4.81,23.87,7.22,33.9,7.22,26.15,0,31.82-5.37,31.82-22.46,0-28.2.83-72.74,8.84-108.5,8.5-35.61,21.34-75.91,39-104,1.6-2.9,5.51-2.14,5.68,1.37,2.54,60,6.55,161.59,22.32,187.89,7.77,12.54,19.8,21.68,37.8,21.68,8.44,0,18.79-3.59,21.44-5.84,2.68-2.09,4-4.42,3.87-8.73,0-76.71,23.92-151,47.88-200.91.66-1.48,2.53-1.6,2.46.35L2347.89,293c0,90.78,6.54,148.13,51.89,175.7a59.36,59.36,0,0,0,29.18,7.57,60.85,60.85,0,0,0,54.64-33.8c8.47-16.19,16.4-47.36,16.4-65,0-6.83.08-18-11.12-18-6.14,0-9.83,4.52-11.3,11.37-3.57,14.83-6.5,27.54-12,42.21-5.29,14-13.19,22.14-22.56,22.14-11,0-16.59-8.66-19.79-14-14-21.42-15.17-70.63-15.17-111.7l3.38-105.72c0-8.75-3.65-19.22-17.14-26.94-9.06-5.21-32-15-46-15-13,0-19.32,7.37-24,18.2-8.81,19.44-38.25,95.69-46.15,157.68-.28,1.63-2.32,2-2.46-.11-4.1-43.84-6.21-96.66-6.16-132.29,0-10.77-2.64-26.18-25.49-36.16-11.11-4.6-20.29-7.42-31.51-7.42-13.92,0-16.92,6.81-21.9,15.84-15.77,29.13-26.67,67.12-43,115l.25-109.66c0-5.13-3.14-11.85-12.15-13.66-22.32-5.13-32.66-7.46-41.46-7.46-6.41,0-9.93,5.1-9.93,10.63l-1.2,187c-4.32,22.89-21.82,77.52-46.65,77.52-20.38,0-29.89-20.65-29.89-107l3.7-140.25c0-8.86-5.81-12.58-14.29-16.34-12.12-4.81-21.76-6.72-34.08-6.72-15.46,0-20.76,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-105.68,72.49-105.68,177.82-.59,29.54,6.55,58.9,6.55,58.9-5.46,24.51-18.27,44.49-36,44.49-22.34,0-36.58-31.58-36.58-86.32,0-54.9,20.91-116.82,20.91-133.6,0-19.51-12.78-31.86-35.41-31.86-11.34,0-53.39,9.54-75,12.67,0,0,2.43-10.26,2.25-18.34,0-19.24-9-31.29-31.44-31.29-27.38,0-47.49,19.55-47.49,52.91,0,15,8.62,28.82,20,36.26-14.81,61.78-38.89,107.73-74.38,159.06L1491,189c0-6.76-1.8-11-15-16.09a83.33,83.33,0,0,0-32.77-6.52c-20.84,0-19.46,14.88-18.34,26-9.54-16.9-30.4-37-62.6-37-87.73,0-114.67,133.79-101.46,228.8,0,11.58-11.31,52.7-36.86,52.7-20.38,0-29.88-20.65-29.88-107l3.73-140.25c0-8.87-5.86-12.59-14.33-16.34-12.12-4.81-21.73-6.72-34-6.72-15.46,0-20.77,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-106.29,66.29-106.29,171.62,0,40.21-34.62,101.57-58.89,101.57-13.49,0-27.85-24.76-27.85-88,.07-43.11,5.95-189.89,5.95-189.89l84.74-1.37c4,0,6.38-4.46,7.88-7.18,3.89-7.9,5.77-13.15,5.77-22.6,0-8.53-1.7-11.64-12.63-12.25L882,103l3.59-78.68c.26-5-2.74-8.21-8.16-10.63C861,7.28,841,1.1,828.29,1.1Zm256.46,206.15c22.59,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.92-127.44,56.33-127.44Zm813.64,0c22.6,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.93-127.44,56.33-127.44Zm-516.06.43c29.49,0,42.53,30.39,42.53,89.31,0,88.83-26.4,139.4-58.47,139.4-20.48,0-44-33.61-42.78-99.73,0-42.27,13.79-129,58.72-129Zm49.92,297.16v35c0,116.1-30.94,135.92-55.8,135.92-9.42,0-32.49-7.11-32.49-35.84,0-40.15,42-85.83,55-99.94l33.26-35.13Z\"\n                            transform=\"translate(0 -0.04)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2498.04 632\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>pinterest</title>\n                        <path\n                            d=\"M574.55,222.78c27.1,0,53.11-22.57,57.63-50.41,5.35-27.1-13-49.66-40.11-49.66s-53.1,22.56-57.7,49.66C529.09,200.21,546.71,222.78,574.55,222.78ZM2414,303.32h60.64c8.31,0,13.17-3.37,15.05-11.13q4.35-18,8.95-36c1.79-7-2.27-12.27-10-12.27h-59.83c4.31-17.14,21.09-72.81,21.09-109.11C2449.85,62.36,2388.3.7,2301,.7c-98.63,0-162.8,66.19-162.8,159.33,0,27.17,10.14,58.83,22.7,78.48q-8.11-.47-16.24-.46c-74.94,0-122.15,40.65-122.15,99.81,0,55.52,43.77,77.09,85,91.45,36.61,12.75,70.31,18.69,70.31,47.28,0,19.28-18.54,30.6-54.84,30.6-43.06,0-66.73-20.28-72.75-28,4.08-3.2,10.15-10.83,10.15-23.55,0-17.79-12.49-32.31-35.7-32.31-19.63,0-36.23,16-40.4,37.08-31.54,25.8-66,42.52-114.78,42.52-48.06,0-73-25-73-78.2,11.27,3.43,40.61,7.55,60,7.55,81.39,0,136.86-37,136.86-111,0-39.83-35-81.65-104.12-81.65H1889c-91,0-141.92,57.62-164.17,121q-9.35-2.25-18.73-4.37a144.59,144.59,0,0,0,8.55-48.41c0-31.3-19.38-68.22-71.26-68.22-36.13,0-70.41,23.67-94.16,59.14,5.91-23.14,9.83-38.55,10.08-39.58,1.55-6.05-1-12.79-10.41-12.79h-53.24c-7.59,0-12.94,2.68-15.1,11.32-1.45,5.76-19.74,77.53-37.55,147.42-11.21,43.58-69.24,97.82-142.17,97.82-48.08,0-73-26.64-73-79.86,12.58,5,40.61,9.21,60,9.21,84.7,0,136.86-37,136.86-111,0-39.82-35-81.64-104.13-81.64h-.15c-102.43,0-165.18,79.56-175.81,169.77-4.42,37.5-36.07,89-70.38,89-16.72,0-26-10.5-26-28.32,0-15.4,10.84-53,22.71-100.21,4-15.78,10-39.86,16.72-66.53h55.69c8.29,0,13.15-3.37,15-11.13,2.67-11.16,7.56-30.64,9-36,1.79-7-2.25-12.27-10-12.27h-54.76s25.21-100.59,25.81-103.17c2.43-10.23-6.13-16.14-15.09-14.25,0,0-42.32,8.28-50.17,9.92s-14,5.93-16.87,17.3L1023.78,244h-44c-8.29,0-13.16,3.39-15,11.12q-4.38,18-8.94,36c-1.82,7,2.24,12.27,10,12.27H1009c-.3,1.23-15.57,59.32-27.92,111.33-5.82,25-25.29,83.55-57.17,83.55-19,0-27.09-9.61-27.09-30.22,0-32.45,31.94-113.69,31.94-150.55,0-49.24-26.42-77.77-80.54-77.77-34.11,0-69.48,22-84.47,41.36,0,0,4.55-15.83,6.1-21.91,1.66-6.43-1.78-12.74-10.22-12.74H706.67c-11.26,0-14.37,6-16,12.64-.66,2.65-19.73,77.52-38,149.4-12.52,49.22-42.94,90.34-75.47,90.34-16.72,0-24.17-10.49-24.17-28.32,0-15.4,9.95-53.4,21.82-100.57,14.45-57.43,27.2-104.72,28.56-110.24,1.78-7.08-1.39-13.25-10.51-13.25H539.61c-9.64,0-13.08,5.06-15.11,12.09,0,0-15,56.72-30.85,119.86-11.53,45.82-24.25,92.49-24.25,114.42,0,39.13,17.57,68.63,65.88,68.63,37.28,0,66.78-18.91,89.31-43-3.31,13-5.42,21.3-5.63,22.14-2,7.45.41,14,9.19,14h54.47c9.49,0,13.13-3.81,15.11-12.08,1.91-7.89,42.59-167.92,42.59-167.92,10.76-43,37.36-71.45,74.77-71.45,17.75,0,33.11,11.75,31.33,34.58-2,25.12-32.27,115.35-32.27,155,0,30,11.12,68.76,67.55,68.76,38.46,0,66.78-18.44,87.37-42.24,7.54,25.26,27.51,42.24,64.15,42.24,60.89,0,97.59-36.11,119.15-72.39,17.89,42.15,59.8,72.37,121.25,72.37,62.64,0,111.11-26.41,145.46-62.3l-10.71,42c-1.95,7.57,1.35,13.52,10.23,13.52h53.92c7.38,0,12.63-3.76,14.55-11.51.94-3.81,8.73-33.91,19.74-76.69,21-81.86,54.86-166.79,105.68-166.79,17.92,0,25.27,10,25.27,25.81a38.38,38.38,0,0,1-4,17.32c-24.63-4.9-44.45,7.26-44.45,33.56,0,17.14,18,32.71,42.37,32.71,18.59,0,34-4.56,46.23-12.81Q1696,400,1714,404.08a238.06,238.06,0,0,0-2.83,35.87c0,65.7,46.92,121.42,131,121.42,65.9,0,111.12-24.1,150.15-55,18.77,30.71,66.15,55.52,128.31,55.52,85.19,0,133.51-44.3,133.51-102.85,0-53-43.51-72.51-88.38-88.75-36.47-13.18-66.89-20.34-66.89-46.12,0-21.12,16.63-30.79,45.14-30.79a140,140,0,0,1,39.79,6.07c7.35,18.4,22.57,38.78,48.55,38.78,22,0,31.85-17.38,31.85-33.39,0-45.58-75.92-50.36-75.92-148.1,0-60.78,34.39-110.92,105.62-110.92,49.49,0,81.81,31.38,81.81,82,0,41.76-25.33,116.1-25.33,116.1h-43c-8.28,0-13.16,3.38-15,11.12q-4.36,18-9,36c-1.81,7,2.25,12.27,10,12.27h42s-43.46,160.26-43.46,189.41c0,39.13,22,68.62,70.38,68.62,68.35,0,111.07-44.42,129.64-109,1.44-5-1.39-9.06-6.45-9.06h-26.08c-5.2,0-8.22,3-9.54,8.05-5.89,22.93-20.49,47.05-49.23,47.05-16.72,0-26-10.49-26-28.32,0-15.39,10.19-51.44,22.73-100.2,6-23.22,16.61-66.54,16.61-66.54ZM1875,300.58c24.17,0,35.65,16.08,35.65,35.24,0,32.42-25.13,52.18-64.45,52.18-14.07,0-33.75-3.33-45.36-7.2C1805.73,351,1827.31,300.58,1875,300.58Zm-568.59,0c26.46,0,35.64,16.08,35.64,35.24,0,32.42-25.13,52.18-64.44,52.18-14.08,0-33.75-3.33-45.36-7.2C1237.12,351,1256.25,300.58,1306.42,300.58ZM260.41,0C87.94,0,1,123.66,1,226.78c0,62.43,23.64,118,74.34,138.67,8.31,3.41,15.76.12,18.17-9.08,1.67-6.37,5.64-22.44,7.41-29.14,2.44-9.1,1.49-12.29-5.22-20.23-14.62-17.24-24-39.57-24-71.19,0-91.74,68.64-173.87,178.73-173.87,97.49,0,151.05,59.57,151.05,139.12,0,104.67-46.32,193-115.09,193-38,0-66.41-31.41-57.3-69.93,10.91-46,32.05-95.61,32.05-128.81,0-29.71-16-54.5-49-54.5-38.82,0-70,40.16-70,94,0,34.27,11.58,57.45,11.58,57.45L107.08,490.05C93.21,548.76,105,620.74,106,628c.58,4.31,6.12,5.33,8.63,2.08,3.58-4.67,49.81-61.75,65.54-118.79,4.44-16.15,25.53-99.78,25.53-99.78,12.61,24.05,49.47,45.25,88.68,45.25,116.69,0,195.87-106.39,195.87-248.8C490.24,100.28,399,0,260.41,0Z\"\n                            transform=\"translate(-0.98)\"\n                        />\n                    </svg>\n                </div>\n                <div class=\"col-6 col-sm-4 col-lg-2 d-flex justify-content-center\">\n                    <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2499.05 610.45\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <title>dribbble</title>\n                        <path\n                            d=\"M764,245.62a51.8,51.8,0,1,0-51.78-51.8A51.8,51.8,0,0,0,764,245.62Zm1709.12,177c-7.88-5.54-14-6.46-19,4.3-87,188.38-233.55,94.38-219,102.65,32.51-14.87,118-83.45,105.09-178.14-7.84-57.87-57.51-83.54-110.23-74.35-92,16.05-125.88,115.3-108.65,203.18,3,15.09,8.41,27.54,13.79,39.73-104,84.57-145.29-75.7-150-94.85-.18-1,80.3-68.11,102.68-228,23.47-167.54-30-198-84.63-197.09-101.13,1.76-128.46,213.06-91.75,389.17-3.07.8-17.38,8.72-40.38,9.61-16.54-52.06-87.25-97.7-105.75-80.11-46.31,44,11.23,130,51.72,136.74-24.32,149.8-176.43,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31C1747,40,1725.42.79,1676.55,2.73c-94,3.72-104.24,215.08-93.21,365.09-.55-3.69-5.78,18.23-44.31,29.13-9.11-50.58-90.56-101.35-109.73-76.94-35.89,45.68,26.31,127.14,55.77,132.82-24.32,149.8-176.42,112.7-148.11-75,49.54-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-104.23,215.09-93.21,365.1-.55-3.75-5.91,18.89-46,29.61-1.34-65.63-83.08-95.72-102.72-74.78-35,37.32,8,113.91,47.81,132.83-24.32,149.8-176.42,112.7-148.11-75,49.53-92,87.2-228.75,80.48-311.31-2.38-29.24-24-68.4-72.87-66.47-94,3.73-101.58,225.71-90.56,375.72-31,132.67-134.8,298.35-121.31-33.54,1.33-23.28,2.79-32.12-8.82-40.84-8.7-6.78-28.48-3.52-39.29-3.25-13.14.53-16.43,8.22-19.34,19.84-6.76,30-8,59.1-8.94,98.79-.64,18.57-2.13,27.23-9.28,52.55s-47.88,71.58-70.19,63.84c-30.94-10.64-20.79-98-15-158,4.83-47.43-10.64-68.73-50.28-76.48-23.21-4.84-37.31-4.09-61.48-11.71-22.86-7.21-28-50.44-76.78-36-26.67,7.89-9.52,64.39-15.93,106.26-31.51,206-97.07,211.64-127.48,111.58C432.25,133.3,334.89,1,277.91,1c-59.35,0-127.2,40.89-98.47,302.47-14-4.08-18.26-6.27-33.56-6.27C59.4,297.24.48,367.15.48,453.4S59.4,609.56,145.89,609.56c51.05,0,86.9-23.22,114.05-59.13,17.71,25.36,39.28,59.52,78.72,58,117.57-4.58,151.76-245.75,155.8-259.2,12.57,1.94,24.46,5.61,36.06,7.54,19.34,2.91,20.75,10.56,20.31,30-5.13,164,25.14,221.45,93.8,221.45,38.25,0,72.34-37.58,95.83-64.46C758,580,786,607.11,823.45,608.22c90.87,2.26,125.66-142.58,122.49-123.52-2.49,15,29.48,122.7,123,123.09,115.88.49,137.42-126.94,140-148.29.32-4.24.46-3.8,0,0l-.09,1.3c36.79-6.85,55.77-26.57,55.77-26.57s29.54,175.54,139,173.57c113.63-2.06,135.05-117.25,137.87-139.72.37-5.33.59-4.7,0,0,0,.22,0,.44,0,.66,43.7-15.89,55.2-31.85,55.2-31.85s23.47,172.05,139,173.56c102.91,1.34,141.05-104,141.27-148.15,17.36.18,49.46-10.3,48.71-10.89,0,0,37.7,150.43,143,158.15,49.42,3.63,86.5-27.81,107.63-42.15,49.67,40.22,215.06,91.6,319.49-85.45,14.74-25.42-17-55.43-22.51-59.35ZM141.72,551.16c-50.46,0-82.82-46.66-82.82-97s29.7-97,80.16-97c22.71,0,35.34,2.5,53,17.88,3.21,12.64,12.3,41.79,16.72,55,5.93,17.72,13,32.79,20.08,49.2-10.15,42.09-43.44,71.83-87.16,71.83Zm123-174.57c-2.1-3.34-1.66-1.29-4-4.45C251.42,347,233.6,290.82,231.53,227c-2.33-72.16,9.69-156.74,45.15-156.74,24,0,49.56,171.42-12,306.3ZM975.15,301.4c-5.69-42.82-6-233.71,39.84-228.45C1040.29,83.2,999,263.33,975.15,301.4Zm334.64,0c-5.69-42.82-6-233.71,39.84-228.45C1374.93,83.2,1333.58,263.33,1309.79,301.4Zm332,2.66c-5.69-42.82-6-233.72,39.84-228.46C1706.9,85.85,1665.55,266,1641.76,304.06ZM2008.27,61.77c41.89-4.34,40.17,178.63-43.93,294.14-10.85-41.75-27.48-279.8,43.93-294.14Zm176.1,393.71c-13.46-68,21.32-112.62,57.16-117.52,12.53-2,30.69,6.12,34.31,21.29,5.95,28.6-.86,71-81.09,124.84a109.85,109.85,0,0,1-10.37-28.61Z\"\n                            transform=\"translate(-0.48 0)\"\n                        />\n                    </svg>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"pt-10 bg-light\" borderType=\"angled\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8 mb-5\">\n                    <div class=\"badge badge-marketing rounded-pill bg-secondary-soft text-secondary mb-3\">Marketing</div>\n                    <h2>A better way to capture leads</h2>\n                    <p class=\"lead\">Design can go a long way when capturing leads on your website. This lead caputre landing page example can help you get started!</p>\n                </div>\n            </div>\n            <div class=\"row gx-5 mb-n10 z-1\">\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4\"><i-feather name=\"users\"></i-feather></div>\n                            <h5>Cultivate better customers</h5>\n                            <p class=\"card-text\">Learn how lead generation fits into your inbound marketing strategy and easy ways that you can start generating leads for your company</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-xl bg-success-soft text-success mb-4\"><i-feather name=\"trending-up\"></i-feather></div>\n                            <h5>Reach sales goals</h5>\n                            <p class=\"card-text\">Attract and convert prospects into paying customers on your website by implementing a new design into your lead generation strategy</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-xl bg-primary-soft text-primary mb-4\"><i-feather name=\"tool\"></i-feather></div>\n                            <h5>Use the right tools</h5>\n                            <p class=\"card-text\">By adding forms, call to action buttons, and information boxes, this template has the right tools to capture new leads</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"card h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-xl bg-warning-soft text-warning mb-4\"><i-feather name=\"layout\"></i-feather></div>\n                            <h5>Easy to customimze</h5>\n                            <p class=\"card-text\">Take sections and components from this UI Kit to build multiple variations of a lead caputre page to test which one performs better!</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-white border-bottom py-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 align-items-center\">\n                <div class=\"col-lg-6 mb-4 mb-lg-0\">\n                    <h4 class=\"text-primary\">Ready to get started?</h4>\n                    <p class=\"lead mb-0\">Create your account now!</p>\n                </div>\n                <div class=\"col-lg-6 text-lg-end\"><a class=\"btn btn-primary fw-500 me-3\" [routerLink]=\"\">Start Now</a><a class=\"btn btn-transparent-dark fw-500\" [routerLink]=\"\">Contact Us</a></div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 88917:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/mobile-app/mobile-app.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"waves\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content mb-n5\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center align-items-center\">\n                    <div class=\"col-lg-6\" data-aos=\"fade-right\">\n                        <h1 class=\"page-header-ui-title\">Build a landing page for your mobile app</h1>\n                        <p class=\"page-header-ui-text mb-5\">Marketing pages for your mobile app have never been easier. Get started now!</p>\n                        <div class=\"mb-5 mb-lg-0\">\n                            <a class=\"me-3\" href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/app-store-badge.svg\" style=\"height: 3rem\" /></a><a href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/google-play-badge.svg\" style=\"height: 3rem\" /></a>\n                            <div class=\"page-header-ui-text mt-2 text-xs font-italic\">* Requires Android OS 4.3+ or Apple iOS 9.3+</div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 z-1\" data-aos=\"fade-left\">\n                        <div class=\"device-wrapper mx-auto mb-n15\">\n                            <div class=\"device\" data-device=\"iPhoneX\" data-orientation=\"portrait\" data-color=\"black\">\n                                <div class=\"screen\"><img class=\"img-fluid z-1\" src=\"https://source.unsplash.com/eluzJSfkNCk/518x1122\" /></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our customizable, block-based build system makes creating your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0 divider-right\" data-aos=\"fade\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"testimonial-brand text-gray-400\">\n                            <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500.01 816.05\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <title>google</title>\n                                <path d=\"M307.89.07h22.23c77.18,1.68,153.1,32.72,207.63,87.67-20.13,20.55-40.69,40.27-60.4,60.82-30.62-27.68-67.53-49.08-107.8-56.63C310,79.35,245.81,90.68,195.89,124.65c-54.53,35.66-91.44,96.06-99.41,160.66-8.81,63.76,9.22,130.87,50.75,180.37,39.85,48.23,100.67,78.44,163.59,80.53,58.73,3.36,120-14.68,162.75-55.79,33.56-28.94,49.08-73,54.11-115.77-69.63,0-139.26.42-208.89,0V288.24H612c15.1,92.7-6.71,197.15-77.18,263.43-47,47-112,74.66-178.28,80.11-64.17,6.3-130.45-5.87-187.5-36.91C100.67,558.38,46.14,496.72,19.3,424.15-5.87,357.45-6.29,282,17.2,214.84,38.59,153.6,79.7,99.48,132.55,61.73,183.31,24.4,245,3.85,307.89.07Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1989.93,21.88h89.77v599c-29.78,0-60,.42-89.77-.42.42-199.25,0-398.91,0-598.58Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M811.66,229.52C867,219,927,230.78,972.73,263.91c41.53,29.37,70.47,75.51,79.28,125.84,11.33,58.31-2.93,122.07-40.68,168.21-40.69,51.59-107.39,79.28-172.4,75.08-59.57-3.35-117.45-33.14-152.69-81.79-39.85-53.69-49.5-127.52-27.68-190.44,21.81-67.53,83.47-119.13,153.1-131.29m12.58,79.7a112.72,112.72,0,0,0-58.72,37.33c-40.69,48.66-38.17,127.93,6.71,173.24,25.59,26,64.18,38.17,99.83,31,33.14-5.88,62.08-28.11,78-57.47,27.69-49.92,19.72-118.71-22.65-157.72-27.26-25.17-67.11-35.65-103.19-26.42Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1256.29,229.52c63.34-12.17,132.55,5.45,180,49.91,77.18,69.22,85.57,198.83,19.72,278.53-39.85,50.33-104.45,78-168.21,75.08-60.82-1.68-120.8-31.88-156.88-81.79-40.69-54.95-49.49-130.46-26.42-194.63,23.07-65.44,83.47-115.36,151.84-127.1m12.59,79.7a114.63,114.63,0,0,0-58.73,36.91c-40.27,47.82-38.59,125.84,4.62,171.56,25.58,27.26,65.43,40.69,102.34,33.14,32.72-6.29,62.08-28.11,78-57.47,27.27-50.33,19.3-119.13-23.49-158.14-27.26-25.16-67.11-35.23-102.76-26Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1633.39,253.85c48.24-30.2,112.42-38.59,164.43-12.59,16.36,7.13,29.78,19.3,42.78,31.46.42-11.32,0-23.07.42-34.81,28.11.42,56.21,0,84.74.42v370c-.42,55.79-14.69,114.94-55,155.62-44,44.89-111.58,58.73-172.4,49.5-65-9.65-121.65-57-146.82-117,25.17-12.16,51.6-21.81,77.6-33.14,14.69,34.4,44.47,63.76,81.8,70.47s80.54-2.51,104.87-33.55c26-31.88,26-75.51,24.74-114.52-19.29,18.88-41.52,35.66-68.37,42-58.3,16.36-122.48-3.78-167.36-43.21-45.31-39.43-72.15-100.25-69.64-160.65,1.26-68.37,39.85-134.23,98.16-169.88m86.83,53.69c-25.59,4.19-49.5,18.46-65.86,38.17-39.43,47-39.43,122.06.42,168.2,22.65,27.27,59.15,42.37,94.38,38.6,33.14-3.36,63.76-24.33,80.12-53.28,27.68-49.07,23.07-115.77-14.26-158.55-23.07-26.43-60-39.43-94.8-33.14Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M2187.5,275.24c50.34-47,127.94-62.92,192.53-38.17,61.25,23.07,100.26,81.37,120,141.36-91,37.75-181.63,75.08-272.65,112.83,12.58,23.91,31.88,45.72,57.88,54.53,36.5,13,80.12,8.39,110.74-15.94,12.17-9.22,21.82-21.39,31-33.13,23.07,15.52,46.14,30.62,69.21,46.14-32.71,49.07-87.66,83.47-146.81,88.92-65.43,8-135.06-17.19-177.43-68.37-69.63-80.54-62.92-215.6,15.52-288.17m44.88,77.6c-14.26,20.55-20.13,45.72-19.71,70.47q91.23-37.76,182.46-75.92c-10.06-23.49-34.39-37.75-59.14-41.53C2296.14,298.73,2254.61,320.12,2232.38,352.84Z\" transform=\"translate(0.01 -0.07)\" />\n                            </svg>\n                        </div>\n                        <p class=\"testimonial-quote text-primary\">\"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.\"</p>\n                        <div class=\"testimonial-name\">Adam Hall</div>\n                        <div class=\"testimonial-position\">Head of Engineering</div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\" data-aos=\"fade\" data-aos-delay=\"100\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"testimonial-brand text-gray-400\">\n                            <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500 705.92\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <title>instagram</title>\n                                <path\n                                    d=\"M143.25,0c-22.87,0-52.51,24.24-70,40.38C34.82,74.55,0,137.29,0,187.65c0,71.56,60.86,98.57,76.25,98.57,5.08,0,9.4-2.62,9.4-9.51,0-5.39-3.42-9.89-6.83-14.5C64.73,240.66,60.2,220.1,60.2,192.37,60.2,134.54,86.87,81.54,109,57.28c4.08-4.39,13.3-13.87,16.06-13.87s3.41,2.23,3.41,9.12L125.89,431c0,59.17-17.07,82.67-17.07,96.61,0,6.12,2.65,7.71,7.71,7.71,24,0,47.84-29.21,54.6-39.86,21-36.23,26.12-64.51,26.12-146.09v-318c0-8.61-2.41-12.33-10.59-17.64C174.7,6.11,161,0,143.25,0Zm685,1.06C817,1.1,812.2,7,811.67,25.22l-2.5,75.47-66-2.29c-4-.1-5.81,1.17-7.56,4.69C730,113.6,727,121.83,727,135.55c0,11.16,5.06,12.35,9.58,12.35l68.68,2-.21,144.19c0,30.59-19.3,70.26-53.55,103.26a77.33,77.33,0,0,0,2.78-20.42c0-29.58-19-56.4-44.43-75.37l-62-46.61c13-15,35-44.83,35-70,0-19.51-12.27-27.7-35.14-27.7-32.27,0-69.7,29.55-69.7,73.4,0,16,7.11,30.36,17.91,41.36-14.92,28.32-36,65.57-51.71,92.1-11.84,20.31-31.87,51.43-43.73,51.43-8.74,0-12.77-13.75-12.77-66.57,0-43.89,3.11-91.6,4.68-137.4,0-10.5-1.72-20.19-15.35-29.68-12.54-8-28-19.25-44-19.25-35.46,0-59.61,32.62-76.18,64.53-17.15,33.06-26.42,60.92-39.5,101.35l1.44-139.13c.45-9.92-2.06-13.77-10-17.15-10.3-4.36-25.46-9.4-38.9-9.4-11.24,0-12.61,4.85-12.61,16.65L255.9,346.42l-.17,64.39c0,58.05,7.27,67.73,41.72,67.73,19.07,0,25.18-2.24,25.55-18.09.53-10.49,5.54-35.89,12.33-61.37,19.84-75.19,43.35-134.67,83.89-180,4.22-4.4,7.49-2.82,6.83,3.42,0,0-6.41,101.76-6.41,143.38,0,74,11.39,112.66,48.22,112.66,36.15,0,71.66-46.45,91-77.8l62.18-104c40.28,34.33,68.4,60.95,68.4,93.33,0,20.12-12.7,39.81-32,39.81-24.17,0-39.62-25.49-55.94-25.49-13.55,0-31,26.16-31,41,0,14,30.61,33.86,85.52,33.86,81.06,0,124.54-55.63,150.63-117.23,5,73.12,34.13,115.82,79.57,115.82,29.8,0,64.24-37.65,79.91-83.64,0,0,1.55,11.94,13.45,36.4,16.38,31.94,41.28,46.61,72.21,46.61,38.46,0,71.37-23.32,91.45-62.45,3,29.65,28,62.31,68,62.31,25.14,0,48-19.26,63.09-51,0,0,19.48,52.39,75.83,52.39,31.65,0,69.13-29.32,78.08-50.63l1,31L1345.65,536c-24.27,23.57-50.1,57.43-50.1,94.92,0,47.67,45,75.09,84.63,75.09,41.18,0,68.5-26.09,83.47-48,18.84-28.28,26.79-81.6,26.79-133.71l-1.86-78.36C1544.93,384,1589,298.39,1608.66,237.81l42.77-1.12c8.29-.56,7.88,2.7,6.73,7.53-7.52,31.77-14.08,67.75-14.08,103.57,0,59.2,13.63,84.95,33.23,106,17,17.64,34,23.59,51.82,23.59,34.88,0,56.77-28.8,63.72-47,16.38,31.94,40.51,46.82,71.43,46.82,38.47,0,71.37-23.32,91.46-62.45,3,29.65,27.94,62.31,68,62.31,29.91,0,47.26-17.26,60.91-49.78.27,10.46.67,21.61,1,32.06.36,5.41,4.69,8.84,8.56,10.25,12.71,4.81,23.87,7.22,33.9,7.22,26.15,0,31.82-5.37,31.82-22.46,0-28.2.83-72.74,8.84-108.5,8.5-35.61,21.34-75.91,39-104,1.6-2.9,5.51-2.14,5.68,1.37,2.54,60,6.55,161.59,22.32,187.89,7.77,12.54,19.8,21.68,37.8,21.68,8.44,0,18.79-3.59,21.44-5.84,2.68-2.09,4-4.42,3.87-8.73,0-76.71,23.92-151,47.88-200.91.66-1.48,2.53-1.6,2.46.35L2347.89,293c0,90.78,6.54,148.13,51.89,175.7a59.36,59.36,0,0,0,29.18,7.57,60.85,60.85,0,0,0,54.64-33.8c8.47-16.19,16.4-47.36,16.4-65,0-6.83.08-18-11.12-18-6.14,0-9.83,4.52-11.3,11.37-3.57,14.83-6.5,27.54-12,42.21-5.29,14-13.19,22.14-22.56,22.14-11,0-16.59-8.66-19.79-14-14-21.42-15.17-70.63-15.17-111.7l3.38-105.72c0-8.75-3.65-19.22-17.14-26.94-9.06-5.21-32-15-46-15-13,0-19.32,7.37-24,18.2-8.81,19.44-38.25,95.69-46.15,157.68-.28,1.63-2.32,2-2.46-.11-4.1-43.84-6.21-96.66-6.16-132.29,0-10.77-2.64-26.18-25.49-36.16-11.11-4.6-20.29-7.42-31.51-7.42-13.92,0-16.92,6.81-21.9,15.84-15.77,29.13-26.67,67.12-43,115l.25-109.66c0-5.13-3.14-11.85-12.15-13.66-22.32-5.13-32.66-7.46-41.46-7.46-6.41,0-9.93,5.1-9.93,10.63l-1.2,187c-4.32,22.89-21.82,77.52-46.65,77.52-20.38,0-29.89-20.65-29.89-107l3.7-140.25c0-8.86-5.81-12.58-14.29-16.34-12.12-4.81-21.76-6.72-34.08-6.72-15.46,0-20.76,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-105.68,72.49-105.68,177.82-.59,29.54,6.55,58.9,6.55,58.9-5.46,24.51-18.27,44.49-36,44.49-22.34,0-36.58-31.58-36.58-86.32,0-54.9,20.91-116.82,20.91-133.6,0-19.51-12.78-31.86-35.41-31.86-11.34,0-53.39,9.54-75,12.67,0,0,2.43-10.26,2.25-18.34,0-19.24-9-31.29-31.44-31.29-27.38,0-47.49,19.55-47.49,52.91,0,15,8.62,28.82,20,36.26-14.81,61.78-38.89,107.73-74.38,159.06L1491,189c0-6.76-1.8-11-15-16.09a83.33,83.33,0,0,0-32.77-6.52c-20.84,0-19.46,14.88-18.34,26-9.54-16.9-30.4-37-62.6-37-87.73,0-114.67,133.79-101.46,228.8,0,11.58-11.31,52.7-36.86,52.7-20.38,0-29.88-20.65-29.88-107l3.73-140.25c0-8.87-5.86-12.59-14.33-16.34-12.12-4.81-21.73-6.72-34-6.72-15.46,0-20.77,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-106.29,66.29-106.29,171.62,0,40.21-34.62,101.57-58.89,101.57-13.49,0-27.85-24.76-27.85-88,.07-43.11,5.95-189.89,5.95-189.89l84.74-1.37c4,0,6.38-4.46,7.88-7.18,3.89-7.9,5.77-13.15,5.77-22.6,0-8.53-1.7-11.64-12.63-12.25L882,103l3.59-78.68c.26-5-2.74-8.21-8.16-10.63C861,7.28,841,1.1,828.29,1.1Zm256.46,206.15c22.59,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.92-127.44,56.33-127.44Zm813.64,0c22.6,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.93-127.44,56.33-127.44Zm-516.06.43c29.49,0,42.53,30.39,42.53,89.31,0,88.83-26.4,139.4-58.47,139.4-20.48,0-44-33.61-42.78-99.73,0-42.27,13.79-129,58.72-129Zm49.92,297.16v35c0,116.1-30.94,135.92-55.8,135.92-9.42,0-32.49-7.11-32.49-35.84,0-40.15,42-85.83,55-99.94l33.26-35.13Z\"\n                                    transform=\"translate(0 -0.04)\"\n                                />\n                            </svg>\n                        </div>\n                        <p class=\"testimonial-quote text-primary\">\"Adipisci mollitia nemo magnam iure, temporibus molestiae odit, sit harum dolores neque maiores quo eligendi nam corrupti.\"</p>\n                        <div class=\"testimonial-name\">Lia Peterson</div>\n                        <div class=\"testimonial-position\">Technical Project Manager</div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center\">\n                        <div class=\"text-xs text-uppercase-expanded text-primary mb-2\">Application Features</div>\n                        <h2 class=\"mb-5\">We have a simple solution to a complex problem</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-green-soft text-green mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                            <h5>Components</h5>\n                            <p class=\"card-text small\">Our product is full of customized and extendable components.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-red-soft text-red mb-4\"><i-feather name=\"tool\"></i-feather></div>\n                            <h5>Utilities</h5>\n                            <p class=\"card-text small\">Powerful utility classes makes it easy to customize your product.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4\"><i-feather name=\"layout\"></i-feather></div>\n                            <h5>Layouts</h5>\n                            <p class=\"card-text small\">Our flex based layouts offer a beautifully reponsive approach.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\" data-aos=\"fade-up\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-purple-soft text-purple mb-4\"><i-feather name=\"book\"></i-feather></div>\n                            <h5>Documentation</h5>\n                            <p class=\"card-text small\">Our code is fully documented with instructions and usage examples.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-md-0\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-blue-soft text-blue mb-4\"><i-feather name=\"code\"></i-feather></div>\n                            <h5>Code Snippets</h5>\n                            <p class=\"card-text small\">Use code snippets to easily drop new components into your project.</p>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n                    <a class=\"card text-center text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-orange-soft text-orange mb-4\"><i-feather name=\"package\"></i-feather></div>\n                            <h5>Plugins</h5>\n                            <p class=\"card-text small\">We've implemented powerful third party plugins for added functionality.</p>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"waves\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 align-items-center\">\n                <div class=\"col-lg-6\">\n                    <h4>Get the app now!</h4>\n                    <p class=\"lead mb-5 mb-lg-0\">Ready to get started? Download the app now!</p>\n                </div>\n                <div class=\"col-lg-6 text-lg-end\">\n                    <a class=\"me-3\" href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/app-store-badge.svg\" style=\"height: 3rem\" /></a><a href=\"javascript:void(0);\"><img src=\"assets/img/app-badges/google-play-badge.svg\" style=\"height: 3rem\" /></a>\n                </div>\n            </div></div></sbpro-page-section\n></sbpro-layout-landing>\n");

/***/ }),

/***/ 39100:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/multi-purpose/multi-purpose.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-light footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 align-items-center\">\n                    <div class=\"col-lg-6\" data-aos=\"fade-up\">\n                        <h1 class=\"page-header-ui-title\">Build your next project faster with SB UI Kit Pro</h1>\n                        <p class=\"page-header-ui-text mb-5\">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap</p>\n                        <a class=\"btn btn-teal fw-500\" routerLink=\"/\">View Pages<fa-icon class=\"ms-1\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a><a class=\"btn btn-link\" [routerLink]=\"\">Documentation</a>\n                    </div>\n                    <div class=\"col-lg-6 d-none d-lg-block\" data-aos=\"fade-up\" data-aos-delay=\"50\"><img class=\"img-fluid\" src=\"assets/img/illustrations/windows.svg\" /></div>\n                </div>\n            </div></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"layers\"></i-feather></div>\n                    <h3>Built for developers</h3>\n                    <p class=\"mb-0\">Our customizable, block-based build system makes creating your next project fast and easy!</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"smartphone\"></i-feather></div>\n                    <h3>Modern responsive design</h3>\n                    <p class=\"mb-0\">Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\"><i-feather name=\"code\"></i-feather></div>\n                    <h3>Complete documentation</h3>\n                    <p class=\"mb-0\">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 align-items-center justify-content-center\">\n                <div class=\"col-md-9 col-lg-6 order-1 order-lg-0\" data-aos=\"fade-right\">\n                    <div class=\"mb-4\">\n                        <div class=\"content-skewed content-skewed-right\"><img class=\"img-fluid content-skewed-item shadow-lg rounded-3 border-start border-start-lg border-gray-400\" src=\"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-portfolio.png\" /></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0\" data-aos=\"fade-left\" data-aos-offset=\"200\">\n                    <div class=\"mb-5\">\n                        <h2>Here's What You Get</h2>\n                        <p class=\"lead\">When you purchase this UI Kit, you get access to a robust suite of powerful tools and components to help you build your next landing page quickly and easily.</p>\n                    </div>\n                    <div class=\"row gx-5\">\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Landing Pages</h6>\n                            <p class=\"mb-2 small\">We've crafted landing page examples for many popular business and product types.</p>\n                            <a class=\"small d-inline-flex align-items-center\" href=\"javascript:void(0);\">Learn More<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Page Examples</h6>\n                            <p class=\"mb-2 small mb-0\">Use our pre-built page examples to quickly create inner pages to your website.</p>\n                            <a class=\"small d-inline-flex align-items-center\" href=\"javascript:void(0);\">Learn More<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n                        </div>\n                    </div>\n                    <div class=\"row gx-5\">\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Layouts</h6>\n                            <p class=\"mb-2 small mb-0\">Our flex box based layout options make your site beautifully responsive and adaptable to any device.</p>\n                            <a class=\"small d-inline-flex align-items-center\" href=\"javascript:void(0);\">Learn More<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <div class=\"col-md-6 mb-4\">\n                            <h6>Modular Sections</h6>\n                            <p class=\"small mb-0\">All of the sections on each page are modular, so you can drop them into an existing page, or start with a new one!</p>\n                            <a class=\"small d-inline-flex align-items-center\" href=\"javascript:void(0);\">Learn More<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n                        </div>\n                    </div>\n                </div>\n            </div></div\n    ></sbpro-page-section>\n    <hr class=\"m-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"text-center mb-5\">\n                <h2>Simple Pricing</h2>\n                <p class=\"lead\">Easy pricing means no suprises.</p>\n            </div>\n            <div class=\"row gx-5 z-1\">\n                <div class=\"col-lg-4 mb-5 mb-lg-n10\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body px-5\">\n                            <div class=\"h6 d-block\"><div class=\"badge bg-light text-dark rounded-pill fw-normal\">Free</div></div>\n                            <div class=\"pricing-price\"><sup>$</sup>0<span>/mo</span></div>\n                            <ul class=\"fa-ul text-start ms-0\">\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">1 user</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Community support</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-circle me-2 text-gray-200\"></i>Style customizer</li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-circle me-2 text-gray-200\"></i>Custom components</li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-circle me-2 text-gray-200\"></i>Expanded utilities</li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-circle me-2 text-gray-200\"></i>Third-party integration</li>\n                                <li><span class=\"fa-li\"></span><i class=\"far fa-circle me-2 text-gray-200\"></i>Layout options</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-n10\" data-aos=\"fade-up\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body px-5\">\n                            <div class=\"h6 d-block\"><div class=\"badge bg-primary-soft rounded-pill fw-normal text-primary\">Standard</div></div>\n                            <div class=\"pricing-price\"><sup>$</sup>19<span>/mo</span></div>\n                            <ul class=\"fa-ul text-start ms-0\">\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Up to 15 users</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Email and live chat support</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Style customizer</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Custom components</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Expanded utilities</span></li>\n                                <li class=\"mb-2\"><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Third-party integration</span></li>\n                                <li><span class=\"fa-li\"></span><i class=\"far fa-check-circle me-2 text-green\"></i><span class=\"text-dark\">Layout options</span></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-lg-n10\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body px-5\">\n                            <div class=\"h6 d-block\"><div class=\"badge bg-light text-dark rounded-pill fw-normal\">Enterprise</div></div>\n                            <p class=\"card-text py-10\">We offer bulk discounts for larger organizations. Contact us to set up an enterprise level plan!</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-dark pb-10 pt-15\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-10 mt-5\">\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What is SB UI Kit Pro?</h5>\n                            <p class=\"text-white-50\">SB UI Kit Pro is a fully coded, responsive, Bootstrap based UI toolkit for developers.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What can I build with SB UI Kit Pro?</h5>\n                            <p class=\"text-white-50\">Build anything you want to using this UI kit! It is flexible, multipurpose, and full of tools for you to use during development.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">Do I get free updates?</h5>\n                            <p class=\"text-white-50\">All of Start Bootstrap's premium products will come with updates for feature additions, bugfixes, and other small updates.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"d-flex h-100\">\n                        <div class=\"icon-stack flex-shrink-0 bg-teal text-white\"><fa-icon [icon]='[\"fas\", \"question\"]'></fa-icon></div>\n                        <div class=\"ms-4\">\n                            <h5 class=\"text-white\">What frameworks does it integrate with?</h5>\n                            <p class=\"text-white-50\">Our Angular based version of SB UI Kit Pro is built to integrate with the Angular framework!</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center text-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"badge bg-transparent-light rounded-pill badge-marketing mb-4\">Get Started</div>\n                    <h2 class=\"text-white\">Save time with SB UI Kit Pro</h2>\n                    <p class=\"lead text-white-50 mb-5\">Start Bootstrap's premium UI Kit beautifully and intuitively extends the Bootstrap framework making it easy to build your next project!</p>\n                    <a class=\"btn btn-teal fw-500\" [routerLink]=\"\">Buy Now!</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-white pt-10\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-10\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0 divider-right\" data-aos=\"fade\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"testimonial-brand text-gray-400\">\n                            <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500.01 816.05\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <title>google</title>\n                                <path d=\"M307.89.07h22.23c77.18,1.68,153.1,32.72,207.63,87.67-20.13,20.55-40.69,40.27-60.4,60.82-30.62-27.68-67.53-49.08-107.8-56.63C310,79.35,245.81,90.68,195.89,124.65c-54.53,35.66-91.44,96.06-99.41,160.66-8.81,63.76,9.22,130.87,50.75,180.37,39.85,48.23,100.67,78.44,163.59,80.53,58.73,3.36,120-14.68,162.75-55.79,33.56-28.94,49.08-73,54.11-115.77-69.63,0-139.26.42-208.89,0V288.24H612c15.1,92.7-6.71,197.15-77.18,263.43-47,47-112,74.66-178.28,80.11-64.17,6.3-130.45-5.87-187.5-36.91C100.67,558.38,46.14,496.72,19.3,424.15-5.87,357.45-6.29,282,17.2,214.84,38.59,153.6,79.7,99.48,132.55,61.73,183.31,24.4,245,3.85,307.89.07Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1989.93,21.88h89.77v599c-29.78,0-60,.42-89.77-.42.42-199.25,0-398.91,0-598.58Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M811.66,229.52C867,219,927,230.78,972.73,263.91c41.53,29.37,70.47,75.51,79.28,125.84,11.33,58.31-2.93,122.07-40.68,168.21-40.69,51.59-107.39,79.28-172.4,75.08-59.57-3.35-117.45-33.14-152.69-81.79-39.85-53.69-49.5-127.52-27.68-190.44,21.81-67.53,83.47-119.13,153.1-131.29m12.58,79.7a112.72,112.72,0,0,0-58.72,37.33c-40.69,48.66-38.17,127.93,6.71,173.24,25.59,26,64.18,38.17,99.83,31,33.14-5.88,62.08-28.11,78-57.47,27.69-49.92,19.72-118.71-22.65-157.72-27.26-25.17-67.11-35.65-103.19-26.42Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1256.29,229.52c63.34-12.17,132.55,5.45,180,49.91,77.18,69.22,85.57,198.83,19.72,278.53-39.85,50.33-104.45,78-168.21,75.08-60.82-1.68-120.8-31.88-156.88-81.79-40.69-54.95-49.49-130.46-26.42-194.63,23.07-65.44,83.47-115.36,151.84-127.1m12.59,79.7a114.63,114.63,0,0,0-58.73,36.91c-40.27,47.82-38.59,125.84,4.62,171.56,25.58,27.26,65.43,40.69,102.34,33.14,32.72-6.29,62.08-28.11,78-57.47,27.27-50.33,19.3-119.13-23.49-158.14-27.26-25.16-67.11-35.23-102.76-26Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M1633.39,253.85c48.24-30.2,112.42-38.59,164.43-12.59,16.36,7.13,29.78,19.3,42.78,31.46.42-11.32,0-23.07.42-34.81,28.11.42,56.21,0,84.74.42v370c-.42,55.79-14.69,114.94-55,155.62-44,44.89-111.58,58.73-172.4,49.5-65-9.65-121.65-57-146.82-117,25.17-12.16,51.6-21.81,77.6-33.14,14.69,34.4,44.47,63.76,81.8,70.47s80.54-2.51,104.87-33.55c26-31.88,26-75.51,24.74-114.52-19.29,18.88-41.52,35.66-68.37,42-58.3,16.36-122.48-3.78-167.36-43.21-45.31-39.43-72.15-100.25-69.64-160.65,1.26-68.37,39.85-134.23,98.16-169.88m86.83,53.69c-25.59,4.19-49.5,18.46-65.86,38.17-39.43,47-39.43,122.06.42,168.2,22.65,27.27,59.15,42.37,94.38,38.6,33.14-3.36,63.76-24.33,80.12-53.28,27.68-49.07,23.07-115.77-14.26-158.55-23.07-26.43-60-39.43-94.8-33.14Z\" transform=\"translate(0.01 -0.07)\" />\n                                <path d=\"M2187.5,275.24c50.34-47,127.94-62.92,192.53-38.17,61.25,23.07,100.26,81.37,120,141.36-91,37.75-181.63,75.08-272.65,112.83,12.58,23.91,31.88,45.72,57.88,54.53,36.5,13,80.12,8.39,110.74-15.94,12.17-9.22,21.82-21.39,31-33.13,23.07,15.52,46.14,30.62,69.21,46.14-32.71,49.07-87.66,83.47-146.81,88.92-65.43,8-135.06-17.19-177.43-68.37-69.63-80.54-62.92-215.6,15.52-288.17m44.88,77.6c-14.26,20.55-20.13,45.72-19.71,70.47q91.23-37.76,182.46-75.92c-10.06-23.49-34.39-37.75-59.14-41.53C2296.14,298.73,2254.61,320.12,2232.38,352.84Z\" transform=\"translate(0.01 -0.07)\" />\n                            </svg>\n                        </div>\n                        <p class=\"testimonial-quote text-primary\">\"Stripe Billing enabled us to launch our subscription product, eero Plus, on schedule and with billing fully integrated.\"</p>\n                        <div class=\"testimonial-name\">Mark Sieglock</div>\n                        <div class=\"testimonial-position\">Head of Business Operations</div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\" data-aos=\"fade\" data-aos-delay=\"100\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"testimonial-brand text-gray-400\">\n                            <svg data-name=\"Layer 1\" id=\"Layer_1\" viewBox=\"0 0 2500 705.92\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <title>instagram</title>\n                                <path\n                                    d=\"M143.25,0c-22.87,0-52.51,24.24-70,40.38C34.82,74.55,0,137.29,0,187.65c0,71.56,60.86,98.57,76.25,98.57,5.08,0,9.4-2.62,9.4-9.51,0-5.39-3.42-9.89-6.83-14.5C64.73,240.66,60.2,220.1,60.2,192.37,60.2,134.54,86.87,81.54,109,57.28c4.08-4.39,13.3-13.87,16.06-13.87s3.41,2.23,3.41,9.12L125.89,431c0,59.17-17.07,82.67-17.07,96.61,0,6.12,2.65,7.71,7.71,7.71,24,0,47.84-29.21,54.6-39.86,21-36.23,26.12-64.51,26.12-146.09v-318c0-8.61-2.41-12.33-10.59-17.64C174.7,6.11,161,0,143.25,0Zm685,1.06C817,1.1,812.2,7,811.67,25.22l-2.5,75.47-66-2.29c-4-.1-5.81,1.17-7.56,4.69C730,113.6,727,121.83,727,135.55c0,11.16,5.06,12.35,9.58,12.35l68.68,2-.21,144.19c0,30.59-19.3,70.26-53.55,103.26a77.33,77.33,0,0,0,2.78-20.42c0-29.58-19-56.4-44.43-75.37l-62-46.61c13-15,35-44.83,35-70,0-19.51-12.27-27.7-35.14-27.7-32.27,0-69.7,29.55-69.7,73.4,0,16,7.11,30.36,17.91,41.36-14.92,28.32-36,65.57-51.71,92.1-11.84,20.31-31.87,51.43-43.73,51.43-8.74,0-12.77-13.75-12.77-66.57,0-43.89,3.11-91.6,4.68-137.4,0-10.5-1.72-20.19-15.35-29.68-12.54-8-28-19.25-44-19.25-35.46,0-59.61,32.62-76.18,64.53-17.15,33.06-26.42,60.92-39.5,101.35l1.44-139.13c.45-9.92-2.06-13.77-10-17.15-10.3-4.36-25.46-9.4-38.9-9.4-11.24,0-12.61,4.85-12.61,16.65L255.9,346.42l-.17,64.39c0,58.05,7.27,67.73,41.72,67.73,19.07,0,25.18-2.24,25.55-18.09.53-10.49,5.54-35.89,12.33-61.37,19.84-75.19,43.35-134.67,83.89-180,4.22-4.4,7.49-2.82,6.83,3.42,0,0-6.41,101.76-6.41,143.38,0,74,11.39,112.66,48.22,112.66,36.15,0,71.66-46.45,91-77.8l62.18-104c40.28,34.33,68.4,60.95,68.4,93.33,0,20.12-12.7,39.81-32,39.81-24.17,0-39.62-25.49-55.94-25.49-13.55,0-31,26.16-31,41,0,14,30.61,33.86,85.52,33.86,81.06,0,124.54-55.63,150.63-117.23,5,73.12,34.13,115.82,79.57,115.82,29.8,0,64.24-37.65,79.91-83.64,0,0,1.55,11.94,13.45,36.4,16.38,31.94,41.28,46.61,72.21,46.61,38.46,0,71.37-23.32,91.45-62.45,3,29.65,28,62.31,68,62.31,25.14,0,48-19.26,63.09-51,0,0,19.48,52.39,75.83,52.39,31.65,0,69.13-29.32,78.08-50.63l1,31L1345.65,536c-24.27,23.57-50.1,57.43-50.1,94.92,0,47.67,45,75.09,84.63,75.09,41.18,0,68.5-26.09,83.47-48,18.84-28.28,26.79-81.6,26.79-133.71l-1.86-78.36C1544.93,384,1589,298.39,1608.66,237.81l42.77-1.12c8.29-.56,7.88,2.7,6.73,7.53-7.52,31.77-14.08,67.75-14.08,103.57,0,59.2,13.63,84.95,33.23,106,17,17.64,34,23.59,51.82,23.59,34.88,0,56.77-28.8,63.72-47,16.38,31.94,40.51,46.82,71.43,46.82,38.47,0,71.37-23.32,91.46-62.45,3,29.65,27.94,62.31,68,62.31,29.91,0,47.26-17.26,60.91-49.78.27,10.46.67,21.61,1,32.06.36,5.41,4.69,8.84,8.56,10.25,12.71,4.81,23.87,7.22,33.9,7.22,26.15,0,31.82-5.37,31.82-22.46,0-28.2.83-72.74,8.84-108.5,8.5-35.61,21.34-75.91,39-104,1.6-2.9,5.51-2.14,5.68,1.37,2.54,60,6.55,161.59,22.32,187.89,7.77,12.54,19.8,21.68,37.8,21.68,8.44,0,18.79-3.59,21.44-5.84,2.68-2.09,4-4.42,3.87-8.73,0-76.71,23.92-151,47.88-200.91.66-1.48,2.53-1.6,2.46.35L2347.89,293c0,90.78,6.54,148.13,51.89,175.7a59.36,59.36,0,0,0,29.18,7.57,60.85,60.85,0,0,0,54.64-33.8c8.47-16.19,16.4-47.36,16.4-65,0-6.83.08-18-11.12-18-6.14,0-9.83,4.52-11.3,11.37-3.57,14.83-6.5,27.54-12,42.21-5.29,14-13.19,22.14-22.56,22.14-11,0-16.59-8.66-19.79-14-14-21.42-15.17-70.63-15.17-111.7l3.38-105.72c0-8.75-3.65-19.22-17.14-26.94-9.06-5.21-32-15-46-15-13,0-19.32,7.37-24,18.2-8.81,19.44-38.25,95.69-46.15,157.68-.28,1.63-2.32,2-2.46-.11-4.1-43.84-6.21-96.66-6.16-132.29,0-10.77-2.64-26.18-25.49-36.16-11.11-4.6-20.29-7.42-31.51-7.42-13.92,0-16.92,6.81-21.9,15.84-15.77,29.13-26.67,67.12-43,115l.25-109.66c0-5.13-3.14-11.85-12.15-13.66-22.32-5.13-32.66-7.46-41.46-7.46-6.41,0-9.93,5.1-9.93,10.63l-1.2,187c-4.32,22.89-21.82,77.52-46.65,77.52-20.38,0-29.89-20.65-29.89-107l3.7-140.25c0-8.86-5.81-12.58-14.29-16.34-12.12-4.81-21.76-6.72-34.08-6.72-15.46,0-20.76,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-105.68,72.49-105.68,177.82-.59,29.54,6.55,58.9,6.55,58.9-5.46,24.51-18.27,44.49-36,44.49-22.34,0-36.58-31.58-36.58-86.32,0-54.9,20.91-116.82,20.91-133.6,0-19.51-12.78-31.86-35.41-31.86-11.34,0-53.39,9.54-75,12.67,0,0,2.43-10.26,2.25-18.34,0-19.24-9-31.29-31.44-31.29-27.38,0-47.49,19.55-47.49,52.91,0,15,8.62,28.82,20,36.26-14.81,61.78-38.89,107.73-74.38,159.06L1491,189c0-6.76-1.8-11-15-16.09a83.33,83.33,0,0,0-32.77-6.52c-20.84,0-19.46,14.88-18.34,26-9.54-16.9-30.4-37-62.6-37-87.73,0-114.67,133.79-101.46,228.8,0,11.58-11.31,52.7-36.86,52.7-20.38,0-29.88-20.65-29.88-107l3.73-140.25c0-8.87-5.86-12.59-14.33-16.34-12.12-4.81-21.73-6.72-34-6.72-15.46,0-20.77,7.4-17.64,25.17-17-23-34-35.7-64-35.7-60.26,0-106.29,66.29-106.29,171.62,0,40.21-34.62,101.57-58.89,101.57-13.49,0-27.85-24.76-27.85-88,.07-43.11,5.95-189.89,5.95-189.89l84.74-1.37c4,0,6.38-4.46,7.88-7.18,3.89-7.9,5.77-13.15,5.77-22.6,0-8.53-1.7-11.64-12.63-12.25L882,103l3.59-78.68c.26-5-2.74-8.21-8.16-10.63C861,7.28,841,1.1,828.29,1.1Zm256.46,206.15c22.59,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.92-127.44,56.33-127.44Zm813.64,0c22.6,0,45.52,20.61,45.52,93.71,0,92.05-33.53,134.88-59.32,134.88-24.17,0-42.53-34.12-42.53-101.15,0-67.74,17.93-127.44,56.33-127.44Zm-516.06.43c29.49,0,42.53,30.39,42.53,89.31,0,88.83-26.4,139.4-58.47,139.4-20.48,0-44-33.61-42.78-99.73,0-42.27,13.79-129,58.72-129Zm49.92,297.16v35c0,116.1-30.94,135.92-55.8,135.92-9.42,0-32.49-7.11-32.49-35.84,0-40.15,42-85.83,55-99.94l33.26-35.13Z\"\n                                    transform=\"translate(0 -0.04)\"\n                                />\n                            </svg>\n                        </div>\n                        <p class=\"testimonial-quote text-primary\">\"We implemented Stripe to introduce new billing and payment models and increased our trial conversion by 300%.\"</p>\n                        <div class=\"testimonial-name\">Sylvan Boucard</div>\n                        <div class=\"testimonial-position\">Payments Product Manager</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-6 mb-lg-n10 mb-5 mb-lg-0 z-1\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-primary text-white flex-shrink-0\"><i-feather name=\"activity\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-primary\">Work smarter, not harder</h5>\n                                    <p class=\"card-text text-gray-600\">Learn more about how our product can save you time and effort in the long run!</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-6 mb-lg-n10 z-1\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-secondary text-white flex-shrink-0\"><i-feather name=\"code\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-secondary\">Built for developers</h5>\n                                    <p class=\"card-text text-gray-600\">Our components, utilities, and layouts are built with developers in mind.</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-light py-10\"\n        ><div class=\"container px-5 mt-5\">\n            <div class=\"row gx-5 align-items-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"h4 fw-normal\">Ready to get started?</div>\n                    <p class=\"lead mb-0 text-gray-500\">Get in touch or create an account.</p>\n                </div>\n                <div class=\"col-lg-6 text-lg-end\"><a class=\"btn btn-primary fw-500 me-3 my-2\" [routerLink]=\"\">Contact Sales</a><a class=\"btn btn-white my-2 fw-500\" [routerLink]=\"\">Create Account</a></div>\n            </div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"m-0\"\n/></sbpro-layout-landing>\n");

/***/ }),

/***/ 386:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/nav-only/nav-only.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <h1 class=\"mb-4\">This is an example of a page without a header</h1>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eos quisquam expedita quo officiis porro provident laborum. Earum, consequatur provident, ipsam at excepturi rerum laborum aliquam facere molestias mollitia recusandae.</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Perspiciatis sunt voluptatum officia non harum, dolores omnis fugiat nam ad optio cumque molestiae impedit dignissimos velit commodi aliquid iure?</p>\n            <p class=\"mb-0\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sapiente natus architecto aut porro! Vitae iusto praesentium recusandae debitis, cumque illum amet suscipit rem pariatur, magni iure laborum inventore in!</p>\n            <hr class=\"my-5\" />\n            <h4 class=\"mb-4\">\n                <div class=\"icon-stack bg-primary text-white me-2\"><i-feather name=\"arrow-right\"></i-feather></div>\n                Use this page to create additional inner pages\n            </h4>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eos quisquam expedita quo officiis porro provident laborum. Earum, consequatur provident, ipsam at excepturi rerum laborum aliquam facere molestias mollitia recusandae.</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Perspiciatis sunt voluptatum officia non harum, dolores omnis fugiat nam ad optio cumque molestiae impedit dignissimos velit commodi aliquid iure?</p>\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sapiente natus architecto aut porro! Vitae iusto praesentium recusandae debitis, cumque illum amet suscipit rem pariatur, magni iure laborum inventore in!</p>\n            <div class=\"card bg-light shadow-none\">\n                <div class=\"card-body\">\n                    <h6>Some basic bullet points to show you some list items</h6>\n                    <ul class=\"mb-0\">\n                        <li class=\"font-italic\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta fugiat eveniet, dignissimos facere quisquam, odit suscipit aliquid magnam?</li>\n                        <li class=\"font-italic\">Iste, mollitia, beatae impedit soluta fugiat illo consectetur earum tempore veniam pariatur delectus?</li>\n                    </ul>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 25604:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/portfolio/portfolio.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-white page-header-ui-light\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <img class=\"mb-4\" src=\"assets/img/demo/avataaars.svg\" style=\"width: 15rem\" />\n                        <h1 class=\"page-header-ui-title\">Welcome to my portfolio!</h1>\n                        <p class=\"page-header-ui-text\">I am a graphic artist, illustrator, and UI designer specializing in modern, creative design based in Wildemount, TX</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-red text-white mb-4\"><i-feather name=\"edit-3\"></i-feather></div>\n                    <h3>Illustration</h3>\n                    <p class=\"mb-0\">I provide custom illustration services for contract clients</p>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"icon-stack icon-stack-xl bg-yellow text-white mb-4\"><i-feather name=\"layout\"></i-feather></div>\n                    <h3>UI Design</h3>\n                    <p class=\"mb-0\">User experience and interface designs is one of my specialties</p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"icon-stack icon-stack-xl bg-blue text-white mb-4\"><i-feather name=\"droplet\"></i-feather></div>\n                    <h3>Graphic Design</h3>\n                    <p class=\"mb-0\">Photo restoration, post processing, and other photo services</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-header headerClasses=\"bg-white py-10\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jWQj5Wjepuk/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Ecnx13MEPK0/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Flower Mug</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/eUCy1jb_B7I/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Cactus Display</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/cuTcfqsES6o/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Reading</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jipR1oTCO7U/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">White Book</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/n3sqjJzZiBM/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Photo Face</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Zr7MxECDTQ8/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Catalog</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/QcyenJDqDzw/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Notebook</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/TIutDBFEtcY/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book Stand</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8 text-center\">\n                    <h2>Contact me</h2>\n                    <p class=\"mb-5\">I am available for contract work, when you're ready - let me know!</p>\n                    <div class=\"row gx-5\">\n                        <div class=\"col\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"icon-stack icon-stack-lg bg-orange text-white mb-3\"><i-feather name=\"mail\"></i-feather></div>\n                                    <div class=\"small\"><a [routerLink]=\"\">hello@example.com</a></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"icon-stack icon-stack-lg bg-green text-white mb-3\"><i-feather name=\"smartphone\"></i-feather></div>\n                                    <div class=\"small\">555-123-4567</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 69169:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/press/press.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-light py-5\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"d-flex align-items-center justify-content-between\">\n                <h6 class=\"mb-0\">Featured Story</h6>\n                <div>\n                    <a class=\"text-arrow-icon small\" [routerLink]=\"\">More headlines<i-feather name=\"arrow-right\"></i-feather></a>\n                </div>\n            </div>\n            <hr class=\"mb-4\" />\n            <div class=\"card mb-4\">\n                <div class=\"card-body p-0\">\n                    <div class=\"row gx-0\">\n                        <div class=\"col-lg-6 p-5\">\n                            <a class=\"badge badge-marketing bg-primary-soft rounded-pill text-primary mb-3\" [routerLink]=\"\">Web</a><a class=\"text-dark\" [routerLink]=\"\"><h1>News companies post headline about creating new websites with powerful UI kits</h1></a>\n                            <p>When creating and developing startups, using a UI kit to bootstrap your companies website can be an extremely efficient way to save time, money, and runway.</p>\n                            <a class=\"text-arrow-icon small\" [routerLink]=\"\">Read more<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <div class=\"col-lg-6 align-self-stretch bg-img-cover d-none d-lg-flex\" style=\"background-image: url('https://source.unsplash.com/npxXWgQ33ZQ/1200x800')\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"d-flex align-items-center justify-content-between\">\n                <h6 class=\"mb-0\">Top Stories</h6>\n                <div>\n                    <a class=\"text-arrow-icon small\" [routerLink]=\"\">View more<i-feather name=\"arrow-right\"></i-feather></a>\n                </div>\n            </div>\n            <hr class=\"mb-4\" />\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-7 col-xl-8\">\n                    <div class=\"d-flex\">\n                        <div class=\"flex-grow-1\">\n                            <a class=\"text-dark\" [routerLink]=\"\"><h5 class=\"mt-0\">Is the Bootstrap framework the best way to build a mobile responsive website?</h5></a>\n                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                            <a class=\"text-arrow-icon small\" [routerLink]=\"\">Read more<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <a class=\"flex-shrink-0\" [routerLink]=\"\"><img class=\"align-self-start rounded shadow media-img ms-4\" src=\"https://source.unsplash.com/fG1vt_RtUGs/160x160\" alt=\"\" /></a>\n                    </div>\n                    <hr class=\"my-4\" />\n                    <div class=\"d-flex\">\n                        <div class=\"flex-grow-1\">\n                            <a class=\"text-dark\" [routerLink]=\"\"><h5 class=\"mt-0\">Is virtual reality the new UI? Exploring the use of virtual reality and 3D user interfaces for everyday products</h5></a>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat possimus delectus odit vero! Accusantium, omnis! Amet reiciendis ex numquam. Minus corporis, tempore facere placeat repellat ipsum eaque similique neque.</p>\n                            <a class=\"text-arrow-icon small\" [routerLink]=\"\">Read more<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <a class=\"flex-shrink-0\" [routerLink]=\"\"><img class=\"align-self-start rounded shadow media-img ms-4\" src=\"https://source.unsplash.com/HI6gy-p-WBI/160x160\" alt=\"\" /></a>\n                    </div>\n                    <hr class=\"my-4\" />\n                    <div class=\"d-flex\">\n                        <div class=\"flex-grow-1\">\n                            <a class=\"text-dark\" [routerLink]=\"\"><h5 class=\"mt-0\">How cats can improve your workflow productivity</h5></a>\n                            <p>Quasi error voluptates, commodi enim voluptate, quisquam vitae temporibus asperiores velit vero aperiam culpa iste eius autem praesentium ducimus similique iusto dolorum.</p>\n                            <a class=\"text-arrow-icon small\" [routerLink]=\"\">Read more<i-feather name=\"arrow-right\"></i-feather></a>\n                        </div>\n                        <a class=\"flex-shrink-0\" [routerLink]=\"\"><img class=\"align-self-start rounded shadow media-img ms-4\" src=\"https://source.unsplash.com/bN9FFTPlLjU/160x160\" alt=\"\" /></a>\n                    </div>\n                    <hr class=\"my-4 d-lg-none\" />\n                </div>\n                <div class=\"col-lg-5 col-xl-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h6>Opinion</h6>\n                            <hr />\n                            <div class=\"d-flex mb-4\">\n                                <div class=\"avatar avatar-lg\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/MTZTGvDsHFY/64x64\" /></div>\n                                <div class=\"ms-3\">\n                                    <a class=\"text-dark\" [routerLink]=\"\"><h6 class=\"mb-1\">Bootstrap is the best CSS framework, hands down</h6></a>\n                                    <div class=\"small text-gray-500\">by <a class=\"text-gray-500\" [routerLink]=\"\">William Cole</a></div>\n                                </div>\n                            </div>\n                            <div class=\"d-flex mb-4\">\n                                <div class=\"avatar avatar-lg\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/KBv5dEN3QtY/64x64\" /></div>\n                                <div class=\"ms-3\">\n                                    <a class=\"text-dark\" [routerLink]=\"\"><h6 class=\"mb-1\">Bootstrap is the best CSS framework, hands down</h6></a>\n                                    <div class=\"small text-gray-500\">by <a class=\"text-gray-500\" [routerLink]=\"\">Ewan Rogers</a></div>\n                                </div>\n                            </div>\n                            <div class=\"d-flex mb-4\">\n                                <div class=\"avatar avatar-lg\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/rDEOVtE7vOs/64x64\" /></div>\n                                <div class=\"ms-3\">\n                                    <a class=\"text-dark\" [routerLink]=\"\"><h6 class=\"mb-1\">Bootstrap is the best CSS framework, hands down</h6></a>\n                                    <div class=\"small text-gray-500\">by <a class=\"text-gray-500\" [routerLink]=\"\">Alicia Allen</a></div>\n                                </div>\n                            </div>\n                            <div class=\"d-flex mb-4\">\n                                <div class=\"avatar avatar-lg\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/jIM8kVsFKlM/64x64\" /></div>\n                                <div class=\"ms-3\">\n                                    <a class=\"text-dark\" [routerLink]=\"\"><h6 class=\"mb-1\">Bootstrap is the best CSS framework, hands down</h6></a>\n                                    <div class=\"small text-gray-500\">by <a class=\"text-gray-500\" [routerLink]=\"\">Kolby Brock</a></div>\n                                </div>\n                            </div>\n                            <div class=\"d-flex\">\n                                <div class=\"avatar avatar-lg\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/_H6wpor9mjs/64x64\" /></div>\n                                <div class=\"ms-3\">\n                                    <a class=\"text-dark\" [routerLink]=\"\"><h6 class=\"mb-1\">Bootstrap is the best CSS framework, hands down</h6></a>\n                                    <div class=\"small text-gray-500\">by <a class=\"text-gray-500\" [routerLink]=\"\">Sara Gray</a></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr class=\"my-4\" />\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-4\">\n                    <h6>Tech</h6>\n                    <hr class=\"my-4\" />\n                    <a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Newest tech from 2020 that can improve our quality of life</h6>\n                        <p class=\"text-gray-600 small mb-4\">New technology is always improving the way we live. This year, we've made some major advancements.</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Robotics and the future of industry</h6>\n                        <p class=\"text-gray-600 small mb-4\">Machining and tooling systems are improving everday with the help of modern robotics.</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Artificial intelligence - should we be worried?</h6>\n                        <p class=\"text-gray-600 small mb-4\">Ever since James Cameron's blockbuster, the discussion about whether AI is safe has been on our minds.</p></a\n                    ><a class=\"text-arrow-icon small\" [routerLink]=\"\">More from Tech<i-feather name=\"arrow-right\"></i-feather></a>\n                </div>\n                <div class=\"col-lg-4\">\n                    <h6>Business</h6>\n                    <hr class=\"my-4\" />\n                    <a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Cottage industries and the passion economy</h6>\n                        <p class=\"text-gray-600 small mb-4\">An old turn of phase states that if you do what you love, you won't work a day in your life. In today's economy, some are pushing that concept to the limit.</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Everybody love pizza!</h6>\n                        <p class=\"text-gray-600 small mb-4\">Well, not everybody, but pizza companies are making major moves towards global expansion.</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>Tax season is here, and you can file for free</h6>\n                        <p class=\"text-gray-600 small mb-4\">Before you go and pay to get your taxes filed, take a look at some of these free options!</p></a\n                    ><a class=\"text-arrow-icon small\" [routerLink]=\"\">More from Business<i-feather name=\"arrow-right\"></i-feather></a>\n                </div>\n                <div class=\"col-lg-4\">\n                    <h6>Health</h6>\n                    <hr class=\"my-4\" />\n                    <a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>The carnivore diet, what the science says...</h6>\n                        <p class=\"text-gray-600 small mb-4\">It's like having a meat lover's pizza without the bread, cheese, and sauce - but is it healthy?</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>High intensity workouts and their effect on blood pressure</h6>\n                        <p class=\"text-gray-600 small mb-4\">Working out with more intensity for less time, is it worth the added exhaustion?</p></a\n                    ><a class=\"text-dark mb-4\" [routerLink]=\"\"\n                        ><h6>An annual review of pathology and disease</h6>\n                        <p class=\"text-gray-600 small mb-4\">This year's statistics are in, and the numbers have a lot to say.</p></a\n                    ><a class=\"text-arrow-icon small\" [routerLink]=\"\">More from Health<i-feather name=\"arrow-right\"></i-feather></a>\n                </div>\n            </div>\n            <div class=\"card mb-n5 z-1\">\n                <div class=\"card-body p-5\">\n                    <div class=\"row gx-5 align-items-center\">\n                        <div class=\"col-lg-6\">\n                            <h4>Get the latest news</h4>\n                            <p class=\"lead text-gray-500 mb-0\">Stay in the loop with the latest stories and breaking headlines!</p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"input-group mb-2\">\n                                <input class=\"form-control form-control-solid\" type=\"text\" placeholder=\"youremail@example.com\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" />\n                                <div class=\"input-group-append\"><button class=\"btn btn-primary\" id=\"button-addon2\" type=\"button\">Sign up</button></div>\n                            </div>\n                            <div class=\"small text-gray-500\">You can unsubscribe at any time.</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 65077:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/real-estate/real-estate.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-white footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-primary overlay-90 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\" backgroundImage='url(\"https://source.unsplash.com/g39p1kDjvSY/1600x1200\")'\n        ><div class=\"page-header-ui-content py-5 position-relative\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Find your forever home</h1>\n                        <p class=\"page-header-ui-text mb-5\">It's time to find the home of your dreams, and you search begins here. We make it easy to find the property that fits your needs and budget.</p>\n                    </div>\n                </div>\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-6 col-lg-8 text-center\">\n                        <form class=\"row row-cols-1 row-cols-md-auto g-3 align-items-center\">\n                            <div class=\"col flex-grow-1\"><label class=\"sr-only\" for=\"inputEmail\">Enter and address, city, state, or ZIP</label><input class=\"form-control form-control-solid\" id=\"inputEmail\" type=\"text\" placeholder=\"Search properties near you...\" /></div>\n                            <div class=\"col\"><button class=\"btn btn-teal fw-500\" type=\"submit\">Search</button></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"d-flex align-items-center justify-content-between mb-4\">\n                <h2 class=\"mb-0\">Featured Listings</h2>\n                <a class=\"btn btn-sm btn-primary d-inline-flex align-items-center\" [routerLink]=\"\">See more<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 1 month</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/2d4lAQAlbDA/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$678,999</h3>\n                            <div class=\"small text-gray-800 fw-500\">4 bd | 3 ba | 1,820 sqft</div>\n                            <div class=\"small text-gray-500\">Picsard, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 6 days</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/MP0bgaS_d1c/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$409,000</h3>\n                            <div class=\"small text-gray-800 fw-500\">3 bd | 2 ba | 1,350 sqft</div>\n                            <div class=\"small text-gray-500\">Sartalik, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 2 weeks</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/iAftdIcgpFc/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$1,299,999</h3>\n                            <div class=\"small text-gray-800 fw-500\">6 bd | 5.5 ba | 4,220 sqft</div>\n                            <div class=\"small text-gray-500\">Picsard, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n            </div></div\n    ></sbpro-page-section>\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"d-flex align-items-center justify-content-between mb-4\">\n                <h2 class=\"mb-0\">Newest Listings</h2>\n                <a class=\"btn btn-sm btn-primary d-inline-flex align-items-center\" [routerLink]=\"\">See more<i-feather class=\"ms-1\" name=\"arrow-right\"></i-feather></a>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 3 days</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/178j8tJrNlc/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$556,999</h3>\n                            <div class=\"small text-gray-800 fw-500\">5 bd | 3 ba | 2,420 sqft</div>\n                            <div class=\"small text-gray-500\">Sartalik, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 5 days</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/IYfp2Ixe9nM/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$384,000</h3>\n                            <div class=\"small text-gray-800 fw-500\">4 bd | 2 ba | 1,750 sqft</div>\n                            <div class=\"small text-gray-500\">Picsard, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><div class=\"card-flag card-flag-dark card-flag-top-right\">Listed 1 week</div>\n                        <img class=\"card-img-top\" src=\"https://source.unsplash.com/XbwHrt87mQ0/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h3 class=\"text-primary mb-0\">$349,999</h3>\n                            <div class=\"small text-gray-800 fw-500\">3 bd | 2 ba | 1,231 sqft</div>\n                            <div class=\"small text-gray-500\">Sartalik, GA</div>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-gray-500\">View listing</div>\n                            <div class=\"small text-gray-500 lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n            </div></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6 text-center mb-5\">\n                    <h2>Discover Piscard</h2>\n                    <p class=\"lead mb-0\">Voted the most desireable county in the region, discover what Piscard has to offer!</p>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/NHPyk3hWt30/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Outdoor Activities</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-lg-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/GkZvxVsHYWw/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Historic Downtown</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/lnsHBbBC__w/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Town Centers</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-lg-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/N_aihp118p8/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Award Winning Schools</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/SIOdjcYotms/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Beautiful Beaches</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-lg-0\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/eE-ffApg7oI/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Community Farmers Market</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-10\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0 divider-right\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"avatar avatar-xl mb-3\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/rDEOVtE7vOs/96x96\" /></div>\n                        <p class=\"testimonial-quote text-primary\">\"Working with the realtor's has been a true joy. They helped us purchase our home and made the whole process so easy!\"</p>\n                        <div class=\"testimonial-name\">Valerie Luna</div>\n                        <div class=\"testimonial-position\">Jefferson, GA</div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"avatar avatar-xl mb-3\"><img class=\"avatar-img\" src=\"https://source.unsplash.com/MTZTGvDsHFY/96x96\" /></div>\n                        <p class=\"testimonial-quote text-primary\">\"Selling a home has never been so easy. The real estate group helped me prepare my home, list it, and sell it, all within a few weeks!\"</p>\n                        <div class=\"testimonial-name\">Destrian Barnes</div>\n                        <div class=\"testimonial-position\">Fayetville, NC</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-primary text-white flex-shrink-0\"><i-feather name=\"home\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-primary\">Buy a home</h5>\n                                    <p class=\"card-text text-gray-600\">Looking for your dream home? Get in touch with us now to start your search!</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-6\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-secondary text-white flex-shrink-0\"><i-feather name=\"dollar-sign\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-secondary\">Sell your home</h5>\n                                    <p class=\"card-text text-gray-600\">Our award winning real estate group is ready to take on the challenge!</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"my-0\"\n/></sbpro-layout-landing>\n");

/***/ }),

/***/ 96024:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/rental/rental.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-white footer-light\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-light overlay-80 page-header-ui-light\" borderType=\"rounded\" borderClasses=\"text-white\" backgroundImage='url(\"https://source.unsplash.com/R-LK3sqLiBw/1600x1200\")'\n        ><div class=\"page-header-ui-content py-5 position-relative\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-xl-8 col-lg-10 text-center\">\n                        <h1 class=\"page-header-ui-title\">Rent your home or extra room</h1>\n                        <p class=\"page-header-ui-text mb-5\">Opening your home to vacationers is a great way to earn some extra income, and this is a great way to get started!</p>\n                        <a class=\"btn btn-primary fw-500 me-2\" [routerLink]=\"\">Get Started</a><a class=\"btn btn-link fw-500\" [routerLink]=\"\">Learn More</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/2d4lAQAlbDA/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title mb-2\">Outdoor Patio</h4>\n                            <p class=\"card-text\">Our property features a beautiful, private outdoor area with seating and a pool.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-primary\">See more</div>\n                            <div class=\"small text-primary lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/MP0bgaS_d1c/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title mb-2\">Full Kitchen</h4>\n                            <p class=\"card-text\">A fully stocked kitchen with all modern amenities provides a peaceful cooking environment.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-primary\">See more</div>\n                            <div class=\"small text-primary lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/iAftdIcgpFc/800x500\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title mb-2\">Comfortable Bedding</h4>\n                            <p class=\"card-text\">With three newly updated bedrooms you will be sleeping soundly during your stay.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent border-top d-flex align-items-center justify-content-between\">\n                            <div class=\"small text-primary\">See more</div>\n                            <div class=\"small text-primary lh-1\"><i-feather name=\"arrow-right\"></i-feather></div></div\n                    ></a>\n                </div>\n            </div>\n            <div class=\"text-center mb-4\"><h2>Your questions, answered.</h2></div>\n            <sbpro-card-accordion-faq [faqs]=\"faqs\"></sbpro-card-accordion-faq></div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-15 bg-img-cover overlay overlay-light overlay-80\" backgroundImage='url(\"https://source.unsplash.com/BlIhVfXbi9s/1600x800\")' borderType=\"angled\" borderClasses=\"text-white\"\n        ><div class=\"container px-5 z-1\">\n            <div class=\"mt-5\">\n                <div class=\"display-4 mb-3 text-dark\">Ready to book?</div>\n                <a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Search Availability</a>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-header headerClasses=\"bg-white py-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0 divider-right\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"mb-3 text-yellow\"><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon></div>\n                        <p class=\"testimonial-quote text-primary\">\"I was impressed with how beautiful and clean this property was. The owner definitely goes the extra mile to help their guests!\"</p>\n                        <div class=\"testimonial-name\">Adam Hall</div>\n                        <div class=\"testimonial-position\">Lisbon, Portugal</div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"testimonial p-lg-5\">\n                        <div class=\"mb-3 text-yellow\"><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon><fa-icon [icon]='[\"fas\", \"star\"]'></fa-icon></div>\n                        <p class=\"testimonial-quote text-primary\">\"Amazing location, convenient parking, and a lots of amenities and extras. I will definitely be returning here whenever I'm in town.\"</p>\n                        <div class=\"testimonial-name\">Lia Peterson</div>\n                        <div class=\"testimonial-position\">Sacramento, CA, USA</div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    >\n    <hr class=\"my-0\"\n/></sbpro-layout-landing>\n");

/***/ }),

/***/ 67087:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/resume/resume.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-60 page-header-ui-dark\" borderType=\"angled\" borderClasses=\"text-white\" backgroundImage='url(\"https://source.unsplash.com/6dW3xyQvcYE/1600x1200\")'\n        ><div class=\"page-header-ui-content py-15 position-relative\">\n            <div class=\"container px-5\">\n                <div class=\"row gx-5\">\n                    <div class=\"col-xl-6 col-lg-8\">\n                        <h1 class=\"page-header-ui-title\">Chris Kelly</h1>\n                        <p class=\"page-header-ui-text mb-5\">I am a sales professional specializing in product marketing and distribution based in Clarcton, MA</p>\n                        <a class=\"btn btn-teal btn-lg fw-500\" [routerLink]=\"\"><fa-icon class=\"me-2 text-white-75\" [icon]='[\"fas\", \"file-pdf\"]'></fa-icon>Download Resume</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"angled\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded small mb-2\">Experience</div>\n            <hr class=\"mt-0 mb-5\" />\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-8\">\n                    <h4 class=\"mb-0\">Senior Sales Analyst</h4>\n                    <p class=\"lead\">Intelitec Solutions</p>\n                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\"><div class=\"text-gray-400 small\">May 2018 - Present</div></div>\n            </div>\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-8\">\n                    <h4 class=\"mb-0\">Marketing Analyst</h4>\n                    <p class=\"lead\">Shout Media Productions</p>\n                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\"><div class=\"text-gray-400 small\">August 2015 - May 2018</div></div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8\">\n                    <h4 class=\"mb-0\">Sales Representative</h4>\n                    <p class=\"lead\">Gamby Enterprises</p>\n                    <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\"><div class=\"text-gray-400 small\">June 2011 - August 2015</div></div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"angled\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded small mb-2\">Education</div>\n            <hr class=\"mt-0 mb-5\" />\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-8\">\n                    <h4 class=\"mb-0\">University of Colorado Boulder</h4>\n                    <p class=\"lead\">Master of Business Administration (MBA)</p>\n                    <p>Graduated from University of Colorado Boulder's lockstep evening MBA program</p>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\"><div class=\"text-gray-400 small\">September 2013 - May 2015</div></div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8\">\n                    <h4 class=\"mb-0\">Clarcton University</h4>\n                    <p class=\"lead\">Bachelor of Science</p>\n                    <p>Graduated with a degree in Marketing, with a specialization in product management and a minor in Finance</p>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\"><div class=\"text-gray-400 small\">August 2009 - May 2013</div></div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"angled\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded small mb-2\">Skills</div>\n            <hr class=\"mt-0 mb-5\" />\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8\">\n                    <p>Attention to detail and a general sense of product viability are my specialties. I am motivated to provide value in a team environment, and I am committed to creating the best possible experience for customers.</p>\n                    <ul class=\"mb-0 text-gray-700\">\n                        <li>Market analysis</li>\n                        <li>Supply chain management</li>\n                        <li>Business plan preparation</li>\n                        <li>Technological entrepreneurship</li>\n                        <li>Report generation</li>\n                        <li>Presentation creation</li>\n                    </ul>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"angled\" borderClasses=\"text-white\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded small mb-2\">Interests</div>\n            <hr class=\"mt-0 mb-5\" />\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8\">\n                    <p>Apart from being a marketing analyst, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>\n                    <p>When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the marketing management world.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"angled\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"text-uppercase-expanded small mb-2\">Contact</div>\n            <hr class=\"mt-0 mb-5\" />\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-8 mb-4 mb-lg-0\">\n                    <h3>Chris Kelly</h3>\n                    <p class=\"lead mb-0\">(555) 392-0323</p>\n                    <a [routerLink]=\"\">ckelly@example.com</a>\n                </div>\n                <div class=\"col-lg-4 text-lg-end\">\n                    <a class=\"btn btn-teal btn-lg fw-500\" [routerLink]=\"\"><fa-icon class=\"me-2 text-white-75\" [icon]='[\"fas\", \"file-pdf\"]'></fa-icon>Download Resume</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n");

/***/ }),

/***/ 26367:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landings/containers/video-feature/video-feature.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>video-feature</p>\n");

/***/ })

}]);
//# sourceMappingURL=src_modules_landings_landings-routing_module_ts-es2015.js.map