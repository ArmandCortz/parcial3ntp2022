/** Crear una función que recibirá dos parámetros (su nombre y apellido), la función deberá
concatenar ambos parámetros y devolver una sola cadena, que deberá imprimir en un elemento
HTML. */

const ejercicio3 = document.createElement("h3");
ejercicio3.innerHTML = "Ejercicio 3";
document.body.appendChild(ejercicio3);

const form = document.createElement("form");
form.action = " ";
form.method = "post";
form.id = "form";
document.body.appendChild(form);

const nom = document.createElement("input");
nom.style.marginLeft = "15px";
nom.type = "text";
nom.name = "nombre";
nom.id = "nombre";
nom.placeholder="Nombre";

const apell = document.createElement("input");
apell.style.marginLeft = "15px";
apell.type = "text";
apell.id = "apellido";
apell.placeholder="Apellido"


const mostrar = document.createElement("button");
mostrar.type="button"
mostrar.style.marginLeft = "15px";
mostrar.onclick = Formulario;
mostrar.innerHTML = "Mostrar";

function Formulario() {
    const nomb = document.createElement("p");
    nomb.innerHTML=nom.value + " " +apell.value;
    form.appendChild(nomb)

}

form.appendChild(nom);
form.appendChild(apell);
form.appendChild(mostrar);
