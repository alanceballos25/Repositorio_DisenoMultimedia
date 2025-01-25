// Ejercicio 1:
// crear una variable llamada precioProducto que tenga un valor numérico
// crear una variable llamada iva que también sea un valor numérico
// entre 1 y 30, calcular e imprimir en consola el precio total
let precioProducto = 250;
let iva = 0.16; 

if (iva >= 0.01 && iva <= 0.3) {
    let precioTotal = precioProducto * (1 + iva);
    console.log("Precio Total con IVA:", precioTotal.toFixed(2));
}

// Ejercicio 2
// crear una variable llamada radio y asignarle un valor
// numérico, este valor representa el radio de un círculo
// con ese valor calcular el área y perímetro del mismo
// considere pi como 3.1416
let radio = 15; 
const pi = 3.1416;

let area = pi * radio ** 2;
let perimetro = 2 * pi * radio;

console.log("Área:", area.toFixed(2), "| Perímetro:", perimetro.toFixed(2));


// Ejercicio 3
// crear 3 variable numéricas llamada num_1, num_2 y num_3
// con esos valores, realizar lo siguiente:
// 3.1 - obtener e imprimir el promedio
// 3.2 - encontrar e imprimir el mayor de los números
// 3.3 - encontrar e imprimir el mediano de los números
// 3.4 - dividir num_1 entre num_3 validando que sea posible (recuerde que no se puede dividir entre cero)
// 3.5 - imprimir cuantas unidades, decenas y centenas contiene num_2
// 3.6 - intercambiar los valores de las variables num_1 y num_2 (no asignar directamente el valor, hacer un intercambio creando una variable adicional que sirva de contenedor temporal)
// 3.7 - escribir en consola si num_2 es par o impar

let num_1 = 10;
let num_2 = 20;
let num_3 = 30;

let promedio = (num_1 + num_2 + num_3) / 3;
console.log("Promedio:", promedio.toFixed(2));

let mayor = Math.max(num_1, num_2, num_3);
console.log("Mayor:", mayor);

let Array = [num_1, num_2, num_3].sort((a, b) => a - b);
let mediano = Array[1];
console.log("Mediano:", mediano);

let division = num_3 !== 0 ? num_1 / num_3 : "No se puede dividir entre cero";
console.log("División:", division);

let unidades = num_2 % 10;
let decenas = Math.floor((num_2 % 100) / 10);
let centenas = Math.floor(num_2 / 100);
console.log("Unidades:", unidades, "| Decenas:", decenas, "| Centenas:", centenas);

let temp = num_1;
num_1 = num_2;
num_2 = temp;
console.log("Intercambio:", "num_1:", num_1, "| num_2:", num_2);

let esPar = num_2 % 2 === 0;
console.log("num_2 es", esPar ? "par" : "impar");

// Ejercicio 4
// crear una variable likes que contenga un número entero entre 1 y 100 millones
// imprimir una versión corta del número en cuestión con las siguientes condiciones:
// - en caso de que el número sea menor a mil, imprimir el número tal cual
// - en caso de que el número sea igual a mil y menor a un millón, escribir solamente
//   los miles con un "k" después, ejemplo, 55687 debe imprimir 55k
// - en caso de que el número sea mayor o igual a un millón, imprimir solo
//   los millones con una "m" después, por ejemplo con un número 15125135
//   debe imprimir solo 20m

let likes = 57568; 

if (likes < 1000) {
    console.log("Número:", likes);
} else if (likes >= 1000 && likes < 1000000) {
    let Numerocorto = (likes / 1000).toFixed(0) + "k";
    console.log("Número:", Numerocorto);
} else if (likes >= 1000000 && likes <= 100000000) {
    let Numerocorto = (likes / 1000000).toFixed(0) + "m";
    console.log(" Número:", Numerocorto);
} else {
    console.log("Número fuera de rango");
}
