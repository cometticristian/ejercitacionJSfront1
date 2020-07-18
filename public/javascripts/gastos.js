window.addEventListener('load', () => {

    let entry = confirm('quiere iniciar el proceso?');

    if (entry) {
        let integrantes = [];
        let cant = prompt('Ingrese cantidad de integrantes de la familia: ');
        let noEsNumero = isNaN(cant);
        while (cant < 3 || noEsNumero) {
            cant = prompt("El dato ingresado debe ser un numero mayor a 3: ");
            noEsNumero = isNaN(cant);
        }

        let agregarNombre = () => {
            let nombre = prompt('Ingrese nombre del integrante:');
            while (nombre.length == 0) {
                nombre = prompt('El nombre debe estar completo: ')
            }
            return nombre;
        }

        let agregarGasto = () => {
            let gasto = prompt('Ingrese el gasto: ');
            let noNumero = isNaN(gasto);
            console.log(gasto);
            while (noNumero || gasto == '') {
                gasto = prompt('Debe ingresar un NUMERO mayor a 0: ');
                noNumero = isNaN(gasto);
            }
            return gasto;
        }

        for (let i = 0; i < cant; i++) {
            integrantes.push({
                nombre: agregarNombre(),
                gasto: agregarGasto()
            })
        }
        console.log(integrantes);
    } else {
        alert('gracias por haber venido!');
        window.location.href = 'https://www.netflix.com/browse';
    }

    

})