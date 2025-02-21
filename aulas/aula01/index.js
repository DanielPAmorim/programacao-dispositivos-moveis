// variaveis
let variavel_local = 10; // number
const constante = []; // array
const objeto = {}; // objeto
const msg = "texto"; // string
let status = false; // bool
//funcoes
function soma(a,b){
    return a + b;
};

let resultado = soma (1,2);

const multiplica = (a,b) => a * b; // arrow function
resultado = multiplica (1,2);
/*
function multiplica(a,b) {
    return a* b;
    }
*/

 async function tempo(duracao) {
    await new Promise((r) => {
      setInterval(r, duracao) ; 
    }) ;
    
    console.log("Passou o tempo!");
}

tempo(3000);

//objetos

const pessoa = {nome: "Jose", email: "jose@iesb.br", fone: "99999-9999" }
console.log(pessoa.nome);
pessoa.nome ="Jose Reginaldo";
console.log(pessoa.nome);
const { nome } = pessoa;
console.log(nome);
const pessoa_fisica ={cpf:111, ...pessoa}

const lista =[];
lista.push("uva");
const achou = lista.find((item) => item === "uva");

const texto = "Ola";
texto.concat(" Mundo");
texto.toUpperCase();

//modulos
export { soma, multiplica}