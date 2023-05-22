
function getvalue(){
    var value = document.getElementById("name").value;
    document.getElementById("Result").innerHTML ='bem vindo, ' +   value;
 
 }
 function removeValue(){
    document.getElementById("name").value = "";
    document.getElementById("Result").innerHTML = "";

 }