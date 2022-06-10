import Batman from"./batman.js";

function ejecutar(){
    const batman = new Batman()
    batman.obtener_peliculas()
}

document.getElementById("btn").addEventListener("click",ejecutar)