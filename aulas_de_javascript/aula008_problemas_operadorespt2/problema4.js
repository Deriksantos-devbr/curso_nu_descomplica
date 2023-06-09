//Fazer um algoritmo que efetue o cálculo
// da quantidade de litros de combustivel gastos em uma viagem,
// sabendo-se que o carro faz 12km com um litro.
//deveram ser fornecidos o tempo gasto na viagem 
//e a velocidade media.
//O algoritmo devera apresentar os valores da velocidade media
//tempo gasto na viagem, distancia percorrida
//e ae quantidade de litros utilizados na viagem 

var tempo = 3;
var velocidade =80;
var distancia = tempo * velocidade;
var litros = distancia/12

console.log("A velocidade média foi: " + velocidade + " km/h");
console.log("O tempo gasto na viagem foi: " + tempo + " hora")
console.log("A distancia percorrida foi: " + distancia + " km");
console.log("O consumo de combustivel foi: " + litros + " litros");