
// indica que a função nunca irá retornar nada
// em função que gera erros, o never será o padrão
function showError(message : string) : never
{
    throw new Error("Algo deu errado > " + message);
}

// showError("erro de exemplo");

let n = 0;

function loopInfinito() : never
{

    // o while nunca irá terminar
    while (true)
    {
        console.log(n++);
    }

    // o retorno nunca vai ser executado
    // colocando o retorno como 'never'
    // a função nunca terá retorno
    // return true;

}

loopInfinito();

