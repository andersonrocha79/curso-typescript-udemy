"use strict";
let primeiraSoma;
primeiraSoma = (valor1, valor2) => {
    return valor1 + valor2;
};
console.log(primeiraSoma(120, 300));
let calculadora;
function divisao(a, b) {
    return a / b;
}
const subtracao = (a, b) => {
    return a - b;
};
calculadora =
    {
        somar: (a, b) => {
            return a + b;
        },
        multiplicar: (a, b) => {
            return a * b;
        },
        dividir: divisao,
        subtrair: subtracao
    };
console.log('soma : ', calculadora.somar(50, 50));
console.log('subtracao : ', calculadora.subtrair(100, 50));
console.log('multiplicacao : ', calculadora.multiplicar(3, 6));
console.log('divisao : ', calculadora.dividir(30, 6));
//# sourceMappingURL=interface_functions.js.map