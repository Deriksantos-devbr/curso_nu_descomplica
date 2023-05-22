var custoCarro;
var custoFabrica;
var porcentagemDistribuidor;
var porcentagemImposto;

custoFabrica = 40000
porcentagemDistribuidor = custoFabrica * 28/100;
porcentagemImposto = custoFabrica
* 45/100;
custoCarro = custoFabrica + porcentagemDistribuidor + porcentagemImposto;
console.log("O preço final do carro é:" , custoCarro)
