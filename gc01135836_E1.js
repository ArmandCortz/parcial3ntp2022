/*Crear un elemento HTML e identificarlo con un ID; luego deberá buscar el elemento con
JavaScript y cambiar el contenido del elemento por su número de carnet.*/
const ejercicio1 = document.createElement("h3");
ejercicio1.innerHTML="Ejercicio 1";
document.body.appendChild(ejercicio1);

const element = document.createElement("p");
element.id = "prueba";

document.body.appendChild(element);;

const p = document.getElementById("prueba");

p.innerHTML = "GC01135836";
