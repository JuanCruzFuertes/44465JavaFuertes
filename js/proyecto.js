// let entrada = prompt(
//     "Ingrese numero de producto que desea rentar\n1. Cdj $8000\n2. mixer $4000\n3. boofer $5000\n\n Escriba finalizar para terminar el pedido."
// );
// let ingresados = "";
// let suma = 0;
// while (entrada.toLowerCase() !== "finalizar") {
//     switch (entrada) {

//         case "1":
//         entrada = "Cdj por 8000";
//         alert("Cdj $8000 Agregado");
//         ingresados += entrada + "\n";
//         precio = 8000;
//         suma += precio;
//         break;
//         case "2":
//         entrada = "mixer  por 4000";
//         alert("mixer $4000 Agregado");
//         ingresados += entrada + "\n";
//         precio = 4000;
//         suma = suma + precio;
//         break;
//         case "3":
//         entrada = "boofer por 5000";
//         alert("boofer $5000 Agregado");
//         ingresados += entrada + "\n";
//         precio = 5000;
//         suma = suma + precio;
//         break;
//         default:
//         alert("Debes indicar un numero del 1 al 3");
//     }

//     entrada = prompt(
//         "Ingrese numero de producto que desea rentar\n1. Cdj $8000\n2. mixer $4000\n3. boofer $5000\n\n Escriba finalizar para terminar el pedido."
//     );
// }
// alert("Su pedido\n" + ingresados + "\n Total :" + suma);

//Agrego Arrays
// suma = 0;

// class Producto {
//   constructor(id, nombre, precio, stock) {
//     this.id = Number(id);
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.stock = Number(stock);
//   }
//   sumaIva() {
//     this.precio = this.precio * 1.21;
//   }
//   restoStock() {
//     this.stock = this.stock - 1;
//   }

//   calculoSubtotal(cantidad) {
//     this.precio = this.precio * cantidad;
//   }
// }

// let producto1 = new Producto(1, "Cdj", 8000, 1);
// let producto2 = new Producto(2, "Mixer", 4000, 4);
// let producto3 = new Producto(3, "boofer", 5000, 8);

// const productos = [];
// productos.push(producto1, producto2, producto3);

// alert(
//   "Lista de Productos (todos): \n\n" +
//     JSON.stringify(productos, null, 0) +
//     "\n\nPara agregar al carrito ingrese numero de producto"
// );

// const carrito = [];

// let pregunto = "si";
// while (pregunto.toLowerCase() !== "no") {
//   let productosDisponibles = productos.filter((el) => el.stock > 0);
//   console.log(productosDisponibles);
//   ingresarProductos();

//   pregunto = prompt("2. Desea gregar otro producto ? \n Si \n No");
// }

// function ingresarProductos() {
//   let productosDisponibles = productos.filter((el) => el.stock > 0);

//   agregarProducto = prompt(
//     "Productos Disponibles: \n\n" +
//       JSON.stringify(productosDisponibles, null, 0) +
//       "\n\nPara agregar al carrito ingrese ID de producto"
//   );

//   if (agregarProducto == 1 && producto1.stock > 0) {
//     carrito.push(producto1);
//     producto1.restoStock();

//     suma += producto1.precio;

//   } else if (agregarProducto == 2 && producto2.stock > 0) {
//     carrito.push(producto2);
//     producto2.restoStock();

//     suma += producto2.precio;
//   } else if (agregarProducto == 3 && producto3.stock > 0) {
//     carrito.push(producto3);
//     producto3.restoStock();

//     alert("Este producto no esxiste o fuera de stock");
//   }

// }

// alert(
//   "Productos en tu carrito : \n" + JSON.stringify(carrito, null, 0) + "\n"
// );

// const productosComprados = carrito.map(
//   (el) => "Nombre: " + el.nombre + " por $" + el.precio
// );
// alert("Productos rentados \n" + productosComprados);

// if (suma) {
//   let totalConIva = suma * 1.21;
//   alert(
//     "Total sin iva: $" + suma + "\n" + "Total con iva: $" + totalConIva
//   );
// }

// let contenedor = document.getElementById("contenedor");
// let productos = [
//     { id: 1, nombre: "Cdj", precio: 8000 },
//     { id: 2, nombre: "Mixer", precio: 4000 },
//     { id: 3, nombre: "Boofer", precio: 5000 },
//     { id: 4, nombre: "Soportes", precio: 2000 },
// ];

// productos.forEach((producto) => {
//     let item = document.createElement("div");
//     item.innerHTML = `
//     <h2>Id: ${producto.id}</h2>
//     <p>Producto: ${producto.nombre}</p>
//     <b>$${producto.precio}</b>
//     `;
//     contenedor.append(item);
// });

// suma = 0;
// cantidadPedida = 0;

// //Class Producto
// class Producto {
//   constructor(id, nombre, precio, stock, imagen, cantidadPedida) {
//     this.id = Number(id);
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.stock = Number(stock);
//     this.imagen = imagen;
//     this.cantidadPedida = Number(cantidadPedida);
//   }
//   sumaIva() {
//     this.precio = this.precio * 1.21;
//   }
//   restoStock(cantidad) {
//     this.stock = this.stock - cantidad;
//   }

//   acumuloCantidad(cantidad) {
//     this.cantidadPedida = this.cantidadPedida + cantidad;
//   }
// }

// let producto1 = new Producto(1, "Cdj", 8000, 8,);
// let producto2 = new Producto(2, "Mixer", 4000, 6,);
// let producto3 = new Producto(3, "Boofer", 5000, 10,);
// let producto4 = new Producto(4, "Soportes", 2000, 16,);

// const productos = [producto1, producto2, producto3, producto4];

// function mostrarProductos() {
//   let html = "";
//   for (let i = 0; i < productos.length; i++) {
//     html =
//       html +
//       `<div class="tarjeta">
//         <div><img class="imagen" src=${productos[i].imagen} /></div>
//         <h2> ${productos[i].nombre}</h2>
//         <p>Precio: ${productos[i].precio}</p>
//         <div><small>Stock: ${productos[i].stock}</small>
//         <small>Id: ${productos[i].id}</small> </div>
//         <button id="btnAgregar">Agregar al Carro</button>
//         </div>`;

//     document.getElementById("contenedor").innerHTML = html;
//   }
// }

// mostrarProductos();
// let boton = document.getElementById("btnAgregar(" + productos[i].id + ")");
// boton.addEventListener("click", respuestaClick);
// function respuestaClick(id) {
//     console.log("Respuesta producto agregado: " + id);
// }

let carro = JSON.parse(localStorage.getItem("productosGuardadosJSON")) || [];

const listadoProductos = document.querySelector("#listado");

let allProductos = []; //Metemos todo aca, para no repetir el pedido en los filtros. directamente filtramos este array
function productosAHTML() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      allProductos = data; // aca asignamos
      allProductos.forEach((producto) => {
        html =
          html +
          `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
        document.getElementById("mis_cards").innerHTML = html;
      });
    });
}
productosAHTML();

function filtroAudio() {
  const audioProductos = allProductos.filter((e) => e.cat === "AUDIO"); //* Estaba filtrando mal!!
  //console.log(mostrarRopa);
  let html = "";
  audioProductos.forEach((producto) => {
    html =
      html +
      `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
    document.getElementById("mis_cards").innerHTML = html;
  });
}

function filtroAccesorios() {
  const accesoriosProductos = allProductos.filter(
    (e) => e.cat === "ACCESORIOS" //Aca tambien lo mismo
  );
  console.log(accesoriosProductos);
  let html = "";
  accesoriosProductos.forEach((producto) => {
    html =
      html +
      `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
    document.getElementById("mis_cards").innerHTML = html;
  });
}

//const carro = [];

function productoAlCarro(id) {
  fetch("data.json")
    .then((res) => res.json())
    .then((productos) => {
      const foundProduct = productos.find((item) => item.id == id);
      carro.push(foundProduct);
      console.log(carro);
      //console.log("found " + foundProduct);

      Swal.fire({
        title: "Producto agregado",
        icon: "success",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Seguir comprando",
        denyButtonText: `Ir al checkout`,
      }).then((result) => {
        if (result.isConfirmed) {
        } else if (result.isDenied) {
          window.location.href = `/Tienda3/checkout.html`;
        }
      });

      guardoCarroStorage();
      if (carro) {
        document.getElementById("hayCarro").innerHTML =
          "<button class='btn btn-danger'>Checkout</button>";
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

let guardoCarroStorage = () => {
  let carroAJson = JSON.stringify(carro);
  localStorage.setItem("productosGuardadosJSON", carroAJson);
};

/*llamadas filtros*/
let llamoTodos = document.getElementById("llamoTodos");
llamoTodos.onclick = () => {
  productosAHTML();
};

let llamoAudio = document.getElementById("llamoAudio");
llamoLimpieza.onclick = () => {
  filtroAudio();
};

let llamoAccesorios = document.getElementById("llamoAccesorios");
llamoAccesorios.onclick = () => {
  filtroAccesorios(); //Estaba mal el ID de este elemento y no reocnocia el evento
};
