let valor1;
console.log(typeof valor1);
// undefined

let valor2;
valor2 = "Anderson"
console.log(typeof valor2);
// string

let valor3;
valor3 = 5000
console.log(typeof valor3);
// number

let valor4;
valor4 = true
console.log(typeof valor4);
// boolean

// aceita qualquer valor, mesmo depois da primeira atribuição
// utilizar com 'cautela'
// any indica 'qualquer um dos tipos'
let valorAny : any;
valorAny = "mesmo depois de definição, continua aceitando qualquer valor - padrão do javascript"
valorAny = 500;
valorAny = ["anderson", 50, false];
console.log(typeof valorAny);

// exemplo de problema
let despesaFixa     : any;
let despesaVariavel : number;

despesaFixa     = 200;
despesaFixa     = '200';
despesaVariavel = 500;

console.log(despesaFixa + despesaVariavel);