let linguagem = "Java Script";

console.log(linguagem);

// linguagem = 2015; erro

console.log(linguagem.toUpperCase());

const usuarioInfo = [1, "Rafael", new Date()];

usuarioInfo.push(2);
usuarioInfo.push("Anderson");
usuarioInfo.push(new Date(2021,1,1));
// usuarioInfo.push(true); // erro
// usuarioInfo.push(new Boolean()); // erro