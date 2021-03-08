"use strict";
function teste1() {
}
function teste2(texto) {
    return 'teste2';
}
function teste3(valor) {
    return true;
}
const arrowteste1 = () => {
};
const arrowTeste2 = (texto) => {
    return 'teste2';
};
const arrowTeste3 = (valor) => {
    return true;
};
function enviarEmail(para, assunto = "Sem assunto", remetente) {
    console.log({ para, assunto, remetente });
}
enviarEmail("anderson@rochasoft.com.br");
enviarEmail("anderson@rochasoft.com.br", "Assunto Teste");
//# sourceMappingURL=funcoes_padrao.js.map