/** Investigue como hacer una barra de progreso con JavaScript y desarróllelo    */

const ejercicio11 = document.createElement("h3");
ejercicio11.innerHTML = "Ejercicio 11";
document.body.appendChild(ejercicio11);

function animar() {
    document.getElementById("barra").classList.toggle("final");
}
