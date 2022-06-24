const obtener_dolares = async () =>{

    const dolares = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const dolares_establecidos = await dolares.json()

    let filas = []

    //recorrer los usuarios
    dolares_establecidos.forEach(element => {
        
        let fila = 
        `<tr>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
            <td>${element.casa.agencia}</td>
            <td>${element.casa.variacion}</td>
            <td>${element.casa.ventacero}</td>
            <td>${element.casa.decimales}</td>
        </tr>`

        filas.push(fila)

    });

    document.getElementById("tbl_body").innerHTML = filas.join('')
}

//invocamos a la funcion
obtener_dolares()
