
const site : unknown = "https://hcode.com.br";

let sitesFavoritos : string[] = [];

// afirma qual é o tipo que está sendo passado
sitesFavoritos.push(site as string);
sitesFavoritos.push(<string>site);

