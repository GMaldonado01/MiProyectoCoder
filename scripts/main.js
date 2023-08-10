var alfajores = [
  {
    nombre: "Docena de Alfajor Marplatense",
    descripcion:
      "Tapas de chocolate rellenas de mucho dulce de leche, cubiertas de chocolate semiamargo y coronadas con cascaritas de naranja que le dan su toque de frescura",
    precio: 3600,
    imagen: "../multimedia/alfajores/marplatenses.jpeg",
  },
  {
    nombre: "Docena de Alfajor de Maicena",
    descripcion:
      "Tapas de maicena que se desarman en la boca, rellenas de dulce de leche",
    precio: 1000,
    imagen: "../multimedia/alfajores/maicena.jpeg",
  },
  {
    nombre: "Docena de Alfalemon",
    descripcion:
      "Tapas de vainilla rellenas de una crema de limón que combina el ácido y lo dulce, bañados con chocolate blanco",
    precio: 3600,
    imagen: "../multimedia/alfajores/alfalemon.jpeg",
  },
  {
    nombre: "Docena de Alfanevado",
    descripcion:
      "Tapas de chocolate rellenas de dulce de leche y con un disco de merengue seco que produce una explosión de texturas al comerlo, cubiertas de chocolate semi amargo",
    precio: 3600,
    imagen: "../multimedia/alfajores/alfanevado.jpeg",
  },
  {
    nombre: "Docena de Alfacafe",
    descripcion:
      "Tapas de chocolate rellenas con dulce de leche y un centro de crema de café con la intensidad justa para lograr un sabor único, cubierto de chocolate semiamargo",
    precio: 3600,
    imagen: "../multimedia/alfajores/alfacafe.jpg",
  },
  {
    nombre: "Docena de Alfajor Santafesino",
    descripcion:
      "Tres tapas de masa crocante intercaladas de mucho dulce de leche y cubiertas por un suave glasé",
    precio: 3000,
    imagen: "../multimedia/alfajores/santafesino.jpeg",
  },
  {
    nombre: "Docena de Alfajores de Nuez",
    descripcion:
      "Tapas de manteca y nueces tostadas, rellenas de dulce de leche",
    precio: 3600,
    imagen: "../multimedia/alfajores/nuez.jpeg",
  },
  {
    nombre: "Docena de Alfajor Rafaelinos",
    descripcion:
      "Suaves tapas de masa de manteca, rellenas de dulce de leche repostero y espolvoreadas con azúcar impalpable",
    precio: 3000,
    imagen: "../multimedia/alfajores/rafaelinos.jpg",
  },
  {
    nombre: "Docena de Alfacoco",
    descripcion:
      "Tapas de coco rallado azucarado, rellenas de dulce de leche y con una fina capa de chocolate amargo en la parte superior",
    precio: 3600,
    imagen: "../multimedia/alfajores/alfacoco.jpeg",
  },
];

function obtenerCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado !== null) {
    const carritoRecuperado = JSON.parse(carritoGuardado);

    return carritoRecuperado;
  } else {
    return [];
  }
}

const dibujarCarrito = () => {
  let cartContent = document.getElementById("cartContent");
  cartContent.innerHTML = null;
  var tituloCarrito = document.createElement("h1");
  tituloCarrito.innerText = "Tu compra";
  cartContent.appendChild(tituloCarrito);

  obtenerCarrito().forEach((element) => {
    console.log("element: ", element);
    var cartItem = document.createElement("div");
    cartItem.className = "cartItem"; // Agrega la clase CSS "cartItem" al elemento

    var itemImage = document.createElement("img");
    itemImage.className = "cartItemImage"; // Agrega la clase CSS "cartItemImage" al elemento
    itemImage.src = element.imagen;
    cartItem.appendChild(itemImage);

    var itemName = document.createElement("h3");
    itemName.innerText = element.nombre;
    cartItem.appendChild(itemName);

    var itemPrice = document.createElement("h5");
    itemPrice.innerText = element.cantidad + " x $" + element.precio;
    cartItem.appendChild(itemPrice);

    cartContent.appendChild(cartItem);
  });
};

function sumarCarrito(compra) {
  let carrito = obtenerCarrito();
  const indexCompraExistente = carrito.findIndex(
    (item) => item.nombre === compra.nombre
  );
  console.log("indexCompraExistente: ", indexCompraExistente);
  if (indexCompraExistente >= 0) {
    carrito[indexCompraExistente].cantidad++;
  } else {
    compra.cantidad = 1;
    carrito.push(compra);
  }

  alert("usted ha agregado una docena");
  console.log({ carrito });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  dibujarCarrito();
}

dibujarCarrito();
const contenedorProductos = document.getElementById("contenedorProductos");
console.log(contenedorProductos);
alfajores.forEach((element) => {
  var tarjetita = document.createElement("div");
  console.log(tarjetita);
  tarjetita.className = "tarjetita";

  var imagen = document.createElement("img");
  imagen.className = "tarjetitaImagen";
  imagen.src = element.imagen;
  tarjetita.appendChild(imagen);

  var titulo = document.createElement("h1");
  titulo.innerText = element.nombre;
  tarjetita.appendChild(titulo);

  var precio = document.createElement("h3");
  precio.innerText = "$" + element.precio;
  tarjetita.appendChild(precio);

  var descripcion = document.createElement("h4");
  descripcion.className = "tarjetitaDescripcion";
  descripcion.innerText = element.descripcion;
  tarjetita.appendChild(descripcion);

  var boton = document.createElement("button");
  boton.className = "tarjetitaBoton";
  boton.onclick = () => sumarCarrito(element);
  tarjetita.appendChild(boton);
  var icono = document.createElement("i");
  icono.className = "fa-solid fa-cart-shopping";
  boton.appendChild(icono);

  contenedorProductos.appendChild(tarjetita);
});

let compras = document.querySelectorAll(".tarjetitaBoton");
console.log(compras);

let finalizar = document.getElementById("finalizarCompra");
finalizar.onclick = () => {
  const carritoGuardado = localStorage.getItem("carrito");
  console.log("carritoGuardado: ", carritoGuardado);
  if (carritoGuardado !== null) {
    const carritoRecuperado = JSON.parse(carritoGuardado);
    console.log("carritoRecuperado: ", carritoRecuperado);
    const cantidadTotal = carritoRecuperado.reduce((acc, cur) => {
      return acc + cur.cantidad;
    }, 0);
    alert("usted compro " + cantidadTotal + " docenas");

    localStorage.removeItem("carrito");
    dibujarCarrito();
  } else {
    alert("Usted no realizo ninguna compra");
  }
};
let cancelar = document.getElementById("cancelarCompra");
cancelar.onclick = () => {
  localStorage.removeItem("carrito");
  dibujarCarrito();
};

const sweetAlert = document.querySelector(".botonHola");

sweetAlert.onclick = () => {
  Swal.fire({
    title: "Gracias por comunicarte!",
    text: "Nuestro telefono es 0101010101001",
    icon: "info",
    confirmButtonText: "Aceptar",
  });
};
fetch(
  "http://api.weatherapi.com/v1/current.json?key=1fc8adaf39934f7693b202028233107&q=Rafaela&aqi=no"
)
  .then((response) => response.json())
  .then((json) => {
    const setearClima = () => {
      let clima = document.getElementById("localidadHumedad");
      clima.innerHTML =
        json.location.name +
        "<br/>" +
        "Humedad " +
        json.current.humidity +
        "%" +
        "<br/>" +
        "Recomendamos que a más de 60% guardar en la heladera";
    };

    setTimeout(setearClima, 2000);
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
