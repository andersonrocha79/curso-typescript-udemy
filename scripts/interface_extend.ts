
interface IModelo
{
    id : number;    
    created_at : Date;
    updated_at : Date
}

interface IPessoa extends IModelo
{
    nome : string;
    idade? : number
}

interface IUsuario extends IPessoa
{
    email : string;
    senha : string;
}

const joao : IUsuario =
{
    id : 1,
    nome : "Anderson",
    created_at: new Date(2020, 11, 1),
    updated_at: new Date(2020, 11, 1),
    senha: "teste",
    idade: 42,
    email : "anderson@rochasoft.com.br"
}

console.log('usuário: ' + joao);