// função padrão
function teste1()
{

}

function teste2(texto : string) : string
{
    return 'teste2';
}

function teste3(valor : number | string) : boolean
{
    return true;
}

// arrow function
const arrowteste1 = () =>
{

}

const arrowTeste2 = (texto : string) : string =>
{
    return 'teste2';
}

const arrowTeste3 = (valor : number | string) : boolean =>
{
    return true;
}

// remetente indica que é um parâmetro opcional - quando não for passado ficará 'undefined'
function enviarEmail( para : string, assunto : string = "Sem assunto", remetente? : string) : void
{
    console.log({para, assunto, remetente});
}

enviarEmail("anderson@rochasoft.com.br");
enviarEmail("anderson@rochasoft.com.br", "Assunto Teste");

