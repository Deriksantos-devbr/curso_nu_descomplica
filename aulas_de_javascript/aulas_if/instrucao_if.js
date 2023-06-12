var pais = "Brasil" ; 

if (pais !="Brasil") {
    console.log("Você é Brasileiro");    
}else{
    console.log("Você é extrangeiro");
}


var idade = 29;

if(idade < 16){
    console.log("Voê ainda não pode votar")

}else if(idade < 18 || idade > 65){
    console.log("Voto é opcional");
}else{
    console.log("Voto obrigatorio");
}