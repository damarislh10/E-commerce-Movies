import Movies from "../data/data.js";

//traer local strorage y data

let info = document.getElementById("container-infomovie");
let title = document.querySelector("title");
let preciou = 0;
let namePeli = "";
let imagenPeli = "";

let DatosCar = [];
function detalleMovie() {
  info.innerHTML = "";
  const movieId = JSON.parse(localStorage.getItem("MovieId"));
  const dataObj = movieId !== null ? JSON.parse(movieId) : [];

  Movies.forEach((movie) => {
    const { name, duracion, descripcion, precio, image } = movie;
    let precUpdat = new Intl.NumberFormat("es-ES", { currency: "COP" }).format(
      precio
    );
    if (movie.id == dataObj) {
      title.innerHTML = "Cineflix | " + movie.name;
      info.innerHTML += `
    <div>
      <div class="container-movi m-5>
      <div class="container-fluid movie">
      <div class="container mb-5 mt-5">
        <div class="row contenido ">
          <div class="col ms-3">
            <div class="pt-3">
              <!--padding-->
             
              <h3 id="nameMovie" class=" mt-5">${name} </h3>
              <h6 id="duracion" class="card-title mt-3 mb-3">Duración: ${duracion}</h6>
              <p class="card-text">${descripcion}</p>
              </div>
              <div class="container-car py-3 mt-3">
              <div class="car mb-3">
              <label id="precio" class="fw-bold p-2">$ ${precUpdat}</label>
              <input id="item-car" class="px-1 py-2 prec-card" type="number" placeholder="0">
              <button id="addCarrito" class="btn btn-primary prec-card  py-2">Agregar al carrito</button>
              </div>
              </div>
              </div>
              <div class="col contenedor-image">

              <img id="img" src="${image}" class="card-img imagenInfo " alt="${name}">
             
  
              </div>
              </div>
              </div>
           `;

      namePeli = name;
      preciou = precUpdat;
      imagenPeli = image;
    }
  });
  validarItem();
}

document.addEventListener("DOMContentLoaded", () => {
  detalleMovie();
});

const validarItem = async () => {
  let btnAdd = document.getElementById("addCarrito");
  btnAdd.addEventListener("click", () => {
    let cantidad = document.getElementById("item-car").value;

    if (cantidad == 0) {
      swal(
        "¡No fue posible agregar al Carrito!",
        "La cantidad deber ser mayor a 0",
        "error"
      );
    } else {
      agregarCarrito(cantidad);
      location.reload();
    }
  });
};

const agregarCarrito = (cantidad) => {
  let idMovie = JSON.parse(localStorage.getItem("MovieId"));
  getData(idMovie, cantidad);
  sendToLocalStorage(DatosCar, cantidad);
};
const getData = (idMovie, cantidad) => {
  DatosCar.push({
    id: idMovie,
    cantidadP: cantidad,
    nombreP: namePeli,
    precioP: preciou,
    imagenP: imagenPeli,
  });
};

// Exit key in the localStorage
function getLocalStorage() {
  if (localStorage.getItem("PeliculaCar")) {
    DatosCar = JSON.parse(localStorage.getItem("PeliculaCar"));
    let contadorProdu = 0;
    DatosCar.forEach(() => {
      contadorProdu++;
      document.getElementById("resultItem").innerHTML = contadorProdu;
    });
  }
  return DatosCar;
}

// Send LocalStorage
function sendToLocalStorage(DatosCar) {
  let hash = {};
  let exists;

  DatosCar = DatosCar.filter(function (current) {
    exists = !hash[current.id];
    hash[current.id] = true;

    return exists;
  });

  if (exists == false) {
    alert("ya existe el producto en el carrito!");
  } else {
    alert("Agregado al carrito!");
  }

  localStorage.setItem("PeliculaCar", JSON.stringify(DatosCar));
  location.reload();
}

getLocalStorage();
