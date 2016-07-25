System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var FinanceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            FinanceService = (function () {
                function FinanceService(http) {
                    this.endpoint_url = "http://localhost:8080/api/";
                    this.http = http;
                }
                FinanceService.prototype.getUserInfo = function (region) {
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzdlOWMzNGUwMGQ1NDAzMzNhYzEwOTgiLCJlbWFpbCI6ImRhbmllbG5iaXJjaDEwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDRKYkZ5TDVSSkhCYkNGWE1UWDNmak9uSjQ4VUdwODh1aEZSdkdEeWguVGZwd1RCUXRiREF5IiwiX192IjowfQ.3SM3VPygdbOWjdvkstYfFGHGs5wjig2dzJfQjvVwufA');
                    //
                    return this.http.get(this.endpoint_url + region, { headers: headers }).map(function (res) { return res.json(); });
                };
                FinanceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FinanceService);
                return FinanceService;
            }());
            exports_1("FinanceService", FinanceService);
        }
    }
});
//# sourceMappingURL=finance.service.js.map