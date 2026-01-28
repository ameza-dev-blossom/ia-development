/**
 * 7 Funciones Dummy en JavaScript Clásico
 */

// 1. Saludo simple
function sayHello() {
    return "¡Hola Mundo!";
}

// 2. Suma de dos números
function addNumbers(a, b) {
    return a + b;
}

// 3. Verificar si un número es par
function isEven(number) {
    return number % 2 === 0;
}

// 4. Saludar a un usuario por nombre
function greetUser(name) {
    console.log("Hola, " + name + ". ¡Bienvenido!");
}

// 5. Generar un número entero aleatorio entre un rango
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6. Revertir una cadena de texto
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 7. Obtener la fecha actual formateada (YYYY-MM-DD)
function getCurrentDate() {
    var d = new Date();
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}
