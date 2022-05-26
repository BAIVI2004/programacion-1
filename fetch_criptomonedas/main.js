const obtener_usuarios = async () =>{

    const usuarios = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const usuarios_definidos = await usuarios.json()

    let filas = []

    //recorrer los usuarios
    usuarios_definidos.forEach( element => {

        let fila = 
        `<tr>
            <td>
                <img src="${element.image} class ="img-fluid" style="width:4rem" >
            </td>
            <td>
                ${element.name}
            </td>
            <td>
                ${element.symbol} 
            </td>
            <td>
               ${element.current_price} 
            </td>
            <td>
                ${element.total_volume}
            </td>
        </tr>`
        
        filas.push(fila)


    });
        
        



    document.getElementById("tbl_body").innerHTML = filas.join('')
    }


//invocamos a la funcion
obtener_usuarios()