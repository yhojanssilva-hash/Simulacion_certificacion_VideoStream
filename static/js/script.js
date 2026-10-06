// ==========================================
// 1. SUMAR / RESTAR "ME GUSTA"
// ==========================================
const btnLike = document.querySelector('#like');
const spanLikes = document.querySelector('#likes');

let cantidadLikes = 4800;
let dioLike = false;

if (btnLike && spanLikes) {
    btnLike.addEventListener('click', function () {
        if (!dioLike) {
            cantidadLikes++;
            spanLikes.textContent = (cantidadLikes / 1000).toFixed(1) + ' K';
            btnLike.style.color = '#065fd4';
            dioLike = true;
        } else {
            cantidadLikes--;
            spanLikes.textContent = (cantidadLikes / 1000).toFixed(1) + ' K';
            btnLike.style.color = '';
            dioLike = false;
        }
    });
}


// ==========================================
// 2. BOTÓN SUSCRIBIRSE E INCREMENTAR SUSCRIPTORES
// ==========================================
const btnSuscribir = document.querySelector('#suscribir');
const pSuscriptores = document.querySelector('.suscriptores');

if (btnSuscribir && pSuscriptores) {
    btnSuscribir.addEventListener('click', function () {
        if (btnSuscribir.textContent.trim() === 'Suscribirse') {
            btnSuscribir.textContent = 'Suscrito';
            btnSuscribir.style.backgroundColor = '#606060';
            pSuscriptores.textContent = '1,2 M de suscriptores (+1)';
            pSuscriptores.style.color = '#2ed573';
        } else {
            btnSuscribir.textContent = 'Suscribirse';
            btnSuscribir.style.backgroundColor = '#cc0000';
            pSuscriptores.textContent = '1,2 M de suscriptores';
            pSuscriptores.style.color = '';
        }
    });
}


// ==========================================
// 3. ELIMINAR ELEMENTOS INICIALES DE LA COLA
// ==========================================
const botonesEliminarIniciales = document.querySelectorAll('.eliminar');

for (let i = 0; i < botonesEliminarIniciales.length; i++) {
    let boton = botonesEliminarIniciales[i];
    boton.addEventListener('click', function () {
        let tarjeta = boton.parentElement;
        if (tarjeta) {
            tarjeta.remove();
        }
    });
}


// ==========================================
// 4. AÑADIR NUEVOS VIDEOS A LA COLA (BOTONES '+')
// ==========================================
const botonesAgregar = document.querySelectorAll('.agregar');
const listaCola = document.querySelector('.cola .lista');

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', function () {

        // Obtenemos la tarjeta contenedora (.tarjeta2) del recomendado
        let tarjetaRecomendada = botonesAgregar[i].parentElement;

        // Extraemos título y ruta de imagen del video recomendado
        let titulo = tarjetaRecomendada.querySelector('h4').textContent;
        let rutaImagen = tarjetaRecomendada.querySelector('img').src;

        alert('Video añadido a la cola: ' + titulo);

        // 1. Contenedor principal (.tarjeta2)
        let nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.className = 'tarjeta2';

        // 2. Contenedor de la miniatura (.mini) e imagen
        let divMini = document.createElement('div');
        divMini.className = 'mini';

        let img = document.createElement('img');
        img.src = rutaImagen;
        img.alt = titulo;

        let spanTiempo = document.createElement('span');
        spanTiempo.textContent = '4:00';

        divMini.appendChild(img);
        divMini.appendChild(spanTiempo);

        // 3. Sección de información (.info)
        let divInfo = document.createElement('div');
        divInfo.className = 'info';

        let h4 = document.createElement('h4');
        h4.textContent = titulo;

        let p = document.createElement('p');
        p.textContent = 'VideoStream';

        divInfo.appendChild(h4);
        divInfo.appendChild(p);

        // 4. Botón de eliminar (×)
        let btnEliminar = document.createElement('button');
        btnEliminar.className = 'eliminar';
        btnEliminar.textContent = '×';

        btnEliminar.addEventListener('click', function () {
            nuevaTarjeta.remove();
        });

        // 5. Armamos la tarjeta completa en orden
        nuevaTarjeta.appendChild(divMini);
        nuevaTarjeta.appendChild(divInfo);
        nuevaTarjeta.appendChild(btnEliminar);

        if (listaCola) {
            listaCola.appendChild(nuevaTarjeta);
        }
    });
}
// ==========================================
// 6. BOTÓN "LIMPIAR COLA"
// ==========================================
const btnLimpiar = document.querySelector('.titulo button');

if (btnLimpiar && listaCola) {
    btnLimpiar.addEventListener('click', function () {
        listaCola.innerHTML = '<p style="padding: 10px; color: #888;">La cola está vacía.</p>';
    });
}


// ==========================================
// 7. EFECTO HOVER EN LAS MINIATURAS
// ==========================================
const tarjetasVideo = document.querySelectorAll('.tarjeta');

for (let i = 0; i < tarjetasVideo.length; i++) {
    tarjetasVideo[i].addEventListener('mouseover', function () {
        tarjetasVideo[i].style.opacity = '0.8';
        tarjetasVideo[i].style.cursor = 'pointer';
    });

    tarjetasVideo[i].addEventListener('mouseout', function () {
        tarjetasVideo[i].style.opacity = '1';
    });
}