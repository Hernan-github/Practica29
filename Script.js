function Comprobar() {
    const numeroInput = document.querySelector("input[type='number']");
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            window.alert(` Par ya que ${numero} dividido entre 2 tiene un resto de 0, por lo que es par.`);
        } else {
            window.alert(`Impar ya que ${numero} dividido entre 2 tiene un resto de 1, por lo que es impar.`);
        }
    }
}

function crearBurbuja() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Posición horizontal aleatoria
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Duración aleatoria
    bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";

    document.getElementById("bubbles").appendChild(bubble);

    // Eliminar burbuja después de animación
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(crearBurbuja, 200);