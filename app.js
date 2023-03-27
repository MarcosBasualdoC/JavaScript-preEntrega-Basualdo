//VARIABLES

let nombre;
let producto;
let precio;
let total = 0;
let respuesta;
let mensaje;
let confirmacion;


//MENSAJE DE BIENVENIDA

setTimeout(function () {

    alert("Hola! Bienvenido a la VERDULERÍA ONLINE!");

    nombre = prompt("Antes que nada. ¿Como se llama usted?");

    alert("¿Como le va " + nombre + "?");

    alert("Nos gusta el trato directo con los clientes.");

    alert("Ahora " + nombre + ", nos toca elegir que vamos a comprar.");

 //SELECCION DE PRODUCTOS Y PRECIOS

    do {
        producto = prompt("Ingresá un producto de VERDULERIA para agregar al carrito:");


        do {
            precio = parseFloat(prompt("Ingresá el precio de " + producto + ":"));
            if (precio <= 0) {
                alert("El precio ingresado es inválido. Ingresa un precio mayor que cero.");
            }
        } while (precio <= 0);


        total += precio;


        respuesta = prompt("¡Excelente! ¿Queres agregar otro producto al carrito? (s/n)");


    } while (respuesta == "s");


 //SALIDA DEL RESULTADO

    mensaje = "Los productos en tu carrito tinen un valor total de:\n$" + total;

    alert(mensaje);


//CONFIRMACION DE LA COMPRA

    confirmacion = confirm("¿Estás seguro de que desea comprar estos productos?\nTotal: $" + total);

    if (confirmacion) {
        alert("Tu compra ha sido un éxito! Ya esta en camino a su casa!");
        alert("Gracias " + nombre + " por comprar en VERDULERÍA ONLINE! Hasta pronto!")
    } else {
        alert("Tu compra ha sido cancelada.");
    }
}, 500);
