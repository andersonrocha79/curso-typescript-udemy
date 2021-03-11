interface ICategoria
{
    nome : string;
    id : number;
    categoriaPai? : ICategoria;
}

const frontEnd : ICategoria = 
{
    nome : 'Front-End',
    id: 1    
}

const backEnd : ICategoria = 
{
    nome : 'Back-End',
    id: 2
}

const javascript : ICategoria = 
{
    nome : 'JavaScript',
    id: 3,
    categoriaPai : frontEnd
}

const es2020 : ICategoria = 
{
    nome : 'versão 2020',
    id: 4,
    categoriaPai : javascript
}

console.log(frontEnd);
console.log(backEnd);
console.log(javascript);
console.log(es2020);



interface IMenu
{
    categorias : ICategoria[]
}

let menu : IMenu = 
{
    categorias : [frontEnd, backEnd]
}

interface ITodo
{
    [indice : number] : string;
}

let minhasTarefas : ITodo;

minhasTarefas = ["estudar typescript", "estudar javascript", "estudar php8"];

console.log(minhasTarefas[0]);