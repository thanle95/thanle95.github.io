(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-clients-pages-main-main-module"],{

/***/ "1wfd":
/*!***************************************************!*\
  !*** ./src/app/clients/pages/main/main.module.ts ***!
  \***************************************************/
/*! exports provided: MainNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavModule", function() { return MainNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "kSu2");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
















const routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"],
        children: [
            {
                path: '',
                redirectTo: 'thong-tin',
                pathMatch: 'full',
            },
            {
                path: 'muon-thiet-bi',
                loadChildren: () => Promise.all(/*! import() | thiet-bi-muon-thiet-bi-muon-thiet-bi-module */[__webpack_require__.e("common"), __webpack_require__.e("thiet-bi-muon-thiet-bi-muon-thiet-bi-module")]).then(__webpack_require__.bind(null, /*! ./thiet-bi/muon-thiet-bi/muon-thiet-bi.module */ "0xeM")).then((m) => m.MuonThietBiModule),
            },
            {
                path: 'yeu-cau-su-dung-thiet-bi',
                loadChildren: () => __webpack_require__.e(/*! import() | thiet-bi-yeu-cau-yeu-cau-module */ "thiet-bi-yeu-cau-yeu-cau-module").then(__webpack_require__.bind(null, /*! ./thiet-bi/yeu-cau/yeu-cau.module */ "Dexc")).then((m) => m.YeuCauModule),
            },
            {
                path: 'lich-su-su-dung-thiet-bi',
                loadChildren: () => __webpack_require__.e(/*! import() | thiet-bi-lich-su-lich-su-su-dung-thiet-bi-module */ "thiet-bi-lich-su-lich-su-su-dung-thiet-bi-module").then(__webpack_require__.bind(null, /*! ./thiet-bi/lich-su/lich-su-su-dung-thiet-bi.module */ "9BtG")).then((m) => m.LichSuSuDungThietBiModule),
            },
            {
                path: 'thong-tin',
                loadChildren: () => Promise.all(/*! import() | thong-tin-co-ban-thong-tin-co-ban-module */[__webpack_require__.e("default~quan-ly-tai-khoan-quan-ly-tai-khoan-module~thong-tin-co-ban-thong-tin-co-ban-module"), __webpack_require__.e("thong-tin-co-ban-thong-tin-co-ban-module")]).then(__webpack_require__.bind(null, /*! ./thong-tin-co-ban/thong-tin-co-ban.module */ "DqkQ")).then((m) => m.ThongTinCoBanModule),
            },
            {
                path: 'lich-su-su-dung-phong-thi-nghiem',
                loadChildren: () => Promise.all(/*! import() | su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module */[__webpack_require__.e("default~main-nav-main-nav-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("default~src-app-clients-pages-main-main-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module")]).then(__webpack_require__.bind(null, /*! ./su-dung-ptn/lich-su-su-dung-ptn/lich-su-su-dung-ptn.module */ "Ao1z")).then((m) => m.LichSuSuDungPTNModule),
            },
            {
                path: 'yeu-cau-su-dung-phong-thi-nghiem',
                loadChildren: () => __webpack_require__.e(/*! import() | su-dung-ptn-yeu-cau-yeu-cau-module */ "su-dung-ptn-yeu-cau-yeu-cau-module").then(__webpack_require__.bind(null, /*! ./su-dung-ptn/yeu-cau/yeu-cau.module */ "w79r")).then((m) => m.YeuCauSuDungPTNModule),
            },
            {
                path: 'lien-he',
                loadChildren: () => __webpack_require__.e(/*! import() | lien-he-client-lien-he-client-module */ "lien-he-client-lien-he-client-module").then(__webpack_require__.bind(null, /*! ./lien-he-client/lien-he-client.module */ "x7I7")).then((m) => m.LienHeClientModule),
            },
        ],
    },
];
class MainNavModule {
}
MainNavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainNavModule });
MainNavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainNavModule_Factory(t) { return new (t || MainNavModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainNavModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]
                ],
                declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-clients-pages-main-main-module.js.map