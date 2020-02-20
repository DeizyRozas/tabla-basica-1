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
(fib(1) + fib(2), o (1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).
 Haz esto primero sin usar recursión. Si no sabes qué es una recursión, 
no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. */

function fib (num){
    var fibo0 = 0;
    var fibo1 = 1;
    for( i = 2; i <= num; i++){
        var fiboN = fibo0 + fibo1;
        fibo0 = fibo1;
        fibo1 = fiboN;
    }
    return fiboN;
}
console.log(fib(10));

/* Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. 
Si el array es muy pequeño, devuelve null.  */

function penultimo (arr){

    if (arr.length<2){
        console.log('null');
    }

    else{
    console.log(arr[arr.length-2]);
    }

}
penultimo([4,9,6,0,'hola','foto']);

/*Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. 
    Si el array es muy pequeño, devuelve null.  */

function UltimoN(x,y){

    if(x.length<y){
        console.log('Null');
    }

    else{
        console.log(x[x.length-y]);
    }
}
UltimoN([5,2,3,6,4,9,7],3);

/*Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. 
Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null. */

function segundoMasGrande (arr){

    if(arr.length < 2){
        console.log('Null');
    }

    else{  
        var mayor = arr[0];
        var mayor2 = 0;
        for( i = 1; i < arr.length ; i++){

            if(arr[i] > mayor){
                mayor2= mayor;
                mayor = arr[i];
                
            }

            else{
                if(arr[i] > mayor2){
                    mayor2=arr[i];
                }
            }
        }
        console.log(mayor2);
        return mayor2;

    }
}
segundoMasGrande([10,15,45]);

/*Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos 
en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a   
[4,4, "Ulysses", 42, 42, false]. */

function dobleProblemaPar(arr){
    var arr2=[];
    for (i = 0; i < arr.length; i++){
        if(i%2===0){
            arr2.push(arr[i]);
            arr2.push(arr[i]);
        }
        else{
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(dobleProblemaPar([4, "Ulysses", 42, false]));