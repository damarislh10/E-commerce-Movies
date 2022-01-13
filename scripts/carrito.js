let btnVaciar = document.getElementById("btn-vaciar");
let precio = 0;

let datosCar = JSON.parse(localStorage.getItem("PeliculaCar"));
datosCar = datosCar !== null ? datosCar : [];

function AddCarrito() {
  if (localStorage.getItem("PeliculaCar")) {
    let DatosCar = JSON.parse(localStorage.getItem("PeliculaCar"));
    micarrito(DatosCar);
  }else{
    JSON.parse(DatosCar) = [];
  }
}

let total = 0.0;

const calcularPrecio = (cant, precio) => {
  let subtotal = (cant * precio)*1000;
  subtotal=new Intl.NumberFormat("es-ES", { currency: "COP" }).format(subtotal)
  total += Number(subtotal)*1000;

  document.getElementById("total").innerHTML = `<span>Total:</span> $ ${total}`;
  document.querySelector('span').style.fontWeight='bold'
  return subtotal;
};
let items = document.getElementById("itemCar");

const micarrito = (DatosCar) => {
  let contadorProdu = 0;
  DatosCar.forEach((myProduct) => {
    const { id, cantidadP, nombreP, precioP, imagenP } = myProduct;
    contadorProdu++;
    document.getElementById("resultItem").innerHTML = contadorProdu;
    items.innerHTML += `

    <center>
    <div class="card m-5" style="max-width: 1200px;">
      <div class="row g-0">
        <div class="col-md-3">
          <h5 class="card-title link-dark mt-3 encabezados nombre">${nombreP}</h5>
          
          <img id="imagenMov" src="${imagenP}" class="img-fluid rounded-start mt-2 ms-5" alt="...">
          <button id="${id}" class="btn btn-danger mb-4 ms-5 eliminar">Eliminar</button>

        </div>
        <div class="col-md-3">
          <h5 class="card-title link-dark mt-3 encabezados">Cantidad</h5>
          <label class="link-dark fs-3 cant" >${cantidadP}</label>
        </div>
        <div class="col-md-3">
          <h5 class="card-title link-dark mt-3 encabezados">Precio</h5>
          <label class="link-dark fs-3 cant" >$ ${precioP}</label>
        </div>            
        <div class="col-md-3">
          <h5 class="card-title link-dark mt-3 encabezados">Subtotal</h5>
          <label id="subtotal" class="link-dark fs-3 cant" >$ ${calcularPrecio(
            cantidadP,
            precioP
          )}</label> 
        </div>
      </div>
    </div>
  </center>
        `;
  });
  eliminarMovie();
};

document.addEventListener("DOMContentLoaded", () => {
  AddCarrito();
});

const eliminarMovie = () => {
  datosCar.forEach(function (element, index, datosCar) {
    let btnDelete = document.getElementById(element.id);

    btnDelete.addEventListener("click", () => {
      if (index !== undefined) {
        datosCar.splice(index, 1);
        location.reload()
      }
      localStorage.setItem("PeliculaCar", JSON.stringify(datosCar));
    });
  });
};

btnVaciar.addEventListener("click", () => {
  items = [];
  localStorage.setItem("PeliculaCar", JSON.stringify(items));

  document.getElementById("total").innerHTML = `<span>Total:</span> $ 0`;
  document.querySelector('span').style.fontWeight='bold'
  
  document.getElementById("itemCar").innerHTML = `
    <h2 class="text-center mt-5">No hay productos agregados</h2>
    `

})

