
let admin : boolean = true;

admin = false;        // false  

console.log(admin);

admin = Boolean("1"); // true
console.log(admin);

admin = Boolean(0);  // false
console.log(admin);

admin = Boolean(1);  // true
console.log(admin);

let senha = "1234";
let senhaSegura : boolean;
senhaSegura = (senha.length > 8);
console.log(senhaSegura);
