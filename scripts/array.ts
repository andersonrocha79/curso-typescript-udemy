

const filmesCategorias : string[] = ["Comédia", "Drama", "Romance", "Aventura"];

filmesCategorias.push("Policial");

console.log(filmesCategorias);

const filmesCategorias2 : (string | number) [] = ["Comédia", "Drama", "Romance", "Aventura", 10, 20];
console.log(filmesCategorias2);

const filmesAnos : Array<number> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++)
{
    filmesAnos.push(ano);
}

console.log(filmesAnos);

const filmesAnos2 : Array<number|string> = ["anderson", 10, "rocha", 20];
console.log(filmesAnos2);





