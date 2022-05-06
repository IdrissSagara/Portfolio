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

  (self["webpackChunksb_ui_kit_pro_angular"] = self["webpackChunksb_ui_kit_pro_angular"] || []).push([["src_modules_pages_pages-routing_module_ts"], {
    /***/
    36465:
    /*!***********************************************!*\
      !*** ./src/modules/pages/components/index.ts ***!
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
    36272:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/about/about.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./about.component.html */
      2072);
      /* harmony import */


      var _about_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about.component.scss */
      80371);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      _AboutComponent.ctorParameters = function () {
        return [];
      };

      _AboutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-about',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AboutComponent);
      /***/
    },

    /***/
    19893:
    /*!*******************************************************************!*\
      !*** ./src/modules/pages/containers/archive/archive.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArchiveComponent": function ArchiveComponent() {
          return (
            /* binding */
            _ArchiveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_archive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./archive.component.html */
      21474);
      /* harmony import */


      var _archive_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./archive.component.scss */
      50893);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ArchiveComponent = /*#__PURE__*/function () {
        function ArchiveComponent() {
          _classCallCheck(this, ArchiveComponent);
        }

        _createClass(ArchiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ArchiveComponent;
      }();

      _ArchiveComponent.ctorParameters = function () {
        return [];
      };

      _ArchiveComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-archive',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_archive_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_archive_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ArchiveComponent);
      /***/
    },

    /***/
    32666:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/basic-page/basic-page.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicPageComponent": function BasicPageComponent() {
          return (
            /* binding */
            _BasicPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_basic_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./basic-page.component.html */
      92578);
      /* harmony import */


      var _basic_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-page.component.scss */
      45195);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BasicPageComponent = /*#__PURE__*/function () {
        function BasicPageComponent() {
          _classCallCheck(this, BasicPageComponent);
        }

        _createClass(BasicPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicPageComponent;
      }();

      _BasicPageComponent.ctorParameters = function () {
        return [];
      };

      _BasicPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-basic-page',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_basic_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_basic_page_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BasicPageComponent);
      /***/
    },

    /***/
    48621:
    /*!*****************************************************************************!*\
      !*** ./src/modules/pages/containers/careers-list/careers-list.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CareersListComponent": function CareersListComponent() {
          return (
            /* binding */
            _CareersListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_careers_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./careers-list.component.html */
      98270);
      /* harmony import */


      var _careers_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./careers-list.component.scss */
      44202);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CareersListComponent = /*#__PURE__*/function () {
        function CareersListComponent() {
          _classCallCheck(this, CareersListComponent);
        }

        _createClass(CareersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CareersListComponent;
      }();

      _CareersListComponent.ctorParameters = function () {
        return [];
      };

      _CareersListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-careers-list',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_careers_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_careers_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CareersListComponent);
      /***/
    },

    /***/
    62596:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/case-study/case-study.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaseStudyComponent": function CaseStudyComponent() {
          return (
            /* binding */
            _CaseStudyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_case_study_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./case-study.component.html */
      19742);
      /* harmony import */


      var _case_study_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./case-study.component.scss */
      35198);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CaseStudyComponent = /*#__PURE__*/function () {
        function CaseStudyComponent() {
          _classCallCheck(this, CaseStudyComponent);
        }

        _createClass(CaseStudyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CaseStudyComponent;
      }();

      _CaseStudyComponent.ctorParameters = function () {
        return [];
      };

      _CaseStudyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-case-study',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_case_study_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_case_study_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CaseStudyComponent);
      /***/
    },

    /***/
    52357:
    /*!*******************************************************************!*\
      !*** ./src/modules/pages/containers/contact/contact.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contact.component.html */
      45103);
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.component.scss */
      48371);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      _ContactComponent.ctorParameters = function () {
        return [];
      };

      _ContactComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-contact',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactComponent);
      /***/
    },

    /***/
    6893:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-400/error-400.component.ts ***!
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
      57787);
      /* harmony import */


      var _error_400_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-400.component.scss */
      82548);
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
    57247:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-401/error-401.component.ts ***!
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
      47212);
      /* harmony import */


      var _error_401_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-401.component.scss */
      29873);
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
        selector: 'sbpro-error-401',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_401_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_401_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error401Component);
      /***/
    },

    /***/
    73657:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-403/error-403.component.ts ***!
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
      12668);
      /* harmony import */


      var _error_403_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-403.component.scss */
      294);
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
    12245:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/error-404-1/error-404-1.component.ts ***!
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
      3686);
      /* harmony import */


      var _error_404_1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-404-1.component.scss */
      12779);
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
    95502:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/error-404-2/error-404-2.component.ts ***!
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
      85690);
      /* harmony import */


      var _error_404_2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-404-2.component.scss */
      43365);
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
    21009:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-500/error-500.component.ts ***!
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
      19636);
      /* harmony import */


      var _error_500_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-500.component.scss */
      12492);
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
        selector: 'sbpro-error-500',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_error_500_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_500_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Error500Component);
      /***/
    },

    /***/
    76474:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-503/error-503.component.ts ***!
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
      89785);
      /* harmony import */


      var _error_503_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-503.component.scss */
      74069);
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
    34549:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/error-504/error-504.component.ts ***!
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
      12208);
      /* harmony import */


      var _error_504_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-504.component.scss */
      57217);
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
    7670:
    /*!*************************************************************!*\
      !*** ./src/modules/pages/containers/grid/grid.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GridComponent": function GridComponent() {
          return (
            /* binding */
            _GridComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./grid.component.html */
      27239);
      /* harmony import */


      var _grid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./grid.component.scss */
      98721);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _GridComponent = /*#__PURE__*/function () {
        function GridComponent() {
          _classCallCheck(this, GridComponent);
        }

        _createClass(GridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GridComponent;
      }();

      _GridComponent.ctorParameters = function () {
        return [];
      };

      _GridComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-grid',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_grid_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GridComponent);
      /***/
    },

    /***/
    94523:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/help-center/help-center.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpCenterComponent": function HelpCenterComponent() {
          return (
            /* binding */
            _HelpCenterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_help_center_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./help-center.component.html */
      87135);
      /* harmony import */


      var _help_center_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./help-center.component.scss */
      43435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HelpCenterComponent = /*#__PURE__*/function () {
        function HelpCenterComponent() {
          _classCallCheck(this, HelpCenterComponent);
        }

        _createClass(HelpCenterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpCenterComponent;
      }();

      _HelpCenterComponent.ctorParameters = function () {
        return [];
      };

      _HelpCenterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-help-center',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_help_center_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_center_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HelpCenterComponent);
      /***/
    },

    /***/
    71782:
    /*!***********************************************!*\
      !*** ./src/modules/pages/containers/index.ts ***!
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
        "PagesComponent": function PagesComponent() {
          return (
            /* reexport safe */
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_21__.PagesComponent
          );
        },

        /* harmony export */
        "BasicPageComponent": function BasicPageComponent() {
          return (
            /* reexport safe */
            _basic_page_basic_page_component__WEBPACK_IMPORTED_MODULE_2__.BasicPageComponent
          );
        },

        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* reexport safe */
            _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
          );
        },

        /* harmony export */
        "PricingComponent": function PricingComponent() {
          return (
            /* reexport safe */
            _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_24__.PricingComponent
          );
        },

        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* reexport safe */
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent
          );
        },

        /* harmony export */
        "TermsComponent": function TermsComponent() {
          return (
            /* reexport safe */
            _terms_terms_component__WEBPACK_IMPORTED_MODULE_28__.TermsComponent
          );
        },

        /* harmony export */
        "HelpCenterComponent": function HelpCenterComponent() {
          return (
            /* reexport safe */
            _help_center_help_center_component__WEBPACK_IMPORTED_MODULE_15__.HelpCenterComponent
          );
        },

        /* harmony export */
        "KnowledgebaseComponent": function KnowledgebaseComponent() {
          return (
            /* reexport safe */
            _knowledgebase_knowledgebase_component__WEBPACK_IMPORTED_MODULE_16__.KnowledgebaseComponent
          );
        },

        /* harmony export */
        "MessageCenterComponent": function MessageCenterComponent() {
          return (
            /* reexport safe */
            _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_19__.MessageCenterComponent
          );
        },

        /* harmony export */
        "SupportTicketComponent": function SupportTicketComponent() {
          return (
            /* reexport safe */
            _support_ticket_support_ticket_component__WEBPACK_IMPORTED_MODULE_26__.SupportTicketComponent
          );
        },

        /* harmony export */
        "CareersListComponent": function CareersListComponent() {
          return (
            /* reexport safe */
            _careers_list_careers_list_component__WEBPACK_IMPORTED_MODULE_3__.CareersListComponent
          );
        },

        /* harmony export */
        "PositionDetailsComponent": function PositionDetailsComponent() {
          return (
            /* reexport safe */
            _position_details_position_details_component__WEBPACK_IMPORTED_MODULE_22__.PositionDetailsComponent
          );
        },

        /* harmony export */
        "OverviewComponent": function OverviewComponent() {
          return (
            /* reexport safe */
            _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__.OverviewComponent
          );
        },

        /* harmony export */
        "PostComponent": function PostComponent() {
          return (
            /* reexport safe */
            _post_post_component__WEBPACK_IMPORTED_MODULE_23__.PostComponent
          );
        },

        /* harmony export */
        "ArchiveComponent": function ArchiveComponent() {
          return (
            /* reexport safe */
            _archive_archive_component__WEBPACK_IMPORTED_MODULE_1__.ArchiveComponent
          );
        },

        /* harmony export */
        "GridComponent": function GridComponent() {
          return (
            /* reexport safe */
            _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__.GridComponent
          );
        },

        /* harmony export */
        "LargeGridComponent": function LargeGridComponent() {
          return (
            /* reexport safe */
            _large_grid_large_grid_component__WEBPACK_IMPORTED_MODULE_17__.LargeGridComponent
          );
        },

        /* harmony export */
        "MasonryComponent": function MasonryComponent() {
          return (
            /* reexport safe */
            _masonry_masonry_component__WEBPACK_IMPORTED_MODULE_18__.MasonryComponent
          );
        },

        /* harmony export */
        "CaseStudyComponent": function CaseStudyComponent() {
          return (
            /* reexport safe */
            _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_4__.CaseStudyComponent
          );
        },

        /* harmony export */
        "ProjectComponent": function ProjectComponent() {
          return (
            /* reexport safe */
            _project_project_component__WEBPACK_IMPORTED_MODULE_25__.ProjectComponent
          );
        },

        /* harmony export */
        "TeamComponent": function TeamComponent() {
          return (
            /* reexport safe */
            _team_team_component__WEBPACK_IMPORTED_MODULE_27__.TeamComponent
          );
        },

        /* harmony export */
        "Error400Component": function Error400Component() {
          return (
            /* reexport safe */
            _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_6__.Error400Component
          );
        },

        /* harmony export */
        "Error401Component": function Error401Component() {
          return (
            /* reexport safe */
            _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_7__.Error401Component
          );
        },

        /* harmony export */
        "Error403Component": function Error403Component() {
          return (
            /* reexport safe */
            _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_8__.Error403Component
          );
        },

        /* harmony export */
        "Error4041Component": function Error4041Component() {
          return (
            /* reexport safe */
            _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_9__.Error4041Component
          );
        },

        /* harmony export */
        "Error4042Component": function Error4042Component() {
          return (
            /* reexport safe */
            _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_10__.Error4042Component
          );
        },

        /* harmony export */
        "Error500Component": function Error500Component() {
          return (
            /* reexport safe */
            _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__.Error500Component
          );
        },

        /* harmony export */
        "Error503Component": function Error503Component() {
          return (
            /* reexport safe */
            _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_12__.Error503Component
          );
        },

        /* harmony export */
        "Error504Component": function Error504Component() {
          return (
            /* reexport safe */
            _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_13__.Error504Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about/about.component */
      36272);
      /* harmony import */


      var _archive_archive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./archive/archive.component */
      19893);
      /* harmony import */


      var _basic_page_basic_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-page/basic-page.component */
      32666);
      /* harmony import */


      var _careers_list_careers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./careers-list/careers-list.component */
      48621);
      /* harmony import */


      var _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./case-study/case-study.component */
      62596);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact/contact.component */
      52357);
      /* harmony import */


      var _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error-400/error-400.component */
      6893);
      /* harmony import */


      var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error-401/error-401.component */
      57247);
      /* harmony import */


      var _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./error-403/error-403.component */
      73657);
      /* harmony import */


      var _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./error-404-1/error-404-1.component */
      12245);
      /* harmony import */


      var _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./error-404-2/error-404-2.component */
      95502);
      /* harmony import */


      var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./error-500/error-500.component */
      21009);
      /* harmony import */


      var _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./error-503/error-503.component */
      76474);
      /* harmony import */


      var _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./error-504/error-504.component */
      34549);
      /* harmony import */


      var _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./grid/grid.component */
      7670);
      /* harmony import */


      var _help_center_help_center_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./help-center/help-center.component */
      94523);
      /* harmony import */


      var _knowledgebase_knowledgebase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./knowledgebase/knowledgebase.component */
      21476);
      /* harmony import */


      var _large_grid_large_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./large-grid/large-grid.component */
      32120);
      /* harmony import */


      var _masonry_masonry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./masonry/masonry.component */
      66563);
      /* harmony import */


      var _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./message-center/message-center.component */
      82587);
      /* harmony import */


      var _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./overview/overview.component */
      29618);
      /* harmony import */


      var _pages_pages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/pages.component */
      1142);
      /* harmony import */


      var _position_details_position_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./position-details/position-details.component */
      39078);
      /* harmony import */


      var _post_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./post/post.component */
      86025);
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      87554);
      /* harmony import */


      var _project_project_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./project/project.component */
      82900);
      /* harmony import */


      var _support_ticket_support_ticket_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./support-ticket/support-ticket.component */
      27100);
      /* harmony import */


      var _team_team_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./team/team.component */
      39193);
      /* harmony import */


      var _terms_terms_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./terms/terms.component */
      7763);

      var _containers = [_pages_pages_component__WEBPACK_IMPORTED_MODULE_21__.PagesComponent, _basic_page_basic_page_component__WEBPACK_IMPORTED_MODULE_2__.BasicPageComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_24__.PricingComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_28__.TermsComponent, _help_center_help_center_component__WEBPACK_IMPORTED_MODULE_15__.HelpCenterComponent, _knowledgebase_knowledgebase_component__WEBPACK_IMPORTED_MODULE_16__.KnowledgebaseComponent, _message_center_message_center_component__WEBPACK_IMPORTED_MODULE_19__.MessageCenterComponent, _support_ticket_support_ticket_component__WEBPACK_IMPORTED_MODULE_26__.SupportTicketComponent, _careers_list_careers_list_component__WEBPACK_IMPORTED_MODULE_3__.CareersListComponent, _position_details_position_details_component__WEBPACK_IMPORTED_MODULE_22__.PositionDetailsComponent, _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__.OverviewComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_23__.PostComponent, _archive_archive_component__WEBPACK_IMPORTED_MODULE_1__.ArchiveComponent, _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__.GridComponent, _large_grid_large_grid_component__WEBPACK_IMPORTED_MODULE_17__.LargeGridComponent, _masonry_masonry_component__WEBPACK_IMPORTED_MODULE_18__.MasonryComponent, _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_4__.CaseStudyComponent, _project_project_component__WEBPACK_IMPORTED_MODULE_25__.ProjectComponent, _team_team_component__WEBPACK_IMPORTED_MODULE_27__.TeamComponent, _error_400_error_400_component__WEBPACK_IMPORTED_MODULE_6__.Error400Component, _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_7__.Error401Component, _error_403_error_403_component__WEBPACK_IMPORTED_MODULE_8__.Error403Component, _error_404_1_error_404_1_component__WEBPACK_IMPORTED_MODULE_9__.Error4041Component, _error_404_2_error_404_2_component__WEBPACK_IMPORTED_MODULE_10__.Error4042Component, _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__.Error500Component, _error_503_error_503_component__WEBPACK_IMPORTED_MODULE_12__.Error503Component, _error_504_error_504_component__WEBPACK_IMPORTED_MODULE_13__.Error504Component];
      /***/
    },

    /***/
    21476:
    /*!*******************************************************************************!*\
      !*** ./src/modules/pages/containers/knowledgebase/knowledgebase.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KnowledgebaseComponent": function KnowledgebaseComponent() {
          return (
            /* binding */
            _KnowledgebaseComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_knowledgebase_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./knowledgebase.component.html */
      66268);
      /* harmony import */


      var _knowledgebase_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./knowledgebase.component.scss */
      70187);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @common/services */
      33538);

      var _KnowledgebaseComponent = /*#__PURE__*/function () {
        function KnowledgebaseComponent(loremIpsumService) {
          _classCallCheck(this, KnowledgebaseComponent);

          this.loremIpsumService = loremIpsumService;
          this.faqs = [{
            question: 'Is there a minimum number of nights?',
            answer: this.loremIpsumService.lorem()
          }, {
            question: 'How close is the nearest grocery store?',
            answer: this.loremIpsumService.lorem()
          }, {
            question: 'Is there a discount for longer term rental periods?',
            answer: this.loremIpsumService.lorem()
          }];
        }

        _createClass(KnowledgebaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return KnowledgebaseComponent;
      }();

      _KnowledgebaseComponent.ctorParameters = function () {
        return [{
          type: _common_services__WEBPACK_IMPORTED_MODULE_2__.LoremIpsumService
        }];
      };

      _KnowledgebaseComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'sbpro-knowledgebase',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_knowledgebase_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_knowledgebase_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KnowledgebaseComponent);
      /***/
    },

    /***/
    32120:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/large-grid/large-grid.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LargeGridComponent": function LargeGridComponent() {
          return (
            /* binding */
            _LargeGridComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_large_grid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./large-grid.component.html */
      94282);
      /* harmony import */


      var _large_grid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./large-grid.component.scss */
      15749);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LargeGridComponent = /*#__PURE__*/function () {
        function LargeGridComponent() {
          _classCallCheck(this, LargeGridComponent);
        }

        _createClass(LargeGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LargeGridComponent;
      }();

      _LargeGridComponent.ctorParameters = function () {
        return [];
      };

      _LargeGridComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-large-grid',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_large_grid_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_large_grid_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LargeGridComponent);
      /***/
    },

    /***/
    66563:
    /*!*******************************************************************!*\
      !*** ./src/modules/pages/containers/masonry/masonry.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasonryComponent": function MasonryComponent() {
          return (
            /* binding */
            _MasonryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_masonry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./masonry.component.html */
      76376);
      /* harmony import */


      var _masonry_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./masonry.component.scss */
      76401);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MasonryComponent = /*#__PURE__*/function () {
        function MasonryComponent() {
          _classCallCheck(this, MasonryComponent);
        }

        _createClass(MasonryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MasonryComponent;
      }();

      _MasonryComponent.ctorParameters = function () {
        return [];
      };

      _MasonryComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-masonry',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_masonry_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_masonry_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MasonryComponent);
      /***/
    },

    /***/
    82587:
    /*!*********************************************************************************!*\
      !*** ./src/modules/pages/containers/message-center/message-center.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageCenterComponent": function MessageCenterComponent() {
          return (
            /* binding */
            _MessageCenterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_message_center_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./message-center.component.html */
      69445);
      /* harmony import */


      var _message_center_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message-center.component.scss */
      83359);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MessageCenterComponent = /*#__PURE__*/function () {
        function MessageCenterComponent() {
          _classCallCheck(this, MessageCenterComponent);
        }

        _createClass(MessageCenterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessageCenterComponent;
      }();

      _MessageCenterComponent.ctorParameters = function () {
        return [];
      };

      _MessageCenterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-message-center',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_message_center_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_center_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MessageCenterComponent);
      /***/
    },

    /***/
    29618:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/overview/overview.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OverviewComponent": function OverviewComponent() {
          return (
            /* binding */
            _OverviewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_overview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./overview.component.html */
      40490);
      /* harmony import */


      var _overview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./overview.component.scss */
      47090);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _OverviewComponent = /*#__PURE__*/function () {
        function OverviewComponent() {
          _classCallCheck(this, OverviewComponent);
        }

        _createClass(OverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OverviewComponent;
      }();

      _OverviewComponent.ctorParameters = function () {
        return [];
      };

      _OverviewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-overview',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_overview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_overview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OverviewComponent);
      /***/
    },

    /***/
    1142:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/pages/pages.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesComponent": function PagesComponent() {
          return (
            /* binding */
            _PagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pages.component.html */
      12203);
      /* harmony import */


      var _pages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages.component.scss */
      72981);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PagesComponent = /*#__PURE__*/function () {
        function PagesComponent() {
          _classCallCheck(this, PagesComponent);
        }

        _createClass(PagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PagesComponent;
      }();

      _PagesComponent.ctorParameters = function () {
        return [];
      };

      _PagesComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-pages',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pages_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PagesComponent);
      /***/
    },

    /***/
    39078:
    /*!*************************************************************************************!*\
      !*** ./src/modules/pages/containers/position-details/position-details.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PositionDetailsComponent": function PositionDetailsComponent() {
          return (
            /* binding */
            _PositionDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_position_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./position-details.component.html */
      69462);
      /* harmony import */


      var _position_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./position-details.component.scss */
      35151);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PositionDetailsComponent = /*#__PURE__*/function () {
        function PositionDetailsComponent() {
          _classCallCheck(this, PositionDetailsComponent);
        }

        _createClass(PositionDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PositionDetailsComponent;
      }();

      _PositionDetailsComponent.ctorParameters = function () {
        return [];
      };

      _PositionDetailsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-position-details',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_position_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_position_details_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PositionDetailsComponent);
      /***/
    },

    /***/
    86025:
    /*!*************************************************************!*\
      !*** ./src/modules/pages/containers/post/post.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostComponent": function PostComponent() {
          return (
            /* binding */
            _PostComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./post.component.html */
      19516);
      /* harmony import */


      var _post_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./post.component.scss */
      67049);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PostComponent = /*#__PURE__*/function () {
        function PostComponent() {
          _classCallCheck(this, PostComponent);
        }

        _createClass(PostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostComponent;
      }();

      _PostComponent.ctorParameters = function () {
        return [];
      };

      _PostComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-post',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_post_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PostComponent);
      /***/
    },

    /***/
    87554:
    /*!*******************************************************************!*\
      !*** ./src/modules/pages/containers/pricing/pricing.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PricingComponent": function PricingComponent() {
          return (
            /* binding */
            _PricingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pricing.component.html */
      89435);
      /* harmony import */


      var _pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pricing.component.scss */
      67801);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PricingComponent = /*#__PURE__*/function () {
        function PricingComponent() {
          _classCallCheck(this, PricingComponent);
        }

        _createClass(PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PricingComponent;
      }();

      _PricingComponent.ctorParameters = function () {
        return [];
      };

      _PricingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-pricing',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PricingComponent);
      /***/
    },

    /***/
    82900:
    /*!*******************************************************************!*\
      !*** ./src/modules/pages/containers/project/project.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectComponent": function ProjectComponent() {
          return (
            /* binding */
            _ProjectComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./project.component.html */
      39983);
      /* harmony import */


      var _project_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project.component.scss */
      33067);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProjectComponent = /*#__PURE__*/function () {
        function ProjectComponent() {
          _classCallCheck(this, ProjectComponent);
        }

        _createClass(ProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectComponent;
      }();

      _ProjectComponent.ctorParameters = function () {
        return [];
      };

      _ProjectComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-project',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_project_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProjectComponent);
      /***/
    },

    /***/
    27100:
    /*!*********************************************************************************!*\
      !*** ./src/modules/pages/containers/support-ticket/support-ticket.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportTicketComponent": function SupportTicketComponent() {
          return (
            /* binding */
            _SupportTicketComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_support_ticket_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./support-ticket.component.html */
      84661);
      /* harmony import */


      var _support_ticket_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support-ticket.component.scss */
      96523);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SupportTicketComponent = /*#__PURE__*/function () {
        function SupportTicketComponent() {
          _classCallCheck(this, SupportTicketComponent);
        }

        _createClass(SupportTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SupportTicketComponent;
      }();

      _SupportTicketComponent.ctorParameters = function () {
        return [];
      };

      _SupportTicketComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-support-ticket',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_support_ticket_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_support_ticket_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SupportTicketComponent);
      /***/
    },

    /***/
    39193:
    /*!*************************************************************!*\
      !*** ./src/modules/pages/containers/team/team.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeamComponent": function TeamComponent() {
          return (
            /* binding */
            _TeamComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./team.component.html */
      35341);
      /* harmony import */


      var _team_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./team.component.scss */
      14553);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TeamComponent = /*#__PURE__*/function () {
        function TeamComponent() {
          _classCallCheck(this, TeamComponent);
        }

        _createClass(TeamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TeamComponent;
      }();

      _TeamComponent.ctorParameters = function () {
        return [];
      };

      _TeamComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-team',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_team_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TeamComponent);
      /***/
    },

    /***/
    7763:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/terms/terms.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TermsComponent": function TermsComponent() {
          return (
            /* binding */
            _TermsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./terms.component.html */
      14977);
      /* harmony import */


      var _terms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./terms.component.scss */
      21372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TermsComponent = /*#__PURE__*/function () {
        function TermsComponent() {
          _classCallCheck(this, TermsComponent);
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsComponent;
      }();

      _TermsComponent.ctorParameters = function () {
        return [];
      };

      _TermsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sbpro-terms',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TermsComponent);
      /***/
    },

    /***/
    10795:
    /*!*******************************************!*\
      !*** ./src/modules/pages/guards/index.ts ***!
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
        "PagesGuard": function PagesGuard() {
          return (
            /* reexport safe */
            _pages_guard__WEBPACK_IMPORTED_MODULE_0__.PagesGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _pages_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages.guard */
      77329);

      var _guards = [_pages_guard__WEBPACK_IMPORTED_MODULE_0__.PagesGuard];
      /***/
    },

    /***/
    77329:
    /*!*************************************************!*\
      !*** ./src/modules/pages/guards/pages.guard.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesGuard": function PagesGuard() {
          return (
            /* binding */
            _PagesGuard
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

      var _PagesGuard = /*#__PURE__*/function () {
        function PagesGuard() {
          _classCallCheck(this, PagesGuard);
        }

        _createClass(PagesGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
          }
        }]);

        return PagesGuard;
      }();

      _PagesGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _PagesGuard);
      /***/
    },

    /***/
    78804:
    /*!***************************************************!*\
      !*** ./src/modules/pages/pages-routing.module.ts ***!
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
        "PagesRoutingModule": function PagesRoutingModule() {
          return (
            /* binding */
            _PagesRoutingModule
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


      var _pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages.module */
      18974);
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers */
      71782);
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var _ROUTES = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic-page'
      }, {
        path: 'basic-page',
        data: {
          title: 'Basic Page - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.BasicPageComponent
      }, {
        path: 'about',
        data: {
          title: 'About - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
      }, {
        path: 'pricing',
        data: {
          title: 'Pricing - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.PricingComponent
      }, {
        path: 'contact',
        data: {
          title: 'Contact - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.ContactComponent
      }, {
        path: 'team',
        data: {
          title: 'Team - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.TeamComponent
      }, {
        path: 'terms',
        data: {
          title: 'Terms - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.TermsComponent
      }, {
        path: 'help-center',
        data: {
          title: 'Help Center - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.HelpCenterComponent
      }, {
        path: 'knowledgebase',
        data: {
          title: 'Knowledgebase - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.KnowledgebaseComponent
      }, {
        path: 'message-center',
        data: {
          title: 'Message Center - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.MessageCenterComponent
      }, {
        path: 'support-ticket',
        data: {
          title: 'Support Ticket - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.SupportTicketComponent
      }, {
        path: 'careers-list',
        data: {
          title: 'Careers List - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.CareersListComponent
      }, {
        path: 'position-details',
        data: {
          title: 'Position Details - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.PositionDetailsComponent
      }, {
        path: 'overview',
        data: {
          title: 'Overview - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.OverviewComponent
      }, {
        path: 'post',
        data: {
          title: 'Post - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.PostComponent
      }, {
        path: 'archive',
        data: {
          title: 'Archive - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.ArchiveComponent
      }, {
        path: 'grid',
        data: {
          title: 'Grid - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.GridComponent
      }, {
        path: 'large-grid',
        data: {
          title: 'Large Grid - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.LargeGridComponent
      }, {
        path: 'masonry',
        data: {
          title: 'Masonry - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.MasonryComponent
      }, {
        path: 'case-study',
        data: {
          title: 'Case Study - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.CaseStudyComponent
      }, {
        path: 'project',
        data: {
          title: 'Project - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.ProjectComponent
      }, {
        path: 'error-400',
        data: {
          title: 'Error 400 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error400Component
      }, {
        path: 'error-401',
        data: {
          title: 'Error 401 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error401Component
      }, {
        path: 'error-403',
        data: {
          title: 'Error 403 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error403Component
      }, {
        path: 'error-404-1',
        data: {
          title: 'Error 404 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error4041Component
      }, {
        path: 'error-404-2',
        data: {
          title: 'Error 404 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error4042Component
      }, {
        path: 'error-500',
        data: {
          title: 'Error 500 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error500Component
      }, {
        path: 'error-503',
        data: {
          title: 'Error 503 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error503Component
      }, {
        path: 'error-504',
        data: {
          title: 'Error 504 - SB UI Kit Pro Angular'
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_1__.Error504Component
      }];

      var _PagesRoutingModule = /*#__PURE__*/_createClass(function PagesRoutingModule() {
        _classCallCheck(this, PagesRoutingModule);
      });

      _PagesRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _PagesRoutingModule);
      /***/
    },

    /***/
    18974:
    /*!*******************************************!*\
      !*** ./src/modules/pages/pages.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesModule": function PagesModule() {
          return (
            /* binding */
            _PagesModule
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
      36465);
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      71782);
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards */
      10795);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services */
      34856);
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var _PagesModule = /*#__PURE__*/_createClass(function PagesModule() {
        _classCallCheck(this, PagesModule);
      });

      _PagesModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _common_app_common_module__WEBPACK_IMPORTED_MODULE_0__.AppCommonModule, _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_1__.NavigationModule],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_5__.services), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_4__.guards)),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_3__.containers), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_2__.components)),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_3__.containers), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_2__.components))
      })], _PagesModule);
      /***/
    },

    /***/
    34856:
    /*!*********************************************!*\
      !*** ./src/modules/pages/services/index.ts ***!
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
        "PagesService": function PagesService() {
          return (
            /* reexport safe */
            _pages_service__WEBPACK_IMPORTED_MODULE_0__.PagesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages.service */
      45591);

      var _services = [_pages_service__WEBPACK_IMPORTED_MODULE_0__.PagesService];
      /***/
    },

    /***/
    45591:
    /*!*****************************************************!*\
      !*** ./src/modules/pages/services/pages.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesService": function PagesService() {
          return (
            /* binding */
            _PagesService
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

      var _PagesService = /*#__PURE__*/function () {
        function PagesService() {
          _classCallCheck(this, PagesService);
        }

        _createClass(PagesService, [{
          key: "getPages$",
          value: function getPages$() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
          }
        }]);

        return PagesService;
      }();

      _PagesService.ctorParameters = function () {
        return [];
      };

      _PagesService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _PagesService);
      /***/
    },

    /***/
    80371:
    /*!*****************************************************************!*\
      !*** ./src/modules/pages/containers/about/about.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    50893:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/archive/archive.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    45195:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/basic-page/basic-page.component.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    44202:
    /*!*******************************************************************************!*\
      !*** ./src/modules/pages/containers/careers-list/careers-list.component.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJlZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    35198:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/case-study/case-study.component.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNlLXN0dWR5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    48371:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/contact/contact.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    82548:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-400/error-400.component.scss ***!
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
    29873:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-401/error-401.component.scss ***!
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
    294:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-403/error-403.component.scss ***!
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
    12779:
    /*!*****************************************************************************!*\
      !*** ./src/modules/pages/containers/error-404-1/error-404-1.component.scss ***!
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
    43365:
    /*!*****************************************************************************!*\
      !*** ./src/modules/pages/containers/error-404-2/error-404-2.component.scss ***!
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
    12492:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-500/error-500.component.scss ***!
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
    74069:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-503/error-503.component.scss ***!
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
    57217:
    /*!*************************************************************************!*\
      !*** ./src/modules/pages/containers/error-504/error-504.component.scss ***!
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
    98721:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/grid/grid.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    43435:
    /*!*****************************************************************************!*\
      !*** ./src/modules/pages/containers/help-center/help-center.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    70187:
    /*!*********************************************************************************!*\
      !*** ./src/modules/pages/containers/knowledgebase/knowledgebase.component.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2ViYXNlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    15749:
    /*!***************************************************************************!*\
      !*** ./src/modules/pages/containers/large-grid/large-grid.component.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXJnZS1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    76401:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/masonry/masonry.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXNvbnJ5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    83359:
    /*!***********************************************************************************!*\
      !*** ./src/modules/pages/containers/message-center/message-center.component.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    47090:
    /*!***********************************************************************!*\
      !*** ./src/modules/pages/containers/overview/overview.component.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    72981:
    /*!*****************************************************************!*\
      !*** ./src/modules/pages/containers/pages/pages.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    35151:
    /*!***************************************************************************************!*\
      !*** ./src/modules/pages/containers/position-details/position-details.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    67049:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/post/post.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    67801:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/pricing/pricing.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    33067:
    /*!*********************************************************************!*\
      !*** ./src/modules/pages/containers/project/project.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    96523:
    /*!***********************************************************************************!*\
      !*** ./src/modules/pages/containers/support-ticket/support-ticket.component.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    14553:
    /*!***************************************************************!*\
      !*** ./src/modules/pages/containers/team/team.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    21372:
    /*!*****************************************************************!*\
      !*** ./src/modules/pages/containers/terms/terms.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    2072:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/about/about.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">About our company</h1>\n                        <p class=\"page-header-ui-text\">Our company culture, and how we do things</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10\">\n                    <h2 class=\"mb-4\">A quick guide to our company culture</h2>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eos quisquam expedita quo officiis porro provident laborum. Earum, consequatur provident, ipsam at excepturi rerum laborum aliquam facere molestias mollitia recusandae.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Perspiciatis sunt voluptatum officia non harum, dolores omnis fugiat nam ad optio cumque molestiae impedit dignissimos velit commodi aliquid iure?</p>\n                    <p class=\"mb-0\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sapiente natus architecto aut porro! Vitae iusto praesentium recusandae debitis, cumque illum amet suscipit rem pariatur, magni iure laborum inventore in!</p>\n                    <hr class=\"my-5\" />\n                    <h4 class=\"mb-4\">\n                        <div class=\"icon-stack bg-primary text-white me-2\"><i-feather name=\"arrow-right\"></i-feather></div>\n                        This is what we do\n                    </h4>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eos quisquam expedita quo officiis porro provident laborum. Earum, consequatur provident, ipsam at excepturi rerum laborum aliquam facere molestias mollitia recusandae.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Perspiciatis sunt voluptatum officia non harum, dolores omnis fugiat nam ad optio cumque molestiae impedit dignissimos velit commodi aliquid iure?</p>\n                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sapiente natus architecto aut porro! Vitae iusto praesentium recusandae debitis, cumque illum amet suscipit rem pariatur, magni iure laborum inventore in!</p>\n                    <div class=\"card bg-light shadow-none\">\n                        <div class=\"card-body\">\n                            <h6>Questions you should ask yourself</h6>\n                            <ul class=\"mb-0\">\n                                <li class=\"text-italic\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta fugiat eveniet, dignissimos facere quisquam, odit suscipit aliquid magnam,?</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <h4 class=\"mb-4\">\n                        <div class=\"icon-stack bg-primary text-white me-2\"><i-feather name=\"arrow-right\"></i-feather></div>\n                        Move with urgency and focus\n                    </h4>\n                    <p class=\"lead\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem suscipit veniam excepturi soluta ducimus tempora quasi, itaque odit libero, eos in dolore natus, ipsam consectetur voluptate nulla provident aliquam?</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam consequuntur iusto vero consequatur beatae, tempore voluptatem rerum sit facilis aut ea optio eaque quaerat, libero recusandae soluta molestiae veniam.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ut! Ut ipsum debitis numquam. Perferendis, laudantium! Itaque ab velit eaque magnam quis quam libero saepe nobis culpa. Vitae, dignissimos iusto.</p>\n                    <div class=\"card bg-light shadow-none\">\n                        <div class=\"card-body\">\n                            <h6>Questions you should ask yourself</h6>\n                            <ul class=\"mb-0\">\n                                <li class=\"text-italic\">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</li>\n                                <li class=\"text-italic\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nobis illum nam?</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <h4>Feedback</h4>\n                    <p class=\"lead\">In the spirit of thinking rigorously, we’d love your open and honest feedback on this guide. <a [routerLink]=\"\">Let us know what you think</a>.</p>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum culpa optio nihil id distinctio excepturi dignissimos, iure totam minima, natus ducimus.</p>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    21474:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/archive/archive.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-60 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\" backgroundImage=\"url(https://source.unsplash.com/xZgvBXDB9wE/1600x900)\"\n        ><div class=\"page-header-ui-content position-relative\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Archive</h1>\n                        <p class=\"page-header-ui-text mb-0\">Browse posts in the category 'UI'</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10\">\n                    <div class=\"post-archive-tag\">Category 'UI'</div>\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Boots on the Ground, Inclusive Thought Provoking Ideas</h5>\n                        <p>Empower communities and energize engaging ideas; scale and impact do-gooders while disruptring industries. Venture philanthropy benefits corporations and people by moving the needle.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-1.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Valerie Luna</div>\n                            <div class=\"post-archive-meta-details-date\">Feb 5 &middot; 6 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Invest In Social Impact</h5>\n                        <p>Expose the truth, problem-solvers impact mobilized green spaces.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-2.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Aariz Fischer</div>\n                            <div class=\"post-archive-meta-details-date\">Feb 4 &middot; 5 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Save the World, Social Entrepreneur</h5>\n                        <p>Contextualize co-creation and do good while building your startup.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-3.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Henrietta Iman</div>\n                            <div class=\"post-archive-meta-details-date\">Feb 3 &middot; 7 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Design Thinking Benefits Corporation Thought Leadership</h5>\n                        <p>Global changemakers, a state of play releives stress and creates inspirational work environments.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-4.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Mahesh Kumar</div>\n                            <div class=\"post-archive-meta-details-date\">Feb 1 &middot; 4 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Collaborative Consumption, Human-Centered Technology Thought Leader Systems</h5>\n                        <p>Milestones theory of change, an effective paradigm, exposes the truth and best practices to uplift equal opportunity.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-5.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Andy Love</div>\n                            <div class=\"post-archive-meta-details-date\">Jan 30 &middot; 12 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Co-create, Empower - Moving the Needle on Investor Interests</h5>\n                        <p>Scalable efficient systems and thinking as a social entrepreneur creates a transparent, targeted vison.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-1.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Valerie Luna</div>\n                            <div class=\"post-archive-meta-details-date\">Jan 29 &middot; 4 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                    <a class=\"post-archive-item\" [routerLink]=\"\"\n                        ><h5>Inclusive Shared Units of Analysis</h5>\n                        <p>Commit to inspiring social capital, social capital inspires the body and the mind.</p></a\n                    >\n                    <div class=\"post-archive-meta\">\n                        <img class=\"post-archive-meta-img\" src=\"assets/img/illustrations/profiles/profile-6.png\" />\n                        <div class=\"post-archive-meta-details\">\n                            <div class=\"post-archive-meta-details-name\">Denise Walker</div>\n                            <div class=\"post-archive-meta-details-date\">Jan 25 &middot; 7 min read</div>\n                        </div>\n                    </div>\n                    <hr class=\"my-5\" />\n                </div>\n            </div>\n            <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination pagination-blog justify-content-center\">\n                    <li class=\"page-item disabled\">\n                        <a class=\"page-link\" [routerLink]=\"\" aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a>\n                    </li>\n                    <li class=\"page-item active\"><a class=\"page-link\" [routerLink]=\"\">1</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">3</a></li>\n                    <li class=\"page-item disabled\"><a class=\"page-link\" [routerLink]=\"\">...</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">12</a></li>\n                    <li class=\"page-item\">\n                        <a class=\"page-link\" [routerLink]=\"\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a>\n                    </li>\n                </ul>\n            </nav>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    92578:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/basic-page/basic-page.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Basic content page</h1>\n                        <p class=\"page-header-ui-text\">Create beautiful pages with easy to edit content</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <h1>This is a basic content page.</h1>\n            <p class=\"lead\">You can use this page as a starting point to create your own custom pages, or choose an already built example page to start development!</p>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quisquam animi temporibus ipsum iusto necessitatibus laudantium beatae. Eligendi dolorum laudantium numquam? Officiis nemo error animi aliquam dolor consequatur ducimus unde.</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat magni eaque beatae explicabo fugit placeat earum, dolores quaerat aperiam vero adipisci quidem minus officiis blanditiis unde? Incidunt, ea ad.</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed illum soluta, quaerat et deleniti magnam laudantium, non omnis numquam quos placeat. Porro autem consectetur dolor minima voluptatum modi maiores.</p>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    98270:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/careers-list/careers-list.component.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-white\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Open positions</h1>\n                        <p class=\"page-header-ui-text\">Join us in helping create better experiences for our customers</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10\">\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <h2 class=\"mb-0\">Administration</h2>\n                        <div class=\"badge bg-primary-soft text-primary badge-marketing\">3 Openings</div>\n                    </div>\n                    <hr class=\"mb-0\" />\n                    <ul class=\"list-group list-group-flush list-group-careers\">\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Senior Manager, Risk Management</a>\n                            <div class=\"small\">Remote - US (San Francisco, CA)</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Operations Manager</a>\n                            <div class=\"small\">San Francisco, CA (HQ)</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Administrative Assistant</a>\n                            <div class=\"small\">Dallas, TX</div>\n                        </li>\n                    </ul>\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <h2 class=\"mb-0\">Engineering</h2>\n                        <div class=\"badge bg-primary-soft text-primary badge-marketing\">5 Openings</div>\n                    </div>\n                    <hr class=\"mb-0\" />\n                    <ul class=\"list-group list-group-flush list-group-careers\">\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Senior Software Engineer</a>\n                            <div class=\"small\">Remote - US / Canada</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Software Engineer</a>\n                            <div class=\"small\">Remote - Global</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Data Scientist</a>\n                            <div class=\"small\">Remote - Global</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Front End Engineer</a>\n                            <div class=\"small\">San Francisco, CA (HQ)</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Technical Director</a>\n                            <div class=\"small\">San Francisco, CA (HQ)</div>\n                        </li>\n                    </ul>\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <h2 class=\"mb-0\">Sales</h2>\n                        <div class=\"badge bg-primary-soft text-primary badge-marketing\">4 Openings</div>\n                    </div>\n                    <hr class=\"mb-0\" />\n                    <ul class=\"list-group list-group-flush list-group-careers\">\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Sales Support Coordinator</a>\n                            <div class=\"small\">Remote - US (San Francisco, CA)</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Senior Sales Representative</a>\n                            <div class=\"small\">Remove - US Northeast</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Paid Search Specialist</a>\n                            <div class=\"small\">Remote - Global</div>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <a [routerLink]=\"\">Junior Sales Representative</a>\n                            <div class=\"small\">San Francisco, CA (HQ)</div>\n                        </li>\n                    </ul>\n                    <h4 class=\"mb-4\">\n                        <div class=\"icon-stack bg-primary text-white me-2\"><i-feather name=\"smile\"></i-feather></div>\n                        Work happier\n                    </h4>\n                    <p class=\"mb-5\">Build amazing things with autonomy, self-direction, and a healthy work-life balance. We offer flexible work schedules for all of our employees and unlimited PTO. We also believe that if a job allows for it, you should work wherever you’re happiest.</p>\n                    <h4 class=\"mb-4\">\n                        <div class=\"icon-stack bg-primary text-white me-2\"><i-feather name=\"trending-up\"></i-feather></div>\n                        Keep growing\n                    </h4>\n                    <p>Learn how you learn best. From books to conferences, you’ll get a yearly budget for your individual learning and development goals. If ebooks are more your style, you’ll get a brand new Kindle on your first day.</p>\n                    <hr class=\"my-5\" />\n                    <div class=\"card bg-light shadow-none\">\n                        <div class=\"card-body text-center p-5\">\n                            <h2>Internships</h2>\n                            <p class=\"lead mb-4\">Are you currently enrolled at a college or university and looking for hands-on experience while earning class credit? Take a look at our internship opportunities!</p>\n                            <a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Explore Internships</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    19742:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/case-study/case-study.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav><sbpro-page-header headerClasses=\"bg-img-cover py-15 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\" backgroundImage='url(\"https://source.unsplash.com/RKwaj2g6OOU/1500x900\")'><div class=\"my-15 py-lg-10\"></div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"bg-light py-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <h1>Curology</h1>\n                    <p class=\"lead\">A case study focused on building brand standards and creating effective advertising campaigns</p>\n                    <hr />\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quis voluptas amet accusamus temporibus corporis quia asperiores magni laudantium dolore iusto, adipisci rem id ratione repellat! Fuga esse molestias accusamus!</p>\n                    <p class=\"mb-0\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet error pariatur voluptatibus consequuntur natus unde porro, soluta quisquam facere, deserunt repellat iusto odit labore doloremque velit qui mollitia quo numquam.</p>\n                </div>\n                <div class=\"col-lg-10\"><img class=\"img-fluid rounded-3 shadow my-5\" src=\"https://source.unsplash.com/DGH1u80sZik/1200x900\" /></div>\n                <div class=\"col-lg-8\">\n                    <h4>Building Brand Awareness</h4>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a, iusto ratione minus labore illum sequi optio recusandae perferendis, et beatae corrupti! Nemo aut inventore maxime eligendi optio cupiditate et.</p>\n                    <p class=\"pb-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius cupiditate similique officia aperiam adipisci reprehenderit veniam voluptate eum fugit voluptatem, aspernatur minus dolorum nemo impedit odit sit odio consectetur!</p>\n                </div>\n                <div class=\"col-lg-10\">\n                    <div class=\"row gx-5\">\n                        <div class=\"col-md-6\"><img class=\"img-fluid rounded-3 mb-5\" src=\"https://source.unsplash.com/ZIihTgf5uGg/800x700\" alt=\"...\" /><img class=\"img-fluid rounded-3 mb-5\" src=\"https://source.unsplash.com/Eu_jPNRNub8/800x900\" alt=\"...\" /></div>\n                        <div class=\"col-md-6\"><img class=\"img-fluid rounded-3 mb-5\" src=\"https://source.unsplash.com/VItxz6u036U/800x900\" alt=\"...\" /><img class=\"img-fluid rounded-3 mb-5\" src=\"https://source.unsplash.com/E_dRKdBhxk4/800x700\" alt=\"...\" /></div>\n                    </div>\n                </div>\n                <div class=\"col-lg-8\">\n                    <div class=\"card bg-primary-soft text-primary text-center mb-5\">\n                        <div class=\"card-body\"><p class=\"card-text lead\">\"Working with this agency helped us boost sales and raise brand awareness across all of our product lines.\"</p></div>\n                    </div>\n                    <h4>Benchmarks &amp; Performance Metrics</h4>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa provident hic quaerat. Accusamus quidem quos fugit a aspernatur, magni obcaecati tenetur similique eaque, sequi id alias veritatis eius, maiores animi.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque ut reiciendis suscipit animi quaerat, est, repellat unde distinctio hic sapiente asperiores perspiciatis id! Quasi eveniet cupiditate quisquam. Itaque, esse.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis odio modi optio sapiente neque saepe, facere culpa, doloribus voluptatem nemo quam, cumque fugiat qui excepturi. Nostrum, error. Impedit, quis!</p>\n                    <ul class=\"fa-ul\">\n                        <li class=\"mb-3\"><span class=\"fa-li\"></span><fa-icon class=\"me-2 text-green\" [icon]='[\"fas\", \"check\"]'></fa-icon>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>\n                        <li class=\"mb-3\"><span class=\"fa-li\"></span><fa-icon class=\"me-2 text-green\" [icon]='[\"fas\", \"check\"]'></fa-icon>Quidem dicta iste maiores eligendi numquam nam voluptas quia nisi consequatur illo neque sunt error doloremque vel.</li>\n                        <li class=\"mb-3\"><span class=\"fa-li\"></span><fa-icon class=\"me-2 text-green\" [icon]='[\"fas\", \"check\"]'></fa-icon>Animi aliquam dolores suscipit saepe ratione corrupti veniam.</li>\n                        <li><span class=\"fa-li\"></span><fa-icon class=\"me-2 text-green\" [icon]='[\"fas\", \"check\"]'></fa-icon>Molestiae minima aliquam consequatur eius ab dignissimos at maxime odit culpa excepturi vero magnam vitae ipsa! Ducimus.</li>\n                    </ul>\n                    <hr class=\"my-5\" />\n                    <div class=\"text-center\"><a class=\"btn btn-transparent-dark fw-500\" [routerLink]=\"\">Go Back</a></div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    45103:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/contact/contact.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Contact us</h1>\n                        <p class=\"page-header-ui-text\">Have questions? We're here to help!</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 mb-5\">\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-primary lift text-center o-visible h-100\" [routerLink]=\"\"\n                        ><div class=\"card-body\">\n                            <div class=\"icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow\"><i-feather name=\"user\"></i-feather></div>\n                            <h5>Sales</h5>\n                            <p class=\"card-text\">Ready to open an account? Have questions about purchasing a product?</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"text-primary fw-bold d-inline-flex align-items-center\">Contact Sales<fa-icon class=\"text-xs ms-1\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-secondary lift text-center o-visible h-100\" [routerLink]=\"\"\n                        ><div class=\"card-body\">\n                            <div class=\"icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4 mt-n5 z-1 shadow\"><i-feather name=\"life-buoy\"></i-feather></div>\n                            <h5>Support</h5>\n                            <p class=\"card-text\">Need help with a product that you just purchased? Need help with your account?</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"text-secondary fw-bold d-inline-flex align-items-center\">Contact Support<fa-icon class=\"text-xs ms-1\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></div></div\n                    ></a>\n                </div>\n                <div class=\"col-lg-4 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-teal lift text-center o-visible h-100\" [routerLink]=\"\"\n                        ><div class=\"card-body\">\n                            <div class=\"icon-stack icon-stack-xl bg-teal-soft text-teal mb-4 mt-n5 z-1 shadow\"><i-feather name=\"tv\"></i-feather></div>\n                            <h5>Media</h5>\n                            <p class=\"card-text\">Looking to contact our media team for a press release or related story?</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"text-teal fw-bold d-inline-flex align-items-center\">Contact Media<fa-icon class=\"text-xs ms-1\" [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></div></div\n                    ></a>\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center text-center\">\n                <div class=\"col-lg-5 mb-5 mb-lg-0\">\n                    <h5>Join us on Discord!</h5>\n                    <p class=\"fw-light mb-0\">Join the discussion on Discord. Our community can help answer questions!</p>\n                </div>\n                <div class=\"col-lg-5\">\n                    <h5>General Support</h5>\n                    <p class=\"fw-light mb-0\">For any other support questions, please send us an email at <a [routerLink]=\"\">support@example.com</a></p>\n                </div>\n            </div>\n            <hr class=\"my-10\" />\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8 text-center\">\n                    <h2>Can't find the answer you need?</h2>\n                    <p class=\"lead mb-5\">Contact us and we'll get back to you as soon as possible with a solution to whatever issues you're having with SB UI Kit Pro.</p>\n                </div>\n            </div>\n            <div class=\"row gx-5 align-items-center mb-10\">\n                <div class=\"col-lg-4 text-center mb-5 mb-lg-0\">\n                    <div class=\"section-preheading\">Message Us</div>\n                    <a [routerLink]=\"\">Start a chat!</a>\n                </div>\n                <div class=\"col-lg-4 text-center mb-5 mb-lg-0\">\n                    <div class=\"section-preheading\">Call Anytime</div>\n                    <a [routerLink]=\"\">(555) 565-1846</a>\n                </div>\n                <div class=\"col-lg-4 text-center\">\n                    <div class=\"section-preheading\">Email Us</div>\n                    <a [routerLink]=\"\">support@startbootstrap.com</a>\n                </div>\n            </div>\n            <form>\n                <div class=\"row gx-5\">\n                    <div class=\"mb-4 col-md-6\"><label class=\"mb-2 text-dark\" for=\"inputName\">Full name</label><input class=\"form-control py-4\" id=\"inputName\" type=\"text\" placeholder=\"Full name\" /></div>\n                    <div class=\"mb-4 col-md-6\"><label class=\"mb-2 text-dark\" for=\"inputEmail\">Email</label><input class=\"form-control py-4\" id=\"inputEmail\" type=\"email\" placeholder=\"name@example.com\" /></div>\n                </div>\n                <div class=\"mb-4\"><label class=\"mb-2 text-dark\" for=\"inputMessage\">Message</label><textarea class=\"form-control py-3\" id=\"inputMessage\" type=\"text\" placeholder=\"Enter your message...\" rows=\"4\"></textarea></div>\n                <div class=\"text-center\"><button class=\"btn btn-primary fw-500 mt-4\" type=\"submit\">Submit Request</button></div>\n            </form>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    57787:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-400/error-400.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/400-error-bad-request.svg\" alt=\"...\" />\n                        <p class=\"lead\">Your client has issued a malformed or illegal request.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    47212:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-401/error-401.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/401-error-unauthorized.svg\" alt=\"...\" />\n                        <p class=\"lead\">Access to this resource is denied.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    12668:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-403/error-403.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/403-error-forbidden.svg\" alt=\"...\" />\n                        <p class=\"lead\">Your client does not have permission to get this page from the server.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    3686:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-404-1/error-404-1.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/404-error.svg\" alt=\"...\" />\n                        <p class=\"lead\">This requested URL was not found on this server.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    85690:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-404-2/error-404-2.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/404-error-with-a-cute-animal.svg\" alt=\"...\" />\n                        <p class=\"lead\">This requested URL was not found on this server.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    19636:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-500/error-500.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/500-internal-server-error.svg\" alt=\"...\" />\n                        <p class=\"lead\">The server encountered an internal error or misconfiguration and was unable to complete your request.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    89785:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-503/error-503.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/503-error-service-unavailable.svg\" alt=\"...\" />\n                        <p class=\"lead\">The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    12208:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/error-504/error-504.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"bg-white pb-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-center mt-4\">\n                        <img class=\"img-fluid p-4\" src=\"assets/img/illustrations/504-error-gateway-timeout.svg\" alt=\"...\" />\n                        <p class=\"lead\">The server encountered a temporary error and could not complete your request.</p>\n                        <a class=\"text-arrow-icon\" routerLink=\"/\"><i-feather class=\"ms-0 me-1\" name=\"arrow-left\"></i-feather>Return Home</a>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    27239:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/grid/grid.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Our work</h1>\n                        <p class=\"page-header-ui-text mb-0\">A showcase of project's we've worked on in the past year</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"bg-light pb-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-6 col-xl-4 mb-5 mt-n5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jWQj5Wjepuk/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5 mt-md-n5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Ecnx13MEPK0/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Flower Mug</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5 mt-xl-n5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/eUCy1jb_B7I/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Cactus Display</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/cuTcfqsES6o/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Reading</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jipR1oTCO7U/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">White Book</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/n3sqjJzZiBM/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Photo Face</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Zr7MxECDTQ8/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Catalog</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/QcyenJDqDzw/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Notebook</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/TIutDBFEtcY/700x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book Stand</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-white py-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-xl-6 col-lg-8 col-md-10 text-center py-5\">\n                    <h2>Ready to get Started?</h2>\n                    <p class=\"lead text-gray-500 mb-5\">We'd love to hear from you about your branding and digital needs. We are currently accepting new clients.</p>\n                    <a class=\"btn btn-primary fw-500\" href=\"javascript:void(0);\">Contact us</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    87135:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/help-center/help-center.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Help Center</h1>\n                        <p class=\"page-header-ui-text\">We're here to help. Browse our knowledgebase or contact us directly.</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 features text-center mb-10\">\n                <div class=\"col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-primary h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-primary-soft text-primary mb-4\"><i-feather name=\"user\"></i-feather></div>\n                            <h6>Account</h6>\n                            <p class=\"card-text\">Issues related to logging in, out, or about multiple devices.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">21 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-green h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-green-soft text-green mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Integrations</h6>\n                            <p class=\"card-text\">Connecting with 3rd party apps to exchange data.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">9 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5\">\n                    <a class=\"card card-link border-top border-top-lg border-top-yellow h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Billing</h6>\n                            <p class=\"card-text\">Issues with payments or invoicing.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">14 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card card-link border-top border-top-lg border-top-purple h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-purple-soft text-purple mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Organizations</h6>\n                            <p class=\"card-text\">Setting up and managing collections of users.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">17 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card card-link border-top border-top-lg border-top-red h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-red-soft text-red mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Performance</h6>\n                            <p class=\"card-text\">Improving your system's speed and reliability.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">7 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card card-link border-top border-top-lg border-top-teal h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-teal-soft text-teal mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Customizing</h6>\n                            <p class=\"card-text\">Building custom modules on top of our platform.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">14 Entries</div></div></a\n                    >\n                </div>\n            </div>\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8 text-center\">\n                    <h2>Can't find the answer you need?</h2>\n                    <p class=\"lead mb-5\">Contact us and we'll get back to you as soon as possible with a solution to whatever issues you're having with SB UI Kit Pro.</p>\n                </div>\n            </div>\n            <div class=\"row gx-5 align-items-center mb-10\">\n                <div class=\"col-lg-4 text-center mb-5 mb-lg-0\">\n                    <div class=\"section-preheading\">Message Us</div>\n                    <a [routerLink]=\"\">Start a chat!</a>\n                </div>\n                <div class=\"col-lg-4 text-center mb-5 mb-lg-0\">\n                    <div class=\"section-preheading\">Call Anytime</div>\n                    <a [routerLink]=\"\">(555) 565-1846</a>\n                </div>\n                <div class=\"col-lg-4 text-center\">\n                    <div class=\"section-preheading\">Email Us</div>\n                    <a [routerLink]=\"\">support@startbootstrap.com</a>\n                </div>\n            </div>\n            <form>\n                <div class=\"row gx-5\">\n                    <div class=\"mb-4 col-md-6\"><label class=\"mb-2 text-dark\" for=\"inputName\">Full name</label><input class=\"form-control py-4\" id=\"inputName\" type=\"text\" placeholder=\"Full name\" /></div>\n                    <div class=\"mb-4 col-md-6\"><label class=\"mb-2 text-dark\" for=\"inputEmail\">Email</label><input class=\"form-control py-4\" id=\"inputEmail\" type=\"email\" placeholder=\"name@example.com\" /></div>\n                </div>\n                <div class=\"mb-4\"><label class=\"mb-2 text-dark\" for=\"inputMessage\">Message</label><textarea class=\"form-control py-3\" id=\"inputMessage\" type=\"text\" placeholder=\"Enter your message...\" rows=\"4\"></textarea></div>\n                <div class=\"text-center\"><button class=\"btn btn-primary fw-500 mt-4\" type=\"submit\">Submit Request</button></div>\n            </form>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    66268:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/knowledgebase/knowledgebase.component.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Knowledgebase</h1>\n                        <p class=\"page-header-ui-text\">Here are some answers to some commonly asked questions</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"d-flex align-items-center mb-5\">\n                <div class=\"icon-stack icon-stack-lg bg-primary text-white\"><i-feather name=\"users\"></i-feather></div>\n                <div class=\"ms-3\">\n                    <h2 class=\"mb-0\">Account</h2>\n                    <p class=\"lead mb-0\">Let's see if we can help.</p>\n                </div>\n            </div>\n            <sbpro-card-accordion-faq [faqs]=\"faqs\" [header]=\"true\"\n                ><div class=\"header-title\">Authentication issues</div>\n                <div class=\"header-subtitle\">Issues related to logging in, registering a new account, and setting your account password</div></sbpro-card-accordion-faq\n            ><sbpro-card-accordion-faq [faqs]=\"faqs\" [header]=\"true\"\n                ><div class=\"header-title\">Billing</div>\n                <div class=\"header-subtitle\">Issues related to billing</div></sbpro-card-accordion-faq\n            >\n            <hr class=\"my-5\" />\n            <div class=\"row gx-5 text-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card card-link border-top border-top-lg border-top-primary h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-primary-soft text-primary mb-4\"><i-feather name=\"user\"></i-feather></div>\n                            <h6>Account</h6>\n                            <p class=\"card-text\">Issues related to logging in, out, or about multiple devices.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">21 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <a class=\"card card-link border-top border-top-lg border-top-green h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-green-soft text-green mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Integrations</h6>\n                            <p class=\"card-text\">Connecting with 3rd party apps to exchange data.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">9 Entries</div></div></a\n                    >\n                </div>\n                <div class=\"col-lg-4\">\n                    <a class=\"card card-link border-top border-top-lg border-top-yellow h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body p-5\">\n                            <div class=\"icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4\"><i-feather name=\"clock\"></i-feather></div>\n                            <h6>Billing</h6>\n                            <p class=\"card-text\">Issues with payments or invoicing.</p>\n                        </div>\n                        <div class=\"card-footer bg-transparent pt-0 pb-5 border-top-0\"><div class=\"badge rounded-pill bg-light text-dark fw-normal px-3 py-2\">14 Entries</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    94282:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/large-grid/large-grid.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-80 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\" backgroundImage='url(\"https://source.unsplash.com/5fNmWej4tAA/1500x900\")'\n        ><div class=\"page-header-ui-content position-relative\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Our work</h1>\n                        <p class=\"page-header-ui-text mb-0\">A showcase of project's we've worked on in the past year</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"bg-light py-10\"\n        ><div class=\"container-fluid px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-6 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/-FVaZbu6ZAE/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/FUohNQatzVs/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Business Cards</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/eUCy1jb_B7I/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Cactus Display</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 mb-5\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/sRyvf4szfMc/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Device</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6 mb-5 mb-lg-0\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jipR1oTCO7U/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">White Book</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-6\">\n                    <a class=\"card card-portfolio h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/n3sqjJzZiBM/900x600\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Photo Face</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-white py-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-xl-6 col-lg-8 col-md-10 text-center py-5\">\n                    <h2>Ready to get Started?</h2>\n                    <p class=\"lead text-gray-500 mb-5\">We'd love to hear from you about your branding and digital needs. We are currently accepting new clients.</p>\n                    <a class=\"btn btn-primary fw-500\" href=\"javascript:void(0);\">Contact us</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    76376:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/masonry/masonry.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-dark\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Our work</h1>\n                        <p class=\"page-header-ui-text mb-0\">A showcase of project's we've worked on in the past year</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"bg-light py-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jWQj5Wjepuk/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Ecnx13MEPK0/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Flower Mug</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/eUCy1jb_B7I/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Cactus Display</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/cuTcfqsES6o/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Reading</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/jipR1oTCO7U/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">White Book</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/n3sqjJzZiBM/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Photo Face</div></div></a\n                    >\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Zr7MxECDTQ8/400x300\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Catalog</div></div></a\n                    ><a class=\"card card-portfolio mb-5\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/QcyenJDqDzw/400x500\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Notebook</div></div></a\n                    ><a class=\"card card-portfolio mb-5 mb-md-0\" href=\"#!\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/TIutDBFEtcY/400x400\" alt=\"...\" />\n                        <div class=\"card-body\"><div class=\"card-title\">Book Stand</div></div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ><sbpro-page-section sectionClasses=\"bg-white py-10\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-xl-6 col-lg-8 col-md-10 text-center py-5\">\n                    <h2>Ready to get Started?</h2>\n                    <p class=\"lead text-gray-500 mb-5\">We'd love to hear from you about your branding and digital needs. We are currently accepting new clients.</p>\n                    <a class=\"btn btn-primary fw-500\" href=\"javascript:void(0);\">Contact us</a>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    69445:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/message-center/message-center.component.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Message Center</h1>\n                        <p class=\"page-header-ui-text\">Open tickets and receive responses</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"mb-5 d-flex\">\n                <div class=\"d-inline-block me-2\" ngbDropdown>\n                    <button class=\"btn btn-primary dropdown-toggle\" ngbDropdownToggle type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Case ID</button>\n                    <div class=\"dropdown-menu animated--fade-in-up\" ngbDropdownMenu><a class=\"dropdown-item\" [routerLink]=\"\">Transaction ID</a><a class=\"dropdown-item\" [routerLink]=\"\">Invoice ID</a><a class=\"dropdown-item\" [routerLink]=\"\">Name</a><a class=\"dropdown-item\" [routerLink]=\"\">Email</a></div>\n                </div>\n                <input class=\"form-control\" type=\"text\" aria-label=\"Text input with dropdown button\" placeholder=\"Search for a case...\" />\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 col-xl-3 mb-5\">\n                    <div class=\"card\">\n                        <div class=\"list-group list-group-flush small\">\n                            <a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"plus\"]'></fa-icon>Make New Ticket</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"file\"]'></fa-icon>View Open Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"archive\"]'></fa-icon>View Closed Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"star\"]'></fa-icon>View Starred Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"far\", \"handshake\"]'></fa-icon>Managed Services</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-xl-9\">\n                    <div class=\"card mb-2\">\n                        <div class=\"list-group list-group-flush\">\n                            <a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"\n                                ><div class=\"d-flex justify-content-between\">\n                                    <div class=\"me-4 d-flex\">\n                                        <div class=\"icon-stack icon-stack bg-green-soft text-green flex-shrink-0 me-4\"><i-feather name=\"check\"></i-feather></div>\n                                        <div>\n                                            <h6>Case #290225</h6>\n                                            <p class=\"card-text\">Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"small text-gray-400 flex-shrink-0 text-end\">\n                                        12:13 PM<br />\n                                        <div class=\"badge bg-green-soft rounded-pill text-green\">Approved</div>\n                                    </div>\n                                </div></a\n                            ><a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"\n                                ><div class=\"d-flex justify-content-between\">\n                                    <div class=\"me-4 d-flex\">\n                                        <div class=\"icon-stack icon-stack bg-red-soft text-red flex-shrink-0 me-4\"><i-feather name=\"x\"></i-feather></div>\n                                        <div>\n                                            <h6>Case #290234</h6>\n                                            <p class=\"card-text\">Your request has been declined. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"small text-gray-400 flex-shrink-0 text-end\">\n                                        10:26 PM<br />\n                                        <div class=\"badge bg-red-soft rounded-pill text-red\">Declined</div>\n                                    </div>\n                                </div></a\n                            ><a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"\n                                ><div class=\"d-flex justify-content-between\">\n                                    <div class=\"me-4 d-flex\">\n                                        <div class=\"icon-stack icon-stack bg-green-soft text-green flex-shrink-0 me-4\"><i-feather name=\"check\"></i-feather></div>\n                                        <div>\n                                            <h6>Case #290194</h6>\n                                            <p class=\"card-text\">Your request has been approved. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"small text-gray-400 flex-shrink-0 text-end\">\n                                        Monday<br />\n                                        <div class=\"badge bg-green-soft rounded-pill text-green\">Approved</div>\n                                    </div>\n                                </div></a\n                            ><a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"\n                                ><div class=\"d-flex justify-content-between\">\n                                    <div class=\"me-4 d-flex\">\n                                        <div class=\"icon-stack icon-stack bg-yellow-soft text-yellow flex-shrink-0 me-4\"><i-feather name=\"file-text\"></i-feather></div>\n                                        <div>\n                                            <h6>Case #290127</h6>\n                                            <p class=\"card-text\">Your request has been approved. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"small text-gray-400 flex-shrink-0 text-end\">\n                                        2 weeks ago<br />\n                                        <div class=\"badge bg-yellow-soft rounded-pill text-yellow\">Pending</div>\n                                    </div>\n                                </div></a\n                            ><a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"\n                                ><div class=\"d-flex justify-content-between\">\n                                    <div class=\"me-4 d-flex\">\n                                        <div class=\"icon-stack icon-stack bg-yellow-soft text-yellow flex-shrink-0 me-4\"><i-feather name=\"file-text\"></i-feather></div>\n                                        <div>\n                                            <h6>Case #290078</h6>\n                                            <p class=\"card-text\">Your request has been approved. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"small text-gray-400 flex-shrink-0 text-end\">\n                                        2 weeks ago<br />\n                                        <div class=\"badge bg-yellow-soft rounded-pill text-yellow\">Pending</div>\n                                    </div>\n                                </div></a\n                            ><a class=\"list-group-item list-group-item-action py-4\" [routerLink]=\"\"><div class=\"text-center small\">View Archived Cases</div></a>\n                        </div>\n                    </div>\n                    <div class=\"text-end mb-5\">\n                        <a class=\"fw-bold\" [routerLink]=\"\"><fa-icon class=\"me-2\" [icon]='[\"fas\", \"file-pdf\"]'></fa-icon>Download case report</a>\n                    </div>\n                    <div class=\"card z-1\">\n                        <div class=\"card-body text-center py-5\">\n                            <h2 class=\"mb-3\">We're here to help</h2>\n                            <a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Open a New Ticket</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    40490:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/overview/overview.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-60 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\" backgroundImage=\"url(https://source.unsplash.com/PTRzqc_h1r4/1600x900)\"\n        ><div class=\"page-header-ui-content position-relative\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Publications</h1>\n                        <p class=\"page-header-ui-text mb-0\">Browse articles, keep up to date, and learn more on our blog!</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <a class=\"card post-preview post-preview-featured lift mb-5\" [routerLink]=\"\"\n                ><div class=\"row gx-0\">\n                    <div class=\"col-lg-5\"><div class=\"post-preview-featured-img\" style=\"background-image: url('https://source.unsplash.com/vZJdYl5JVXY/660x360')\"></div></div>\n                    <div class=\"col-lg-7\">\n                        <div class=\"card-body\">\n                            <div class=\"py-5\">\n                                <h5 class=\"card-title\">Boots on the Ground, Inclusive Thought Provoking Ideas</h5>\n                                <p class=\"card-text\">Empower communities and energize engaging ideas; scale and impact do-gooders while disruptring industries. Venture philanthropy benefits corporations and people by moving the needle.</p>\n                            </div>\n                            <hr />\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-1.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Valerie Luna</div>\n                                    <div class=\"post-preview-meta-details-date\">Feb 5 &middot; 6 min read</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div></a\n            >\n            <div class=\"row gx-5\">\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/KE0nC8-58MQ/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Invest In Social Impact</h5>\n                            <p class=\"card-text\">Expose the truth, problem-solvers impact mobilized green spaces.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-2.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Aariz Fischer</div>\n                                    <div class=\"post-preview-meta-details-date\">Feb 4 &middot; 5 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/hGV2TfOh0ns/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Save the World, Social Entrepreneur</h5>\n                            <p class=\"card-text\">Contextualize co-creation and do good while building your startup.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-3.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Henrietta Iman</div>\n                                    <div class=\"post-preview-meta-details-date\">Feb 3 &middot; 7 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/9l_326FISzk/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Design Thinking Benefits Corporation Thought Leadership</h5>\n                            <p class=\"card-text\">Global changemakers, a state of play releives stress and creates inspirational work environments.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-4.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Mahesh Kumar</div>\n                                    <div class=\"post-preview-meta-details-date\">Feb 1 &middot; 4 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/oqStl2L5oxI/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Collaborative Consumption, Human-Centered Technology Thought Leader Systems</h5>\n                            <p class=\"card-text\">Milestones theory of change, an effective paradigm, exposes the truth and best practices to uplift equal opportunity.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-5.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Andy Love</div>\n                                    <div class=\"post-preview-meta-details-date\">Jan 30 &middot; 12 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/Oalh2MojUuk/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Co-create, Empower - Moving the Needle on Investor Interests</h5>\n                            <p class=\"card-text\">Scalable efficient systems and thinking as a social entrepreneur creates a transparent, targeted vison.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-1.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Valerie Luna</div>\n                                    <div class=\"post-preview-meta-details-date\">Jan 29 &middot; 4 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <a class=\"card post-preview lift h-100\" [routerLink]=\"\"\n                        ><img class=\"card-img-top\" src=\"https://source.unsplash.com/-uHVRvDr7pg/660x360\" alt=\"...\" />\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Inclusive Shared Units of Analysis</h5>\n                            <p class=\"card-text\">Commit to inspiring social capital, social capital inspires the body and the mind.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"post-preview-meta\">\n                                <img class=\"post-preview-meta-img\" src=\"/assets/img/illustrations/profiles/profile-6.png\" />\n                                <div class=\"post-preview-meta-details\">\n                                    <div class=\"post-preview-meta-details-name\">Denise Walker</div>\n                                    <div class=\"post-preview-meta-details-date\">Jan 25 &middot; 7 min read</div>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n            </div>\n            <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination pagination-blog justify-content-center\">\n                    <li class=\"page-item disabled\">\n                        <a class=\"page-link\" [routerLink]=\"\" aria-label=\"Previous\"><span aria-hidden=\"true\">«</span></a>\n                    </li>\n                    <li class=\"page-item active\"><a class=\"page-link\" [routerLink]=\"\">1</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">3</a></li>\n                    <li class=\"page-item disabled\"><a class=\"page-link\" [routerLink]=\"\">...</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" [routerLink]=\"\">12</a></li>\n                    <li class=\"page-item\">\n                        <a class=\"page-link\" [routerLink]=\"\" aria-label=\"Next\"><span aria-hidden=\"true\">»</span></a>\n                    </li>\n                </ul>\n            </nav>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    12203:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/pages/pages.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>pages</p>\n";
      /***/
    },

    /***/
    69462:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/position-details/position-details.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-gradient-primary-to-secondary navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5 mt-10\">\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-3\">\n                    <ul class=\"list-group list-group-flush list-group-careers\">\n                        <li class=\"list-group-item pt-0\">\n                            <a class=\"small\" routerLink=\"/pages/careers-list\"><fa-icon class=\"me-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Back to Careers</a>\n                        </li>\n                        <li class=\"list-group-item\">Remote - Global<fa-icon class=\"fa-fw text-gray-400\" [icon]='[\"fas\", \"globe\"]'></fa-icon></li>\n                        <li class=\"list-group-item\">Full Time<fa-icon class=\"fa-fw text-gray-400\" [icon]='[\"fas\", \"clock\"]'></fa-icon></li>\n                        <li class=\"list-group-item\">New Product<fa-icon class=\"fa-fw text-gray-400\" [icon]='[\"fas\", \"code\"]'></fa-icon></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-9\">\n                    <h1 class=\"mb-4\">Software Engineer</h1>\n                    <p class=\"lead mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam beatae perspiciatis voluptatem quis facere perferendis quae accusantium nisi tempora, eligendi, repellendus cupiditate numquam ullam tempore cum, unde quibusdam ipsum.</p>\n                    <h5 class=\"mb-4\">Here are some types of projects you'll be working on</h5>\n                    <ul class=\"fa-ul mb-5\">\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>API integrations with new software products\n                        </li>\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Rapid prototyping of new product ideas\n                        </li>\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Open source development\n                        </li>\n                        <li>\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Expanding and creating new features in existing products\n                        </li>\n                    </ul>\n                    <h5 class=\"mb-4\">Position description</h5>\n                    <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe quo libero ab perferendis iure impedit inventore quibusdam cumque, aliquid ea tenetur eum velit quidem est tempore! Dignissimos, tenetur saepe.</p>\n                    <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe quo libero ab perferendis iure impedit inventore quibusdam cumque, aliquid ea tenetur eum velit quidem est tempore! Dignissimos, tenetur saepe.</p>\n                    <p class=\"mb-5\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum qui deleniti impedit, sapiente consequuntur accusamus ut quibusdam aliquam repudiandae! Sunt animi obcaecati, nisi cumque placeat earum maiores et minima impedit.</p>\n                    <h5 class=\"mb-4\">Requirements</h5>\n                    <ul class=\"fa-ul mb-5\">\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Familiarity with JS based front-end frameworks (Angular, React, Vue, etc.)\n                        </li>\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Proficient in programming languages commonly used in web development\n                        </li>\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Problem solving skills\n                        </li>\n                        <li class=\"mb-3\">\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Ability to prioritize features based on impact\n                        </li>\n                        <li>\n                            <span class=\"fa-li\"><fa-icon class=\"text-primary-soft\" [icon]='[\"far\", \"dot-circle\"]'></fa-icon></span>Bachelor's degree in computer science or a related field\n                        </li>\n                    </ul>\n                    <div class=\"card bg-light shadow-none\">\n                        <div class=\"card-body d-flex align-items-center justify-content-between p-4\">\n                            <p class=\"lead mb-0\">We look forward to hearing from you</p>\n                            <a class=\"btn btn-primary fw-500 ms-2\" [routerLink]=\"\">Apply Now</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    19516:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/post/post.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10 col-xl-8\">\n                    <div class=\"single-post\">\n                        <h1>Boots on the Ground, Inclusive Thought Provoking Ideas</h1>\n                        <p class=\"lead\">Empower communities and energize engaging ideas; scale and impact do-gooders while disruptring industries. Venture philanthropy benefits corporations and people by moving the needle.</p>\n                        <div class=\"d-flex align-items-center justify-content-between mb-5\">\n                            <div class=\"single-post-meta me-4\">\n                                <img class=\"single-post-meta-img\" src=\"assets/img/illustrations/profiles/profile-1.png\" />\n                                <div class=\"single-post-meta-details\">\n                                    <div class=\"single-post-meta-details-name\">Valerie Luna</div>\n                                    <div class=\"single-post-meta-details-date\">Feb 5 &middot; 6 min read</div>\n                                </div>\n                            </div>\n                            <div class=\"single-post-meta-links\">\n                                <a [routerLink]=\"\"><fa-icon class=\"fa-fw\" [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a [routerLink]=\"\"><fa-icon class=\"fa-fw\" [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a [routerLink]=\"\"><fa-icon class=\"fa-fw\" [icon]='[\"fas\", \"bookmark\"]'></fa-icon></a>\n                            </div>\n                        </div>\n                        <img class=\"img-fluid mb-2\" src=\"https://source.unsplash.com/vZJdYl5JVXY/990x540\" />\n                        <div class=\"small text-gray-500 text-center\">Photo Credit: Unsplash</div>\n                        <div class=\"single-post-text my-5\">\n                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit similique distinctio quidem blanditiis architecto ullam a itaque quisquam nihil! Unde ducimus deleniti exercitationem minima, molestiae ab saepe libero. Doloribus, a?</p>\n                            <p>Magnam amet labore exercitationem maxime consectetur molestias quas quia dicta, praesentium minus illum quis fuga, fugiat velit voluptate sed nostrum ipsam atque.</p>\n                            <p>Quaerat voluptas natus velit deleniti reprehenderit vero ad eos ab reiciendis. Libero dignissimos temporibus ipsam sint dolores voluptate consequatur debitis tempora doloremque.</p>\n                            <h4>Creating Something New</h4>\n                            <p>Laborum placeat quas accusantium vitae perferendis dolores possimus tempora, qui consectetur hic ullam autem. Enim, rerum obcaecati numquam quaerat necessitatibus voluptatem? Repellat!</p>\n                            <p>Quasi, quos quaerat? Sint at odit possimus ullam saepe suscipit officiis nobis eaque, laudantium ut earum tempore repellendus mollitia odio nam! Unde?</p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo unde perferendis reprehenderit ullam nobis? Laborum amet voluptatem sunt natus? Tempore commodi corporis accusamus laudantium assumenda blanditiis aut nobis culpa.</p>\n                            <h4>It's time to build your new project</h4>\n                            <p>Facilis enim voluptatibus qui voluptatum nemo non, facere, fugiat deserunt dicta ab sunt in sequi, assumenda nobis ipsam quidem corporis. Nemo, aliquam.</p>\n                            <p>Illum numquam sapiente debitis similique, a accusantium quisquam recusandae! Nihil quia nulla blanditiis. Nobis numquam iure facilis consequuntur beatae eos adipisci doloremque!</p>\n                            <p>Voluptate reiciendis nisi tempora laboriosam commodi sequi sapiente natus aut ab, cum aspernatur illo. Nobis laboriosam excepturi iste earum. Error, ab eius?</p>\n                            <p>Quam, nesciunt iusto, praesentium amet necessitatibus quod porro libero voluptates soluta nostrum quisquam delectus repellendus totam accusamus sint magni dolore atque qui.</p>\n                            <img class=\"img-fluid mb-2\" src=\"https://source.unsplash.com/sv8oOQaUb-o/990x540\" />\n                            <div class=\"small text-gray-500 text-center\">Photo Credit: Unsplash</div>\n                            <h4>It's time to build your new project</h4>\n                            <p>Laborum placeat quas accusantium vitae perferendis dolores possimus tempora, qui consectetur hic ullam autem. Enim, rerum obcaecati numquam quaerat necessitatibus voluptatem? Repellat!</p>\n                            <p>Quasi, quos quaerat? Sint at odit possimus ullam saepe suscipit officiis nobis eaque, laudantium ut earum tempore repellendus mollitia odio nam! Unde?</p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo unde perferendis reprehenderit ullam nobis? Laborum amet voluptatem sunt natus? Tempore commodi corporis accusamus laudantium assumenda blanditiis aut nobis culpa.</p>\n                            <hr class=\"my-5\" />\n                            <div class=\"text-center\"><a class=\"btn btn-transparent-dark fw-500\" routerLink=\"/pages/overview\">Back to Blog Overview</a></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    89435:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/pricing/pricing.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Pricing</h1>\n                        <p class=\"page-header-ui-text\">Our product, priced to fit your specific needs</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-center mb-5\">\n                <h2>Simple Pricing</h2>\n                <p class=\"lead\">Easy pricing means no suprises.</p>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-light text-dark rounded-pill badge-marketing badge-sm\">Free</div>\n                                <div class=\"pricing-price\"><sup>$</sup>0<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">1 user</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Community support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Style customizer\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Custom components\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Expanded utilities\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Third-party integration\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Layout options\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-primary-soft rounded-pill badge-marketing badge-sm text-primary\">Standard</div>\n                                <div class=\"pricing-price\"><sup>$</sup>19<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Up to 15 users</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Email and live chat support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Style customizer</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Custom components</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Expanded utilities</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Third-party integration</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Layout options</span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"card pricing h-100\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-light text-dark rounded-pill badge-marketing badge-sm\">Enterprise</div>\n                                <p class=\"card-text py-10\">We offer discounts for larger organizations. Contact us to inquire about enterprise level plans!</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mt-5 text-center\"><a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Get Started</a></div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-center mb-5\">\n                <h2>One plan, no hassle</h2>\n                <p class=\"lead\">Easy pricing means no suprises.</p>\n            </div>\n            <div class=\"row gx-0 align-items-center\">\n                <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                    <div class=\"card pricing\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"badge bg-primary-soft rounded-pill badge-marketing badge-sm text-primary\">Standard</div>\n                            <div class=\"pricing-price\"><sup>$</sup>19<span class=\"pricing-price-period\">/mo</span></div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Up to 15 users</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Email and live chat support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Style customizer</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Custom components</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Expanded utilities</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Third-party integration</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Layout options</span>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"card-footer px-5\">\n                            <a class=\"d-flex align-items-center justify-content-between\" [routerLink]=\"\">Get Started!<fa-icon [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"card pricing pricing-right bg-gray-800\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"badge bg-transparent-light badge-marketing rounded-pill badge-sm\">Customized</div>\n                            <p class=\"card-text py-5\">Need a customized plan? Contact us directly and we can work with you to craft a plan that fits your company's specific needs.</p>\n                        </div>\n                        <div class=\"card-footer bg-gray-900 px-5\">\n                            <a class=\"text-white-50 d-flex align-items-center justify-content-between\" [routerLink]=\"\">Contact Sales<fa-icon [icon]='[\"fas\", \"arrow-right\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n            </div></div\n    ></sbpro-page-section>\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-light\"\n        ><div class=\"container px-5\">\n            <div class=\"text-center mb-5\">\n                <h2>Simple Pricing</h2>\n                <p class=\"lead\">Easy pricing means no suprises.</p>\n            </div>\n            <div class=\"row gx-0 align-items-center\">\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"card pricing pricing-left\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-light text-dark rounded-pill badge-marketing badge-sm\">Free</div>\n                                <div class=\"pricing-price\"><sup>$</sup>0<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">1 user</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Community support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Style customizer\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Custom components\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Expanded utilities\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Third-party integration\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Layout options\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"card pricing py-4 z-1\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-primary-soft rounded-pill badge-marketing badge-sm text-primary\">Standard</div>\n                                <div class=\"pricing-price\"><sup>$</sup>19<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Up to 15 users</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Email and live chat support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Style customizer</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Custom components</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Expanded utilities\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Third-party integration\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-gray-200\" [icon]='[\"far\", \"circle\"]'></fa-icon></span>Layout options\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 mb-5 mb-lg-0\">\n                    <div class=\"card pricing pricing-right\">\n                        <div class=\"card-body p-5\">\n                            <div class=\"text-center\">\n                                <div class=\"badge bg-secondary-soft rounded-pill badge-marketing badge-sm text-secondary\">Premium</div>\n                                <div class=\"pricing-price\"><sup>$</sup>29<span class=\"pricing-price-period\">/mo</span></div>\n                            </div>\n                            <ul class=\"fa-ul pricing-list\">\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Unlimited users</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Email and live chat support</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Style customizer</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Custom components</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Expanded utilities</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Third-party integration</span>\n                                </li>\n                                <li class=\"pricing-list-item\">\n                                    <span class=\"fa-li\"><fa-icon class=\"text-teal\" [icon]='[\"far\", \"check-circle\"]'></fa-icon></span><span class=\"text-dark\">Layout options</span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mt-5 text-center\"><a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Get Started</a></div>\n        </div></sbpro-page-section\n    >\n    <hr class=\"my-0\" />\n    <sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"waves\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 align-items-center mb-10\">\n                <div class=\"col-lg-6\">\n                    <div class=\"h4 fw-normal\">Ready to get started?</div>\n                    <p class=\"lead mb-0 text-gray-500\">Get in touch or create an account.</p>\n                </div>\n                <div class=\"col-lg-6 text-lg-end\"><a class=\"btn btn-primary fw-500 me-3 my-2\" [routerLink]=\"\">Contact Sales</a><a class=\"btn btn-white my-2 fw-500\" [routerLink]=\"\">Create Account</a></div>\n            </div>\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-6 z-1 mb-5 mb-lg-n5\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-primary text-white flex-shrink-0\"><i-feather name=\"activity\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-primary\">Work smarter, not harder</h5>\n                                    <p class=\"card-text text-gray-600\">Learn more about how our product can save you time and effort in the long run!</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n                <div class=\"col-lg-6 z-1 mb-10 mb-lg-n5\">\n                    <a class=\"card text-decoration-none h-100 lift\" [routerLink]=\"\"\n                        ><div class=\"card-body py-5\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"icon-stack icon-stack-xl bg-secondary text-white flex-shrink-0\"><i-feather name=\"code\"></i-feather></div>\n                                <div class=\"ms-4\">\n                                    <h5 class=\"text-secondary\">Built for developers</h5>\n                                    <p class=\"card-text text-gray-600\">Our components, utilities, and layouts are built with developers in mind.</p>\n                                </div>\n                            </div>\n                        </div></a\n                    >\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    39983:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/project/project.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-white navbar-light\" brandClasses=\"text-primary\" buttonClasses=\"btn-primary\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-img-cover overlay overlay-60 page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\" backgroundImage='url(\"https://source.unsplash.com/RKwaj2g6OOU/1500x900\")'\n        ><div class=\"page-header-ui-content position-relative\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Curology</h1>\n                        <p class=\"page-header-ui-text mb-0\">Creating a flourishing skincare product brand</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"bg-light py-10\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-8\">\n                    <div class=\"text-center\"><p class=\"lead mb-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, labore voluptatibus temporibus fuga nisi at provident velit mollitia doloribus odio, asperiores, fugiat quod ullam necessitatibus atque earum aliquid repellat maiores.</p></div>\n                    <img class=\"img-fluid shadow rounded-3 mb-2\" src=\"https://source.unsplash.com/PDnw5MhJyKI/900x1200\" />\n                    <div class=\"small muted font-italic text-center mb-5\">Logo</div>\n                    <img class=\"img-fluid shadow rounded-3 mb-2\" src=\"https://source.unsplash.com/E_dRKdBhxk4/900x1200\" />\n                    <div class=\"small muted font-italic text-center mb-5\">Packaging Design</div>\n                    <img class=\"img-fluid shadow rounded-3 mb-2\" src=\"https://source.unsplash.com/0mbucN4QnJ0/900x600\" />\n                    <div class=\"small muted font-italic text-center mb-5\">Reflection</div>\n                    <img class=\"img-fluid shadow rounded-3 mb-2\" src=\"https://source.unsplash.com/iKoH1gNON70/900x1300\" />\n                    <div class=\"small muted font-italic text-center mb-5\">Opening New Market Channels</div>\n                    <img class=\"img-fluid shadow rounded-3 mb-2\" src=\"https://source.unsplash.com/s0yZ83xOBpM/900x600\" />\n                    <div class=\"small muted font-italic text-center mb-5\">Slow and Steady</div>\n                    <hr class=\"my-5\" />\n                    <div class=\"text-center\"><a class=\"btn btn-transparent-dark fw-500\" routerLink=\"/pages/grid\">Back to Projects</a></div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    84661:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/support-ticket/support-ticket.component.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-gradient-primary-to-secondary navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"pt-15 pb-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-lg-4 col-xl-3 mb-5\">\n                    <div class=\"card\">\n                        <div class=\"list-group list-group-flush small\">\n                            <a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"plus\"]'></fa-icon>Make New Ticket</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"file\"]'></fa-icon>View Open Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"archive\"]'></fa-icon>View Closed Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"fas\", \"star\"]'></fa-icon>View Starred Tickets</a><a class=\"list-group-item list-group-item-action p-3\" [routerLink]=\"\"><fa-icon class=\"fa-fw me-2 text-gray-400\" [icon]='[\"far\", \"handshake\"]'></fa-icon>Managed Services</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-xl-9\">\n                    <div class=\"d-flex align-items-center justify-content-between flex-column flex-md-row\">\n                        <h2 class=\"mb-0\">Case #290225</h2>\n                        <div class=\"h5\"><span class=\"badge bg-warning-soft text-warning fw-normal\">Awaiting Response</span></div>\n                    </div>\n                    <hr class=\"mb-4\" />\n                    <div class=\"card mb-5\">\n                        <div class=\"card-header d-flex justify-content-between\">\n                            <div class=\"me-2 text-dark\">\n                                Richard S.\n                                <div class=\"text-xs text-muted\">November 19, 2020 at 11:31 PM</div>\n                            </div>\n                            <a [routerLink]=\"\">#290225</a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p>Hello,</p>\n                            <p>We hope you are well.</p>\n                            <p>We have found an email account on your server to be sending out spam, we have changed the email password to the following:</p>\n                            <pre>we823#d*LKe2dD29!d</pre>\n                            <p>We are removing the malicious spam messages from the mail queue. Please be aware, mail service may be temporarily disabled in order for us to finish this process. We apologize for any inconvenience this may cause.</p>\n                            <p class=\"mb-0\">If you have any questions don't hesitate to contact us.</p>\n                            <hr />\n                            <p class=\"mb-0 small\">Richard S.<br />Abuse Response Analyst<br /><a [routerLink]=\"\">https://www.example.com/support</a></p>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">Add Reply</div>\n                        <div class=\"card-body\">\n                            <textarea class=\"form-control mb-2\" rows=\"4\"></textarea><button class=\"btn btn-primary btn-sm me-2\">Add Reply</button><button class=\"btn btn-light btn-sm me-2\"><fa-icon class=\"me-2\" [icon]='[\"fas\", \"paperclip\"]'></fa-icon>Attach a File</button><button class=\"btn btn-light btn-sm\"><fa-icon class=\"me-2\" [icon]='[\"fas\", \"archive\"]'></fa-icon>Mark as Resolved</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    },

    /***/
    35341:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/team/team.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-transparent navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-header headerClasses=\"bg-gradient-primary-to-secondary page-header-ui-dark\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"page-header-ui-content pt-10\">\n            <div class=\"container px-5 text-center\">\n                <div class=\"row gx-5 justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <h1 class=\"page-header-ui-title mb-3\">Meet the team</h1>\n                        <p class=\"page-header-ui-text\">We are a group of designers and developers</p>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-header\n    ><sbpro-page-section sectionClasses=\"py-10 bg-light\" borderType=\"rounded\" borderClasses=\"text-light\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5\">\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-1.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">Valerie Luna</div>\n                            <div class=\"card-team-position mb-3\">Managing Partner</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-2.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">Ewan Rogers</div>\n                            <div class=\"card-team-position mb-3\">Managing Partner</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-3.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">Alicia Allen</div>\n                            <div class=\"card-team-position mb-3\">Sales Manager</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5 mb-xl-0\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-4.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">Kolby Brock</div>\n                            <div class=\"card-team-position mb-3\">UI/UX Designer</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-xl-4 mb-5 mb-md-0\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-5.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">William Cole</div>\n                            <div class=\"card-team-position mb-3\">Lead Developer</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-xl-4\">\n                    <div class=\"card card-team\">\n                        <div class=\"card-body\">\n                            <img class=\"card-team-img mb-3\" src=\"assets/img/illustrations/profiles/profile-6.png\" alt=\"...\" />\n                            <div class=\"card-team-name\">Amy Love</div>\n                            <div class=\"card-team-position mb-3\">Creative Director</div>\n                            <p class=\"small mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"linkedin-in\"]'></fa-icon></a><a class=\"btn btn-icon btn-transparent-dark mx-1\" href=\"javascript:void(0);\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></a>\n                        </div>\n                    </div>\n                </div>\n            </div></div\n    ></sbpro-page-section>\n    <hr class=\"my-0\"\n/></sbpro-layout-landing>\n";
      /***/
    },

    /***/
    14977:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/pages/containers/terms/terms.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sbpro-layout-landing footerClasses=\"bg-dark footer-dark\"\n    ><sb-top-nav topNavClasses=\"bg-gradient-primary-to-secondary navbar-dark fixed-top\" brandClasses=\"text-white\" buttonClasses=\"btn-teal\"></sb-top-nav\n    ><sbpro-page-section sectionClasses=\"py-10 bg-white\" borderType=\"rounded\" borderClasses=\"text-dark\"\n        ><div class=\"container px-5\">\n            <div class=\"row gx-5 justify-content-center\">\n                <div class=\"col-lg-10 mt-5\">\n                    <h1>Terms &amp; Privacy</h1>\n                    <p class=\"lead\">Last updated: January 2020</p>\n                    <hr class=\"my-5\" />\n                    <h2 class=\"mb-3\">1. Overview</h2>\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, corporis? Facere quisquam earum dolore excepturi minima, fuga laborum reiciendis molestias nesciunt, impedit perspiciatis voluptatem nisi ad modi labore ipsam quas.</p>\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, quis explicabo? Quis non minima, placeat aspernatur reiciendis, itaque quam quos eaque doloribus vero facere libero enim quo dolor. Et, fugit!</p>\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere harum neque, repellendus, accusamus maiores libero iure corporis alias laboriosam voluptatem perferendis repellat excepturi iusto eos? Illum nam minus officia corrupti!</p>\n                    <hr class=\"my-5\" />\n                    <h2 class=\"mb-3\">2. Personal Data We Collect</h2>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga molestias atque, nesciunt, rerum quas voluptates maiores ad libero, eos illum. Dolorem sunt, modi dolores error ipsum deserunt architecto temporibus!</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit excepturi natus quae deserunt aliquam, aut distinctio, eum a laboriosam earum reiciendis beatae magni, cum minima unde? Sint, saepe reprehenderit.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus qui quidem voluptatibus architecto unde aspernatur quam facilis incidunt expedita quisquam natus nemo, impedit iure dignissimos saepe ab minus molestiae.</p>\n                    <hr class=\"my-5\" />\n                    <h2 class=\"mb-3\">3. How We Use Personal Data</h2>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem excepturi repellat ipsum veniam dolores, aperiam obcaecati quaerat! Reiciendis dolore, ipsa eaque a eum architecto sed perspiciatis deserunt totam! Exercitationem, ipsum!</p>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam consequatur nisi eius odit eligendi ut tempora deserunt, repudiandae quo hic veritatis sunt optio ea nemo laborum mollitia quae illum.</p>\n                    <hr class=\"my-5\" />\n                    <h2 class=\"mb-3\">4. How We Disclose Personal Data</h2>\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque sed porro dolorum ipsum eum quis eveniet natus, optio ipsa aperiam aliquid quaerat quos vitae maiores. Minima consequuntur quidem perferendis?</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quaerat ipsam quis nisi in, rem aliquam odio quasi obcaecati. Dolorum error aliquam labore deserunt velit ipsa in corrupti, consectetur cumque!</p>\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quia eligendi possimus odit, velit nihil eum perferendis laborum facilis sequi quo provident veritatis nostrum cupiditate accusamus quam tempore? Deleniti, architecto.</p>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum nemo ipsam eum, quam neque quae vel culpa, minus accusantium rerum ullam facere modi quo mollitia, non dolores ipsum aut.</p>\n                    <hr class=\"my-5\" />\n                    <div class=\"card z-1 mb-n10\">\n                        <div class=\"card-body text-center py-5\">\n                            <h2 class=\"mb-3\">We're here to help</h2>\n                            <a class=\"btn btn-primary fw-500\" [routerLink]=\"\">Contact Us</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div></sbpro-page-section\n    ></sbpro-layout-landing\n>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_modules_pages_pages-routing_module_ts-es5.js.map