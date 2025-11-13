//se importa el modulo readline
const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

//cuando hacemos esto en consola, las condicionales deben ir dentro del rl.question
rl.question("Escribe tu calificacion\n", (input) => {
    //let es la forma de declarar variables en javascript
    let numero = Number(input);
    console.log(Number(numero));

    if (numero === 5) {
        console.log("Excelente");
    } else if (numero === 4) {
        console.log("Muy Bien");
    } else if (numero === 3) {
        console.log("Bien");
    } else if (numero === 2) {
        console.log("Mal");
    } else if (numero === 1) {
        console.log("Muy Mal");
    }
})
