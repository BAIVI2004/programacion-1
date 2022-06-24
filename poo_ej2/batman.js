export default class Batman{

   constructor() {
      alert('probando constructor')
   }


     async obtener_peliculas(){

        const peliculas = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const peliculas_definitivas = await peliculas.json()

        for (const element of peliculas_definitivas.Search){

        let columnas=
        <div class="col-lg-3">

           <div class="card">
              <img heigth="300"src="${element.poster}"></img>
                 <h5 class="card-title">${element.title}</h5>
                 <p class="card-text"></p>
                 <a href="#" class="btn btn-primary">comprar</a>
           </div>

        </div>


      columnas.push(columnas)
     }
     document.getElementById("peliculas").innerHTML = columnas.join('')
}
}