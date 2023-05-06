function resize() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    }
}

btnMenu.addEventListener('click', () => {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        btnMenu.innerText = 'menu'
    } else {
        menu.style.display = 'block'
        btnMenu.innerText = 'close'
    }
})

$(document).ready(function() {
    const produto = document.getElementsByClassName('card-produto')
    for (i = 0; i < produto.length; i++) {
        produto[i].innerHTML += '<button><span class="material-symbols-outlined">shopping_cart</span>Adicionar</button>'
    }
})