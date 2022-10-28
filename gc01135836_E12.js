/** Cree una función que reciba un numero como parámetro y con una estructura switch imprima
en el HTML un mensaje indicando el numero que seleccionó el usuario */

const ejercicio12 = document.createElement("h3");
ejercicio12.innerHTML = "Ejercicio 12";
document.body.appendChild(ejercicio12);
const form12 = document.createElement("form");
form12.method = "post";
form12.id = "form";
form12.action = " ";
document.body.appendChild(form12);

const num12 = document.createElement("input");
num12.style.marginLeft = "15px";
num12.type = "number";
num12.id = "numero";
num12.placeholder = "Escriba un numero";

const mostrar12 = document.createElement("button");
mostrar12.type = "button";
mostrar12.style.marginLeft = "15px";
mostrar12.onclick = Formulario12;
mostrar12.innerHTML = "Mostrar";

function Formulario12() {
	let number = parseInt(num12.value);

	const num = document.createElement("p");
	console.log(number);
	switch (number) {
		case 1:
			num.innerHTML = number;
			form12.appendChild(num);
			break;
		case 2:
			num.innerHTML = number;
			form12.appendChild(num);

			break;
		case 3:
			num.innerHTML = number;
			form12.appendChild(num);

			break;

		default:
			num.innerHTML = "El caso es mayor de lo esperado o es un caso no valido";
			form12.appendChild(num);
			break;
	}
}
form12.appendChild(num12);
form12.appendChild(mostrar12);
