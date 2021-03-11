interface IProduto
{
    nome : string;
    preco : number;
    descricao? : string;  // ? opcional
    dataValidade : Date;
}

const produto1 : IProduto = 
{
    nome : "Notebook",
    preco : 2000,
    descricao : "Meu notebook super top",
    dataValidade : new Date(2022, 11, 1)   // 01/12/2022
};

const produto2 : IProduto = 
{
    nome : "Notebook2",
    preco : 5000,
    dataValidade : new Date(2022, 11, 1)   // 01/12/2022
};

console.log(produto1);
console.log(produto2);
