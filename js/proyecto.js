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
suma = 0;

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = Number(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = Number(stock);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  restoStock() {
    this.stock = this.stock - 1;
  }

  calculoSubtotal(cantidad) {
    this.precio = this.precio * cantidad;
  }
}


let producto1 = new Producto(1, "cdj", 8000, 1);
let producto2 = new Producto(2, "mixer", 4000, 4);
let producto3 = new Producto(3, "boofer", 5000, 8);



const productos = [];
productos.push(producto1, producto2, producto3);

alert(
  "Lista de Productos (todos): \n\n" +
    JSON.stringify(productos, null, 0) +
    "\n\nPara agregar al carro ingrese ID de producto"
);

const carrito = [];


let pregunto = "si";
while (pregunto.toLowerCase() !== "no") {
  let productosDisponibles = productos.filter((el) => el.stock > 0);
  console.log(productosDisponibles);
  ingresarProductos();

  pregunto = prompt("2. Agregar otro producto ? \n Si \n No");
}


function ingresarProductos() {
  let productosDisponibles = productos.filter((el) => el.stock > 0);

  agregarProducto = prompt(
    "Productos Disponibles: \n\n" +
      JSON.stringify(productosDisponibles, null, 0) +
      "\n\nPara agregar al carro ingrese ID de producto"
  );


  if (agregarProducto == 1 && producto1.stock > 0) {
    carrito.push(producto1);
    producto1.restoStock();

    suma += producto1.precio;
    
  } else if (agregarProducto == 2 && producto2.stock > 0) {
    carrito.push(producto2);
    producto2.restoStock();
    
    suma += producto2.precio;
  } else if (agregarProducto == 3 && producto3.stock > 0) {
    carrito.push(producto3);
    producto3.restoStock();
 
    alert("Producto no existente o fuera de stock");
  }

}

alert(
  "Productos en tu carrito : \n" + JSON.stringify(carrito, null, 0) + "\n"
);

const productosComprados = carrito.map(
  (el) => "Nombre: " + el.nombre + " por $" + el.precio
);
alert("Productos comprados \n" + productosComprados);

if (suma) {
  let totalConIva = suma * 1.21;
  alert(
    "Total sin iva: $" + suma + "\n" + "Total con iva: $" + totalConIva
  );
}
