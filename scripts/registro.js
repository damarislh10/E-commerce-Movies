//Capturing the data

let nameI = ""; // nameI of input
let correoI = "";
let NoTarjetaI = "";
let fVencimientoI = "";
let cvvI = "";

let peliculas = [];
let vaciar = [];

// capture botton submit
let botonEnv = document.getElementById("botonEnv");
let form = document.getElementById("form");

// Events

// no reset page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
  alert("Compra exitosa!");
  getCarrito();
});

// Get data, id
function getData() {
  nameI = document.getElementById("name").value;
  correoI = document.getElementById("correo").value;
  NoTarjetaI = document.getElementById("NoTarjeta").value;
  fVencimientoI = document.getElementById("fVencimiento").value;
  cvvI = document.getElementById("cvv").value;

  validateData(nameI, correoI, NoTarjetaI, fVencimientoI, cvvI);
}

// Function isNaN validate data of inputs
function validateData(nameI, correoI, NoTarjetaI, fVencimientoI, cvvI) {
  if (isNaN(NoTarjetaI)) {
    alert("En el telefono debe escribir solo numeros");
  } else {
    addData(nameI, correoI, NoTarjetaI, fVencimientoI, cvvI);
    sendToLocalStorage(peliculas); //send localStorage array peliculas
  }
}

// Add data

function addData(nameU, correoU, NoTarjetaU, fVencimientoU, cvvU) {
  peliculas.push({
    nameUser: nameU,
    correoUser: correoU,
    NoTarjetaUser: NoTarjetaU,
    fVencimientoUser: fVencimientoU,
    cvvUser: cvvU,
  });
}

// Exit key in the localStorage
function getLocalStorage() {
  if (localStorage.getItem("PeliculaUser")) {
    peliculas = JSON.parse(localStorage.getItem("PeliculaUser"));
  }
}

// Send LocalStorage
function sendToLocalStorage(peliculas) {
  localStorage.setItem("PeliculaUser", JSON.stringify(peliculas));
}

const itemAdd = () => {
  let DatosCar = JSON.parse(localStorage.getItem("PeliculaCar"));
  let contadorProdu = 0;
  DatosCar.forEach((cant) => {
    contadorProdu++;
    document.getElementById("resultItem").innerHTML = contadorProdu;
  });
};

const getCarrito = () => {
  let items = JSON.parse(localStorage.getItem("PeliculaCar"));
  items = [];
  localStorage.setItem("PeliculaCar", JSON.stringify(items));
  location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
  itemAdd();
});
