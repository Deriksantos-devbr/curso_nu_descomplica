var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
});
console.log(nums);



var funcionarios = [
    {nome: "Luiz", idade: 50},
    {nome: "Bruna", idade: 29},
    {nome: "Lucas", idade: 32},
    {nome: "Marcela", idade: 19},

]

nomes = funcionarios.map(pessoa => pessoa.nome),
console.log(nomes);