// var fruta = 'piña';

// function dimeLaFruta() {
//     let fruta2 = 'manzana'
//     console.log(fruta)
//     console.log(fruta2)
// }

let mi_arreglo = [];
let mi_arreglo2 = new Array();

let edades = [30,24,27,38,27,34,29,29,35,27];
console.log(edades)
console.log(edades[0])
edades.push(15);
console.log(edades);

edades.unshift(6);
console.log(edades)
console.log(edades[0])

edades[12] = 24;
console.log(edades)

edades[15] = 22;
console.log(edades)

edades[0] = 7;
console.log(edades)

edades.pop();
console.log(edades)
edades.pop();
console.log(edades)
edades.pop();
console.log(edades)

edades.shift();
console.log(edades);
console.log(edades.length);


let nombres = ['Adriana', 'David', 'Franco', 'Jessica']
console.log(nombres.indexOf('Franco'));
nombres.push('Luis');
console.log(nombres.indexOf('Luis'));
console.log(nombres[3]);
console.log(nombres[5]);
nombres.unshift('Maria')
for (let i = 0; i < nombres.length; i++) {
   console.log(nombres[i]);
}

// Sort y Revers Alteran array inicial
console.log(nombres);
console.log(nombres.reverse());
console.log(nombres);
// console.log(nombres.sort());
console.log(nombres.sort().reverse());
console.log(nombres);

// Splice altera array inicial
let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log("Meses unidos con join : " + months.join(' - '));
console.log(months)
months.splice(6, 12);
console.log("Meses después del primer splice: " + months);
console.log(months)
months.splice(2,1, 3);
console.log(months)
months.splice(2,0, 'nuevo');
console.log(months)

