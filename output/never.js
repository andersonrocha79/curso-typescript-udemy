"use strict";
function showError(message) {
    throw new Error("Algo deu errado > " + message);
}
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map