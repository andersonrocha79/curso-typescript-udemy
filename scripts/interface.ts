let endereco1 : object;

endereco1 = 
{
    endereco : "Rua Teste",
    numero : 5000,
    bairro : "Centro",
    cidade : "Pedro Lepoldo"
}

console.log(endereco1);

let endereco2 :
{
    endereco : string,
    numero   : number,
    bairro   : string,
    cidade   : string
};

endereco2 = 
{
    endereco : "Rua Teste 2",
    numero : 5002,
    bairro : "Centro 2",
    cidade : "Pedro Lepoldo 2"
}

console.log(endereco2);

interface IEndereco
{
    endereco : string;
    numero   : number;
    bairro   : string;
    cidade   : string
}

let endereco3 : IEndereco;
let endereco4 : IEndereco;

endereco3 = 
{
    endereco : "Rua Teste 3",
    numero : 5003,
    bairro : "Centro 3",
    cidade : "Pedro Lepoldo 3"
}

console.log(endereco3);

endereco4 = 
{
    endereco : "Rua Teste 4",
    numero : 5004,
    bairro : "Centro 4",
    cidade : "Pedro Lepoldo 4"
}

console.log(endereco4);