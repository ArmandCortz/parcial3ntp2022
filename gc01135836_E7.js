/** Cree una función que reciba como parámetro su nombre como cadena y luego remplace todas las
vocales de su nombre por un numero de la siguiente manera.
A = 4 , E = 3 , i = 1 , O = 0 (zero) , U = 2, luego Imprima el resultado en el HTML */

const ejercicio7 = document.createElement("h3");
ejercicio7.innerHTML = "Ejercicio 7";
document.body.appendChild(ejercicio7);


const nombre = "Leonel Armando Garcia Cortez";


function calculo(frase) {
    z=frase
		.replace(/[aA]/gi, 4)
		.replace(/[eE]/gi, 3)
		.replace(/[iI]/gi, 1)
		.replace(/[oO]/gi, 0)
		.replace(/[uU]/gi, 2);
    
    const p7= document.createElement("p");
    p7.innerHTML=z;
    document.body.appendChild(p7);
}

calculo(nombre)
