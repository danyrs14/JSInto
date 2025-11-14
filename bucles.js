//ciclo for
console.log('Ciclo for (numeros del 1-5)');
for (let numero = 0; numero <= 5; numero++)//todos esta aqui de donde a donde y el incremento/decremento
{
    //se realiza aqui la logica para la cual se hizo el ciclo
    console.log(numero);
}
//ciclo while
console.log('Ciclo while (numeros in 1-5)');
//en este caso se declara primero de donde queremos partir
let numero1 = 0;
while (numero1 <= 5)//aqui se pone hasta donde se quiere llegar
{
    resultado = numero1*10;
    console.log(resultado);//aqui se realiza las acciones que se requieran
    numero1++;//el incremento/deecremento va aqui
}

//control de bucles con break
console.log("Control de bucles con break");

let x = 0;
while (true)//el bucle se ejecuta indefinidamente por el true
{
    console.log(x);
    x++;

    //dentro de la funcion establecemos un ciclo el cual va a limitar e true cuando llegue a esa cantidad
    //y terminara con un break
    if (x === 5)
    {
        break;
    }
}

//control de bucles con continue
console.log("Control de bucles con break");
for (let i = 0; i < 10; i++)//iteramos con este for del 0 - 9
{
    if (i % 2 === 0)//verificamos si nuestro numero es par
    {
        continue;//si es par se ejecuta el continue
    }
    console.log(i);//al final solo se imprimen los nuemros impares ya que con el ciclo anterior se descartan los pares
}

//control de bucles (pass)
console.log("Control de Bucle con pass");
for (let a=0; a < 5; a++)//iteranis sobre 0-4
{
    //pass en js es vacio
}