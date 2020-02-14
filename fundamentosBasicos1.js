function dev(){
    var arr=[];
    for (i=1; i<=255; i++){
      arr.push(i);
    }
    return arr;
}
console.log(dev());



function sumaPares(){
    var sum=0;
    for (i=0; i<=1000; i++){
      if(i%2===0){
      sum=sum+i;
      }
    }
    return sum;
  }
console.log(sumaPares());



function sumaImpares(){
    var sum=0;
    for (i=0; i<=5000; i++){
      if(i%2==1){
      sum=sum+i;
      }
    }
    return sum;
}
console.log(sumaImpares());
  

function iteracion(arr){
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}
console.log (iteracion([1,2,5]));



function findMax(arr){
  var max = 0;
  for (i = 0; i < arr.length; i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}
console.log (findMax([-3,3,5,7]));



function findAvg(arr){
  var sum = 0
  var avg = 0;
  for (i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
avg = sum/arr.length;
return avg;
}
console.log (findAvg([-3,3,5,7]));


/*
Array de impares Escribe una funci[on que devuelva un array de todos los 
  números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
Mayor que Y - Dado un valor Y, escribe una función que toma un array y devuelve 
los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función 
devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
Cuadrados Dado un array con múltiples valores, escribe una función que reemplace 
cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
Negativos - Dado un array con múltiples valores, escribe una función que reemplace 
cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el 
array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
Max/Min/Avg - Dado un array con múltiples valores, escribe una función que devuelva 
un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) 
del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
Intercambia Valores -Escribe una función que intercambie el primer y el último valor 
de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
De Número a String Escribe una función que tome un array de números y reemplace cualquier 
valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/
  