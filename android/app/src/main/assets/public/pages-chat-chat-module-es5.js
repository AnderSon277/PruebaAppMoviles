(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Chat</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"logout()\">\r\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n<ion-grid>\r\n  <ion-row *ngFor=\"let message of messages | async\">\r\n    <ion-col size=\"9\" class=\"message\" [offset]=\"message.myMsg ? 3 : 0\"\r\n    [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\r\n    \r\n\r\n    <b>{{ message.fromName }}</b><br>\r\n    <span>{{ message.msg }}\r\n    </span>\r\n    <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"8\">\r\n        <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"400\" [(ngModel)]=\"newMsg\" >\r\n        </ion-textarea>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\"\r\n          class=\"msg-btn\">\r\n          <ion-icon name=\"attach-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\"\r\n          class=\"msg-btn\" (click)=\"sendMessage()\">\r\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/chat/chat-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/chat/chat-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ChatPageRoutingModule */

    /***/
    function srcAppPagesChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
        return ChatPageRoutingModule;
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


      var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/pages/chat/chat.page.ts");

      var routes = [{
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
      }];

      var ChatPageRoutingModule = function ChatPageRoutingModule() {
        _classCallCheck(this, ChatPageRoutingModule);
      };

      ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/chat/chat.module.ts ***!
      \*******************************************/

    /*! exports provided: ChatPageModule */

    /***/
    function srcAppPagesChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
        return ChatPageModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-routing.module */
      "./src/app/pages/chat/chat-routing.module.ts");
      /* harmony import */


      var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.page */
      "./src/app/pages/chat/chat.page.ts");

      var ChatPageModule = function ChatPageModule() {
        _classCallCheck(this, ChatPageModule);
      };

      ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
      })], ChatPageModule);
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/chat/chat.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #c9ecec;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNjOWVjZWM7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ubXktbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgY29sb3I6ICNkZmRmZGY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/chat/chat.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/chat/chat.page.ts ***!
      \*****************************************/

    /*! exports provided: ChatPage */

    /***/
    function srcAppPagesChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
        return ChatPage;
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


      var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/chat.service */
      "./src/app/services/chat.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ChatPage = /*#__PURE__*/function () {
        function ChatPage(chatService, router) {
          _classCallCheck(this, ChatPage);

          this.chatService = chatService;
          this.router = router;
          this.newMsg = '';
        }

        _createClass(ChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.messages = this.chatService.getChatMessages();
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this = this;

            this.chatService.addChatMessage(this.newMsg).then(function () {
              _this.newMsg = '';

              _this.content.scrollToBottom();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this.chatService.logout().then(function () {
              _this2.router.navigateByUrl('/', {
                replaceUrl: true
              });
            });
          }
        }]);

        return ChatPage;
      }();

      ChatPage.ctorParameters = function () {
        return [{
          type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ChatPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }]
      };
      ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat.page.scss */
        "./src/app/pages/chat/chat.page.scss"))["default"]]
      })], ChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chat-chat-module-es5.js.map