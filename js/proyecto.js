let entrada = prompt(
    "Ingrese numero de producto que desea rentar\n1. Cdj $8000\n2. mixer $4000\n3. boofer $5000\n\n Escriba finalizar para terminar el pedido."
);
let ingresados = "";
let suma = 0;
while (entrada.toLowerCase() !== "finalizar") { 
    switch (entrada) {
    
        case "1":
        entrada = "Cdj por 8000";
        alert("Cdj $8000 Agregado");
        ingresados += entrada + "\n";
        precio = 8000;
        suma += precio;
        break;
        case "2":
        entrada = "mixer  por 4000";
        alert("mixer $4000 Agregado");
        ingresados += entrada + "\n";
        precio = 4000;
        suma = suma + precio;
        break;
        case "3":
        entrada = "boofer por 5000";
        alert("boofer $5000 Agregado");
        ingresados += entrada + "\n";
        precio = 5000;
        suma = suma + precio;
        break;
        default:
        alert("Debes indicar un numero del 1 al 3");
    }


    entrada = prompt(
        "Ingrese numero de producto que desea rentar\n1. Cdj $8000\n2. mixer $4000\n3. boofer $5000\n\n Escriba finalizar para terminar el pedido."
    );
}
alert("Su pedido\n" + ingresados + "\n Total :" + suma);