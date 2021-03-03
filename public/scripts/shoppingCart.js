function showShoppingCart() {
    let show = document.getElementById('shoppingCart-container')
    show.style.display = 'block';
    show.style.transition = '10s ease-in';

    let hideWpp = document.getElementById('hideWpp')
    hideWpp.style.display = 'none'
}

function hideShoppingCart() {
    document.getElementById('shoppingCart-container').style.display = 'none';

    let hideWpp = document.getElementById('hideWpp')
    hideWpp.style.display = ''
}