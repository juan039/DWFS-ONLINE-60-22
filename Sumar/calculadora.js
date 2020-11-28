var valores;
function Calculos(valores) {
    var sum=0;
    var prom=0;
    for(  i = 0; i <= valores.lenght; i++ )
    {
        sum += + valores[i];
    }
    prom= sum/valores.lenght;
    return console.log("La suma da: " + sum + "El promedio da: " + prom);

}