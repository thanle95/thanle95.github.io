(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-nav-main-nav-module"],{

/***/ "Llgo":
/*!*********************************************************!*\
  !*** ./src/app/admin/pages/main-nav/main-nav.module.ts ***!
  \*********************************************************/
/*! exports provided: MainAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminModule", function() { return MainAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav.component */ "oh1O");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const routes = [
    {
        path: '',
        component: _main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~src-app-clients-pages-home-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "IqrW")).then((m) => m.DashboardModule),
            },
            {
                path: 'quan-ly-thiet-bi',
                loadChildren: () => Promise.all(/*! import() | thiet-bi-quan-ly-thiet-bi-quan-ly-thiet-bi-module */[__webpack_require__.e("common"), __webpack_require__.e("thiet-bi-quan-ly-thiet-bi-quan-ly-thiet-bi-module")]).then(__webpack_require__.bind(null, /*! ./thiet-bi/quan-ly-thiet-bi/quan-ly-thiet-bi.module */ "+p3/")).then((m) => m.QuanLyThietBiModule),
            },
            {
                path: 'quan-ly-yeu-cau-su-dung-ptn',
                loadChildren: () => Promise.all(/*! import() | su-dung-ptn-quan-ly-yeu-cau-su-dung-ptn-quan-ly-yeu-cau-su-dung-ptn-module */[__webpack_require__.e("common"), __webpack_require__.e("su-dung-ptn-quan-ly-yeu-cau-su-dung-ptn-quan-ly-yeu-cau-su-dung-ptn-module")]).then(__webpack_require__.bind(null, /*! ./su-dung-ptn/quan-ly-yeu-cau-su-dung-ptn/quan-ly-yeu-cau-su-dung-ptn.module */ "mV7T")).then((m) => m.QuanLyYeuCauSuDungPTNModule),
            },
            {
                path: 'quan-ly-yeu-cau-muon-thiet-bi',
                loadChildren: () => Promise.all(/*! import() | thiet-bi-quan-ly-yeu-cau-muon-thiet-bi-quan-ly-yeu-cau-muon-thiet-bi-module */[__webpack_require__.e("common"), __webpack_require__.e("thiet-bi-quan-ly-yeu-cau-muon-thiet-bi-quan-ly-yeu-cau-muon-thiet-bi-module")]).then(__webpack_require__.bind(null, /*! ./thiet-bi/quan-ly-yeu-cau-muon-thiet-bi/quan-ly-yeu-cau-muon-thiet-bi.module */ "Mj92")).then((m) => m.QuanLyYeuCauMuonThietBiModule),
            },
            {
                path: 'lich-su-su-dung-ptn',
                loadChildren: () => Promise.all(/*! import() | su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module */[__webpack_require__.e("default~main-nav-main-nav-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("default~src-app-clients-pages-main-main-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module")]).then(__webpack_require__.bind(null, /*! ./su-dung-ptn/lich-su-su-dung-ptn/lich-su-su-dung-ptn.module */ "Kusc")).then((m) => m.LichSuSuDungPTNAdminModule),
            },
            {
                path: 'quan-ly-nguoi-hoc',
                loadChildren: () => __webpack_require__.e(/*! import() | thiet-bi-lich-su-quan-ly-nguoi-hoc-module */ "thiet-bi-lich-su-quan-ly-nguoi-hoc-module").then(__webpack_require__.bind(null, /*! ./thiet-bi/lich-su/quan-ly-nguoi-hoc.module */ "MqSm")).then((m) => m.QuanLyNguoiHocModule),
            },
            {
                path: 'quan-ly-tai-khoan',
                loadChildren: () => Promise.all(/*! import() | quan-ly-tai-khoan-quan-ly-tai-khoan-module */[__webpack_require__.e("default~quan-ly-tai-khoan-quan-ly-tai-khoan-module~thong-tin-co-ban-thong-tin-co-ban-module"), __webpack_require__.e("quan-ly-tai-khoan-quan-ly-tai-khoan-module")]).then(__webpack_require__.bind(null, /*! ./quan-ly-tai-khoan/quan-ly-tai-khoan.module */ "eFgX")).then((m) => m.QuanLyTaiKhoanModule),
            },
            {
                path: 'quan-ly-noi-san-xuat',
                loadChildren: () => __webpack_require__.e(/*! import() | quan-ly-noi-san-xuat-quan-ly-noi-san-xuat-module */ "quan-ly-noi-san-xuat-quan-ly-noi-san-xuat-module").then(__webpack_require__.bind(null, /*! ./quan-ly-noi-san-xuat/quan-ly-noi-san-xuat.module */ "A8ME")).then((m) => m.QuanLyNoiSanXuatModule),
            },
            {
                path: 'quan-ly-noi-truc-thuoc',
                loadChildren: () => __webpack_require__.e(/*! import() | quan-ly-noi-truc-thuoc-quan-ly-noi-truc-thuoc-module */ "quan-ly-noi-truc-thuoc-quan-ly-noi-truc-thuoc-module").then(__webpack_require__.bind(null, /*! ./quan-ly-noi-truc-thuoc/quan-ly-noi-truc-thuoc.module */ "jp4D")).then((m) => m.QuanLyNoiTrucThuocModule),
            },
            {
                path: 'quan-ly-bieu-mau',
                loadChildren: () => __webpack_require__.e(/*! import() | quan-ly-bieu-mau-quan-ly-bieu-mau-module */ "quan-ly-bieu-mau-quan-ly-bieu-mau-module").then(__webpack_require__.bind(null, /*! ./quan-ly-bieu-mau/quan-ly-bieu-mau.module */ "lWFZ")).then((m) => m.QuanLyBieuMauModule),
            },
            {
                path: 'quan-ly-noi-dung-lien-he',
                loadChildren: () => __webpack_require__.e(/*! import() | quan-ly-noi-dung-lien-he-quan-ly-noi-dung-lien-he-module */ "quan-ly-noi-dung-lien-he-quan-ly-noi-dung-lien-he-module").then(__webpack_require__.bind(null, /*! ./quan-ly-noi-dung-lien-he/quan-ly-noi-dung-lien-he.module */ "oLG1")).then((m) => m.QuanLyNoiDungLienHeModule),
            },
            {
                path: 'quan-ly-thong-so-mac-dinh',
                loadChildren: () => __webpack_require__.e(/*! import() | quan-ly-thong-so-mac-dinh-quan-ly-thong-so-mac-dinh-module */ "quan-ly-thong-so-mac-dinh-quan-ly-thong-so-mac-dinh-module").then(__webpack_require__.bind(null, /*! ./quan-ly-thong-so-mac-dinh/quan-ly-thong-so-mac-dinh.module */ "JvTb")).then((m) => m.QuanLyThongSoMacDinhModule),
            },
        ],
    },
];
class MainAdminModule {
}
MainAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainAdminModule });
MainAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainAdminModule_Factory(t) { return new (t || MainAdminModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainAdminModule, { declarations: [_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                ],
                declarations: [_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-nav-main-nav-module.js.map