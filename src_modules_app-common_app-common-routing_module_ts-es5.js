(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_ui_kit_pro_angular"] = self["webpackChunksb_ui_kit_pro_angular"] || []).push([["src_modules_app-common_app-common-routing_module_ts"], {
    /***/
    94646:
    /*!*************************************************************!*\
      !*** ./src/modules/app-common/app-common-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ROUTES": function ROUTES() {
          return (
            /* binding */
            _ROUTES
          );
        },

        /* harmony export */
        "AppCommonRoutingModule": function AppCommonRoutingModule() {
          return (
            /* binding */
            _AppCommonRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-common.module */
      13939);
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers */
      83943);
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var _ROUTES = [{
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.VersionComponent
      }];

      var _AppCommonRoutingModule = /*#__PURE__*/_createClass(function AppCommonRoutingModule() {
        _classCallCheck(this, AppCommonRoutingModule);
      });

      _AppCommonRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _AppCommonRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_modules_app-common_app-common-routing_module_ts-es5.js.map