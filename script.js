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