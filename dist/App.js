System.register(['angular2/core', './app/finance.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, finance_service_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (finance_service_1_1) {
                finance_service_1 = finance_service_1_1;
            }],
        execute: function() {
            App = (function () {
                //Materialize.updateTextFields();
                function App(_financeService) {
                    this._financeService = _financeService;
                    this.names = 'Austin and Heather';
                    this._financeService = _financeService;
                }
                App.prototype.getUserInfo = function () {
                    var _this = this;
                    this.error = "";
                    this.countries = [];
                    this._financeService.getUserInfo('memberinfo')
                        .subscribe(function (data) { return _this.countries = data; }, function (error) { return _this.error = "Region " + _this.region + " is invalid."; });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'src/app/app.html',
                        providers: [finance_service_1.FinanceService]
                    }), 
                    __metadata('design:paramtypes', [finance_service_1.FinanceService])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=App.js.map