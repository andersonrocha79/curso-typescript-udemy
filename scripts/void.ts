const meuConsole : void = console.log('mensagem: hello typescript');

console.log(meuConsole); // não tem nada, é um retorno indefinido de retorno

// void é implicito em todas as funções, mas ao ser colocado, não permite que a função não retorne nada
// para deixar claro que a função não retorna nada, pode ser definido o tipo dela como ' : void '
function mostrarFrase() : void
{
    console.log("aprendendo type script");
    // return 'teste'; // erro
    return;
}

mostrarFrase();