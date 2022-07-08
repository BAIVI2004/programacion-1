function almacenar_indice(index)
{
    localStorage.setItem("index",index)
}

function editar(index)
{
let lista_productos= JSON.parse(localStorage.getItem("Productos"))

document.getElementById("inp_descripcion").value=lista_productos[index].descripcion
document.getElementById("inp_precio").value=lista_productos[index].precio
document.getElementById("slt_cat").value=lista_productos[index].categoria



    localStorage.setItem("indice",index)



    //apago el boton
    document.getElementById("btn_guardar").style.display="none"
    //encendemos el boton actualizar
    document.getElementById("btn_actualizar").style.display="block"
}