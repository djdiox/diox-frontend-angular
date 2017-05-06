webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 102;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(127);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(262),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(configService) {
        this.configService = null;
        this.configService = configService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(263),
        styles: [__webpack_require__(185)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_config_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__music_music_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__biography_biography_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__foot_bar_foot_bar_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__photos_photos_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__code_code_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__stream_stream_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule(configService) {
        this.configService = null;
        this.currentView = '';
        this.configService = configService;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__music_music_component__["a" /* MusicComponent */],
            __WEBPACK_IMPORTED_MODULE_12__biography_biography_component__["a" /* BiographyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__foot_bar_foot_bar_component__["a" /* FootBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_17__code_code_component__["a" /* CodeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__stream_stream_component__["a" /* StreamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_config_service__["a" /* ConfigService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BiographyComponent = (function () {
    function BiographyComponent() {
    }
    BiographyComponent.prototype.ngOnInit = function () {
    };
    return BiographyComponent;
}());
BiographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-biography',
        template: __webpack_require__(264),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], BiographyComponent);

//# sourceMappingURL=biography.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeComponent = (function () {
    function CodeComponent() {
    }
    CodeComponent.prototype.ngOnInit = function () {
    };
    return CodeComponent;
}());
CodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-code',
        template: __webpack_require__(265),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], CodeComponent);

//# sourceMappingURL=code.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(266),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootBarComponent = (function () {
    function FootBarComponent() {
    }
    FootBarComponent.prototype.ngOnInit = function () {
    };
    return FootBarComponent;
}());
FootBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-foot-bar',
        template: __webpack_require__(267),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], FootBarComponent);

//# sourceMappingURL=foot-bar.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(268),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-music',
        template: __webpack_require__(269),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], MusicComponent);

//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(configService) {
        this.configService = null;
        this.configService = configService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.openNav = function () {
        var myDiv = document.getElementById('mySidenav');
        myDiv.style.width = '100%';
    };
    NavBarComponent.prototype.closeNav = function () {
        var myDiv = document.getElementById('mySidenav');
        myDiv.style.width = '0';
    };
    NavBarComponent.prototype.setView = function (view) {
        this.configService.currentView = view;
        this.configService.title = view + ' page';
        this.closeNav();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(270),
        styles: [__webpack_require__(192)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { GalleriaModule } from 'primeng/primeng';
var PhotosComponent = (function () {
    function PhotosComponent() {
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'assets/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__(271),
        styles: [__webpack_require__(193)],
    }),
    __metadata("design:paramtypes", [])
], PhotosComponent);

//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(272),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StreamComponent = (function () {
    function StreamComponent() {
    }
    StreamComponent.prototype.ngOnInit = function () {
    };
    return StreamComponent;
}());
StreamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stream',
        template: __webpack_require__(273),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], StreamComponent);

//# sourceMappingURL=stream.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".content {\r\n    padding: 15px 10px 15px 10px;\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 29px;\r\n    min-height: 1200px;\r\n    background-color: cornflowerblue;\r\n    opacity: 0.8;\r\n    border-radius: 5px;\r\n}\r\n\r\n.mobile-title-only {\r\n    display: none;\r\n}\r\n\r\n@media(max-width:1000px) {\r\n    .mobile-title-only {\r\n        color: white;\r\n        display: blocK;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 12;\r\n    top: 0;\r\n    left: 0;\r\n    background-image: url(" + __webpack_require__(312) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 3px 8px 3px 32px;\r\n    text-decoration: none;\r\n    font-size: 65px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav a {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n#normal-nav {\r\n    width: 98%;\r\n    display: inline-block;\r\n}\r\n\r\n#navToggle {\r\n    float: left;\r\n    margin-top: 5px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.simple-nav {\r\n    width: 80.3%;\r\n    position: fixed;\r\n    top: -45px;\r\n    list-style-type: none;\r\n    margin-left: 9%;\r\n    padding: 0;\r\n    overflow: visible;\r\n    opacity: 0.8;\r\n    z-index: 3;\r\n    background-color: forestgreen;\r\n    transition: all 0.5s ease-out;\r\n    border-radius: 5px;\r\n}\r\n\r\n.hovered {\r\n    top: 0px;\r\n}\r\n\r\n.hovered-nav {\r\n    -webkit-transform: translate(0, 39px);\r\n            transform: translate(0, 39px);\r\n    top: -57px;\r\n}\r\n\r\n.nav-icon {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 20px;\r\n    margin-right: 7px;\r\n    width: 12px;\r\n}\r\n\r\n.simple-nav li .active {\r\n    -webkit-transform: translate(0, 15px);\r\n            transform: translate(0, 15px);\r\n    transition: all 0.1s ease-out;\r\n}\r\n\r\ni {\r\n    border: solid black;\r\n    border-width: 0 8px 8px 0;\r\n    padding: 12px;\r\n    z-index: 4;\r\n    transition: all 0.6s ease-out;\r\n    z-index: 4;\r\n    float: right;\r\n}\r\n\r\n.arrow-down {\r\n    /*right: 0%;*/\r\n    /*top: 58px*/\r\n}\r\n\r\n.up {\r\n    top: 74px;\r\n    transform: rotate(-135deg);\r\n    -webkit-transform: rotate(-135deg);\r\n}\r\n\r\n.down {\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.hovered-arrow {\r\n    -webkit-transform: translate(0, 100px);\r\n            transform: translate(0, 100px);\r\n    opacity: 0;\r\n    border-top-color: deepskyblue;\r\n}\r\n\r\nli {\r\n    float: left;\r\n    position: relative;\r\n    right: 11px;\r\n    margin-left: 10px;\r\n    top: 14px;\r\n}\r\n\r\n.right-panel {\r\n    float: right;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    padding: 12px 26px;\r\n    text-decoration: none;\r\n}\r\n\r\n.home {\r\n    padding-right: 16%;\r\n}\r\n\r\nli .nav-item:hover,\r\n.nav-icon:hover {\r\n    background-color: deepskyblue\r\n}\r\n\r\n.menu-points {\r\n    margin-left: 20%;\r\n}\r\n\r\nli .active {\r\n    background-color: deepskyblue;\r\n    position: relative;\r\n    top: -4px;\r\n    border: 1px solid white;\r\n}\r\n\r\n.item-active {\r\n    position: relative;\r\n    top: 10px;\r\n}\r\n\r\n@media (max-width:768px) {\r\n    .arrow-container {\r\n        display: none;\r\n    }\r\n    .arrow {\r\n        display: none;\r\n    }\r\n    .simple-nav {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media(min-width:1000px) and (max-width:1280px) {\r\n    .nav-item {\r\n        padding: 16px 17px!important;\r\n    }\r\n    .menu-points {\r\n        margin-left: 12%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<img src=\"assets\\diox_banner.png\">"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<h2 class=\"mobile-title-only\">\n    {{configService.title}}\n</h2>\n<div class=\"content\">\n    <app-home-page *ngIf=\"configService.currentView == 'home'\"></app-home-page>\n    <app-about *ngIf=\"configService.currentView == 'about'\"></app-about>\n    <app-biography *ngIf=\"configService.currentView == 'biography'\"></app-biography>\n    <app-music *ngIf=\"configService.currentView == 'music'\"></app-music>\n    <app-stream *ngIf=\"configService.currentView == 'stream'\"></app-stream>\n    <app-contact *ngIf=\"configService.currentView == 'contact'\"></app-contact>\n    <app-settings *ngIf=\"configService.currentView == 'settings'\"></app-settings>\n    <app-photos *ngIf=\"configService.currentView == 'photos'\"></app-photos>\n    <app-code *ngIf=\"configService.currentView == 'code'\"></app-code>\n</div>\n<app-foot-bar></app-foot-bar>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<div class=\"biography-article\">\n  <h3>What I've learned:</h3>\n  The reach of a page is just not enough to say your advertisment gonna hit in like a Bomb. With that force we can change something,\n  somehow in someway... I started mixing with 15 at a online radio with max. 2 listeners. We will see what is next up!\n</div>\n<div class=\"biography-article\">\n  <h3> DJ CAREER UNTIL NOW</h3>\n\n  Before I start with the Details of myself, i want to say something: Experience and the love to music is not replaceable.\n  References or technology will never sound as good as the brain and ears of us...\n</div>\n<div class=\"biography-article\">\n  <h3>MUSIC IS MY WORLD SINCE I CAN THINK.</h3>\n\n  Open for anything kind of DJ'ing, Producing or VJ'ing in Duo or just support! I use following technology to fulfill my electronic\n  dreams: Pioneer XDJ-Aero Pioneer DDJ-SB AKAI APC-Key 25 I started to mix with a DJM-300 and 2 CDJ-800 as part of a workshop!\n</div>\n<div class=\"biography-article\">\n\n  <h3> PAST: ONLINE RADIO</h3>\n  I passed in the last four years a lot of differently sized online radios like GMS-Radio, TechLaRocca.FM, technoveranstaltungen.com.\n  I always performed live shows via microphone or chat / webcam. But it really needed to much time, for nearly none reward\n  for it. But now the show is actually pretty well so, lets see where it leads :)\n</div>\n<div class=\"biography-article\">\n  <h3> TODAY: PODCAST SHOW</h3>\n  Currently I host a 2-Hour Podcast Show alongside many famous DJ's and DJane's like Gabriel Ananda, Marco Bailey and Carl\n  Cox. The Show \"House World\" always airs 18 PM CET on Monday at In Progress Radio Followed by my genuine DJ Buddy Steve\n  Stevens (Checkout his Mixcloud for some badass Techno)\n</div>\n\n<div class=\"biography-article\">\n  <h3> LIVE REFERENCES / GIG'S</h3>\n\n  <ul class=\"biography-list\">\n    <li> Hype Club</li>\n    <li> Mietbar (Mixcloud Set)</li>\n    <li> Tequila Bar Shot</li>\n    <li> Mr. Shisha</li>\n    <li>\n      Peace Me Up Festival\n    </li>\n\n  </ul>\n  ... but doing this for many years unpaid, whether it is hunting for the best executed set, trying to sample the most amazing\n  bassline or sound combos actually does!\n</div>\n<div class=\"biography-article\">\n  <h3> FUTURE? NOW OR NEVER!</h3>\n\n  I will put the most of my effort to start over and play offline and play a very intense Set for more than 100 People. I have\n  to admit, 4 AM in the morning hearing the people scream because they have a good time was the best feeling ever! Hopefully\n  this will reach soon a person, who is maybe working in the club, a booking agency or any other techno or house based events.\n  I hope creating this web page helps finding the one, who really wants to start something unique and exciting!\n</div>\n<div class=\"biography-article\">\n  While I was playing weekly as a Resident DJ on different Webradios, I also worked as the Admin and Supporter or Coder for\n  them.\n  <br> A friend begun technoveranstaltungen.de, and launched at the same time the webradio \"Geschmack ist Techno\"<br> I had\n  to take care for a half year of the the job as Administrator, Moderator and Content Manager and DJ. They had around 7000\n  (Current: ~12000) Likes on their FB-Page.\n</div>\n<div class=\"clear-div\"></div>"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<p>\n  code works!\n</p>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>(c) Markus Wagner</p>\n</footer>"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<h1>\n    Home\n</h1>\n<p>\n    Welcome to my Page for my DJ and Photographing stuff\n</p>\n\n<p-accordion>\n    <p-accordionTab header=\"Music!\">\n        Content 1\n    </p-accordionTab>\n    <p-accordionTab header=\"Gaming!\">\n        Content 2\n    </p-accordionTab>\n    <p-accordionTab header=\"Programming!\">\n        Content 3\n    </p-accordionTab>\n</p-accordion>\n\n<div class=\"news-container\">\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n    <div class=\"news-item\">\n        <p>News Item</p>\n    </div>\n</div>\n\n<div class=\"chat-container\">\n\n</div>"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<p>\n  music works!\n</p>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<a id=\"navToggle\" (click)=\"openNav()\"><span style=\"font-size:30px;cursor:pointer;color:white;position:fixed;\">&#9776;</span></a>\n<div id=\"normal-nav\">\n    <ul class=\"simple-nav\" [class.hovered-nav]=\"didHover\">\n        <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'home'\" (click)=\"setView('home')\">&#8962;</a></li>\n        <div class=\"menu-points\">\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'about'\" (click)=\"setView('about')\">About</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'music'\" (click)=\"setView('music')\">Music</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'stream'\" (click)=\"setView('stream')\">Livestreams</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'photos'\" (click)=\"setView('photos')\">Photography</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'biography'\" (click)=\"setView('biography')\">Biography</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'contact'\" (click)=\"setView('contact')\">Contact</a></li>\n            <li [class.hovered]=\"didHover\"><a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'code'\" (click)=\"setView('code')\">Coding</a></li>\n        </div>\n        <li class=\"right-panel\" (click)=\"didHover = !didHover\">\n            <i class=\"arrow up\" [class.hovered-arrow]=\"!didHover\"></i>\n            <i class=\"arrow down\" [class.hovered-arrow]=\"didHover\"></i>\n        </li>\n    </ul>\n</div>\n<div id=\"mySidenav\" class=\"sidenav\" [style.width]=\"{'width': navWidth}\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a href=\"#\" (click)=\"setView('home')\" style=\"font-size: 40pt\">&#8962;</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'about'\" (click)=\"setView('about')\">About</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'music'\" (click)=\"setView('music')\">Music</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'stream'\" (click)=\"setView('stream')\">Streams</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'photos'\" (click)=\"setView('photos')\">Photography</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'biography'\" (click)=\"setView('biography')\">Biography</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'contact'\" (click)=\"setView('contact')\">Contact</a>\n    <a class=\"nav-item\" href=\"#\" [class.active]=\"configService.currentView == 'code'\" (click)=\"setView('code')\">Coding</a>\n</div>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<p-galleria [images]=\"images\" panelWidth=\"1000\" panelHeight=\"600\" [showCaption]=\"true\"></p-galleria>"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<p>\n  stream works!\n</p>\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rave.719e056f65d596df77b6.jpg";

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        var _this = this;
        this.currentView = 'home';
        this.title = 'home page';
        this.setView = function (view) {
            _this.currentView = view;
        };
    }
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.bundle.js.map