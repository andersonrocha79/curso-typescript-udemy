
function somarRenda1(mes1 : number, mes2 : number, mes3 : number) : number
{
    return mes1 + mes2 + mes3;
}

console.log('renda total 1: ', somarRenda1(250, 780, 695));


// spread operator
function somarRenda2(...meses : number[]) : number
{
    
    return meses.reduce((rendaTotal, rendaAtual) => 
    {
        return rendaTotal + rendaAtual
    }, 0);

}

console.log('renda total 2: ', somarRenda2(250, 780, 695, 500, 900, 700, 825));
