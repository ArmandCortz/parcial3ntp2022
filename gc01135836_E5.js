/** Crear un formulario con una caja de texto y un botón. Luego deberá escuchar al evento click (event
listener) y por cada clic deberá copiar el texto del formulario e imprimirlo en el HTML */

const ejercicio5 = document.createElement("h3");
ejercicio5.innerHTML = "Ejercicio 5";
document.body.appendChild(ejercicio5);


const form5 = document.createElement("form");
form5.action = " ";
form5.method = "post";
form5.id = "form5";
document.body.appendChild(form5);

const nom5 = document.createElement("textarea");
nom5.style.marginLeft = "15px";
nom5.type = "text";
nom5.name = "nombre";
nom5.id = "mensaje";
nom5.placeholder = "Mensaje";


const mostrar5 = document.createElement("button");
mostrar5.type = "button";
mostrar5.style.marginLeft = "15px";
mostrar5.onclick = Formulario5;
mostrar5.innerHTML = "Mostrar";

function Formulario5() {
	const nomb5 = document.createElement("p");
	nomb5.innerHTML = nom5.value;
	form5.appendChild(nomb5);
}

form5.appendChild(nom5);
form5.appendChild(mostrar5);
