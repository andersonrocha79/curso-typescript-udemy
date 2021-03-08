console.log("hello world");

console.log("=====================");

const nome = "João";
console.log("Olá " + nome + ".Seja bem vindo!");

console.log("=====================");

class Produto
{

    nome  : string;
    valor : number;

    constructor(produtoNome : string, 
               produtoValor : number)
    {

        this.nome  = produtoNome;
        this.valor = produtoValor;

    }

}

const ps5 = new Produto("Playstation V", 5500);

console.log(ps5);