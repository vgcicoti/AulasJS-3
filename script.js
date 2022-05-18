// Aula 23 - Objetos Construtores

// function criarAluno(nome, n1, n2) {

//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }

function aluno(nome, n1, n2) {

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }
}

// var turma = [
//     criarAluno("Vini", 8, 6),
//     criarAluno("Joao", 7, 4)
// ]

// var aluno = turma[0];

var a = new aluno("Vini", 9, 10)

console.log(a.media())

// forEach vai varrer o Array e pegar todos objetos que tem dentro do mesmo

// turma.forEach(function (elementos) {

//     console.log(elementos);

// });

// Fazer a mesma coisa utilizando apenas for:

// for (var aluno of turma) {
//     console.log(aluno)
// }

// Aula 24 - Datas

// (year, month, day, hours, minutes, seconds, milliseconds)

var d = new Date(2022, 03, 25, 18, 40);

var dias = ["dom","seg,","ter","qua","qui","sex","sab"]

console.log(d);
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getDay())
console.log(dias[d.getDay()])

// Aula 25 - Const, Let e Var

var numero1 = 4;
let numero2 = 5; // Escopo local: Uma vez criado dentro de um bloco só existe naquele bloco
const numero3 = [6]; // Const é valor constante, uma vez atribuido valor não pode ser reatribuida

numero3.push(7);

console.log(numero1)
console.log(numero2)
console.log(numero3)