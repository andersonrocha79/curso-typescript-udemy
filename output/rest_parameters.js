"use strict";
function somarRenda1(mes1, mes2, mes3) {
    return mes1 + mes2 + mes3;
}
console.log('renda total 1: ', somarRenda1(250, 780, 695));
function somarRenda2(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => {
        return rendaTotal + rendaAtual;
    }, 0);
}
console.log('renda total 2: ', somarRenda2(250, 780, 695, 500, 900, 700, 825));
//# sourceMappingURL=rest_parameters.js.map