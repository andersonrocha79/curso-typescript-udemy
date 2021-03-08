
function mostraMensagem(texto : string) : boolean
{
    console.log(texto);
    return true;
}

console.log(mostraMensagem("Anderson Rocha"));

function mostraMensagem2(texto : string | number | object) : boolean
{
    console.log(texto);
    return true;
}

mostraMensagem2("mensagem texto");
mostraMensagem2(500);
mostraMensagem2({nome: "anderson", idade : 50});

// assinatura normal
// function show(codigo : number) : number;
// arrow Function
const show = (codigo : number) : number =>
{
    return codigo;
}