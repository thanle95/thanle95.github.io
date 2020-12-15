(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-home-home-module"],{

/***/ "ct4q":
/*!**************************************************!*\
  !*** ./src/app/shared/pages/home/home.module.ts ***!
  \**************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_clients_pages_home_home_header_home_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/clients/pages/home/home-header/home-header.module */ "EffN");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "ihFg");







const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | src-app-clients-pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-clients-pages-login-login-module")]).then(__webpack_require__.bind(null, /*! src/app/clients/pages/login/login.module */ "SQVH")).then((m) => m.LoginModule),
    },
    {
        path: 'yeu-cau-su-dung-ptn',
        loadChildren: () => Promise.all(/*! import() | src-app-clients-pages-home-yeu-cau-su-dung-ptn-yeu-cau-su-dung-ptn-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-clients-pages-home-yeu-cau-su-dung-ptn-yeu-cau-su-dung-ptn-module")]).then(__webpack_require__.bind(null, /*! src/app/clients/pages/home/yeu-cau-su-dung-ptn/yeu-cau-su-dung-ptn.module */ "GhGL")).then((m) => m.YeuCauSuDungPTNModule),
    },
    {
        path: 'index',
        // canActivate: [SimpleGuard],
        loadChildren: () => Promise.all(/*! import() | src-app-clients-pages-main-main-module */[__webpack_require__.e("default~src-app-clients-pages-main-main-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("src-app-clients-pages-main-main-module")]).then(__webpack_require__.bind(null, /*! src/app/clients/pages/main/main.module */ "1wfd")).then((m) => m.MainNavModule),
    },
    {
        path: 'danh-sach-sinh-vien',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-clients-pages-home-danh-sach-sinh-vien-danh-sach-sinh-vien-module */ "src-app-clients-pages-home-danh-sach-sinh-vien-danh-sach-sinh-vien-module").then(__webpack_require__.bind(null, /*! src/app/clients/pages/home/danh-sach-sinh-vien/danh-sach-sinh-vien.module */ "xjqF")).then((m) => m.DanhSachSinhVienModule),
    },
    {
        path: 'thiet-bi',
        loadChildren: () => Promise.all(/*! import() | src-app-clients-pages-home-dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~src-app-clients-pages-home-dashboard-dashboard-module"), __webpack_require__.e("src-app-clients-pages-home-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! src/app/clients/pages/home/dashboard/dashboard.module */ "vmcp")).then((m) => m.DashboardModule),
    },
    {
        path: 'yeu-cau-muon-thiet-bi',
        loadChildren: () => Promise.all(/*! import() | src-app-clients-pages-home-yeu-cau-muon-thiet-bi-yeu-cau-muon-thiet-bi-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-clients-pages-home-yeu-cau-muon-thiet-bi-yeu-cau-muon-thiet-bi-module")]).then(__webpack_require__.bind(null, /*! src/app/clients/pages/home/yeu-cau-muon-thiet-bi/yeu-cau-muon-thiet-bi.module */ "WMVg")).then((m) => m.YeuCauMuonThietBiModule),
    },
    {
        path: 'lien-he',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-clients-pages-home-lien-he-qua-email-lien-he-qua-email-module */ "src-app-clients-pages-home-lien-he-qua-email-lien-he-qua-email-module").then(__webpack_require__.bind(null, /*! src/app/clients/pages/home/lien-he-qua-email/lien-he-qua-email.module */ "5wL8")).then((m) => m.LienHeQuaEmailModule),
    },
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_clients_pages_home_home_header_home_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeHeaderModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_clients_pages_home_home_header_home_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeHeaderModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_clients_pages_home_home_header_home_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeHeaderModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ihFg":
/*!*****************************************************!*\
  !*** ./src/app/shared/pages/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _clients_pages_home_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clients/pages/home/home-header/home-header.component */ "HRd5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0110\u0102NG K\u00DD M\u01AF\u1EE2N THI\u1EBET B\u1ECA(D\u00C0NH CHO GI\u1EA2NG VI\u00CAN)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["danh-sach-sinh-vien"]; };
const _c1 = function () { return ["thiet-bi"]; };
const _c2 = function () { return ["yeu-cau-su-dung-ptn"]; };
const _c3 = function () { return ["lien-he"]; };
const _c4 = function () { return ["login"]; };
class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.showProgressBar = false;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 11, consts: [["id", "div-parent"], ["id", "div-main"], ["id", "div-func"], ["id", "div1", 1, "div-func-child"], [3, "routerLink"], [1, "div-a-content"], ["src", "assets/list.png", 1, "icon-2x"], ["id", "div2", 1, "div-func-child"], ["src", "assets/dashboard.png", 1, "icon-2x"], ["id", "div3", 1, "div-func-child"], ["src", "assets/student.png", 1, "icon-2x"], ["class", "div-func-child", "id", "div4", 4, "ngIf"], ["id", "div5", 1, "div-func-child"], ["src", "assets/contact.png", 1, "icon-2x"], ["id", "div6", 1, "div-func-child"], ["src", "assets/login.png", 1, "icon-2x"], ["id", "div4", 1, "div-func-child"], ["src", "assets/teacher.png", 1, "icon-2x"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DANH S\u00C1CH L\u00C0M VI\u1EC6C T\u1EA0I PH\u00D2NG TH\u00CD NGHI\u1EC6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "THI\u1EBET B\u1ECA PH\u00D2NG TH\u00CD NGHI\u1EC6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0110\u0102NG K\u00DD L\u00C0M VI\u1EC6C T\u1EA0I PH\u00D2NG TH\u00CD NGHI\u1EC6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LI\u00CAN H\u1EC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0110\u0102NG NH\u1EACP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
    } }, directives: [_clients_pages_home_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__["HomeHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#div-parent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-image: url('bg1.jpg');\n  opacity: 0.9;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%] {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: center;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  padding: 1rem;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%] {\n  width: 13rem;\n  height: 10rem;\n  margin: 1rem 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 0.7;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%]:active {\n  width: 13rem;\n  height: 10rem;\n  margin: 1rem 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 1;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%]:hover {\n  width: 13rem;\n  height: 10rem;\n  margin: 1rem 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 1;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div1[_ngcontent-%COMP%] {\n  background-color: #f9ca24;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div2[_ngcontent-%COMP%] {\n  background-color: #f0932b;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div3[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div4[_ngcontent-%COMP%] {\n  background-color: #1abc9c;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div5[_ngcontent-%COMP%] {\n  background-color: #1e90ff;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div6[_ngcontent-%COMP%] {\n  background-color: #3742fa;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   .icon-2x[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n#div-parent[_ngcontent-%COMP%]   #div-main[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: white;\n  text-align: center;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtBQUNKO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFFTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRFI7QUFJTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFHQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQVFJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOTjtBQVFJO0VBU0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZE47QUFDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ1I7QUFPTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXYtcGFyZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvYmcxLmpwZ1wiKTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgI2Rpdi1tYWluIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAjZGl2LWZ1bmMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAuZGl2LWZ1bmMtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtZnVuYy1jaGlsZDphY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2LWZ1bmMtY2hpbGQ6aG92ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAjZGl2MSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2EyNDtcclxuICAgICAgfVxyXG4gICAgICAjZGl2MiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwOTMyYjtcclxuICAgICAgfVxyXG4gICAgICAjZGl2MyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxuICAgICAgfVxyXG4gICAgICAjZGl2NCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcclxuICAgICAgfVxyXG4gICAgICAjZGl2NSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcclxuICAgICAgfVxyXG4gICAgICAjZGl2NiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDJmYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRpdi1hLWNvbnRlbnQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi0yeCB7XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=shared-pages-home-home-module.js.map