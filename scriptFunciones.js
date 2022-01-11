//INTROCUCCION DE LA CLASE
// Este es un comentario de una linea
/* Este es un comentario multilinea y se cierra igual */

/*
// Esta es una alerta
alert ("Estoy vivo!");

console.log("Este es un mensaje para la consola");

var nombre = "Lilia Jazmín";
var apellidos = "Urzúa Ramírez";
var edad = 22;

//Como mandar a llamar en consola las variables, por medio de su nombre
console.log(nombre, apellidos, edad);

alert ("Mi nombre es " + nombre);
console.log("Mi nombre es: " + apellidos);

alert ("Mi nombre es: " + nombre + " ,mis apellidos son: " + " y mi edad es: " + edad);

//Otro ejemplo de como mostrar variables en consola
var numero1 = 5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log("El resultado de la suma es: " + resultado);

//Sitáxis básica de una función
function nombreFuncion (parametros) {
    instrucciones;
} 
*/

//PARTE 2 DE LA CLASE
/*
//Declaración de función
function Saludar() {
    alert ("Hola a todos");
}

Saludar();

//Expresión de función
var Cantar = function() {
    alert ("A mi me gusta cantar");
}
Cantar();

//Función sin parámetros(que es lo que va dentro de parametros)
function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("La suma de la función sin parametros es: " + suma);
}

sumar();

//Función con parametros
function restar(num1, num2, resta) {
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert ("La resta de la función con parametros es: " + resta);
}

restar();

//Otra función con parametros
function cuadrado (cuadrado) {
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado del número es: " + rescuadrado);
}

cuadrado(4);

function Operaciones (num1, num2, num3, suma, resta, multi) {
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert("La suma es: " + suma + ", la resta es: " + " y la resta es: " + resta + " y la multiplicación es: " + multi);
}

Operaciones (5, 6, 7);
*/

//PRIMER EJERCICIO DE LA CLASE
/*
//Elaborar 3 funciones para sacar area de un triangulo, circulo y rectangulo.
function triangulo() {
    var base = 4;
    var altura = 10;
    var res = (base * altura)/2;
    console.log("El area del triangulo es: " + res);
}
triangulo();

function circulo (){
    var radio = 4;
    var pi = 3.14;
    var res = pi*(radio * radio);
    console.log("El area del circulo es: " + res);
}
circulo();

function rectangulo(b, a) {
    var res = b * a;
    alert ("El area de un rectangulo es: " + res);
}
rectangulo(8,12);

//Funcion prompter
function Prompter() {
    var respuesta = prompt("Buenos días, cuál es tu nombre?");
    alert ("Es un gusto saludarte " + respuesta);
}
Prompter();

function AreaCuadrado () {
    var datoIngresado = prompt("Ingresa un número");
    var resultado = datoIngresado * datoIngresado;
    alert ("El area del cuadrado es: " + resultado + " porque el número que ingresaste es: " + datoIngresado);
} 
AreaCuadrado();
*/

//PARTE 3 DE LA CLASE
function confirmacion() {
    var pregunta = confirm ("Deseas visitar Google.com y buscar fotos de perritos?");
    if (pregunta) {
        alert ("Te enviaré rápidamente");
        window.location = "https:www.google.com"
    }
    else {
        alert ("No hay problema, nos vemos luego");
    }
}

//getElementByid
function cambiarColor(nuevoColor) {
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevoColor;
}

function Accion (Tipo) {
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
        elem.style.display = 'none';
    else
        elem.style.display = '';
}