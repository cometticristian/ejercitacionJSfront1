window.addEventListener('load', () => {

//-------------- PRIMERA TANDA DE EJERCICIOS --------------\\

/* alert('Bienvenidos a mi sitio');
let avanza = confirm('Esta seguro que quiere avanzar?');
let elPrimerH2 = document.querySelector('.elPrimerH2');
let titulo = document.querySelector('h1');

if (avanza) {
    elPrimerH2.innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio.";
    let nombreUsuario = prompt("Ingrese su nombre: ");
    titulo.innerHTML = "Bienvenido " + nombreUsuario;
    let edad = prompt("Ingrese su edad: ");
    if (edad > 18) {
        let hobbies = prompt("Ingrese sus hobbies separados por coma: ");
        hobbies = hobbies.split(',');
        let contador = 0;
        hobbies.forEach(jovi => {
            if (jovi == "programar" || jovi == "Programar" || jovi == "programacion" || jovi == "Programacion" || jovi == "programación" || jovi == "Programación") {
                contador++;
            }
        });
        let imagenFondo = document.querySelector('.background-img')
        if (contador > 0) {
            alert("Que bueno que te guste programar");
            imagenFondo.style.backgroundImage = "url(../images/programmer.jpeg)";
        } else {
            alert("Que lastima que no te guste programar");
            imagenFondo.style.backgroundImage = "url(../images/gatito.jpeg)";
        }
        let listaHobbies = document.querySelector('.hobbies');
        listaHobbies.innerHTML = "<ol></ol>";
        let orderList = document.querySelector('ol');
        for (let i = 0; i < 3; i++) {
            orderList.innerHTML += "<li>" + hobbies[i] + "</li>";
        }
    } else {
        document.querySelector('.container-general').style.display = 'none';
        document.querySelector('#accesoDenegado').style.display = 'block';
    }
} else {
    elPrimerH2.innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio";
} */



//-------------- SEGUNDA TANDA DE EJERCICIOS --------------\\

/* let colorPreferido = prompt("Ingrese su color favorito: ");
console.log(colorPreferido);

let nombre = prompt('Ingrese su nombre: ');
let titulo = document.querySelector('h1');
titulo.innerHTML = "Bienvenido " + "<span>" + nombre + "</span>";

let spanes = document.querySelectorAll('span');

spanes[1].classList.add('color-preferido');

let hobbies = prompt("Ingrese sus hobbies separados por coma: ");
hobbies = hobbies.split(',');
let contador = 0;
hobbies.forEach(jovi => {
    if (jovi == "programar" || jovi == "Programar" || jovi == "programacion" || jovi == "Programacion" || jovi == "programación" || jovi == "Programación") {
        contador++;
    }
});
let imagenFondo = document.querySelector('.background-img')
if (contador > 0) {
    alert("Que bueno que te guste programar");
    imagenFondo.style.backgroundImage = "url(../images/programmer.jpeg)";
} else {
    alert("Que lastima que no te guste programar");
    imagenFondo.style.backgroundImage = "url(../images/gatito.jpeg)";
}
let listaHobbies = document.querySelector('.hobbies');
listaHobbies.innerHTML = "<ol></ol>";
let orderList = document.querySelector('ol');
for (let i = 0; i < hobbies.length; i++) {
    let contador = 0;
    if (hobbies[i].length > 5 && hobbies[i].length < 10 && contador < 3) {
        let sitio = prompt("Sitio del Hobbie " + hobbies[i] + ": ");
        orderList.innerHTML += "<li><a href='"+ sitio +"'>" + hobbies[i] + "</a></li>";
        contador++;
    }
} 
let olHobbies = document.querySelector('ol');

olHobbies.style.textAlign = "center";

let links = document.querySelectorAll("li a");
console.log(links);

links.forEach((li) =>{
    li.style.textDecoration = 'none';
    li.style.color = '' + colorPreferido;
});

let imagenAvatar = document.querySelector('.avatar');
imagenAvatar.src = 'images/cris.jpg'; */


//-------------- TERCERA TANDA DE EJERCICIOS --------------\\

let nombre = prompt("Nombre de la peli: ");
let director = prompt('director');
let duracion = prompt('duracion');
let actor = prompt('actor');

let pelicula = {
    nombre: nombre,
    director: director,
    duracion: duracion,
    actor: actor
}

document.querySelector('#pelicula').style.display = 'block';

liNombre = document.querySelector('#nombre');
liDirector = document.querySelector('#director');
liDuracion = document.querySelector('#duracion');
liActor = document.querySelector('#actor');

liNombre.innerHTML = "<a href='https://www.imdb.com/title/tt2911666/'>" + pelicula.nombre + "</a>";
liDirector.innerHTML = pelicula.director;
liDuracion.innerHTML = pelicula.duracion;
liActor.innerHTML = pelicula.actor;

});
