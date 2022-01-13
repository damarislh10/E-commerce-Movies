let typemovie = "";
let btnAventura = document.querySelector("#aventura");
let btnAccion = document.querySelector("#accion");
let btnTerror = document.querySelector("#terror");

const category = () => {
  btnAventura.addEventListener("click", () => {
    typemovie = "Aventura";
    sendTypeStorage(typemovie);
  });
  btnAccion.addEventListener("click", () => {
    typemovie = "Accion";
    sendTypeStorage(typemovie);
  });
  btnTerror.addEventListener("click", () => {
    typemovie = "Terror";
    sendTypeStorage(typemovie);
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
  category();
  itemAdd();
});

function sendTypeStorage(typemovie) {
  localStorage.setItem("categoryId", JSON.stringify(typemovie));
}
