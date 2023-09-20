/* Usando el console.log() mostrar al usuario los resultados de las siguientes
operaciones aritméticas, en función de los valores asignados a las variables:
I. Suma  II. Resta  III. Multiplicación  IV. División  V. Módulo
VI. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true.
De lo contrario mostrará false
VII. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true.
De lo contrario mostrará false */

let numero1 = 10;
let numero2 = 20;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

let esMenor = numero1 < numero2;
let esMayor = numero1 > numero2;

console.log(esMenor);
console.log(esMayor);