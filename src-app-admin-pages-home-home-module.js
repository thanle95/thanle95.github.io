(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-admin-pages-home-home-module"],{

/***/ "QisU":
/*!*************************************************!*\
  !*** ./src/app/admin/pages/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomeAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminModule", function() { return HomeAdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_admin_header_home_admin_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-admin-header/home-admin-header.module */ "78Mo");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "YcUL");







const routes = [
    { path: '', redirectTo: 'i', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "8Oad")).then((m) => m.LoginAdminModule),
    },
    {
        path: 'i',
        loadChildren: () => Promise.all(/*! import() | main-nav-main-nav-module */[__webpack_require__.e("default~main-nav-main-nav-module~su-dung-ptn-lich-su-su-dung-ptn-lich-su-su-dung-ptn-module"), __webpack_require__.e("main-nav-main-nav-module")]).then(__webpack_require__.bind(null, /*! ./../main-nav/main-nav.module */ "Llgo")).then((m) => m.MainAdminModule),
    },
];
class HomeAdminModule {
}
HomeAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeAdminModule });
HomeAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeAdminModule_Factory(t) { return new (t || HomeAdminModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _home_admin_header_home_admin_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeAdminHeaderModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeAdminModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeAdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _home_admin_header_home_admin_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeAdminHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeAdminComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _home_admin_header_home_admin_header_module__WEBPACK_IMPORTED_MODULE_3__["HomeAdminHeaderModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "YcUL":
/*!****************************************************!*\
  !*** ./src/app/admin/pages/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_admin_header_home_admin_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-admin-header/home-admin-header.component */ "cA/Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["login"]; };
class HomeAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeAdminComponent.ɵfac = function HomeAdminComponent_Factory(t) { return new (t || HomeAdminComponent)(); };
HomeAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeAdminComponent, selectors: [["app-home"]], decls: 9, vars: 2, consts: [["id", "div-parent"], ["id", "div-func"], ["id", "div6", 1, "div-func-child"], [3, "routerLink"], [1, "div-a-content"], ["src", "assets/login.png", 1, "icon-2x"]], template: function HomeAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-admin-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0110\u0102NG NH\u1EACP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_home_admin_header_home_admin_header_component__WEBPACK_IMPORTED_MODULE_1__["HomeAdminHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#div-parent[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  background-image: url('bg1.jpg');\n  background-size: 100% 100%;\n  opacity: 0.9;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%] {\n  width: 17rem;\n  height: 15rem;\n  margin: 1rem;\n  padding: 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 0.7;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%]:active {\n  width: 17rem;\n  height: 15rem;\n  margin: 1rem;\n  padding: 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 1;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   .div-func-child[_ngcontent-%COMP%]:hover {\n  width: 17rem;\n  height: 15rem;\n  margin: 1rem;\n  padding: 1rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  opacity: 1;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div1[_ngcontent-%COMP%] {\n  background-color: #f9ca24;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div2[_ngcontent-%COMP%] {\n  background-color: #f0932b;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div3[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div4[_ngcontent-%COMP%] {\n  background-color: #1abc9c;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div5[_ngcontent-%COMP%] {\n  background-color: #1e90ff;\n}\n#div-parent[_ngcontent-%COMP%]   #div-func[_ngcontent-%COMP%]   #div6[_ngcontent-%COMP%] {\n  background-color: #3742fa;\n}\n#div-parent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n#div-parent[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#div-parent[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n#div-parent[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   .icon-2x[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n#div-parent[_ngcontent-%COMP%]   .div-a-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRk47QUFJSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFITjtBQU1JO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBU0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBKO0FBVUU7RUFTRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFoQko7QUFHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRE47QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRE47QUFTSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQVBOIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rpdi1wYXJlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JnMS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG5cclxuICAjZGl2LWZ1bmMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuZGl2LWZ1bmMtY2hpbGQge1xyXG4gICAgICB3aWR0aDogMTdyZW07XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICAuZGl2LWZ1bmMtY2hpbGQ6YWN0aXZlIHtcclxuICAgICAgd2lkdGg6IDE3cmVtO1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWZ1bmMtY2hpbGQ6aG92ZXIge1xyXG4gICAgICB3aWR0aDogMTdyZW07XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgI2RpdjEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljYTI0O1xyXG4gICAgfVxyXG4gICAgI2RpdjIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5MzJiO1xyXG4gICAgfVxyXG4gICAgI2RpdjMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gICAgfVxyXG4gICAgI2RpdjQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gICAgfVxyXG4gICAgI2RpdjUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xyXG4gICAgfVxyXG4gICAgI2RpdjYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MmZhO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICB9XHJcbiAgLmRpdi1hLWNvbnRlbnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5pY29uLTJ4IHtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgIGhlaWdodDogNXJlbTtcclxuICAgIH1cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-admin-pages-home-home-module.js.map