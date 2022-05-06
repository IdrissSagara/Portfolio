(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunksb_ui_kit_pro_angular"] = self["webpackChunksb_ui_kit_pro_angular"] || []).push([["src_modules_error_error-routing_module_ts"], {
    /***/
    77710:
    /*!***********************************************!*\
      !*** ./src/modules/error/components/index.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "components": function components() {
          return (
            /* binding */
            _components
          );
        }
        /* harmony export */

      });

      var _components = [];
      /***/
    },

    /***/
    62771:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-400/error-400.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error400Component": function Error400Component() {
          return (
            /* binding */
            _Error400Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_400_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-400.component.html */
      17783);
      /* harmony import */


      var _error_400_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-400.component.scss */
      3776);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error400Component = /*#__PURE__*/function () {
        function Error400Component() {
          _classCallCheck(this, Error400Component);
        }

        _createClass(Error400Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error400Component;
      }();

      _Error400Component.ctorParameters = function () {
        return [];
      };

      _Error400Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-400',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_400_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_400_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error400Component);
      /***/
    },

    /***/
    88407:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-401/error-401.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error401Component": function Error401Component() {
          return (
            /* binding */
            _Error401Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_401_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-401.component.html */
      72705);
      /* harmony import */


      var _error_401_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-401.component.scss */
      50142);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error401Component = /*#__PURE__*/function () {
        function Error401Component() {
          _classCallCheck(this, Error401Component);
        }

        _createClass(Error401Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error401Component;
      }();

      _Error401Component.ctorParameters = function () {
        return [];
      };

      _Error401Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sb-error-401',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_401_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_401_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error401Component);
      /***/
    },

    /***/
    73184:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-403/error-403.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error403Component": function Error403Component() {
          return (
            /* binding */
            _Error403Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_403_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-403.component.html */
      16046);
      /* harmony import */


      var _error_403_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-403.component.scss */
      80621);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error403Component = /*#__PURE__*/function () {
        function Error403Component() {
          _classCallCheck(this, Error403Component);
        }

        _createClass(Error403Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error403Component;
      }();

      _Error403Component.ctorParameters = function () {
        return [];
      };

      _Error403Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-403',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_403_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_403_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error403Component);
      /***/
    },

    /***/
    50914:
    /*!***************************************************************************!*\
      !*** ./src/modules/error/containers/error-404-1/error-404-1.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error4041Component": function Error4041Component() {
          return (
            /* binding */
            _Error4041Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_404_1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-404-1.component.html */
      30250);
      /* harmony import */


      var _error_404_1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-404-1.component.scss */
      76622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error4041Component = /*#__PURE__*/function () {
        function Error4041Component() {
          _classCallCheck(this, Error4041Component);
        }

        _createClass(Error4041Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error4041Component;
      }();

      _Error4041Component.ctorParameters = function () {
        return [];
      };

      _Error4041Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-404-1',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_404_1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_404_1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error4041Component);
      /***/
    },

    /***/
    32134:
    /*!***************************************************************************!*\
      !*** ./src/modules/error/containers/error-404-2/error-404-2.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error4042Component": function Error4042Component() {
          return (
            /* binding */
            _Error4042Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_404_2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-404-2.component.html */
      93644);
      /* harmony import */


      var _error_404_2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-404-2.component.scss */
      5190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error4042Component = /*#__PURE__*/function () {
        function Error4042Component() {
          _classCallCheck(this, Error4042Component);
        }

        _createClass(Error4042Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error4042Component;
      }();

      _Error4042Component.ctorParameters = function () {
        return [];
      };

      _Error4042Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-404-2',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_404_2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_404_2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error4042Component);
      /***/
    },

    /***/
    16569:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-500/error-500.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error500Component": function Error500Component() {
          return (
            /* binding */
            _Error500Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_500_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-500.component.html */
      21086);
      /* harmony import */


      var _error_500_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-500.component.scss */
      72375);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error500Component = /*#__PURE__*/function () {
        function Error500Component() {
          _classCallCheck(this, Error500Component);
        }

        _createClass(Error500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error500Component;
      }();

      _Error500Component.ctorParameters = function () {
        return [];
      };

      _Error500Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sb-error-500',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_500_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_500_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error500Component);
      /***/
    },

    /***/
    41380:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-503/error-503.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error503Component": function Error503Component() {
          return (
            /* binding */
            _Error503Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_503_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-503.component.html */
      20371);
      /* harmony import */


      var _error_503_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-503.component.scss */
      10827);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error503Component = /*#__PURE__*/function () {
        function Error503Component() {
          _classCallCheck(this, Error503Component);
        }

        _createClass(Error503Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error503Component;
      }();

      _Error503Component.ctorParameters = function () {
        return [];
      };

      _Error503Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-503',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_503_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_503_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error503Component);
      /***/
    },

    /***/
    37273:
    /*!***********************************************************************!*\
      !*** ./src/modules/error/containers/error-504/error-504.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Error504Component": function Error504Component() {
          return (
            /* binding */
            _Error504Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_error_504_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./error-504.component.html */
      92482);
      /* harmony import */


      var _error_504_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-504.component.scss */
      45990);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Error504Component = /*#__PURE__*/function () {
        function Error504Component() {
          _classCallCheck(this, Error504Component);
        }

        _createClass(Error504Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error504Component;
      }();

      _Error504Component.ctorParameters = function () {
        return [];
      };

      _Error504Component = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-error-504',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_504_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_504_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error504Component);
      /***/
    },

    /***/
    44523:
    /*!***********************************************!*\
      !*** ./src/modules/error/containers/index.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "containers": function containers() {
          return (
            /* binding */
            _containers
          );
        },

        /* harmony export */
        "Error401Component": function Error401Component() {
          return (
            /* reexport safe */
            _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__.Error401Component
          );
        },

        /* harmony export */
        "Error500Component": function Error500Component() {
          return (
            /* reexport safe */
            _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component
          );
        },

        /* harmony export */
        "Error400Component": function Error400Component() {
          return (
            /* reexport safe */
            _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_0__.Error400Component
          );
        },

        /* harmony export */
        "Error4041Component": function Error4041Component() {
          return (
            /* reexport safe */
            _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_3__.Error4041Component
          );
        },

        /* harmony export */
        "Error4042Component": function Error4042Component() {
          return (
            /* reexport safe */
            _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_4__.Error4042Component
          );
        },

        /* harmony export */
        "Error503Component": function Error503Component() {
          return (
            /* reexport safe */
            _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_6__.Error503Component
          );
        },

        /* harmony export */
        "Error504Component": function Error504Component() {
          return (
            /* reexport safe */
            _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_7__.Error504Component
          );
        },

        /* harmony export */
        "Error403Component": function Error403Component() {
          return (
            /* reexport safe */
            _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-400/error-400.component */
      62771);
      /* harmony import */


      var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-401/error-401.component */
      88407);
      /* harmony import */


      var _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-403/error-403.component */
      73184);
      /* harmony import */


      var _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error-404-1/error-404-1.component */
      50914);
      /* harmony import */


      var _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error-404-2/error-404-2.component */
      32134);
      /* harmony import */


      var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error-500/error-500.component */
      16569);
      /* harmony import */


      var _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error-503/error-503.component */
      41380);
      /* harmony import */


      var _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error-504/error-504.component */
      37273);

      var _containers = [_error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__.Error401Component, _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component, _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_0__.Error400Component, _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_3__.Error4041Component, _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_4__.Error4042Component, _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_6__.Error503Component, _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_7__.Error504Component, _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component];
      /***/
    },

    /***/
    13005:
    /*!***************************************************!*\
      !*** ./src/modules/error/error-routing.module.ts ***!
      \***************************************************/

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
        "ErrorRoutingModule": function ErrorRoutingModule() {
          return (
            /* binding */
            _ErrorRoutingModule
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


      var _error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.module */
      68445);
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers */
      44523);
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var _ROUTES = [{
        path: '',
        pathMatch: 'full',
        redirectTo: '404-1'
      }, {
        path: '400',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error400Component,
        data: {
          title: 'Error 400 - SB UI Kit Pro Angular'
        }
      }, {
        path: '401',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error401Component,
        data: {
          title: 'Error 401 - SB UI Kit Pro Angular'
        }
      }, {
        path: '403',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error403Component,
        data: {
          title: 'Error 403 - SB UI Kit Pro Angular'
        }
      }, {
        path: '404-1',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error4041Component,
        data: {
          title: 'Error 404 - SB UI Kit Pro Angular'
        }
      }, {
        path: '404-2',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error4042Component,
        data: {
          title: 'Error 404 - SB UI Kit Pro Angular'
        }
      }, {
        path: '500',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error500Component,
        data: {
          title: 'Error 500 - SB UI Kit Pro Angular'
        }
      }, {
        path: '503',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error503Component,
        data: {
          title: 'Error 503 - SB UI Kit Pro Angular'
        }
      }, {
        path: '504',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error504Component,
        data: {
          title: 'Error 504 - SB UI Kit Pro Angular'
        }
      }, {
        path: '**',
        pathMatch: 'full',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error4041Component,
        data: {
          title: 'Error 404 - Start Boostrap Docs'
        }
      }];

      var _ErrorRoutingModule = /*#__PURE__*/_createClass(function ErrorRoutingModule() {
        _classCallCheck(this, ErrorRoutingModule);
      });

      _ErrorRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_error_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _ErrorRoutingModule);
      /***/
    },

    /***/
    68445:
    /*!*******************************************!*\
      !*** ./src/modules/error/error.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorModule": function ErrorModule() {
          return (
            /* binding */
            _ErrorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @common/app-common.module */
      13939);
      /* harmony import */


      var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @modules/navigation/navigation.module */
      13276);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      77710);
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      44523);
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards */
      39773);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services */
      64868);
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var _ErrorModule = /*#__PURE__*/_createClass(function ErrorModule() {
        _classCallCheck(this, ErrorModule);
      });

      _ErrorModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule, _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__.NavigationModule],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_5__.services), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_4__.guards)),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_3__.containers), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_2__.components)),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_3__.containers), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_2__.components))
      })], _ErrorModule);
      /***/
    },

    /***/
    39262:
    /*!*************************************************!*\
      !*** ./src/modules/error/guards/error.guard.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorGuard": function ErrorGuard() {
          return (
            /* binding */
            _ErrorGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      41964);

      var _ErrorGuard = /*#__PURE__*/function () {
        function ErrorGuard() {
          _classCallCheck(this, ErrorGuard);
        }

        _createClass(ErrorGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
          }
        }]);

        return ErrorGuard;
      }();

      _ErrorGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _ErrorGuard);
      /***/
    },

    /***/
    39773:
    /*!*******************************************!*\
      !*** ./src/modules/error/guards/index.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "guards": function guards() {
          return (
            /* binding */
            _guards
          );
        },

        /* harmony export */
        "ErrorGuard": function ErrorGuard() {
          return (
            /* reexport safe */
            _error_guard__WEBPACK_IMPORTED_MODULE_0__.ErrorGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _error_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.guard */
      39262);

      var _guards = [_error_guard__WEBPACK_IMPORTED_MODULE_0__.ErrorGuard];
      /***/
    },

    /***/
    99964:
    /*!*****************************************************!*\
      !*** ./src/modules/error/services/error.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorService": function ErrorService() {
          return (
            /* binding */
            _ErrorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      41964);

      var _ErrorService = /*#__PURE__*/function () {
        function ErrorService() {
          _classCallCheck(this, ErrorService);
        }

        _createClass(ErrorService, [{
          key: "getError$",
          value: function getError$() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
          }
        }]);

        return ErrorService;
      }();

      _ErrorService.ctorParameters = function () {
        return [];
      };

      _ErrorService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _ErrorService);
      /***/
    },

    /***/
    64868:
    /*!*********************************************!*\
      !*** ./src/modules/error/services/index.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "services": function services() {
          return (
            /* binding */
            _services
          );
        },

        /* harmony export */
        "ErrorService": function ErrorService() {
          return (
            /* reexport safe */
            _error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.service */
      99964);

      var _services = [_error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService];
      /***/
    },

    /***/
    3776:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-400/error-400.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    50142:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-401/error-401.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    80621:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-403/error-403.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    76622:
    /*!*****************************************************************************!*\
      !*** ./src/modules/error/containers/error-404-1/error-404-1.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDQtMS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    5190:
    /*!*****************************************************************************!*\
      !*** ./src/modules/error/containers/error-404-2/error-404-2.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDQtMi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    72375:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-500/error-500.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci01MDAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    10827:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-503/error-503.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci01MDMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    45990:
    /*!*************************************************************************!*\
      !*** ./src/modules/error/containers/error-504/error-504.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci01MDQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    17783:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-400/error-400.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/400-error-bad-request.svg\" alt=\"...\" />\n                    <p class=\"lead\">Your client has issued a malformed or illegal request.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    72705:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/401-error-unauthorized.svg\" alt=\"...\" />\n                    <p class=\"lead\">Access to this resource is denied.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    16046:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-403/error-403.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/403-error-forbidden.svg\" alt=\"...\" />\n                    <p class=\"lead\">Your client does not have permission to get this page from the server.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    30250:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404-1/error-404-1.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/404-error.svg\" alt=\"...\" />\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    93644:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404-2/error-404-2.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/404-error-with-a-cute-animal.svg\" alt=\"...\" />\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    21086:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/500-internal-server-error.svg\" alt=\"...\" />\n                    <p class=\"lead\">The server encountered an internal error or misconfiguration and was unable to complete your request.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    20371:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-503/error-503.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/503-error-service-unavailable.svg\" alt=\"...\" />\n                    <p class=\"lead\">The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    },

    /***/
    92482:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-504/error-504.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container px-5\">\n        <div class=\"row gx-5 justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/504-error-gateway-timeout.svg\" alt=\"...\" />\n                    <p class=\"lead\">The server encountered a temporary error and could not complete your request.</p>\n                    <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_modules_error_error-routing_module_ts-es5.js.map