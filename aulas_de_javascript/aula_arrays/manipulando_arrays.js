
  //slice
var pessoa = ["Derik", "Joana", "Bruna", "Milena"];
var pessoa1 = pessoa.slice(0,2);

console.log(pessoa);
console.log(pessoa1);


//convat

var pessoa = ["Derik", "Joana", "Bruna", "Milena"];
var gerente =["Ailton","Meire"];

var pessoa1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoa1);

var empresa = pessoa.concat(gerente);

console.log(empresa);

//exercicios

var messes = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "outubro", "setembro", "novembro", "dezembro"];

var trimestre1 = messes.slice(0, 3);
var trimestre2 = messes.slice(3, 6);
var trimestre3 = messes.slice(6, 9);
var trimestre4 = messes.slice(9, 12);

console.log("Trimestre - 1, " + trimestre1);
console.log("Trimestre - 2, " + trimestre2);
console.log("Trimestre - 3, " + trimestre3);
console.log("Trimestre - 4, " + trimestre4);

var dozeMeses = messes.concat(trimestre1, trimestre2, trimestre3, trimestre4);

console.log("Meses do anos: " + dozeMeses);


