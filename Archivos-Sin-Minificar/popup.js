var btnAbrir = document.getElementById("abrir-web"),
    btnAbrir12 = document.getElementById("abrir-web12"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btn_cerrar = document.getElementById("btn-cerrar");

btnAbrir.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
})

btnAbrir12.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
})

btn_cerrar.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.remove('active');
})

var btnAbrir2 = document.getElementById("abrir-app"),
    btnAbrir22 = document.getElementById("abrir-app22"),
    overlay2 = document.getElementById("overlay2"),
    popup2 = document.getElementById("popup2"),
    btn_cerrar2 = document.getElementById("btn-cerrar2");

btnAbrir2.addEventListener('click', function () {
    overlay2.classList.add('active');
    popup2.classList.add('active');
})

btnAbrir22.addEventListener('click', function () {
    overlay2.classList.add('active');
    popup2.classList.add('active');
})

btn_cerrar2.addEventListener('click', function () {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
})