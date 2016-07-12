System.register(['angular2/platform/browser', './app/apl'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, apl_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (apl_1_1) {
                apl_1 = apl_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(apl_1.Apl);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map