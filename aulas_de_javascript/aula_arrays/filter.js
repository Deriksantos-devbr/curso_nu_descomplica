var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado);

//maneira mais simplificada

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados);


function buscarValores(valor){
    return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores);

console.log( numerosEncontrados);

//maneira mais simples

var r1 = numeros.filter((valor)=>{
    return valor < 5;
});
console.log(r1);

//melhor maneira simples


var r2 = numeros.filter(valor => valor > 5);
console.log(r2);


//usando objeto

var funcionarios = [
    {nome: "Luiz", idade: 50},
    {nome: "Bruna", idade: 29},
    {nome: "Lucas", idade: 32},
    {nome: "Marcela", idade: 19},

]

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5
    
    })
    console.log( pessoasListagem );

    //exercicios

    var produtos = [
        { id: 1, descrição: "SmartPone", categoria: "Eletronico" },
        { id: 2, descrição: "Notebook", categoria: "Eletronico" },
        { id: 3, descrição: "VideoGame", categoria: "Eletronico" },
        { id: 4, descrição: "Fogão", categoria: "EletroDomestico" },
        { id: 5, descrição: "Geladeira", categoria: "EletroDomestico" },
        { id: 6, descrição: "Microondas", categoria: "EletroDomestico" }
      ];
      
      var ProdutoSelecionado = produtos.filter(function(produto) {
        return produto.categoria === "EletroDomestico";
      });
      
      console.log(ProdutoSelecionado);
      