
// do {
//     edad = prompt('Ingrese su edad')


//     if (edad >= 18) {
//         alert('Sos mayor de edad. Podes ingresar')
//     } else (edad < 18 || repetir == 'si')
// }

// var alfajores = [
//     { nombre: "Alfajor de Maicena", precio: 1000 },
//     { nombre: "Alfajor Marplatense", precio: 3600 },
//     { nombre: "Alfalemon", precio: 3600 },
//     { nombre: "Alfanevado", precio: 3600 },
//     { nombre: "Alfacafe", precio: 3600 },
//     { nombre: "Alfajor Santafesino", precio: 3000 },
//     { nombre: "Alfajores de Nuez", precio: 3600 },
//     { nombre: "Alfajor Rafaelinos", precio: 3000 },
//     { nombre: "Alfacoco", precio: 3600 }
// ];

// var nombresAlfajores = alfajores.map(function (alfajor) {
//     return alfajor.nombre;
// });

// var mensaje = '¿Cuál de estos alfajores quieres comprar?\n\n' + nombresAlfajores.join(', ');
// var eleccion = prompt(mensaje);
// console.log('Has elegido:', eleccion);

// var continuarComprando = true;

// do {
//     var nombresAlfajores = alfajores.map(function (alfajor) {
//         return alfajor.nombre;
//     });

//     var mensaje = '¿Cuál de estos alfajores quieres comprar?\n\n' + nombresAlfajores.join(', ');
//     var eleccion = prompt(mensaje);
//     console.log('Has elegido:', eleccion);

//     var respuesta = prompt('¿Deseas hacer otra compra? (Sí/No)');
//     if (respuesta !== 'Sí' && respuesta !== 'sí' && respuesta !== 'SI') {
//         continuarComprando = false;
//     }
// } while (continuarComprando);

var alfajores = [
    { nombre: "Alfajor de Maicena", precio: 1000 },
    { nombre: "Alfajor Marplatense", precio: 3600 },
    { nombre: "Alfalemon", precio: 3600 },
    { nombre: "Alfanevado", precio: 3600 },
    { nombre: "Alfacafe", precio: 3600 },
    { nombre: "Alfajor Santafesino", precio: 3000 },
    { nombre: "Alfajores de Nuez", precio: 3600 },
    { nombre: "Alfajor Rafaelinos", precio: 3000 },
    { nombre: "Alfacoco", precio: 3600 }
];

var total = 0;
var deseaComprarMas = true;

// Mayor de 18?
var edad = prompt("Ingrese su edad:");
if (parseInt(edad) < 18) {
    alert("Lo sentimos, debes ser mayor de 18 años para comprar alfajores.");
} else {
    while (deseaComprarMas) {
        var opciones = "";


        // Mostrar el array para que haga su eleccion
        for (var i = 0; i < alfajores.length; i++) {
            opciones += (i + 1) + ". " + alfajores[i].nombre + "\n";
        }

        // Seleccion del usuario 
        var eleccion = prompt("Seleccione el número del alfajor que desea comprar:\n\n" + opciones);

        // Validar la elección
        eleccion = parseInt(eleccion);
        if (!isNaN(eleccion) && eleccion >= 1 && eleccion <= alfajores.length) {
            var alfajorSeleccionado = alfajores[eleccion - 1];
            total += alfajorSeleccionado.precio;

            // Mostrar el nombre del alfajor seleccionado y la suma de los precios
            alert("Ha seleccionado: " + alfajorSeleccionado.nombre + "\nTotal acumulado: " + total);
        } else {
            alert("La opción seleccionada es inválida.");
        }

        // Preguntar si quiere comprar más
        deseaComprarMas = confirm("¿Desea comprar otro alfajor?");
    }

    // Mostrar el total final
    alert("El total a pagar es: " + total);
}