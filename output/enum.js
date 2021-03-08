"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
var Permission2;
(function (Permission2) {
    Permission2[Permission2["ADMIN"] = 100] = "ADMIN";
    Permission2[Permission2["USER"] = 101] = "USER";
    Permission2[Permission2["READONLY"] = 102] = "READONLY";
})(Permission2 || (Permission2 = {}));
console.log(Permission2.ADMIN);
console.log(Permission2.USER);
console.log(Permission2.READONLY);
var Permission3;
(function (Permission3) {
    Permission3["ADMIN"] = "A";
    Permission3["USER"] = "U";
    Permission3["READONLY"] = "R";
})(Permission3 || (Permission3 = {}));
console.log(Permission3.ADMIN);
console.log(Permission3.USER);
console.log(Permission3.READONLY);
//# sourceMappingURL=enum.js.map