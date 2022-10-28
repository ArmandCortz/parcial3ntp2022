/** -Cree una pagina HTML que contenga una tabla con 4 imágenes, que al hacer clic cambie su SRC
y muestre otras imágenes. */

const ejercicio10 = document.createElement("h3");
ejercicio10.innerHTML = "Ejercicio 10";
document.body.appendChild(ejercicio10);

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const td = document.createElement("td");

const imgE101 = document.createElement("img");
imgE101.id = "imgE101";
imgE101.src = "img/E10/A/jet1.jpg";
imgE101.style = "width: 200px; height: 100px;";
imgE101.alt = "Imagen jet1";

const imgE102 = document.createElement("img");
imgE102.id = "imgE102";
imgE102.src = "img/E10/A/jet2.jpg";
imgE102.style = "width: 200px; height: 100px;";
imgE102.alt = "Imagen jet2";

const br = document.createElement("br")

const imgE103 = document.createElement("img");
imgE103.id = "imgE103";
imgE103.src = "img/E10/A/jet3.jpg";
imgE103.style = "width: 200px; height: 100px;";
imgE103.alt = "Imagen jet3";

const imgE104 = document.createElement("img");
imgE104.id = "imgE104";
imgE104.src = "img/E10/A/jet4.jpg";
imgE104.style = "width: 200px; height: 100px;";
imgE104.alt = "Imagen jet4";

const cambio = document.createElement("button");
cambio.type = "button";
cambio.id = "cambio";
cambio.style.marginLeft = "15px";
cambio.innerHTML = "Cambiar imagenes";
cambio.onclick = cambiarImg;

function cambiarImg() {
	const imagen1 = document.getElementById("imgE101");
	const imagen2 = document.getElementById("imgE102");
	const imagen3 = document.getElementById("imgE103");
	const imagen4 = document.getElementById("imgE104");
	if (imagen1.getAttribute("src") == "img/E10/A/jet1.jpg") {
		imagen1.src = "img/E10/B/tren1.jpg";
		imagen2.src = "img/E10/B/tren2.jpg";
		imagen3.src = "img/E10/B/tren3.jpg";
		imagen4.src = "img/E10/B/tren4.jpg";
	} else {
		if (imagen1.getAttribute("src") == "img/E10/B/tren1.jpg") {
			imagen1.src = "img/E10/A/jet1.jpg";
			imagen2.src = "img/E10/A/jet2.jpg";
			imagen3.src = "img/E10/A/jet3.jpg";
			imagen4.src = "img/E10/A/jet4.jpg";
		}
	}
    
}

document.body.appendChild(table);
table.appendChild(tbody);
tbody.appendChild(tr);

tr.appendChild(td);
td.append(imgE101);

tr.appendChild(td);
td.append(imgE102);

tbody.appendChild(tr);


tr.appendChild(td);
td.append(imgE103);

tr.appendChild(td);
td.append(imgE104);

tr.appendChild(td);
td.append(cambio);
