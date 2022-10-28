/** Cree un objeto que contenga 4 elementos. id, nombre, apellido, carnet. Forme el ID utilizando
un método random o un Date, luego imprima los elementos del objeto en el HTML */

const ejercicio9 = document.createElement("h3");
ejercicio9.innerHTML = "Ejercicio 9";
document.body.appendChild(ejercicio9);

const Ej9 = {
	id: Date.now(),
	nombre: "Leonel",
    apellido: "Garcia",
    carnet: "GC01135836"
};

const div9 = document.createElement("div");

const id9 = document.createElement("p");
id9.innerHTML="Id: " + Ej9["id"];

const name9 = document.createElement("p");
name9.innerHTML="Nombre: "+Ej9["nombre"];

const lastname9=document.createElement("p");
lastname9.innerHTML="Apellido: "+Ej9["apellido"];

const carnet9 = document.createElement("p");
carnet9.innerHTML="Carnet: "+Ej9["carnet"];

document.body.appendChild(div9);

div9.appendChild(id9);
div9.appendChild(name9);
div9.appendChild(lastname9);
div9.appendChild(carnet9);