let showHideDelivery = document.getElementById('showHideDelivery');
let showHidePickUp = document.getElementById('showHidePickUp');
let equal = document.getElementById('equal');
let buyForm1 = document.getElementById('buyForm1Hidden');
let buyForm2 = document.getElementById('buyForm2Hidden');

function defaultDisplay() {

    showHideDelivery.style.display = 'none';
    showHidePickUp.style.display = 'none';
    equal.style.display = 'none';
    buyForm2.style.display = 'none';
}

function showDelivery() {

    let deliveryRadioButton = document.getElementById('delivery-radioButton');

    if(deliveryRadioButton.checked) {
        showHideDelivery.style.display = '';
        equal.style.display = '';
        showHidePickUp.style.display = 'none';
    }
}

function showPickUp() {

    let pickUpRadioButton = document.getElementById('pickUp-radioButton');

    if(pickUpRadioButton.checked) {
        showHidePickUp.style.display = '';
        equal.style.display = 'none';
        showHideDelivery.style.display = 'none';
    }
}

function equalDeliveryBilling() {
    let inpNotDisp = document.getElementById('inpDoNotDisp');
    let notDisplay1 = document.getElementById('doNotDisp1');
    let notDisplay2 = document.getElementById('doNotDisp2');
    let notDisplay3 = document.getElementById('doNotDisp3');
    let notDisplay4 = document.getElementById('doNotDisp4');
    let notDisplay5 = document.getElementById('doNotDisp5');
    let notDisplay6 = document.getElementById('doNotDisp6');

    if(inpNotDisp.checked) {
        notDisplay1.style.display = 'none';
        notDisplay2.style.display = 'none';
        notDisplay3.style.display = 'none';
        notDisplay4.style.display = 'none';
        notDisplay5.style.display = 'none';
        notDisplay6.style.display = 'none';
    } else {
        notDisplay1.style.display = '';
        notDisplay2.style.display = '';
        notDisplay3.style.display = '';
        notDisplay4.style.display = '';
        notDisplay5.style.display = '';
        notDisplay6.style.display = '';
    }
}

function displayBuyForm2() {
    buyForm2.style.display = '';
    buyForm1.style.display = 'none';
}

function displayBuyForm1() {
    buyForm1.style.display = '';
    buyForm2.style.display = 'none';
}

// accordion payment types

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instance = M.Collapsible.init(elems, {
        accordion: true
    });
});