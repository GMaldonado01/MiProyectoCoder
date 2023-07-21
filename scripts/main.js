var alfajores = [
  { nombre: "Docena de Alfajor Marplatense", descripcion: "", precio: 3600, imagen: "../multimedia/alfajores/marplatense.jpg" },
  { nombre: "Docena de Alfajor de Maicena", descripcion: "", precio: 1000, imagen: },
  { nombre: "Docena de Alfalemon", descripcion: "", precio: 3600, imagen: },
  { nombre: "Docena de Alfanevado", descripcion: "", precio: 3600, imagen: },
  { nombre: "Docena de Alfacafe", descripcion: "", precio: 3600, imagen: },
  { nombre: "Docena de Alfajor Santafesino", descripcion: "", precio: 3000, imagen: },
  { nombre: "Docena de Alfajores de Nuez", descripcion: "", precio: 3600, imagen: },
  { nombre: "Docena de Alfajor Rafaelinos", descripcion: "", precio: 3000, imagen: },
  { nombre: "Docena de Alfacoco", descripcion: "", precio: 3600, imagen: },
];

const contenedorProductos = document.getElementById("contenedorProductos");
console.log(contenedorProductos);
alfajores.forEach((element) => {
  var tarjetita = document.createElement("div");
  console.log(tarjetita);
  tarjetita.className = "tarjetita";

  var imagen = document.createElement("img");
  imagen.src = "../multimedia/alfa.jpeg";
  imagen.className = "tarjetitaImagen";
  tarjetita.appendChild(imagen);

  var titulo = document.createElement("h1");
  titulo.innerText = element.nombre;
  tarjetita.appendChild(titulo);

  var precio = document.createElement("h3");
  precio.innerText = "$" + element.precio;
  tarjetita.appendChild(precio);

  var descripcion = document.createElement("h4");
  descripcion.innerText = element.descripcion;
  tarjetita.appendChild(descripcion);

  var boton = document.createElement("button");
  boton.className = "tarjetitaBoton";
  tarjetita.appendChild(boton);

  contenedorProductos.appendChild(tarjetita);
});

// var total = 0;
// var deseaComprarMas = true;

// // Mayor de 18?
// var edad = prompt("Ingrese su edad:");

// var opciones = "";
// // Mostrar el array para que haga su eleccion
// for (var i = 0; i < alfajores.length; i++) {
//     opciones += (i + 1) + ". " + alfajores[i].nombre + "\n";
// }

// if (isNaN(parseInt(edad)) || parseInt(edad) < 18) {
//     alert("Lo sentimos, debes ser mayor de 18 años para comprar alfajores.");
// } else {
//     while (deseaComprarMas) {
//         // Seleccion del usuario
//         var eleccion = prompt("Seleccione el número del alfajor que desea comprar:\n\n" + opciones);

//         // Validar la elección
//         eleccion = parseInt(eleccion);
//         if (!isNaN(eleccion) && eleccion >= 1 && eleccion <= alfajores.length) {
//             var alfajorSeleccionado = alfajores[eleccion - 1];
//             total += alfajorSeleccionado.precio;

//             // Mostrar el nombre del alfajor seleccionado y la suma de los precios
//             alert("Ha seleccionado: " + alfajorSeleccionado.nombre + "\nTotal acumulado: " + total);
//         } else {
//             alert("La opción seleccionada es inválida.");
//         }

//         // Preguntar si quiere comprar más
//         deseaComprarMas = confirm("¿Desea comprar otro alfajor?");
//     }

//     // Mostrar el total final
//     alert("El total a pagar es: " + total);
// }
