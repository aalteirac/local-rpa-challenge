(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_rpa1_rpa1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rpa1/rpa1.component */ "./src/app/components/rpa1/rpa1.component.ts");
/* harmony import */ var _components_rpa3_rpa3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rpa3/rpa3.component */ "./src/app/components/rpa3/rpa3.component.ts");





var APP_ROUTES = [
    { path: '', component: _components_rpa1_rpa1_component__WEBPACK_IMPORTED_MODULE_3__["Rpa1Component"] },
    { path: 'home', component: _components_rpa1_rpa1_component__WEBPACK_IMPORTED_MODULE_3__["Rpa1Component"] },
    { path: 'movieSearch', component: _components_rpa3_rpa3_component__WEBPACK_IMPORTED_MODULE_4__["Rpa3Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".brand-logo{\r\n    padding-left: 20px;\r\n    \r\n}\r\n\r\nbody { margin: 0;   overflow-x: hidden;\r\n    font-family: 'Poppins', sans-serif;}\r\n\r\n.row1, .col { overflow: hidden; position: absolute; }\r\n\r\n.row1 { left: 0; right: 0; }\r\n\r\n.col { top: 0; bottom: 0; }\r\n\r\n.scroll-x { overflow-x: auto; }\r\n\r\n.scroll-y { overflow-y: auto; }\r\n\r\n.header.row { height: 60px; top: 0; }\r\n\r\n.body.row1 { top: 63px;  }\r\n\r\n*{\r\n    font-family: 'Poppins', sans-serif;\r\n    /* color: RGB(102,104,102); */\r\n}\r\n\r\n.uiColorPrimary{\r\n    background-color: RGB(0,122,194);\r\n}\r\n\r\n.uiColorSecondary{\r\n    background-color: RGB(0,40,85);\r\n}\r\n\r\n.uiColorButtons{\r\n    background-color: RGB(254,80,0);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBLE9BQU8sU0FBUyxJQUFJLGtCQUFrQjtJQUNsQyxrQ0FBa0MsQ0FBQzs7QUFDdkMsY0FBYyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRTs7QUFDcEQsUUFBUSxPQUFPLEVBQUUsUUFBUSxFQUFFOztBQUMzQixPQUFPLE1BQU0sRUFBRSxTQUFTLEVBQUU7O0FBQzFCLFlBQVksZ0JBQWdCLEVBQUU7O0FBQzlCLFlBQVksZ0JBQWdCLEVBQUU7O0FBRTlCLGNBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRTs7QUFDcEMsYUFBYSxTQUFTLEdBQUc7O0FBRXpCO0lBQ0ksa0NBQWtDO0lBQ2xDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kLWxvZ297XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuYm9keSB7IG1hcmdpbjogMDsgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO31cclxuLnJvdzEsIC5jb2wgeyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuLnJvdzEgeyBsZWZ0OiAwOyByaWdodDogMDsgfVxyXG4uY29sIHsgdG9wOiAwOyBib3R0b206IDA7IH1cclxuLnNjcm9sbC14IHsgb3ZlcmZsb3cteDogYXV0bzsgfVxyXG4uc2Nyb2xsLXkgeyBvdmVyZmxvdy15OiBhdXRvOyB9XHJcblxyXG4uaGVhZGVyLnJvdyB7IGhlaWdodDogNjBweDsgdG9wOiAwOyB9XHJcbi5ib2R5LnJvdzEgeyB0b3A6IDYzcHg7ICB9XHJcblxyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIGNvbG9yOiBSR0IoMTAyLDEwNCwxMDIpOyAqL1xyXG59XHJcblxyXG4udWlDb2xvclByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMCwxMjIsMTk0KTtcclxufVxyXG5cclxuLnVpQ29sb3JTZWNvbmRhcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMCw0MCw4NSk7XHJcbn1cclxuXHJcbi51aUNvbG9yQnV0dG9uc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTQsODAsMCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header row\">\r\n  <nav>\r\n    <div class=\"nav-wrapper uiColorPrimary\">\r\n      <a class=\"brand-logo\">RPA Challenge</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n  </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div class=\"body row1 scroll-y\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_rpa1_rpa1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rpa1/rpa1.component */ "./src/app/components/rpa1/rpa1.component.ts");
/* harmony import */ var _components_rpa2_rpa2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/rpa2/rpa2.component */ "./src/app/components/rpa2/rpa2.component.ts");
/* harmony import */ var _components_rpa3_rpa3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/rpa3/rpa3.component */ "./src/app/components/rpa3/rpa3.component.ts");
/* harmony import */ var _components_rpa4_rpa4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/rpa4/rpa4.component */ "./src/app/components/rpa4/rpa4.component.ts");
/* harmony import */ var _services_rpa1_dictionary_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/rpa1_dictionary.service */ "./src/app/services/rpa1_dictionary.service.ts");
/* harmony import */ var _services_rpa1_checkFields_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/rpa1_checkFields.service */ "./src/app/services/rpa1_checkFields.service.ts");
/* harmony import */ var _services_rpa3_movies_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/rpa3_movies.service */ "./src/app/services/rpa3_movies.service.ts");
/* harmony import */ var _components_rpa1_rpa1_field_rpa1_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/rpa1/rpa1-field/rpa1-field.component */ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_rpa1_rpa1_component__WEBPACK_IMPORTED_MODULE_12__["Rpa1Component"],
                _components_rpa2_rpa2_component__WEBPACK_IMPORTED_MODULE_13__["Rpa2Component"],
                _components_rpa3_rpa3_component__WEBPACK_IMPORTED_MODULE_14__["Rpa3Component"],
                _components_rpa4_rpa4_component__WEBPACK_IMPORTED_MODULE_15__["Rpa4Component"],
                _components_rpa1_rpa1_field_rpa1_field_component__WEBPACK_IMPORTED_MODULE_19__["Rpa1FieldComponent"],
            ],
            imports: [
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__["SelectDropDownModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["JsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_8__["MaterializeModule"]
            ],
            providers: [
                _services_rpa1_dictionary_service__WEBPACK_IMPORTED_MODULE_16__["RPA1_DictionaryService"],
                _services_rpa1_checkFields_service__WEBPACK_IMPORTED_MODULE_17__["CheckFieldService"],
                _services_rpa3_movies_service__WEBPACK_IMPORTED_MODULE_18__["RPA3_MovieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.cards{\r\n    width:100%;\r\n    margin:0px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZHN7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/models/rpa1Dictonary.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/models/rpa1Dictonary.model.ts ***!
  \**********************************************************/
/*! exports provided: RPA1DictonaryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA1DictonaryModel", function() { return RPA1DictonaryModel; });
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Utils */ "./src/app/services/Utils.ts");

var RPA1DictonaryModel = /** @class */ (function () {
    function RPA1DictonaryModel(data) {
        if (data === undefined || data === null) {
            throw new Error('Undefined data');
        }
        this.title = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'title');
        this.instructionsTitle = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'instructionsTitle');
        this.instructionsP1 = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'instructionsP1');
        this.instructionsP2 = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'instructionsP2');
        this.instructionsP3 = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'instructionsP3');
        this.instructionsP4 = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'instructionsP4');
        this.buttonDownload = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'buttonDownload');
        this.buttonStart = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'buttonStart');
        this.buttonSubmit = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'buttonSubmit');
        this.inputFields = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'inputFields');
        this.completedMessage = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'completedMessage');
        this.congratulations = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'congratulations');
    }
    return RPA1DictonaryModel;
}());



/***/ }),

/***/ "./src/app/components/models/rpa1Fied.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/models/rpa1Fied.model.ts ***!
  \*****************************************************/
/*! exports provided: RPA1Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA1Field", function() { return RPA1Field; });
var RPA1Field = /** @class */ (function () {
    function RPA1Field(label, dictionaryValue, id) {
        this.label = label;
        this.dictionaryValue = dictionaryValue;
        this.id = id;
    }
    return RPA1Field;
}());



/***/ }),

/***/ "./src/app/components/models/rpa1InputFields.model.ts":
/*!************************************************************!*\
  !*** ./src/app/components/models/rpa1InputFields.model.ts ***!
  \************************************************************/
/*! exports provided: RPA1InputFieldModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA1InputFieldModel", function() { return RPA1InputFieldModel; });
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Utils */ "./src/app/services/Utils.ts");

var RPA1InputFieldModel = /** @class */ (function () {
    function RPA1InputFieldModel(data) {
        if (data === undefined || data === null) {
            throw new Error('Undefined data');
        }
        this.labelAddress = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelAddress');
        this.labelCompanyName = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelCompanyName');
        this.labelEmail = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelEmail');
        this.labelFirstName = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelFirstName');
        this.labelLastName = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelLastName');
        this.labelPhone = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelPhone');
        this.labelRole = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getParam(data, 'labelRole');
    }
    return RPA1InputFieldModel;
}());



/***/ }),

/***/ "./src/app/components/models/rpa1Person.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/models/rpa1Person.model.ts ***!
  \*******************************************************/
/*! exports provided: RPA1Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA1Person", function() { return RPA1Person; });
var RPA1Person = /** @class */ (function () {
    function RPA1Person(firstName, lastName, companyName, role, address, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.role = role;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    return RPA1Person;
}());



/***/ }),

/***/ "./src/app/components/models/rpa3Review.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/models/rpa3Review.model.ts ***!
  \*******************************************************/
/*! exports provided: RPA3Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA3Review", function() { return RPA3Review; });
var RPA3Review = /** @class */ (function () {
    function RPA3Review(type, content) {
        this.type = type,
            this.content = content;
    }
    return RPA3Review;
}());



/***/ }),

/***/ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/rpa1/rpa1-field/rpa1-field.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnBhMS9ycGExLWZpZWxkL3JwYTEtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/rpa1/rpa1-field/rpa1-field.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"parentFormGroup\">\n  <label >{{dictionaryValue}}</label>\n  <input #value id=\"{{id}}\" name=\"{{id}}\" formControlName={{label}}>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/rpa1/rpa1-field/rpa1-field.component.ts ***!
  \********************************************************************/
/*! exports provided: Rpa1FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpa1FieldComponent", function() { return Rpa1FieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Rpa1FieldComponent = /** @class */ (function () {
    function Rpa1FieldComponent() {
    }
    Rpa1FieldComponent.prototype.ngOnInit = function () {
    };
    Rpa1FieldComponent.prototype.sendValue = function () {
        return this.input.nativeElement.value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Rpa1FieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Rpa1FieldComponent.prototype, "dictionaryValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Rpa1FieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Rpa1FieldComponent.prototype, "parentFormGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('value'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Rpa1FieldComponent.prototype, "input", void 0);
    Rpa1FieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rpa1-field',
            template: __webpack_require__(/*! ./rpa1-field.component.html */ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.html"),
            styles: [__webpack_require__(/*! ./rpa1-field.component.css */ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Rpa1FieldComponent);
    return Rpa1FieldComponent;
}());



/***/ }),

/***/ "./src/app/components/rpa1/rpa1.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/rpa1/rpa1.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".instructionsText{\r\n    color: white;\r\n    font-size:1.0vw;\r\n    padding: 10px;\r\n}\r\n\r\n.inputFields{\r\n   padding-left: 100px;\r\n   padding-top: 50px; \r\n}\r\n\r\n.instructions{\r\n    height: 100vh;\r\n    background-image: url(\"test1.jpg\"); \r\n    background-size: 100%;\r\n}\r\n\r\n.congratulations{\r\n    padding-top:100px;\r\n}\r\n\r\n.message1{\r\n    text-align: center;\r\n    font-size: 36px;\r\n    -webkit-text-decoration-color: teal;\r\n            text-decoration-color: teal;\r\n}\r\n\r\n.message2{\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.dropdown{\r\n    padding: 10px;  \r\n}\r\n\r\n.row{\r\n    padding-bottom: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.uiColorPrimary{\r\n    background-color: RGB(0,163,224);\r\n}\r\n\r\n.uiColorSecondary{\r\n    background-color: RGB(0,40,85);\r\n}\r\n\r\n.uiColorButton{\r\n    background-color: RGB(254,80,0);\r\n}\r\n\r\n.uiColorGrey{\r\n    background-color: RGB(152,164,174);\r\n}\r\n\r\n.dropButton{\r\n    padding-top: 10px;\r\n}\r\n\r\n.dropdown-content li > a, .dropdown-content li > span {\r\n    color: grey;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ycGExL3JwYTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ycGExL3JwYTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0cnVjdGlvbnNUZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOjEuMHZ3O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlucHV0RmllbGRze1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDsgXHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnN7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwidGVzdDEuanBnXCIpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmNvbmdyYXR1bGF0aW9uc3tcclxuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZTF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRlYWw7XHJcbn1cclxuLm1lc3NhZ2Uye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd257XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4udWlDb2xvclByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMCwxNjMsMjI0KTtcclxufVxyXG5cclxuLnVpQ29sb3JTZWNvbmRhcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMCw0MCw4NSk7XHJcbn1cclxuXHJcbi51aUNvbG9yQnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI1NCw4MCwwKTtcclxufVxyXG5cclxuLnVpQ29sb3JHcmV5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDE1MiwxNjQsMTc0KTtcclxufVxyXG5cclxuLmRyb3BCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgbGkgPiBhLCAuZHJvcGRvd24tY29udGVudCBsaSA+IHNwYW4ge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/rpa1/rpa1.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/rpa1/rpa1.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\" class=\"row parent\">\n  <div class=\"instructions col s3 m3 l3 uiColorSecondary\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l9 \" style=\"color: white;\n            font-weight:bold;\n            font-size:24px;\n            padding: 10px;\">\n        {{dictionary.instructionsTitle}}\n      </div>\n\n      <div class=\"col l3 hide-on-med-and-down right dropButton\">\n        <a materialize=\"dropdown\" [materializeParams]=\"[{hover: true}]\" class=\"dropdown-button btn uiColorPrimary \"\n          data-activates=\"dropdown1\"> {{selectedLanguage}}\n        </a>\n        <ul id='dropdown1' class='dropdown-content'>\n          <li *ngFor=\"let lng of lang\"  class=\"dropdownText\"><span (click)=\"selectionChanged(lng)\" >{{lng}}</span></li>\n        </ul>\n      </div>\n\n    </div><br>\n    <div class=\"instructionsText\" [innerHTML]=\"dictionary.instructionsP1\"></div>\n    <div class=\"instructionsText\" [innerHTML]=\"dictionary.instructionsP2\"></div>\n    <div class=\"instructionsText\" [innerHTML]=\"dictionary.instructionsP3\"></div>\n    <div class=\"instructionsText\" [innerHTML]=\"dictionary.instructionsP4\"></div>\n    <div style=\"padding-top:3vh;\">\n      <a target=\"_blank\" href=\"{{langLink}}\"\n        class=\" col s12 m12 l12 btn waves-effect waves-light uiColorPrimary center\">\n        {{dictionary.buttonDownload}}\n        <i class=\"material-icons right\"></i>\n      </a>\n      <br>\n      <br>\n      <button *ngIf=\"buttonStart === 'Start' || buttonStart === 'Reset' || buttonStart === '開始'\"\n        class=\"waves-effect col s12 m12 l12 btn-large uiColorButton\" (click)=\"start()\">{{buttonStart}}</button>\n      <button *ngIf=\"buttonStart !== 'Start' && buttonStart !== 'Reset' && buttonStart !== '開始'\"\n        class=\"col s12 m12 l12 btn-large uiColorButton\">{{buttonStart}}</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"!challengeCompleted\" class=\"inputFields col s6 m6 l6\">\n    <form [formGroup]=\"inputForm\">\n      <div class=\"row\">\n        <div class=\"col s{{colIdx}} m{{colIdx}} l{{colIdx}}\" *ngFor=\"let item of inputFields\">\n          <!-- <label for=\"{{item.id}}\">{{item.dictionaryValue}}</label>\n                <input id=\"{{item.id}}\" formControlName={{item.label}}>   -->\n          <rpa1-field [parentFormGroup]=\"inputForm\" dictionaryValue=\"{{item.dictionaryValue}}\" id=\"{{item.id}}\"\n            label=\"{{item.label}}\"></rpa1-field>\n        </div>\n      </div>\n      <input class=\"btn uiColorButton\" (click)=\"onSubmit()\" type=\"submit\" value=\"{{dictionary.buttonSubmit}}\">\n    </form>\n  </div>\n\n  <div *ngIf=\"challengeCompleted\" class=\"congratulations col s8 m8 l8\">\n    <div class=\"message1 teal-text text-darken-2\">{{dictionary.congratulations}}!</div>\n    <div class=\"message2\">{{completedMessage}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/rpa1/rpa1.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rpa1/rpa1.component.ts ***!
  \***************************************************/
/*! exports provided: Rpa1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpa1Component", function() { return Rpa1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rpa1_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rpa1_dictionary.service */ "./src/app/services/rpa1_dictionary.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/rpa1Fied.model */ "./src/app/components/models/rpa1Fied.model.ts");
/* harmony import */ var _models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/rpa1Person.model */ "./src/app/components/models/rpa1Person.model.ts");
/* harmony import */ var _rpa1_field_rpa1_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rpa1-field/rpa1-field.component */ "./src/app/components/rpa1/rpa1-field/rpa1-field.component.ts");
/* harmony import */ var src_app_services_rpa1_checkFields_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/rpa1_checkFields.service */ "./src/app/services/rpa1_checkFields.service.ts");










var Rpa1Component = /** @class */ (function () {
    function Rpa1Component(rpa_dictionaryService, rpa_checkFields, _http, _activatedRoute, _router) {
        var _this = this;
        this.rpa_dictionaryService = rpa_dictionaryService;
        this.rpa_checkFields = rpa_checkFields;
        this._http = _http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.inputFields = [];
        this.lang = ['EN', 'RO', 'JA'];
        this.selectedLanguage = 'EN';
        this.loaded = false;
        this.colIdx = 6;
        this.idx = 1;
        this.position = ['left', 'right'];
        this.idxPosition = 0;
        this.challengeCompleted = false;
        this.correctInputs = 0;
        this.labelAddress = 'aa';
        this.langLink = '';
        this.searchConfig = {
            displayKey: 'description',
            search: true,
            height: 'auto',
            placeholder: this.selectedLanguage,
            customComparator: function () { },
            limitTo: this.lang.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'name'
        };
        _activatedRoute.queryParams.subscribe(function (params) {
            if (params['lang']) {
                _this.selectedLanguage = params['lang'].toString().toUpperCase();
                rpa_dictionaryService.setLanguage(_this.selectedLanguage);
            }
            else {
                _this.selectedLanguage = 'EN';
            }
        });
    }
    Rpa1Component.prototype.ngOnInit = function () {
        this.getDictonary();
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            labelAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelCompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelFirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelLastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            labelRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    Rpa1Component.prototype.getDictonary = function () {
        this.rpa_dictionaryService.getDictonary();
        // this.rpa_dictionaryService.setDictonary()
        //   .then(result => {
        this.dictionary = this.rpa_dictionaryService.getDictonary();
        this.loaded = true;
        this.generateFields();
        this.buttonStart = this.dictionary.buttonStart;
        // })
        // .catch(error => console.log(error));
        if (this.selectedLanguage === 'JA') {
            this.langLink = '/assets/downloadFiles/challenge_ja.xlsx';
        }
        else {
            this.langLink = './assets/downloadFiles/challenge.xlsx';
        }
    };
    Rpa1Component.prototype.onSubmit = function () {
        this.colIdx = Math.floor(Math.random() * 12) + 3;
        this.idxPosition = Math.floor(Math.random() * 2) + 0;
        if ((this.idx >= 1) && (this.idx <= 10) && this.startTime) {
            this.idx++;
            this.buttonStart = 'Round ' + this.idx;
            var person = new _models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_7__["RPA1Person"](this.fields.filter(function (value) { return value.label === 'labelFirstName'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelLastName'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelCompanyName'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelRole'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelAddress'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelEmail'; })[0].sendValue(), this.fields.filter(function (value) { return value.label === 'labelPhone'; })[0].sendValue());
            this.rpa_checkFields.checkPerson(person, this.idx - 2);
        }
        if (this.idx === 11) {
            this.idx++;
            this.buttonStart = 'Reset';
            this.challengeCompleted = true;
            this.counter = Date.now() - this.startTime;
            this.completedMessage = this.dictionary.completedMessage.replace('zzz', this.rpa_checkFields.returnScore() + '');
            this.correctInputs = this.rpa_checkFields.returnScore() / 70 * 100;
            this.completedMessage = this.completedMessage.replace('xxx', this.correctInputs + '%');
            this.completedMessage = this.completedMessage.replace('yyy', this.counter.toString());
        }
        this.inputForm.reset();
        this.generateFields();
    };
    Rpa1Component.prototype.start = function () {
        if (this.buttonStart === 'Reset') {
            this.idx = 0;
            window.location.reload();
        }
        // if (this.idx === 12) {
        //   this.idx = 1;
        //   this.challengeCompleted = false;
        //   this.correctInputs = 0;
        //   this.start();
        //   this.startTime = Date.now();
        // }
        this.buttonStart = 'Round ' + this.idx;
        this.inputForm.reset();
        this.generateFields();
        this.startTime = Date.now();
    };
    Rpa1Component.prototype.selectionChanged = function (lng) {
        if (!lng) {
            this.selectedLanguage = 'EN';
            this.rpa_dictionaryService.setLanguage('EN');
        }
        else {
            this.selectedLanguage = lng;
            this.rpa_dictionaryService.setLanguage(lng);
        }
        this.getDictonary();
        this._router.navigate([''], { queryParams: { lang: lng } });
    };
    Rpa1Component.prototype.generateFields = function () {
        this.inputFields = [];
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelAddress', this.dictionary.inputFields.labelAddress, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelCompanyName', this.dictionary.inputFields.labelCompanyName, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelEmail', this.dictionary.inputFields.labelEmail, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelFirstName', this.dictionary.inputFields.labelFirstName, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelLastName', this.dictionary.inputFields.labelLastName, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelPhone', this.dictionary.inputFields.labelPhone, this.generateRandomId()));
        this.inputFields.push(new _models_rpa1Fied_model__WEBPACK_IMPORTED_MODULE_6__["RPA1Field"]('labelRole', this.dictionary.inputFields.labelRole, this.generateRandomId()));
        this.inputFields = this.shuffleArray(this.inputFields);
    };
    Rpa1Component.prototype.shuffleArray = function (inputArray) {
        var len = inputArray.length;
        var ret = inputArray.slice();
        while (len) {
            var rand = Math.floor(Math.random() * len--);
            var tmp = ret[len];
            ret[len] = ret[rand];
            ret[rand] = tmp;
        }
        return ret;
    };
    Rpa1Component.prototype.generateRandomId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_rpa1_field_rpa1_field_component__WEBPACK_IMPORTED_MODULE_8__["Rpa1FieldComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], Rpa1Component.prototype, "fields", void 0);
    Rpa1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpa1',
            template: __webpack_require__(/*! ./rpa1.component.html */ "./src/app/components/rpa1/rpa1.component.html"),
            styles: [__webpack_require__(/*! ./rpa1.component.css */ "./src/app/components/rpa1/rpa1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rpa1_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["RPA1_DictionaryService"],
            src_app_services_rpa1_checkFields_service__WEBPACK_IMPORTED_MODULE_9__["CheckFieldService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], Rpa1Component);
    return Rpa1Component;
}());



/***/ }),

/***/ "./src/app/components/rpa2/rpa2.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/rpa2/rpa2.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnBhMi9ycGEyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/rpa2/rpa2.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/rpa2/rpa2.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center col s12 m12 l12\"> work in progress</div>\n"

/***/ }),

/***/ "./src/app/components/rpa2/rpa2.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rpa2/rpa2.component.ts ***!
  \***************************************************/
/*! exports provided: Rpa2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpa2Component", function() { return Rpa2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Rpa2Component = /** @class */ (function () {
    function Rpa2Component() {
    }
    Rpa2Component.prototype.ngOnInit = function () {
    };
    Rpa2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpa2',
            template: __webpack_require__(/*! ./rpa2.component.html */ "./src/app/components/rpa2/rpa2.component.html"),
            styles: [__webpack_require__(/*! ./rpa2.component.css */ "./src/app/components/rpa2/rpa2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Rpa2Component);
    return Rpa2Component;
}());



/***/ }),

/***/ "./src/app/components/rpa3/rpa3.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/rpa3/rpa3.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".instructionsText{\r\n    color: aliceblue;\r\n    font-size:16px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.instructionsDiv{\r\n    height: 110vh;\r\n    background-image: url(\"test1.jpg\");\r\n    background-size: 100%;\r\n}\r\n\r\n.container{\r\n    padding-left: 50px;\r\n}\r\n\r\n.cardItem{\r\n    padding-left: 20px;\r\n}\r\n\r\n.congratulations{\r\n    padding-top:100px;\r\n}\r\n\r\ni.icon-blue{\r\n    color:blue\r\n}\r\n\r\ni.icon-white{\r\n    color:white;\r\n}\r\n\r\n.reviewsText{\r\n    position: relative;\r\n    max-height: 62vh;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n\r\n}\r\n\r\n.message1{\r\n    text-align: center;\r\n    font-size: 36px;\r\n    -webkit-text-decoration-color: teal;\r\n            text-decoration-color: teal;\r\n}\r\n\r\n.message2{\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal{\r\n    width:140vh;\r\n    min-height: 80vh;\r\n    box-sizing: border-box;\r\n }\r\n\r\n.space{\r\n     padding-left:10px;\r\n }\r\n\r\n.row{\r\n     padding-bottom: 0px;\r\n     margin-bottom: 0px;\r\n }\r\n\r\n.uiColorPrimary{\r\n    background-color: RGB(0,163,224);\r\n}\r\n\r\n.uiColorSecondary{\r\n    background-color: RGB(0,40,85);\r\n}\r\n\r\n.uiColorButton{\r\n    background-color: RGB(254,80,0);\r\n}\r\n\r\n.uiColorGrey{\r\n    background-color: RGB(152,164,174);\r\n}\r\n\r\n.linkPointer{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ycGEzL3JwYTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUdBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7O0FBRUE7S0FDSSxpQkFBaUI7Q0FDckI7O0FBRUE7S0FDSSxtQkFBbUI7S0FDbkIsa0JBQWtCO0NBQ3RCOztBQUVBO0lBQ0csZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnBhMy9ycGEzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdHJ1Y3Rpb25zVGV4dHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zRGl2e1xyXG4gICAgaGVpZ2h0OiAxMTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInRlc3QxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLmNhcmRJdGVte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29uZ3JhdHVsYXRpb25ze1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbn1cclxuXHJcbmkuaWNvbi1ibHVle1xyXG4gICAgY29sb3I6Ymx1ZVxyXG59XHJcblxyXG5pLmljb24td2hpdGV7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLnJldmlld3NUZXh0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogNjJ2aDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG5cclxuLm1lc3NhZ2Uxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5tZXNzYWdlMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi5tb2RhbHtcclxuICAgIHdpZHRoOjE0MHZoO1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiB9XHJcblxyXG4gLnNwYWNle1xyXG4gICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gfVxyXG5cclxuIC5yb3d7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiB9XHJcblxyXG4gLnVpQ29sb3JQcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDAsMTYzLDIyNCk7XHJcbn1cclxuXHJcbi51aUNvbG9yU2Vjb25kYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDAsNDAsODUpO1xyXG59XHJcblxyXG4udWlDb2xvckJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTQsODAsMCk7XHJcbn1cclxuXHJcbi51aUNvbG9yR3JleXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigxNTIsMTY0LDE3NCk7XHJcbn1cclxuXHJcbi5saW5rUG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/rpa3/rpa3.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/rpa3/rpa3.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n    <div class=\"instructionsDiv col s3 m3 l3 blue-grey darken-3\">\r\n\r\n        <div class=\"instructionsText \" style=\"font-weight:bold;font-size:24px;padding: 10px;\">Instructions</div>\r\n\r\n        <div class=\"instructionsText\">1. {{instruction1}}</div>\r\n        <div class=\"instructionsText\">2. {{instruction2}}</div>\r\n        <div class=\"instructionsText\">3. {{instruction3}}</div>\r\n\r\n\r\n        <div class=\"instructionsText center\" style=\" font-weight: bold; padding-top:5vh;\">My Movie List</div>\r\n        <div *ngFor=\"let movies of myList; let i=index\">\r\n            <span class=\"instructionsText linkPointer\" (click)=\"getReviews(i)\"> {{movies.title.substring(0,30)}} </span>\r\n            <i class=\"right material-icons icon-white linkPointer\" (click)=\"getReviews(i)\">comment</i>\r\n            <i class=\"right material-icons icon-white linkPointer\" (click)=\"deleteFromList(i)\">delete</i>\r\n        </div>\r\n        <br>\r\n        <button *ngIf=\"myList?.length<3 && buttonStartEnabled==false\" class=\" disabled waves-effect col s12 m12 l12 btn-large\">Start Timer</button>\r\n        <button *ngIf=\"myList?.length>2 && buttonStartEnabled==false\" class=\" uiColorButton waves-effect col s12 m12 l12 btn-large\" (click)=\"start()\">Start Timer</button>\r\n        <button *ngIf=\"buttonStartEnabled==true\" class=\"uiColorButton waves-effect col s12 m12 l12 btn-large\"  (click)=\"submit()\">Submit</button>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"searchMovie\" class=\"container col s9 m9 l9\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"buttonStartEnabled==false\">\r\n                <h4>Search for Movies</h4>\r\n                <form>\r\n                    <input type=\"text\" class=\"form-control col s6 m6 l6\" [(ngModel)]=\"searchStr\" name=\"searchStr\">\r\n                    <button (click)=\"searchMovies()\" class=\"uiColorSecondary btn btn-primary btn-lg\">Find</button> &nbsp;&nbsp;\r\n                    <button class=\" uiColorSecondary btn btn-primary btn-lg uiColorPrimary\" (click)=\"getPopular()\">Get Popular Movies</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s12 l12 m12\">\r\n            <div *ngFor=\"let movie of searchRes;let i=index\" class=\"cardItem\">\r\n                <div class=\"col s4 \">\r\n                    <div class=\"col\"></div>\r\n                    <div *ngIf=\"movie.poster_path\" class=\"card col s12\">\r\n                        <div class=\"card-image\">\r\n                            <img src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\r\n                            <a *ngIf=\"myList?.length<3\" class=\"btn-floating halfway-fab waves-effect waves-light red\">\r\n                                <i  class=\"material-icons\" (click)=\"addToMyList(movie)\">add</i>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <span class=\"card-title activator\">{{movie.title.substring(0,20)}} </span>\r\n                            <i class=\" activator material-icons right\">more_vert</i>\r\n                            <p>{{movie.overview.substring(0,70)+\"...\"}}</p>\r\n                        </div>\r\n                        <div class=\"card-reveal\">\r\n                            <span class=\"card-title grey-text text-darken-4\">{{movie.title}}\r\n                                <i class=\"material-icons right\">close</i>\r\n                            </span>\r\n                            <p>{{movie.overview}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!searchMovie\" class=\"congratulations col s8 m8 l8\">\r\n            <div class=\"message1 teal-text text-darken-2\">{{congratulations}}!</div>\r\n            <div class=\"message2\">{{completedMessage}}</div>\r\n          </div>\r\n\r\n    <div *ngIf=\"movieClicked\" id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeActions]=\"modalActions\">\r\n        <div class=\"modal-content\">\r\n            <div style=\"padding-bottom: 20px\">\r\n                <span style=\"font-weight:bold;font-size:24px;padding: 10px; \">{{movieClicked.title}}</span>\r\n                <i class=\"material-icons right modal-action modal-close \" (click)=\"closeModal()\">close</i>\r\n            </div>\r\n            <div class=\"row\">\r\n                <img class=\"col s4 m4 l4\" src=\"http://image.tmdb.org/t/p/w500/{{movieClicked.poster_path}}\">\r\n                <div class=\"col s8 m8 l8 reviewsText\">\r\n                    <div *ngFor=\"let review of reviews; let i = index\" class=\"card blue-grey darken-1 col \">\r\n                        <div class=\"card-content white-text\">\r\n                            <p>{{review.content}}</p>\r\n                        </div>\r\n                        <div class=\"card-action\">\r\n                            <a *ngIf=\"reviewsClicked[i+moviePos*5]=='false'\" class=\"btn-flat waves-effect waves-light small\" (click)=\"reviewClicked(i,1,movieClicked.title)\">Positive</a>\r\n                            <a *ngIf=\"reviewsClicked[i+moviePos*5]=='true'\" class=\"btn-flat waves-effect waves-light small disabled\">Positive</a>\r\n                            <a *ngIf=\"reviewsClicked[i+moviePos*5]=='false'\" class=\"btn-flat waves-effect waves-light small\" (click)=\"reviewClicked(i,0,movieClicked.title)\">Negative</a>\r\n                            <a *ngIf=\"reviewsClicked[i+moviePos*5]=='true'\" class=\"btn-flat waves-effect waves-light small disabled\">Negative</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/rpa3/rpa3.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rpa3/rpa3.component.ts ***!
  \***************************************************/
/*! exports provided: Rpa3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpa3Component", function() { return Rpa3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rpa3_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rpa3_movies.service */ "./src/app/services/rpa3_movies.service.ts");
/* harmony import */ var _models_rpa3Review_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/rpa3Review.model */ "./src/app/components/models/rpa3Review.model.ts");





var Rpa3Component = /** @class */ (function () {
    function Rpa3Component(movieSrv) {
        this.movieSrv = movieSrv;
        this.reviews = [];
        this.searchMovie = true;
        this.myList = [];
        this.buttonStartEnabled = false;
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reviewsClicked = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'];
        this.partialScore = 0;
        this.totalScore = 0;
        this.moviePos = 0;
        this.instruction1 = 'The goal of this challenge is to create a workflow that will check which movie review is positive or negative.';
        this.instruction2 = 'Add 3 movies to your list in order to start the challenge. You can either search for them or get a list of 3 popular moives';
        this.instruction3 = 'Click on each movie in your Movie List in order to see the reviews. Check each review and see if it is positive or negative. Once you have checked all the reviews, press on Submit in order to see your score.';
        this.congratulations = 'Congratulations';
        this.completedMessage = 'Your success rate is xxx% in yyy milliseconds';
    }
    ;
    Rpa3Component.prototype.addToMyList = function (movie) {
        if (!this.myList.some(function (movieId) { return movieId['title'] == movie.title; })) {
            this.myList.push(movie);
        }
    };
    Rpa3Component.prototype.getPopular = function () {
        var _this = this;
        this.searchRes = null;
        this.movieSrv.getPopular().subscribe(function (res) {
            _this.searchRes = _this.shuffleArray(res.results).slice(0, 3);
            _this.myList = _this.searchRes;
        });
    };
    Rpa3Component.prototype.searchMovies = function () {
        var _this = this;
        this.searchRes = null;
        this.movieSrv.searchMovies(this.searchStr).subscribe(function (res) {
            _this.searchRes = res.results.slice(0, 3);
            _this.reviews = null;
        });
    };
    Rpa3Component.prototype.deleteFromList = function (id) {
        this.myList.splice(this.myList.indexOf(this.myList[id]), 1);
    };
    Rpa3Component.prototype.getReviews = function (id) {
        var _this = this;
        this.moviePos = id;
        this.movieClicked = this.myList[id];
        this.reviews = [];
        this.movieSrv.getPositiveReviews().then(function (res) {
            for (var idx = 0; idx < res.length; idx++) {
                _this.reviews.push(new _models_rpa3Review_model__WEBPACK_IMPORTED_MODULE_3__["RPA3Review"]('1', res[idx].content.toString().replace(new RegExp('<br />', 'g'), '')));
            }
            var randNr = Math.floor(Math.random() * 5);
            _this.reviews = _this.reviews.slice(0, randNr);
            _this.movieSrv.getNegativeReviews().then(function (res) {
                for (var idx = _this.reviews.length; idx < 5; idx++) {
                    _this.reviews.push(new _models_rpa3Review_model__WEBPACK_IMPORTED_MODULE_3__["RPA3Review"]('0', res[idx].content.toString().replace(new RegExp('<br />', 'g'), '')));
                }
                _this.reviews = _this.shuffleArray(_this.reviews);
                console.log(_this.reviews);
                _this.openModal();
            });
        });
    };
    Rpa3Component.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
        //console.log(this.reviewsClicked)
    };
    Rpa3Component.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    Rpa3Component.prototype.reviewClicked = function (id, review, movieTitle) {
        var idx = this.myList.findIndex(function (movie) { return movie['title'] === movieTitle; });
        this.reviewsClicked[id + idx * 5] = 'true';
        console.log(this.reviews[id].type);
        if (review == this.reviews[id].type && this.buttonStartEnabled == true) {
            this.totalScore++;
        }
    };
    Rpa3Component.prototype.shuffleArray = function (inputArray) {
        var len = inputArray.length;
        var ret = inputArray.slice();
        while (len) {
            var rand = Math.floor(Math.random() * len--);
            var tmp = ret[len];
            ret[len] = ret[rand];
            ret[rand] = tmp;
        }
        return ret;
    };
    Rpa3Component.prototype.start = function () {
        if (this.myList.length === 3) {
            this.buttonStartEnabled = true;
            this.reviewsClicked = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'];
            this.startTime = Date.now();
        }
    };
    Rpa3Component.prototype.submit = function () {
        this.searchMovie = false;
        var counter = Date.now() - this.startTime;
        var succesRate = this.totalScore / 15 * 100;
        this.completedMessage = this.completedMessage.replace('xxx', succesRate + '');
        this.completedMessage = this.completedMessage.replace('yyy', counter + '');
        console.log(this.completedMessage);
        console.log(counter);
    };
    Rpa3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpa3',
            template: __webpack_require__(/*! ./rpa3.component.html */ "./src/app/components/rpa3/rpa3.component.html"),
            styles: [__webpack_require__(/*! ./rpa3.component.css */ "./src/app/components/rpa3/rpa3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rpa3_movies_service__WEBPACK_IMPORTED_MODULE_2__["RPA3_MovieService"]])
    ], Rpa3Component);
    return Rpa3Component;
}());



/***/ }),

/***/ "./src/app/components/rpa4/rpa4.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/rpa4/rpa4.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnBhNC9ycGE0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/rpa4/rpa4.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/rpa4/rpa4.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rpa4 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/rpa4/rpa4.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rpa4/rpa4.component.ts ***!
  \***************************************************/
/*! exports provided: Rpa4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpa4Component", function() { return Rpa4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Rpa4Component = /** @class */ (function () {
    function Rpa4Component() {
    }
    Rpa4Component.prototype.ngOnInit = function () {
    };
    Rpa4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rpa4',
            template: __webpack_require__(/*! ./rpa4.component.html */ "./src/app/components/rpa4/rpa4.component.html"),
            styles: [__webpack_require__(/*! ./rpa4.component.css */ "./src/app/components/rpa4/rpa4.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Rpa4Component);
    return Rpa4Component;
}());



/***/ }),

/***/ "./src/app/services/Utils.ts":
/*!***********************************!*\
  !*** ./src/app/services/Utils.ts ***!
  \***********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getParam = function (data, paramName, defaultValue) {
        if (data.hasOwnProperty(paramName)) {
            return data[paramName];
        }
        return defaultValue;
    };
    Utils.getParamFromObject = function (data, paramName, defaultValue) {
        if (data === undefined || data === null) {
            return defaultValue;
        }
        if (data.hasOwnProperty(paramName)) {
            return data[paramName];
        }
        return defaultValue;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/services/rpa1_checkFields.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/rpa1_checkFields.service.ts ***!
  \******************************************************/
/*! exports provided: CheckFieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckFieldService", function() { return CheckFieldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/models/rpa1Person.model */ "./src/app/components/models/rpa1Person.model.ts");




var CheckFieldService = /** @class */ (function () {
    function CheckFieldService(_activatedRoute) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this.inputPersons = [];
        this.totalScore = 0;
        this.inputPersons = [];
        var selectedLanguage = '';
        _activatedRoute.queryParams.subscribe(function (params) {
            if (params['lang']) {
                selectedLanguage = params['lang'].toString().toUpperCase();
                if (selectedLanguage.toString().toUpperCase() === 'JA') {
                    _this.changeLanguageToJA();
                }
                else {
                    _this.changeLanguageToEN();
                }
            }
            else {
                selectedLanguage = 'EN';
                _this.changeLanguageToEN();
            }
        });
    }
    CheckFieldService.prototype.returnScore = function () {
        return this.totalScore;
    };
    CheckFieldService.prototype.checkPerson = function (checkPerson, idx) {
        if (checkPerson.firstName === this.inputPersons[idx].firstName) {
            this.totalScore++;
        }
        if (checkPerson.lastName === this.inputPersons[idx].lastName) {
            this.totalScore++;
        }
        if (checkPerson.email === this.inputPersons[idx].email) {
            this.totalScore++;
        }
        if (checkPerson.address === this.inputPersons[idx].address) {
            this.totalScore++;
        }
        if (checkPerson.companyName === this.inputPersons[idx].companyName) {
            this.totalScore++;
        }
        if (checkPerson.phone === this.inputPersons[idx].phone) {
            this.totalScore++;
        }
        if (checkPerson.role === this.inputPersons[idx].role) {
            this.totalScore++;
        }
    };
    CheckFieldService.prototype.changeLanguageToJA = function () {
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('隆司', '井上', '東京千代田（株）', '財務部', '東京都', 'takashi.j@itsolutions.co.uk', '40791345621'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('信弘', '佐藤', '（株）北海札幌', '人事部', '北海道', 's.shin@mc.com', '40722345600'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('美佐子', '林', '九州福岡（株）', '情報部', '福岡', 'misa.hayashi@waterfront.com', '40735416854'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('理恵子', '花田', '（株）香川松山', '営業', '香川', 'h.rie@mc.com', '40733652145'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('りさ', '佐藤', '（株）大阪難波', 'ITソリューション', '大阪', 'r-sato@timepath.co.uk', '40799885412'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('優斗', '町田', '愛知名古屋（株）', '代理店', '名古屋', 'you.mati@aperture.us', '40733154268'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('ハマー', '高橋', '（株）秋田海産', 'アドバイザー', '秋田', 'h.hama@sugarwell.org', '40712462257'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('ロドリゲス', 'シェルビー', '（株）富山商店', '業務部', '富山', 's-rodo@aperture.us', '40731254562'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('美恵', '那須', '（株）高知松山', '総務部', '高知', 'na_emi@techdev.com', '40741785214'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('パーマー', 'ララ', '（株）長野信越', '情報システム', '長野', 'rara.p@timepath.co.uk', '40731653845'));
    };
    CheckFieldService.prototype.changeLanguageToEN = function () {
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('John', 'Smith', 'IT Solutions', 'Analyst', '98 North Road', 'jsmith@itsolutions.co.uk', '40716543298'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Jane', 'Dorsey', 'MediCare', 'Medical Engineer', '11 Crown Street', 'jdorsey@mc.com', '40791345621'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Albert', 'Kipling', 'Waterfront', 'Accountant', '22 Guild Street', 'kipling@waterfront.com', '40735416854'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Michael', 'Robertson', 'MediCare', 'IT Specialist', '17 Farburn Terrace', 'mrobertson@mc.com', '40733652145'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Doug', 'Derrick', 'Timepath Inc.', 'Analyst', '99 Shire Oak Road', 'dderrick@timepath.co.uk', '40799885412'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Jessie', 'Marlowe', 'Aperture Inc.', 'Scientist', '27 Cheshire Street', 'jmarlowe@aperture.us', '40733154268'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Stan', 'Hamm', 'Sugarwell', 'Advisor', '10 Dam Road', 'shamm@sugarwell.org', '40712462257'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Michelle', 'Norton', 'Aperture Inc.', 'Scientist', '13 White Rabbit Street', 'mnorton@aperture.us', '40731254562'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Stacy', 'Shelby', 'TechDev', 'HR Manager', '19 Pineapple Boulevard', 'sshelby@techdev.com', '40741785214'));
        this.inputPersons.push(new _components_models_rpa1Person_model__WEBPACK_IMPORTED_MODULE_3__["RPA1Person"]('Lara', 'Palmer', 'Timepath Inc.', 'Programmer', '87 Orange Street', 'lpalmer@timepath.co.uk', '40731653845'));
    };
    CheckFieldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CheckFieldService);
    return CheckFieldService;
}());



/***/ }),

/***/ "./src/app/services/rpa1_dictionary.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/rpa1_dictionary.service.ts ***!
  \*****************************************************/
/*! exports provided: RPA1_DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA1_DictionaryService", function() { return RPA1_DictionaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_models_rpa1Dictonary_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/models/rpa1Dictonary.model */ "./src/app/components/models/rpa1Dictonary.model.ts");
/* harmony import */ var _components_models_rpa1InputFields_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/models/rpa1InputFields.model */ "./src/app/components/models/rpa1InputFields.model.ts");
/* harmony import */ var _assets_downloadFiles_rpa1_dictionary_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/downloadFiles/rpa1_dictionary.json */ "./src/assets/downloadFiles/rpa1_dictionary.json");
var _assets_downloadFiles_rpa1_dictionary_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/downloadFiles/rpa1_dictionary.json */ "./src/assets/downloadFiles/rpa1_dictionary.json", 1);






var RPA1_DictionaryService = /** @class */ (function () {
    // url = 'http://uipath509.westeurope.cloudapp.azure.com:4444/api/v1/rpa1_dictionary/';
    function RPA1_DictionaryService(http) {
        this.http = http;
        this.lng = 'EN';
    }
    RPA1_DictionaryService.prototype.getLanguage = function () {
        return this.lng;
    };
    RPA1_DictionaryService.prototype.setLanguage = function (lng) {
        this.lng = lng;
    };
    // public setDictonary(): Promise<any> {
    //     return this.http
    //     .get(this.url + this.lng)
    //         .toPromise()
    //         .then(
    //              this.extractData,
    //              this.dictionary = this.extractData )
    //         .catch(this.handleError);
    // }
    RPA1_DictionaryService.prototype.getDictonary = function () {
        var _this = this;
        return this.extractData(_assets_downloadFiles_rpa1_dictionary_json__WEBPACK_IMPORTED_MODULE_5__.find(function (item) { return item.language === _this.lng; }));
    };
    // private extractData(resp: Response) {
    RPA1_DictionaryService.prototype.extractData = function (resp) {
        var inputFields = new _components_models_rpa1InputFields_model__WEBPACK_IMPORTED_MODULE_4__["RPA1InputFieldModel"]({
            labelCompanyName: resp['labelCompanyName'],
            labelFirstName: resp['labelFirstName'],
            labelLastName: resp['labelLastName'],
            labelRole: resp['labelRole'],
            labelAddress: resp['labelAddress'],
            labelPhone: resp['labelPhone'],
            labelEmail: resp['labelEmail']
        });
        var dictionary = new _components_models_rpa1Dictonary_model__WEBPACK_IMPORTED_MODULE_3__["RPA1DictonaryModel"]({
            title: resp['title'],
            instructionsTitle: resp['instructionsTitle'],
            instructionsP1: resp['instructionsP1'],
            instructionsP2: resp['instructionsP2'],
            instructionsP3: resp['instructionsP3'],
            instructionsP4: resp['instructionsP4'],
            buttonDownload: resp['buttonDownload'],
            buttonStart: resp['buttonStart'],
            buttonSubmit: resp['buttonSubmit'],
            congratulations: resp['congratulations'],
            completedMessage: resp['completedMessage'],
            inputFields: inputFields
        });
        return dictionary;
    };
    RPA1_DictionaryService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RPA1_DictionaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RPA1_DictionaryService);
    return RPA1_DictionaryService;
}());



/***/ }),

/***/ "./src/app/services/rpa3_movies.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rpa3_movies.service.ts ***!
  \*************************************************/
/*! exports provided: RPA3_MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPA3_MovieService", function() { return RPA3_MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");





var RPA3_MovieService = /** @class */ (function () {
    function RPA3_MovieService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
        this.apikey = '014c5ff2b83dc17257629894b0fef1fb';
        console.log('MovieService Initialized...');
    }
    RPA3_MovieService.prototype.getPopular = function () {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    RPA3_MovieService.prototype.searchMovies = function (searchStr) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    RPA3_MovieService.prototype.getMovie = function (id) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    RPA3_MovieService.prototype.getPositiveReviews = function () {
        return this.http
            .get("http://uipath509.westeurope.cloudapp.azure.com:4444/api/v1/rpa3_reviewsPos")
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(this.handleError);
    };
    RPA3_MovieService.prototype.getNegativeReviews = function () {
        return this.http
            .get("http://uipath509.westeurope.cloudapp.azure.com:4444/api/v1/rpa3_reviewsNeg")
            .toPromise()
            .then(function (resp) {
            return resp;
        })
            .catch(this.handleError);
    };
    RPA3_MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RPA3_MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Jsonp"]])
    ], RPA3_MovieService);
    return RPA3_MovieService;
}());



/***/ }),

/***/ "./src/assets/downloadFiles/rpa1_dictionary.json":
/*!*******************************************************!*\
  !*** ./src/assets/downloadFiles/rpa1_dictionary.json ***!
  \*******************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"language":"EN","title":"Automation Challenge","instructionsTitle":"Instructions","instructionsP1":"1. The goal of this challenge is to create a workflow that will input data from a spreadsheet into the form fields on the screen.","instructionsP2":"2. Beware! The fields will change position on the screen after every submission throughout 10 rounds thus the workflow must correctly identify where each spreadsheet record must be typed every time.","instructionsP3":"3. The actual countdown of the challenge will begin once you click the Start button until then  you may submit the form as many times as you wish without receiving penalties.","instructionsP4":"Good luck!","congratulations":"Congratulations","completedMessage":"Your success rate is xxx ( zzz out of 70 fields) in yyy milliseconds","buttonDownload":"Download Excel","buttonStart":"Start","buttonSubmit":"Submit","labelCompanyName":"Company Name","labelFirstName":"First Name","labelLastName":"Last Name","labelRole":"Role in Company","labelAddress":"Address","labelPhone":"Phone Number","labelEmail":"Email"},{"language":"RO","title":"Automation Challenge","instructionsTitle":"Instructiuni","instructionsP1":"1. Scopul acestui test este de a face un proces care va introduce date dintr-un fisier Excel in formularul din partea dreapta","instructionsP2":"2 .Campurile din formular isi vor schimba pozitia de fiecare data cand butonul Trimite va fi apasat. Vor fi 10 runde de procesat, deci procesul va trebui sa identifice de fiecare data campul corect din formular","instructionsP3":"3. Cronometrul va incepe in momentul cand veti apasa butonul Start. Pana atunci puteti apasa butonul Trimite de cate ori doriti fara a avea o penalizare","instructionsP4":"Succes!","congratulations":"Felicitari","completedMessage":"Rata de succes este de xxx ( zzz din 70 de campuri) in yyy milisecunde","buttonDownload":"Descarca fisierul","buttonStart":"Start","buttonSubmit":"Trimite","labelCompanyName":"Numele Companiei","labelFirstName":"Prenume","labelLastName":"Numele de Familie","labelRole":"Rolul in Companie","labelAddress":"Adresa","labelPhone":"Numar de telefon","labelEmail":"Email"},{"language":"JA","title":"RPAチャレンジ","instructionsTitle":"このチャレンジの概要","instructionsP1":"1. Excelファイルをダウンロードしてください <br> Excelファイルには顧客データ（デモ用）が記載されています<br>UiPathを使用し、顧客データを登録するワークフローを作成してください","instructionsP2":"2. テキストボックスの位置は、[登録] <br> を押すたびに、画面上の位置が変更されることをご留意ください <br> 入力対象と、入力情報は一致している必要があります","instructionsP3":"3.「開始」ボタンをクリック後、10回まで[登録] ができ、完了すると正解率と、処理速度が計測されます","instructionsP4":"","congratulations":"完了しました","completedMessage":"正解率 ：'xxx' (zzz/70）速度：'yyy' ミリ秒にて処理が完了しました","buttonDownload":"Excelファイルをダウンロード","buttonStart":"開始","buttonSubmit":"登録","labelCompanyName":"会社名","labelFirstName":"名前","labelLastName":"苗字","labelRole":"部署","labelAddress":"住所","labelPhone":"電話番号","labelEmail":"メールアドレス"}];

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mihai.andrei\Desktop\work\projects\_INTERNAL_RPAChallenge\rpaChallenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map