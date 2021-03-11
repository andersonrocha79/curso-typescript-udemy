interface ISoma
{
    (num1 : number, num2 : number) : number
}

let primeiraSoma : ISoma;

primeiraSoma = (valor1, valor2) : number =>
{
    return valor1 + valor2;
}

console.log(primeiraSoma(120, 300));



interface ICalculos
{
    somar(a : number, b: number) : number;
    subtrair(a : number, b: number) : number;
    multiplicar(a : number, b: number) : number;
    dividir(a : number, b: number) : number;
}

let calculadora : ICalculos;

function divisao (a : number, b: number)
{
    return a / b;
}

const subtracao = (a : number, b: number) =>
{
    return a - b;
}

calculadora =
{
    somar : (a : number, b: number) =>
    {
        return a + b;
    },
    multiplicar : (a : number, b: number) =>
    {
        return a * b;
    },
    dividir : divisao,
    subtrair : subtracao    

}

console.log('soma : '           , calculadora.somar(50, 50));
console.log('subtracao : '      , calculadora.subtrair(100, 50));
console.log('multiplicacao : '  , calculadora.multiplicar(3,6));
console.log('divisao : '        , calculadora.dividir(30,6));