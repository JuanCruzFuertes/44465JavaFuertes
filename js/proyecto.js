

let carro = JSON.parse(localStorage.getItem("productosGuardadosJSON")) || [];

const listadoProductos = document.querySelector("#listado");

let allProductos = []; 
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
  const audioProductos = allProductos.filter((e) => e.cat === "AUDIO"); 
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
    (e) => e.cat === "ACCESORIOS" 
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
    filtroAccesorios();
  };