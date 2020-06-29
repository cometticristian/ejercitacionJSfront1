alert('Bienvenido a mi pagina JS');

let avanzar = confirm('Seguro que quiere avanzar?');

if (avanzar) {
    document.querySelector('.elPrimerH2').innerHTML = 'Qué alegría que quieras con tu visita por este maravilloso sitio';
    let nombreUsuario = prompt('Ingrese su nombre');
    document.querySelector('h1').innerHTML = 'Bienvenido ' + nombreUsuario;
    let edadUsuario = prompt('Ingrese su edad');
    if (edadUsuario > 18) {
        let hobbies = prompt('Ingrese sos hobbies');
        hobbies = hobbies.split(',');
        let contador = 0;
        hobbies.forEach((hobbie) => {
            if (hobbie == 'programacion' || hobbie == 'programación' || hobbie == 'Programacion'|| hobbie == 'Programación' || hobbie == 'programar' || hobbie == 'Programar') {
                contador++;
            }
        })
        if (contador==0) {
            alert('Qué lástima que no te guste la programación');
            console.log(document.querySelector('div.background-img'));
            document.querySelector('div.background-img').style.backgroundImage = "url('../images/gatito.jpeg')";
        } else {
            alert("Qué bueno que te guste la programación.");
            document.querySelector('div.background-img').style.backgroundImage = "url('../images/programmer.jpeg')";
        }
        document.querySelector('.hobbies').innerHTML = "<ol>" + "</ol>"
        for (let i=0; i<hobbies.length; i++) {
            if (i<3) {
                document.querySelector('ol').innerHTML += "<li>"+ hobbies[i] +"</li>";
            }
        }
    } else {
        document.querySelector('.container-general').style.display = 'none';
        document.querySelector('#accesoDenegado').style.display = 'block';
    }
} else {
    document.querySelector('.elPrimerH2').innerHTML = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio';
}


