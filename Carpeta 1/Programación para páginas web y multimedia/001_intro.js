console.log("Hello World! bye")

//variables
// datos primarios
// numeros
var variable_1 = 123 //este es un tipo de numero int o  entero
var variable_2 = 5.5 //este es un tipo de numero float o flotante

console.log(variable_1);

//Textos
let variable_3 = 'esto es un texto dentro de una variable'
console.log(variable_3);

//Booleano
let variable_4 = true
let variable_5 = false
console.log(variable_4)

// operaciones matematicas
// suma +
// resta -
// multiplicacion *
// division /

console.log(variable_1/5);

console.log(variable_2 * 10);
variable_2 ="hola";

console.log(variable_2 * 10);

// consideración d e operaciones matematicas
// se sigue la jerarquia de operaciones
console.log((1+2+3)*4);

// operaciones logicas

// menor que <
// menor o igual que <=
//  mayor que >
// mayor o igual que >=
// igual que =
// diferente de !=
//  igual que (evaluando el tipo de dato) ===
//diferente de (evaluando el tipo de dato) !==

variable_4 = variable_1 < 100
console.log('variable_4');
console.log(variable_4);

variable_4 = variable_1 <= 123
console.log('variable_4 segundo intento');
console.log(variable_4);

variable_1 = 110
console.log(variable_1 <= 123);

console.log("comparacion_igual");
console.log(123 == 123);
console.log(123 == '123');
console.log(123 === '123');

console.log("segunda parte");
let num = 20
//estructura del if 
if(num > 20){
    // solo si el valor booleano recibido en el if es true 
    // se ejecuta el codigo 
    console.log("este numero es mas grande que 20");
}

if (num < 20) {
    console.log("este numero es mas chico que 20 ");
} 

if (num === 20) {
    console.log("este numero es igual a 20");
    
}

//usando if else para condiciones que se excluyen entre si 

if (num > 20) {
    console.log("este numero es mas grande que 20 ");
    
} else if (num < 20 ) {
    // otra opción que puede suceder si antes no hemos obtenido true
    console.log("ete numero es mas chico que 20");
}else{
    // la opción por default que se ejecuta si nada anterior fue true
    console.log("ete numero es igual a 20");
}

//objetos de javascript
//arreglos
let array1 = []
console.log('array1');
console.log(array1);

// un arreglo es un tipo de dato que pertenece a los objetos 
// actua como un contendor de otros tipos de datos 

array1 = [4,1, 2, 3]
console.log('array1');
console.log(array1);
console.log(array1[1]);
console.log(array1[0]);


let obj1 = {
    name: "Alan",
    lastName: "Ceballos",
    age: 27,
    isteacher : true, 
    favoriteTeams:[
    'Chiefs',
    'San Francisco',
    'Baltimore',
    ],
    pet: {
     name: 'uva',
     age : 1.5
    }
}

console.log('obj1');
console.log(obj1);
console.log(obj1.pet);
console.log(obj1.favoriteTeams[0]);

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
]

console.log('arr2');
console.log(arr2);
console.log(arr2[1][1]);