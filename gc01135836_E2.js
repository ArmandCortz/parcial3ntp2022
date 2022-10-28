/** Crear una HTML que contenga dos botones, que al hacer clic modifiquen el valor SCR de una
etiqueta de imagen. Cada botón deberá presentar una imagen diferente. */

const ejercicio2 = document.createElement("h3");
ejercicio2.innerHTML="Ejercicio 2";
document.body.appendChild(ejercicio2);

const card = document.createElement("card");
document.body.appendChild(card);

const img = document.createElement("img");
img.id="myImage";
img.src = "./img/E2/auto1.jpeg";
img.style = "width: 200px; height: 100px;";
img.alt="Imagen ejercicio 2"
card.appendChild(img);

const cardbody = document.createElement("card-body");
card.appendChild(cardbody);


let btn1 = document.createElement("button");
btn1.type = "button";
btn1.id="img1"
btn1.style.marginLeft = "15px";
btn1.innerHTML = "Imagen 1";
btn1.onclick = mostrarImg1;

let btn2 = document.createElement("button");
btn2.type = "button";
btn2.id = "img1";
btn2.style.marginLeft = "15px";
btn2.innerHTML = "Imagen 2";
btn2.onclick = mostrarImg2;

function mostrarImg1() {
    var image = document.getElementById("myImage");
		image.src = "./img/E2/auto1.jpeg";
}

function mostrarImg2() {
	var image = document.getElementById("myImage");
	image.src = "./img/E2/auto2.jpeg";
}





cardbody.appendChild(btn1);
cardbody.appendChild(btn2);
