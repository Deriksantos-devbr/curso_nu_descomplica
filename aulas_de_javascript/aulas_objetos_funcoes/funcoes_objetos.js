    // formas de formar objetos
var pessoa = {
        nome: 'Luiz',
        sobrenome: 'Otavio'
};

console.log(pessoa['sobrenome']);

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrnome = "Silvia"

console.log(pessoa1.nome);


var pessoa2 = new Object();
pessoa2.nome = "Angela";
pessoa2.sobrenome ="Silva"
pessoa2.falarNome = function(){
    console.log("O nome é: " + this.nome, this.sobrenome);
}
pessoa2.falarNome();



function criarPessoa(nome, sobrenome){
    return {nome,sobrenome};
}

var p1 = criarPessoa("Lucas", "Silva");
var p2 = criarPessoa("Artur","Almeida");

console.log(p2);