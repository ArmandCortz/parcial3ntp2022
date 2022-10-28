/**Crear un objeto Persona que tendrá como atributos su nombre, apellido, edad, sexo. Luego
deberá imprimir cada elemento del objeto en el HTML. */

const ejercicio4 = document.createElement("h3");
ejercicio4.innerHTML = "Ejercicio 4";
document.body.appendChild(ejercicio4);

const objMessages = {
	nombre: "Leonel",
	apellido: "Garcia",
	edad: "22",
	sexo: "Masculino",
};

const objeto = document.createElement("p");
objeto.innerHTML =
	"Nombre: " +
	objMessages["nombre"] +
	"<br>" +
	"Apellido: " +
	objMessages["apellido"] +
	"<br>" +
	"Edad: " +
	objMessages["edad"] +
	"<br>" +
	"Sexo: " +
	objMessages["sexo"];
document.body.appendChild(objeto);
