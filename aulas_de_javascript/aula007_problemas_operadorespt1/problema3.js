var custoFabrica = 40000;
var distribuidor;
var imposto;
var custoFinal;

distribuidor = custoFabrica * 28/100;
imposto = custoFabrica * 45/100;
custoFinal = custoFabrica + distribuidor + imposto;
console.log("O custo final ao consumidor é: " + custoFinal);