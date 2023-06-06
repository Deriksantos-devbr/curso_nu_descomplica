//Escrever um algoritimo para ler o salario mensal atual de um funcionario e o percentual de reajuste. Calcular e escrever o valor do novo salario

var salario = 6000;
var percentual = 10;
var aumento = 0;
var novosalario = 0; 

aumento = salario * percentual /100;
novosalario = salario + aumento;

console.log("O novo salário é:" + novosalario);

