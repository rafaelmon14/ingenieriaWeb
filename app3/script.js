var nombrescompletos = nombre + apellido;
var subtotal = 300;
var descuento=0;
const iva = 0.12;
var nombre="Rafael";
var apellido = "Montenegro";
//presentar datos en el navegador
//document.write(nombre);
//document.write(apellido);
//document.write(nombrescompletos);

var datos = document.getElementById('contenidos');
var datos1 = document.getElementById('contenidos3');
var datos2 = document.getElementById('contenidos2')
datos.innerHTML=`
<h2>Nombre del cliente: ${nombre} ${apellido}</h2>
`;
if(subtotal>=200){
datos.innerHTML += "Su monto es mayor a 200 dólares: ";
descuento = 0.10;
} else{
datos.innerHTML += "Su monto es menor a 199 dólares: ";
descuento = 0.05;
}
for (let i =0; i<10; i++) {
datos2.innerHTML += i + " Poner atención en clases<br>";
}

function calculoIva(){
var calIva = subtotal * iva;
datos.innerHTML += "Su valor de iva a pagar es: " + calIva;
return calIva
}

function imprimir(){
var resIva=calculoIva(subtotal);
var total= subtotal+resIva;
datos.innerHTML += "<br>Su valor de iva a pagar es2: " + resIva;
datos.innerHTML += "<br>Su valor total de la factura es: " + total;
}
imprimir();

var productos = ['Arroz','Azucar','Atun','Harina','Sal'];
datos1.innerHTML +="<h3>Detalle de productos</h3>";
for (let x = 0; x < productos.length; x++){
datos1.innerHTML += "<ul><li>"+productos[x]+"</li></ul>";
}

productos.forEach((producto)=>{
document.write(producto+"<br>");
});


console.log(nombrescompletos);