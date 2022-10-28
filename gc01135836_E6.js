/** escriba en una variable la cadena de texto siguiente: “Mi nombre es: Mi apellido es: y mi carnet
es:”. Luego utilice algún método de manejo de cadenas para completar los datos que faltan a la
cadena e imprímalos en el HTML */
const ejercicio6 = document.createElement("h3");
ejercicio6.innerHTML = "Ejercicio 6";
document.body.appendChild(ejercicio6);

const E6 = ["Mi nombre es: ","Mi apellido es: ","Mi carnet es: "];
const E6R = [E6[0] + "Leonel ", E6[1] + "Garcia ", E6[2] + "GC01135836"];

const nombre6 = document.createElement("p");
nombre6.innerHTML = E6R[0];
const apellido6 = document.createElement("p");
apellido6.innerHTML = E6R[1];
const carnet6 = document.createElement("p");
carnet6.innerHTML = E6R[2];


document.body.appendChild(nombre6);
document.body.appendChild(apellido6);
document.body.appendChild(carnet6);