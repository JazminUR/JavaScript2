//CLASE GUILLERMO

//PRIMER EXPLICACIÓN
var length = 16;
var lastName = "Jhonson";
var x = {firstName:"Jhon", lastName:"Doe"};
var computadora = {marca:"asus", procesador:"i9", memoria:"16 Gb", grafica:"GTX2060", nucleos:8};

console.log("El tipo de dato de 16 es: " + typeof(length));
console.log("El tipo de dato de Jhonson es: " + typeof(lastName));
console.log("El tipo de dato de Jhon Doe es: " + typeof(x));
console.log("La marca de la computadora es:"+computadora.grafica);
console.log("El número de núcleos de la computadora es de tipo:"+typeof(computadora.nucleos));


//COMO ASIGNAR TIPOS DE DATOS
var x = 4 + 3 + "volvo";
var y = "volvo" + 3 + 4;

console.log(x);
console.log(y);