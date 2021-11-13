//Funciones relacionadas

//funcion que suma el precio y el IVA
function suma (numero1,numero2) {
    return numero1 + numero2;
}
//funcion que resta el precio con IVA y el descuento
function resta (numero1, numero2) {
    return numero1 - numero2;
}
//funcion que calcula el IVA EN $$
function iva (precio) {
    return precio * 0.21;
}
//funcion que calcula el descuento en $$
function descuento (precio,porcentajeDesc) {
    return (precio * porcentajeDesc) / 100;
}

let precio = parseFloat(prompt("Ingrese el precio del producto"));
let porcentajeDesc = parseInt(prompt("Ingrese el porcentaje de descuento"));

let precioFinal = resta(suma(precio,iva(precio)),descuento(precio,porcentajeDesc));
alert("El precio final es de $" + precioFinal);


