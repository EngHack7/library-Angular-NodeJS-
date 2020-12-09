function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/addauther/addauther.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/addauther/addauther.component.ts ***!
    \**************************************************/

  /*! exports provided: AddautherComponent */

  /***/
  function srcAppAddautherAddautherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddautherComponent", function () {
      return AddautherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auther_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auther.service */
    "./src/app/auther.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddautherComponent = /*#__PURE__*/function () {
      function AddautherComponent(route, _auther_service) {
        _classCallCheck(this, AddautherComponent);

        this.route = route;
        this._auther_service = _auther_service;
      }

      _createClass(AddautherComponent, [{
        key: "HandleAdd",
        value: function HandleAdd(name) {
          this._auther_service.AddAuther(name);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        }
      }]);

      return AddautherComponent;
    }();

    AddautherComponent.ɵfac = function AddautherComponent_Factory(t) {
      return new (t || AddautherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]));
    };

    AddautherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddautherComponent,
      selectors: [["app-addauther"]],
      decls: 8,
      vars: 0,
      consts: [[1, "contact-us"], ["placeholder", "New Auther Name", "type", "text"], ["AN", ""], ["type", "button", 3, "click"]],
      template: function AddautherComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddautherComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.HandleAdd(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  background: #f8f4e5;\n  padding: 50px 100px;\n  border: 2px solid black;\n  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n}\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 14pt;\n  line-height: 28pt;\n  font-family: \"Fjalla One\";\n  margin-bottom: 28pt;\n  border: none;\n  border-bottom: 5px solid black;\n  background: #f8f4e5;\n  min-width: 250px;\n  padding-left: 5px;\n  outline: none;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 5px solid #ffa580;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  line-height: 28pt;\n  padding: 0 20px;\n  background: #ffa580;\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  outline: none;\n  border: 1px solid black;\n  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n  border: 1px solid black;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #ffc8ff;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #ffc8ff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border-bottom: 5px solid #95a4ff;\n  -webkit-text-fill-color: #2A293E;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYXV0aGVyL2FkZGF1dGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdLQUFnSztFQUNoSyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMERBQTBEO0FBQzVEO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRkE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTs7O0VBR0UsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnREFBZ0Q7RUFDaEQseURBQWlEO0VBQWpELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJzcmMvYXBwL2FkZGF1dGhlci9hZGRhdXRoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmUmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3QyLmRlcG9zaXRwaG90b3MuY29tLzgxODcwOTQvMTIwOTAvaS85NTAvZGVwb3NpdHBob3Rvc18xMjA5MDMyMzQtc3RvY2stcGhvdG8tb3Blbi1ib29rLWhhcmRiYWNrLWJvb2tzLW9uLmpwZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LXVzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxcHggI2ZmYTU4MCwgMTVweCAxNXB4IDFweCAycHggYmxhY2s7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBmb250LWZhbWlseTogXCJGamFsbGEgT25lXCI7XG4gIG1hcmdpbi1ib3R0b206IDI4cHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZjhmNGU1O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZhNTgwO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmE1ODA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxcHggIzk1YTRmZiwgM3B4IDNweCAxcHggMXB4IGJsYWNrO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmYzhmZjtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5NWE0ZmY7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMkEyOTNFO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNmOGY0ZTUgaW5zZXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddautherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addauther',
          templateUrl: './addauther.component.html',
          styleUrls: ['./addauther.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/addbook/addbook.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/addbook/addbook.component.ts ***!
    \**********************************************/

  /*! exports provided: AddbookComponent */

  /***/
  function srcAppAddbookAddbookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddbookComponent", function () {
      return AddbookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book.service.ts");
    /* harmony import */


    var _auther_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auther.service */
    "./src/app/auther.service.ts");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");

    function AddbookComponent_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var auther_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", auther_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", auther_r5.auther_Name, " ");
      }
    }

    var AddbookComponent = /*#__PURE__*/function () {
      function AddbookComponent(_bookService, _autherService, _tagService) {
        _classCallCheck(this, AddbookComponent);

        this._bookService = _bookService;
        this._autherService = _autherService;
        this._tagService = _tagService;
        this.selectedTags = [];
        this.localFields = {
          text: 'tag_Name',
          value: 'id'
        };
        this.localWaterMark = 'Select tags';
      }

      _createClass(AddbookComponent, [{
        key: "HandleAdd",
        value: function HandleAdd(title, des, id, image_URL) {
          if (title === "" && des === "") {
            this.warning = "enter value for title and description at least";
          }

          if (!this.selectedTags && !this.selectedAutherId) {
            this._bookService.Add(title, des);
          } else if (!this.selectedAutherId) {//
          } else if (this.tags.length < 0) {//
          } else {
            this.selectedTags = [id];

            this._bookService.AddWithAutherAndTag(title, des, this.selectedAutherId, this.selectedTags[0], image_URL);
          }
        }
      }, {
        key: "selectChangeHandler",
        value: function selectChangeHandler(event) {
          this.selectedAutherId = event.target.value;
          console.log(this.selectedAutherId);
        }
      }, {
        key: "tagChangeHandler",
        value: function tagChangeHandler(event) {
          this.selectedTags = event.target.value;
          console.log(this.selectedTags);
        }
      }, {
        key: "HandleTagId",
        value: function HandleTagId(id) {
          this.selectedTags = [{
            id: id
          }];
          console.log(this.selectedTags);
        }
      }, {
        key: "Alert",
        value: function Alert(name) {
          console.log(name);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._tagService.GetTags().subscribe(function (data) {
            _this.tags = data;
            console.log(data);
          });

          this._autherService.GetAuther().subscribe(function (data) {
            return _this.authers = data;
          });
        }
      }]);

      return AddbookComponent;
    }();

    AddbookComponent.ɵfac = function AddbookComponent_Factory(t) {
      return new (t || AddbookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]));
    };

    AddbookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddbookComponent,
      selectors: [["app-addbook"]],
      decls: 20,
      vars: 4,
      consts: [[1, "contact-us"], ["placeholder", "title", "type", "text", 1, "input"], ["title", ""], ["placeholder", "description", "type", "text", 1, "input"], ["desc", ""], [1, "selectdiv"], [3, "change"], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["id", "localData", 3, "dataSource", "fields", "placeholder"], ["local", ""], ["type", "file", "accept", "image/*"], ["image", ""], [3, "click"], ["selected", "", 3, "value"]],
      template: function AddbookComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddbookComponent_Template_select_change_10_listener($event) {
            return ctx.selectChangeHandler($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddbookComponent_option_11_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ejs-multiselect", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddbookComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return ctx.HandleAdd(_r0.value, _r1.value, _r3.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tags)("fields", ctx.localFields)("placeholder", ctx.localWaterMark);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  background: #f8f4e5;\n  padding: 50px 100px;\n  border: 2px solid black;\n  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n}\n.input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 14pt;\n  line-height: 28pt;\n  font-family: \"Fjalla One\";\n  margin-bottom: 28pt;\n  border: none;\n  border-bottom: 5px solid black;\n  background: #f8f4e5;\n  min-width: 250px;\n  padding-left: 5px;\n  outline: none;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 5px solid #ffa580;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  line-height: 28pt;\n  padding: 0 20px;\n  background: #ffa580;\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  outline: none;\n  border: 1px solid black;\n  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n  border: 1px solid black;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #ffc8ff;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #ffc8ff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border-bottom: 5px solid #95a4ff;\n  -webkit-text-fill-color: #2A293E;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.selectdiv[_ngcontent-%COMP%] {\n  position: relative;\n  \n  \n  float: left;\n  min-width: 200px;\n  margin-bottom: 21px;\n}\n\nselect[_ngcontent-%COMP%]::-ms-expand {\ndisplay: block;\n}\n.selectdiv[_ngcontent-%COMP%]:after {\n  content: '<>';\n  font: 17px \"Consolas\", monospace;\n  color: #333;\n  transform: rotate(90deg);\n  right: 11px;\n  \n  \n  top: 18px;\n  padding: 0 0 2px;\n  border-bottom: 1px solid #999;\n  \n  \n  position: absolute;\n  pointer-events: none;\n}\n.selectdiv[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  \n  \n  display: block;\n  width: 100%;\n  max-width: 320px;\n  height: 50px;\n  float: right;\n  margin: 5px 0px;\n  padding: 0px 24px;\n  font-size: 16px;\n  line-height: 1.75;\n  color: #333;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  -ms-word-break: normal;\n  word-break: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYm9vay9hZGRib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4RUFBOEU7QUFGOUUsUUFBUTtBQUdSO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0UsZ0tBQWdLO0VBQ2hLLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwREFBMEQ7QUFDNUQ7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFGQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdEQUFnRDtFQUNoRCx5REFBaUQ7RUFBakQsaURBQWlEO0FBQ25EO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0NBQStDOztFQUUvQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBLDJDQUEyQztBQUMzQztBQUNBLGNBQWM7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxXQUFXO0VBSVgsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCx1Q0FBdUM7O0VBRXZDLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCOztFQUVyQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkZGJvb2svYWRkYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gICovXG5cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmUmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3QyLmRlcG9zaXRwaG90b3MuY29tLzgxODcwOTQvMTIwOTAvaS85NTAvZGVwb3NpdHBob3Rvc18xMjA5MDMyMzQtc3RvY2stcGhvdG8tb3Blbi1ib29rLWhhcmRiYWNrLWJvb2tzLW9uLmpwZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LXVzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxcHggI2ZmYTU4MCwgMTVweCAxNXB4IDFweCAycHggYmxhY2s7XG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBsaW5lLWhlaWdodDogMjhwdDtcbiAgZm9udC1mYW1pbHk6IFwiRmphbGxhIE9uZVwiO1xuICBtYXJnaW4tYm90dG9tOiAyOHB0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZhNTgwO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmE1ODA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxcHggIzk1YTRmZiwgM3B4IDNweCAxcHggMXB4IGJsYWNrO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmYzhmZjtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5NWE0ZmY7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMkEyOTNFO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNmOGY0ZTUgaW5zZXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5zZWxlY3RkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qRG9uJ3QgcmVhbGx5IG5lZWQgdGhpcyBqdXN0IGZvciBkZW1vIHN0eWxpbmcqL1xuICBcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XG59XG5cbi8qIElFMTEgaGlkZSBuYXRpdmUgYnV0dG9uICh0aGFua3MgTWF0dCEpICovXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3RkaXY6YWZ0ZXIge1xuICBjb250ZW50OiAnPD4nO1xuICBmb250OiAxN3B4IFwiQ29uc29sYXNcIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogIzMzMztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHJpZ2h0OiAxMXB4O1xuICAvKkFkanVzdCBmb3IgcG9zaXRpb24gaG93ZXZlciB5b3Ugd2FudCovXG4gIFxuICB0b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDAgMCAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICAvKmxlZnQgbGluZSAqL1xuICBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlbGVjdGRpdiBzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogQWRkIHNvbWUgc3R5bGluZyAqL1xuICBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBwYWRkaW5nOiAwcHggMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIC1tcy13b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddbookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addbook',
          templateUrl: './addbook.component.html',
          styleUrls: ['./addbook.component.css']
        }]
      }], function () {
        return [{
          type: _book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]
        }, {
          type: _auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]
        }, {
          type: _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/addtag/addtag.component.ts":
  /*!********************************************!*\
    !*** ./src/app/addtag/addtag.component.ts ***!
    \********************************************/

  /*! exports provided: AddtagComponent */

  /***/
  function srcAppAddtagAddtagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddtagComponent", function () {
      return AddtagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");

    var AddtagComponent = /*#__PURE__*/function () {
      function AddtagComponent(_tag_Service) {
        _classCallCheck(this, AddtagComponent);

        this._tag_Service = _tag_Service;
      }

      _createClass(AddtagComponent, [{
        key: "HandleAdd",
        value: function HandleAdd(tag_Name) {
          this._tag_Service.AddTag(tag_Name);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddtagComponent;
    }();

    AddtagComponent.ɵfac = function AddtagComponent_Factory(t) {
      return new (t || AddtagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"]));
    };

    AddtagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddtagComponent,
      selectors: [["app-addtag"]],
      decls: 4,
      vars: 0,
      consts: [["type", "text"], ["nameadd", ""], [3, "click"]],
      template: function AddtagComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddtagComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.HandleAdd(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRhZy9hZGR0YWcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddtagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addtag',
          templateUrl: './addtag.component.html',
          styleUrls: ['./addtag.component.css']
        }]
      }], function () {
        return [{
          type: _tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _auther_auther_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auther/auther.component */
    "./src/app/auther/auther.component.ts");
    /* harmony import */


    var _tags_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tags/tags.component */
    "./src/app/tags/tags.component.ts");
    /* harmony import */


    var _updatetag_updatetag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./updatetag/updatetag.component */
    "./src/app/updatetag/updatetag.component.ts");
    /* harmony import */


    var _addtag_addtag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./addtag/addtag.component */
    "./src/app/addtag/addtag.component.ts");
    /* harmony import */


    var _updateauther_updateauther_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./updateauther/updateauther.component */
    "./src/app/updateauther/updateauther.component.ts");
    /* harmony import */


    var _addauther_addauther_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./addauther/addauther.component */
    "./src/app/addauther/addauther.component.ts");
    /* harmony import */


    var _updatebook_updatebook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./updatebook/updatebook.component */
    "./src/app/updatebook/updatebook.component.ts");
    /* harmony import */


    var _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./addbook/addbook.component */
    "./src/app/addbook/addbook.component.ts");

    var routes = [{
      path: "",
      component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__["MainpageComponent"]
    }, {
      path: "books",
      component: _books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]
    }, {
      path: "auther",
      component: _auther_auther_component__WEBPACK_IMPORTED_MODULE_4__["AutherComponent"]
    }, {
      path: "tags",
      component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"]
    }, {
      path: "updatetag/:id/:tag_Name",
      component: _updatetag_updatetag_component__WEBPACK_IMPORTED_MODULE_6__["UpdatetagComponent"]
    }, {
      path: "addtag",
      component: _addtag_addtag_component__WEBPACK_IMPORTED_MODULE_7__["AddtagComponent"]
    }, {
      path: "updateauther/:id/:auther_Name",
      component: _updateauther_updateauther_component__WEBPACK_IMPORTED_MODULE_8__["UpdateautherComponent"]
    }, {
      path: "addauther",
      component: _addauther_addauther_component__WEBPACK_IMPORTED_MODULE_9__["AddautherComponent"]
    }, {
      path: "updatebook/:id/:title/:description",
      component: _updatebook_updatebook_component__WEBPACK_IMPORTED_MODULE_10__["UpdatebookComponent"]
    }, {
      path: "addbook",
      component: _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_11__["AddbookComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _auther_auther_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auther/auther.component */
    "./src/app/auther/auther.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _updatebook_updatebook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./updatebook/updatebook.component */
    "./src/app/updatebook/updatebook.component.ts");
    /* harmony import */


    var _updateauther_updateauther_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./updateauther/updateauther.component */
    "./src/app/updateauther/updateauther.component.ts");
    /* harmony import */


    var _updatetag_updatetag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./updatetag/updatetag.component */
    "./src/app/updatetag/updatetag.component.ts");
    /* harmony import */


    var _deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./deletebook/deletebook.component */
    "./src/app/deletebook/deletebook.component.ts");
    /* harmony import */


    var _deleteauther_deleteauther_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./deleteauther/deleteauther.component */
    "./src/app/deleteauther/deleteauther.component.ts");
    /* harmony import */


    var _deletetag_deletetag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./deletetag/deletetag.component */
    "./src/app/deletetag/deletetag.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tags_tags_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tags/tags.component */
    "./src/app/tags/tags.component.ts");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _addtag_addtag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./addtag/addtag.component */
    "./src/app/addtag/addtag.component.ts");
    /* harmony import */


    var _addauther_addauther_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./addauther/addauther.component */
    "./src/app/addauther/addauther.component.ts");
    /* harmony import */


    var _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./addbook/addbook.component */
    "./src/app/addbook/addbook.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");
    /* harmony import */


    var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! angular-confirmation-popover */
    "./node_modules/angular-confirmation-popover/__ivy_ngcc__/fesm2015/angular-confirmation-popover.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_tag_service__WEBPACK_IMPORTED_MODULE_17__["TagService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_23__["ConfirmationPopoverModule"].forRoot({
        confirmButtonType: 'danger'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"], _auther_auther_component__WEBPACK_IMPORTED_MODULE_6__["AutherComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"], _updatebook_updatebook_component__WEBPACK_IMPORTED_MODULE_8__["UpdatebookComponent"], _updateauther_updateauther_component__WEBPACK_IMPORTED_MODULE_9__["UpdateautherComponent"], _updatetag_updatetag_component__WEBPACK_IMPORTED_MODULE_10__["UpdatetagComponent"], _deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_11__["DeletebookComponent"], _deleteauther_deleteauther_component__WEBPACK_IMPORTED_MODULE_12__["DeleteautherComponent"], _deletetag_deletetag_component__WEBPACK_IMPORTED_MODULE_13__["DeletetagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_16__["TagsComponent"], _addtag_addtag_component__WEBPACK_IMPORTED_MODULE_18__["AddtagComponent"], _addauther_addauther_component__WEBPACK_IMPORTED_MODULE_19__["AddautherComponent"], _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_20__["AddbookComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_23__["ConfirmationPopoverModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"], _auther_auther_component__WEBPACK_IMPORTED_MODULE_6__["AutherComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"], _updatebook_updatebook_component__WEBPACK_IMPORTED_MODULE_8__["UpdatebookComponent"], _updateauther_updateauther_component__WEBPACK_IMPORTED_MODULE_9__["UpdateautherComponent"], _updatetag_updatetag_component__WEBPACK_IMPORTED_MODULE_10__["UpdatetagComponent"], _deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_11__["DeletebookComponent"], _deleteauther_deleteauther_component__WEBPACK_IMPORTED_MODULE_12__["DeleteautherComponent"], _deletetag_deletetag_component__WEBPACK_IMPORTED_MODULE_13__["DeletetagComponent"], _tags_tags_component__WEBPACK_IMPORTED_MODULE_16__["TagsComponent"], _addtag_addtag_component__WEBPACK_IMPORTED_MODULE_18__["AddtagComponent"], _addauther_addauther_component__WEBPACK_IMPORTED_MODULE_19__["AddautherComponent"], _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_20__["AddbookComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_23__["ConfirmationPopoverModule"].forRoot({
            confirmButtonType: 'danger'
          })],
          providers: [_tag_service__WEBPACK_IMPORTED_MODULE_17__["TagService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auther.service.ts":
  /*!***********************************!*\
    !*** ./src/app/auther.service.ts ***!
    \***********************************/

  /*! exports provided: AutherService */

  /***/
  function srcAppAutherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutherService", function () {
      return AutherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AutherService = /*#__PURE__*/function () {
      function AutherService(http) {
        _classCallCheck(this, AutherService);

        this.http = http;
      }

      _createClass(AutherService, [{
        key: "DeleteAuther",
        value: function DeleteAuther(id) {
          var path = 'http://localhost:3000/authers/delete';
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id.toString());
          return this.http.get(path, {
            params: param
          });
        }
      }, {
        key: "UpdateAuther",
        value: function UpdateAuther(auther_Name, id) {
          var path = 'http://localhost:3000/authers/update';
          this.http.post(path, {
            auther_Name: auther_Name,
            id: id
          }).toPromise().then()["catch"](function (error) {
            if (error) {
              console.log(error);
            }

            throw error;
          });
        }
      }, {
        key: "AddAuther",
        value: function AddAuther(name) {
          var path = 'http://localhost:3000/authers/add';
          this.http.post(path, {
            auther_Name: name
          }).toPromise().then()["catch"](function (error) {
            if (error) {
              console.log(error);
            }

            throw error;
          });
        }
      }, {
        key: "GetAuther",
        value: function GetAuther() {
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('table_Name', 'Auther');
          return this.http.get('http://localhost:3000/tableSelector', {
            params: param
          });
        }
      }]);

      return AutherService;
    }();

    AutherService.ɵfac = function AutherService_Factory(t) {
      return new (t || AutherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AutherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AutherService,
      factory: AutherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auther/auther.component.ts":
  /*!********************************************!*\
    !*** ./src/app/auther/auther.component.ts ***!
    \********************************************/

  /*! exports provided: AutherComponent */

  /***/
  function srcAppAutherAutherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutherComponent", function () {
      return AutherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _auther_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auther.service */
    "./src/app/auther.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AutherComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutherComponent_tr_11_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var auther_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.HandleDelete(auther_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutherComponent_tr_11_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var auther_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.HandleUpdate(auther_r1.id, auther_r1.auther_Name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var auther_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](auther_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](auther_r1.auther_Name);
      }
    }

    var AutherComponent = /*#__PURE__*/function () {
      function AutherComponent(_autherService, router) {
        _classCallCheck(this, AutherComponent);

        this._autherService = _autherService;
        this.router = router;
      }

      _createClass(AutherComponent, [{
        key: "HandleDelete",
        value: function HandleDelete(id) {
          var _this2 = this;

          console.log(id);

          this._autherService.DeleteAuther(id).subscribe(function (data) {
            _this2.deleted = data;
            console.log(data);
          });

          this.ngOnInit();
        }
      }, {
        key: "HandleUpdate",
        value: function HandleUpdate(id, auther_Name) {
          this.router.navigate(['/updateauther', id, auther_Name]);
        }
      }, {
        key: "HandelAdd",
        value: function HandelAdd() {
          this.router.navigate(['/addauther']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._autherService.GetAuther().subscribe(function (data) {
            _this3.authers = data;
            console.log(data);
          });
        }
      }]);

      return AutherComponent;
    }();

    AutherComponent.ɵfac = function AutherComponent_Factory(t) {
      return new (t || AutherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AutherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutherComponent,
      selectors: [["app-auther"]],
      decls: 12,
      vars: 1,
      consts: [[1, "topright", 2, "background-color", "greenyellow", "margin-top", "40px", 3, "click"], ["id", "customers"], [4, "ngFor", "ngForOf"], [2, "background-color", "red", "color", "white", 3, "click"], [3, "click"]],
      template: function AutherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutherComponent_Template_button_click_1_listener() {
            return ctx.HandelAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "new auther");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "auther id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "auther Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AutherComponent_tr_11_Template, 10, 3, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#customers[_ngcontent-%COMP%] {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n  \n  #customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n  \n  #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n  \n  #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n  \n  #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  .topright[_ngcontent-%COMP%] {\n  \n    margin-left: 93%;\n    height: 40px;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVyL2F1dGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBLDhCQUE4Qix5QkFBeUIsQ0FBQzs7RUFFeEQscUJBQXFCLHNCQUFzQixDQUFDOztFQUU1QztJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFlBQVk7O0VBRWQiLCJmaWxlIjoic3JjL2FwcC9hdXRoZXIvYXV0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3VzdG9tZXJzIHtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG4gIFxuICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgXG4gICNjdXN0b21lcnMgdGgge1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRvcHJpZ2h0IHtcbiAgXG4gICAgbWFyZ2luLWxlZnQ6IDkzJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgXG4gIH0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          background: 'greenYellow',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          background: "red",
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auther',
          templateUrl: './auther.component.html',
          styleUrls: ['./auther.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            background: 'greenYellow',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            background: "red",
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])])]
        }]
      }], function () {
        return [{
          type: _auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/book.service.ts":
  /*!*********************************!*\
    !*** ./src/app/book.service.ts ***!
    \*********************************/

  /*! exports provided: BookService */

  /***/
  function srcAppBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BookService = /*#__PURE__*/function () {
      function BookService(http) {
        _classCallCheck(this, BookService);

        this.http = http;
      }

      _createClass(BookService, [{
        key: "DeleteBookBy",
        value: function DeleteBookBy(id) {
          var path = 'http://localhost:3000/books/delete';
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id.toString());
          return this.http.get(path, {
            params: param
          });
        }
      }, {
        key: "Update",
        value: function Update(title, description, id) {
          var path = 'http://localhost:3000/books/update';
          this.http.post(path, {
            description: description,
            title: title,
            id: id
          }).toPromise().then()["catch"](function (error) {
            throw error;
          });
        }
      }, {
        key: "Add",
        value: function Add(title, description) {
          var path = 'http://localhost:3000/books/add';
          this.http.post(path, {
            description: description,
            title: title
          }).toPromise().then()["catch"](function (error) {
            throw error;
          });
        }
      }, {
        key: "AddWithAutherAndTag",
        value: function AddWithAutherAndTag(title, description, auther_id, tags, imageURL) {
          console.log(title, description, auther_id, tags);

          if (!auther_id && !tags) {
            this.Add(title, description);
          }

          var path = 'http://localhost:3000/books/addBookWithTagAndAuther';
          this.http.post(path, {
            description: description,
            title: title,
            tags: tags,
            auther_Id: auther_id,
            imageURL: imageURL
          }).toPromise().then()["catch"](function (error) {
            throw error;
          });
        }
      }, {
        key: "GetAll",
        value: function GetAll() {
          return this.http.get('http://localhost:3000/ga');
        }
      }, {
        key: "GetBooks",
        value: function GetBooks() {
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('table_Name', 'Books');
          return this.http.get('http://localhost:3000/tableSelector', {
            params: param
          });
        }
      }]);

      return BookService;
    }();

    BookService.ɵfac = function BookService_Factory(t) {
      return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookService,
      factory: BookService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/books/books.component.ts":
  /*!******************************************!*\
    !*** ./src/app/books/books.component.ts ***!
    \******************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BooksComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksComponent_tr_22_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var book_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.HandleDelete(book_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksComponent_tr_22_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var book_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.HandleUpdate(book_r1.id, book_r1.title, book_r1.description);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.auther_Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.tag_Name);
      }
    }

    var BooksComponent = /*#__PURE__*/function () {
      function BooksComponent(_BookService, router, _tagsService) {
        _classCallCheck(this, BooksComponent);

        this._BookService = _BookService;
        this.router = router;
        this._tagsService = _tagsService;
        this.tags = [];
      }

      _createClass(BooksComponent, [{
        key: "HandelAdd",
        value: function HandelAdd() {
          this.router.navigate(['/addbook']);
        }
      }, {
        key: "HandleDelete",
        value: function HandleDelete(book) {
          var _this4 = this;

          this._BookService.DeleteBookBy(book.id).subscribe(function (data) {
            _this4.deleted = data;
            console.log(data);
          });

          var index = this.books.findIndex(function (bok) {
            return book == bok;
          });
          this.books.splice(index, 1);
        }
      }, {
        key: "HandleUpdate",
        value: function HandleUpdate(id, title, description) {
          this.router.navigate(['/updatebook', id, title, description]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this._BookService.GetAll().subscribe(function (data) {
            _this5.books = data;
            _this5.books = _this5.books[0];
          });
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent.ɵfac = function BooksComponent_Factory(t) {
      return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]));
    };

    BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BooksComponent,
      selectors: [["app-books"]],
      decls: 23,
      vars: 1,
      consts: [[1, "add"], [1, "topright", 2, "background-color", "greenyellow", "margin-top", "40px", 3, "click"], ["id", "customers"], [4, "ngFor", "ngForOf"], ["alt", "this book didn't have image", 2, "width", "max-content", "height", "max-content"], [2, "background-color", "red", "color", "white", 3, "click"], [3, "click"]],
      template: function BooksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksComponent_Template_button_click_4_listener() {
            return ctx.HandelAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "new book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "book id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "book title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Auther");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BooksComponent_tr_22_Template, 18, 6, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["#customers[_ngcontent-%COMP%] {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n  \n  #customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n  \n  #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n  \n  #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n  \n  #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  .add[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  }\n  \n  .topright[_ngcontent-%COMP%] {\n  \n    margin-left: 93%;\n    height: 40px;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSw4QkFBOEIseUJBQXlCLENBQUM7O0VBRXhELHFCQUFxQixzQkFBc0IsQ0FBQzs7RUFFNUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0VBQ0EsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkI7O0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFlBQVk7O0VBRWQ7O0VBQ0Y7Ozs7Ozs7OztHQVNHIiwiZmlsZSI6InNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjdXN0b21lcnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgXG4gICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICBcbiAgI2N1c3RvbWVycyB0aCB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5hZGQge1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB9XG4gIC50b3ByaWdodCB7XG4gIFxuICAgIG1hcmdpbi1sZWZ0OiA5MyU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIFxuICB9XG4vKiAgIFxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3QyLmRlcG9zaXRwaG90b3MuY29tLzgxODcwOTQvMTIwOTAvaS85NTAvZGVwb3NpdHBob3Rvc18xMjA5MDMyMzQtc3RvY2stcGhvdG8tb3Blbi1ib29rLWhhcmRiYWNrLWJvb2tzLW9uLmpwZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufSAqLyJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          background: 'greenYellow',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          background: "red",
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-books',
          templateUrl: './books.component.html',
          styleUrls: ['./books.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            background: 'greenYellow',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            background: "red",
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])])]
        }]
      }], function () {
        return [{
          type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/deleteauther/deleteauther.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/deleteauther/deleteauther.component.ts ***!
    \********************************************************/

  /*! exports provided: DeleteautherComponent */

  /***/
  function srcAppDeleteautherDeleteautherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteautherComponent", function () {
      return DeleteautherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeleteautherComponent = /*#__PURE__*/function () {
      function DeleteautherComponent() {
        _classCallCheck(this, DeleteautherComponent);
      }

      _createClass(DeleteautherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeleteautherComponent;
    }();

    DeleteautherComponent.ɵfac = function DeleteautherComponent_Factory(t) {
      return new (t || DeleteautherComponent)();
    };

    DeleteautherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteautherComponent,
      selectors: [["app-deleteauther"]],
      decls: 2,
      vars: 0,
      template: function DeleteautherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deleteauther works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWF1dGhlci9kZWxldGVhdXRoZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteautherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deleteauther',
          templateUrl: './deleteauther.component.html',
          styleUrls: ['./deleteauther.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/deletebook/deletebook.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/deletebook/deletebook.component.ts ***!
    \****************************************************/

  /*! exports provided: DeletebookComponent */

  /***/
  function srcAppDeletebookDeletebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletebookComponent", function () {
      return DeletebookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeletebookComponent = /*#__PURE__*/function () {
      function DeletebookComponent() {
        _classCallCheck(this, DeletebookComponent);
      }

      _createClass(DeletebookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeletebookComponent;
    }();

    DeletebookComponent.ɵfac = function DeletebookComponent_Factory(t) {
      return new (t || DeletebookComponent)();
    };

    DeletebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeletebookComponent,
      selectors: [["app-deletebook"]],
      decls: 2,
      vars: 0,
      template: function DeletebookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deletebook works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWJvb2svZGVsZXRlYm9vay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deletebook',
          templateUrl: './deletebook.component.html',
          styleUrls: ['./deletebook.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/deletetag/deletetag.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/deletetag/deletetag.component.ts ***!
    \**************************************************/

  /*! exports provided: DeletetagComponent */

  /***/
  function srcAppDeletetagDeletetagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletetagComponent", function () {
      return DeletetagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeletetagComponent = /*#__PURE__*/function () {
      function DeletetagComponent() {
        _classCallCheck(this, DeletetagComponent);
      }

      _createClass(DeletetagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeletetagComponent;
    }();

    DeletetagComponent.ɵfac = function DeletetagComponent_Factory(t) {
      return new (t || DeletetagComponent)();
    };

    DeletetagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeletetagComponent,
      selectors: [["app-deletetag"]],
      decls: 2,
      vars: 0,
      template: function DeletetagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deletetag works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZXRhZy9kZWxldGV0YWcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletetagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deletetag',
          templateUrl: './deletetag.component.html',
          styleUrls: ['./deletetag.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainpage/mainpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/mainpage/mainpage.component.ts ***!
    \************************************************/

  /*! exports provided: MainpageComponent */

  /***/
  function srcAppMainpageMainpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainpageComponent", function () {
      return MainpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MainpageComponent = /*#__PURE__*/function () {
      function MainpageComponent(http, router, _tagService) {
        _classCallCheck(this, MainpageComponent);

        this.http = http;
        this.router = router;
        this._tagService = _tagService;
        this.url = "home/eng_hack/Downloads/csgo-awp-dragon-lore-sniper-rifle-17-4k.jpg";
        this.localFields = {
          text: 'tag_Name',
          value: 'id'
        };
        this.localWaterMark = 'Select tags';
      }

      _createClass(MainpageComponent, [{
        key: "HandlePage",
        value: function HandlePage(pageName) {
          this.router.navigate(["".concat(pageName)]);
        }
      }, {
        key: "Hv",
        value: function Hv(v) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this._tagService.GetTags().subscribe(function (data) {
            _this6.tags = data;
          });
        }
      }]);

      return MainpageComponent;
    }();

    MainpageComponent.ɵfac = function MainpageComponent_Factory(t) {
      return new (t || MainpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]));
    };

    MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainpageComponent,
      selectors: [["app-mainpage"]],
      decls: 8,
      vars: 0,
      consts: [[1, "contact-us"], ["name", "customerEmail", "placeholder", "title", "type", "text"], ["name", "customerPhone", "placeholder", "description", "type", "text"], ["type", "button"]],
      template: function MainpageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n  *[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  body[_ngcontent-%COMP%] {\n    background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n  }\n  .contact-us[_ngcontent-%COMP%] {\n    background: #f8f4e5;\n    padding: 50px 100px;\n    border: 2px solid black;\n    box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n  }\n  input[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    font-size: 14pt;\n    line-height: 28pt;\n    font-family: \"Fjalla One\";\n    margin-bottom: 28pt;\n    border: none;\n    border-bottom: 5px solid black;\n    background: #f8f4e5;\n    min-width: 250px;\n    padding-left: 5px;\n    outline: none;\n    color: black;\n  }\n  input[_ngcontent-%COMP%]:focus {\n    border-bottom: 5px solid #ffa580;\n  }\n  button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    line-height: 28pt;\n    padding: 0 20px;\n    background: #ffa580;\n    letter-spacing: 2px;\n    transition: 0.2s all ease-in-out;\n    outline: none;\n    border: 1px solid black;\n    box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n  }\n  button[_ngcontent-%COMP%]:hover {\n    background: black;\n    color: white;\n    border: 1px solid black;\n  }\n  [_ngcontent-%COMP%]::-moz-selection {\n    background: #ffc8ff;\n  }\n  [_ngcontent-%COMP%]::selection {\n    background: #ffc8ff;\n  }\n  input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n    border-bottom: 5px solid #95a4ff;\n    -webkit-text-fill-color: #2A293E;\n    -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n    -webkit-transition: background-color 5000s ease-in-out 0s;\n    transition: background-color 5000s ease-in-out 0s;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRSw4RUFBOEU7RUFDOUU7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBRUE7SUFDRSxnS0FBZ0s7SUFDaEssc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBEQUEwRDtFQUM1RDtFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFFQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNEQUFzRDtFQUN4RDtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUZBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBRUE7OztJQUdFLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0lBQ2hELHlEQUFpRDtJQUFqRCxpREFBaUQ7RUFDbkQiLCJmaWxlIjoic3JjL2FwcC9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GamFsbGErT25lJmRpc3BsYXk9c3dhcFwiKTtcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3N0Mi5kZXBvc2l0cGhvdG9zLmNvbS84MTg3MDk0LzEyMDkwL2kvOTUwL2RlcG9zaXRwaG90b3NfMTIwOTAzMjM0LXN0b2NrLXBob3RvLW9wZW4tYm9vay1oYXJkYmFjay1ib29rcy1vbi5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QtdXMge1xuICAgIGJhY2tncm91bmQ6ICNmOGY0ZTU7XG4gICAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMXB4ICNmZmE1ODAsIDE1cHggMTVweCAxcHggMnB4IGJsYWNrO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBsaW5lLWhlaWdodDogMjhwdDtcbiAgICBmb250LWZhbWlseTogXCJGamFsbGEgT25lXCI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhwdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNmOGY0ZTU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmYTU4MDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDI4cHQ7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmE1ODA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMXB4ICM5NWE0ZmYsIDNweCAzcHggMXB4IDFweCBibGFjaztcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZjOGZmO1xuICB9XG5cbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5NWE0ZmY7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMyQTI5M0U7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAjZjhmNGU1IGluc2V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG4gIH1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mainpage',
          templateUrl: './mainpage.component.html',
          styleUrls: ['./mainpage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(roter) {
        _classCallCheck(this, NavbarComponent);

        this.roter = roter;
        this.flag = [{
          index: false
        }, {
          index: false
        }, {
          index: false
        }, {
          index: false
        }];
        this.active = {
          backgroundColor: '#4CAF50'
        };
        this.non = {
          backgroundColor: 'red'
        };
      }

      _createClass(NavbarComponent, [{
        key: "IfActive",
        value: function IfActive() {
          console.log(!this.flag[3].index);
          this.flag[3].index = !this.flag[3].index;
          return !this.flag[3].index;
        }
      }, {
        key: "HandlePage",
        value: function HandlePage(pageName) {
          this.roter.navigate(["".concat(pageName)]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 13,
      vars: 0,
      consts: [[3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() {
            return ctx.HandlePage("/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() {
            return ctx.HandlePage("auther");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "authers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() {
            return ctx.HandlePage("books");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
            return ctx.HandlePage("tags");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width: 100%;\n    position: fixed;\n    background-color: darksalmon;\n    top: 0px;\n  }\n  \n  li[_ngcontent-%COMP%] {\n    float: left;\n  }\n  \n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n    background-color: #4CAF50;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcbiAgICB0b3A6IDBweDtcbiAgfVxuICBcbiAgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBsaSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgfVxuXG5cbiAgXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tag.service.ts":
  /*!********************************!*\
    !*** ./src/app/tag.service.ts ***!
    \********************************/

  /*! exports provided: TagService */

  /***/
  function srcAppTagServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagService", function () {
      return TagService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TagService = /*#__PURE__*/function () {
      //  GetTagsById( book_id){
      //    let params1 = new HttpParams().set('id',book_id.toString())
      //   return this.http.get<[]>('http://localhost:3000/getbookbytag',{params : params1})
      //  }
      function TagService(http) {
        _classCallCheck(this, TagService);

        this.http = http;
      }

      _createClass(TagService, [{
        key: "GetTags",
        value: function GetTags() {
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('table_Name', 'Tag');
          return this.http.get('http://localhost:3000/tableSelector', {
            params: param
          });
        }
      }, {
        key: "getId",
        value: function getId(id) {
          this.tagId = id;
        }
      }, {
        key: "DeleteTagById",
        value: function DeleteTagById(id) {
          var path = 'http://localhost:3000/tags/delete';
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id.toString());
          return this.http.get(path, {
            params: param
          });
        }
      }, {
        key: "UpdateTagbyId",
        value: function UpdateTagbyId(id, tag_Name) {
          var path = 'http://localhost:3000/tags/update';
          this.http.post(path, {
            tag_Name: tag_Name,
            id: id
          }).toPromise().then()["catch"](function (error) {
            throw error;
          });
        }
      }, {
        key: "AddTag",
        value: function AddTag(tag_Name) {
          var path = 'http://localhost:3000/tags/add';
          this.http.post(path, {
            tag_Name: tag_Name
          }).toPromise().then()["catch"](function (error) {
            console.log(error);
            throw error;
          });
        }
      }]);

      return TagService;
    }();

    TagService.ɵfac = function TagService_Factory(t) {
      return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TagService,
      factory: TagService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tags/tags.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tags/tags.component.ts ***!
    \****************************************/

  /*! exports provided: TagsComponent */

  /***/
  function srcAppTagsTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsComponent", function () {
      return TagsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-confirmation-popover */
    "./node_modules/angular-confirmation-popover/__ivy_ngcc__/fesm2015/angular-confirmation-popover.js");

    function TagsComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirm", function TagsComponent_tr_12_Template_button_confirm_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var tag_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.HandleDelete(tag_r1);
        })("cancel", function TagsComponent_tr_12_Template_button_cancel_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.cancelClicked = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_tr_12_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var tag_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.HandleUpdate(tag_r1.id, tag_r1.tag_Name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1.tag_Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popoverTitle", ctx_r0.popoverTitle)("popoverMessage", ctx_r0.popoverMessage);
      }
    }

    var TagsComponent = /*#__PURE__*/function () {
      function TagsComponent(_tagService, router) {
        _classCallCheck(this, TagsComponent);

        this._tagService = _tagService;
        this.router = router;
        this.popoverTitle = 'Are You Sure !';
        this.popoverMessage = 'Confirm Delete ?';
        this.confirmClicked = false;
        this.cancelClicked = false;
      }

      _createClass(TagsComponent, [{
        key: "HandleTagId",
        value: function HandleTagId(tag) {
          console.log(tag.id);
          this.router.navigate(['/booksbytag', tag.id]);
        }
      }, {
        key: "HandleDelete",
        value: function HandleDelete(tag) {
          var _this7 = this;

          this._tagService.DeleteTagById(tag.id).subscribe(function (data) {
            _this7.deleted = data;
          });

          this.confirmClicked = true;
          this.ngOnInit();
        }
      }, {
        key: "HandleNewTag",
        value: function HandleNewTag() {
          this.router.navigate(['/addtag']);
        }
      }, {
        key: "HandleUpdate",
        value: function HandleUpdate(id, name) {
          this.router.navigate(["/updatetag", id, name]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this._tagService.GetTags().subscribe(function (data) {
            _this8.tags = data;
          });
        }
      }]);

      return TagsComponent;
    }();

    TagsComponent.ɵfac = function TagsComponent_Factory(t) {
      return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagsComponent,
      selectors: [["app-tags"]],
      decls: 13,
      vars: 1,
      consts: [[1, "topright", 2, "background-color", "greenyellow", "margin-top", "40px", 3, "click"], ["id", "customers"], [4, "ngFor", "ngForOf"], ["mwlConfirmationPopover", "", "placement", "left", 1, "btn", "btn-primary", 3, "popoverTitle", "popoverMessage", "confirm", "cancel"], [3, "click"]],
      template: function TagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_button_click_2_listener() {
            return ctx.HandleNewTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "new Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "tag id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "tag Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TagsComponent_tr_12_Template, 10, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopoverDirective"]],
      styles: ["#customers[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n\n.topright[_ngcontent-%COMP%] {\n  \n  margin-left: 93%;\n  height: 40px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCLHlCQUF5QixDQUFDOztBQUV4RCxxQkFBcUIsc0JBQXNCLENBQUM7O0FBRTVDO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2N1c3RvbWVycyB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG5cbiNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4jY3VzdG9tZXJzIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3ByaWdodCB7XG4gIFxuICBtYXJnaW4tbGVmdDogOTMlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIFxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tags',
          templateUrl: './tags.component.html',
          styleUrls: ['./tags.component.css']
        }]
      }], function () {
        return [{
          type: _tag_service__WEBPACK_IMPORTED_MODULE_1__["TagService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/updateauther/updateauther.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/updateauther/updateauther.component.ts ***!
    \********************************************************/

  /*! exports provided: UpdateautherComponent */

  /***/
  function srcAppUpdateautherUpdateautherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateautherComponent", function () {
      return UpdateautherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auther_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auther.service */
    "./src/app/auther.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var UpdateautherComponent = /*#__PURE__*/function () {
      function UpdateautherComponent(rout, _service, router) {
        _classCallCheck(this, UpdateautherComponent);

        this.rout = rout;
        this._service = _service;
        this.router = router;
      }

      _createClass(UpdateautherComponent, [{
        key: "HandleUpdate",
        value: function HandleUpdate(auther_Name) {
          this._service.UpdateAuther(auther_Name, this.id);

          this.router.navigate(['/auther']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = parseInt(this.rout.snapshot.paramMap.get('id'));
          this.autherName = this.rout.snapshot.paramMap.get('auther_Name').toString();
        }
      }]);

      return UpdateautherComponent;
    }();

    UpdateautherComponent.ɵfac = function UpdateautherComponent_Factory(t) {
      return new (t || UpdateautherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    UpdateautherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateautherComponent,
      selectors: [["app-updateauther"]],
      decls: 8,
      vars: 3,
      consts: [[1, "contact-us"], ["placeholder", "Auther Name", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["authN", ""], ["type", "button", 3, "click"]],
      template: function UpdateautherComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateautherComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.autherName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateautherComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.HandleUpdate(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.autherName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  background: #f8f4e5;\n  padding: 50px 100px;\n  border: 2px solid black;\n  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n}\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 14pt;\n  line-height: 28pt;\n  font-family: \"Fjalla One\";\n  margin-bottom: 28pt;\n  border: none;\n  border-bottom: 5px solid black;\n  background: #f8f4e5;\n  min-width: 250px;\n  padding-left: 5px;\n  outline: none;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 5px solid #ffa580;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  line-height: 28pt;\n  padding: 0 20px;\n  background: #ffa580;\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  outline: none;\n  border: 1px solid black;\n  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n  border: 1px solid black;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #ffc8ff;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #ffc8ff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border-bottom: 5px solid #95a4ff;\n  -webkit-text-fill-color: #2A293E;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlYXV0aGVyL3VwZGF0ZWF1dGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdLQUFnSztFQUNoSyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMERBQTBEO0FBQzVEO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRkE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTs7O0VBR0UsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnREFBZ0Q7RUFDaEQseURBQWlEO0VBQWpELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWF1dGhlci91cGRhdGVhdXRoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmUmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3QyLmRlcG9zaXRwaG90b3MuY29tLzgxODcwOTQvMTIwOTAvaS85NTAvZGVwb3NpdHBob3Rvc18xMjA5MDMyMzQtc3RvY2stcGhvdG8tb3Blbi1ib29rLWhhcmRiYWNrLWJvb2tzLW9uLmpwZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LXVzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxcHggI2ZmYTU4MCwgMTVweCAxNXB4IDFweCAycHggYmxhY2s7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBmb250LWZhbWlseTogXCJGamFsbGEgT25lXCI7XG4gIG1hcmdpbi1ib3R0b206IDI4cHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZjhmNGU1O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZhNTgwO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmE1ODA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxcHggIzk1YTRmZiwgM3B4IDNweCAxcHggMXB4IGJsYWNrO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmYzhmZjtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5NWE0ZmY7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMkEyOTNFO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNmOGY0ZTUgaW5zZXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateautherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-updateauther',
          templateUrl: './updateauther.component.html',
          styleUrls: ['./updateauther.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _auther_service__WEBPACK_IMPORTED_MODULE_2__["AutherService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/updatebook/updatebook.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/updatebook/updatebook.component.ts ***!
    \****************************************************/

  /*! exports provided: UpdatebookComponent */

  /***/
  function srcAppUpdatebookUpdatebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatebookComponent", function () {
      return UpdatebookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var UpdatebookComponent = /*#__PURE__*/function () {
      function UpdatebookComponent(route, _bookservice) {
        _classCallCheck(this, UpdatebookComponent);

        this.route = route;
        this._bookservice = _bookservice;
      }

      _createClass(UpdatebookComponent, [{
        key: "HandleUpdate",
        value: function HandleUpdate() {
          this._bookservice.Update(this.title, this.description, this.id);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = parseInt(this.route.snapshot.paramMap.get('id'));
          this.title = this.route.snapshot.paramMap.get('title').toString();
          this.description = this.route.snapshot.paramMap.get('description').toString();
        }
      }]);

      return UpdatebookComponent;
    }();

    UpdatebookComponent.ɵfac = function UpdatebookComponent_Factory(t) {
      return new (t || UpdatebookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]));
    };

    UpdatebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdatebookComponent,
      selectors: [["app-updatebook"]],
      decls: 8,
      vars: 6,
      consts: [[1, "contact-us"], ["placeholder", "title", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["placeholder", "description", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "click"]],
      template: function UpdatebookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatebookComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatebookComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatebookComponent_Template_button_click_6_listener() {
            return ctx.HandleUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  background: #f8f4e5;\n  padding: 50px 100px;\n  border: 2px solid black;\n  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n}\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 14pt;\n  line-height: 28pt;\n  font-family: \"Fjalla One\";\n  margin-bottom: 28pt;\n  border: none;\n  border-bottom: 5px solid black;\n  background: #f8f4e5;\n  min-width: 250px;\n  padding-left: 5px;\n  outline: none;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 5px solid #ffa580;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  line-height: 28pt;\n  padding: 0 20px;\n  background: #ffa580;\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  outline: none;\n  border: 1px solid black;\n  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n  border: 1px solid black;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #ffc8ff;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #ffc8ff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border-bottom: 5px solid #95a4ff;\n  -webkit-text-fill-color: #2A293E;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlYm9vay91cGRhdGVib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0UsZ0tBQWdLO0VBQ2hLLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwREFBMEQ7QUFDNUQ7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFGQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdEQUFnRDtFQUNoRCx5REFBaUQ7RUFBakQsaURBQWlEO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlYm9vay91cGRhdGVib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GamFsbGErT25lJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3N0Mi5kZXBvc2l0cGhvdG9zLmNvbS84MTg3MDk0LzEyMDkwL2kvOTUwL2RlcG9zaXRwaG90b3NfMTIwOTAzMjM0LXN0b2NrLXBob3RvLW9wZW4tYm9vay1oYXJkYmFjay1ib29rcy1vbi5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC11cyB7XG4gIGJhY2tncm91bmQ6ICNmOGY0ZTU7XG4gIHBhZGRpbmc6IDUwcHggMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggMXB4ICNmZmE1ODAsIDE1cHggMTVweCAxcHggMnB4IGJsYWNrO1xufVxuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBsaW5lLWhlaWdodDogMjhwdDtcbiAgZm9udC1mYW1pbHk6IFwiRmphbGxhIE9uZVwiO1xuICBtYXJnaW4tYm90dG9tOiAyOHB0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmYTU4MDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaW5lLWhlaWdodDogMjhwdDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZhNTgwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMXB4ICM5NWE0ZmYsIDNweCAzcHggMXB4IDFweCBibGFjaztcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmM4ZmY7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjOTVhNGZmO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzJBMjkzRTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAjZjhmNGU1IGluc2V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-updatebook',
          templateUrl: './updatebook.component.html',
          styleUrls: ['./updatebook.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/updatetag/updatetag.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/updatetag/updatetag.component.ts ***!
    \**************************************************/

  /*! exports provided: UpdatetagComponent */

  /***/
  function srcAppUpdatetagUpdatetagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatetagComponent", function () {
      return UpdatetagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tag.service */
    "./src/app/tag.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var UpdatetagComponent = /*#__PURE__*/function () {
      function UpdatetagComponent(route, _tagservice) {
        _classCallCheck(this, UpdatetagComponent);

        this.route = route;
        this._tagservice = _tagservice;
      }

      _createClass(UpdatetagComponent, [{
        key: "HandleUpdate",
        value: function HandleUpdate() {
          this._tagservice.UpdateTagbyId(this.id, this.tag_Name);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = parseInt(this.route.snapshot.paramMap.get('id'));
          this.tag_Name = this.route.snapshot.paramMap.get('tag_Name').toString();
        }
      }]);

      return UpdatetagComponent;
    }();

    UpdatetagComponent.ɵfac = function UpdatetagComponent_Factory(t) {
      return new (t || UpdatetagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]));
    };

    UpdatetagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdatetagComponent,
      selectors: [["app-updatetag"]],
      decls: 7,
      vars: 3,
      consts: [[1, "contact-us"], ["placeholder", "tag Name", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", 3, "click"]],
      template: function UpdatetagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatetagComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.tag_Name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatetagComponent_Template_button_click_5_listener() {
            return ctx.HandleUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tag_Name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fjalla+One&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://st2.depositphotos.com/8187094/12090/i/950/depositphotos_120903234-stock-photo-open-book-hardback-books-on.jpg\") center center no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  background: #f8f4e5;\n  padding: 50px 100px;\n  border: 2px solid black;\n  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px black;\n}\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 14pt;\n  line-height: 28pt;\n  font-family: \"Fjalla One\";\n  margin-bottom: 28pt;\n  border: none;\n  border-bottom: 5px solid black;\n  background: #f8f4e5;\n  min-width: 250px;\n  padding-left: 5px;\n  outline: none;\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 5px solid #ffa580;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  line-height: 28pt;\n  padding: 0 20px;\n  background: #ffa580;\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  outline: none;\n  border: 1px solid black;\n  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n  border: 1px solid black;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #ffc8ff;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #ffc8ff;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border-bottom: 5px solid #95a4ff;\n  -webkit-text-fill-color: #2A293E;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRldGFnL3VwZGF0ZXRhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdLQUFnSztFQUNoSyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMERBQTBEO0FBQzVEO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRkE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTs7O0VBR0UsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnREFBZ0Q7RUFDaEQseURBQWlEO0VBQWpELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXRhZy91cGRhdGV0YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmUmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc3QyLmRlcG9zaXRwaG90b3MuY29tLzgxODcwOTQvMTIwOTAvaS85NTAvZGVwb3NpdHBob3Rvc18xMjA5MDMyMzQtc3RvY2stcGhvdG8tb3Blbi1ib29rLWhhcmRiYWNrLWJvb2tzLW9uLmpwZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LXVzIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjRlNTtcbiAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxcHggI2ZmYTU4MCwgMTVweCAxNXB4IDFweCAycHggYmxhY2s7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBmb250LWZhbWlseTogXCJGamFsbGEgT25lXCI7XG4gIG1hcmdpbi1ib3R0b206IDI4cHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZjhmNGU1O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZhNTgwO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyOHB0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmE1ODA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxcHggIzk1YTRmZiwgM3B4IDNweCAxcHggMXB4IGJsYWNrO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmYzhmZjtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5NWE0ZmY7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMkEyOTNFO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNmOGY0ZTUgaW5zZXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatetagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-updatetag',
          templateUrl: './updatetag.component.html',
          styleUrls: ['./updatetag.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/eng_hack/auther_Books/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map