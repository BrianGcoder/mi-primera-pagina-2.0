for (let i =10; i >= 1; i--) {
    console.log (i);
}
    for (let i = 1; i <= 10; i ++) {
console.log (i)}
// comprobado que funciona  el codigo de conteo regresivo y progresivo// 
// pasemos al siguiente ejercicio// 
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial); // 
//se pudo comprobar que el codigo funciona correctamente, ya que el factorial de 5 es 120//
// hagamos un promedio de calificaciones //
let calificaciones = [35 , 45, 50, 75, 95]
let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}
let promedio = suma / calificaciones.length;
console.log(promedio); // 
//se pudo comprobar que el codigo funciona correctamente, ya que el promedio de las calificaciones es 60//
