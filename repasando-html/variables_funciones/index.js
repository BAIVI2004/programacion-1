
//funcionclasica
function mostrar_mensaje() {
    //popup
    alert("probando mi funcion")
}


function mostrar_en_consola(){
    //asignamos una cadena de string en una constante
    const nombre_apellido = "braian alejandro vidal"

    /*forma 1 - sin template string*/
console.log("nombre_apellido:"+nombre_apellido)

//forma 2
console.log(`
nombre y apellido: ${nombre_apellido}
dni 45798849
direccion: juan 23 1309

`)
}

//condicionales
function validar(){
    const calificacion = prompt(`ingrese su calificacion`)

    if (calificacion >=7) {
        alert(`estas aprobado`)
    }else{
        alert(`nos veremos en diciembre!`)
    }
}