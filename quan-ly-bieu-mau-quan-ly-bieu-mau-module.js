(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quan-ly-bieu-mau-quan-ly-bieu-mau-module"],{

/***/ "ID9U":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/pages/main-nav/quan-ly-bieu-mau/quan-ly-bieu-mau.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QuanLyBieuMauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyBieuMauComponent", function() { return QuanLyBieuMauComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-nav.component */ "oh1O");




class QuanLyBieuMauComponent {
    constructor(__mainComponent) {
        this.__mainComponent = __mainComponent;
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].key_storage.MENU.ADMIN, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["eMenuAdmin"][src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["eMenuAdmin"].QUY_DINH_NOI_DUNG_BIEU_MAU]);
        this.__mainComponent.__localStorage = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].key_storage.MENU.ADMIN);
    }
    ngOnInit() {
    }
}
QuanLyBieuMauComponent.ɵfac = function QuanLyBieuMauComponent_Factory(t) { return new (t || QuanLyBieuMauComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"])); };
QuanLyBieuMauComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuanLyBieuMauComponent, selectors: [["app-quan-ly-bieu-mau"]], decls: 2, vars: 0, template: function QuanLyBieuMauComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qu\u1EA3n l\u00FD bi\u1EC3u m\u1EABu \u0111ang \u0111\u01B0\u1EE3c ph\u00E1t tri\u1EC3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BhZ2VzL21haW4tbmF2L3F1YW4tbHktYmlldS1tYXUvcXVhbi1seS1iaWV1LW1hdS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuanLyBieuMauComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quan-ly-bieu-mau',
                templateUrl: './quan-ly-bieu-mau.component.html',
                styleUrls: ['./quan-ly-bieu-mau.component.scss']
            }]
    }], function () { return [{ type: _main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"] }]; }, null); })();


/***/ }),

/***/ "lWFZ":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/pages/main-nav/quan-ly-bieu-mau/quan-ly-bieu-mau.module.ts ***!
  \**********************************************************************************/
/*! exports provided: QuanLyBieuMauModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyBieuMauModule", function() { return QuanLyBieuMauModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quan_ly_bieu_mau_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quan-ly-bieu-mau.component */ "ID9U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [{ path: '', component: _quan_ly_bieu_mau_component__WEBPACK_IMPORTED_MODULE_2__["QuanLyBieuMauComponent"] }];
class QuanLyBieuMauModule {
}
QuanLyBieuMauModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuanLyBieuMauModule });
QuanLyBieuMauModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuanLyBieuMauModule_Factory(t) { return new (t || QuanLyBieuMauModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuanLyBieuMauModule, { declarations: [_quan_ly_bieu_mau_component__WEBPACK_IMPORTED_MODULE_2__["QuanLyBieuMauComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuanLyBieuMauModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_quan_ly_bieu_mau_component__WEBPACK_IMPORTED_MODULE_2__["QuanLyBieuMauComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=quan-ly-bieu-mau-quan-ly-bieu-mau-module.js.map