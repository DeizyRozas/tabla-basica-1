/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos 
(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma(num){
    var suma=0;
    for (i = 1 ; i <= num ; i++){
        suma = suma + i;
    }
    return suma;
}
console.log(sigma(3));

/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) 
de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); 
factorial(5) = 120 (1*2*3*4*5).*/

function factorial(num){
    var mult=1;
    for (i = 2; i <= num; i++){
        mult= mult * i;
    }
    return mult;
}
console.log(factorial(5));

/*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, 
cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, 
un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 
(fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).
 Haz esto primero sin usar recursión. Si no sabes qué es una recursión, 
no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. */

function fibonacci (num){

}

/* Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. 
Si el array es muy pequeño, devuelve null.  */

function penultimo (num){
    
    console.log (num.length-2);

}