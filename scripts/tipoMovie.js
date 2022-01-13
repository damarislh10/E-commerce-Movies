import Movies from "../data/data.js";

let containermovies = document.getElementById("listMovies");
let contenedorTitle = document.querySelector("#contenedor-title");

const listMoviesI = (listMovies) => {
  containermovies.innerHTML = "";
  const item = document.createElement("div");

  item.innerHTML += ``;
  const categoryId = JSON.parse(localStorage.getItem("categoryId"));
  if (categoryId == "Aventura") {
    let aventura = listMovies.filter(
      (catAven) => catAven.categoria == "Aventura"
    );

    aventura.forEach((itemM) => {
      const { id, name, image, precio } = itemM;
      document.querySelector("title").innerHTML = "Pelicula Aventura";
      let precUpdat = new Intl.NumberFormat("es-ES", {
        currency: "COP",
      }).format(precio);
      contenedorTitle.innerHTML = `
      <h1 class="text-center mt-5 fw-bold title">Peliculas de Aventura</h1>`;

      item.innerHTML += `
            <div class="d-inline-flex container-info" >
             <div class="card bg-secondary m-3 " style= "width: 18rem;">
             <img class="card-img-top imageMovie" src="${image}" alt="Card image cap">
             <div class="card-body">
                 <h5 class="card-title text-center">${name}</h5>
                 <div class="precio bg-dark my-2 w-100">
                 <h4>Precio: $ ${precUpdat}</h4>
                 </div>
                 <button id='${id}' id="verMovie" class="btn btn-primary my-2 butonVer"><a href="infoMovie.html">Descripciòn</a><button>
                 </div>
             </div>
             </div>
         `;
    });
    containermovies.appendChild(item);
    eventDetalle(aventura);
  } else if (categoryId == "Accion") {
    let accion = listMovies.filter((catAcci) => catAcci.categoria == "Accion");
    accion.forEach((itemAcc) => {
      const { id, name, image, precio } = itemAcc;

      document.querySelector("title").innerHTML = "Pelicula Acciòn";
      let precUpdat = new Intl.NumberFormat("es-ES", {
        currency: "COP",
      }).format(precio);
      contenedorTitle.innerHTML = `
     <h1 class="text-center mt-5 fw-bold title">Peliculas de Acciòn</h1>`;

      item.innerHTML += `
                <div class="d-inline-flex container-info" >
             <div class="card bg-secondary m-3 " style= "width: 18rem;">
             <img class="card-img-top imageMovie" src="${image}" alt="Card image cap">
             <div class="card-body">
                 <h5 class="card-title text-center">${name}</h5>
                 <div class="precio bg-dark my-2 w-100">
                 <h4>Precio: $ ${precUpdat}</h4>
                 </div>
                 <button id='${id}' class="btn btn-primary my-2 butonVer ${Movies}"><a href="infoMovie.html">Descripciòn</a><button>
                 </div>
             </div>
             </div>
         `;
    });
    containermovies.appendChild(item);
    eventDetalle(accion);
  } else if (categoryId == "Terror") {
    let terror = listMovies.filter(
      (catTerror) => catTerror.categoria == "Terror"
    );
    terror.forEach((itemTerror) => {
      const { id, name, image, precio } = itemTerror;

      document.querySelector("title").innerHTML = "Pelicula Terror";
      let precUpdat = new Intl.NumberFormat("es-ES", {
        currency: "COP",
      }).format(precio);

      contenedorTitle.innerHTML = `
     <h1 class="text-center mt-5 fw-bold title">Peliculas de Terror</h1>`;

      item.innerHTML += `
      <div class="d-inline-flex container-info" >
   <div class="card bg-secondary m-3 " style= "width: 18rem;">
   <img class="card-img-top imageMovie" src="${image}" alt="Card image cap">
   <div class="card-body">
       <h5 class="card-title text-center">${name}</h5>
       <div class="precio bg-dark my-2 w-100">
           <h4>Precio: $ ${precUpdat}</h4>
       </div>
       <button id='${id}' class="btn btn-primary my-2 butonVer ${Movies}"><a href="infoMovie.html">Descripciòn</a><button>
       </div>
   </div>
   </div>
`;
    });
    containermovies.appendChild(item);
    eventDetalle(terror);
  }
};

const eventDetalle = (arrayMovies) => {
  arrayMovies.forEach((movies) => {
    let botonDetalle = document.getElementById(movies.id);

    botonDetalle.addEventListener("click", () => {
      localStorage.setItem("MovieId", JSON.stringify(movies.id));
    });
  });
};

const itemAdd = () => {
  let DatosCar = JSON.parse(localStorage.getItem("PeliculaCar"));
  let contadorProdu = 0;
  DatosCar.forEach((cant) => {
    contadorProdu++;
    document.getElementById("resultItem").innerHTML = contadorProdu;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  listMoviesI(Movies);
  itemAdd();
});
