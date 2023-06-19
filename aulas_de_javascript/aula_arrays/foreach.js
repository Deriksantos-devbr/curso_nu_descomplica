//ForEach
var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));

//ForEach soma
var tot = 0;
a.forEach(valor =>{
    tot += valor
;})

console.log(tot);

//ForEach com indice

a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})