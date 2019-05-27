(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/core.module": [
		"./src/app/core/core.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/pages/home/home.component */ "./src/app/core/pages/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_analise_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/analise.guard */ "./src/app/guards/analise.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'informacoes', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'analise', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _guards_analise_guard__WEBPACK_IMPORTED_MODULE_5__["AnaliseGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'importar', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'cadastrousuario', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'updateusuario', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'deleteusuario', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'resetusuario', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'home', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], component: _core_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'grafic', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'cadastro', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'lista', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: './core/core.module#CoreModule' },
    { path: 'login', loadChildren: './core/core.module#CoreModule' },
    { path: '', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-content></app-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portal';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.log('👋 Development!');
            _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlpath = window.location.origin;
            _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlpath = 'http://10.6.5.99:8100';
            //environment.urlpath  = 'http://localhost:8100';
        }
        else {
            console.log('💪 Production!');
            _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlpath = window.location.origin;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_template_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/template/template.module */ "./src/app/modules/template/template.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_analise_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/analise.guard */ "./src/app/guards/analise.guard.ts");
/* harmony import */ var _guards_cadastro_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/cadastro.guard */ "./src/app/guards/cadastro.guard.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _directive_calendar_utc_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive/calendar-utc.directive */ "./src/app/directive/calendar-utc.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _directive_calendar_utc_directive__WEBPACK_IMPORTED_MODULE_14__["CalendarUTCDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_template_template_module__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _guards_analise_guard__WEBPACK_IMPORTED_MODULE_10__["AnaliseGuard"],
                _guards_cadastro_guard__WEBPACK_IMPORTED_MODULE_11__["CadastroGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true
                },
                primeng_api__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/informacoes/informacoes.component */ "./src/app/core/pages/informacoes/informacoes.component.ts");
/* harmony import */ var _pages_analise_credito_analise_credito_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/analise-credito/analise-credito.component */ "./src/app/core/pages/analise-credito/analise-credito.component.ts");
/* harmony import */ var _pages_import_import_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/import/import.component */ "./src/app/core/pages/import/import.component.ts");
/* harmony import */ var _pages_cadastrousuario_cadastrousuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cadastrousuario/cadastrousuario.component */ "./src/app/core/pages/cadastrousuario/cadastrousuario.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/core/pages/cadastro/cadastro.component.ts");
/* harmony import */ var _pages_relatorio_lista_relatorio_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/relatorio-lista/relatorio-lista.component */ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/core/pages/login/login.component.ts");
/* harmony import */ var _pages_grafic_grafic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/grafic/grafic.component */ "./src/app/core/pages/grafic/grafic.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/core/pages/chat/chat.component.ts");
/* harmony import */ var _pages_update_usuario_update_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/update-usuario/update-usuario.component */ "./src/app/core/pages/update-usuario/update-usuario.component.ts");
/* harmony import */ var _pages_delete_usuario_delete_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/delete-usuario/delete-usuario.component */ "./src/app/core/pages/delete-usuario/delete-usuario.component.ts");
/* harmony import */ var _pages_reset_usuario_reset_usuario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/reset-usuario/reset-usuario.component */ "./src/app/core/pages/reset-usuario/reset-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'informacoes', component: _pages_informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_2__["InformacoesComponent"] },
    { path: 'analise', component: _pages_analise_credito_analise_credito_component__WEBPACK_IMPORTED_MODULE_3__["AnaliseCreditoComponent"] },
    { path: 'importar', component: _pages_import_import_component__WEBPACK_IMPORTED_MODULE_4__["ImportComponent"] },
    { path: 'cadastrousuario', component: _pages_cadastrousuario_cadastrousuario_component__WEBPACK_IMPORTED_MODULE_5__["CadastrousuarioComponent"] },
    { path: 'updateusuario', component: _pages_update_usuario_update_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UpdateUsuarioComponent"] },
    { path: 'deleteusuario', component: _pages_delete_usuario_delete_usuario_component__WEBPACK_IMPORTED_MODULE_12__["DeleteUsuarioComponent"] },
    { path: 'resetusuario', component: _pages_reset_usuario_reset_usuario_component__WEBPACK_IMPORTED_MODULE_13__["ResetUsuarioComponent"] },
    { path: 'grafic', component: _pages_grafic_grafic_component__WEBPACK_IMPORTED_MODULE_9__["GraficComponent"] },
    { path: 'cadastro', component: _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["CadastroComponent"] },
    { path: 'lista', component: _pages_relatorio_lista_relatorio_lista_component__WEBPACK_IMPORTED_MODULE_7__["RelatorioListaComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'chat', component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"] },
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/core/pages/home/home.component.ts");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/error404/error404.component */ "./src/app/core/pages/error404/error404.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/core/pages/login/login.component.ts");
/* harmony import */ var _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cadastro/cadastro.component */ "./src/app/core/pages/cadastro/cadastro.component.ts");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _pages_cadastrousuario_cadastrousuario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/cadastrousuario/cadastrousuario.component */ "./src/app/core/pages/cadastrousuario/cadastrousuario.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _pages_relatorio_lista_relatorio_lista_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/relatorio-lista/relatorio-lista.component */ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.ts");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _pages_grafic_grafic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/grafic/grafic.component */ "./src/app/core/pages/grafic/grafic.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_import_import_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/import/import.component */ "./src/app/core/pages/import/import.component.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _pages_informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/informacoes/informacoes.component */ "./src/app/core/pages/informacoes/informacoes.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/togglebutton */ "./node_modules/primeng/togglebutton.js");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-brazil */ "./node_modules/ng-brazil/fesm5/ng-brazil.js");
/* harmony import */ var _pages_informacoes_dados_cadastrais_dados_cadastrais_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/informacoes/dados-cadastrais/dados-cadastrais.component */ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.ts");
/* harmony import */ var _pages_informacoes_historico_historico_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/informacoes/historico/historico.component */ "./src/app/core/pages/informacoes/historico/historico.component.ts");
/* harmony import */ var _pages_analise_credito_analise_credito_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/analise-credito/analise-credito.component */ "./src/app/core/pages/analise-credito/analise-credito.component.ts");
/* harmony import */ var _pages_analise_credito_dados_faturamento_dados_faturamento_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/analise-credito/dados-faturamento/dados-faturamento.component */ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.ts");
/* harmony import */ var _pages_analise_credito_analise_analise_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/analise-credito/analise/analise.component */ "./src/app/core/pages/analise-credito/analise/analise.component.ts");
/* harmony import */ var src_app_directive_maskInput_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/app/directive/maskInput.directive */ "./src/app/directive/maskInput.directive.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/core/pages/chat/chat.component.ts");
/* harmony import */ var _pages_reset_usuario_reset_usuario_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/reset-usuario/reset-usuario.component */ "./src/app/core/pages/reset-usuario/reset-usuario.component.ts");
/* harmony import */ var _pages_update_usuario_update_usuario_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/update-usuario/update-usuario.component */ "./src/app/core/pages/update-usuario/update-usuario.component.ts");
/* harmony import */ var _pages_delete_usuario_delete_usuario_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/delete-usuario/delete-usuario.component */ "./src/app/core/pages/delete-usuario/delete-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__["InputMaskModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_14__["PasswordModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__["CheckboxModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__["ScrollPanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_21__["ChartModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_25__["InputTextModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__["RadioButtonModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__["TabMenuModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_29__["MenuModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_30__["TabViewModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__["InputTextareaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_32__["CurrencyMaskModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_33__["ConfirmDialogModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_34__["AutoCompleteModule"],
                primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__["KeyFilterModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_36__["TextMaskModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_37__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_38__["MessageModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_39__["ToastModule"],
                primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__["ToggleButtonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_48__["CoreRoutingModule"],
                ng_brazil__WEBPACK_IMPORTED_MODULE_41__["NgBrazil"]
            ],
            declarations: [
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"],
                _pages_cadastrousuario_cadastrousuario_component__WEBPACK_IMPORTED_MODULE_15__["CadastrousuarioComponent"],
                _pages_relatorio_lista_relatorio_lista_component__WEBPACK_IMPORTED_MODULE_18__["RelatorioListaComponent"],
                _pages_grafic_grafic_component__WEBPACK_IMPORTED_MODULE_20__["GraficComponent"],
                _pages_import_import_component__WEBPACK_IMPORTED_MODULE_22__["ImportComponent"],
                _pages_informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_24__["InformacoesComponent"],
                _pages_informacoes_dados_cadastrais_dados_cadastrais_component__WEBPACK_IMPORTED_MODULE_42__["DadosCadastraisComponent"],
                _pages_informacoes_historico_historico_component__WEBPACK_IMPORTED_MODULE_43__["HistoricoComponent"],
                _pages_analise_credito_analise_credito_component__WEBPACK_IMPORTED_MODULE_44__["AnaliseCreditoComponent"],
                _pages_analise_credito_dados_faturamento_dados_faturamento_component__WEBPACK_IMPORTED_MODULE_45__["DadosFaturamentoComponent"],
                _pages_analise_credito_analise_analise_component__WEBPACK_IMPORTED_MODULE_46__["AnaliseComponent"],
                src_app_directive_maskInput_directive__WEBPACK_IMPORTED_MODULE_47__["PrimeNgCalendarMaskDirective"],
                _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_49__["ChatComponent"],
                _pages_reset_usuario_reset_usuario_component__WEBPACK_IMPORTED_MODULE_50__["ResetUsuarioComponent"],
                _pages_update_usuario_update_usuario_component__WEBPACK_IMPORTED_MODULE_51__["UpdateUsuarioComponent"],
                _pages_delete_usuario_delete_usuario_component__WEBPACK_IMPORTED_MODULE_52__["DeleteUsuarioComponent"]
            ],
            exports: [
                _pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _pages_cadastrousuario_cadastrousuario_component__WEBPACK_IMPORTED_MODULE_15__["CadastrousuarioComponent"],
                _pages_relatorio_lista_relatorio_lista_component__WEBPACK_IMPORTED_MODULE_18__["RelatorioListaComponent"],
                _pages_informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_24__["InformacoesComponent"],
                src_app_directive_maskInput_directive__WEBPACK_IMPORTED_MODULE_47__["PrimeNgCalendarMaskDirective"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise-credito.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise-credito.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvYW5hbGlzZS1jcmVkaXRvL2FuYWxpc2UtY3JlZGl0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise-credito.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise-credito.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-tabView [activeIndex]=\"selected\">\r\n  <p-tabPanel header=\"Análise de crédito\">\r\n    <app-analise></app-analise>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Dados para faturamento\" [disabled]=\"disabled\">\r\n    <app-dados-faturamento></app-dados-faturamento>\r\n  </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise-credito.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise-credito.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnaliseCreditoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseCreditoComponent", function() { return AnaliseCreditoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnaliseCreditoComponent = /** @class */ (function () {
    function AnaliseCreditoComponent() {
        this.selected = 0;
        this.disabled = true;
    }
    AnaliseCreditoComponent.prototype.ngOnInit = function () {
    };
    AnaliseCreditoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analise-credito',
            template: __webpack_require__(/*! ./analise-credito.component.html */ "./src/app/core/pages/analise-credito/analise-credito.component.html"),
            styles: [__webpack_require__(/*! ./analise-credito.component.css */ "./src/app/core/pages/analise-credito/analise-credito.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnaliseCreditoComponent);
    return AnaliseCreditoComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise/analise.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise/analise.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ajusteInput {\r\n    width: 100%;\r\n    margin-left: 5px;\r\n}\r\n\r\n.ajusteLabel {\r\n    float: right;\r\n}\r\n\r\n.radio {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9hbmFsaXNlLWNyZWRpdG8vYW5hbGlzZS9hbmFsaXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvYW5hbGlzZS1jcmVkaXRvL2FuYWxpc2UvYW5hbGlzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFqdXN0ZUlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFqdXN0ZUxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise/analise.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise/analise.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\r\n  <p-toast [style]=\"{marginTop: '80px'}\" key=\"popupAnalise\"></p-toast>\r\n\r\n  <form #formSimulacao=\"ngForm\">\r\n    <div class=\"p-grid\">\r\n      <div class=\"p-col-6\">\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-2\">\r\n            <label class=\"ajusteLabel\" for=\"numerocadastroincorporadorafid\">FID: </label>\r\n          </div>\r\n          <div class=\"p-col-10\">\r\n            <input type=\"text\" class=\"ajusteInput\" pInputText id=\"numerocadastroincorporadorafid\" [(ngModel)]=\"analise.numerocadastroincorporadorafid\" name=\"numerocadastroincorporadorafid\"> \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"valoravaliacao\">Valor de Avaliação: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n            id=\"valoravaliacao\" name=\"valoravaliacao\" #valoravaliacao='ngModel' [(ngModel)]=\"simulacoes.valoravaliacao\" \r\n            (blur)=\"calcularValorCredito(); recursoProprio()\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"valorcompravenda\">Valor de compra e venda: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n            id=\"valorcompravenda\" name=\"valorcompravenda\" #valorcompravenda='ngModel' [(ngModel)]=\"simulacoes.valorcompravenda\"\r\n            (blur)=\"calcularValorCredito(); recursoProprio()\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"valorcredito\">Valor do Crédito: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n            id=\"valorcredito\" name=\"valorcredito\" #valorcredito=\"ngModel\" [(ngModel)]=\"simulacoes.valorcredito\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"codmodalidadesimulacao\">Modalidade: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <p-dropdown placeholder=\"Selecione...\" [options]=\"modalidade\" optionLabel=\"descModalidadeSimulacao\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n            class=\"ajusteInput\" ngModel name=\"codmodalidadesimulacao\" #codmodalidadesimulacao=\"ngModel\" [(ngModel)]=\"simulacoes.codmodalidadesimulacao\"\r\n            id=\"codmodalidadesimulacao\" ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"dataenviobanco\">Data envio ao Banco: </label>\r\n          </div>\r\n          <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n            <div class=\"ui-inputgroup\">\r\n              <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n              class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n              id=\"dataenviobanco\" dateFormat=\"dd/mm/yy\" [locale]=\"br\" ngModel name=\"dataenviobanco\" #dataenviobanco=\"ngModel\" [(ngModel)]=\"simulacoes.dataenviobanco\"\r\n              rPCalendarMask ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"codsicaq\">SICAQ: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n              <p-radioButton  [value]=\"true\" label=\"Possui SICAQ\" name=\"codsicaq\" class=\"radio\" [(ngModel)]=\"simulacoes.codsicaq\"\r\n              id=\"codsicaq\"></p-radioButton>\r\n              <p-radioButton  [value]=\"false\" label=\"Não possui SICAQ\" name=\"codsicaq\" class=\"radio\" [(ngModel)]=\"simulacoes.codsicaq\"\r\n              id=\"codsicaq\"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"correspondente\">Correspondente: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" class=\"ajusteInput\" pInputText id=\"correspondente\" name=\"correspondente\" #correspondente=\"ngModel\" [(ngModel)]=\"simulacoes.correspondente\"\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"p-col-6\">\r\n\r\n      <!-- <div class=\"espaco\" [ngStyle]=\"{'width': '741px', 'height': '42px'}\"></div> -->\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" >COD CADASTRO: </label>\r\n        </div>\r\n        <div class=\"p-col-8\">\r\n            {{codcadastro}}\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"prazofinanciamento\">Prazo financiamento: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" class=\"ajusteInput\" pInputText id=\"prazofinanciamento\" name=\"prazofinanciamento\" #prazofinanciamento=\"ngModel\" [(ngModel)]=\"simulacoes.prazofinanciamento\" pKeyFilter=\"pint\"\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"codtipoamortizacao\">Tipo Amortização: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <p-dropdown placeholder=\"Selecione...\" [options]=\"tipoAmortizacao\" optionLabel=\"desctipoamortizacao\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n            class=\"ajusteInput\" name=\"codtipoamortizacao\" #codtipoamortizacao=\"ngModel\" [(ngModel)]=\"simulacoes.codtipoamortizacao\"\r\n            id=\"codtipoamortizacao\" ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"valorsubsidio\">Valor subsidio: </label>\r\n          </div>\r\n          <div class=\"p-col-8\">\r\n            <input type=\"text\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n            id=\"valorsubsidio\" name=\"valorsubsidio\" #valorsubsidio=\"ngModel\" [(ngModel)]=\"simulacoes.valorsubsidio\" >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <p-fieldset legend=\"Valores do processo\">\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-6\">\r\n\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-4\">\r\n              <label class=\"ajusteLabel\" for=\"valordespesasfinanciadas\">Despesas financiadas: </label>\r\n            </div>\r\n            <div class=\"p-col-8\">\r\n              <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\" \r\n              id=\"valordespesasfinanciadas\" name=\"valordespesasfinanciadas\" #valordespesasfinanciadas=\"ngModel\" [(ngModel)]=\"simulacoes.valordespesasfinanciadas\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-4\">\r\n              <label class=\"ajusteLabel\" for=\"valorfinanciamento\">Financiamento total: </label>\r\n            </div>\r\n            <div class=\"p-col-8\">\r\n              <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n              id=\"valorfinanciamento\"  name=\"valorfinanciamento\"  [(ngModel)]=\"simulacoes.valorfinanciamento\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-4\">\r\n              <label class=\"ajusteLabel\" for=\"valorfgts\">FGTS: </label>\r\n            </div>\r\n            <div class=\"p-col-8\">\r\n              <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n              id=\"valorfgts\" name=\"valorfgts\"  [(ngModel)]=\"simulacoes.valorfgts\" (blur)=\"recursoProprio()\" />\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"p-col-6\">\r\n\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-4\">\r\n              <label class=\"ajusteLabel\" for=\"valorrecursosproprios\">Recurso próprio: </label>\r\n            </div>\r\n            <div class=\"p-col-8\">\r\n              <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n              id=\"valorrecursosproprios\" name=\"valorrecursosproprios\"  [(ngModel)]=\"simulacoes.valorrecursosproprios\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-4\">\r\n              <label class=\"ajusteLabel\" for=\"saldodevedor\">Saldo devedor: </label>\r\n            </div>\r\n            <div class=\"p-col-8\">\r\n              <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n              id=\"saldodevedor\" name=\"saldodevedor\"  [(ngModel)]=\"simulacoes.saldodevedor\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-fieldset>\r\n  </form>\r\n\r\n  <p-fieldset legend=\"Simulação\">\r\n    <div class=\"p-grid\">\r\n      <div class=\"p-col-6\">\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"codinstituicaofinanceira\">Instituição financeira: </label>\r\n          </div>\r\n          <div class=\"p-col-4\" id=\"codinstituicaofinanceira\">\r\n            <p-dropdown [options]=\"instFinan\" optionLabel=\"descInstituicaoFinanceira\" placeholder=\"Selecione...\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n            class=\"ajusteInput\" name=\"codinstituicaofinanceira\" #codinstituicaofinanceira=\"ngModel\" [(ngModel)]=\"simulacoes.codinstituicaofinanceira\"></p-dropdown>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            <button pButton type=\"button\" label=\"Adicionar\" class=\"ui-button-raised ui-button-secondary\" [hidden]=\"!salvarAlteracoesButton\"\r\n            [ngStyle]=\"{'width': '100%'}\" (click)=\"adicionarSimulacao(simulacoes, formSimulacao)\" icon=\"pi pi-plus\" iconPos=\"right\"></button>\r\n            <button pButton type=\"button\" label=\"Salvar alterações\" class=\"ui-button-raised ui-button-secondary\" [hidden]=\"salvarAlteracoesButton\"\r\n            [ngStyle]=\"{'width': '100%'}\" icon=\"pi pi-save\" iconPos=\"right\" (click)=\"salvarAlteracoes(formSimulacao)\"></button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n    <p-table [value]=\"simulacaoLista\" [(selection)]=\"selectedItem\" (onRowUnselect)=\"tirarSelecionado($event)\" (onRowSelect)=\"simulacaoSelecionado($event)\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><strong>Excluir</strong></th>\r\n          <th><strong>Visualizar</strong></th>\r\n          <th><strong>Instituição</strong></th>\r\n          <th><strong>Aprovação</strong></th>\r\n          <th><strong>Valor Total</strong></th>\r\n          <th><strong>Taxa de Juros</strong></th>\r\n          <th><strong>Valor 1º Parcela</strong></th>\r\n          <th><strong>Financiado</strong></th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-simul>\r\n        <tr [pSelectableRow]=\"rowData\">\r\n          <td><button pButton icon=\"pi pi-trash\" (click)=\"removerSimulacao(rowData)\"></button></td>\r\n          \r\n          <td> <button pButton icon=\"pi pi-search\" (click)=\"visualizarSimulacao(rowData)\"></button></td>\r\n\r\n          <td> {{simul.codinstituicaofinanceira.descInstituicaoFinanceira}} </td>\r\n\r\n          <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'Aprovação'\">\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <p-dropdown placeholder=\"Selecione...\" [options]=\"statussimulacao\" optionLabel=\"descstatussimulacao\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n                class=\"ajusteInput\" id=\"codstatussimulacao\" name=\"codstatussimulacao\" #codstatussimulacao=\"ngModel\" [(ngModel)]=\"rowData.codstatussimulacao\"></p-dropdown>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                <input pInputText class=\"ajusteInput\" value=\"{{rowData.codstatussimulacao.descstatussimulacao}}\" \r\n                *ngIf=\"rowData.codstatussimulacao != undefined\" (mouseover)=\"focusDropDown(inputDropdown)\" #inputDropdown/>\r\n                <input pInputText class=\"ajusteInput\" value=\"Selecione...\" *ngIf=\"rowData.codstatussimulacao == undefined\" \r\n                #inputDropdown (mouseover)=\"focusDropDown(inputDropdown)\"/>\r\n              </ng-template>\r\n              \r\n            </p-cellEditor>\r\n            \r\n          </td>\r\n\r\n          <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'Valor Total'\">\r\n            <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n                  id=\"valoravaliacaoinstfinanc\" name=\"valoravaliacaoinstfinanc\" #valoravaliacaoinstfinanc=\"ngModel\" [(ngModel)]=\"rowData.valoravaliacaoinstfinanc\"\r\n                  [ngStyle]=\"{'border': '1px solid #a6a6a6', 'padding': '0.429em', 'font-size': '14px'}\"/>    \r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.valoravaliacaoinstfinanc == undefined\"\r\n                  value=\"R$ {{ rowData.valoravaliacaoinstfinanc }}\"/>\r\n                  <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.valoravaliacaoinstfinanc != undefined\"\r\n                  value=\"R$ {{ rowData.valoravaliacaoinstfinanc.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}\"/>\r\n                </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n\r\n          <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'Taxa de Juros'\">\r\n            <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: '% ', thousands: '.', decimal: ',', align: 'left' }\"\r\n                  id=\"taxadejuros\" name=\"taxadejuros\" #taxadejuros=\"ngModel\" [(ngModel)]=\"rowData.taxadejuros\"\r\n                  [ngStyle]=\"{'border': '1px solid #a6a6a6', 'padding': '0.429em', 'font-size': '14px'}\"/>    \r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                    <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.taxadejuros == undefined\"\r\n                    value=\"% {{ rowData.taxadejuros }}\"/>\r\n                    <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.taxadejuros != undefined\"\r\n                    value=\"% {{ rowData.taxadejuros.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}\"/>\r\n                </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n\r\n          <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'Valor 1° Parcela'\">\r\n            <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n                  id=\"valorprimeiraparcela\" name=\"valorprimeiraparcela\" #valorprimeiraparcela=\"ngModel\" [(ngModel)]=\"rowData.valorprimeiraparcela\"\r\n                  [ngStyle]=\"{'border': '1px solid #a6a6a6', 'padding': '0.429em', 'font-size': '14px'}\"/> \r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                    <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.valorprimeiraparcela == undefined\"\r\n                    value=\"R$ {{ rowData.valorprimeiraparcela }}\"/>\r\n                    <input pInputText class=\"ajusteInput\" *ngIf=\"rowData.valorprimeiraparcela != undefined\"\r\n                    value=\"R$ {{ rowData.valorprimeiraparcela.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}\"/>\r\n                </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n\r\n          <td > \r\n            <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>  \r\n          </td>\r\n\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </p-fieldset>\r\n\r\n  <p-fieldset legend=\"Datas do processo\">\r\n    <form #formDatasDoProcesso=\"ngForm\">\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-6\">\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"datapastamae\">Data da pasta mãe: </label>\r\n          </div>\r\n          <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n            <div class=\"ui-inputgroup\">\r\n              <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n              class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n              id=\"datapastamae\" dateFormat=\"dd/mm/yy\" [locale]=\"br\"\r\n              name=\"datapastamae\" #datapastamae=\"ngModel\" [(ngModel)]=\"analise.datapastamae\" showButtonBar=\"true\" rPCalendarMask ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"dataemissao\">Data de Emissão: </label>\r\n          </div>\r\n          <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n            <div class=\"ui-inputgroup\">\r\n              <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n              class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n              id=\"dataemissao\" dateFormat=\"dd/mm/yy\" [locale]=\"br\"\r\n              name=\"dataemissao\" #dataemissao=\"ngModel\" [(ngModel)]=\"analise.dataemissao\" showButtonBar=\"true\" rPCalendarMask ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"dataassinatura\">Data de assinatura: </label>\r\n          </div>\r\n          <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n            <div class=\"ui-inputgroup\">\r\n              <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n              class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n              id=\"dataassinatura\" dateFormat=\"dd/mm/yy\" [locale]=\"br\"\r\n              name=\"dataassinatura\" #dataassinatura=\"ngModel\" [(ngModel)]=\"analise.dataassinatura\" showButtonBar=\"true\" rPCalendarMask ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    </p-fieldset>\r\n    <p-fieldset >\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-9\">\r\n        </div> \r\n        <div class=\"p-col-1\">\r\n          <button pButton type=\"button\" label=\"Cancelar\" class=\"ui-button-danger\" icon=\"pi pi-refresh\" iconPos=\"right\"></button>\r\n        </div>\r\n        <div class=\"p-col-2\">\r\n          <button pButton type=\"button\" label=\"Salvar\" class=\"ui-button-success\" (click)=\"salvarAnalise(formDatasDoProcesso)\" icon=\"pi pi-save\" iconPos=\"right\"\r\n          [hidden]=\"controle\"></button>\r\n          <button pButton type=\"button\" label=\"Salvar alterações\" class=\"ui-button-success\" (click)=\"salvarAnalise(formDatasDoProcesso)\" icon=\"pi pi-save\" iconPos=\"right\"\r\n          [ngStyle]=\"{'width': '100%'}\" [hidden]=\"!controle\"></button>\r\n        </div>\r\n      </div>\r\n    <p-messages [(value)]=\"msgs2\"></p-messages>\r\n  </p-fieldset>\r\n\r\n</form>\r\n<p-confirmDialog [ngStyle]=\"{width: '425px'}\"></p-confirmDialog>\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/analise/analise.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/analise/analise.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnaliseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseComponent", function() { return AnaliseComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_simulacoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/simulacoes */ "./src/app/models/simulacoes.ts");
/* harmony import */ var src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_models_analise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/analise */ "./src/app/models/analise.ts");
/* harmony import */ var _analise_credito_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../analise-credito.component */ "./src/app/core/pages/analise-credito/analise-credito.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_models_instituicaoFinanceira__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/instituicaoFinanceira */ "./src/app/models/instituicaoFinanceira.ts");
/* harmony import */ var src_app_models_status_simulacao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/status-simulacao */ "./src/app/models/status-simulacao.ts");
/* harmony import */ var src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/analise-logica.service */ "./src/app/services/analise-logica.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AnaliseComponent = /** @class */ (function () {
    function AnaliseComponent(confirmationService, service, router, analiseCred, messageService, logicaService, sharedService) {
        this.confirmationService = confirmationService;
        this.service = service;
        this.router = router;
        this.analiseCred = analiseCred;
        this.messageService = messageService;
        this.logicaService = logicaService;
        this.sharedService = sharedService;
        this.simulacaoLista = [];
        this.statusSimulEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.instFinanEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.salvarAlteracoesButton = true;
        this.instFinan = [];
        this.statussimulacao = [];
        this.controle = this.service.controle;
        this.msgs = [];
        this.msgs2 = [];
        this.simulacoes = new src_app_models_simulacoes__WEBPACK_IMPORTED_MODULE_2__["Simulacoes"]();
        this.analise = new src_app_models_analise__WEBPACK_IMPORTED_MODULE_5__["Analise"]();
    }
    AnaliseComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
        console.log('ngOnDestroy()');
    };
    AnaliseComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("-------------------------------ngOnInit----AnaliseComponent");
        this.simulacaoLista = [];
        this.br = this.sharedService.calendarioBr();
        this.chamadasInit();
        var AnaliseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');
        if (AnaliseSelecionada != 'undefined' && AnaliseSelecionada != null) {
            var analise = this.logicaService.receberAnalise(AnaliseSelecionada, this.statusSimulEvent, this.instFinanEvent, this.instFinan, this.statussimulacao);
            this.analise = analise;
            this.codcadastro = analise.codcadastro;
            this.simulacoes.codcadastro = this.codcadastro;
            this.analise.numerocadastroincorporadorafid = analise.numerocadastroincorporadorafid;
            for (var _i = 0; _i < analise.simulacoes.length; _i++) {
                if (analise.simulacoes[_i].simulacaoselecionado == true) {
                    this.selectedItem = analise.simulacoes[_i];
                }
                this.simulacaoLista.push(analise.simulacoes[_i]);
            }
            this.controle = true;
            if (this.verificarSelecionado() == true) {
                this.analiseCred.disabled = false;
            }
            else {
                this.analiseCred.disabled = true;
            }
        }
        else {
            this.codcadastro = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario[0];
            this.analise.numerocadastroincorporadorafid = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario[1];
            this.controle = false;
        }
        if (src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario != null) {
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario = null;
        }
        this.service.buscarAnalise.subscribe(function (temporario) {
            if (src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario == null) {
                src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance().temporario = temporario;
            }
            _this.form.reset();
            _this.formData.reset();
            _this.analiseCred.disabled = true;
            _this.msgs = [];
            _this.msgs2 = [];
            _this.ngOnInit();
        });
        this.simulacoes.correspondente = 'Montreal';
        this.simulacoes.simulacaoselecionado = false;
        console.log(this.simulacoes);
    };
    AnaliseComponent.prototype.addItemStatusSimulacao = function (items) {
        this.statussimulacao = items;
    };
    AnaliseComponent.prototype.validaFormulario = function (form) {
        if (form.valid == false) {
            return false;
        }
        else {
            return true;
        }
    };
    AnaliseComponent.prototype.adicionarSimulacao = function (simulacao, formSimulacao) {
        var _this = this;
        this.msgs = [];
        if ((this.validaFormulario(formSimulacao) == true) && (this.simulacoes.codinstituicaofinanceira != undefined || null)) {
            var camposVazios = [];
            for (var _i in formSimulacao.controls) {
                if (formSimulacao.controls[_i].value == undefined || null || '') {
                    var campoVazio = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoVazio = campoVazio.replace(': ', '');
                    camposVazios.push("<p> -" + campoVazio);
                }
            }
            if (camposVazios.length > 0) {
                this.confirmationService.confirm({
                    message: "As seguintes informa\u00E7\u00F5es n\u00E3o est\u00E3o preenchidas:\n          <strong>" + camposVazios + '</p></strong><br><p>Deseja continuar?</p>',
                    header: 'Confirmação',
                    icon: 'pi pi-exclamation-triangle',
                    acceptLabel: 'Sim',
                    rejectLabel: 'Não',
                    accept: function () {
                        var simulacao2 = _this.logicaService.adicionarSimulacao(simulacao, _this.codcadastro);
                        _this.simulacaoLista.push(simulacao2);
                        _this.simulacoes.codinstituicaofinanceira = null;
                        console.log(_this.simulacaoLista);
                        _this.messageService.add({ key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Simulação adicionada!' });
                    },
                    reject: function () {
                    }
                });
            }
            else {
                var simulacao2 = this.logicaService.adicionarSimulacao(simulacao, this.codcadastro);
                this.simulacaoLista.push(simulacao2);
                this.simulacoes.codinstituicaofinanceira = null;
                this.messageService.add({ key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Simulação adicionada!' });
            }
            this.simulacoes.correspondente = 'Montreal';
            this.simulacoes.simulacaoselecionado = false;
        }
        else {
            this.adicionarMsgErro(formSimulacao);
            if (this.simulacoes.codinstituicaofinanceira == undefined) {
                this.msgs.push({
                    severity: 'error',
                    summary: 'Erro ao adicionar!',
                    detail: "Selecione a institui\u00E7\u00E3o financeira."
                });
            }
        }
    };
    AnaliseComponent.prototype.removerSimulacao = function (simul) {
        var index = this.simulacaoLista.indexOf(simul);
        this.simulacaoLista.splice(index, 1);
        this.messageService.add({ key: 'popupAnalise', severity: 'warn', summary: 'Aviso!', detail: 'Simulação removida!' });
    };
    AnaliseComponent.prototype.salvar = function () {
        var _this = this;
        this.analise = this.logicaService.salvarAnalise(this.analise, this.simulacaoLista, this.codcadastro, this.controle);
        if (this.controle == true) {
            console.log(this.analise);
            console.log(JSON.stringify(this.analise));
            this.messageService.add({ key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!' });
            setTimeout(function () {
                _this.service.putAnaliseSimulacaoContrato(_this.analise).subscribe(function (data) {
                    console.log(data);
                    _this.analise = _this.logicaService.formatandoAnalise(_this.analise, _this.simulacaoLista, _this.statussimulacao, _this.instFinan);
                    _this.simulacaoLista = _this.analise.simulacoes;
                });
            }, 500);
        }
        else {
            for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
                this.analise.simulacoes[_i].codcadastro = this.codcadastro;
            }
            this.analise.codcadastro = this.codcadastro;
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].emitirevento.emit(this.codcadastro);
            setTimeout(function () {
                _this.service.postAnaliseSimulacaoContrato(_this.analise).subscribe(function (data) {
                    console.log(JSON.stringify(data));
                });
            }, 500);
            console.log(JSON.stringify(this.analise));
            this.messageService.add({ key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Análise adicionada!' });
        }
        if (this.verificarSelecionado() == true) {
            this.analiseCred.disabled = false;
            this.analiseCred.selected = 1;
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    AnaliseComponent.prototype.focusDropDown = function (input) {
        input.click();
    };
    AnaliseComponent.prototype.recursoProprio = function () {
        var calc;
        if (this.simulacoes.valorfgts == undefined) {
            calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito;
        }
        else if (this.simulacoes.valorcredito == undefined) {
            calc = this.simulacoes.valorfgts;
        }
        else {
            calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito - this.simulacoes.valorfgts;
        }
        this.simulacoes.valorrecursosproprios = calc;
    };
    AnaliseComponent.prototype.calcularValorCredito = function () {
        var calc;
        if (this.simulacoes.valoravaliacao == undefined) {
            calc = (80 * this.simulacoes.valorcompravenda) / 100;
        }
        else if (this.simulacoes.valorcompravenda == undefined) {
            calc = (80 * this.simulacoes.valoravaliacao) / 100;
        }
        else if (this.simulacoes.valoravaliacao < this.simulacoes.valorcompravenda) {
            calc = (80 * this.simulacoes.valoravaliacao) / 100;
        }
        else {
            calc = (80 * this.simulacoes.valorcompravenda) / 100;
        }
        this.simulacoes.valorcredito = calc;
    };
    AnaliseComponent.prototype.salvarAnalise = function (formDatasDoProcesso) {
        var _this = this;
        this.msgs2 = [];
        if (this.validaFormulario(formDatasDoProcesso) == true) {
            this.confirmationService.confirm({
                message: 'Tem certeza que deseja salvar essas informações?',
                header: 'Confirmação',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel: 'Sim',
                rejectLabel: 'Não',
                accept: function () {
                    _this.salvar();
                },
                reject: function () {
                }
            });
        }
        else {
            this.adicionarMsgErro(formDatasDoProcesso);
        }
    };
    AnaliseComponent.prototype.simulacaoSelecionado = function (rowData) {
        var simulacao = rowData.data;
        for (var item = 0; item < this.simulacaoLista.length; item++) {
            if (this.simulacaoLista[item].codinstituicaofinanceira == simulacao.codinstituicaofinanceira) {
                this.simulacaoLista[item].simulacaoselecionado = true;
            }
            else {
                this.simulacaoLista[item].simulacaoselecionado = false;
            }
        }
    };
    AnaliseComponent.prototype.verificarSelecionado = function () {
        for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
            if (this.simulacaoLista[_i].simulacaoselecionado == true) {
                return true;
            }
        }
    };
    AnaliseComponent.prototype.tirarSelecionado = function (rowData) {
        var row = rowData.data;
        for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
            if (row.codsimulacao == this.simulacaoLista[_i].codsimulacao) {
                this.simulacaoLista[_i].simulacaoselecionado = false;
            }
        }
    };
    AnaliseComponent.prototype.buscarFid = function () {
        var _this = this;
        var codCadastro;
        this.service.getCodCadastro().subscribe(function (dados) {
            codCadastro = dados['data'];
            for (var _i = 0; _i < codCadastro.length; _i++) {
                if (_this.analise.numerocadastroincorporadorafid == codCadastro[_i].numerocadastroincorporadorafid) {
                    _this.codcadastro = codCadastro[_i].codcadastro;
                }
            }
        });
    };
    AnaliseComponent.prototype.visualizarSimulacao = function (simulacao) {
        this.salvarAlteracoesButton = false;
        this.simulacoes = this.logicaService.visualizarSimulacao(simulacao, this.modalidade, this.tipoAmortizacao, this.instFinan);
    };
    AnaliseComponent.prototype.salvarAlteracoes = function (formSimulacao) {
        this.msgs = [];
        if (this.validaFormulario(formSimulacao) == true) {
            for (var item = 0; item < this.simulacaoLista.length; item++) {
                if (this.simulacaoLista[item].codsimulacao == this.simulacoes.codsimulacao) {
                    this.simulacaoLista[item] = this.logicaService.salvarAlteracoes(this.simulacaoLista, this.simulacoes);
                }
            }
            this.salvarAlteracoesButton = true;
            this.simulacoes.codinstituicaofinanceira = null;
            this.messageService.add({ key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!' });
            this.simulacoes.correspondente = 'Montreal';
            this.simulacoes.simulacaoselecionado = false;
        }
        else {
            this.adicionarMsgErro(formSimulacao);
        }
    };
    AnaliseComponent.prototype.adicionarMsgErro = function (form) {
        this.msgs = [];
        var camposInvalidos = [];
        for (var _i in form.controls) {
            if (form.controls[_i].status == 'INVALID') {
                var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                campoInvalido = campoInvalido.replace(': ', '');
                camposInvalidos.push(" " + campoInvalido);
                form.controls[_i].pristine = false;
                this.msgs = [];
                this.msgs.push({
                    severity: 'error',
                    summary: 'Erro ao salvar alterações!',
                    detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:" + camposInvalidos + "</strong>."
                });
            }
        }
    };
    AnaliseComponent.prototype.chamadasInit = function () {
        var _this = this;
        this.service.getInstFinan().subscribe(function (dados) {
            _this.instFinanTemp = dados['data'];
            for (var _i = 0; _i < _this.instFinanTemp.length; _i++) {
                var item = new src_app_models_instituicaoFinanceira__WEBPACK_IMPORTED_MODULE_8__["InstiruicaoFinanceiras"]();
                item.codInstituicaoFinanceira = _this.instFinanTemp[_i].codInstituicaoFinanceira;
                item.descInstituicaoFinanceira = _this.instFinanTemp[_i].descInstituicaoFinanceira;
                _this.instFinan[_i] = item;
            }
            _this.instFinanEvent.emit(true);
            _this.instFinan = dados['data'];
        });
        this.service.getModalidades().subscribe(function (dados) { return _this.modalidade = dados['data']; });
        this.service.getTipoAmortizacao().subscribe(function (dados) { return _this.tipoAmortizacao = dados['data']; });
        this.service.getStatusSimulacao().subscribe(function (dados) {
            _this.statussimulacaoTemp = dados['data'];
            for (var _i = 0; _i < _this.statussimulacaoTemp.length; _i++) {
                var item = new src_app_models_status_simulacao__WEBPACK_IMPORTED_MODULE_9__["StatusSimulacao"]();
                item.codstatussimulacao = _this.statussimulacaoTemp[_i].codstatussimulacao;
                item.descstatussimulacao = _this.statussimulacaoTemp[_i].descstatussimulacao;
                _this.statussimulacao[_i] = item;
            }
            _this.statusSimulEvent.emit(true);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formSimulacao', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"] }),
        __metadata("design:type", Object)
    ], AnaliseComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDatasDoProcesso', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"] }),
        __metadata("design:type", Object)
    ], AnaliseComponent.prototype, "formData", void 0);
    AnaliseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analise',
            template: __webpack_require__(/*! ./analise.component.html */ "./src/app/core/pages/analise-credito/analise/analise.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
            styles: [__webpack_require__(/*! ./analise.component.css */ "./src/app/core/pages/analise-credito/analise/analise.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__["AnaliseChamadasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _analise_credito_component__WEBPACK_IMPORTED_MODULE_6__["AnaliseCreditoComponent"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_10__["AnaliseLogicaService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], AnaliseComponent);
    return AnaliseComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ajusteInput {\r\n    width: 100%;\r\n    margin-left: 5px;\r\n}\r\n\r\n.ajusteLabel {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9hbmFsaXNlLWNyZWRpdG8vZGFkb3MtZmF0dXJhbWVudG8vZGFkb3MtZmF0dXJhbWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9hbmFsaXNlLWNyZWRpdG8vZGFkb3MtZmF0dXJhbWVudG8vZGFkb3MtZmF0dXJhbWVudG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hanVzdGVJbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hanVzdGVMYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate #formulario=\"ngForm\" >\r\n<div class=\"p-grid\">\r\n    <div class=\"p-col-6\">\r\n      </div>\r\n      <div class=\"p-col-6\">\r\n          <div class=\"p-grid\">\r\n              <div class=\"p-col-4\">\r\n                <label class=\"ajusteLabel\" >COD CADASTRO: </label>\r\n              </div>\r\n              <div class=\"p-col-8\">\r\n                  {{dadosfaturamento.codcadastro}}\r\n              </div>\r\n            </div>\r\n        </div>\r\n  <div class=\"p-col-6\">\r\n\r\n    <div class=\"p-grid\">\r\n      <div class=\"p-col-4\">\r\n        <label class=\"ajusteLabel\" for=\"razaosocialspe\">A FATURAR CONTRATO SPE: </label>\r\n      </div>\r\n      <div class=\"p-col-8\">\r\n          <p-dropdown placeholder=\"Selecione...\" optionLabel=\"descspe\" [options]=\"spe\" [autoWidth]=\"false\" \r\n          [style]=\"{'width': '100%', 'margin-left': '5px'}\" ngModel name=\"razaosocialspe\" #razaosocialspe=\"ngModel\" \r\n          [(ngModel)]=\"dadosfaturamento.razaosocialspe\" filter=\"true\" required id=\"razaosocialspe\" (onChange)=\"preencherSPE($event.value)\"\r\n          required></p-dropdown>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-col-6\">\r\n    <div class=\"p-grid\">\r\n      <div class=\"p-col-2\">\r\n        <label class=\"ajusteLabel\" for=\"cpfcnpj\">CPF/CNPJ: </label>\r\n      </div>\r\n      <div class=\"p-col-10\">\r\n        <input type=\"text\" name=\"cpfcnpj\"  [(ngModel)]=\"dadosfaturamento.cpfcnpj\" pKeyFilter=\"num\" class=\"ajusteInput\" pInputText id=\"cpfcnpj\" [ngStyle]=\"{'width': '50%'}\"\r\n        required>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-fieldset legend=\"Faturamento\">\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"primeiraParcela\">1° Parcela: </label>\r\n        </div>\r\n        <div class=\"p-col-9\">\r\n          <input currencyMask pInputText class=\"ajusteInput\" name=\"parcela1\" [(ngModel)]=\"dadosfaturamento.parcela1\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n          id=\"primeiraParcela\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"segundaParcela\">2° Parcela: </label>\r\n        </div>\r\n        <div class=\"p-col-9\">\r\n          <input currencyMask pInputText class=\"ajusteInput\" name=\"parcela2\" [(ngModel)]=\"dadosfaturamento.parcela2\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n          id=\"segundaParcela\"/>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"primeiraNotaFiscal\">Nota fiscal: </label>\r\n        </div>\r\n        <div class=\"p-col-9\">\r\n          <input type=\"text\" name=\"notafiscal1\" [(ngModel)]=\"dadosfaturamento.notafiscal1\" class=\"ajusteInput\" pInputText id=\"primeiraNotaFiscal\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"segundaNotaFiscal\">Nota fiscal: </label>\r\n        </div>\r\n        <div class=\"p-col-9\">\r\n          <input type=\"text\" name=\"notafiscal2\" [(ngModel)]=\"dadosfaturamento.notafiscal2\" class=\"ajusteInput\" pInputText id=\"segundaNotaFiscal\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"primeiroMesFatu\">Mês faturamento: </label>\r\n        </div>\r\n        <div class=\"p-col-8\">\r\n          <div class=\"ui-inputgroup\">\r\n            <p-calendar [showIcon]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\"  ngModel name=\"mesfaturamento1\" #mesfaturamento1=\"ngModel\" [(ngModel)]=\"dadosfaturamento.mesfaturamento1\"\r\n            class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n            id=\"dataAssin\" dateFormat=\"mm/yy\" [locale]=\"br\" view=\"month\"></p-calendar>\r\n          </div>    \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"segundoMesFatu\">Mês faturamento: </label>\r\n        </div>\r\n        <div class=\"p-col-8\">\r\n          <div class=\"ui-inputgroup\">\r\n            <p-calendar [showIcon]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\"  ngModel name=\"mesfaturamento2\" #mesfaturamento2=\"ngModel\" [(ngModel)]=\"dadosfaturamento.mesfaturamento2\"\r\n            class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n            id=\"dataAssin\" dateFormat=\"mm/yy\" [locale]=\"br\" view=\"month\"></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"p-col-12\">\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-9\">\r\n          <label class=\"ajusteLabel\" for=\"recebIncorp\">TOTAL RECEBIDO DA INCORPORADORA: </label>\r\n        </div>\r\n        <div class=\"p-col-3\">\r\n          <input type=\"text\" name=\"totalrecebidoincorporadora\" [(ngModel)]=\"dadosfaturamento.totalrecebidoincorporadora\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\" id=\"recebIncorp\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <br><br><br>\r\n  <p-fieldset >\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-6\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-5\">\r\n          <label class=\"ajusteLabel\" for=\"recebTeorico\">RECEBIMENTO TEÓRICO DO BANCO: </label>\r\n        </div>\r\n        <div class=\"p-col-7\">\r\n          <input type=\"text\"  name=\"recebimentoteoricobanco\" [(ngModel)]=\"dadosfaturamento.recebimentoteoricobanco\" currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\" pInputText id=\"recebTeorico\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-5\">\r\n          <label class=\"ajusteLabel\" for=\"notaFiscal\">NÚMERO NOTA FISCAL: </label>\r\n        </div>\r\n        <div class=\"p-col-7\">\r\n          <input type=\"text\" name=\"numeronotafiscal\" [(ngModel)]=\"dadosfaturamento.numeronotafiscal\" class=\"ajusteInput\" pInputText id=\"notaFiscal\">\r\n        </div>\r\n      </div>\r\n</div>\r\n  \r\n          <div class=\"p-col-6\">     \r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-5\">\r\n          <label class=\"ajusteLabel\" for=\"mesFaturado\">MÊS FATURADO: </label>\r\n        </div>\r\n        <div class=\"p-col-7\">\r\n          <p-calendar [showIcon]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\"   ngModel name=\"mesfaturado\" #mesfaturado=\"ngModel\" [(ngModel)]=\"dadosfaturamento.mesfaturado\"\r\n          class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n          id=\"mesFaturado\" dateFormat=\"mm/yy\" [locale]=\"br\" view=\"month\"></p-calendar>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-5\">\r\n          <label class=\"ajusteLabel\" for=\"totalReceb\">TOTAL RECEBIDO: </label>\r\n        </div>\r\n        <div class=\"p-col-7\">\r\n          <input type=\"text\" name=\"totalrecebido\" [(ngModel)]=\"dadosfaturamento.totalrecebido\"  currencyMask pInputText class=\"ajusteInput\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\" id=\"totalReceb\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-fieldset>\r\n  <br><br><br>\r\n\r\n  <div class=\"p-grid\">\r\n    <label class=\"ajusteLabel\" for=\"observacao\" [ngStyle]=\"{'padding-left': '14px'}\">Observação:</label>\r\n    <textarea pInputTextarea [rows]=\"4\" id=\"observacao\" ngModel name=\"observacao\" #observacao=\"ngModel\" [(ngModel)]=\"dadosfaturamento.observacao\" [ngStyle]=\"{'margin': '0 14px 14px 14px'}\" style=\"width: 100%\"></textarea>\r\n  </div>\r\n\r\n</p-fieldset>\r\n<p-fieldset >\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-10\">\r\n        </div> \r\n      <div class=\"p-col-1\">\r\n          <button pButton type=\"button\" label=\"Cancelar\"  (click)=\"cancelar()\" class=\"ui-button-danger\" ></button>\r\n        </div>\r\n        <div class=\"p-col-1\">\r\n            <button pButton type=\"button\" (click)=\"salvar(formulario)\" label=\"Salvar\" class=\"ui-button-success\" ></button>\r\n        </div>\r\n    </div>   \r\n    <p-messages [(value)]=\"msgs\"></p-messages>\r\n  </p-fieldset>\r\n<br><br>\r\n\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DadosFaturamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosFaturamentoComponent", function() { return DadosFaturamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_dadosfaturamento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/dadosfaturamento */ "./src/app/models/dadosfaturamento.ts");
/* harmony import */ var src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var src_app_models_spe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/spe */ "./src/app/models/spe.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/analise-logica.service */ "./src/app/services/analise-logica.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @brazilian-utils/helper-only-numbers */ "./node_modules/@brazilian-utils/helper-only-numbers/dist/index.m.js");
/* harmony import */ var _brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brazilian-utils/format-cpf */ "./node_modules/@brazilian-utils/format-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @brazilian-utils/format-cnpj */ "./node_modules/@brazilian-utils/format-cnpj/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DadosFaturamentoComponent = /** @class */ (function () {
    function DadosFaturamentoComponent(analiseChamadasService, sharedService, logicaService, router) {
        this.analiseChamadasService = analiseChamadasService;
        this.sharedService = sharedService;
        this.logicaService = logicaService;
        this.router = router;
        this.speEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.dadosfaturamento = new src_app_models_dadosfaturamento__WEBPACK_IMPORTED_MODULE_1__["DadosFaturamento"]();
    }
    DadosFaturamentoComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
        console.log('ngOnDestroy()');
    };
    DadosFaturamentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("-------------------------------ngOnInit----DadosFaturamentoComponent");
        this.br = this.sharedService.calendarioBr();
        this.form.reset();
        this.msgs = [];
        this.analiseChamadasService.getSPE().subscribe(function (dados) {
            _this.speTemp = dados['data'];
            for (var _i = 0; _i < _this.speTemp.length; _i++) {
                var item = new src_app_models_spe__WEBPACK_IMPORTED_MODULE_3__["SPE"]();
                item.codincorporadora = _this.speTemp[_i].codincorporadora;
                item.descspe = _this.speTemp[_i].descspe;
                item.cnpjspe = _this.speTemp[_i].cnpjspe;
                _this.speTemp[_i] = item;
            }
            _this.speEvent.emit(dados);
            _this.spe = dados['data'];
        });
        var analiseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');
        if (analiseSelecionada != 'undefined' && analiseSelecionada != null) {
            this.dadosfaturamento = this.logicaService.receberDadosFaturamento(analiseSelecionada, this.dadosfaturamento, this.speEvent);
        }
        else {
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].emitirevento.subscribe(function (dados) { return (_this.dadosfaturamento.codcadastro = dados); });
        }
    };
    DadosFaturamentoComponent.prototype.salvar = function (formulario) {
        if (this.validaForm(formulario) == true) {
            this.dadosfaturamento.razaosocialspe = this.dadosfaturamento.razaosocialspe.descspe;
            this.dadosfaturamento.cpfcnpj = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_9__["default"])(this.dadosfaturamento.cpfcnpj);
            console.log(JSON.stringify(this.dadosfaturamento));
            this.analiseChamadasService.postDadosFaturamento(this.dadosfaturamento).subscribe(function (dados) { return (console.log(JSON.stringify(dados['data']))); });
            this.router.navigate(['/home']);
        }
        else {
            this.msgs = [];
            var camposInvalidos = [];
            for (var _i in formulario.controls) {
                if (formulario.controls[_i].status == 'INVALID') {
                    var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoInvalido = campoInvalido.replace(': ', '');
                    camposInvalidos.push(" " + campoInvalido);
                    formulario.controls[_i].pristine = false;
                    this.msgs = [];
                    this.msgs.push({
                        severity: 'error',
                        summary: 'Erro ao salvar!',
                        detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:"
                            + camposInvalidos + "</strong>."
                    });
                }
            }
        }
    };
    DadosFaturamentoComponent.prototype.cancelar = function () {
        this.dadosfaturamento = new src_app_models_dadosfaturamento__WEBPACK_IMPORTED_MODULE_1__["DadosFaturamento"]();
    };
    DadosFaturamentoComponent.prototype.preencherSPE = function (speRecebido) {
        var spe2;
        spe2 = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_9__["default"])(speRecebido.cnpjspe);
        if (spe2.length > 11) {
            speRecebido.cnpjspe = Object(_brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_11__["default"])(spe2);
        }
        else {
            speRecebido.cnpjspe = Object(_brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_10__["default"])(spe2);
        }
        this.dadosfaturamento.cpfcnpj = speRecebido.cnpjspe;
    };
    DadosFaturamentoComponent.prototype.validaForm = function (formSPE) {
        if (formSPE.valid == true) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formulario', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"] }),
        __metadata("design:type", Object)
    ], DadosFaturamentoComponent.prototype, "form", void 0);
    DadosFaturamentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dados-faturamento',
            template: __webpack_require__(/*! ./dados-faturamento.component.html */ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
            styles: [__webpack_require__(/*! ./dados-faturamento.component.css */ "./src/app/core/pages/analise-credito/dados-faturamento/dados-faturamento.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_2__["AnaliseChamadasService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_5__["AnaliseLogicaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], DadosFaturamentoComponent);
    return DadosFaturamentoComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/cadastro/cadastro.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/pages/cadastro/cadastro.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fontSizeLabel{\r\n    font-size: 11pt\r\n}\r\n.formclass {\r\n    min-width: 1300px;\r\n    min-height: 680px;\r\n}\r\n.ajusteInput {\r\n  width: 100%;\r\n  margin-left: 5px;\r\n}\r\n.radio {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n.ajusteLabel {\r\n  float: right;\r\n}\r\n.lds-dual-ring {\r\n  display: inline-block;\r\n  width: 128px;\r\n  height: 128px;\r\n}\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 110px;\r\n  height: 110px;\r\n  margin: 2px;\r\n  border-radius: 50%;\r\n  border: 5px solid black;\r\n  border-color: black transparent black transparent;\r\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n          animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@-webkit-keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaURBQWlEO0VBQ2pELHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGO0FBUEE7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250U2l6ZUxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMXB0XHJcbn1cclxuLmZvcm1jbGFzcyB7XHJcbiAgICBtaW4td2lkdGg6IDEzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDY4MHB4O1xyXG59XHJcblxyXG4uYWp1c3RlSW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hanVzdGVMYWJlbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubGRzLWR1YWwtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMjhweDtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG59XHJcbi5sZHMtZHVhbC1yaW5nOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcclxuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/pages/cadastro/cadastro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/pages/cadastro/cadastro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center vertical-container\" [hidden]=\"load\" style=\"padding: 25px;\">\r\n  <div #loader class=\"lds-dual-ring\">\r\n  </div>\r\n</div>\r\n\r\n<div [hidden]=\"!load\">\r\n  <form novalidate #formulario=\"ngForm\" >\r\n    <p-toast [style]=\"{marginTop: '80px'}\" key=\"popup\"></p-toast>\r\n    <p-panel>\r\n      <p-header>\r\n        Cadastro de informação\r\n      </p-header>\r\n\r\n      <p-fieldset legend=\"Cadastro de informações pessoais\">\r\n        <div>\r\n          <form #formCadInfo=\"ngForm\">\r\n            <p-fieldset legend=\"Comprador principal\">\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-6\">\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"cpfcnpj\">CPF/CNPJ: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"cpfcnpj\" ngModel  name=\"cpfcnpj\"  #cpfcnpj=\"ngModel\" [(ngModel)]=\"comprador.cpfcnpj\"\r\n                      pKeyFilter=\"pint\" required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"codtipocliente\">Tipo de pessoa: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <p-radioButton  *ngFor=\"let tipo of tipocliente\" value=\"{{tipo.codtipocliente}}\" label=\"{{tipo.desctipocliente}}\" name=\"codtipocliente\" class=\"radio\" ngModel #codtipocliente=\"ngModel\" [(ngModel)]=\"comprador.codtipocliente\"\r\n                      required id=\"codtipocliente\"></p-radioButton>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"ndocumento\">Número de identidade: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"ndocumento\" ngModel  name=\"ndocumento\" #ndocumento=\"ngModel\" [(ngModel)]=\"comprador.ndocumento\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"dataexpedicao\">Data expedição: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n                      <div class=\"ui-inputgroup\">\r\n                        <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n                        class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n                        id=\"dataexpedicao\" dateFormat=\"dd/mm/yy\" ngModel name=\"dataexpedicao\"  #dataexpedicao=\"ngModel\" [(ngModel)]=\"comprador.dataexpedicao\"\r\n                        [locale]=\"br\" required dataType=\"date\" rPCalendarMask></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"codestadocivil\">Estado civil: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <p-dropdown placeholder=\"Selecione...\" optionLabel=\"descestadocivil\" [options]=\"estadoCivil\" [autoWidth]=\"false\" id=\"codestadocivil\"\r\n                      [style]=\"{'width': '100%'}\" class=\"ajusteInput\" ngModel name=\"codestadocivil\" #codestadocivil=\"ngModel\" [(ngModel)]=\"comprador.codestadocivil\"\r\n                      required></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"valorrenda\">Renda: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input currencyMask pInputText class=\"ajusteInput\" name=\"valorrenda\" [(ngModel)]=\"comprador.valorrenda\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n                      required id=\"valorrenda\"/>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"p-col-6\">\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"nomecliente\">Nome do cliente: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"nomecliente\" ngModel  name=\"nomecliente\"  #nomecliente=\"ngModel\" [(ngModel)]=\"comprador.nomecliente\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"datanascimento\">Data de nascimento: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n                      <div class=\"ui-inputgroup\">\r\n                        <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n                        class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n                        id=\"datanascimento\" dateFormat=\"dd/mm/yy\" ngModel name=\"datanascimento\"  #datanascimento=\"ngModel\" [(ngModel)]=\"comprador.datanascimento\"\r\n                        [locale]=\"br\" required dataType=\"date\" rPCalendarMask></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"orgaoexpedidor\">Órgão expedidor: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"orgaoexpedidor\" ngModel name=\"orgaoexpedidor\"  #orgaoexpedidor=\"ngModel\" [(ngModel)]=\"comprador.orgaoexpedidor\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"nacionalidade\">Nacionalidade: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"nacionalidade\" ngModel name=\"nacionalidade\"  #nacionalidade=\"ngModel\" [(ngModel)]=\"comprador.nacionalidade\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"profissao\">Profissão: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"profissao\" ngModel name=\"profissao\"  #profissao=\"ngModel\" [(ngModel)]=\"comprador.profissao\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </p-fieldset>\r\n\r\n            <p-fieldset legend=\"Endereço\">\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-6\">\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"cepresidencial\">CEP: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <p-inputMask [style]=\"{'width': '100%', 'margin-left': '5px'}\" id=\"cepresidencial\" mask=\"99999-999\" \r\n                      (onBlur)=\"consultaCEP()\" ngModel name=\"cepresidencial\" #cepresidencial=\"ngModel\" [(ngModel)]=\"comprador.cepresidencial\"\r\n                      required inputId=\"cepcadastro\" (click)=\"setCursor('cepcadastro')\"></p-inputMask>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"numeroendereco\">Número: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"numeroendereco\" ngModel name=\"numeroendereco\"  #numeroendereco=\"ngModel\" [(ngModel)]=\"comprador.numeroendereco\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"bairroresidencial\">Bairro: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"bairroresidencial\" ngModel name=\"bairroresidencial\"  #bairroresidencial=\"ngModel\" [(ngModel)]=\"comprador.bairro\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"cidaderesidencial\">Cidade: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"cidaderesidencial\" ngModel name=\"cidaderesidencial\"  #cidaderesidencial=\"ngModel\" [(ngModel)]=\"comprador.cidade\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"p-col-6\">\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"enderecoresidencial\">Endereço: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"enderecoresidencial\" ngModel name=\"enderecoresidencial\"  #enderecoresidencial=\"ngModel\" [(ngModel)]=\"comprador.endereco\"\r\n                      required>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"complementoresidencial\">Complemento: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"complementoresidencial\" ngModel name=\"complementoresidencial\"  #complementoresidencial=\"ngModel\" [(ngModel)]=\"comprador.complemento\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"ufresidencial\">Estado: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <p-dropdown placeholder=\"Selecione...\" optionLabel=\"uf\" [options]=\"estado\" id=\"ufresidencial\"\r\n                      [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" class=\"ajusteInput\" ngModel name=\"ufresidencial\"  #ufresidencial=\"ngModel\" [(ngModel)]=\"comprador.uf\"\r\n                      required></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </p-fieldset>\r\n          </form>\r\n\r\n          <p-fieldset legend=\"Contatos\">\r\n            <div class=\"p-grid\">\r\n              <div class=\"p-col-6\" >\r\n\r\n                <div class=\"p-grid\">\r\n                  <div class=\"p-col-4\">\r\n                    <label class=\"ajusteLabel\" for=\"tipo\">Tipo: </label>\r\n                  </div>\r\n                  <div class=\"p-col-8\" id=\"tipo\">\r\n                    <p-dropdown placeholder=\"Selecione...\" optionLabel=\"desctipocontato\" [options]=\"tipoContato\" dataKey=\"value\"\r\n                    [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" class=\"ajusteInput\" ngModel name=\"codtipocontato\" #codtipocontato=\"ngModel\" [(ngModel)]=\"contatos.codtipocontato\"\r\n                    (onChange)=\"validContato($event)\"></p-dropdown>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"p-grid\">\r\n                  <div class=\"p-col-4\">\r\n                  </div>\r\n                  <div class=\"p-col-8\">\r\n                    <input type=\"text\" #desccontato class=\"ajusteInput\" pInputText id=\"desccontato\" ngModel name=\"desccontato\" #desccontato=\"ngModel\" [(ngModel)]=\"contatos.desccontato\"\r\n                    [textMask]=\"{mask: mask}\" [disabled]=\"disabledInput\">\r\n                  </div>\r\n                </div>\r\n\r\n                <br><br>\r\n                <p><button pButton type=\"button\" label=\"Adicionar contato\" class=\"ui-button-raised ui-button-secondary\" \r\n                [ngStyle]=\"{'float': 'right'}\" (click)=\"adicionarContato(contatos)\" icon=\"pi pi-plus-circle\" iconPos=\"right\"></button>\r\n              </div>\r\n\r\n              <br><br>\r\n              <div class=\"p-col-6\">\r\n                <p-table [value]=\"contatoDisplay\" [scrollable]=\"true\" scrollHeight=\"200px\" columnResizeMode=\"fit\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                      <th><strong>Excluir</strong></th>\r\n                      <th><strong>Tipo</strong></th>\r\n                      <th><strong>Contato</strong></th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-contatoC let-cont>\r\n                    <tr [pSelectableRow]=\"contatoC\">\r\n                      <td> <button pButton type=\"button\" (click)=\"removerContato(contatoC)\" icon=\"pi pi-trash\"></button> </td>\r\n                      <td> {{cont.tipocontato}} </td>\r\n                      <td> {{cont.desccontato}} </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </p-fieldset>\r\n\r\n          <button pButton type=\"button\" label=\"Adicionar comprador\" class=\"ui-button-raised ui-button-secondary\" \r\n          [ngStyle]=\"{'float': 'right', 'width': '30%', 'margin': '5px'}\" (click)=\"adicionarCompradorLista(comprador, formCadInfo)\"\r\n          icon=\"pi pi-plus-circle\" iconPos=\"right\" [hidden]=\"!disabledButton\"></button>\r\n\r\n          <button pButton type=\"button\" label=\"Salvar alterações\" class=\"ui-button-raised ui-button-secondary\" \r\n          [ngStyle]=\"{'float': 'right', 'width': '30%', 'margin': '5px'}\"\r\n          icon=\"pi pi-save\" iconPos=\"right\" [hidden]=\"disabledButton\" (click)=\"atualizarComprador(formCadInfo)\"></button>\r\n\r\n          <button pButton type=\"button\" label=\"Limpar comprador\" class=\"ui-button-raised ui-button-warning\" \r\n          [ngStyle]=\"{'float': 'right', 'width': '15%', 'margin': '5px'}\" (click)=\"limparCadInfo(formCadInfo)\"\r\n          icon=\"pi pi-refresh\" iconPos=\"right\"></button>\r\n\r\n          <br><br>\r\n          <p-messages [(value)]=\"msgs\"></p-messages>\r\n          \r\n        </div>\r\n      </p-fieldset>\r\n\r\n      <div class=\"p-grid\">\r\n        <p-fieldset legend=\"Compradores\">\r\n          <p-table [value]=\"compradores\" [(selection)]=\"selectedItem\" (onRowUnselect)=\"tirarSelecionado($event)\" (onRowSelect)=\"setarTrue($event)\">\r\n            <ng-template pTemplate=\"header\">\r\n              <tr>\r\n                <th><strong>Excluir</strong></th>\r\n                <th><strong>Visualizar</strong></th>\r\n                <th><strong>Nome</strong></th>\r\n                <th><strong>CPF</strong></th>\r\n                <th><strong>Renda</strong></th>\r\n                <th><strong>Comprador principal</strong></th>\r\n              </tr>\r\n            </ng-template>\r\n    \r\n            <ng-template pTemplate=\"body\" let-rowData let-comp>\r\n              <tr [pSelectableRow]=\"rowData\">\r\n                <td> <button pButton icon=\"pi pi-times\" (click)=\"removerComprador(rowData)\" class=\"ui-button-danger\"></button> </td>\r\n                <td> <button pButton icon=\"pi pi-search\" (click)=\"visualizarComprador(rowData)\"></button></td>\r\n                <td> {{comp.nomecliente}} </td>\r\n                <td> {{comp.cpfcnpj | cpf}} </td>\r\n                <td> R$ {{ comp.valorrenda.toLocaleString('pt-br', {minimumFractionDigits: 2}) }} </td>\r\n                <td>\r\n                    <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </p-fieldset>\r\n      </div>\r\n\r\n      <p-fieldset legend=\"Cadastro de informações do Imóvel\">\r\n        \r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-1\">\r\n            <label class=\"ajusteLabel\" for=\"numerocadastroincorporadorafid\">FID: </label>\r\n          </div>\r\n          <div class=\"p-col-3\">\r\n            <input type=\"text\" pInputText id=\"numerocadastroincorporadorafid\" class=\"ajusteInput\" ngModel name=\"numerocadastroincorporadorafid\" \r\n            #numerocadastroincorporadorafid=\"ngModel\" [(ngModel)]=\"cadInfo.numerocadastroincorporadorafid\" pKeyFilter=\"pint\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <p-fieldset legend=\"INCORPORADORA\">\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-3\">\r\n              \r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"dtentrada\">Entrada: </label> \r\n                  <!-- TB.CADASTRO.DT_CADASTRO -->\r\n                </div>\r\n                <div class=\"p-col-8\" [ngStyle]=\"{'padding-right': '2px'}\">\r\n                  <div class=\"ui-inputgroup\">\r\n                    <p-calendar [showIcon]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2019\" [monthNavigator]=\"true\" \r\n                    class=\"ajusteInput\" [inputStyle]=\"{'width': 'calc(100% - 2.357em)', 'border-radius': '3px 0 0 3px'}\" [style]=\"{'width': '100%'}\"\r\n                    id=\"dtentrada\" dateFormat=\"dd/mm/yy\" ngModel  name=\"dtentrada\"  #dtentrada=\"ngModel\" [(ngModel)]=\"cadInfo.dtentrada\"\r\n                    [locale]=\"br\" showButtonBar=\"true\" required dataType=\"date\" rPCalendarMask></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-col-5\">\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-3\">\r\n                  <label class=\"ajusteLabel\" for=\"codincorporadora\">Incorporadora: </label>\r\n                </div>\r\n                <div class=\"p-col-7\">\r\n                  <p-dropdown placeholder=\"Selecione...\" optionLabel=\"descincorporadora\" [options]=\"incorp\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n                  ngModel name=\"codincorporadora\" #codincorporadora=\"ngModel\" [(ngModel)]=\"cadInfo.codincorporadora\" required id=\"codincorporadora\"></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"p-col-4\">\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-3\">\r\n                  <label class=\"ajusteLabel\" for=\"codoriginacao\">Originação: </label>\r\n                </div>\r\n                <div class=\"p-col-7\">\r\n                  <p-dropdown placeholder=\"Selecione...\" optionLabel=\"descoriginacao\" [options]=\"originacao\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\" \r\n                  ngModel name=\"codoriginacao\"  #codoriginacao=\"ngModel\" [(ngModel)]=\"cadInfo.codoriginacao\" required id=\"codoriginacao\"></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </p-fieldset>\r\n\r\n        <p-fieldset legend=\"DADOS DO EMPREENDIMENTO\">\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-7\">\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"codempreendimento\">Empreendimento: </label>\r\n                </div>\r\n                <div class=\"p-col-4\">\r\n                  <p-dropdown placeholder=\"Selecione...\" optionLabel=\"descempreendimento\" [options]=\"empreendimento\" [autoWidth]=\"false\" \r\n                  [style]=\"{'width': '100%', 'margin-left': '5px'}\" ngModel name=\"codempreendimento\"  #codempreendimento=\"ngModel\" \r\n                  [(ngModel)]=\"cadInfo.codempreendimento\" filter=\"true\" required id=\"codempreendimento\" (onChange)=\"preencherEmpreendimento($event)\"></p-dropdown>\r\n                </div>\r\n                <div class=\"p-col-2\">\r\n                  <label class=\"ajusteLabel\" for=\"unidade\">Unidade: </label>\r\n                </div>\r\n                <div class=\"p-col-2\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"unidade\" ngModel name=\"unidade\"  #unidade=\"ngModel\" [(ngModel)]=\"cadInfo.unidade\" required>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-8\">\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-6\">\r\n                      <label class=\"ajusteLabel\" for=\"vagaautomovel\">Vaga de automóvel: </label>\r\n                    </div>\r\n                    <div class=\"p-col-6\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"vagaautomovel\"ngModel name=\"vagaautomovel\"  #vagaautomovel=\"ngModel\" [(ngModel)]=\"cadInfo.vagaautomovel\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"p-col-4\">\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-6\">\r\n                      <label class=\"ajusteLabel\" for=\"box\">Box: </label>\r\n                    </div>\r\n                    <div class=\"p-col-6\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"box\" ngModel name=\"box\"  #box=\"ngModel\" [(ngModel)]=\"cadInfo.box\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"p-col-5\">\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-6\">\r\n\r\n                  <div class=\"p-grid\">\r\n                    <div class=\"p-col-4\">\r\n                      <label class=\"ajusteLabel\" for=\"blocotorre\">Bloco: </label>\r\n                    </div>\r\n                    <div class=\"p-col-8\">\r\n                      <input type=\"text\" class=\"ajusteInput\" pInputText id=\"blocotorre\" ngModel name=\"blocotorre\"  #blocotorre=\"ngModel\" [(ngModel)]=\"cadInfo.blocotorre\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </p-fieldset>\r\n\r\n        <p-fieldset legend=\"Endereço do Imovel\">\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-6\">\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"cep\">CEP: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <p-inputMask [style]=\"{'width': '100%', 'margin-left': '5px'}\" id=\"cep\" mask=\"99999-999\" \r\n                  ngModel name=\"cep\" #cep=\"ngModel\" [(ngModel)]=\"cadInfo.cep\" (onBlur)=\"consultaCEPImovel()\" required\r\n                  inputId=\"cepImovel\" (click)=\"setCursor('cepImovel')\"></p-inputMask>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"numero\">Número: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"numero\" ngModel name=\"numero\"  #numero=\"ngModel\" [(ngModel)]=\"cadInfo.numero\" required>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"bairro\">Bairro: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"bairro\" ngModel name=\"bairro\"  #bairro=\"ngModel\" [(ngModel)]=\"cadInfo.bairro\" required>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"cidade\">Cidade: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"cidade\" ngModel name=\"cidade\"  #cidade=\"ngModel\" [(ngModel)]=\"cadInfo.cidade\" required>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"p-col-6\">\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"endereco\">Endereço: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"endereco\" ngModel name=\"endereco\"  #endereco=\"ngModel\" [(ngModel)]=\"cadInfo.endereco\" required>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"complemento\">Complemento: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <input type=\"text\" class=\"ajusteInput\" pInputText id=\"complemento\" ngModel name=\"complemento\"  #complemento=\"ngModel\" [(ngModel)]=\"cadInfo.complemento\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-4\">\r\n                  <label class=\"ajusteLabel\" for=\"uf\">Estado: </label>\r\n                </div>\r\n                <div class=\"p-col-8\">\r\n                  <p-dropdown placeholder=\"Selecione...\" optionLabel=\"uf\" [options]=\"estado\" id=\"uf\"\r\n                  [autoWidth]=\"false\" [style]=\"{'width': '100%', 'margin-left': '5px'}\" ngModel name=\"uf\"  #uf=\"ngModel\" [(ngModel)]=\"cadInfo.uf\" required></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </p-fieldset>\r\n\r\n      </p-fieldset>\r\n\r\n      <p-footer>\r\n        <div class=\"p-grid p-justify-end\">\r\n          <button pButton type=\"button\" label=\"Limpar\" class=\"ui-button-rounded ui-button-warning\" \r\n          [ngStyle]=\"{'width': '15%', 'margin': '3px'}\" (click)=\"limparFormulario(formulario, formCadInfo)\" [hidden]=\"controle\"\r\n          icon=\"pi pi-refresh\" iconPos=\"right\"></button>\r\n          <button pButton type=\"button\" label=\"Cancelar\" class=\"ui-button-rounded ui-button-warning\" \r\n          [ngStyle]=\"{'width': '15%', 'margin': '3px'}\" (click)=\"cancelar()\" [hidden]=\"!controle\"\r\n          icon=\"pi pi-refresh\" iconPos=\"right\"></button>\r\n          <button pButton type=\"submit\" label=\"Avançar\" class=\"ui-button-rounded ui-button-success\"  [ngStyle]=\"{'width': '15%', 'margin': '3px'}\" \r\n          icon=\"pi pi-angle-double-right\" iconPos=\"right\" (click)=\"confirmacao(cadInfo, formulario)\" [hidden]=\"controle\"></button>\r\n          <button pButton type=\"submit\" label=\"Salvar\" (click)=\"atualizarCadastroInformacoes(cadInfo, formulario)\" class=\"ui-button-rounded ui-button-success\"  [ngStyle]=\"{'width': '15%', 'margin': '3px'}\" \r\n          icon=\"pi pi-save\" iconPos=\"right\" [hidden]=\"!controle\"></button>       \r\n        </div>\r\n\r\n        <p-messages [(value)]=\"msgs2\"></p-messages>\r\n      </p-footer>\r\n    </p-panel>\r\n\r\n    <br>\r\n    <p-confirmDialog [ngStyle]=\"{width: '425px'}\"></p-confirmDialog>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/core/pages/cadastro/cadastro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/pages/cadastro/cadastro.component.ts ***!
  \***********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_models_cadastro_informacao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cadastro-informacao */ "./src/app/models/cadastro-informacao.ts");
/* harmony import */ var src_app_models_compradores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/compradores */ "./src/app/models/compradores.ts");
/* harmony import */ var src_app_models_contatos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/contatos */ "./src/app/models/contatos.ts");
/* harmony import */ var _services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/cadastro-chamadas.service */ "./src/app/services/cadastro-chamadas.service.ts");
/* harmony import */ var _services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/cadastro-logica.service */ "./src/app/services/cadastro-logica.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @brazilian-utils/is-valid-cpf */ "./node_modules/@brazilian-utils/is-valid-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brazilian-utils/is-valid-cnpj */ "./node_modules/@brazilian-utils/is-valid-cnpj/dist/index.m.js");
/* harmony import */ var _brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @brazilian-utils/helper-only-numbers */ "./node_modules/@brazilian-utils/helper-only-numbers/dist/index.m.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! text-mask-addons/dist/emailMask */ "./node_modules/text-mask-addons/dist/emailMask.js");
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(confirmationService, chamadasService, logicaService, router, messageService, sharedService) {
        this.confirmationService = confirmationService;
        this.chamadasService = chamadasService;
        this.logicaService = logicaService;
        this.router = router;
        this.messageService = messageService;
        this.sharedService = sharedService;
        this.contato = [];
        this.contatoDisplay = [];
        this.compradores = [];
        this.disabled = false;
        this.getLoads = { getEmpreendimentos: false, getOriginacoes: false, getEstadoCivil: false, getTipoContato: false,
            getTipoCliente: false, getIncorporadoras: false };
        this.load = false;
        this.disabledButton = true;
        this.mask2 = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
        this.disabledInput = true;
        this.msgs = [];
        this.msgs2 = [];
        this.controle = false;
        this.comprador = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_3__["Compradores"]();
        this.cadInfo = new src_app_models_cadastro_informacao__WEBPACK_IMPORTED_MODULE_2__["CadastroInformacao"]();
        this.contatos = new src_app_models_contatos__WEBPACK_IMPORTED_MODULE_4__["Contatos"]();
    }
    CadastroComponent.prototype.OnSubmit = function (cadInfo, formulario) {
        var _this = this;
        this.chamadasService.createUser(cadInfo).subscribe(function (dados) {
            _this.retornocadastro = dados['data'];
            console.log(JSON.stringify(dados['data']));
            console.log('COD ' + _this.retornocadastro.codcadastro);
            console.log('FID ' + _this.retornocadastro.numerocadastroincorporadorafid);
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"].getInstance().temporario[0] = _this.retornocadastro.codcadastro;
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"].getInstance().temporario[1] = _this.retornocadastro.numerocadastroincorporadorafid;
            _this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Cadastro feito com sucesso!' });
            setTimeout(function () {
                _this.router.navigate(['/analise']);
            }, 1000);
        });
        // sessionStorage.clear();
        formulario.reset();
    };
    CadastroComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
    };
    CadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"].getInstance().temporario = [];
        this.chamadasInit();
        this.br = this.sharedService.calendarioBr();
        this.visualizarInfoImovel();
        this.chamadasService.buscarCadastro.subscribe(function (dado) {
            _this.form.reset();
            _this.formCadInfo.reset();
            _this.msgs = [];
            _this.msgs2 = [];
            _this.visualizarInfoImovel();
        });
    };
    CadastroComponent.prototype.adicionarContato = function (contato) {
        if ((this.disabledInput == false) && (contato.desccontato !== '')) {
            var contatoDisplay = this.logicaService.adicionarContatosDisplay(contato);
            var contato2 = this.logicaService.adicionarContatosLista(contato);
            contato2.cpfcnpj = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_11__["default"])(this.comprador.cpfcnpj);
            this.contatoDisplay.push(contatoDisplay);
            this.contato.push(contato2);
            this.contatos = this.logicaService.limparContatos(this.contatos);
            this.desccontato.nativeElement.removeAttribute('placeholder');
            this.disabledInput = true;
        }
        else {
            this.messageService.add({ key: 'popup', severity: 'error', summary: 'Erro!', detail: 'Preencha os campos para adicionar o contato!' });
        }
    };
    CadastroComponent.prototype.adicionarCompradorLista = function (comprador, formCadInfo) {
        var _this = this;
        this.msgs = [];
        setTimeout(function () {
            if (_this.validaFormulario(formCadInfo) == true) {
                var comprador2 = _this.logicaService.adicionarComprador(comprador);
                comprador2.contatos = _this.contato;
                _this.compradores.push(comprador2);
                _this.disabled = false;
                comprador = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_3__["Compradores"]();
                formCadInfo.reset();
                _this.contato = [];
                _this.contatoDisplay = [];
                _this.msgs = [];
                _this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Comprador adicionado!' });
            }
            else {
                _this.msgs = [];
                var camposInvalidos = [];
                for (var _i in formCadInfo.controls) {
                    if (formCadInfo.controls[_i].status == 'INVALID') {
                        var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                        campoInvalido = campoInvalido.replace(': ', '');
                        camposInvalidos.push(" " + campoInvalido);
                        formCadInfo.controls[_i].pristine = false;
                        _this.msgs = [];
                        _this.msgs.push({
                            severity: 'error',
                            summary: 'Erro ao adicionar comprador!',
                            detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:" +
                                camposInvalidos + "</strong>."
                        });
                    }
                }
                if (_this.contato.length == 0) {
                    _this.msgs.push({
                        severity: 'error',
                        summary: 'Erro ao adicionar comprador!',
                        detail: "Adicione pelo menos 1 contato."
                    });
                }
            }
        }, 301);
    };
    CadastroComponent.prototype.removerContato = function (contatoC) {
        var index = this.contatoDisplay.indexOf(contatoC);
        this.contato.splice(index, 1);
        this.contatoDisplay.splice(index, 1);
    };
    CadastroComponent.prototype.removerComprador = function (comprador) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja continuar?',
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: function () {
                var index = _this.compradores.indexOf(comprador);
                _this.compradores.splice(index, 1);
                if (_this.compradores.length <= 0) {
                    _this.disabled = true;
                }
                else {
                    _this.disabled = false;
                }
                _this.messageService.add({ key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Comprador removido!' });
            },
            reject: function () {
            }
        });
    };
    CadastroComponent.prototype.preencherEmpreendimento = function (event) {
        var _this = this;
        if (event.value.cep != null) {
            this.cadInfo.cep = event.value.cep;
            var cep = event.value.cep;
            cep.replace('-', '');
            this.chamadasService.getCep(cep).subscribe(function (dados) {
                var dadosRecebidos = dados;
                if (!('erro' in dados)) {
                    _this.cadInfo.numero = event.value.numemero;
                    _this.cadInfo.bairro = event.value.bairro;
                    _this.cadInfo.cidade = event.value.cidade;
                    _this.cadInfo.endereco = event.value.rua;
                    _this.cadInfo.uf = { uf: dadosRecebidos.uf.toUpperCase() };
                }
            });
        }
        else {
            this.cadInfo.cep = null;
            this.cadInfo.numero = null;
            this.cadInfo.bairro = null;
            this.cadInfo.cidade = null;
            this.cadInfo.endereco = null;
            this.cadInfo.complemento = null;
            this.cadInfo.uf = null;
        }
    };
    CadastroComponent.prototype.consultaCEP = function () {
        var _this = this;
        var cep = this.comprador.cepresidencial;
        if (cep != null && cep !== '') {
            cep = cep.replace(/\D/g, '');
            if (cep !== '') {
                var validacep = /^[0-9]{8}$/;
                if (validacep.test(cep)) {
                    return this.chamadasService.getCep(cep).subscribe(function (dados) {
                        if (!('erro' in dados)) {
                            _this.populaDadosForm(dados);
                        }
                        else {
                            _this.comprador.cepresidencial = null;
                            _this.messageService.add({ key: 'popup', severity: 'error', summary: 'Erro!', detail: 'CEP não encontrado!' });
                        }
                    });
                }
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    };
    CadastroComponent.prototype.populaDadosForm = function (dados) {
        this.comprador.cepresidencial = dados.cep;
        this.comprador.uf = { uf: dados.uf.toUpperCase() };
        this.comprador.cidade = dados.localidade;
        this.comprador.bairro = dados.bairro;
        this.comprador.endereco = dados.logradouro;
        this.comprador.complemento = dados.complemento;
    };
    CadastroComponent.prototype.consultaCEPImovel = function () {
        var _this = this;
        var cep = this.cadInfo.cep;
        if (cep != null && cep !== '') {
            cep = cep.replace(/\D/g, '');
            if (cep !== '') {
                var validacep = /^[0-9]{8}$/;
                if (validacep.test(cep)) {
                    return this.chamadasService.getCep(cep).subscribe(function (dados) {
                        if (!('erro' in dados)) {
                            _this.populaDadosFormImovel(dados);
                        }
                        else {
                            _this.cadInfo.cep = null;
                            _this.messageService.add({ key: 'popup', severity: 'error', summary: 'Erro!', detail: 'CEP não encontrado!' });
                        }
                    });
                }
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    };
    CadastroComponent.prototype.populaDadosFormImovel = function (dados) {
        this.cadInfo.cep = dados.cep;
        this.cadInfo.uf = { uf: dados.uf.toUpperCase() };
        this.cadInfo.cidade = dados.localidade;
        this.cadInfo.bairro = dados.bairro;
        this.cadInfo.endereco = dados.logradouro;
        this.cadInfo.complemento = dados.complemento;
    };
    CadastroComponent.prototype.limparFormulario = function (cadImovel, cadInfo) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Deseja limpar os campos preenchidos?',
            header: 'Atenção!',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: function () {
                cadImovel.reset();
                cadInfo.reset();
                _this.contato = [];
                _this.contatoDisplay = [];
                _this.compradores = [];
                _this.msgs = [];
                _this.msgs2 = [];
                _this.messageService.add({ key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!' });
            },
            reject: function () {
            }
        });
    };
    CadastroComponent.prototype.setarTrue = function (dados) {
        var rowData = dados.data;
        for (var _i = 0; _i < this.compradores.length; _i++) {
            this.compradores[_i].principal = false;
            if (rowData.cpfcnpj == this.compradores[_i].cpfcnpj) {
                this.compradores[_i].principal = true;
            }
        }
    };
    CadastroComponent.prototype.verificarSelecionado = function () {
        var principal = false;
        for (var _i = 0; _i < this.compradores.length; _i++) {
            if (this.compradores[_i].principal == true) {
                principal = true;
            }
        }
        return principal;
    };
    CadastroComponent.prototype.tirarSelecionado = function (rowData) {
        for (var _i = 0; _i < this.compradores.length; _i++) {
            this.compradores[_i].principal = false;
        }
    };
    CadastroComponent.prototype.confirmacao = function (cadInfo, formulario) {
        var _this = this;
        var principal = this.verificarSelecionado();
        if ((this.validaFormImovel(formulario) == true) && (principal == true)) {
            this.msgs = [];
            this.msgs2 = [];
            this.confirmationService.confirm({
                message: 'Tem certeza que deseja continuar?',
                header: 'Confirmação',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel: 'Sim',
                rejectLabel: 'Não',
                accept: function () {
                    cadInfo = _this.logicaService.confirmacao(cadInfo, _this.compradores);
                    _this.compradores = [];
                    _this.OnSubmit(cadInfo, formulario);
                    _this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Cadastro feito com sucesso!' });
                },
                reject: function () {
                }
            });
        }
        else {
            this.msgs2 = [];
            var camposInvalidos = [];
            for (var _i in formulario.controls) {
                if (formulario.controls[_i].status == 'INVALID') {
                    var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoInvalido = campoInvalido.replace(': ', '');
                    camposInvalidos.push(" " + campoInvalido);
                    formulario.controls[_i].pristine = false;
                    this.msgs2 = [];
                    this.msgs2.push({
                        severity: 'error',
                        summary: 'Erro ao avançar!',
                        detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:" +
                            camposInvalidos + "</strong>."
                    });
                }
            }
            if (this.compradores.length == 0) {
                this.msgs2.push({
                    severity: 'error',
                    summary: 'Erro ao avançar!',
                    detail: "Cadastre pelo menos 1 comprador."
                });
            }
            if (principal == false) {
                this.msgs2.push({
                    severity: 'error',
                    summary: 'Erro ao avançar!',
                    detail: "Selecione o comprador principal."
                });
            }
        }
    };
    CadastroComponent.prototype.atualizarCadastroInformacoes = function (cadInfo, formulario) {
        var _this = this;
        var principal = this.verificarSelecionado();
        if ((this.validaFormImovel(formulario) == true) && (principal == true)) {
            cadInfo = this.logicaService.atualizarCadInfo(cadInfo, this.compradores);
            this.compradores = [];
            console.log(JSON.stringify(cadInfo));
            this.chamadasService.putCadastro(cadInfo).subscribe(function (dados) {
                _this.retornocadastro = dados['data'];
                console.log(dados);
            });
            formulario.reset();
            this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!' });
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        }
        else {
            this.msgs2 = [];
            var camposInvalidos = [];
            for (var _i in formulario.controls) {
                if (formulario.controls[_i].status == 'INVALID') {
                    var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoInvalido = campoInvalido.replace(': ', '');
                    camposInvalidos.push(" " + campoInvalido);
                    formulario.controls[_i].pristine = false;
                    this.msgs2 = [];
                    this.msgs2.push({
                        severity: 'error',
                        summary: 'Erro ao salvar alterações!',
                        detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:"
                            + camposInvalidos + "</strong>."
                    });
                }
            }
            if (this.compradores.length == 0) {
                this.msgs2.push({
                    severity: 'error',
                    summary: 'Erro ao salvar alterações!',
                    detail: "Cadastre pelo menos 1 comprador."
                });
            }
            if (principal == false) {
                this.msgs2.push({
                    severity: 'error',
                    summary: 'Erro ao avançar!',
                    detail: "Selecione o comprador principal."
                });
            }
        }
    };
    CadastroComponent.prototype.verificaCpfCnpj = function (formCadInfo) {
        var cpf = Object(_brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_9__["default"])(this.comprador.cpfcnpj);
        var cnpj = Object(_brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_10__["default"])(this.comprador.cpfcnpj);
        if ((cpf || cnpj == true) && (this.comprador.cpfcnpj !== null)) {
            return true;
        }
        else {
            formCadInfo.controls['cpfcnpj'].status = 'INVALID';
            return false;
        }
    };
    CadastroComponent.prototype.validaFormulario = function (formCadInfo) {
        var cpfcnpj = this.verificaCpfCnpj(formCadInfo);
        if (formCadInfo.valid == false || this.contato.length == 0 || cpfcnpj == false) {
            return false;
        }
        else {
            return true;
        }
    };
    CadastroComponent.prototype.validaFormImovel = function (formulario) {
        if (formulario.valid == false || this.compradores.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    CadastroComponent.prototype.validContato = function (evento) {
        evento.value = evento.value.codtipocontato;
        this.contatos.desccontato = '';
        this.disabledInput = false;
        if (evento.value == 1) {
            this.desccontato.nativeElement.setAttribute('placeholder', '(XX) XXXX-XXXX');
            this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
        else if (evento.value == 2) {
            this.desccontato.nativeElement.setAttribute('placeholder', '(XX) XXXXX-XXXX');
            this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
        else if (evento.value == 3) {
            this.desccontato.nativeElement.setAttribute('placeholder', 'email@email.com');
            this.mask = text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_13___default.a;
        }
    };
    CadastroComponent.prototype.limparCadInfo = function (cadInfo) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Deseja limpar os campos preenchidos?',
            header: 'Atenção!',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: function () {
                cadInfo.reset();
                _this.contato = [];
                _this.contatoDisplay = [];
                _this.disabledButton = true;
                _this.msgs = [];
                _this.messageService.add({ key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!' });
            },
            reject: function () {
            }
        });
    };
    CadastroComponent.prototype.visualizarComprador = function (comprador) {
        this.disabledButton = false;
        this.comprador = this.logicaService.visualizarComprador(this.comprador, comprador, this.estadoCivil);
        this.comprador.contatos = comprador.contatos;
        this.contato = comprador.contatos;
        this.contatoDisplay = [];
        for (var item = 0; item < comprador.contatos.length; item++) {
            for (var item2 = 0; item2 < this.tipoContato.length; item2++) {
                if (this.tipoContato[item2].codtipocontato == comprador.contatos[item].codtipocontato) {
                    var contatoDisplay = new src_app_models_contatos__WEBPACK_IMPORTED_MODULE_4__["Contatos"]();
                    contatoDisplay.tipocontato = this.tipoContato[item2].desctipocontato;
                    contatoDisplay.desccontato = comprador.contatos[item].desccontato;
                    this.contatoDisplay.push(contatoDisplay);
                }
            }
        }
    };
    CadastroComponent.prototype.visualizarInfoImovel = function () {
        // Verifica se a tela está sendo carregada vinda do Campo de busca
        if (sessionStorage.getItem('CADASTROSELECIONADO') != null) {
            this.cadInfo = this.logicaService.visualizarInfoImovel();
            this.compradores = this.cadInfo.clientes;
            for (var _i = 0; _i < this.compradores.length; _i++) {
                if (this.cadInfo.clientes[_i].principal == true) {
                    this.selectedItem = this.cadInfo.clientes[_i];
                }
            }
            this.comprador = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_3__["Compradores"]();
            this.contatoDisplay = [];
            this.contato = [];
            this.controle = true;
            this.disabledButton = true;
        }
    };
    CadastroComponent.prototype.atualizarComprador = function (formCadInfo) {
        if (this.validaFormulario(formCadInfo) == true) {
            this.compradores = this.logicaService.atualizarComprador(this.compradores, this.comprador, this.contato);
            formCadInfo.reset();
            this.contatoDisplay = [];
            this.contato = [];
            this.msgs = [];
            this.disabledButton = true;
            this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Informações do comprador alteradas!' });
        }
        else {
            this.msgs = [];
            var camposInvalidos = [];
            for (var _i in formCadInfo.controls) {
                if (formCadInfo.controls[_i].status == 'INVALID') {
                    var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoInvalido = campoInvalido.replace(': ', '');
                    camposInvalidos.push(" " + campoInvalido);
                    formCadInfo.controls[_i].pristine = false;
                    this.msgs = [];
                    this.msgs.push({
                        severity: 'error',
                        summary: 'Erro ao salvar alterações!',
                        detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:"
                            + camposInvalidos + "</strong>."
                    });
                }
            }
            if (this.contato.length == 0) {
                this.msgs.push({
                    severity: 'error',
                    summary: 'Erro ao salvar alterações!',
                    detail: "Adicione pelo menos 1 contato."
                });
            }
        }
    };
    CadastroComponent.prototype.setCursor = function (cepRecebido) {
        var cep = document.getElementById(cepRecebido);
        cep.focus();
        cep.setSelectionRange(0, 0);
    };
    CadastroComponent.prototype.hiddenLoader = function () {
        var _this = this;
        if ((this.getLoads.getEmpreendimentos == true) && (this.getLoads.getEstadoCivil == true) &&
            (this.getLoads.getIncorporadoras == true) && (this.getLoads.getOriginacoes == true) &&
            (this.getLoads.getTipoCliente == true) && (this.getLoads.getTipoContato == true)) {
            setTimeout(function () {
                _this.getLoads.getEmpreendimentos = false;
                _this.getLoads.getIncorporadoras = false;
                _this.getLoads.getTipoCliente = false;
                _this.getLoads.getEstadoCivil = false;
                _this.getLoads.getOriginacoes = false;
                _this.getLoads.getTipoContato = false;
                _this.load = true;
            }, 500);
        }
    };
    CadastroComponent.prototype.cancelar = function () {
        var _this = this;
        this.messageService.add({ key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Operação cancelada!' });
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 1000);
    };
    CadastroComponent.prototype.chamadasInit = function () {
        var _this = this;
        this.chamadasService.getEstados().subscribe(function (dados) { return _this.estado = dados; });
        this.chamadasService.getDadosCadastrais('empreendimentos').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.empreendimento = dadosBaixados;
                _this.getLoads.getEmpreendimentos = true;
                _this.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('originacoes').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.originacao = dadosBaixados;
                _this.getLoads.getOriginacoes = true;
                _this.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('estadocivil').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.estadoCivil = dadosBaixados;
                _this.getLoads.getEstadoCivil = true;
                _this.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('tipocontatos').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.tipoContato = dadosBaixados;
                _this.getLoads.getTipoContato = true;
                _this.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('tipoclientes').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.tipocliente = dadosBaixados;
                _this.getLoads.getTipoCliente = true;
                _this.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('incorporadoras').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                _this.incorp = dadosBaixados;
                _this.getLoads.getIncorporadoras = true;
                _this.hiddenLoader();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formulario', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"] }),
        __metadata("design:type", Object)
    ], CadastroComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formCadInfo', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"] }),
        __metadata("design:type", Object)
    ], CadastroComponent.prototype, "formCadInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('desccontato'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CadastroComponent.prototype, "desccontato", void 0);
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/core/pages/cadastro/cadastro.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/core/pages/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_5__["CadastroChamadasService"],
            _services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_6__["CadastroLogicaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/cadastrousuario/cadastrousuario.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/cadastrousuario/cadastrousuario.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100%;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    -ms-box-align: center;\r\n    align-items: center;\r\n    -ms-box-pack: center;\r\n    justify-content: center;\r\n}\r\n\r\n.main-container{\r\n    width: 50%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    padding: 0;\r\n    box-shadow:0 5px 5px rgba(0,0,0,.175);\r\n}\r\n\r\n@media (max-width: 991px){\r\n    .main-container{\r\n        height: auto;\r\n    }\r\n}\r\n\r\n#card{\r\n    border-radius: 5px 5px 0 0;\r\n    text-align: left;\r\n    color: black;\r\n}\r\n\r\n.col{\r\n    padding: 15px 0 0 15px;\r\n}\r\n\r\n.form-control{\r\n    width: 90%;\r\n    margin: 20px 10px 20px 10px;\r\n}\r\n\r\n#tipodeusuario{\r\n    float: left;\r\n    width: 95%;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n@media (max-width: 991px){\r\n    #tipodeusuario{\r\n        width: 90%;\r\n        margin: 0 10px 0 10px;\r\n    }\r\n}\r\n\r\n#email{\r\n    margin: 20px 20px 20px 0;\r\n}\r\n\r\n@media (max-width: 991px){\r\n    #email{\r\n        margin: 20px 50px 20px 0;\r\n    }\r\n}\r\n\r\n#addon1{\r\n    height: 38px;\r\n    margin: 20px 0 0 10px;\r\n}\r\n\r\n#buttonsalvar{\r\n    width: 20%;\r\n    float: right;\r\n    margin: 0 20px 10px 0;\r\n}\r\n\r\n@media (max-width: 991px){\r\n    #buttonsalvar{\r\n        margin: 0 50px 10px 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px){\r\n    #buttonsalvar{\r\n        margin: 0 45px 10px 0;\r\n    }\r\n}\r\n\r\n/*--------*/\r\n\r\n.ajusteInput {\r\n    width: 100%;\r\n    margin: 1vw 0vw 1vw 0vw;\r\n}\r\n\r\n.ajusteLabel {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9jYWRhc3Ryb3VzdWFyaW8vY2FkYXN0cm91c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBR1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFHckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUVuQixvQkFBb0I7SUFFcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL2NhZGFzdHJvdXN1YXJpby9jYWRhc3Ryb3VzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2hhZG93OjAgNXB4IDVweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgLm1haW4tY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuI2NhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG5cclxuI3RpcG9kZXVzdWFyaW97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAjdGlwb2RldXN1YXJpb3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuI2VtYWlse1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgI2VtYWlse1xyXG4gICAgICAgIG1hcmdpbjogMjBweCA1MHB4IDIwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuI2FkZG9uMXtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbjogMjBweCAwIDAgMTBweDtcclxufVxyXG5cclxuI2J1dHRvbnNhbHZhcntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDAgMjBweCAxMHB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAjYnV0dG9uc2FsdmFye1xyXG4gICAgICAgIG1hcmdpbjogMCA1MHB4IDEwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICNidXR0b25zYWx2YXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDQ1cHggMTBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLSovXHJcblxyXG4uYWp1c3RlSW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDF2dyAwdncgMXZ3IDB2dztcclxufVxyXG5cclxuLmFqdXN0ZUxhYmVsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/pages/cadastrousuario/cadastrousuario.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/cadastrousuario/cadastrousuario.component.ts ***!
  \*************************************************************************/
/*! exports provided: CadastrousuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrousuarioComponent", function() { return CadastrousuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/formcadastro.service */ "./src/app/services/formcadastro.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/role */ "./src/app/models/role.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brazilian-utils/is-valid-cpf */ "./node_modules/@brazilian-utils/is-valid-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @brazilian-utils/is-valid-cnpj */ "./node_modules/@brazilian-utils/is-valid-cnpj/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastrousuarioComponent = /** @class */ (function () {
    function CadastrousuarioComponent(service) {
        this.service = service;
        this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.msgs = [];
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"].getInstance();
    }
    CadastrousuarioComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    CadastrousuarioComponent.prototype.getRoles = function () {
        var _this = this;
        var items = [];
        this.service.getRoles().subscribe(function (data) {
            for (var _i = 0; _i < data['data'].length; _i++) {
                _this.item = new _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"]();
                _this.item.id = (data['data'][_i].id);
                _this.item.nivel = (data['data'][_i].nivel);
                _this.item.profile = (data['data'][_i].profile);
                items.push(_this.item);
            }
            _this.selectRoles = items;
        });
    };
    CadastrousuarioComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.msgs = [];
        if (this.validaForm() == true) {
            this.service.createOrUpdateUsuer(this.usuario).subscribe(function (res) {
                _this.showConfirm();
                _this.clearUser(_this.usuario);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.msgErro();
        }
    };
    CadastrousuarioComponent.prototype.showConfirm = function () {
        this.shared.messengerService.clear();
        this.shared.messengerService.add({ key: 'ok', severity: 'success', summary: 'Ação Realizada', detail: 'Ação Realizada com Sucesso!' });
    };
    CadastrousuarioComponent.prototype.clearUser = function (usuario) {
        this.form.reset();
        this.msgs = [];
    };
    CadastrousuarioComponent.prototype.validaForm = function () {
        var cpf = Object(_brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_6__["default"])(this.usuario.cpf);
        var cnpj = Object(_brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_7__["default"])(this.usuario.cpf);
        var controle = false;
        if ((cpf || cnpj == true) && (this.usuario.cpf !== null)) {
            controle = true;
        }
        else {
            controle = false;
        }
        if ((this.usuario.login == this.confirmarNickName) && (this.usuario.password == this.confirmarSenha) && (controle == true) && (this.usuario.login != "") && (this.usuario.password != "")) {
            return true;
        }
        else {
            return false;
        }
    };
    CadastrousuarioComponent.prototype.msgErro = function () {
        var forms = ['login', 'confirmarNickName', 'senha', 'confirmarSenha', 'cpf'];
        for (var i = 0; i < forms.length; i++) {
            this.form.controls[forms[i]].status = "VALID";
        }
        ;
        if (this.usuario.login != this.confirmarNickName) {
            this.form.controls['confirmarNickName'].status = "INVALID";
            this.form.controls['login'].status = "INVALID";
            this.form.controls['confirmarNickName'].pristine = false;
            this.form.controls['login'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "Os campos de nickname n\u00E3o coincidem."
            });
        }
        ;
        if (this.usuario.login == "" || this.confirmarNickName == "") {
            this.form.controls['confirmarNickName'].status = "INVALID";
            this.form.controls['login'].status = "INVALID";
            this.form.controls['confirmarNickName'].pristine = false;
            this.form.controls['login'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "Os campos de nickname est\u00E3o em branco."
            });
        }
        ;
        if (this.usuario.password != this.confirmarSenha) {
            this.form.controls['confirmarSenha'].status = "INVALID";
            this.form.controls['senha'].status = "INVALID";
            this.form.controls['confirmarSenha'].pristine = false;
            this.form.controls['senha'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "As senhas n\u00E3o coincidem."
            });
        }
        ;
        if (this.usuario.password == "" || this.confirmarSenha == "") {
            this.form.controls['confirmarSenha'].status = "INVALID";
            this.form.controls['senha'].status = "INVALID";
            this.form.controls['confirmarSenha'].pristine = false;
            this.form.controls['senha'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "Os campos de senha est\u00E3o em branco."
            });
        }
        ;
        if ((Object(_brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_6__["default"])(this.usuario.cpf) != true) && (Object(_brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_7__["default"])(this.usuario.cpf) != true)) {
            this.form.controls['cpf'].status = "INVALID";
            this.form.controls['cpf'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "O CPF n\u00E3o \u00E9 v\u00E1lido."
            });
        }
        ;
        if (this.usuario.cpf == "") {
            this.form.controls['cpf'].status = "INVALID";
            this.form.controls['cpf'].pristine = false;
            this.msgs.push({
                severity: 'error',
                summary: 'Erro ao cadastrar usuário!',
                detail: "O campo de CPF est\u00E1 em branco."
            });
        }
        ;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }),
        __metadata("design:type", Object)
    ], CadastrousuarioComponent.prototype, "form", void 0);
    CadastrousuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastrousuario',
            template: __webpack_require__(/*! ./cadastrousuario2.component.html */ "./src/app/core/pages/cadastrousuario/cadastrousuario2.component.html"),
            styles: [__webpack_require__(/*! ./cadastrousuario.component.css */ "./src/app/core/pages/cadastrousuario/cadastrousuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_3__["FormcadastroService"]])
    ], CadastrousuarioComponent);
    return CadastrousuarioComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/cadastrousuario/cadastrousuario2.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/pages/cadastrousuario/cadastrousuario2.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center\">\r\n    <div class=\"main-container\">\r\n        <form id=\"form\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" autocomplete=\"off\">\r\n            <p-panel header=\"Cadastro de usuário\">\r\n                <div class=\"p-grid\">\r\n                    <div class=\"p-col-6\">\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Nome\" id=\"nome\" ngModel  name=\"nome\"  #nome=\"ngModel\" [(ngModel)]=\"usuario.nome\" tabindex=\"1\"/>\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Telefone ou Ramal\" id=\"contato\" pattern=\"\\d+\" ngModel name=\"telefone\" #telefone=\"ngModel\" [(ngModel)]=\"usuario.telefone\" tabindex=\"3\"/>\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Nickname de login\" id=\"nickname\" name=\"login\" ngModel  #login=\"ngModel\" [(ngModel)]=\"usuario.login\" tabindex=\"5\"/>\r\n                        <input type=\"password\" class=\"ajusteInput\" pInputText placeholder=\"Senha\" id=\"senha\" ngModel name=\"senha\"  #senha=\"ngModel\" [(ngModel)]=\"usuario.password\" tabindex=\"7\"/>\r\n                    </div>\r\n\r\n                    <div class=\"p-col-6\">\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Sobrenome\" id=\"sobrenome\" name=\"sobrenome\" #sobrenome=\"ngModel\" [(ngModel)]=\"usuario.sobrenome\" tabindex=\"2\"/>\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"CPF\" name=\"cpf\" #cpf=\"ngModel\" [(ngModel)]=\"usuario.cpf\" tabindex=\"4\"/>\r\n                        <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Repita o nickname\" id=\"confirmarNickName\" name=\"confirmarNickName\" [(ngModel)]=\"confirmarNickName\" tabindex=\"6\"/>\r\n                        <input type=\"password\" class=\"ajusteInput\" pInputText placeholder=\"Confirme a senha\" id=\"confirmarSenha\" name=\"confirmarSenha\" [(ngModel)]=\"confirmarSenha\" tabindex=\"8\"/>\r\n                    </div>\r\n\r\n                    <div class=\"p-col-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\">@</span>\r\n                            <input id=\"idemail\" type=\"email\" [ngStyle]=\"{'width': '100%'}\" pInputText placeholder=\"E-mail (para recuperação de senha)\"  name=\"email\"  #email=\"ngModel\" [(ngModel)]=\"usuario.email\" tabindex=\"9\">  \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"p-col-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <p-multiSelect [options]=\"selectRoles\" optionLabel=\"profile\" [(ngModel)]=\"usuario.perfis\" defaultLabel=\"Selecione o perfil..\" [ngModelOptions]=\"{standalone:true}\" \r\n                            [style]=\"{'width': '100%'}\" [ngStyle]=\"{'width': '100%'}\" tabindex=\"10\"></p-multiSelect>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"p-grid p-justify-end\" [ngStyle]=\"{'width': '100%', 'height': '100%'}\">\r\n                        <button pButton type=\"submit\" label=\"Salvar\" class=\"ui-button-rounded ui-button-success\" \r\n                        [ngStyle]=\"{'width': '15%', 'height': '40%', 'margin': '3px'}\" icon=\"pi pi-save\" iconPos=\"right\"></button>\r\n                    </div>\r\n\r\n                    <p-messages [(value)]=\"msgs\" [ngStyle]=\"{'width': '100%'}\"></p-messages>\r\n\r\n                    <!--ARRUMAR O CONTAINER ALTURA-->\r\n\r\n                </div>\r\n            </p-panel>\r\n        </form>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/core/pages/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/pages/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/pages/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/pages/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  style=\"height: 100%;\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/pages/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/pages/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/core/pages/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/core/pages/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/delete-usuario/delete-usuario.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/pages/delete-usuario/delete-usuario.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n    width: 50%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    padding: 0;\r\n    box-shadow:0 5px 5px rgba(0,0,0,.175);\r\n}\r\n\r\n.ajusteInput {\r\n    width: 100%;\r\n    margin: 1vw 0vw 1vw 0vw;\r\n}\r\n\r\n.ajusteLabel {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9kZWxldGUtdXN1YXJpby9kZWxldGUtdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL2RlbGV0ZS11c3VhcmlvL2RlbGV0ZS11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6MCA1cHggNXB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbn1cclxuXHJcbi5hanVzdGVJbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMXZ3IDB2dyAxdncgMHZ3O1xyXG59XHJcblxyXG4uYWp1c3RlTGFiZWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/delete-usuario/delete-usuario.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/delete-usuario/delete-usuario.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center\">\r\n  <div class=\"main-container\">\r\n    <p-panel>\r\n      <p-header>\r\n        Deletar Usuario\r\n      </p-header>\r\n      <p-toast [style]=\"{marginTop: '80px'}\" key=\"popup\"></p-toast>\r\n      <div class=\"p-grid p-justify-center p-align-center\" [ngStyle]=\"{'margin': '5px'}\">\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-6\">\r\n        \r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"usuario\">Usuário:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"usuario\" [suggestions]=\"results\" (completeMethod)=\"searchNome($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(true)\" ></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"p-col-6\">\r\n\r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"login\">Login:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"nickname\" [suggestions]=\"resultsLogin\" (completeMethod)=\"searchLogin($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(false)\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"p-grid\" [ngStyle]=\"{'height': '3px', 'background-color': 'black', 'margin': '5px'}\"></div>\r\n\r\n      <div class=\"p-grid p-justify-center\" [hidden]=\"!showLoad\">\r\n        <div class=\"p-grid\" style=\"padding: 25px;\">\r\n            <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 10em\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!showForm\">\r\n        <form id=\"form\" #form=\"ngForm\" autocomplete=\"off\">\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-6\">\r\n                <input type=\"text\" class=\"ajusteInput\" disabled=\"true\" pInputText placeholder=\"Nome\" id=\"nome\" ngModel  name=\"nome\" #nome=\"ngModel\" [(ngModel)]=\"usuarioForm.nome\" tabindex=\"1\"/>\r\n            </div>\r\n  \r\n            <div class=\"p-col-6\">\r\n                <input type=\"text\" class=\"ajusteInput\" disabled=\"true\" pInputText placeholder=\"Sobrenome\" id=\"sobrenome\" name=\"sobrenome\" #sobrenome=\"ngModel\" [(ngModel)]=\"usuarioForm.sobrenome\" tabindex=\"2\"/>\r\n            </div>\r\n            <div class=\"p-col-12\">\r\n                <input type=\"text\" class=\"ajusteInput\" disabled=\"true\" pInputText placeholder=\"Nickname de login\" id=\"nickname\" name=\"login\" ngModel  #login=\"ngModel\" [(ngModel)]=\"usuarioForm.login\" tabindex=\"5\"/>\r\n            </div> \r\n            <div class=\"p-col-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                    <span class=\"ui-inputgroup-addon\">@</span>\r\n                    <input id=\"idemail\" type=\"email\" disabled=\"true\" [ngStyle]=\"{'width': '100%'}\" pInputText placeholder=\"E-mail (para recuperação de senha)\"  name=\"email\"  #email=\"ngModel\" [(ngModel)]=\"usuarioForm.email\" tabindex=\"9\">  \r\n                </div>\r\n            </div>\r\n  \r\n            <div class=\"p-grid p-justify-end\" [ngStyle]=\"{'width': '100%', 'height': '100%'}\">\r\n                <button pButton type=\"submit\" label=\"Delete\" class=\"ui-button-danger ui-button-raised\" \r\n                [ngStyle]=\"{'width': '15%', 'height': '40%', 'margin': '3px'}\" icon=\"pi pi-save\" iconPos=\"right\" (click)=\"deleteUser()\"></button>\r\n            </div>\r\n  \r\n          </div>\r\n        </form>\r\n      </div>\r\n      \r\n    </p-panel>    \r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/core/pages/delete-usuario/delete-usuario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/delete-usuario/delete-usuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUsuarioComponent", function() { return DeleteUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/formcadastro.service */ "./src/app/services/formcadastro.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/role */ "./src/app/models/role.ts");
/* harmony import */ var src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/form-cadastro-logica.service */ "./src/app/services/form-cadastro-logica.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeleteUsuarioComponent = /** @class */ (function () {
    function DeleteUsuarioComponent(formcadastro, messageService, formCadastroLogica) {
        this.formcadastro = formcadastro;
        this.messageService = messageService;
        this.formCadastroLogica = formCadastroLogica;
        this.usuarioForm = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.results = [];
        this.resultsLogin = [];
        this.showForm = false;
        this.showLoad = false;
    }
    DeleteUsuarioComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    DeleteUsuarioComponent.prototype.deleteUser = function () {
        this.formcadastro.deleteUpdate(this.usuarioForm).subscribe(function (data) {
            console.log(data);
        });
    };
    DeleteUsuarioComponent.prototype.getRoles = function () {
        var _this = this;
        var items = [];
        this.formcadastro.getRoles().subscribe(function (data) {
            for (var _i = 0; _i < data['data'].length; _i++) {
                _this.item = new src_app_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"]();
                _this.item.id = (data['data'][_i].id);
                _this.item.nivel = (data['data'][_i].nivel);
                _this.item.profile = (data['data'][_i].profile);
                items.push(_this.item);
            }
            _this.selectRoles = items;
        });
    };
    DeleteUsuarioComponent.prototype.getUser = function (dado) {
        var _this = this;
        this.showLoad = true;
        this.showForm = false;
        if (dado == false) {
            this.formcadastro.getLogin(this.nickname).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
        else if (dado == true) {
            var slice = this.usuario.indexOf(' ');
            this.formcadastro.getNome(this.usuario.slice(0, slice)).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
    };
    DeleteUsuarioComponent.prototype.searchNome = function (event) {
        var _this = this;
        this.formcadastro.getUsers(event.query).then(function (data) {
            _this.results = _this.formCadastroLogica.filtroClientePorNome(event.query, data['data']);
        });
    };
    DeleteUsuarioComponent.prototype.searchLogin = function (event) {
        var _this = this;
        this.formcadastro.getNick(event.query).then(function (data) {
            _this.resultsLogin = _this.formCadastroLogica.filtroClientePorLogin(event.query, data['data']);
        });
    };
    DeleteUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-usuario',
            template: __webpack_require__(/*! ./delete-usuario.component.html */ "./src/app/core/pages/delete-usuario/delete-usuario.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
            styles: [__webpack_require__(/*! ./delete-usuario.component.css */ "./src/app/core/pages/delete-usuario/delete-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__["FormcadastroService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__["FormCadastroLogicaService"]])
    ], DeleteUsuarioComponent);
    return DeleteUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error404 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/pages/error404/error404.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/pages/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/core/pages/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/core/pages/error404/error404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/core/pages/grafic/grafic.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/pages/grafic/grafic.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.pag-grafc{\r\n    width: calc(100% - 100px);\r\n}\r\n.grafc{\r\n    width: 50%;\r\n    height: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9ncmFmaWMvZ3JhZmljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9ncmFmaWMvZ3JhZmljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZy1ncmFmY3tcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbn1cclxuLmdyYWZje1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/pages/grafic/grafic.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/pages/grafic/grafic.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"pag-grafc\">\r\n\r\n <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-10 ui-g-nopad\">\r\n            <div class=\"ui-g-12 ui-g-nopad\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                            <p-chart  type=\"pie\" [data]=\"data\"></p-chart>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            Footer\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n   "

/***/ }),

/***/ "./src/app/core/pages/grafic/grafic.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/pages/grafic/grafic.component.ts ***!
  \*******************************************************/
/*! exports provided: GraficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficComponent", function() { return GraficComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraficComponent = /** @class */ (function () {
    function GraficComponent() {
        this.data = {
            labels: ['Malote', 'Conferencia', 'Liberação'],
            datasets: [
                {
                    data: [50, 50, 50],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6380',
                        '#36A280',
                        '#FFCE80'
                    ]
                }
            ]
        };
    }
    GraficComponent.prototype.ngOnInit = function () {
    };
    GraficComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grafic',
            template: __webpack_require__(/*! ./grafic.component.html */ "./src/app/core/pages/grafic/grafic.component.html"),
            styles: [__webpack_require__(/*! ./grafic.component.css */ "./src/app/core/pages/grafic/grafic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GraficComponent);
    return GraficComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/pages/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-dual-ring {\r\n    display: inline-block;\r\n    width: 128px;\r\n    height: 128px;\r\n  }\r\n  .lds-dual-ring:after {\r\n    content: \" \";\r\n    display: block;\r\n    width: 110px;\r\n    height: 110px;\r\n    margin: 2px;\r\n    border-radius: 50%;\r\n    border: 5px solid black;\r\n    border-color: black transparent black transparent;\r\n    -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n            animation: lds-dual-ring 1.2s linear infinite;\r\n  }\r\n  @-webkit-keyframes lds-dual-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-dual-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaURBQWlEO0lBQ2pELHFEQUE2QztZQUE3Qyw2Q0FBNkM7RUFDL0M7RUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLWR1YWwtcmluZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gIH1cclxuICAubGRzLWR1YWwtcmluZzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/core/pages/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/pages/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center vertical-container\" [hidden]=\"load\" style=\"padding: 25px;\">\r\n    <div #loader class=\"lds-dual-ring\">\r\n    </div>\r\n</div>\r\n\r\n<div [hidden]=\"!load\">\r\n  <p-table [value]=\"infosTable\" sortMode=\"multiple\">\r\n    <ng-template pTemplate=\"caption\">\r\n      <div style=\"text-align: center\">\r\n        <label style=\"font-size: 15px\">Últimos dez clientes cadastrados.</label>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th><strong>Nome</strong></th>\r\n        <th><strong>CPF/CNPJ</strong></th>\r\n        <th><strong>Empreendimento</strong></th>\r\n        <th><strong>Endereço do imóvel</strong></th>\r\n        <th><strong>Visualizar</strong></th>  \r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData let-info>\r\n      <tr [pSelectableRow]=\"rowData\">\r\n        <td> {{info.nomecliente}} </td>\r\n        <td> {{info.cpfcnpj | cpf}}</td>\r\n        <td> {{info.codempreendimento}} </td>\r\n        <td> {{info.endereco}}, {{info.numero}}</td>\r\n        <td> <p-button label=\"IR >>\" (onClick)=\"irCadastro(rowData)\"></p-button></td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>"

/***/ }),

/***/ "./src/app/core/pages/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/pages/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_home_chamadas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-chamadas.service */ "./src/app/services/home-chamadas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cadastro-chamadas.service */ "./src/app/services/cadastro-chamadas.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeChamada, router, cadastroChamada, sharedService) {
        this.homeChamada = homeChamada;
        this.router = router;
        this.cadastroChamada = cadastroChamada;
        this.sharedService = sharedService;
        this.cadastrosrecentes = [];
        this.cadastroInformacoes = [];
        this.infosTable = [];
        this.load = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit -->> INIT");
        sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
        if (this.sharedService.empreendimentos.length == 0) {
            console.log("PAssou no carregamento 1");
            this.cadastroChamada.getEmpreendimentos().subscribe(function (dados) {
                _this.sharedService.empreendimentos = dados['data'];
                _this.getListCadastrosTop();
            });
        }
        else {
            this.getListCadastrosTop();
        }
    };
    HomeComponent.prototype.getListCadastrosTop = function () {
        var _this = this;
        if (this.sharedService.cadastrosrecentes.length == 0) {
            this.homeChamada.getCadastrosTop().subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    _this.cadastroInformacoes = event.body['data'];
                    for (var i = 0; i < _this.cadastroInformacoes.length; i++) {
                        for (var item = 0; item < _this.cadastroInformacoes[i].clientes.length; item++) {
                            if (_this.cadastroInformacoes[i].clientes[item].principal == true) {
                                _this.sharedService.cadastrosrecentes.push(_this.cadastroInformacoes[i].clientes[item]);
                            }
                        }
                    }
                    _this.popularInfoTable();
                }
            });
        }
        else {
            this.homeChamada.getCadastrosTop().subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    _this.cadastroInformacoes = event.body['data'];
                    var novoComprador = [];
                    for (var i = 0; i < _this.cadastroInformacoes.length; i++) {
                        for (var item = 0; item < _this.cadastroInformacoes[i].clientes.length; item++) {
                            if (_this.cadastroInformacoes[i].clientes[item].principal == true) {
                                novoComprador.push(_this.cadastroInformacoes[i].clientes[item]);
                            }
                        }
                    }
                    for (var i = 0; i < _this.sharedService.cadastrosrecentes.length; i++) {
                        if (_this.sharedService.cadastrosrecentes[i].cpfcnpj != novoComprador[i].cpfcnpj) {
                            _this.sharedService.cadastrosrecentes[i] = novoComprador[i];
                        }
                    }
                    _this.popularInfoTable();
                }
            });
        }
    };
    HomeComponent.prototype.popularInfoTable = function () {
        var _this = this;
        var empreendimento = this.sharedService.empreendimentos;
        var cadastro;
        for (var i = 0; i < this.sharedService.cadastrosrecentes.length; i++) {
            cadastro = { nomecliente: this.sharedService.cadastrosrecentes[i].nomecliente, cpfcnpj: this.sharedService.cadastrosrecentes[i].cpfcnpj,
                codempreendimento: this.cadastroInformacoes[i].codempreendimento, endereco: this.cadastroInformacoes[i].endereco,
                numero: this.cadastroInformacoes[i].numero };
            for (var item = 0; item < empreendimento.length; item++) {
                if (empreendimento[item].codempreendimento == cadastro.codempreendimento) {
                    cadastro.codempreendimento = empreendimento[item].descempreendimento;
                }
            }
            this.infosTable.push(cadastro);
        }
        setTimeout(function () {
            _this.load = true;
        }, 500);
    };
    HomeComponent.prototype.irCadastro = function (cadastro) {
        for (var i = 0; i < this.cadastroInformacoes.length; i++) {
            for (var item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
                if (this.cadastroInformacoes[i].clientes[item].cpfcnpj == cadastro.cpfcnpj) {
                    sessionStorage.setItem('CADASTROSELECIONADO', JSON.stringify(this.cadastroInformacoes[i]));
                }
            }
        }
        this.router.navigate(['/cadastro']);
    };
    HomeComponent.prototype.getFlux = function () {
        this.cadastroChamada.getFlux().subscribe(function (data) { return console.log(data); });
    };
    HomeComponent.prototype.compararInfo = function () {
        for (var i = 0; i < this.sharedService.cadastrosrecentes.length; i++) {
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_home_chamadas_service__WEBPACK_IMPORTED_MODULE_2__["HomeChamadasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_4__["CadastroChamadasService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/import/import.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/pages/import/import.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    \r\n    height: 70vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/pages/import/import.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/pages/import/import.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <p-panel>\r\n        <p-header>\r\n        <h5 class=\"first\">UPLOAD DE ARQUIVOS</h5>\r\n    </p-header>\r\n<div class=\"upload\">\r\n<p-fileUpload name=\"file\" url=\"{{urls}}/api\" (onUpload)=\"inputFileChange($event)\"\r\n        multiple=\"multiple\" uploadLabel=\"Upload\" chooseLabel=\"Adicionar\" cancelLabel=\"Cancelar\" accept=\"image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" \r\n        maxFileSize=\"10485760\" >\r\n    <ng-template pTemplate=\"content\"  >\r\n        <ul *ngIf=\"uploadedFiles.length\" >\r\n            <li style=\"text-align: left\" *ngFor=\"let file of uploadedFiles\">ARQUIVO: {{file.FILENAME}} --- SHA256: {{file.SHA256}}</li>\r\n        </ul>\r\n    </ng-template>\r\n</p-fileUpload>\r\n</div>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/core/pages/import/import.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/pages/import/import.component.ts ***!
  \*******************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportComponent = /** @class */ (function () {
    function ImportComponent(http) {
        this.http = http;
        this.uploadedFiles = [];
        this.file = [];
        this.urls = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath;
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent.prototype.inputFileChange = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var item = _a[_i];
            var file = new FormData();
            file.append('file', item);
            file.append('plataforma', 'bradesco');
            this.http.post(this.urls + '/api/files', file).subscribe(function (resposta) {
                _this.uploadedFiles.push({ 'FILENAME': resposta['data']['FILENAME'], 'SHA256': resposta['data']['SHA256'] });
            });
        }
    };
    ImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import',
            template: __webpack_require__(/*! ./import.component.html */ "./src/app/core/pages/import/import.component.html"),
            styles: [__webpack_require__(/*! ./import.component.css */ "./src/app/core/pages/import/import.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ajusteLabel {\r\n    float: right;\r\n}\r\n\r\n.lds-dual-ring {\r\n  display: inline-block;\r\n  width: 128px;\r\n  height: 128px;\r\n}\r\n\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 110px;\r\n  height: 110px;\r\n  margin: 2px;\r\n  border-radius: 50%;\r\n  border: 5px solid black;\r\n  border-color: black transparent black transparent;\r\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n          animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9pbmZvcm1hY29lcy9kYWRvcy1jYWRhc3RyYWlzL2RhZG9zLWNhZGFzdHJhaXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpREFBaUQ7RUFDakQscURBQTZDO1VBQTdDLDZDQUE2QztBQUMvQzs7QUFDQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGOztBQVBBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL2luZm9ybWFjb2VzL2RhZG9zLWNhZGFzdHJhaXMvZGFkb3MtY2FkYXN0cmFpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFqdXN0ZUxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmxkcy1kdWFsLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTI4cHg7XHJcbiAgaGVpZ2h0OiAxMjhweDtcclxufVxyXG4ubGRzLWR1YWwtcmluZzphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgYmxhY2sgdHJhbnNwYXJlbnQ7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-fieldset legend=\"Dados pessoais\">\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-6\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"fid\">FID: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{fid}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"nomeC\">Nome cliente: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.nomecliente}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"tipoP\">Tipo de pessoa: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.codtipocliente}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"numeroIdent\">Número de identidade: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.ndocumento}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"dataExp\">Data de expedição: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{dataExpedicao}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"estCivil\">Estado civil: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.codestadocivil}}\r\n        </div>\r\n      </div>\r\n\r\n       <p-fieldset legend=\"Contatos\">\r\n           <p-table [value]=\"contatoDisplay\" [scrollable]=\"true\" scrollHeight=\"200px\" columnResizeMode=\"fit\">\r\n               <ng-template pTemplate=\"header\">\r\n                 <tr>\r\n                   <th><strong>Tipo</strong></th>\r\n                   <th><strong>Contato</strong></th>\r\n                 </tr>\r\n               </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-contatoC let-cont>\r\n                <tr [pSelectableRow]=\"contatoC\">\r\n                  <td> {{cont.tipocontato}} </td>\r\n                  <td> {{cont.desccontato}} </td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n      </p-fieldset>\r\n\r\n    </div>\r\n    <div class=\"p-col-6\">\r\n        \r\n      <br><br>\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"cpf\">CPF/CNPJ: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.cpfcnpj}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"orgExp\">Órgão expedidor: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.orgaoexpedidor}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"nacionalidade\">Nacionalidade: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.nacionalidade}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"profissao\">Profissão: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{comprador.profissao}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"dataNasc\">Data de nascimento: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{dataNascimento}}\r\n        </div>\r\n      </div>\r\n        \r\n      <p-fieldset legend=\"Endereços\">\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"cep\">CEP: </label>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            {{comprador.cepresidencial}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"end\">Endereço: </label>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            {{comprador.endereco}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"numero\">Número: </label>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            {{comprador.numeroendereco}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-4\">\r\n            <label class=\"ajusteLabel\" for=\"bairro\">Bairro: </label>\r\n          </div>\r\n          <div class=\"p-col-4\">\r\n            {{comprador.bairro}}\r\n          </div>\r\n        </div>\r\n\r\n      </p-fieldset>\r\n\r\n    </div>\r\n  </div>\r\n</p-fieldset>\r\n\r\n<p-fieldset legend=\"Análise de crédito\">\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-6\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"valorComVen\">Valor de compra e venda: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valorcompravenda ? 'R$' : ''}} {{analise.valorcompravenda?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"valorAprov\">Valor aprovado: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valoravaliacao ? 'R$' : ''}} {{analise.valoravaliacao?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"modalidade\">Modalidade: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.codmodalidadesimulacao}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"dataEnv\">Data envio ao banco: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{dataEnvioAoBanco}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"valorPrestAprov\">Valor prestação aprovado: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valorrecursosproprios ? 'R$' : ''}} {{analise.valorprimeiraparcela?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"sicaq\">SICAQ: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.codsicaq}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"correspondente\">Correspondente: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.correspondente}}\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"p-col-6\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"prazoFinan\">Prazo financiamento: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.prazofinanciamento}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"banco\">Banco: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.codinstituicaofinanceira}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"tipoAmor\">Tipo Amortização: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.codtipoamortizacao}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"valorSubs\">Valor subsídio: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valorsubsidio ? 'R$' : ''}} {{analise.valorsubsidio?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"valorAvalBanco\">Valor avaliação Banco: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valoravaliacaoinstfinanc ? 'R$' : ''}} {{analise.valoravaliacaoinstfinanc?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"fgts\">FGTS: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valorfgts ? 'R$' : ''}} {{analise.valorfgts?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-4\">\r\n          <label class=\"ajusteLabel\" for=\"recProprio\">Recurso próprio: </label>\r\n        </div>\r\n        <div class=\"p-col-4\">\r\n          {{analise.valorrecursosproprios ? 'R$' : ''}} {{analise.valorrecursosproprios?.toLocaleString('pt-br', {minimumFractionDigits: 2})}}\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</p-fieldset>"

/***/ }),

/***/ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DadosCadastraisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosCadastraisComponent", function() { return DadosCadastraisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_compradores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/compradores */ "./src/app/models/compradores.ts");
/* harmony import */ var src_app_models_simulacoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/simulacoes */ "./src/app/models/simulacoes.ts");
/* harmony import */ var src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analise-logica.service */ "./src/app/services/analise-logica.service.ts");
/* harmony import */ var src_app_services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cadastro-logica.service */ "./src/app/services/cadastro-logica.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DadosCadastraisComponent = /** @class */ (function () {
    function DadosCadastraisComponent(chamadaService, analiseLogicaService, cadastroLogicaService, sharedService) {
        this.chamadaService = chamadaService;
        this.analiseLogicaService = analiseLogicaService;
        this.cadastroLogicaService = cadastroLogicaService;
        this.sharedService = sharedService;
        this.comprador = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_1__["Compradores"]();
        this.analise = new src_app_models_simulacoes__WEBPACK_IMPORTED_MODULE_2__["Simulacoes"]();
        this.contatoDisplay = [];
    }
    DadosCadastraisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visualizarDados();
        this.chamadaService.buscarInformacoes.subscribe(function (dado) {
            if (dado == true) {
                _this.analise = new src_app_models_simulacoes__WEBPACK_IMPORTED_MODULE_2__["Simulacoes"]();
                _this.dataEnvioAoBanco = '';
                _this.visualizarDados();
            }
        });
    };
    DadosCadastraisComponent.prototype.visualizarDados = function () {
        var cadastroSelecionado = sessionStorage.getItem('CADASTRODADOS');
        var analiseSelecionada = sessionStorage.getItem('ANALISEDADOS');
        if (cadastroSelecionado != 'undefined' && cadastroSelecionado != null) {
            var comprador = this.cadastroLogicaService.getDadosCadastrais(cadastroSelecionado);
            this.dataNascimento = this.fixUTC(comprador.datanascimento);
            this.dataExpedicao = this.fixUTC(comprador.dataexpedicao);
            this.contatoDisplay = this.cadastroLogicaService.getContatoDisplay(comprador);
            this.comprador = comprador;
            this.fid = JSON.parse(sessionStorage.getItem('fid'));
        }
        if (analiseSelecionada != 'undefined' && analiseSelecionada != null) {
            var analise = this.analiseLogicaService.getDadosCadastrais(analiseSelecionada);
            this.dataEnvioAoBanco = this.fixUTC(analise.dataenviobanco);
            this.analise = analise;
        }
        else {
            this.sharedService.getBanco = true;
            this.sharedService.getModalidade = true;
            this.sharedService.getAmortizacao = true;
            this.sharedService.hiddenLoader();
        }
    };
    DadosCadastraisComponent.prototype.fixUTC = function (date) {
        var ano = date.getUTCFullYear();
        var mes = date.getUTCMonth();
        var dia = date.getUTCDate();
        var hora = date.getHours();
        var novaData = new Date(Date.UTC(ano, mes, dia, hora + 3));
        var dataString = novaData.toLocaleString('pt-BR');
        var dataSlice = dataString.indexOf(' ');
        return dataString.slice(0, dataSlice);
    };
    DadosCadastraisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dados-cadastrais',
            template: __webpack_require__(/*! ./dados-cadastrais.component.html */ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.html"),
            styles: [__webpack_require__(/*! ./dados-cadastrais.component.css */ "./src/app/core/pages/informacoes/dados-cadastrais/dados-cadastrais.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__["AnaliseChamadasService"],
            src_app_services_analise_logica_service__WEBPACK_IMPORTED_MODULE_4__["AnaliseLogicaService"],
            src_app_services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__["CadastroLogicaService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], DadosCadastraisComponent);
    return DadosCadastraisComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/informacoes/historico/historico.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/historico/historico.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ajusteLabel {\r\n    float: right;\r\n  }\r\n  \r\n\r\n .tddata{\r\n  width: 10%;\r\n }\r\n  \r\n\r\n .tdusuario{\r\n  width: 10%;\r\n }\r\n  \r\n\r\n .tdfase{\r\n  width: 10%;\r\n }\r\n  \r\n\r\n .tdsintese{\r\n  width: 20%;\r\n }\r\n  \r\n\r\n .tddescricao{\r\n  white-space: pre-wrap\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9pbmZvcm1hY29lcy9oaXN0b3JpY28vaGlzdG9yaWNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7OztDQUdEO0VBQ0MsVUFBVTtDQUNYOzs7Q0FDQTtFQUNDLFVBQVU7Q0FDWDs7O0NBQ0E7RUFDQyxVQUFVO0NBQ1g7OztDQUNBO0VBQ0MsVUFBVTtDQUNYOzs7Q0FDQTtFQUNDO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL2luZm9ybWFjb2VzL2hpc3Rvcmljby9oaXN0b3JpY28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hanVzdGVMYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuIC50ZGRhdGF7XHJcbiAgd2lkdGg6IDEwJTtcclxuIH0gXHJcbiAudGR1c3Vhcmlve1xyXG4gIHdpZHRoOiAxMCU7XHJcbiB9XHJcbiAudGRmYXNle1xyXG4gIHdpZHRoOiAxMCU7XHJcbiB9XHJcbiAudGRzaW50ZXNle1xyXG4gIHdpZHRoOiAyMCU7XHJcbiB9XHJcbiAudGRkZXNjcmljYW97XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/core/pages/informacoes/historico/historico.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/historico/historico.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<p-toast [style]=\"{marginTop: '80px'}\" key=\"popup\"></p-toast>\r\n<div class=\"p-grid\">\r\n  <div class=\"p-col-6\">\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n      <label class=\"ajusteLabel\" for=\"fid\">FID: </label>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      {{fid}}\r\n    </div>\r\n  </div>\r\n\r\n  <br><br>\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n      <label class=\"ajusteLabel\" for=\"client\">Cliente: </label>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      {{comprador.nomecliente}}\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n  <div class=\"p-col-6\">\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n      <label class=\"ajusteLabel\" for=\"cpf\">CPF: </label>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      {{comprador.cpfcnpj}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n      <label class=\"ajusteLabel\" for=\"empreend\">Empreendimento: </label>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      {{cadInfo.codempreendimento}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-4\">\r\n      <label class=\"ajusteLabel\" for=\"unidade\">Unidade: </label>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      {{cadInfo.unidade}}\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<form #formHistorico=\"ngForm\">\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-2\">\r\n      <label class=\"ajusteLabel\" for=\"desc\">Descrição: </label>\r\n    </div>\r\n    <div class=\"p-col-10\">\r\n      <textarea [cols]=\"100\" [rows]=\"4\" pInputTextarea name=\"descricao\" [(ngModel)]=\"historicoAnalise.descricao\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"p-grid\">\r\n    <div class=\"p-col-8\">\r\n\r\n      <div class=\"p-grid\">\r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"numfase\">Fases: </label>\r\n        </div>\r\n        <div class=\"p-col-3\" id=\"fases\">\r\n          <p-dropdown [options]=\"fases\"  placeholder=\"Selecione...\" optionLabel=\"fase\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\"\r\n          [(ngModel)]=\"historicoAnalise.numfase\" name=\"numfase\" (onChange)=\"changeFases($event)\" required></p-dropdown>\r\n        </div>\r\n      \r\n        <div class=\"p-col-3\">\r\n          <label class=\"ajusteLabel\" for=\"numsintese\">Sínteses: </label>\r\n        </div>\r\n\r\n        <div class=\"p-col-3\" id=\"fases\">\r\n          <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\" [hidden]=\"!loadSpin\"></i>\r\n          <p-dropdown  [options]=\"sinteses\"  placeholder=\"Selecione...\" optionLabel=\"sintese\" [autoWidth]=\"false\" [style]=\"{'width': '100%'}\"\r\n          [(ngModel)]=\"historicoAnalise.numsintese\" name=\"numsintese\" (onChange)=\"changeSintese($event)\" [disabled]=\"disabledSintese\" [hidden]=\"loadSpin\"\r\n          required></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"p-col-4\">\r\n      <br><br>\r\n\r\n      <button pButton type=\"button\" (click)=\"limpar(formHistorico)\" label=\"Limpar\" class=\"ui-button-warning\" \r\n      [ngStyle]=\"{'width': '90px', 'height':'30px', 'margin': '3px'}\" icon=\"pi pi-refresh\" iconPos=\"right\"></button>\r\n      <button pButton type=\"button\" (click)=\"salvar(historicoAnalise, formHistorico)\" label=\"Salvar\" class=\" ui-button-success\" \r\n      [ngStyle]=\"{'width': '90px', 'height': '30px', 'margin': '3px'}\" icon=\"pi pi-save\" iconPos=\"right\"></button>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n<div class=\"p-grid\" [ngStyle]=\"{'height': '3px', 'background-color': 'black'}\"></div>\r\n<br>\r\n<div class=\"p-grid p-justify-center\">\r\n  <div class=\"p-grid\" [hidden]=\"!loadTable\" style=\"padding: 25px;\">\r\n      <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 10em\"></i>\r\n  </div>\r\n\r\n  <div [hidden]=\"loadTable\">\r\n    <p-table [value]=\"historicoAnalises\" sortMode=\"multiple\" [scrollable]=\"true\" scrollHeight=\"200px\" >\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th class=\"tddata\"><strong>Data</strong></th>\r\n          <th class=\"tdusuario\"><strong>Usuário</strong></th>\r\n          <th class=\"tdfase\"><strong>Fase</strong></th>\r\n          <th class=\"tdsintese\"><strong>Sínteses</strong></th>\r\n          <th class=\"tddescricao\"><strong>Descrição</strong></th>   \r\n        </tr>\r\n      </ng-template>\r\n  \r\n      <ng-template pTemplate=\"body\" let-hist>\r\n        <tr>\r\n          <td class=\"tddata\">{{hist.datahistorico | date :  \"dd/MM/y\"}}</td>\r\n          <td class=\"tdusuario\"> {{hist.codusuario}} </td>\r\n          <td class=\"tdfase\"> {{hist.numfase.fase}}</td>\r\n          <td class=\"tdsintese\"> {{hist.numsintese.sintese}} </td>\r\n          <td class=\"tddescricao\"> {{hist.descricao}} </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/pages/informacoes/historico/historico.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/informacoes/historico/historico.component.ts ***!
  \*************************************************************************/
/*! exports provided: HistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoComponent", function() { return HistoricoComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_compradores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/compradores */ "./src/app/models/compradores.ts");
/* harmony import */ var src_app_services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cadastro-logica.service */ "./src/app/services/cadastro-logica.service.ts");
/* harmony import */ var src_app_models_cadastro_informacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cadastro-informacao */ "./src/app/models/cadastro-informacao.ts");
/* harmony import */ var src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var src_app_services_historico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/historico.service */ "./src/app/services/historico.service.ts");
/* harmony import */ var src_app_models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/HistoricoAnalise */ "./src/app/models/HistoricoAnalise.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_historico_logica_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/historico-logica.service */ "./src/app/services/historico-logica.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HistoricoComponent = /** @class */ (function () {
    function HistoricoComponent(cadastroLogicaService, chamadaService, historicoService, messageService, historicoLogicaService) {
        this.cadastroLogicaService = cadastroLogicaService;
        this.chamadaService = chamadaService;
        this.historicoService = historicoService;
        this.messageService = messageService;
        this.historicoLogicaService = historicoLogicaService;
        this.comprador = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_2__["Compradores"]();
        this.cadInfo = new src_app_models_cadastro_informacao__WEBPACK_IMPORTED_MODULE_4__["CadastroInformacao"]();
        this.disabledSintese = true;
        this.loadSpin = false;
        this.loadTable = false;
        this.msgs = [];
        this.historicoAnalises = [];
        this.historicoAnalise = new src_app_models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_7__["HistoricoAnalise"]();
    }
    HistoricoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chamadaService.getDadosCadastrais('fases').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpResponse"]) {
                _this.fases = event.body['data'];
            }
        });
        this.visualizarCadInfo();
        this.chamadaService.buscarInformacoes.subscribe(function (dado) {
            if (dado == true) {
                _this.form.reset();
                _this.visualizarCadInfo();
                _this.historicoAnalises = [];
                _this.getHistorico();
                _this.msgs = [];
            }
        });
        this.historicoLogicaService.load.subscribe(function (dado) {
            setTimeout(function () {
                _this.loadTable = !dado;
            }, 500);
        });
        this.getHistorico();
    };
    HistoricoComponent.prototype.changeFases = function (event) {
        var _this = this;
        this.loadSpin = true;
        var numfase = event.value;
        this.historicoService.getSintesePorFaseRequest(numfase.numfase).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpResponse"]) {
                _this.sinteses = event.body['data'];
                setTimeout(function () {
                    _this.loadSpin = false;
                }, 300);
            }
        });
        this.disabledSintese = false;
    };
    HistoricoComponent.prototype.changeSintese = function (event) {
        var sinsete = event.value;
        this.sinteseSelecionado = sinsete;
    };
    HistoricoComponent.prototype.getHistorico = function () {
        var _this = this;
        this.historicoService.getHistorico(this.cadInfo.codcadastro).subscribe(function (data) {
            _this.historicoAnalises = _this.historicoLogicaService.receberHistorico(data);
        });
    };
    HistoricoComponent.prototype.salvar = function (data, formHistorico) {
        var _this = this;
        this.loadTable = true;
        this.msgs = [];
        if (this.validaForm(formHistorico) == true) {
            var data2 = new src_app_models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_7__["HistoricoAnalise"]();
            data2 = this.historicoLogicaService.salvarHistorico(data, this.cadInfo.codcadastro, this.sinteseSelecionado);
            this.historicoService.postHistorico(data2).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpResponse"]) {
                    var evento = event.body['data'];
                    evento = _this.historicoLogicaService.receberData(evento);
                    _this.historicoAnalises.unshift(evento);
                    formHistorico.reset();
                    _this.disabledSintese = true;
                    _this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Adicionado com sucesso!' });
                }
            });
        }
        else {
            var camposInvalidos = [];
            for (var _i in formHistorico.controls) {
                if (formHistorico.controls[_i].status == 'INVALID') {
                    var campoInvalido = document.querySelector("label[for=\"" + _i + "\"]").innerHTML;
                    campoInvalido = campoInvalido.replace(': ', '');
                    camposInvalidos.push(" " + campoInvalido);
                    formHistorico.controls[_i].pristine = false;
                    this.msgs = [];
                    this.msgs.push({
                        severity: 'error',
                        summary: 'Erro ao salvar!',
                        detail: "Existem campos n\u00E3o preenchidos ou preenchidos incorretamente. <strong>Campos com erro:" +
                            camposInvalidos + "</strong>."
                    });
                }
            }
            this.loadTable = false;
        }
    };
    HistoricoComponent.prototype.visualizarCadInfo = function () {
        var cadastroSelecionado = sessionStorage.getItem('CADASTRODADOS');
        var cadInfoSelecionado = sessionStorage.getItem('CADASTROINFO');
        if (cadastroSelecionado != 'undefined' && cadastroSelecionado != null) {
            var comprador = this.cadastroLogicaService.getDadosCadastrais(cadastroSelecionado);
            this.comprador = comprador;
            this.fid = JSON.parse(sessionStorage.getItem('fid'));
        }
        if (cadInfoSelecionado != 'undefined' && cadastroSelecionado != null) {
            var cadInfo = this.cadastroLogicaService.getCadInfo(cadInfoSelecionado);
            this.cadInfo = cadInfo;
        }
    };
    HistoricoComponent.prototype.limpar = function (form) {
        form.reset();
        this.msgs = [];
        this.disabledSintese = true;
        this.messageService.add({ key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!' });
    };
    HistoricoComponent.prototype.validaForm = function (form) {
        if (form.valid == false) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formHistorico', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"] }),
        __metadata("design:type", Object)
    ], HistoricoComponent.prototype, "form", void 0);
    HistoricoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historico',
            template: __webpack_require__(/*! ./historico.component.html */ "./src/app/core/pages/informacoes/historico/historico.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]],
            styles: [__webpack_require__(/*! ./historico.component.css */ "./src/app/core/pages/informacoes/historico/historico.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_3__["CadastroLogicaService"],
            src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_5__["AnaliseChamadasService"],
            src_app_services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
            src_app_services_historico_logica_service__WEBPACK_IMPORTED_MODULE_9__["HistoricoLogicaService"]])
    ], HistoricoComponent);
    return HistoricoComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/informacoes/informacoes.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/pages/informacoes/informacoes.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-dual-ring {\r\n    display: inline-block;\r\n    width: 128px;\r\n    height: 128px;\r\n  }\r\n  .lds-dual-ring:after {\r\n    content: \" \";\r\n    display: block;\r\n    width: 110px;\r\n    height: 110px;\r\n    margin: 2px;\r\n    border-radius: 50%;\r\n    border: 5px solid black;\r\n    border-color: black transparent black transparent;\r\n    -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n            animation: lds-dual-ring 1.2s linear infinite;\r\n  }\r\n  @-webkit-keyframes lds-dual-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-dual-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9pbmZvcm1hY29lcy9pbmZvcm1hY29lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQscURBQTZDO1lBQTdDLDZDQUE2QztFQUMvQztFQUNBO0lBQ0U7TUFDRSwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBeUI7Y0FBekIseUJBQXlCO0lBQzNCO0VBQ0Y7RUFQQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9pbmZvcm1hY29lcy9pbmZvcm1hY29lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1kdWFsLXJpbmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICB9XHJcbiAgLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/core/pages/informacoes/informacoes.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/informacoes/informacoes.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel>\r\n  <p-header>\r\n    Informações\r\n  </p-header>\r\n\r\n  <div class=\"p-grid p-justify-center p-align-center vertical-container\" [hidden]=\"load\" style=\"padding: 25px;\">\r\n      <div #loader class=\"lds-dual-ring\">\r\n      </div>\r\n  </div>\r\n\r\n  <div [hidden]=\"!load\">\r\n    <p-tabView>\r\n      <p-tabPanel header=\"Dados cadastrais\">\r\n          <ng-template pTemplate=\"content\">\r\n              <app-dados-cadastrais></app-dados-cadastrais>\r\n          </ng-template>\r\n      </p-tabPanel>\r\n\r\n      <p-tabPanel header=\"Histórico\">\r\n        <app-historico></app-historico>\r\n      </p-tabPanel>\r\n    </p-tabView>\r\n  </div>\r\n</p-panel>\r\n\r\n<br>"

/***/ }),

/***/ "./src/app/core/pages/informacoes/informacoes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/pages/informacoes/informacoes.component.ts ***!
  \*****************************************************************/
/*! exports provided: InformacoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesComponent", function() { return InformacoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformacoesComponent = /** @class */ (function () {
    function InformacoesComponent(sharedService) {
        this.sharedService = sharedService;
    }
    InformacoesComponent.prototype.ngOnDestroy = function () {
        var storage = ['CADASTRODADOS', 'ANALISEDADOS', 'fid', 'codcadastro', 'CADASTROINFO'];
        for (var i = 0; i < storage.length; i++) {
            if (sessionStorage.getItem(storage[i]) !== null || undefined || 'undefined') {
                sessionStorage.removeItem(storage[i]);
            }
        }
    };
    InformacoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.showLoader.subscribe(function (dado) {
            _this.load = dado;
        });
    };
    InformacoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacoes',
            template: __webpack_require__(/*! ./informacoes.component.html */ "./src/app/core/pages/informacoes/informacoes.component.html"),
            styles: [__webpack_require__(/*! ./informacoes.component.css */ "./src/app/core/pages/informacoes/informacoes.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], InformacoesComponent);
    return InformacoesComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/pages/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*background-image: url('../../../../assets/imagens/background.jpg');*/\r\n\r\n/*.fullpage {\r\n    text-align: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: #6C7A89;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-image: url('../../../../assets/imagens/background.jpg');\r\n    background-size: 100% 100% 100% 100%;\r\n  }\r\n\r\n .form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: 40px;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  #main-container{\r\n    width: 432px;\r\n    height: 450px;\r\n    border-radius: 2px;\r\n    border: 1px solid lightseagreen;\r\n    background-color: aliceblue;\r\n  }\r\n  \r\n  #logo{\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n  \r\n  #logouser{\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  #logopsw{\r\n    margin-top: 10px;\r\n  }*/\r\n\r\n.main-container{\r\n  width: 432px;\r\n  height: 490px; \r\n  border-radius: 2px;\r\n  border: 1px solid lightseagreen;\r\n  background-color: aliceblue;\r\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\r\n}\r\n\r\n.main {\r\n  background-image: url('background.jpg');\r\n  background-size: 100% 100% 100% 100%;\r\n  margin: 0;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLHNFQUFzRTs7QUFFdkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpREk7O0FBRUo7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHVDQUFrRTtFQUNsRSxvQ0FBb0M7RUFDcEMsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2Vucy9iYWNrZ3JvdW5kLmpwZycpOyovXHJcblxyXG4vKi5mdWxscGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzZDN0E4OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvYmFja2dyb3VuZC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlIDEwMCUgMTAwJTtcclxuICB9XHJcblxyXG4gLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MzJweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuICBcclxuICAjbG9nb3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dvdXNlcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dvcHN3e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9Ki9cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICB3aWR0aDogNDMycHg7XHJcbiAgaGVpZ2h0OiA0OTBweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5zL2JhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgMTAwJSAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/pages/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center main\" [ngStyle]=\"{'width': '100vw', 'height': '100vh'}\">\r\n    <form name=\"forms\" novalidate (ngSubmit)=\"fazerLogin(f)\" #f=\"ngForm\">\r\n        <div class=\"main-container p-grid p-justify-center p-align-center p-dir-col\">\r\n            <img src=\"assets/imagens/montreal_logo.png\" id=\"logo\">\r\n\r\n            <div class=\"p-grid p-justify-center\" [ngStyle]=\"{'margin': '10px 0 10px 0', 'width': '90%'}\">\r\n                <div class=\"ui-inputgroup\" [ngStyle]=\"{'width': '90%'}\">\r\n                    <span class=\"ui-inputgroup-addon\">\r\n                        <i class=\"pi pi-user\" style=\"font-size: 1.5em\"></i>\r\n                    </span>\r\n                    <input pInputText [ngStyle]=\"{'width': '90%'}\" type=\"text\" name=\"usuario\" placeholder=\"Digite o usuário...\" \r\n                    [(ngModel)]=\"user.login\" #usuario=\"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && usuario.invalid}\" \r\n                    required>         \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"p-grid p-justify-center\" [ngStyle]=\"{'margin': '10px 0 10px 0', 'width': '90%'}\">\r\n                <div class=\"ui-inputgroup\" [ngStyle]=\"{'width': '90%'}\">\r\n                    <span class=\"ui-inputgroup-addon\">\r\n                        <i class=\"pi pi-lock\" style=\"font-size: 1.5em\"></i>\r\n                    </span>\r\n                    <input pInputText [ngStyle]=\"{'width': '90%'}\" type=\"password\" id=\"psw\" name=\"password\" \r\n                    placeholder=\"Digite a senha...\"  title=\"A senha deve conter no mínimo 6 caractéres sendo no mínimo um caractér especial, uma letra maiúscula, uma letra minúscula e um número.\" \r\n                    [(ngModel)]=\"user.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>         \r\n                </div>\r\n            </div>\r\n\r\n            <p-messages [(value)]=\"msgs\" [closable]=\"false\"></p-messages>\r\n            <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\" [hidden]=\"hidden\"></i>\r\n\r\n            <button pButton type=\"submit\" label=\"Login\" class=\"ui-button-rounded ui-button-success\"\r\n            [ngStyle]=\"{'width': '90%'}\"></button>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/pages/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.mensagemErro = '';
        this.msgs = [];
        this.hidden = true;
        this.user = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
        this.shared.showError.subscribe(function (erro) { return _this.mensagemErro = erro; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fazerLogin = function (from) {
        var _this = this;
        this.msgs = [];
        setTimeout(function () {
            _this.hidden = false;
        }, 301);
        this.authService.fazerLogin(from, this.user);
        this.authService.msgError.subscribe(function (dado) {
            setTimeout(function () {
                _this.hidden = true;
                if (dado == false) {
                    _this.msgs = [];
                    _this.msgs.push({
                        severity: 'error',
                        summary: 'Erro ao logar!',
                        detail: 'Usúario ou senha estão incorretos.'
                    });
                }
                else {
                    _this.msgs = [];
                }
            }, 301);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/pages/relatorio-lista/relatorio-lista.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n    font-size: smaller;\r\n}\r\n\r\n.container{\r\n    width: 100%;\r\n    display: inline;\r\n}\r\n\r\n.progressbar{\r\n    counter-reset: step;\r\n}\r\n\r\n.progressbar li{\r\n    list-style-type: none;\r\n    float: left;\r\n    width: 100%;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.progressbar li:before{\r\n    content: counter(step);\r\n    counter-increment: step;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    border: 1px solid #ddd;\r\n    display: block;\r\n    text-align: center;\r\n    margin: 0 auto 10px auto;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    \r\n}\r\n\r\n.progressbar li:after{\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 5px;\r\n    background-color: #ddd;\r\n    top: 15px;\r\n    left: -50%;\r\n    z-index: -1;\r\n}\r\n\r\n.progressbar li:first-child:after{\r\n    content: none;\r\n}\r\n\r\n.progressbar li.active{\r\n    color: green;\r\n}\r\n\r\n.progressbar li.active:before{\r\n    color: white;\r\n    background-color: yellowgreen;\r\n    border-color: yellowgreen;\r\n}\r\n\r\n.progressbar li.active:after{\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9yZWxhdG9yaW8tbGlzdGEvcmVsYXRvcmlvLWxpc3RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9yZWxhdG9yaW8tbGlzdGEvcmVsYXRvcmlvLWxpc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5wcm9ncmVzc2JhcntcclxuICAgIGNvdW50ZXItcmVzZXQ6IHN0ZXA7XHJcbn1cclxuLnByb2dyZXNzYmFyIGxpe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZ3Jlc3NiYXIgbGk6YmVmb3Jle1xyXG4gICAgY29udGVudDogY291bnRlcihzdGVwKTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLnByb2dyZXNzYmFyIGxpOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IC01MCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4ucHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcbi5wcm9ncmVzc2JhciBsaS5hY3RpdmV7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZTpiZWZvcmV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZTphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/relatorio-lista/relatorio-lista.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  >\r\n    <p-panel header=\"Busca \"  [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g ui-fluid\">\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                <div class=\"ui-inputgroup\">\r\n                     <span class=\"ui-inputgroup-addon\">Número Proposta</span>\r\n                    <input type=\"text\" (input)=\"proposta = $event.target.value\"   >         \r\n                    <p-button label=\"Buscar\"  (onClick)=\"buscarHistoricoPorProposta()\" ></p-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 ui-md-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\">Número Contrato</span>\r\n                        <input type=\"text\" (input)=\"proposta = $event.target.value\">         \r\n                        <p-button label=\"Buscar\"  (onClick)=\"buscarHistoricoPorContrato()\" ></p-button>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 ui-md-4\">\r\n                        <div class=\"ui-inputgroup\">\r\n                           <span class=\"ui-inputgroup-addon\">Número CPF/CNPJ</span>\r\n                            <input type=\"text\" (input)=\"proposta = $event.target.value\">         \r\n                            <p-button label=\"Buscar\"  (onClick)=\"buscarHistoricoPorDocumento()\" ></p-button>\r\n                            \r\n                        </div>\r\n                    </div>\r\n           </div> \r\n    </p-panel>\r\n\r\n    <p-panel  header=\"Relatório Agrupado\"  [style]=\"{'margin-bottom':'20px'}\">\r\n            <div   class=\"ui-g ui-fluid \">\r\n                <div  class=\"ui-g-12 ui-md-12\">\r\n                    <div  class=\"ui-inputgroup\">\r\n                            <div  class=\"container\" style=\"z-index:99\">\r\n                              <ul class=\"progressbar\">\r\n                                    <li id=\"1\">Malote</li>\r\n                                    <li id=\"2\">Conferência</li>\r\n                                    <li id=\"3\">Liberação</li>\r\n                              </ul>\r\n                           </div>\r\n                    </div>\r\n                </div>\r\n               </div> \r\n        </p-panel  >\r\n        <div >\r\n            <p-table #dt [columns]=\"cols\" [value]=\"historicoSimples\" >\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                        <th *ngFor=\"let col of columns\">\r\n                            {{col.header}}\r\n                        </th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                                <input *ngSwitchCase=\"'atividade'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"> \r\n                                <input *ngSwitchCase=\"'nomeCliente'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <input *ngSwitchCase=\"'codCadastro'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <input *ngSwitchCase=\"'nContrato'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <input *ngSwitchCase=\"'numProposta'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <p-dropdown *ngSwitchCase=\"'area'\"  [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\r\n                                <input *ngSwitchCase=\"'status'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <input *ngSwitchCase=\"'subStatus'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                                <input *ngSwitchCase=\"'obs'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                          </th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-historico let-columns=\"columns\">\r\n                            <tr  >\r\n                                <td >{{historico.atividade | date:'short'}}</td>\r\n                                <td >{{historico.nomeCliente}}</td>\r\n                                <td >{{historico.codCadastro}}</td>\r\n                                <td >{{historico.nContrato}}</td>\r\n                                <td >{{historico.numProposta}}</td>\r\n                                <td >{{historico.area}}</td>\r\n                                <td >{{historico.status}}</td>\r\n                                <td >{{historico.subStatus}}</td>\r\n                                <td >{{historico.obs}}</td>\r\n                            </tr>\r\n\r\n                </ng-template>\r\n            </p-table>\r\n        </div>\r\n </form>"

/***/ }),

/***/ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/relatorio-lista/relatorio-lista.component.ts ***!
  \*************************************************************************/
/*! exports provided: RelatorioListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioListaComponent", function() { return RelatorioListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _relatorio_lista_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio-lista.service */ "./src/app/core/pages/relatorio-lista/relatorio-lista.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_HistoricoSimples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/HistoricoSimples */ "./src/app/models/HistoricoSimples.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelatorioListaComponent = /** @class */ (function () {
    function RelatorioListaComponent(service) {
        this.service = service;
    }
    RelatorioListaComponent.prototype.ngOnInit = function () {
        this.buscarExist(3, 1);
        document.getElementById('idIndex').classList.remove('stylebody');
        this.brands = [
            { label: 'All Area', value: null },
            { label: 'Liberacao', value: 'Liberacao' },
            { label: 'Conferência', value: 'Conferência' },
            { label: 'Malote', value: 'Malote' }
        ];
        this.cols = [
            { field: 'atividade', header: 'Atividade' },
            { field: 'nomeCliente', header: 'Cliente' },
            { field: 'codCadastro', header: 'Cadastro' },
            { field: 'nContrato', header: 'Contrato' },
            { field: 'numProposta', header: 'Proposta' },
            { field: 'area', header: 'Area' },
            { field: 'status', header: 'Status' },
            { field: 'subStatus', header: 'SubStatus' },
            { field: 'obs', header: 'obs' }
        ];
    };
    RelatorioListaComponent.prototype.buscarHistoricoPorProposta = function () {
        var _this = this;
        this.service.buscarHistoricoPorProposta(this.proposta).subscribe(function (data) { return _this.preencheTabela(data); });
    };
    RelatorioListaComponent.prototype.buscarHistoricoPorContrato = function () {
        var _this = this;
        this.service.buscarHistoricoPorContrato(this.proposta).subscribe(function (data) { return _this.preencheTabela(data); });
    };
    RelatorioListaComponent.prototype.buscarHistoricoPorDocumento = function () {
        var _this = this;
        this.service.buscarHistoricoPorDocumento(this.proposta).subscribe(function (data) { return _this.preencheTabela(data); });
    };
    RelatorioListaComponent.prototype.buscarExist = function (z, p) {
        var i = 1;
        passos(z, p);
        function passos(m, n) {
            // Quantidade de passos
            if (i < m) {
                do {
                    i++;
                    //  $('.progressbar li:last').after("<li _ngcontent-c8  id='" + i + "'>Passo " + i + "</li>");
                    var wi = 100 / i;
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.progressbar li').css({ 'width': wi + '%' });
                } while (i < m);
            }
            // Passos concluídos
            jquery__WEBPACK_IMPORTED_MODULE_2__('#' + n).addClass('active').prevAll().addClass('active');
            // Passos concluídos
            if (jquery__WEBPACK_IMPORTED_MODULE_2__('#' + n).hasClass('active')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#' + n).nextAll().removeClass('active');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#' + n).addClass('active').prevAll().addClass('active');
            }
        }
    };
    RelatorioListaComponent.prototype.preencheTabela = function (data) {
        var items = [];
        this.contaPassos = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            if (this.contaPassos <= item.area.codArea) {
                this.contaPassos = item.area.codArea;
                this.buscarExist(3, this.contaPassos);
            }
            items.push(new _models_HistoricoSimples__WEBPACK_IMPORTED_MODULE_3__["HistoricoSimples"](item.id, item.cadastroProposta.cliente.nomeCliente, item.cadastroProposta.codCadastro, item.cadastroProposta.nContrato, item.cadastroProposta.numProposta, item.area.descAreaCadastro, item.status.descStatus, item.subStatus.descSubStatus, item.dtAtividade, item.obs));
        }
        this.historicoSimples = items;
    };
    RelatorioListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorio-lista',
            template: __webpack_require__(/*! ./relatorio-lista.component.html */ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.html"),
            styles: [__webpack_require__(/*! ./relatorio-lista.component.css */ "./src/app/core/pages/relatorio-lista/relatorio-lista.component.css")]
        }),
        __metadata("design:paramtypes", [_relatorio_lista_service__WEBPACK_IMPORTED_MODULE_1__["RelatorioListaService"]])
    ], RelatorioListaComponent);
    return RelatorioListaComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/relatorio-lista/relatorio-lista.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/relatorio-lista/relatorio-lista.service.ts ***!
  \***********************************************************************/
/*! exports provided: RelatorioListaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioListaService", function() { return RelatorioListaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var historico = '/api/cad/historico';
var historicocontrato = '/api/cad/historicocontrato';
var historicodocumento = '/api/cad/historicodocumento';
var RelatorioListaService = /** @class */ (function () {
    function RelatorioListaService(http) {
        this.http = http;
    }
    RelatorioListaService.prototype.buscarHistoricoPorProposta = function (numProposta) {
        return this.http.post((_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + historico), { 'numProposta': numProposta });
    };
    RelatorioListaService.prototype.buscarHistoricoPorContrato = function (nContrato) {
        return this.http.post((_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + historicocontrato), { 'nContrato': nContrato });
    };
    RelatorioListaService.prototype.buscarHistoricoPorDocumento = function (numDocumento) {
        return this.http.post((_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + historicodocumento), { 'cliente': { 'numDocumento': numDocumento } });
    };
    RelatorioListaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RelatorioListaService);
    return RelatorioListaService;
}());



/***/ }),

/***/ "./src/app/core/pages/reset-usuario/reset-usuario.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/core/pages/reset-usuario/reset-usuario.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n    width: 50%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    padding: 0;\r\n    box-shadow:0 5px 5px rgba(0,0,0,.175);\r\n}\r\n\r\n.ajusteInput {\r\n    width: 100%;\r\n    margin: 1vw 0vw 1vw 0vw;\r\n}\r\n\r\n.ajusteLabel {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9yZXNldC11c3VhcmlvL3Jlc2V0LXVzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wYWdlcy9yZXNldC11c3VhcmlvL3Jlc2V0LXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzowIDVweCA1cHggcmdiYSgwLDAsMCwuMTc1KTtcclxufVxyXG5cclxuLmFqdXN0ZUlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxdncgMHZ3IDF2dyAwdnc7XHJcbn1cclxuXHJcbi5hanVzdGVMYWJlbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/pages/reset-usuario/reset-usuario.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/reset-usuario/reset-usuario.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center\">\r\n  <div class=\"main-container\">\r\n    <p-panel>\r\n      <p-header>\r\n        Reset de Senha\r\n      </p-header>\r\n      <p-toast [style]=\"{marginTop: '80px'}\" key=\"popup\"></p-toast>\r\n      <div class=\"p-grid p-justify-center p-align-center\" [ngStyle]=\"{'margin': '5px'}\">\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-6\">\r\n        \r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"usuario\">Usuário:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"usuario\" [suggestions]=\"results\" (completeMethod)=\"searchNome($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(true)\" ></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"p-col-6\">\r\n\r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"login\">Login:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"nickname\" [suggestions]=\"resultsLogin\" (completeMethod)=\"searchLogin($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(false)\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"p-grid\" [ngStyle]=\"{'height': '3px', 'background-color': 'black', 'margin': '5px'}\"></div>\r\n\r\n      <div class=\"p-grid p-justify-center\" [hidden]=\"!showLoad\">\r\n        <div class=\"p-grid\" style=\"padding: 25px;\">\r\n            <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 10em\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!showForm\">\r\n          <form id=\"form\" #form=\"ngForm\" autocomplete=\"off\">\r\n              <div class=\"p-grid\">\r\n                <div class=\"p-col-6\">\r\n                    <input type=\"text\" disabled=\"true\" class=\"ajusteInput\" pInputText placeholder=\"Nome\" id=\"nome\" ngModel  name=\"nome\"  #nome=\"ngModel\" [(ngModel)]=\"usuarioForm.nome\" tabindex=\"1\"/>\r\n                    \r\n                </div>\r\n      \r\n                <div class=\"p-col-6\">\r\n                    <input type=\"text\" disabled=\"true\" class=\"ajusteInput\" pInputText placeholder=\"Sobrenome\" id=\"sobrenome\" name=\"sobrenome\" #sobrenome=\"ngModel\" [(ngModel)]=\"usuarioForm.sobrenome\" tabindex=\"2\"/>\r\n                </div>\r\n                <div class=\"p-col-12\">\r\n                    <input type=\"text\" disabled=\"true\" class=\"ajusteInput\" pInputText placeholder=\"Nickname de login\" id=\"nickname\" name=\"login\" ngModel  #login=\"ngModel\" [(ngModel)]=\"usuarioForm.login\" tabindex=\"5\"/>\r\n                </div> \r\n                <div class=\"p-col-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">@</span>\r\n                        <input id=\"idemail\" disabled=\"true\" type=\"email\" [ngStyle]=\"{'width': '100%'}\" pInputText placeholder=\"E-mail (para recuperação de senha)\"  name=\"email\"  #email=\"ngModel\" [(ngModel)]=\"usuarioForm.email\" tabindex=\"9\">  \r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-4\" style=\"text-align: right;\">\r\n                    <div class=\"ui-inputgroup\" >\r\n                        <p >  Nova senha: </p>\r\n                     </div>\r\n                </div>  \r\n                <div class=\"p-col-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <h2>{{newPassord}} </h2>\r\n                     </div>\r\n                </div>      \r\n                <div class=\"p-col-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        \r\n                     </div>\r\n                </div>  \r\n                <div class=\"p-grid p-justify-end\" [ngStyle]=\"{'width': '100%', 'height': '100%'}\">\r\n                    <button pButton type=\"submit\" label=\"Gerar Senha\" class=\"ui-button-danger ui-button-raised\" \r\n                    [ngStyle]=\"{'width': '20%', 'height': '40%', 'margin': '3px'}\"  iconPos=\"right\" (click)=\"resetRandonPassoword()\"></button>\r\n                    <button pButton type=\"submit\" label=\"Salvar\" class=\"ui-button-success\" \r\n                    [ngStyle]=\"{'width': '20%', 'height': '40%', 'margin': '3px'}\" icon=\"pi pi-save\" iconPos=\"right\" (click)=\"atualizarUser()\"></button>\r\n                </div>\r\n      \r\n              </div>\r\n            </form>\r\n      </div>\r\n      \r\n    </p-panel>    \r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/core/pages/reset-usuario/reset-usuario.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/pages/reset-usuario/reset-usuario.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetUsuarioComponent", function() { return ResetUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/formcadastro.service */ "./src/app/services/formcadastro.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/role */ "./src/app/models/role.ts");
/* harmony import */ var src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/form-cadastro-logica.service */ "./src/app/services/form-cadastro-logica.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetUsuarioComponent = /** @class */ (function () {
    function ResetUsuarioComponent(formcadastro, messageService, formCadastroLogica) {
        this.formcadastro = formcadastro;
        this.messageService = messageService;
        this.formCadastroLogica = formCadastroLogica;
        this.usuarioForm = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.results = [];
        this.resultsLogin = [];
        this.showForm = false;
        this.showLoad = false;
    }
    ResetUsuarioComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    ResetUsuarioComponent.prototype.atualizarUser = function () {
        var _this = this;
        if (this.newPassord != null && this.newPassord.length != 0) {
            this.usuarioForm.password = this.newPassord;
            this.formcadastro.salvaresetUserPassword(this.usuarioForm).subscribe(function (data) {
                _this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!' });
                console.log(data);
            });
        }
        else {
            this.messageService.add({ key: 'popup', severity: 'error', summary: 'Erro!', detail: 'Erro ao realizar alterações!' });
        }
    };
    ResetUsuarioComponent.prototype.getRoles = function () {
        var _this = this;
        var items = [];
        this.formcadastro.getRoles().subscribe(function (data) {
            for (var _i = 0; _i < data['data'].length; _i++) {
                _this.item = new src_app_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"]();
                _this.item.id = (data['data'][_i].id);
                _this.item.nivel = (data['data'][_i].nivel);
                _this.item.profile = (data['data'][_i].profile);
                items.push(_this.item);
            }
            _this.selectRoles = items;
        });
    };
    ResetUsuarioComponent.prototype.getUser = function (dado) {
        var _this = this;
        this.showLoad = true;
        this.showForm = false;
        this.newPassord = null;
        if (dado == false) {
            this.formcadastro.getLogin(this.nickname).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
        else if (dado == true) {
            var slice = this.usuario.indexOf(' ');
            this.formcadastro.getNome(this.usuario.slice(0, slice)).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
    };
    ResetUsuarioComponent.prototype.searchNome = function (event) {
        var _this = this;
        this.formcadastro.getUsers(event.query).then(function (data) {
            _this.results = _this.formCadastroLogica.filtroClientePorNome(event.query, data['data']);
        });
    };
    ResetUsuarioComponent.prototype.searchLogin = function (event) {
        var _this = this;
        this.formcadastro.getNick(event.query).then(function (data) {
            _this.resultsLogin = _this.formCadastroLogica.filtroClientePorLogin(event.query, data['data']);
        });
    };
    ResetUsuarioComponent.prototype.resetRandonPassoword = function () {
        this.newPassord = this.formcadastro.makeid(8);
    };
    ResetUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-usuario',
            template: __webpack_require__(/*! ./reset-usuario.component.html */ "./src/app/core/pages/reset-usuario/reset-usuario.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
            styles: [__webpack_require__(/*! ./reset-usuario.component.css */ "./src/app/core/pages/reset-usuario/reset-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__["FormcadastroService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__["FormCadastroLogicaService"]])
    ], ResetUsuarioComponent);
    return ResetUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/update-usuario/update-usuario.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/pages/update-usuario/update-usuario.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n    width: 50%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    padding: 0;\r\n    box-shadow:0 5px 5px rgba(0,0,0,.175);\r\n}\r\n\r\n.ajusteInput {\r\n    width: 100%;\r\n    margin: 1vw 0vw 1vw 0vw;\r\n}\r\n\r\n.ajusteLabel {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy91cGRhdGUtdXN1YXJpby91cGRhdGUtdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2VzL3VwZGF0ZS11c3VhcmlvL3VwZGF0ZS11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6MCA1cHggNXB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbn1cclxuXHJcbi5hanVzdGVJbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMXZ3IDB2dyAxdncgMHZ3O1xyXG59XHJcblxyXG4uYWp1c3RlTGFiZWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/pages/update-usuario/update-usuario.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/update-usuario/update-usuario.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid p-justify-center p-align-center\">\r\n  <div class=\"main-container\">\r\n    <p-panel>\r\n      <p-header>\r\n        Atualização de Dados\r\n      </p-header>\r\n      <p-toast [style]=\"{marginTop: '80px'}\" key=\"popup\"></p-toast>\r\n      <div class=\"p-grid p-justify-center p-align-center\" [ngStyle]=\"{'margin': '5px'}\">\r\n        <div class=\"p-grid\">\r\n          <div class=\"p-col-6\">\r\n        \r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"usuario\">Usuário:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"usuario\" [suggestions]=\"results\" (completeMethod)=\"searchNome($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(true)\" ></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"p-col-6\">\r\n\r\n            <div class=\"p-grid p-align-center vertical-container\">\r\n              <div class=\"p-col-2\" [ngStyle]=\"{'float': 'right'}\">\r\n                <label for=\"login\">Login:</label>\r\n              </div>\r\n              <div class=\"p-col-10\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{'background-color': 'transparent', 'border-radius': '15px 0px 0px 15px'}\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                  </span>\r\n                  <p-autoComplete [(ngModel)]=\"nickname\" [suggestions]=\"resultsLogin\" (completeMethod)=\"searchLogin($event)\"></p-autoComplete>\r\n                  <button pButton type=\"button\" label=\"Buscar\" class=\"ui-button-rounded ui-button-success\" [ngStyle]=\"{'border-radius': '0px 15px 15px 0px'}\"\r\n                  (click)=\"getUser(false)\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"p-grid\" [ngStyle]=\"{'height': '3px', 'background-color': 'black', 'margin': '5px'}\"></div>\r\n\r\n      <div class=\"p-grid p-justify-center\" [hidden]=\"!showLoad\">\r\n        <div class=\"p-grid\" style=\"padding: 25px;\">\r\n            <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 10em\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!showForm\">\r\n        <form id=\"form\" #form=\"ngForm\" autocomplete=\"off\">\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-6\">\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Nome\" id=\"nome\" ngModel  name=\"nome\"  #nome=\"ngModel\" [(ngModel)]=\"usuarioForm.nome\" tabindex=\"1\"/>\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Telefone ou Ramal\" id=\"contato\" pattern=\"\\d+\" ngModel name=\"telefone\" #telefone=\"ngModel\" [(ngModel)]=\"usuarioForm.telefone\" tabindex=\"3\"/>\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Nickname de login\" id=\"nickname\" name=\"login\" ngModel  #login=\"ngModel\" [(ngModel)]=\"usuarioForm.login\" tabindex=\"5\"/>\r\n            </div>\r\n  \r\n            <div class=\"p-col-6\">\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Sobrenome\" id=\"sobrenome\" name=\"sobrenome\" #sobrenome=\"ngModel\" [(ngModel)]=\"usuarioForm.sobrenome\" tabindex=\"2\"/>\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"CPF\" name=\"cpf\" #cpf=\"ngModel\" [(ngModel)]=\"usuarioForm.cpf\" tabindex=\"4\"/>\r\n                <input type=\"text\" class=\"ajusteInput\" pInputText placeholder=\"Repita o nickname\" id=\"confirmarNickName\" name=\"confirmarNickName\" [(ngModel)]=\"confirmarNickName\" tabindex=\"6\"/>\r\n            </div>\r\n  \r\n            <div class=\"p-col-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                    <span class=\"ui-inputgroup-addon\">@</span>\r\n                    <input id=\"idemail\" type=\"email\" [ngStyle]=\"{'width': '100%'}\" pInputText placeholder=\"E-mail (para recuperação de senha)\"  name=\"email\"  #email=\"ngModel\" [(ngModel)]=\"usuarioForm.email\" tabindex=\"9\">  \r\n                </div>\r\n            </div>\r\n  \r\n            <div class=\"p-col-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                    <p-multiSelect [options]=\"selectRoles\" optionLabel=\"profile\" [(ngModel)]=\"usuarioForm.perfis\" defaultLabel=\"Selecione o perfil..\" [ngModelOptions]=\"{standalone:true}\" \r\n                    [style]=\"{'width': '100%'}\" [ngStyle]=\"{'width': '100%'}\" tabindex=\"10\"></p-multiSelect>\r\n                </div>\r\n            </div>\r\n  \r\n            <div class=\"p-grid p-justify-end\" [ngStyle]=\"{'width': '100%', 'height': '100%'}\">\r\n                <button pButton type=\"submit\" label=\"Salvar\" class=\"ui-button-rounded ui-button-success\" \r\n                [ngStyle]=\"{'width': '15%', 'height': '40%', 'margin': '3px'}\" icon=\"pi pi-save\" iconPos=\"right\" (click)=\"atualizarUser()\"></button>\r\n            </div>\r\n  \r\n          </div>\r\n        </form>\r\n      </div>\r\n      \r\n    </p-panel>    \r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/core/pages/update-usuario/update-usuario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/update-usuario/update-usuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUsuarioComponent", function() { return UpdateUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/formcadastro.service */ "./src/app/services/formcadastro.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/role */ "./src/app/models/role.ts");
/* harmony import */ var src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/form-cadastro-logica.service */ "./src/app/services/form-cadastro-logica.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateUsuarioComponent = /** @class */ (function () {
    function UpdateUsuarioComponent(formcadastro, messageService, formCadastroLogica) {
        this.formcadastro = formcadastro;
        this.messageService = messageService;
        this.formCadastroLogica = formCadastroLogica;
        this.usuarioForm = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.results = [];
        this.resultsLogin = [];
        this.showForm = false;
        this.showLoad = false;
    }
    UpdateUsuarioComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    UpdateUsuarioComponent.prototype.atualizarUser = function () {
        var _this = this;
        if (this.usuarioForm.nome != null && this.usuarioForm.nome.length != 0
            && this.usuarioForm.sobrenome && this.usuarioForm.sobrenome.length != 0
            && this.usuarioForm.telefone != null && this.usuarioForm.telefone.length != 0
            && this.usuarioForm.cpf != null && this.usuarioForm.cpf.length != 0
            && this.usuarioForm.login != null && this.usuarioForm.login.length != 0
            && this.confirmarNickName == this.usuarioForm.login) {
            console.log(this.usuarioForm);
            this.formcadastro.createOrUpdateUsuer(this.usuarioForm).subscribe(function (data) {
                console.log(data);
                _this.messageService.add({ key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!' });
            });
        }
        else {
            this.messageService.add({ key: 'popup', severity: 'error', summary: 'Erro!', detail: 'Erro ao realizar alterações!' });
            return;
        }
    };
    UpdateUsuarioComponent.prototype.getRoles = function () {
        var _this = this;
        var items = [];
        this.formcadastro.getRoles().subscribe(function (data) {
            for (var _i = 0; _i < data['data'].length; _i++) {
                _this.item = new src_app_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"]();
                _this.item.id = (data['data'][_i].id);
                _this.item.nivel = (data['data'][_i].nivel);
                _this.item.profile = (data['data'][_i].profile);
                items.push(_this.item);
            }
            _this.selectRoles = items;
        });
    };
    UpdateUsuarioComponent.prototype.getUser = function (dado) {
        var _this = this;
        this.showLoad = true;
        this.showForm = false;
        if (dado == false) {
            this.formcadastro.getLogin(this.nickname).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    _this.confirmarNickName = _this.usuarioForm.login;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
        else if (dado == true) {
            var slice = this.usuario.indexOf(' ');
            this.formcadastro.getNome(this.usuario.slice(0, slice)).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var dadosBaixados = event.body['data'][0];
                    _this.usuarioForm = dadosBaixados;
                    _this.usuarioForm.password = null;
                    _this.confirmarNickName = _this.usuarioForm.login;
                    setTimeout(function () {
                        _this.showLoad = false;
                        _this.showForm = true;
                    }, 500);
                }
            });
        }
    };
    UpdateUsuarioComponent.prototype.searchNome = function (event) {
        var _this = this;
        this.formcadastro.getUsers(event.query).then(function (data) {
            _this.results = _this.formCadastroLogica.filtroClientePorNome(event.query, data['data']);
        });
    };
    UpdateUsuarioComponent.prototype.searchLogin = function (event) {
        var _this = this;
        this.formcadastro.getNick(event.query).then(function (data) {
            _this.resultsLogin = _this.formCadastroLogica.filtroClientePorLogin(event.query, data['data']);
        });
    };
    UpdateUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-usuario',
            template: __webpack_require__(/*! ./update-usuario.component.html */ "./src/app/core/pages/update-usuario/update-usuario.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
            styles: [__webpack_require__(/*! ./update-usuario.component.css */ "./src/app/core/pages/update-usuario/update-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__["FormcadastroService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            src_app_services_form_cadastro_logica_service__WEBPACK_IMPORTED_MODULE_5__["FormCadastroLogicaService"]])
    ], UpdateUsuarioComponent);
    return UpdateUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/directive/calendar-utc.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directive/calendar-utc.directive.ts ***!
  \*****************************************************/
/*! exports provided: CalendarUTCDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUTCDirective", function() { return CalendarUTCDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarUTCDirective = /** @class */ (function () {
    function CalendarUTCDirective() {
    }
    CalendarUTCDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCalendarUTC]'
        }),
        __metadata("design:paramtypes", [])
    ], CalendarUTCDirective);
    return CalendarUTCDirective;
}());



/***/ }),

/***/ "./src/app/directive/maskInput.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/maskInput.directive.ts ***!
  \**************************************************/
/*! exports provided: PrimeNgCalendarMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNgCalendarMaskDirective", function() { return PrimeNgCalendarMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimeNgCalendarMaskDirective = /** @class */ (function () {
    function PrimeNgCalendarMaskDirective(el, host) {
        this.el = el;
        this.host = host;
        this.firstTime = true;
        this.mask = '';
    }
    PrimeNgCalendarMaskDirective_1 = PrimeNgCalendarMaskDirective;
    PrimeNgCalendarMaskDirective.isNumeric = function (s) {
        if (s === ' ') {
            return false;
        }
        return !isNaN(Number(s));
    };
    PrimeNgCalendarMaskDirective.isAlpha = function (s) {
        return s.match(/^[a-z]+$/i) !== null;
    };
    PrimeNgCalendarMaskDirective.prototype.ngOnInit = function () {
        this.input = this.host.inputfieldViewChild;
        this.setMask();
    };
    PrimeNgCalendarMaskDirective.prototype.setMask = function () {
        if (!this.host.timeOnly) {
            var dateFormat = this.host.dateFormat;
            for (var _i = 0, dateFormat_1 = dateFormat; _i < dateFormat_1.length; _i++) {
                var dateFormatItem = dateFormat_1[_i];
                if (dateFormatItem === 'd' || dateFormatItem === 'm' || dateFormatItem === 'y') {
                    this.mask += '9';
                    if (dateFormatItem === 'y') {
                        this.mask += '9';
                    }
                }
                else {
                    this.mask += dateFormatItem;
                }
            }
        }
        if (this.host.showTime || this.host.timeOnly) {
            if (!this.host.timeOnly) {
                this.mask += ' ';
            }
            this.mask += '99:99';
            if (this.host.showSeconds) {
                this.mask += ':99';
            }
        }
    };
    PrimeNgCalendarMaskDirective.prototype.onInput = function () {
        if (this.input === null) {
            this.input = this.host.inputfieldViewChild;
        }
        this.oldValue = this.value;
        this.value = this.input.nativeElement.value;
        if (!this.value) {
            return;
        }
        this.maskValue();
    };
    PrimeNgCalendarMaskDirective.prototype.maskValue = function () {
        var maskedValue = '';
        var dif = 0;
        var caretDif = 0;
        for (var i = 0; i < this.mask.length && this.value.length !== i; i++) {
            var maskChar = this.mask.charAt(i + dif);
            var valueChar = this.value.charAt(i);
            if (!PrimeNgCalendarMaskDirective_1.isAlpha(valueChar)
                && !PrimeNgCalendarMaskDirective_1.isNumeric(valueChar)
                && valueChar !== maskChar) {
                this.value = this.value.substring(0, i) + this.value.substring(i + 1);
                i--;
                caretDif++;
            }
            else if (maskChar === '9') {
                if (PrimeNgCalendarMaskDirective_1.isNumeric(valueChar)) {
                    maskedValue += valueChar;
                }
                else {
                    this.value = this.value.substring(0, i) + this.value.substring(i + 1);
                    i--;
                }
            }
            else if (maskChar === 'A') {
                if (PrimeNgCalendarMaskDirective_1.isAlpha(this.value.charAt(i - dif))) {
                    maskedValue += valueChar;
                }
                else {
                    this.value = this.value.substring(0, i) + this.value.substring(i + 1);
                    i--;
                }
            }
            else if (maskChar !== valueChar && maskedValue.charAt(i + dif) !== maskChar) {
                maskedValue += maskChar;
                dif++;
                i--;
            }
            else {
                maskedValue += maskChar;
            }
        }
        this.caretPos = this.getUpdatedCaretPos(maskedValue);
        this.value = maskedValue;
        this.updateInput();
    };
    PrimeNgCalendarMaskDirective.prototype.updateInput = function () {
        this.input.nativeElement.value = this.value;
        this.input.nativeElement.selectionStart = this.caretPos;
        this.input.nativeElement.selectionEnd = this.caretPos;
        if (this.value.length === this.mask.length) {
            try {
                var date = this.host.parseValueFromString(this.value);
                if (this.host.isSelectable(date.getDate(), date.getMonth(), date.getFullYear(), false)) {
                    this.host.updateModel(date);
                }
            }
            catch (err) {
                this.host.updateModel(null);
            }
        }
    };
    PrimeNgCalendarMaskDirective.prototype.getUpdatedCaretPos = function (maskedValue) {
        var caretPos = this.getCaretPos();
        if (caretPos === this.input.nativeElement.value.length) {
            caretPos = maskedValue.length;
        }
        else if (this.oldValue !== maskedValue) {
            while (caretPos < this.value.length &&
                this.mask.charAt(caretPos) !== '9' &&
                this.mask.charAt(caretPos) !== 'A') {
                caretPos++;
            }
        }
        else {
            caretPos--;
        }
        return caretPos;
    };
    PrimeNgCalendarMaskDirective.prototype.getCaretPos = function () {
        return this.input.nativeElement.selectionStart;
    };
    PrimeNgCalendarMaskDirective.prototype.ngAfterViewChecked = function () {
        if (this.firstTime && this.host && this.host.inputfieldViewChild) {
            this.firstTime = false;
            this.input = this.host.inputfieldViewChild;
        }
    };
    var PrimeNgCalendarMaskDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PrimeNgCalendarMaskDirective.prototype, "onInput", null);
    PrimeNgCalendarMaskDirective = PrimeNgCalendarMaskDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[rPCalendarMask]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["Calendar"]])
    ], PrimeNgCalendarMaskDirective);
    return PrimeNgCalendarMaskDirective;
}());



/***/ }),

/***/ "./src/app/guards/analise.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/analise.guard.ts ***!
  \*****************************************/
/*! exports provided: AnaliseGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseGuard", function() { return AnaliseGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnaliseGuard = /** @class */ (function () {
    function AnaliseGuard(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
    }
    AnaliseGuard.prototype.canActivate = function (next, state) {
        if (((this.sharedService.temporario != null) && (this.sharedService.temporario.length != 0)) ||
            (sessionStorage.getItem('ANALISESELECIONADA') != 'undefined' && sessionStorage.getItem('ANALISESELECIONADA') != null)) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    AnaliseGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnaliseGuard);
    return AnaliseGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isUsuarioAutenticado()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/cadastro.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/cadastro.guard.ts ***!
  \******************************************/
/*! exports provided: CadastroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroGuard", function() { return CadastroGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroGuard = /** @class */ (function () {
    function CadastroGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CadastroGuard.prototype.canActivateChild = function (next, state) {
        if (this.authService.isUsuarioAutenticado()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    CadastroGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CadastroGuard);
    return CadastroGuard;
}());



/***/ }),

/***/ "./src/app/models/HistoricoAnalise.ts":
/*!********************************************!*\
  !*** ./src/app/models/HistoricoAnalise.ts ***!
  \********************************************/
/*! exports provided: HistoricoAnalise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoAnalise", function() { return HistoricoAnalise; });
var HistoricoAnalise = /** @class */ (function () {
    function HistoricoAnalise() {
    }
    return HistoricoAnalise;
}());



/***/ }),

/***/ "./src/app/models/HistoricoSimples.ts":
/*!********************************************!*\
  !*** ./src/app/models/HistoricoSimples.ts ***!
  \********************************************/
/*! exports provided: HistoricoSimples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoSimples", function() { return HistoricoSimples; });
var HistoricoSimples = /** @class */ (function () {
    function HistoricoSimples(id, nomeCliente, codCadastro, nContrato, numProposta, area, status, subStatus, atividade, obs) {
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.area = area;
        this.codCadastro = codCadastro;
        this.nContrato = nContrato;
        this.numProposta = numProposta;
        this.subStatus = subStatus;
        this.status = status;
        this.atividade = atividade;
        this.obs = obs;
    }
    return HistoricoSimples;
}());



/***/ }),

/***/ "./src/app/models/analise.ts":
/*!***********************************!*\
  !*** ./src/app/models/analise.ts ***!
  \***********************************/
/*! exports provided: Analise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analise", function() { return Analise; });
var Analise = /** @class */ (function () {
    function Analise() {
    }
    return Analise;
}());



/***/ }),

/***/ "./src/app/models/cadastro-informacao.ts":
/*!***********************************************!*\
  !*** ./src/app/models/cadastro-informacao.ts ***!
  \***********************************************/
/*! exports provided: CadastroInformacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroInformacao", function() { return CadastroInformacao; });
var CadastroInformacao = /** @class */ (function () {
    function CadastroInformacao() {
    }
    return CadastroInformacao;
}());



/***/ }),

/***/ "./src/app/models/compradores.ts":
/*!***************************************!*\
  !*** ./src/app/models/compradores.ts ***!
  \***************************************/
/*! exports provided: Compradores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compradores", function() { return Compradores; });
var Compradores = /** @class */ (function () {
    function Compradores() {
        this.principal = false;
    }
    return Compradores;
}());



/***/ }),

/***/ "./src/app/models/contatos.ts":
/*!************************************!*\
  !*** ./src/app/models/contatos.ts ***!
  \************************************/
/*! exports provided: Contatos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contatos", function() { return Contatos; });
var Contatos = /** @class */ (function () {
    function Contatos() {
    }
    return Contatos;
}());



/***/ }),

/***/ "./src/app/models/dadosfaturamento.ts":
/*!********************************************!*\
  !*** ./src/app/models/dadosfaturamento.ts ***!
  \********************************************/
/*! exports provided: DadosFaturamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosFaturamento", function() { return DadosFaturamento; });
var DadosFaturamento = /** @class */ (function () {
    function DadosFaturamento() {
    }
    return DadosFaturamento;
}());



/***/ }),

/***/ "./src/app/models/instituicaoFinanceira.ts":
/*!*************************************************!*\
  !*** ./src/app/models/instituicaoFinanceira.ts ***!
  \*************************************************/
/*! exports provided: InstiruicaoFinanceiras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstiruicaoFinanceiras", function() { return InstiruicaoFinanceiras; });
var InstiruicaoFinanceiras = /** @class */ (function () {
    function InstiruicaoFinanceiras() {
    }
    return InstiruicaoFinanceiras;
}());



/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/models/simulacoes.ts":
/*!**************************************!*\
  !*** ./src/app/models/simulacoes.ts ***!
  \**************************************/
/*! exports provided: Simulacoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simulacoes", function() { return Simulacoes; });
var Simulacoes = /** @class */ (function () {
    function Simulacoes() {
    }
    return Simulacoes;
}());



/***/ }),

/***/ "./src/app/models/spe.ts":
/*!*******************************!*\
  !*** ./src/app/models/spe.ts ***!
  \*******************************/
/*! exports provided: SPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPE", function() { return SPE; });
var SPE = /** @class */ (function () {
    function SPE() {
    }
    return SPE;
}());



/***/ }),

/***/ "./src/app/models/status-simulacao.ts":
/*!********************************************!*\
  !*** ./src/app/models/status-simulacao.ts ***!
  \********************************************/
/*! exports provided: StatusSimulacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusSimulacao", function() { return StatusSimulacao; });
var StatusSimulacao = /** @class */ (function () {
    function StatusSimulacao() {
    }
    return StatusSimulacao;
}());



/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/modules/template/components/content/content.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/template/components/content/content.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header{\r\n    position: fixed;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    padding-top: 0;\r\n}\r\n\r\n.center {\r\n    min-width: 1024px;\r\n    width: 100%;\r\n    min-height: 600px;\r\n    /* height: 82vh; */\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n}\r\n\r\n.footers {\r\n    position: fixed;\r\n    width: 99.1%;\r\n    left: 0;\r\n    bottom: 0;\r\n    text-align: center;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    background-color: #ffff;\r\n    margin-left: 7px;\r\n    margin-right: 70px;\r\n    margin-bottom: -20px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZW1wbGF0ZS9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlbXBsYXRlL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1pbi13aWR0aDogMTAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIC8qIGhlaWdodDogODJ2aDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5mb290ZXJzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA5OS4xJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/template/components/content/content.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/template/components/content/content.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui-g\" *ngIf=\"mostrarMenu\" >\r\n    <br><br><br>\r\n    <div class=\"ui-g-12 header\" [ngStyle]=\"{'z-index': '1'}\">\r\n        <app-menu-bar></app-menu-bar>\r\n    </div>\r\n    <div class=\"ui-g-12 center\">\r\n        <div >\r\n            <app-main></app-main>\r\n        </div >\r\n    </div>\r\n    <div class=\"ui-g-12 footers\">\r\n        <div >\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-login  *ngIf=\"!mostrarMenu\" ></app-login>\r\n"

/***/ }),

/***/ "./src/app/modules/template/components/content/content.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/template/components/content/content.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(authService) {
        this.authService = authService;
        this.mostrarMenu = false;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.mostrarsistema.subscribe(function (mostrar) { return _this.mostrarMenu = mostrar; });
        if (this.authService.isUsuarioAutenticado()) {
            this.mostrarMenu = true;
        }
    };
    ContentComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.mostrarsistema.subscribe(function (mostrar) { return _this.mostrarMenu = mostrar; });
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/modules/template/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/modules/template/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/footer/footer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/template/components/footer/footer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVtcGxhdGUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/template/components/footer/footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/template/components/footer/footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <p>\r\n      Montreal Informática  &#174;\t Todos os direitos reservados\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/template/components/footer/footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/template/components/footer/footer.component.ts ***!
  \************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/template/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/modules/template/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/template/components/header-menu-bar/menu-bar.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.menubarstyle{\r\n  z-index: 10;\r\n}\r\n\r\nh6 {\r\n    position: relative;\r\n    -webkit-transform: translateY(30%);\r\n            transform: translateY(30%); \r\n    background-color: brown;\r\n    color: aliceblue;\r\n    border-color:#CCCCCC;\r\n    border-radius: 20px;\r\n    \r\n    margin:-15px 30px 0 15px;\r\n    padding-left: 10px;\r\n    z-index: 12;\r\n  }\r\n\r\n.buttoncss {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-color: azure;\r\n    border-radius: 30px;   \r\n    z-index: 13;\r\n}\r\n\r\n#objeto{\r\n  width: 120px;\r\n  position: absolute;\r\n  right:70px;\r\n  top: 25px;\r\n  z-index: 11;\r\n  border-radius: 0 0 20px 20px;\r\n  \r\n}\r\n\r\n/**\r\n-----------------------------------------------------\r\n*/\r\n\r\n#sidebar-wrapper {\r\n  background-color: brown;\r\n  color: white;\r\n  position: relative;\r\n  height: 100%;\r\n  margin-top: 20px;\r\n  z-index: 1;\r\n}\r\n\r\n.sidebar-nav {\r\n  position: relative;\r\n  top: 10px;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 290px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n  text-indent: 20px;\r\n  line-height: 50px;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.sidebar-nav li a {\r\n  color: white;\r\n  display: block;\r\n  text-decoration: none;\r\n  border-radius: 10px 10px 10px 10px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  background: rgba(255,255,255,0.25);\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n#sidebar-wrapper.sidebar-toggle {\r\n  transition: all 0.3s ease-out;\r\n  margin-left: -200px;\r\n  margin-right: 190px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper.sidebar-toggle {\r\n    transition: 0s;\r\n    left: 200px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZW1wbGF0ZS9jb21wb25lbnRzL2hlYWRlci1tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCw0QkFBNEI7O0FBRTlCOztBQUNBOztDQUVDOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTs7QUFFakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyLW1lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1lbnViYXJzdHlsZXtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuaDYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSk7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNDQ0NDQ0M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW46LTE1cHggMzBweCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMjtcclxuICB9XHJcbiAgLmJ1dHRvbmNzcyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogYXp1cmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgIFxyXG4gICAgei1pbmRleDogMTM7XHJcbn1cclxuXHJcblxyXG4jb2JqZXRve1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6NzBweDtcclxuICB0b3A6IDI1cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcclxuICBcclxufVxyXG4vKipcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2lkZWJhci1uYXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNpZGViYXItbmF2IGxpIHtcclxuICB0ZXh0LWluZGVudDogMjBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbi5zaWRlYmFyLW5hdiBsaSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLnNpZGViYXItbmF2IGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuI3NpZGViYXItd3JhcHBlci5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE5MHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICNzaWRlYmFyLXdyYXBwZXIuc2lkZWJhci10b2dnbGUge1xyXG4gICAgdHJhbnNpdGlvbjogMHM7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/template/components/header-menu-bar/menu-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menubar  [model]=\"items\"  class=\"menubarstyle\" >\r\n     <h6   #mushroom2 > {{nomeUsuario}}  \r\n        <button (click)=\"doIt()\" class=\"buttoncss\" >\r\n           <i class=\"fa fa-user\"></i>\r\n        </button>\r\n     </h6>\r\n     <div  id=\"objeto\" #mushroom style=\"background-color: brown; width: 100px\">\r\n\r\n      <nav #navmenuuser class=\"navbar navbar-default\" role=\"navigation\" style=\"display: none\" >\r\n            <div #navmenuuser  id=\"sidebar-wrapper\" class=\"sidebar-toggle\">\r\n               <img #navmenuuser  src=\"../../../../../assets/imagens/montreal_logo_slin.png\" height=\"100\" width=\"300\"  > \r\n               <ul #navmenuuser  class=\"sidebar-nav\">\r\n                   <li>\r\n                        <a (click)=\"trocarSenha()\" ><i class=\"fa fa-user\"></i> TROCAR SENHA</a>\r\n                   </li>\r\n                   <li>\r\n                        <a (click)=\"logOut()\"> <i class=\"fa fa-times\"></i> SAIR</a>\r\n                   </li>\r\n                 </ul>\r\n            </div>\r\n      </nav>\r\n     </div>\r\n</p-menubar>\r\n\r\n<p-dialog header=\"Buscar Cadastro\" [(visible)]=\"display\" [draggable]=\"false\" positionTop=\"100\" width=\"750\" [contentStyle]=\"{'height':'500px'}\">\r\n  \r\n                <div class=\"ui-inputgroup\">\r\n                    <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                    <p-autoComplete [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorNome($event)\" field=\"nomecliente\"  placeholder=\"Nome\"\r\n                     id=\"idBuscaNome\" size=\"90\" [minLength]=\"3\" (onBlur)=\"blurNomeSelect($event)\"\r\n                      [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n                    <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorNome($event)\"></p-button>\r\n                </div>\r\n                <p-messages [(value)]=\"msgsNome\"></p-messages>\r\n\r\n               <br>\r\n                <div class=\"ui-inputgroup\" >\r\n                    <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                    <p-autoComplete  [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorCPF($event)\" field=\"cpfcnpj\"  placeholder=\"CPF\"\r\n                    id=\"idBuscacpf\" size=\"90\" (onBlur)=\"blurCPFSelect($event)\" ngModel [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n                    <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorCPF($event)\"></p-button>        \r\n                </div>\r\n                <p-messages [(value)]=\"msgsCpf\"></p-messages>\r\n\r\n               <br>\r\n               <br>\r\n               <div class=\"p-grid p-justify-center p-align-center vertical-container\">\r\n               <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 5em\" [hidden]=\"!loadSpin\"></i>\r\n               </div>\r\n\r\n               <div [hidden]=\"loadSpin\">\r\n                    <p-table [value]=\"cadastrosTabelaBusca\"   >\r\n                        <ng-template pTemplate=\"header\">\r\n                             <tr>\r\n                                  <th>Cod cadastro</th>\r\n                                  <th>Fid</th>\r\n                                  <th>Endereço</th>\r\n                                  <th>Cidade</th>\r\n                                  <th>Número</th>\r\n                                  <th></th>\r\n                              </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-cadastro>\r\n                             <tr>\r\n                                  <td>{{cadastro.codcadastro}}</td>\r\n                                  <td>{{cadastro.numerocadastroincorporadorafid}}</td>\r\n                                  <td>{{cadastro.endereco}}</td>\r\n                                  <td>{{cadastro.cidade}}</td>\r\n                                  <td>{{cadastro.numero}}</td>\r\n                                  <td><p-button label=\"IR >>\" (onClick)=\"irCadastro(cadastro.codcadastro)\" ></p-button></td>\r\n                              </tr>\r\n                        </ng-template>\r\n                    </p-table>\r\n                </div>\r\n </p-dialog>\r\n\r\n\r\n <p-dialog header=\"Buscar Analise\" [(visible)]=\"displayAnalise\" [draggable]=\"false\" positionTop=\"100\" width=\"750\" [contentStyle]=\"{'height':'500px'}\">\r\n  \r\n     <div class=\"ui-inputgroup\">\r\n         <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n         <p-autoComplete [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorNome($event)\" field=\"nomecliente\"  placeholder=\"Nome\"\r\n          id=\"idBuscaNome\" size=\"90\" [minLength]=\"3\" (onBlur)=\"blurNomeSelect($event)\"\r\n           [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n         <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorNome($event)\"></p-button>\r\n     </div>\r\n     <p-messages [(value)]=\"msgsNome\"></p-messages>\r\n    <br>\r\n     <div class=\"ui-inputgroup\" >\r\n         <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n         <p-autoComplete  [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorCPF($event)\" field=\"cpfcnpj\"  placeholder=\"CPF\"\r\n         id=\"idBuscacpf\" size=\"90\" (onBlur)=\"blurCPFSelect($event)\" ngModel [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n         <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorCPF($event)\"></p-button>        \r\n     </div>\r\n     <p-messages [(value)]=\"msgsCpf\"></p-messages>\r\n    <br>\r\n    <br>\r\n        <div class=\"p-grid p-justify-center p-align-center vertical-container\">\r\n        <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 5em\" [hidden]=\"!loadSpin\"></i>\r\n        </div>\r\n\r\n        <div [hidden]=\"loadSpin\">\r\n            <p-table   [value]=\"cadastrosTabelaBusca\"   >\r\n                <ng-template pTemplate=\"header\">\r\n                     <tr>\r\n                          <th>Cod cadastro</th>\r\n                          <th>Fid</th>\r\n                          <th>Endereço</th>\r\n                          <th>Cidade</th>\r\n                          <th>Número</th>\r\n                          <th></th>\r\n                      </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-cadastro>\r\n                     <tr>\r\n                          <td>{{cadastro.codcadastro}}</td>\r\n                          <td>{{cadastro.numerocadastroincorporadorafid}}</td>\r\n                          <td>{{cadastro.endereco}}</td>\r\n                          <td>{{cadastro.cidade}}</td>\r\n                          <td>{{cadastro.numero}}</td>\r\n                          <td><p-button label=\"IR >>\" (onClick)=\"irAnalise(cadastro.codcadastro)\" ></p-button></td>\r\n                      </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </div>\r\n\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Buscar Informações\" [(visible)]=\"displayInfo\" [draggable]=\"false\" positionTop=\"100\" width=\"750\" [contentStyle]=\"{'height':'500px'}\">\r\n  \r\n    <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <p-autoComplete [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorNome($event)\" field=\"nomecliente\"  placeholder=\"Nome\"\r\n         id=\"idBuscaNome\" size=\"90\" [minLength]=\"3\" (onBlur)=\"blurNomeSelect($event)\"\r\n          [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n        <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorNomeInfo($event)\"></p-button>\r\n    </div>\r\n    <p-messages [(value)]=\"msgsNome\"></p-messages>\r\n   <br>\r\n    <div class=\"ui-inputgroup\" >\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <p-autoComplete  [suggestions]=\"nomeClienteFiltrado\" (completeMethod)=\"searchPorCPF($event)\" field=\"cpfcnpj\"  placeholder=\"CPF\"\r\n        id=\"idBuscacpf\" size=\"90\" (onBlur)=\"blurCPFSelect($event)\" ngModel [inputStyle]=\"{'width': '100%'}\" [style]=\"{'width': '100%'}\"></p-autoComplete>\r\n        <p-button  icon=\"pi pi-search\" (onClick)=\"clickBuscaPorCPFInfo($event)\"></p-button>        \r\n    </div>\r\n    <p-messages [(value)]=\"msgsCpf\"></p-messages>\r\n   <br>\r\n   <br>\r\n        <div class=\"p-grid p-justify-center p-align-center vertical-container\">\r\n        <i class=\"pi pi-spin pi-spinner\" style=\"font-size: 5em\" [hidden]=\"!loadSpin\"></i>\r\n        </div>\r\n        \r\n        <div [hidden]=\"loadSpin\">\r\n            <p-table [value]=\"clienteInformacao\">\r\n                <ng-template pTemplate=\"header\">\r\n                     <tr>\r\n                          <th>Cod Cadastro</th>\r\n                          <th>Nome</th>\r\n                          <th>CPF</th>\r\n                          <th>Data nascimento</th>\r\n                          <th></th>\r\n                      </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-comprador>\r\n                     <tr>\r\n                          <td>{{codcadastro}}</td>\r\n                          <td>{{comprador.nomecliente}}</td>\r\n                          <td>{{comprador.cpfcnpj}}</td>\r\n                          <td>{{dataNascimento}}</td>\r\n                          <td><p-button label=\"IR >>\" (onClick)=\"irInformacoes()\"></p-button></td>\r\n                      </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </div>\r\n\r\n</p-dialog>\r\n \r\n<p-toast [style]=\"{marginTop: '80px'}\" position=\"top-center\" key=\"er\" [baseZIndex]=\"100\" ></p-toast>\r\n<p-toast [style]=\"{marginTop: '80px'}\" key=\"ok\"></p-toast>"

/***/ }),

/***/ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/template/components/header-menu-bar/menu-bar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cadastro-chamadas.service */ "./src/app/services/cadastro-chamadas.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var _brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @brazilian-utils/format-cpf */ "./node_modules/@brazilian-utils/format-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @brazilian-utils/format-cnpj */ "./node_modules/@brazilian-utils/format-cnpj/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brazilian-utils/is-valid-cpf */ "./node_modules/@brazilian-utils/is-valid-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @brazilian-utils/is-valid-cnpj */ "./node_modules/@brazilian-utils/is-valid-cnpj/dist/index.m.js");
/* harmony import */ var _brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @brazilian-utils/helper-only-numbers */ "./node_modules/@brazilian-utils/helper-only-numbers/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(router, authService, messageService, analiseService, chamadasService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.analiseService = analiseService;
        this.chamadasService = chamadasService;
        this.sharedService = sharedService;
        this.display = false;
        this.displayAnalise = false;
        this.displayInfo = false;
        this.loadSpin = false;
        this.msgsNome = [];
        this.msgsCpf = [];
        this.conts = false;
        authService.shared.messengerService = messageService;
        this.nomeUsuario = localStorage.getItem('nome_usuario');
        this.profileUser = localStorage.getItem('profile');
    }
    MenuBarComponent.prototype.blurNomeSelect = function (item) {
        this.nomeclienteSelecionado = item.target.value;
    };
    MenuBarComponent.prototype.blurCPFSelect = function (item) {
        this.cpfclienteSelecionado = item.target.value;
    };
    MenuBarComponent.prototype.clickBuscaPorNome = function (event) {
        var _this = this;
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(this.nomeclienteSelecionado, null).subscribe(function (data) {
            _this.msgsNome = [];
            _this.cadastrosTabelaBusca = data['data'];
            setTimeout(function () {
                _this.loadSpin = !_this.loadSpin;
            }, 500);
        }, function (error) {
            _this.msgsNome = [];
            _this.msgsNome.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: "N\u00E3o foi encontrado nenhum cadastro com o nome: <strong>" + _this.nomeclienteSelecionado + "</strong>. Verifique e tente novamente."
            });
            _this.loadSpin = !_this.loadSpin;
        });
    };
    MenuBarComponent.prototype.clickBuscaPorNomeInfo = function (event) {
        var _this = this;
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(this.nomeclienteSelecionado, null).subscribe(function (data) {
            _this.msgsNome = [];
            _this.cadastrosTabelaBuscaInfo = data['data'];
            for (var i = 0; i < _this.cadastrosTabelaBuscaInfo.length; i++) {
                _this.codcadastro = _this.cadastrosTabelaBuscaInfo[i].codcadastro;
                for (var item = 0; item < _this.cadastrosTabelaBuscaInfo[i].clientes.length; item++) {
                    if (_this.nomeclienteSelecionado == _this.cadastrosTabelaBuscaInfo[i].clientes[item].nomecliente) {
                        var data_1 = _this.cadastrosTabelaBuscaInfo[i].clientes[item].datanascimento;
                        data_1 = new Date(data_1);
                        data_1.toUTCString();
                        _this.dataNascimento = _this.fixUTC(data_1);
                        _this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj = _this.formatCpfCnpj(_this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj);
                        _this.clienteInformacao = [_this.cadastrosTabelaBuscaInfo[i].clientes[item]];
                    }
                }
            }
            setTimeout(function () {
                _this.loadSpin = !_this.loadSpin;
            }, 500);
            console.log(_this.clienteInformacao);
        }, function (error) {
            _this.msgsNome = [];
            _this.msgsNome.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: "N\u00E3o foi encontrado nenhum cadastro com o nome: <strong>" + _this.nomeclienteSelecionado + "</strong>. Verifique e tente novamente."
            });
            _this.loadSpin = !_this.loadSpin;
        });
    };
    MenuBarComponent.prototype.clickBuscaPorCPFInfo = function (event) {
        var _this = this;
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(null, Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_12__["default"])(this.cpfclienteSelecionado)).subscribe(function (data) {
            _this.msgsCpf = [];
            _this.cadastrosTabelaBuscaInfo = data['data'];
            for (var i = 0; i < _this.cadastrosTabelaBuscaInfo.length; i++) {
                _this.codcadastro = _this.cadastrosTabelaBuscaInfo[i].codcadastro;
                for (var item = 0; item < _this.cadastrosTabelaBuscaInfo[i].clientes.length; item++) {
                    if (Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.cpfclienteSelecionado) == _this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj) {
                        var data_2 = _this.cadastrosTabelaBuscaInfo[i].clientes[item].datanascimento;
                        data_2 = new Date(data_2);
                        data_2.toUTCString();
                        _this.dataNascimento = _this.fixUTC(data_2);
                        _this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj = _this.formatCpfCnpj(_this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj);
                        _this.clienteInformacao = [_this.cadastrosTabelaBuscaInfo[i].clientes[item]];
                    }
                }
            }
            setTimeout(function () {
                _this.loadSpin = !_this.loadSpin;
            }, 500);
            console.log(_this.clienteInformacao);
        }, function (error) {
            _this.msgsCpf = [];
            _this.msgsCpf.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: "N\u00E3o foi encontrado nenhum cadastro com o CPF: <strong>" + _this.cpfclienteSelecionado + "</strong>. Verifique e tente novamente."
            });
            _this.loadSpin = !_this.loadSpin;
        });
    };
    MenuBarComponent.prototype.clickBuscaPorCPF = function (event) {
        var _this = this;
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(null, Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_12__["default"])(this.cpfclienteSelecionado)).subscribe(function (data) {
            _this.cadastrosTabelaBusca = data['data'];
            setTimeout(function () {
                _this.loadSpin = !_this.loadSpin;
            }, 500);
        }, function (error) {
            _this.msgsCpf = [];
            _this.msgsCpf.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: "N\u00E3o foi encontrado nenhum cadastro com o CPF: <strong>" + _this.cpfclienteSelecionado + "</strong>. Verifique e tente novamente."
            });
            _this.loadSpin = !_this.loadSpin;
        });
    };
    MenuBarComponent.prototype.searchPorNome = function (event) {
        var _this = this;
        var query = event.query;
        this.chamadasService.getBuscaNomeClienteCadastrado(query).then(function (clienteQuery) {
            _this.nomeClienteFiltrado = _this.filtroClientePorNome(query, clienteQuery['data']);
        });
    };
    MenuBarComponent.prototype.irCadastro = function (codcadastro) {
        var session = sessionStorage.getItem('CADASTROSELECIONADO');
        if (session !== null || undefined || 'undefined') {
            sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
        }
        for (var i = 0; i < this.cadastrosTabelaBusca.length; i++) {
            if (codcadastro == this.cadastrosTabelaBusca[i].codcadastro) {
                sessionStorage.setItem('CADASTROSELECIONADO', JSON.stringify(this.cadastrosTabelaBusca[i]));
            }
        }
        this.hideDialog();
        this.chamadasService.buscarCadastro.emit(true);
        this.router.navigate(['/cadastro']);
    };
    MenuBarComponent.prototype.irInformacoes = function () {
        var _this = this;
        var storage = ['CADASTRODADOS', 'ANALISEDADOS', 'fid', 'CADASTROINFO'];
        for (var i = 0; i < storage.length; i++) {
            if (sessionStorage.getItem(storage[i]) !== null || undefined || 'undefined') {
                sessionStorage.removeItem(storage[i]);
            }
        }
        for (var i = 0; i < this.cadastrosTabelaBuscaInfo.length; i++) {
            console.log(this.cadastrosTabelaBuscaInfo);
            sessionStorage.setItem('fid', JSON.stringify(this.cadastrosTabelaBuscaInfo[i].numerocadastroincorporadorafid));
            for (var item = 0; item < this.cadastrosTabelaBuscaInfo[i]['clientes'].length; item++) {
                if (this.clienteInformacao[0].nomecliente == this.cadastrosTabelaBuscaInfo[i]['clientes'][item].nomecliente) {
                    sessionStorage.setItem('CADASTROINFO', JSON.stringify(this.cadastrosTabelaBuscaInfo[i]));
                    sessionStorage.setItem('CADASTRODADOS', JSON.stringify(this.cadastrosTabelaBuscaInfo[i]['clientes'][item]));
                }
            }
            this.analiseService.getRegistroAnalise(this.codcadastro).subscribe(function (data) {
                var analise = data['data'][0];
                if (analise != undefined) {
                    for (var item = 0; item < analise.simulacoes.length; item++) {
                        if (analise.simulacoes[item].simulacaoselecionado == true) {
                            sessionStorage.setItem('ANALISEDADOS', JSON.stringify(analise.simulacoes[item]));
                        }
                    }
                }
                console.log(data);
                _this.router.navigate(['/informacoes']);
                _this.analiseService.buscarInformacoes.emit(true);
            });
            this.hideDialogInfo();
            this.sharedService.showLoader.emit(false);
        }
    };
    MenuBarComponent.prototype.irAnalise = function (codcadastro) {
        this.selectFor(codcadastro);
    };
    MenuBarComponent.prototype.selectFor = function (codcadastro) {
        var _this = this;
        if (src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance().temporario == null) {
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance().temporario = [];
        }
        for (var i = 0; i < this.cadastrosTabelaBusca.length; i++) {
            if (codcadastro == this.cadastrosTabelaBusca[i].codcadastro) {
                src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance().temporario[0] = this.cadastrosTabelaBusca[i].codcadastro;
                src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance().temporario[1] = this.cadastrosTabelaBusca[i].numerocadastroincorporadorafid;
                this.analiseService.getRegistroAnalise(codcadastro).subscribe(function (data) {
                    if (sessionStorage.getItem('ANALISESELECIONADA') !== null || undefined || 'undefined') {
                        sessionStorage.removeItem('ANALISESELECIONADA');
                    }
                    sessionStorage.setItem('ANALISESELECIONADA', JSON.stringify(data['data'][0]));
                    console.log(data);
                    _this.hideDialogDisplay();
                    if (_this.router.url == '/analise') {
                        _this.analiseService.buscarAnalise.emit(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance().temporario);
                    }
                    else {
                        _this.router.navigate(['/analise']);
                    }
                    _this.analiseService.controle = true;
                });
            }
        }
    };
    MenuBarComponent.prototype.filtroClientePorNome = function (query, clienteQuery) {
        var filtered = [];
        for (var i = 0; i < clienteQuery.length; i++) {
            // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i]);
            // }
        }
        return filtered;
    };
    MenuBarComponent.prototype.searchPorCPF = function (event) {
        var _this = this;
        var query = event.query;
        this.chamadasService.getBuscaCPFClienteCadastrado(query).then(function (clienteQuery) {
            _this.nomeClienteFiltrado = _this.filtroClientePorCPF(query, clienteQuery['data']);
        });
    };
    MenuBarComponent.prototype.filtroClientePorCPF = function (query, clienteQuery) {
        var filtered = [];
        for (var i = 0; i < clienteQuery.length; i++) {
            if (clienteQuery[i].cpfcnpj.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(clienteQuery[i]);
            }
        }
        return filtered;
    };
    MenuBarComponent.prototype.fixUTC = function (date) {
        var ano = date.getUTCFullYear();
        var mes = date.getUTCMonth();
        var dia = date.getUTCDate();
        var hora = date.getHours();
        var novaData = new Date(Date.UTC(ano, mes, dia, hora + 3));
        var dataString = novaData.toLocaleString('pt-BR');
        var dataSlice = dataString.indexOf(' ');
        return dataString.slice(0, dataSlice);
    };
    MenuBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsmenu = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Download', icon: 'pi pi-fw pi-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
                    { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }
                ]
            }];
        this.items = [
            {
                label: 'Home',
                routerLink: '/home',
                icon: 'pi pi-fw pi-home',
                visible: true
            },
            {
                label: 'Cadastro',
                routerLink: '/cadastro',
                icon: 'pi pi-fw pi-plus',
                visible: true,
                items: [
                    { label: 'Novo ', icon: 'pi pi-fw pi-plus', routerLink: '/cadastro' },
                    { label: 'Buscar', icon: 'pi pi-fw pi-search', command: function (event) {
                            _this.showDialog();
                            _this.hideDialogInfo();
                            _this.hideDialogDisplay();
                        } }
                ]
            },
            {
                label: 'Análise de crédito',
                icon: 'pi pi-fw pi-plus',
                visible: true,
                command: function (event) {
                    _this.showDialogDisplay();
                    _this.hideDialog();
                    _this.hideDialogInfo();
                },
                items: [
                    { label: 'Buscar', icon: 'pi pi-fw pi-search', command: function (event) {
                            _this.showDialogDisplay();
                            _this.hideDialog();
                            _this.hideDialogInfo();
                        } }
                ]
            },
            {
                label: 'Informações',
                icon: 'pi pi-fw pi-search',
                visible: true,
                command: function (event) {
                    _this.showDialogInfo();
                    _this.hideDialog();
                    _this.hideDialogDisplay();
                },
                items: [
                    { label: 'Buscar', icon: 'pi pi-fw pi-search', command: function (event) {
                            _this.showDialogInfo();
                            _this.hideDialog();
                            _this.hideDialogDisplay();
                        } }
                ]
            },
            {
                label: 'Relatorio',
                icon: 'pi pi-fw pi-search',
                items: [
                    { label: 'Agrupado', icon: 'pi pi-fw pi-search', routerLink: '/lista' },
                    { label: 'Graficos', icon: 'pi pi-fw pi-search', routerLink: '/chat' }
                ]
            },
            {
                visible: true,
                label: 'Administrador',
                icon: 'pi pi-fw pi-cog',
                routerLink: '/cadastrousuario',
                command: function (event) {
                    _this.hideDialogInfo();
                    _this.hideDialog();
                    _this.hideDialogDisplay();
                },
                items: [
                    {
                        label: 'Usuario',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Novo', icon: 'pi pi-fw pi-save', routerLink: '/cadastrousuario', command: function (event) {
                                    _this.hideDialogInfo();
                                    _this.hideDialog();
                                    _this.hideDialogDisplay();
                                } },
                            { label: 'Update', icon: 'pi pi-fw pi-save', routerLink: '/updateusuario' },
                            { label: 'Delete', icon: 'pi pi-fw pi-minus', routerLink: '/deleteusuario' },
                            { label: 'Reset', icon: 'pi pi-replay', routerLink: '/resetusuario' }
                        ]
                    }
                ]
            }
        ];
    };
    MenuBarComponent.prototype.showDialog = function () {
        this.display = true;
    };
    MenuBarComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    MenuBarComponent.prototype.showDialogDisplay = function () {
        this.displayAnalise = true;
    };
    MenuBarComponent.prototype.hideDialogDisplay = function () {
        this.displayAnalise = false;
    };
    MenuBarComponent.prototype.showDialogInfo = function () {
        this.displayInfo = true;
    };
    MenuBarComponent.prototype.hideDialogInfo = function () {
        this.displayInfo = false;
    };
    MenuBarComponent.prototype.logOut = function () {
        this.doIt();
        this.authService.fazerLogout();
    };
    MenuBarComponent.prototype.doIt = function () {
        if (this.conts) {
            this.conts = false;
            TweenMax.fromTo(this.box2.nativeElement, 1, { paddingLeft: 209 }, { paddingLeft: 0, delay: 0.5, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeOut });
            TweenMax.fromTo(this.navmenuuser.nativeElement, 0.3, { height: 'auto' }, { height: 0, display: 'none', ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeOut });
            TweenMax.fromTo(this.box.nativeElement, 0.5, { height: 'auto' }, { height: 0, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeOut });
        }
        else {
            this.conts = true;
            TweenMax.fromTo(this.box2.nativeElement, 1, { paddingLeft: 0 }, { paddingLeft: 209, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Back"].easeOut.config(1.7) });
            TweenMax.fromTo(this.box.nativeElement, 0.8, { height: 0 }, { height: 'auto', delay: 1, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Back"].easeOut.config(1.7) });
            TweenMax.fromTo(this.navmenuuser.nativeElement, 0.8, { height: 0 }, { height: 'auto', delay: 1, display: 'block', ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Back"].easeOut.config(1.7) });
            TweenMax.fromTo(this.box.nativeElement, 1.5, { width: 325 }, { width: 325, delay: 1, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Power1"].easeOut });
        }
    };
    MenuBarComponent.prototype.trocarSenha = function () {
        this.doIt();
        this.router.navigate(['/cadastrousuario']);
    };
    MenuBarComponent.prototype.showError = function () {
        this.authService.shared.messengerService.clear();
        this.authService.shared.messengerService.add({ key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação' });
    };
    MenuBarComponent.prototype.showConfirm = function () {
        this.authService.shared.messengerService.clear();
        this.authService.shared.messengerService.add({ key: 'ok', severity: 'success', summary: 'Ação Realizada', detail: 'Ação Realizada com Sucesso!' });
    };
    MenuBarComponent.prototype.formatCpfCnpj = function (cpfcnpj) {
        var cpf = Object(_brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_10__["default"])(cpfcnpj);
        var cnpj = Object(_brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_11__["default"])(cpfcnpj);
        if (cpf == true) {
            cpfcnpj = Object(_brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_8__["default"])(cpfcnpj);
        }
        else if (cnpj == true) {
            cpfcnpj = Object(_brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_9__["default"])(cpfcnpj);
        }
        return cpfcnpj;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mushroom'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuBarComponent.prototype, "box", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mushroom2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuBarComponent.prototype, "box2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navmenuuser'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuBarComponent.prototype, "navmenuuser", void 0);
    MenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-bar',
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: [__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            src_app_services_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_7__["AnaliseChamadasService"],
            src_app_services_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_5__["CadastroChamadasService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/main/main.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/template/components/main/main.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVtcGxhdGUvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/template/components/main/main.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/template/components/main/main.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n  "

/***/ }),

/***/ "./src/app/modules/template/components/main/main.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/template/components/main/main.component.ts ***!
  \********************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/template/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/modules/template/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/template.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/template/template.module.ts ***!
  \*****************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/modules/template/components/content/content.component.ts");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header-menu-bar/menu-bar.component */ "./src/app/modules/template/components/header-menu-bar/menu-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/template/components/footer/footer.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/template/components/main/main.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_3__["MenubarModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_8__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_15__["AutoCompleteModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"]
            ],
            declarations: [
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
                _components_header_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
            ],
            exports: [
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
            ],
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ }),

/***/ "./src/app/services/analise-chamadas.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/analise-chamadas.service.ts ***!
  \******************************************************/
/*! exports provided: AnaliseChamadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseChamadasService", function() { return AnaliseChamadasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnaliseChamadasService = /** @class */ (function () {
    function AnaliseChamadasService(http) {
        this.http = http;
        this.controle = false;
        this.buscarAnalise = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buscarInformacoes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitirevento = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AnaliseChamadasService.prototype.getModalidades = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/modalidadesimulacoes');
    };
    AnaliseChamadasService.prototype.getInstFinan = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/instituicoesfinanceiras');
    };
    AnaliseChamadasService.prototype.getTipoAmortizacao = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/tipoamortizacao');
    };
    AnaliseChamadasService.prototype.getStatusSimulacao = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/statussimulacao');
    };
    AnaliseChamadasService.prototype.getRegistroAnalise = function (cod) {
        console.log('getRegistroAnalise');
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/analises/' + cod);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/analises/' + cod);
    };
    AnaliseChamadasService.prototype.getSPE = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/spe');
    };
    AnaliseChamadasService.prototype.postAnaliseSimulacaoContrato = function (analise) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/analise', analise);
    };
    AnaliseChamadasService.prototype.putAnaliseSimulacaoContrato = function (analise) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/analise', analise);
    };
    AnaliseChamadasService.prototype.getCodCadastro = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastros');
    };
    AnaliseChamadasService.prototype.getDadosFaturamento = function (codcadastro) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/dadosfaturamento/' + codcadastro);
    };
    AnaliseChamadasService.prototype.postDadosFaturamento = function (dadosFaturamento) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/dadosfaturamento', dadosFaturamento);
    };
    AnaliseChamadasService.prototype.putDadosFaturamento = function (dadosFaturamento) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/dadosfaturamento', dadosFaturamento);
    };
    AnaliseChamadasService.prototype.getDadosCadastrais = function (chamada) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/' + chamada, {
            reportProgress: true
        }));
    };
    AnaliseChamadasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AnaliseChamadasService);
    return AnaliseChamadasService;
}());



/***/ }),

/***/ "./src/app/services/analise-logica.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/analise-logica.service.ts ***!
  \****************************************************/
/*! exports provided: AnaliseLogicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliseLogicaService", function() { return AnaliseLogicaService; });
/* harmony import */ var _models_simulacoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/simulacoes */ "./src/app/models/simulacoes.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brazilian-utils/format-cpf */ "./node_modules/@brazilian-utils/format-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brazilian-utils/format-cnpj */ "./node_modules/@brazilian-utils/format-cnpj/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnaliseLogicaService = /** @class */ (function () {
    function AnaliseLogicaService(analiseChamadasService, sharedService) {
        this.analiseChamadasService = analiseChamadasService;
        this.sharedService = sharedService;
    }
    AnaliseLogicaService.prototype.adicionarSimulacao = function (simulacao, cod) {
        var simulacao2 = new _models_simulacoes__WEBPACK_IMPORTED_MODULE_0__["Simulacoes"]();
        simulacao2.codusuario = Number(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance().getSessionUsuario().codUsuario);
        simulacao2.codcadastro = cod;
        simulacao2.valoravaliacao = simulacao.valoravaliacao;
        simulacao2.valorcompravenda = simulacao.valorcompravenda;
        simulacao2.valorcredito = simulacao.valorcredito;
        if (simulacao.codmodalidadesimulacao == undefined) {
            simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;
        }
        else {
            simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao.codModalidadeSimulacao;
        }
        simulacao2.dataenviobanco = simulacao.dataenviobanco;
        simulacao2.codsicaq = simulacao.codsicaq;
        simulacao2.correspondente = simulacao.correspondente;
        simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
        if (simulacao.codtipoamortizacao == undefined) {
            simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao;
        }
        else {
            simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao.codtipoamortizacao;
        }
        simulacao2.valorsubsidio = simulacao.valorsubsidio;
        simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
        simulacao2.valorfinanciamento = simulacao.valorfinanciamento;
        simulacao2.valorfgts = simulacao.valorfgts;
        simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
        simulacao2.saldodevedor = simulacao.saldodevedor;
        simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;
        simulacao2.simulacaoselecionado = simulacao.simulacaoselecionado;
        return simulacao2;
    };
    AnaliseLogicaService.prototype.salvarAlteracoes = function (simulacaoLista, simulacoes) {
        for (var item = 0; item < simulacaoLista.length; item++) {
            if (simulacaoLista[item].codsimulacao == simulacoes.codsimulacao) {
                simulacaoLista[item].codcadastro = simulacoes.codcadastro;
                simulacaoLista[item].valoravaliacao = simulacoes.valoravaliacao;
                simulacaoLista[item].valorcompravenda = simulacoes.valorcompravenda;
                simulacaoLista[item].valorcredito = simulacoes.valorcredito;
                if (simulacoes.codmodalidadesimulacao == undefined) {
                    simulacaoLista[item].codmodalidadesimulacao = simulacoes.codmodalidadesimulacao;
                }
                else {
                    simulacaoLista[item].codmodalidadesimulacao = simulacoes.codmodalidadesimulacao.codModalidadeSimulacao;
                }
                simulacaoLista[item].dataenviobanco = simulacoes.dataenviobanco;
                simulacaoLista[item].codsicaq = simulacoes.codsicaq;
                simulacaoLista[item].correspondente = simulacoes.correspondente;
                simulacaoLista[item].prazofinanciamento = simulacoes.prazofinanciamento;
                if (simulacoes.codtipoamortizacao == undefined) {
                    simulacaoLista[item].codtipoamortizacao = simulacoes.codtipoamortizacao;
                }
                else {
                    simulacaoLista[item].codtipoamortizacao = simulacoes.codtipoamortizacao.codtipoamortizacao;
                }
                simulacaoLista[item].valorsubsidio = simulacoes.valorsubsidio;
                simulacaoLista[item].valordespesasfinanciadas = simulacoes.valordespesasfinanciadas;
                simulacaoLista[item].valorfinanciamento = simulacoes.valorfinanciamento;
                simulacaoLista[item].valorfgts = simulacoes.valorfgts;
                simulacaoLista[item].valorrecursosproprios = simulacoes.valorrecursosproprios;
                simulacaoLista[item].saldodevedor = simulacoes.saldodevedor;
                simulacaoLista[item].codinstituicaofinanceira = simulacoes.codinstituicaofinanceira;
                return simulacaoLista[item];
            }
        }
    };
    AnaliseLogicaService.prototype.visualizarSimulacao = function (simulacao, modalidade, amortizacao, instFinan) {
        var simulacao2 = new _models_simulacoes__WEBPACK_IMPORTED_MODULE_0__["Simulacoes"]();
        simulacao2.codsimulacao = simulacao.codsimulacao;
        simulacao2.valoravaliacao = simulacao.valoravaliacao;
        simulacao2.valorcompravenda = simulacao.valorcompravenda;
        simulacao2.valorcredito = simulacao.valorcredito;
        if (simulacao.dataenviobanco != null) {
            simulacao2.dataenviobanco = new Date(simulacao.dataenviobanco);
            simulacao2.dataenviobanco.toUTCString();
            simulacao2.dataenviobanco = this.fixUTC(simulacao2.dataenviobanco);
        }
        for (var item = 0; item < modalidade.length; item++) {
            if (simulacao.codmodalidadesimulacao == modalidade[item].codModalidadeSimulacao) {
                simulacao.codmodalidadesimulacao = {
                    codModalidadeSimulacao: modalidade[item].codModalidadeSimulacao,
                    descModalidadeSimulacao: modalidade[item].descModalidadeSimulacao
                };
            }
        }
        simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;
        for (var item = 0; item < amortizacao.length; item++) {
            if (simulacao.codtipoamortizacao == amortizacao[item].codtipoamortizacao) {
                simulacao.codtipoamortizacao = {
                    codtipoamortizacao: amortizacao[item].codtipoamortizacao,
                    desctipoamortizacao: amortizacao[item].desctipoamortizacao
                };
            }
        }
        simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao;
        simulacao2.codsicaq = simulacao.codsicaq;
        simulacao2.correspondente = simulacao.correspondente;
        simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
        simulacao2.valorsubsidio = simulacao.valorsubsidio;
        simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
        simulacao2.valorfinanciamento = simulacao.valorfinanciamento;
        simulacao2.valorfgts = simulacao.valorfgts;
        simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
        simulacao2.saldodevedor = simulacao.saldodevedor;
        for (var item = 0; item < instFinan.length; item++) {
            if (simulacao.codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
                simulacao.codinstituicaofinanceira = {
                    codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
                    descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
                };
            }
        }
        simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;
        return simulacao2;
    };
    AnaliseLogicaService.prototype.salvarAnalise = function (analise, simulacaoLista, codcadastro, controle) {
        analise.codusuario = Number(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance().getSessionUsuario().codUsuario);
        analise.codcadastro = codcadastro;
        for (var _i = 0; _i < simulacaoLista.length; _i++) {
            var item = simulacaoLista[_i];
            simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ? Number(item.codinstituicaofinanceira.codInstituicaoFinanceira) : null;
            simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao ? Number(item.codstatussimulacao.codstatussimulacao) : null;
            if (item.codmodalidadesimulacao != undefined || item.codmodalidadesimulacao != null) {
                simulacaoLista[_i].codmodalidadesimulacao = item.codmodalidadesimulacao.codModalidadeSimulacao ? item.codmodalidadesimulacao.codModalidadeSimulacao : item.codmodalidadesimulacao;
            }
            if (item.codtipoamortizacao != undefined || item.codtipoamortizacao != null) {
                simulacaoLista[_i].codtipoamortizacao = item.codtipoamortizacao.codtipoamortizacao ? item.codtipoamortizacao.codtipoamortizacao : item.codtipoamortizacao;
            }
            if (simulacaoLista[_i].codsicaq == true) {
                simulacaoLista[_i].codsicaq = 0;
            }
            else if (simulacaoLista[_i].codsicaq == false) {
                simulacaoLista[_i].codsicaq = 1;
            }
        }
        analise.simulacoes = simulacaoLista;
        analise.numerocadastroincorporadorafid = analise.numerocadastroincorporadorafid;
        if (controle == true) {
            if (analise.dataassinatura != null) {
                analise.dataassinatura = new Date(analise.dataassinatura);
            }
            if (analise.dataemissao != null) {
                analise.dataemissao = new Date(analise.dataemissao);
            }
            if (analise.datapastamae != null) {
                analise.datapastamae = new Date(analise.datapastamae);
            }
            for (var _i = 0; _i < simulacaoLista.length; _i++) {
                if (analise.simulacoes[_i].dataenviobanco != undefined || analise.simulacoes[_i].dataenviobanco != null) {
                    analise.simulacoes[_i].dataenviobanco = analise.simulacoes[_i].dataenviobanco.toISOString();
                }
            }
        }
        return analise;
    };
    AnaliseLogicaService.prototype.formatandoAnalise = function (analise, simulacaoLista, statussimulacao, instFinan) {
        if (analise.dataassinatura != null) {
            analise.dataassinatura = new Date(analise.dataassinatura);
        }
        if (analise.dataemissao != null) {
            analise.dataemissao = new Date(analise.dataemissao);
        }
        if (analise.datapastamae != null) {
            analise.datapastamae = new Date(analise.datapastamae);
        }
        for (var _i = 0; _i < simulacaoLista.length; _i++) {
            analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
        }
        for (var _i = 0; _i < analise.simulacoes.length; _i++) {
            for (var item = 0; item < statussimulacao.length; item++) {
                if (analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao) {
                    analise.simulacoes[_i].codstatussimulacao = {
                        codstatussimulacao: statussimulacao[item].codstatussimulacao,
                        descstatussimulacao: statussimulacao[item].descstatussimulacao
                    };
                }
            }
        }
        for (var _i = 0; _i < analise.simulacoes.length; _i++) {
            for (var item = 0; item < instFinan.length; item++) {
                if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
                    analise.simulacoes[_i].codinstituicaofinanceira = {
                        codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
                        descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
                    };
                }
            }
        }
        return analise;
    };
    AnaliseLogicaService.prototype.receberAnalise = function (analiseSelecionada, statusSimulEvent, instFinanEvent, instFinan, statussimulacao) {
        var jsonObj = JSON.parse(analiseSelecionada); // Recebe os dados enviados pela busca de cadastro
        var analise = jsonObj;
        if (analise.datapastamae != null) {
            analise.datapastamae = new Date(analise.datapastamae);
            analise.datapastamae.toUTCString();
            analise.datapastamae = this.fixUTC(analise.datapastamae);
        }
        if (analise.dataemissao != null) {
            analise.dataemissao = new Date(analise.dataemissao);
            analise.dataemissao.toUTCString();
            analise.dataemissao = this.fixUTC(analise.dataemissao);
        }
        if (analise.dataassinatura != null) {
            analise.dataassinatura = new Date(analise.dataassinatura);
            analise.dataassinatura.toUTCString();
            analise.dataassinatura = this.fixUTC(analise.dataassinatura);
        }
        statusSimulEvent.subscribe(function (dado) {
            if (dado == true) {
                for (var _i = 0; _i < analise.simulacoes.length; _i++) {
                    for (var item = 0; item < statussimulacao.length; item++) {
                        if (analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao) {
                            analise.simulacoes[_i].codstatussimulacao = {
                                codstatussimulacao: statussimulacao[item].codstatussimulacao,
                                descstatussimulacao: statussimulacao[item].descstatussimulacao
                            };
                        }
                    }
                }
            }
        });
        instFinanEvent.subscribe(function (dado) {
            if (dado == true) {
                for (var _i = 0; _i < analise.simulacoes.length; _i++) {
                    for (var item = 0; item < instFinan.length; item++) {
                        if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
                            analise.simulacoes[_i].codinstituicaofinanceira = {
                                codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
                                descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
                            };
                        }
                    }
                }
            }
        });
        for (var _i = 0; _i < analise.simulacoes.length; _i++) {
            if (analise.simulacoes[_i].dataenviobanco != null) {
                analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
            }
        }
        return analise;
    };
    AnaliseLogicaService.prototype.receberDadosFaturamento = function (analiseSelecionada, dadosfaturamento, speEvent) {
        var _this = this;
        var jsonObj = JSON.parse(analiseSelecionada); // Recebe os dados enviados pela busca de cadastro
        var analise = jsonObj;
        dadosfaturamento.codanalise = analise.codanalise;
        dadosfaturamento.codcadastro = analise.codcadastro;
        speEvent.subscribe(function (dado) {
            var spe = dado['data'];
            _this.analiseChamadasService.getDadosFaturamento(analise.codcadastro).subscribe(function (dados) {
                for (var _i = 0; _i < dados['data'].length; _i++) {
                    dadosfaturamento.coddadosfaturamento = dados['data'][_i].coddadosfaturamento;
                    dadosfaturamento.codanalise = dados['data'][_i].codanalise;
                    dadosfaturamento.codcadastro = dados['data'][_i].codcadastro;
                    if (dados['data'][_i].cpfcnpj.length > 11) {
                        dadosfaturamento.cpfcnpj = Object(_brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_6__["default"])(dados['data'][_i].cpfcnpj);
                    }
                    else {
                        dadosfaturamento.cpfcnpj = Object(_brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_5__["default"])(dados['data'][_i].cpfcnpj);
                    }
                    dadosfaturamento.parcela1 = dados['data'][_i].parcela1;
                    dadosfaturamento.notafiscal1 = dados['data'][_i].notafiscal1;
                    for (var item = 0; item < spe.length; item++) {
                        if (dados['data'][_i].razaosocialspe == spe[item].descspe) {
                            dados['data'][_i].razaosocialspe = {
                                cnpjspe: spe[item].cnpjspe,
                                codincorporadora: spe[item].codincorporadora,
                                descspe: spe[item].descspe
                            };
                        }
                    }
                    dadosfaturamento.razaosocialspe = dados['data'][_i].razaosocialspe;
                    if (dados['data'][_i].mesfaturamento1 != null) {
                        dadosfaturamento.mesfaturamento1 = new Date(dados['data'][_i].mesfaturamento1);
                    }
                    ;
                    dadosfaturamento.parcela2 = dados['data'][_i].parcela2;
                    dadosfaturamento.notafiscal2 = dados['data'][_i].notafiscal2;
                    if (dados['data'][_i].mesfaturamento2 != null) {
                        dadosfaturamento.mesfaturamento2 = new Date(dados['data'][_i].mesfaturamento2);
                    }
                    ;
                    if (dados['data'][_i].mesfaturado != null) {
                        dadosfaturamento.mesfaturado = new Date(dados['data'][_i].mesfaturado);
                    }
                    ;
                    dadosfaturamento.totalrecebimentoincorporadora = dados['data'][_i].totalrecebimentoincorporadora;
                    dadosfaturamento.recebimentoteoricobanco = dados['data'][_i].recebimentoteoricobanco;
                    dadosfaturamento.totalrecebido = dados['data'][_i].totalrecebido;
                    dadosfaturamento.observacao = dados['data'][_i].observacao;
                    dadosfaturamento.totalrecebidoincorporadora = dados['data'][_i].totalrecebidoincorporadora;
                    dadosfaturamento.numeronotafiscal = dados['data'][_i].numeronotafiscal;
                }
            });
        });
        return dadosfaturamento;
    };
    AnaliseLogicaService.prototype.getDadosCadastrais = function (analiseSelecionada) {
        var _this = this;
        var jsonObj = JSON.parse(analiseSelecionada);
        var analise = jsonObj;
        this.analiseChamadasService.getDadosCadastrais('instituicoesfinanceiras').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < dadosBaixados.length; i++) {
                    if (analise.codinstituicaofinanceira == dadosBaixados[i].codInstituicaoFinanceira) {
                        analise.codinstituicaofinanceira = dadosBaixados[i].descInstituicaoFinanceira;
                    }
                }
                _this.sharedService.getBanco = true;
                _this.sharedService.hiddenLoader();
            }
        });
        this.analiseChamadasService.getDadosCadastrais('modalidadesimulacoes').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < dadosBaixados.length; i++) {
                    if (analise.codmodalidadesimulacao == dadosBaixados[i].codModalidadeSimulacao) {
                        analise.codmodalidadesimulacao = dadosBaixados[i].descModalidadeSimulacao;
                    }
                }
                _this.sharedService.getModalidade = true;
                _this.sharedService.hiddenLoader();
            }
        });
        this.analiseChamadasService.getDadosCadastrais('tipoamortizacao').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < dadosBaixados.length; i++) {
                    if (analise.codtipoamortizacao == dadosBaixados[i].codtipoamortizacao) {
                        analise.codtipoamortizacao = dadosBaixados[i].desctipoamortizacao;
                    }
                }
                _this.sharedService.getAmortizacao = true;
                _this.sharedService.hiddenLoader();
            }
        });
        if (analise.codsicaq == 0) {
            analise.codsicaq = 'Possui SICAQ';
        }
        else if (analise.codsicaq == 1) {
            analise.codsicaq = 'Não possui SICAQ';
        }
        analise.dataenviobanco = new Date(analise.dataenviobanco);
        analise.dataenviobanco.toUTCString();
        return analise;
    };
    AnaliseLogicaService.prototype.fixUTC = function (date) {
        var ano = date.getUTCFullYear();
        var mes = date.getUTCMonth();
        var dia = date.getUTCDate();
        var hora = date.getUTCHours();
        var novaData = new Date(Date.UTC(ano, mes, dia, hora + 3));
        return novaData;
    };
    AnaliseLogicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_3__["AnaliseChamadasService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], AnaliseLogicaService);
    return AnaliseLogicaService;
}());



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.getToken()
                }
            });
            return next.handle(authRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 0) {
                    console.log('Check Your Internet Connection And Try again Later');
                }
                else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                    _this.shared.showError.emit('[' + err.status + '] Usuário invalido');
                }
                _this.shared.messengerService.add({ key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação' });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        }
        else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 0) {
                    console.log('Check Your Internet Connection And Try again Later');
                }
                else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                    _this.shared.showError.emit('[' + err.status + '] Usuário invalido');
                    console.log('ERRO[' + err.status + ']');
                }
                _this.shared.messengerService.add({ key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação' });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = '/api/auth';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.usuarioAutenticado = false;
        this.mostrarsistema = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shared = _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    AuthService.prototype.fazerLogin = function (form, usuario) {
        var _this = this;
        console.log('URL origin:' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlpath);
        this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlpath + url), usuario, {
            reportProgress: true
        })).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                var evento = event.body;
                _this.shared.setToken(evento.token);
                _this.shared.setSessionUsuario(evento.usuario);
                _this.usuarioAutenticado = true;
                _this.mostrarsistema.emit(true);
                localStorage.setItem('nome_usuario', evento.usuario.nome + ' ' + evento.usuario.sobrenome);
                console.log(evento.usuario.nome + ' ' + evento.usuario.sobrenome);
                _this.router.navigate(['/home']);
            }
        }, function (err) {
            _this.msgError.emit(false);
            _this.shared.setToken(null);
            _this.shared.showTemplate.emit(false);
            localStorage.removeItem('nome_usuario');
            _this.shared.removeSessionUsuario();
            _this.usuarioAutenticado = false;
            console.log('ERRO AO TENTAR LOGAR');
        });
    };
    AuthService.prototype.fazerLogout = function () {
        this.shared.removeSessionUsuario();
        this.usuarioAutenticado = false;
        this.shared.showTemplate.emit(false);
        console.log('logout');
        window.location.reload();
    };
    AuthService.prototype.isUsuarioAutenticado = function () {
        if (this.shared.isLoggedIn()) {
            this.mostrarsistema.emit(true);
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cadastro-chamadas.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/cadastro-chamadas.service.ts ***!
  \*******************************************************/
/*! exports provided: CadastroChamadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroChamadasService", function() { return CadastroChamadasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroChamadasService = /** @class */ (function () {
    function CadastroChamadasService(http) {
        this.http = http;
        this.buscarCadastro = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CadastroChamadasService.prototype.getEstados = function () {
        return this.http.get('./../../../../assets/estados.json');
    };
    CadastroChamadasService.prototype.getEmpreendimentos = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/empreendimentos');
    };
    CadastroChamadasService.prototype.getFlux = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/flux');
    };
    CadastroChamadasService.prototype.getOriginacao = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/originacoes');
    };
    CadastroChamadasService.prototype.getEstadoCivil = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/estadocivil');
    };
    CadastroChamadasService.prototype.getTipoContato = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/tipocontatos');
    };
    CadastroChamadasService.prototype.getTipoClientes = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/tipoclientes');
    };
    CadastroChamadasService.prototype.getIncorporadoras = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/incorporadoras');
    };
    CadastroChamadasService.prototype.createUser = function (cadInfo) {
        console.log(JSON.stringify(cadInfo));
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastro', cadInfo);
    };
    CadastroChamadasService.prototype.getOrgaoExpedidor = function () {
        return this.http.get("./../../assets/orgao-expedidor.json")
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    CadastroChamadasService.prototype.getBuscaNomeClienteCadastrado = function (nome) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cliente/nome/' + nome)
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    CadastroChamadasService.prototype.getBuscaCPFClienteCadastrado = function (cpf) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cliente/cpf/' + cpf)
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    CadastroChamadasService.prototype.getCep = function (cep) {
        // CRIEI UM REDIRECIONAMENTO INTERNO NO BACKEND PARA TRATAR NO SERVIDOR O CEP ANTES DE ENVIAR PARA O FRONT
        // return this.http.get(`//viacep.com.br/ws/${cep}/json`);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cep/' + cep);
    };
    CadastroChamadasService.prototype.getCalendarioBr = function () {
        return this.http.get("./../../assets/calendario-br.json");
    };
    CadastroChamadasService.prototype.getBuscaCadastrado = function (nome, cpf) {
        if (nome != null) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastro/nome/' + nome);
        }
        else if (cpf != null) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastro/cpf/' + cpf);
        }
    };
    CadastroChamadasService.prototype.putCadastro = function (cadInfo) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastro', cadInfo);
    };
    CadastroChamadasService.prototype.getDadosCadastrais = function (chamada) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/' + chamada, {
            reportProgress: true
        }));
    };
    CadastroChamadasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CadastroChamadasService);
    return CadastroChamadasService;
}());



/***/ }),

/***/ "./src/app/services/cadastro-logica.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cadastro-logica.service.ts ***!
  \*****************************************************/
/*! exports provided: CadastroLogicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroLogicaService", function() { return CadastroLogicaService; });
/* harmony import */ var src_app_models_contatos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/contatos */ "./src/app/models/contatos.ts");
/* harmony import */ var src_app_models_compradores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/compradores */ "./src/app/models/compradores.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro-chamadas.service */ "./src/app/services/cadastro-chamadas.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brazilian-utils/format-cpf */ "./node_modules/@brazilian-utils/format-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @brazilian-utils/format-cnpj */ "./node_modules/@brazilian-utils/format-cnpj/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @brazilian-utils/is-valid-cpf */ "./node_modules/@brazilian-utils/is-valid-cpf/dist/index.m.js");
/* harmony import */ var _brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @brazilian-utils/is-valid-cnpj */ "./node_modules/@brazilian-utils/is-valid-cnpj/dist/index.m.js");
/* harmony import */ var _brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brazilian-utils/helper-only-numbers */ "./node_modules/@brazilian-utils/helper-only-numbers/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CadastroLogicaService = /** @class */ (function () {
    function CadastroLogicaService(chamadasService, sharedService) {
        this.chamadasService = chamadasService;
        this.sharedService = sharedService;
    }
    CadastroLogicaService.prototype.adicionarComprador = function (comprador) {
        var comprador2 = new src_app_models_compradores__WEBPACK_IMPORTED_MODULE_1__["Compradores"]();
        comprador2.cpfcnpj = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_10__["default"])(comprador.cpfcnpj);
        comprador2.codtipocliente = Number(comprador.codtipocliente);
        comprador2.nomecliente = comprador.nomecliente;
        comprador2.ndocumento = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_10__["default"])(comprador.ndocumento);
        comprador2.orgaoexpedidor = comprador.orgaoexpedidor;
        comprador2.dataexpedicao = comprador.dataexpedicao;
        comprador2.datanascimento = comprador.datanascimento;
        comprador2.codestadocivil = comprador.codestadocivil.codestadocivil;
        comprador2.nacionalidade = comprador.nacionalidade;
        comprador2.profissao = comprador.profissao;
        comprador2.cepresidencial = comprador.cepresidencial;
        comprador2.uf = comprador.uf.uf;
        comprador2.cidade = comprador.cidade;
        comprador2.bairro = comprador.bairro;
        comprador2.endereco = comprador.endereco;
        comprador2.complemento = comprador.complemento;
        comprador2.numeroendereco = comprador.numeroendereco;
        comprador2.codusuario = comprador.codusuario;
        comprador2.datacadastro = comprador.datacadastro;
        comprador2.valorrenda = comprador.valorrenda;
        comprador2.principal = comprador.principal;
        return comprador2;
    };
    CadastroLogicaService.prototype.adicionarContatosDisplay = function (contato) {
        var contatoDisplay = new src_app_models_contatos__WEBPACK_IMPORTED_MODULE_0__["Contatos"]();
        this.contAny = contato.codtipocontato;
        contatoDisplay.tipocontato = this.contAny.desctipocontato;
        contatoDisplay.codtipocontato = this.contAny.codtipocontato;
        contatoDisplay.desccontato = contato.desccontato;
        return contatoDisplay;
    };
    CadastroLogicaService.prototype.adicionarContatosLista = function (contato) {
        var contato2 = new src_app_models_contatos__WEBPACK_IMPORTED_MODULE_0__["Contatos"]();
        this.contAny = contato.codtipocontato;
        contato2.codtipocontato = this.contAny.codtipocontato;
        contato2.desccontato = contato.desccontato;
        return contato2;
    };
    CadastroLogicaService.prototype.limparContatos = function (contato) {
        contato.codtipocontato = null;
        contato.desccontato = null;
        return contato;
    };
    CadastroLogicaService.prototype.atualizarComprador = function (compradores, comprador, contato) {
        if (compradores === void 0) { compradores = []; }
        if (contato === void 0) { contato = []; }
        for (var item = 0; item < compradores.length; item++) {
            if (compradores[item].cpfcnpj == comprador.cpfcnpj) {
                compradores[item].cpfcnpj = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_10__["default"])(comprador.cpfcnpj);
                compradores[item].codtipocliente = Number(comprador.codtipocliente);
                compradores[item].nomecliente = comprador.nomecliente;
                compradores[item].ndocumento = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_10__["default"])(comprador.ndocumento);
                compradores[item].orgaoexpedidor = comprador.orgaoexpedidor;
                compradores[item].dataexpedicao = comprador.dataexpedicao;
                compradores[item].datanascimento = comprador.datanascimento;
                compradores[item].codestadocivil = comprador.codestadocivil.codestadocivil;
                compradores[item].nacionalidade = comprador.nacionalidade;
                compradores[item].profissao = comprador.profissao;
                compradores[item].contatos = contato;
                compradores[item].cepresidencial = comprador.cepresidencial;
                compradores[item].uf = comprador.uf.uf;
                compradores[item].cidade = comprador.cidade;
                compradores[item].bairro = comprador.bairro;
                compradores[item].endereco = comprador.endereco;
                compradores[item].complemento = comprador.complemento;
                compradores[item].numeroendereco = comprador.numeroendereco;
                compradores[item].codusuario = comprador.codusuario;
                compradores[item].datacadastro = comprador.datacadastro;
                compradores[item].valorrenda = comprador.valorrenda;
            }
        }
        return compradores;
    };
    CadastroLogicaService.prototype.visualizarComprador = function (comprador, comprador2, estadoCivil) {
        comprador.codusuario = comprador2.codusuario;
        comprador.cpfcnpj = comprador2.cpfcnpj;
        comprador.codtipocliente = comprador2.codtipocliente;
        comprador.nomecliente = comprador2.nomecliente;
        comprador.ndocumento = comprador2.ndocumento;
        comprador.orgaoexpedidor = comprador2.orgaoexpedidor;
        comprador.dataexpedicao = new Date(comprador2.dataexpedicao);
        comprador.dataexpedicao.toUTCString();
        comprador.dataexpedicao = this.fixUTC(comprador.dataexpedicao);
        comprador.datanascimento = new Date(comprador2.datanascimento);
        comprador.datanascimento.toUTCString();
        comprador.datanascimento = this.fixUTC(comprador.datanascimento);
        for (var item = 0; item < estadoCivil.length; item++) {
            if (comprador2.codestadocivil == estadoCivil[item].codestadocivil) {
                comprador2.codestadocivil = {
                    codestadocivil: estadoCivil[item].codestadocivil,
                    descestadocivil: estadoCivil[item].descestadocivil
                };
            }
        }
        comprador.codestadocivil = comprador2.codestadocivil;
        comprador.nacionalidade = comprador2.nacionalidade;
        comprador.profissao = comprador2.profissao;
        comprador.cepresidencial = comprador2.cepresidencial;
        comprador.uf = { uf: comprador2.uf };
        comprador.cidade = comprador2.cidade;
        comprador.bairro = comprador2.bairro;
        comprador.endereco = comprador2.endereco;
        comprador.complemento = comprador2.complemento;
        comprador.numeroendereco = comprador2.numeroendereco;
        comprador.datacadastro = new Date(comprador2.datacadastro);
        comprador.valorrenda = comprador2.valorrenda;
        comprador.principal = comprador2.principal;
        return comprador;
    };
    CadastroLogicaService.prototype.visualizarInfoImovel = function () {
        var cadInfo;
        var jsonObj = JSON.parse(sessionStorage.getItem('CADASTROSELECIONADO')); // Recebe os dados enviados pela busca de cadastro
        var cadastroinformacaoCarregada = jsonObj;
        // Codigo de parce do objeto carregado para os dados da tela
        cadInfo = cadastroinformacaoCarregada;
        cadInfo.bairro = cadastroinformacaoCarregada.bairro;
        cadInfo.blocotorre = cadastroinformacaoCarregada.blocotorre;
        cadInfo.box = cadastroinformacaoCarregada.box;
        cadInfo.cep = cadastroinformacaoCarregada.cep;
        cadInfo.cidade = cadastroinformacaoCarregada.cidade;
        cadInfo.codcadastro = cadastroinformacaoCarregada.codcadastro;
        cadInfo.clientes = cadastroinformacaoCarregada.clientes;
        this.chamadasService.getEmpreendimentos().subscribe(function (dados) {
            var empreendimento = dados['data'];
            for (var item = 0; item < empreendimento.length; item++) {
                if (empreendimento[item].codempreendimento == cadastroinformacaoCarregada.codempreendimento) {
                    cadInfo.codempreendimento = empreendimento[item];
                }
            }
        });
        this.chamadasService.getOriginacao().subscribe(function (dados) {
            var originacao = dados['data'];
            for (var item = 0; item < originacao.length; item++) {
                if (Number(originacao[item].codoriginacao) == Number(cadastroinformacaoCarregada.codoriginacao)) {
                    cadInfo.codoriginacao = {
                        codoriginacao: cadastroinformacaoCarregada.codoriginacao,
                        descoriginacao: originacao[item].descoriginacao
                    };
                }
            }
        });
        cadInfo.codusuario = cadastroinformacaoCarregada.codusuario;
        cadInfo.complemento = cadastroinformacaoCarregada.complemento;
        cadInfo.numero = cadastroinformacaoCarregada.numero;
        cadInfo.endereco = cadastroinformacaoCarregada.endereco;
        cadInfo.uf = { uf: cadastroinformacaoCarregada.uf };
        this.chamadasService.getIncorporadoras().subscribe(function (dados) {
            var incorp = dados['data'];
            for (var item = 0; item < incorp.length; item++) {
                if (incorp[item].codincorporadora == cadastroinformacaoCarregada.codincorporadora) {
                    cadInfo.codincorporadora = {
                        codincorporadora: cadastroinformacaoCarregada.codincorporadora,
                        descincorporadora: incorp[item].descincorporadora
                    };
                }
            }
        });
        cadInfo.dtentrada = new Date(cadastroinformacaoCarregada.dtentrada);
        cadInfo.dtentrada.toUTCString();
        cadInfo.dtentrada = this.fixUTC(cadInfo.dtentrada);
        cadInfo.numerocadastroincorporadorafid = cadastroinformacaoCarregada.numerocadastroincorporadorafid;
        cadInfo.saldodevedor = cadastroinformacaoCarregada.saldodevedor;
        cadInfo.unidade = cadastroinformacaoCarregada.unidade;
        cadInfo.vagaautomovel = cadastroinformacaoCarregada.vagaautomovel;
        cadInfo.valorvenda = cadastroinformacaoCarregada.valorvenda;
        return cadInfo;
    };
    CadastroLogicaService.prototype.atualizarCadInfo = function (cadInfo, compradores) {
        cadInfo.uf = cadInfo.uf.uf;
        cadInfo.clientes = compradores;
        cadInfo.codincorporadora = cadInfo.codincorporadora.codincorporadora;
        cadInfo.codempreendimento = cadInfo.codempreendimento.codempreendimento;
        cadInfo.codoriginacao = cadInfo.codoriginacao['codoriginacao'];
        for (var index = 0; index < cadInfo.clientes.length; index++) {
            cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
            if (typeof cadInfo.clientes[index].codestadocivil.codestadocivil !== 'undefined') {
                cadInfo.clientes[index].codestadocivil = cadInfo.clientes[index].codestadocivil.codestadocivil;
            }
        }
        cadInfo.cep = cadInfo.cep.replace('-', '');
        cadInfo.codusuario = Number(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance().getSessionUsuario().codUsuario);
        return cadInfo;
    };
    CadastroLogicaService.prototype.confirmacao = function (cadInfo, compradores) {
        cadInfo.uf = cadInfo.uf.uf;
        cadInfo.clientes = compradores;
        cadInfo.codincorporadora = cadInfo.codincorporadora.codincorporadora;
        cadInfo.codempreendimento = cadInfo.codempreendimento.codempreendimento;
        cadInfo.codoriginacao = cadInfo.codoriginacao['codoriginacao'];
        for (var index = 0; index < cadInfo.clientes.length; index++) {
            cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
        }
        cadInfo.cep = cadInfo.cep.replace('-', '');
        cadInfo.codusuario = Number(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance().getSessionUsuario().codUsuario);
        return cadInfo;
    };
    CadastroLogicaService.prototype.getDadosCadastrais = function (cadastroSelecionado) {
        var _this = this;
        var jsonObj = JSON.parse(cadastroSelecionado);
        var comprador = jsonObj;
        comprador.cpfcnpj = this.formatCpfCnpj(comprador.cpfcnpj);
        var fimCep = comprador.cepresidencial.slice(5, comprador.cepresidencial.length);
        var comecoCep = comprador.cepresidencial.slice(0, 5);
        comprador.cepresidencial = comecoCep + '-' + fimCep;
        this.chamadasService.getDadosCadastrais('tipoclientes').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < dadosBaixados.length; i++) {
                    if (comprador.codtipocliente == dadosBaixados[i].codtipocliente) {
                        comprador.codtipocliente = dadosBaixados[i].desctipocliente;
                    }
                }
                _this.sharedService.getTipoCliente = true;
                _this.sharedService.hiddenLoader();
            }
        });
        this.chamadasService.getDadosCadastrais('estadocivil').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < dadosBaixados.length; i++) {
                    if (comprador.codestadocivil == dadosBaixados[i].codestadocivil) {
                        comprador.codestadocivil = dadosBaixados[i].descestadocivil;
                    }
                }
                _this.sharedService.getEstadoCivil = true;
                _this.sharedService.hiddenLoader();
            }
        });
        comprador.datanascimento = new Date(comprador.datanascimento);
        comprador.datanascimento.toUTCString();
        comprador.dataexpedicao = new Date(comprador.dataexpedicao);
        comprador.dataexpedicao.toUTCString();
        return comprador;
    };
    CadastroLogicaService.prototype.getContatoDisplay = function (comprador) {
        var _this = this;
        var contDisplay = [];
        this.chamadasService.getDadosCadastrais('tipocontatos').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                var dadosBaixados = event.body['data'];
                for (var i = 0; i < comprador.contatos.length; i++) {
                    for (var item = 0; item < dadosBaixados.length; item++) {
                        if (comprador.contatos[i].codtipocontato == dadosBaixados[item].codtipocontato) {
                            var contatoDisplay = new src_app_models_contatos__WEBPACK_IMPORTED_MODULE_0__["Contatos"]();
                            contatoDisplay.tipocontato = dadosBaixados[item].desctipocontato;
                            contatoDisplay.desccontato = comprador.contatos[i].desccontato;
                            contDisplay.push(contatoDisplay);
                        }
                    }
                }
                _this.sharedService.getTipoContato = true;
                _this.sharedService.hiddenLoader();
            }
        });
        return contDisplay;
    };
    CadastroLogicaService.prototype.getCadInfo = function (cadInfoSelecionado) {
        var _this = this;
        var cadInfo = JSON.parse(cadInfoSelecionado);
        this.chamadasService.getDadosCadastrais('empreendimentos').subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].DownloadProgress) {
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                var empreendimento = event.body['data'];
                for (var item = 0; item < empreendimento.length; item++) {
                    if (empreendimento[item].codempreendimento == cadInfo.codempreendimento) {
                        cadInfo.codempreendimento = empreendimento[item].descempreendimento;
                    }
                }
                cadInfo.codempreendimento = cadInfo.codempreendimento;
                _this.sharedService.getEmpreendimento = true;
                _this.sharedService.hiddenLoader();
            }
        });
        cadInfo.unidade = cadInfo.unidade;
        return cadInfo;
    };
    CadastroLogicaService.prototype.fixUTC = function (date) {
        var ano = date.getUTCFullYear();
        var mes = date.getUTCMonth();
        var dia = date.getUTCDate();
        var hora = date.getUTCHours();
        var novaData = new Date(Date.UTC(ano, mes, dia, hora + 3));
        return novaData;
    };
    CadastroLogicaService.prototype.formatCpfCnpj = function (cpfcnpj) {
        var cpf = Object(_brazilian_utils_is_valid_cpf__WEBPACK_IMPORTED_MODULE_8__["default"])(cpfcnpj);
        var cnpj = Object(_brazilian_utils_is_valid_cnpj__WEBPACK_IMPORTED_MODULE_9__["default"])(cpfcnpj);
        if (cpf == true) {
            cpfcnpj = Object(_brazilian_utils_format_cpf__WEBPACK_IMPORTED_MODULE_6__["default"])(cpfcnpj);
        }
        else if (cnpj == true) {
            cpfcnpj = Object(_brazilian_utils_format_cnpj__WEBPACK_IMPORTED_MODULE_7__["default"])(cpfcnpj);
        }
        return cpfcnpj;
    };
    CadastroLogicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cadastro_chamadas_service__WEBPACK_IMPORTED_MODULE_4__["CadastroChamadasService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], CadastroLogicaService);
    return CadastroLogicaService;
}());



/***/ }),

/***/ "./src/app/services/form-cadastro-logica.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/form-cadastro-logica.service.ts ***!
  \**********************************************************/
/*! exports provided: FormCadastroLogicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCadastroLogicaService", function() { return FormCadastroLogicaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formcadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formcadastro.service */ "./src/app/services/formcadastro.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormCadastroLogicaService = /** @class */ (function () {
    function FormCadastroLogicaService(formcadastro) {
        this.formcadastro = formcadastro;
    }
    FormCadastroLogicaService.prototype.filtroClientePorNome = function (query, clienteQuery) {
        var filtered = [];
        for (var i = 0; i < clienteQuery.length; i++) {
            // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i].nome + ' ' + clienteQuery[i].sobrenome);
            // }
        }
        return filtered;
    };
    FormCadastroLogicaService.prototype.filtroClientePorLogin = function (query, clienteQuery) {
        var filtered = [];
        for (var i = 0; i < clienteQuery.length; i++) {
            // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i].login);
            // }
        }
        return filtered;
    };
    FormCadastroLogicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_formcadastro_service__WEBPACK_IMPORTED_MODULE_1__["FormcadastroService"]])
    ], FormCadastroLogicaService);
    return FormCadastroLogicaService;
}());



/***/ }),

/***/ "./src/app/services/formcadastro.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/formcadastro.service.ts ***!
  \**************************************************/
/*! exports provided: FormcadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormcadastroService", function() { return FormcadastroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brazilian-utils/helper-only-numbers */ "./node_modules/@brazilian-utils/helper-only-numbers/dist/index.m.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormcadastroService = /** @class */ (function () {
    function FormcadastroService(http) {
        this.http = http;
    }
    FormcadastroService.prototype.createOrUpdate = function (user) {
        if (user.id != null && user.id != '') {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user', user);
        }
        else {
            user.id = null;
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user', user);
        }
    };
    FormcadastroService.prototype.createOrUpdateUsuer = function (user) {
        console.log(JSON.stringify(user));
        user.isAtivo = true;
        user.cpf = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_3__["default"])(user.cpf);
        if (user.id != null) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/usuario', user);
        }
        else {
            user.id = null;
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/usuario', user);
        }
    };
    FormcadastroService.prototype.salvaresetUserPassword = function (user) {
        console.log(JSON.stringify(user));
        user.isAtivo = true;
        user.cpf = Object(_brazilian_utils_helper_only_numbers__WEBPACK_IMPORTED_MODULE_3__["default"])(user.cpf);
        if (user.id != null) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/usuario/reset', user);
        }
        else {
            user.id = null;
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/usuario', user);
        }
    };
    FormcadastroService.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    FormcadastroService.prototype.deleteUpdate = function (user) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/usuario/' + user.codUsuario);
    };
    FormcadastroService.prototype.getRoles = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/user/roles');
    };
    FormcadastroService.prototype.getNome = function (nome) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/usuario/nome/' + nome, {
            reportProgress: true
        }));
    };
    FormcadastroService.prototype.getLogin = function (login) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/usuario/login/' + login, {
            reportProgress: true
        }));
    };
    FormcadastroService.prototype.getUsers = function (nome) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/usuario/nome/' + nome)
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    FormcadastroService.prototype.getNick = function (login) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/usuario/login/' + login)
            .toPromise()
            .then(function (res) { return res; })
            .then(function (data) { return data; });
    };
    FormcadastroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormcadastroService);
    return FormcadastroService;
}());



/***/ }),

/***/ "./src/app/services/historico-logica.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/historico-logica.service.ts ***!
  \******************************************************/
/*! exports provided: HistoricoLogicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoLogicaService", function() { return HistoricoLogicaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _analise_chamadas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analise-chamadas.service */ "./src/app/services/analise-chamadas.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _historico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historico.service */ "./src/app/services/historico.service.ts");
/* harmony import */ var _models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/HistoricoAnalise */ "./src/app/models/HistoricoAnalise.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoricoLogicaService = /** @class */ (function () {
    function HistoricoLogicaService(chamadaService, historicoService, sharedService) {
        this.chamadaService = chamadaService;
        this.historicoService = historicoService;
        this.sharedService = sharedService;
        this.getSintese = false;
        this.getFase = false;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HistoricoLogicaService.prototype.receberHistorico = function (data) {
        var _this = this;
        var dados = data['data'];
        var fase;
        var sintese;
        var codUsuarios = [];
        for (var i = 0; i < dados.length; i++) {
            if (codUsuarios.includes(dados[i].codusuario) == false) {
                codUsuarios.push(dados[i].codusuario);
            }
        }
        for (var i = 0; i < codUsuarios.length; i++) {
            this.historicoService.getUsuario(codUsuarios[i]).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    var user = event.body['data'];
                    for (var item = 0; item < dados.length; item++) {
                        if (user.codUsuario == dados[item].codusuario) {
                            dados[item].codusuario = user.nome + ' ' + user.sobrenome;
                        }
                    }
                }
            });
        }
        this.chamadaService.getDadosCadastrais('fases').subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                fase = event.body['data'];
                for (var i = 0; i < dados.length; i++) {
                    for (var item = 0; item < fase.length; item++) {
                        if (dados[i].numfase == fase[item].numfase) {
                            dados[i].numfase = fase[item];
                        }
                    }
                }
                _this.sharedService.getFase = true;
                _this.sharedService.hiddenLoader();
                _this.historicoService.getSinteses().subscribe(function (data) {
                    sintese = data['data'];
                    for (var i = 0; i < dados.length; i++) {
                        for (var item = 0; item < sintese.length; item++) {
                            if (dados[i].numfase.numfase == sintese[item].numfase) {
                                if (dados[i].numsintese == sintese[item].numsintese) {
                                    dados[i].numsintese = sintese[item];
                                }
                            }
                        }
                    }
                    _this.sharedService.getSintese = true;
                    _this.sharedService.hiddenLoader();
                });
            }
        });
        return dados;
    };
    HistoricoLogicaService.prototype.salvarHistorico = function (data, codcadastro, sinteseSelecionado) {
        var data2 = new _models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_4__["HistoricoAnalise"]();
        data2 = data;
        data2.datahistorico = new Date().toDateString();
        var user = this.sharedService.getSessionUsuario();
        data2.codusuario = user.codUsuario;
        data2.codcadastro = codcadastro;
        data2.numsintese = sinteseSelecionado;
        return data2;
    };
    HistoricoLogicaService.prototype.receberData = function (dado) {
        var _this = this;
        var dado2 = new _models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_4__["HistoricoAnalise"]();
        var user = this.sharedService.getSessionUsuario();
        dado2 = dado;
        this.historicoService.getFasePorNumero(dado.numfase).subscribe(function (data) {
            data = data['data'];
            dado2.numfase = data[0];
            _this.getFase = true;
            _this.loadTable();
        });
        this.historicoService.getSintesePorFaseSintese(dado.numfase, dado.numsintese).subscribe(function (data) {
            data = data['data'];
            dado2.numsintese = data[0];
            _this.getSintese = true;
            _this.loadTable();
        });
        dado2.codusuario = user.nome + ' ' + user.sobrenome;
        return dado2;
    };
    HistoricoLogicaService.prototype.loadTable = function () {
        if (this.getFase == true && this.getSintese == true) {
            this.getFase = false;
            this.getSintese = false;
            this.load.emit(true);
        }
    };
    HistoricoLogicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_analise_chamadas_service__WEBPACK_IMPORTED_MODULE_1__["AnaliseChamadasService"],
            _historico_service__WEBPACK_IMPORTED_MODULE_3__["HistoricoService"],
            _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], HistoricoLogicaService);
    return HistoricoLogicaService;
}());



/***/ }),

/***/ "./src/app/services/historico.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/historico.service.ts ***!
  \***********************************************/
/*! exports provided: HistoricoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoService", function() { return HistoricoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/HistoricoAnalise */ "./src/app/models/HistoricoAnalise.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricoService = /** @class */ (function () {
    function HistoricoService(http) {
        this.http = http;
    }
    HistoricoService.prototype.getFasePorNumero = function (numfase) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/fase/' + numfase);
    };
    HistoricoService.prototype.getFases = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/fases');
    };
    HistoricoService.prototype.getSinteses = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/sinteses');
    };
    HistoricoService.prototype.getSintesePorFase = function (numfase) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/sintese/' + numfase);
    };
    HistoricoService.prototype.getSintesePorFaseSintese = function (numfase, numsintese) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/sintese/' + numfase + "/" + numsintese);
    };
    HistoricoService.prototype.getHistorico = function (codcadastro) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/historico/' + codcadastro);
    };
    HistoricoService.prototype.postHistorico = function (hist) {
        var data2 = new _models_HistoricoAnalise__WEBPACK_IMPORTED_MODULE_3__["HistoricoAnalise"]();
        data2.datahistorico = new Date(hist.datahistorico);
        data2.codcadastro = hist.codcadastro;
        data2.codusuario = hist.codusuario;
        data2.descricao = hist.descricao;
        data2.numsintese = hist.numsintese.numsintese;
        data2.numfase = hist.numfase.numfase;
        console.log(data2);
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/historico', data2, {
            reportProgress: true
        }));
    };
    HistoricoService.prototype.getSintesePorFaseRequest = function (numfase) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/sintese/' + numfase, {
            reportProgress: true
        }));
    };
    HistoricoService.prototype.getUsuario = function (codusuario) {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/usuario/' + codusuario, {
            reportProgress: true
        }));
    };
    HistoricoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoricoService);
    return HistoricoService;
}());



/***/ }),

/***/ "./src/app/services/home-chamadas.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/home-chamadas.service.ts ***!
  \***************************************************/
/*! exports provided: HomeChamadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeChamadasService", function() { return HomeChamadasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeChamadasService = /** @class */ (function () {
    function HomeChamadasService(http) {
        this.http = http;
    }
    HomeChamadasService.prototype.getCadastrosTop = function () {
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlpath + '/api/cadastros/top', {
            reportProgress: true
        }));
    };
    HomeChamadasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HomeChamadasService);
    return HomeChamadasService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/role */ "./src/app/models/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedService = /** @class */ (function () {
    function SharedService() {
        this.temporario = [];
        this.messengerService = new primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]();
        this.showError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getTipoCliente = false;
        this.getTipoContato = false;
        this.getEstadoCivil = false;
        this.getBanco = false;
        this.getModalidade = false;
        this.getAmortizacao = false;
        this.getEmpreendimento = false;
        this.getFase = false;
        this.getSintese = false;
        this.showLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.empreendimentos = [];
        this.cadastrosrecentes = [];
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.setToken = function (token) {
        sessionStorage.setItem('token', token);
    };
    SharedService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    SharedService.prototype.setSessionUsuario = function (user) {
        sessionStorage.setItem('codUsuario', user.codUsuario);
        sessionStorage.setItem('login', user.login);
        sessionStorage.setItem('nome', user.nome);
        sessionStorage.setItem('sobrenome', user.sobrenome);
        sessionStorage.setItem('telefone', user.telefone);
        sessionStorage.setItem('cpf', user.cpf);
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('perfis', user.perfis[0].profile);
        this.user = user;
    };
    SharedService.prototype.getSessionUsuario = function () {
        if (this.user == null) {
            this.user = new _models_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
            this.user.codUsuario = sessionStorage.getItem('codUsuario') == null ? null : sessionStorage.getItem('codUsuario');
            this.user.login = sessionStorage.getItem('login') == null ? null : sessionStorage.getItem('login');
            this.user.nome = sessionStorage.getItem('nome') == null ? null : sessionStorage.getItem('nome');
            this.user.sobrenome = sessionStorage.getItem('sobrenome') == null ? null : sessionStorage.getItem('sobrenome');
            this.user.telefone = sessionStorage.getItem('telefone') == null ? null : sessionStorage.getItem('telefone');
            this.user.cpf = sessionStorage.getItem('cpf') == null ? null : sessionStorage.getItem('cpf');
            this.user.email = sessionStorage.getItem('email') == null ? null : sessionStorage.getItem('email');
            this.role = new _models_role__WEBPACK_IMPORTED_MODULE_3__["Role"]();
            this.role.profile = sessionStorage.getItem('perfis');
            console.log('getSessionUsuario() RECRIADO');
        }
        return this.user;
    };
    SharedService.prototype.removeSessionUsuario = function () {
        sessionStorage.removeItem('codUsuario');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('nome');
        sessionStorage.removeItem('sobrenome');
        sessionStorage.removeItem('telefone');
        sessionStorage.removeItem('cpf');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('perfis');
        sessionStorage.removeItem('token');
    };
    SharedService.prototype.isLoggedIn = function () {
        if (sessionStorage.getItem('token') == null) {
            return false;
        }
        return true;
    };
    SharedService.prototype.calendarioBr = function () {
        return {
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            firstDayOfWeek: 1,
            clear: 'Limpar',
            dateFormat: 'dd/mm/yy'
        };
    };
    SharedService.prototype.hiddenLoader = function () {
        var _this = this;
        if ((this.getAmortizacao == true) && (this.getBanco == true) && (this.getEstadoCivil == true) &&
            (this.getModalidade == true) && (this.getTipoCliente == true) && (this.getTipoContato == true) &&
            (this.getEmpreendimento == true) && (this.getFase == true) && (this.getSintese == true)) {
            setTimeout(function () {
                _this.getTipoCliente = false;
                _this.getTipoContato = false;
                _this.getEstadoCivil = false;
                _this.getBanco = false;
                _this.getModalidade = false;
                _this.getAmortizacao = false;
                _this.getEmpreendimento = false;
                _this.getFase = false;
                _this.getSintese = false;
                _this.showLoader.emit(true);
            }, 500);
        }
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService.emitirevento = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SharedService.prototype, "messengerService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SharedService.prototype, "showError", void 0);
    SharedService = SharedService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    urlpath: ''
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projetos\NOVOS_PROJETOS\portal\portal_front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map