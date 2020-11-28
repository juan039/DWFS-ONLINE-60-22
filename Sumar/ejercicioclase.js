/*let inputUser;
let numeros=new Array();
do {
    inputUser=prompt("Ingrese un numero o la palabra stop para terminar");
    let aux= parseInt(inputUser);
    if(!isNaN(aux)){  
        numeros.push(aux);
    }
} while (inputUser!="stop")
console.log(numeros);*/

let inputUser;
let numerosPares=new Array();
let numerosImpares=new Array();
let noNumericos=new Array();
do {
    inputUser=prompt("Ingrese un numero cualquiera o ingrese 0 para terminar");
    let aux= parseInt(inputUser);
    if(!isNaN(aux)){ 
        if(aux!=0){ 
            if((aux%2)==0){
                numerosPares.push(aux);
            }
            else {
                numerosImpares.push(aux);
            }
        }
    }
    else{
        noNumericos.push(inputUser);
    }
}
while (inputUser!="0")
console.log(numerosPares,numerosImpares,noNumericos);

