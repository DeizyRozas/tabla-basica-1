//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
//Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5,8].

function tamañoGrande (arr){

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
        arr[i]="big";
        }
    }
    return arr;
}
console.log('ejercicio 1 =');
console.log(tamañoGrande([-1,3,5,-5,8]));


/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
*/

function menorMayor(arr){
    var menor=arr[0];
    var mayor=arr[0];
    for (i = 1 ; i < arr.length ; i++){
        if(arr[i] < menor){
            menor = arr[i];
        }

        if(arr[i] > mayor){
            mayor = arr[i];
        }
    }
    console.log(menor);
    return mayor;
}
console.log('ejercicio 2 =');
menorMayor([5,80,20,35]);


/*Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function print(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]%2==1){
        return arr[i];
        }
    }
}
console.log('ejercicio 3 =');
print([2,4,5,75]);


/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
*/

function dobleVision(arr){
    var doble = [];   
    for (i = 0 ; i < arr.length ; i++){
        doble[i]=arr[i]*2;
    }
    return doble;
}
console.log('ejercicio 4 =');
console.log(dobleVision([1,2,3]));

/*Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de 
valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve 
[-1,1,1,3].
*/

function contarPositivos(arr){
    var positivos=0;
    for(i = 0 ; i< arr.length; i++){
        if(arr[i]>=0){
            positivos=positivos+1;
        }
    }
    arr[arr.length-1]=positivos;
    return arr;
}
console.log('ejercicio 5 =');
console.log(contarPositivos([-1,1,6,2,-1]));



/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
*/

function paresImpares(arr){
    for(i=0; i<arr.length; i++){

        if (arr[i]%2==1){
            if(arr[i+1]%2==1){
                if(arr[i+2]%2==1){
                    console.log("Que imparcial!");
                }
            }
        }

        if (arr[i]%2==0){
            if(arr[i+1]%2==0){
                if(arr[i+2]%2==0){
                    console.log("Es para bien!");
                }
            }
        }
    }
}
console.log('ejercicio 6 =');
paresImpares([3,5,7,4,2,4]);


/*Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente 
a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
*/

function incremento(arr){
    for(i = 0; i < arr.length ; i++){
        console.log(arr[i]);
        if(i%2==1){
            arr[i]=arr[i]+1;
        }
    }
    return arr;
}
console.log('ejercicio 7 =');
console.log(incremento([2,3,5,7,8,2,5]));


/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
Pista: ¿For loops solo puede ir hacia adelante?
*/

function longitudesPrevias(arr){
    for(i = arr.length-1; i >= 1; i--){
        arr[i]=(arr[i-1].length);
    }
    return arr;
}
console.log('ejercicio 8 =');
console.log(longitudesPrevias(["programar","dojo","genial"]));


/*Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un 
nuevo array. 
*/

function agregaSiete (arr){
    var agrega = [];
    for(var i = 0 ; i < arr.length; i++){
        agrega[i] = arr[i]+7;
    }
    return agrega;
}
console.log('ejercicio 9 =');
console.log(agregaSiete([1,2,3]));

/*Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
*/

function arrayInverso(arr){
    var temp = [];
    for (i = 0; i < arr.length/2 ; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log('ejercicio 10 =');
console.log(arrayInverso([2,3,5,7,8]));



/*Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
*/


function perspectivaNeg (arr){
    var temp = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        temp[i] = arr[i]*-1;
        }
        else{
        temp[i] = arr [i];
      }
    }
    return temp;
}
console.log('ejercicio 11 =');
console.log(perspectivaNeg([1,3,5,-8]));




/*Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea 
“comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
*/

function siempreHambriento(arr){
    var comer=0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i]=='comida') {
            console.log('yummy');
            comer=1;
        }
    }
    
    if (comer==0) {
        console.log('tengo hambre');
    }
}
console.log('ejercicio 12 =');
siempreHambriento([2,8,3]);

/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
 Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. 
 cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
*/

function centro(x){
    for(i = 0; i < x.length/2; i=+2){
        temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
    return x;
}
console.log('ejercicio 13 =');
console.log(centro([1,2,3,4,6,5,6]));



/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/

function escala(x,y){
    for(i = 0; i < x.length ; i++){
        x[i]=x[i]*y;
    }
    
    return x;
}
console.log('ejercicio 14 =');
console.log (escala([1,2,3],3));