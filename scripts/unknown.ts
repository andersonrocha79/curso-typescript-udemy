let resultado : unknown;

resultado = 
{
    sucesso : true
}

resultado = "Deu tudo certo";

resultado = 200;

console.log("--------------------------------------------------");

const informacao : any = 100;
const informacaoDesconhecida : unknown = 250;

const primeiroNumero : number = informacao;
// const segundoNumero : number = informacaoDesconhecida; // erro
const segundoNumero : any = informacaoDesconhecida;

// o tipo 'desconhecido' não pode ser atribuido a outra variável com tipo definido
// já o tipo 'any' pode ser atribuida a uma variável com tipo definido

console.log('primeiro ', primeiroNumero);
console.log('segundo ' , segundoNumero);

