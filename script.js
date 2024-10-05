let lupa = document.getElementById('pesquisa');
let imputi = document.getElementById('pexquisa');

function inpt() {
    imputi.style.top = '-53px';
}
lupa.addEventListener ('click', inpt);
function fechaInpt() {
    imputi.style.top = '-150px';
}
lupa.addEventListener ('dblclick',fechaInpt);




let menuCat = document.getElementById('menuCat');
let voltarMenu = document.getElementById('voltar');
let abreCategoria = document.getElementById('abreCategorias');
function abreMenu() {
    menuCat.style.left = '1px'; 
}
function fechaMenu() {
    menuCat.style.left = '-410px'; 
}

voltarMenu.addEventListener ('click', fechaMenu);
abreCategoria.addEventListener ('click', abreMenu);