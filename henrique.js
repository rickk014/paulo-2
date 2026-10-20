//primeira lição//
let estudante = {
  nome: "Henrique",
  idade: 17,
  curso: "Engenharia de Software"
};

estudante.curso = "Desenvolvimento de Sistemas";

console.log(estudante);

//segunda lição//
estudante.trimestre = 3;

console.log(estudante);

//terceira lição//

let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Melancia");

console.log(frutas); 

frutas.shift();

console.log(frutas);

//quarta lição//
const virgulaFrutas = frutas.join(",");
console.log(textoFrutas);

const frutasSelecionadas = frutas.slice(1, 3);
console.log(frutasSelecionadas);

// quinta lição//
const numeros = [2, 5, 7, 10, 12];

const numerosMultiplicado = numeros.map(numero => numero * numero);

console.log(numerosMultiplicado);
