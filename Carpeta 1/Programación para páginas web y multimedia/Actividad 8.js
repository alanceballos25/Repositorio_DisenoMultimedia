function saludo(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludo("Alan");

const colores = ['Azul', 'Rojo', 'Verde', 'Amarillo'];

console.log(colores.map((color) => color.length));


function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(6, 9)); 

var myText = "La pared es de color Azul";
var newString = myText.replace("Azul", "Rojo");
console.log(newString);


function ejemploScope() {
    let mensaje = "Hola,Como estas?";
    console.log(mensaje); 
}
ejemploScope();

const ejemploScopeArrow = () => {
    let mensaje = "Hola me llamo Luis";
    console.log(mensaje); 
};
ejemploScopeArrow();


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const exito = true;
//         if (exito) {
//             resolve("Éxito!");
//         } else {
//             reject("Fallo!");
//         }
//     }, 2000);
// });
// promesa
//     .then(resultado => console.log(resultado)) 
//     .catch(error => console.error(error));




async function Promesa() {
    try {
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = false;
                if (exito) {
                    resolve("Éxito!");
                } else {
                    reject("Fallo!");
                }
            }, 2000);
        });
        console.log(resultado); 
    } catch (error) {
        console.error(error); 
    }
}
Promesa();



fetch("http://www.example.com/dogs")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

