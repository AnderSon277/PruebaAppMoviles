(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-email-send-email-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-email/send-email.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-email/send-email.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSendEmailSendEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>BIENVENIDO A NUESTRO CHAT! </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"ngOnDestroy()\">\r\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\"> \r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n        <ion-label>\r\n          Por favor revise su correo electrónico, se ha enviado un link de confirmación a\r\n          <ng-container *ngIf=\"user$ | async as user; else loading\">\r\n            <strong>{{ user?.email }}</strong>\r\n          </ng-container>\r\n        </ion-label>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <ion-item>\r\n          <ion-label> ¿No has recibido el link de confirmación? </ion-label>\r\n          <ion-button (click)=\"onSendEmail()\" fill=\"outline\" color=\"secondary\">Reenviar correo</ion-button>\r\n        </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n\r\n<ng-template #loading>\r\n  Cargando....\r\n</ng-template>";
      /***/
    },

    /***/
    "./src/app/pages/send-email/send-email-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/send-email/send-email-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SendEmailPageRoutingModule */

    /***/
    function srcAppPagesSendEmailSendEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendEmailPageRoutingModule", function () {
        return SendEmailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _send_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./send-email.page */
      "./src/app/pages/send-email/send-email.page.ts");

      var routes = [{
        path: '',
        component: _send_email_page__WEBPACK_IMPORTED_MODULE_3__["SendEmailPage"]
      }];

      var SendEmailPageRoutingModule = function SendEmailPageRoutingModule() {
        _classCallCheck(this, SendEmailPageRoutingModule);
      };

      SendEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SendEmailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/send-email/send-email.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/send-email/send-email.module.ts ***!
      \*******************************************************/

    /*! exports provided: SendEmailPageModule */

    /***/
    function srcAppPagesSendEmailSendEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendEmailPageModule", function () {
        return SendEmailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./send-email-routing.module */
      "./src/app/pages/send-email/send-email-routing.module.ts");
      /* harmony import */


      var _send_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./send-email.page */
      "./src/app/pages/send-email/send-email.page.ts");

      var SendEmailPageModule = function SendEmailPageModule() {
        _classCallCheck(this, SendEmailPageModule);
      };

      SendEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendEmailPageRoutingModule"]],
        declarations: [_send_email_page__WEBPACK_IMPORTED_MODULE_6__["SendEmailPage"]]
      })], SendEmailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/send-email/send-email.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/send-email/send-email.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSendEmailSendEmailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbmQtZW1haWwvc2VuZC1lbWFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/send-email/send-email.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/send-email/send-email.page.ts ***!
      \*****************************************************/

    /*! exports provided: SendEmailPage */

    /***/
    function srcAppPagesSendEmailSendEmailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendEmailPage", function () {
        return SendEmailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/chat.service */
      "./src/app/services/chat.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SendEmailPage = /*#__PURE__*/function () {
        function SendEmailPage(router, chatService) {
          _classCallCheck(this, SendEmailPage);

          this.router = router;
          this.chatService = chatService;
          this.user$ = this.chatService.afAuth.user;
        }

        _createClass(SendEmailPage, [{
          key: "onSendEmail",
          value: function onSendEmail() {
            this.chatService.sendVerificationEmail();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.chatService.logout();
            this.router.navigateByUrl('/', {
              replaceUrl: true
            });
          }
        }]);

        return SendEmailPage;
      }();

      SendEmailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }];
      };

      SendEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./send-email.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-email/send-email.page.html"))["default"],
        providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./send-email.page.scss */
        "./src/app/pages/send-email/send-email.page.scss"))["default"]]
      })], SendEmailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-send-email-send-email-module-es5.js.map