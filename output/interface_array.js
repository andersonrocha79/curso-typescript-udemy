"use strict";
const frontEnd = {
    nome: 'Front-End',
    id: 1
};
const backEnd = {
    nome: 'Back-End',
    id: 2
};
const javascript = {
    nome: 'JavaScript',
    id: 3,
    categoriaPai: frontEnd
};
const es2020 = {
    nome: 'versão 2020',
    id: 4,
    categoriaPai: javascript
};
console.log(frontEnd);
console.log(backEnd);
console.log(javascript);
console.log(es2020);
let menu = {
    categorias: [frontEnd, backEnd]
};
let minhasTarefas;
minhasTarefas = ["estudar typescript", "estudar javascript", "estudar php8"];
console.log(minhasTarefas[0]);
//# sourceMappingURL=interface_array.js.map