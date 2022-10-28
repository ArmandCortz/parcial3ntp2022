/** Defina un array llamado “misDatos” este arreglo deberá tener 5 elementos, sus dos nombres, sus
dos apellidos y su carnet. Luego utilice un bucle for para imprimir los datos en el html de la siguiente
manera:
Rafael
Antonio
Diaz
Palacios
DP1000 */

const ejercicio8 = document.createElement("h3");
ejercicio8.innerHTML = "Ejercicio 8";
document.body.appendChild(ejercicio8);

const misDatos = ["Leonel", "Armando", "Garcia", "Cortez", "GC01135836"];

for (let index = 0; index < misDatos.length; index++) {
    const Dats = misDatos[index];
    const p8= document.createElement("p");
    p8.innerHTML=Dats;
    document.body.appendChild(p8);
}