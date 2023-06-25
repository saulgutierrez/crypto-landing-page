/* Funcion para activar el menu pegajoso (sticky menu) al hacer scroll */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
});

/* Funcion para activar el menu responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var navbar = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}