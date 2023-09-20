/* calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre b. apellido  c. sueldoActual  d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables: */

let nombre = 'Sofía';
let apellido = 'López';
let sueldoActual = 100000;
let porcentajeAumento = 25;

let calculoAumento = sueldoActual * porcentajeAumento / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual:
${sueldoActual}
Ha recibido un aumento del 25%:
${calculoAumento}
y su nuevo sueldo es de: ${nuevoSueldo}`);