/*
var numero //var podes repetir el concepto sin querer y no te avisa la consola del navegador //
let numero2 = 15  //let no  se puede pisar, te avisa que la variable ya esta//
const anio = 1987 //requiere un valor si o si, no se puede reasignar el valor mas adelante, se escribe todo junto el concepto//

numero = 16

console.log(numero)
console.log(numero2)

//Operaciones con numeros

let numero1 = 120
let numero20 = 20
const NUMERO3 = 10
let resultadoSuma = numero1 + numero20
console.log(resultadoSuma)
let resultadoResta = numero1 - numero20
console.log(resultadoResta)
let resultadoMulti = numero1 * NUMERO3
console.log(resultadoMulti)
let resultadoDivi = numero1 / numero20
console.log(resultadoDivi)
let resultadoFinal = resultadoSuma + resultadoDivi + resultadoResta + resultadoMulti
console.log(resultadoFinal)
//operaciones con texto
let texto1 = "hola," //TE podes ahorrar la constante espacio agregando un espacio al final de texto entre comillas
let nombre = "maxi"
const ESPACIO = " "
let saludo = texto1 + ESPACIO + nombre
console.log(saludo)
nombre = "emanuel"
saludo = texto1 + ESPACIO + nombre
console.log(saludo)
*/
/*
let nombre = prompt("Ingrese su nombre")
alert("hola, " + nombre)
let numero1 = prompt("por favor ingrese un numero")
let numero2 = prompt("ingrese otro numero")
numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
let resultado = numero1 + numero2
alert("El resultado es: " + resultado)
*/
let usuario = prompt ("Hola! Ingresa tu usuario");
let clave = prompt ("Ahora ingresa tu clave");
if(usuario == "emanuel" && clave == "12345")
    {
        alert("Bienvenido");
    }else{    
        for(let i = 2 ; i>= 1; i--){
            alert("ingresaste mal tus datos, te quedan " + i + " intentos");
            usuario = prompt ("Hola!Ingresa tu usuario");
            clave = prompt ("Ahora ingresa tu clave");
                if(usuario == "emanuel" && clave == "12345"){
                    alert("bienvenido");
                break;
                };
        };
    };