let add1 = document.querySelector('.itemDisplay1');
let add2 = document.querySelector('.itemDisplay2');
let add3 = document.querySelector('.itemDisplay3');
let add4 = document.querySelector('.itemDisplay4');
let add5 = document.querySelector('.itemDisplay5');
let add6 = document.querySelector('.itemDisplay6');
let add7 = document.querySelector('.itemDisplay7');

let remove1 = document.querySelector('.remove1');
let remove2 = document.querySelector('.remove2');
let remove3 = document.querySelector('.remove3');
let remove4 = document.querySelector('.remove4');
let remove5 = document.querySelector('.remove5');
let remove6 = document.querySelector('.remove6');
let remove7 = document.querySelector('.remove7');

add1.style.display = 'none';
add2.style.display = 'none';
add3.style.display = 'none';
add4.style.display = 'none';
add5.style.display = 'none';
add6.style.display = 'none';
add7.style.display = 'none';

let msgWpp = document.getElementById('msgWpp');
let msgWppOriginal = 'https://api.whatsapp.com/send?phone=5491156621323&text=Listado%20de%20compra:%0A';

function addSC1() {
    add1.style.display = '';
    msgWpp.href = msgWppOriginal + 'Agua%20Ideal%20Botellón%20sin%20grifo%20-%20Cantidad:%20';
}
function addSC2() {
    add2.style.display = '';
}
function addSC3() {
    add3.style.display = '';
}
function addSC4() {
    add4.style.display = '';
}
function addSC5() {
    add5.style.display = '';
}
function addSC6() {
    add6.style.display = '';
}
function addSC7() {
    add7.style.display = '';
}

function removeSC1() {
    add1.style.display = 'none';
}
function removeSC2() {
    add2.style.display = 'none';
}
function removeSC3() {
    add3.style.display = 'none';
}
function removeSC4() {
    add4.style.display = 'none';
}
function removeSC5() {
    add5.style.display = 'none';
}
function removeSC6() {
    add6.style.display = 'none';
}
function removeSC7() {
    add7.style.display = 'none';
}