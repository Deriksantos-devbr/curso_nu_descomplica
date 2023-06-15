var valores = [8,1,7,2,9];
 
console.log(valores[3])

console.log("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: "+ pos + "Valor: "+ valores[pos]);
}


var soma = 0;

for( var pos = 0 ; pos < valores.length; pos++ ){
    soma += valores[pos];

}
 
var media = soma/valores.length;

console.log(media)

/*var carro = [];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW", "Yamaha", "Honda");*/
