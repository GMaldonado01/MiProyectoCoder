let edad
let repetir
do {
    edad = prompt('Ingrese su edad')

    if (edad >= 18) {
        alert('Sos mayor de edad. Podes ingresar')
        let kilosIngresados = prompt('Cuantos kilos de torta quieres comprar?')

        function precio(kilos) {
            return 1000 * kilos
        }

        alert('el valor de tu torta es $ ' + precio(kilosIngresados))
        repetir = prompt('Quiere hacer otra compra?')



    } else {
        alert('Sos menor de edad. No podes ingresar')


    }
} while (edad < 18 || repetir == 'si')




