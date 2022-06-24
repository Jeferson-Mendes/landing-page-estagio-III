const buttonToTop = document.querySelector('.button-to-top');

window.addEventListener('scroll', () => {
    const posicaoy = window.pageYOffset;
    if(posicaoy >= 900) {
        console.log('PEEEEEEIIIII')
        buttonToTop.style.display = "block";
    } else {
        buttonToTop.style.display = "none";
    }

})

buttonToTop.onclick = function() {
    window.scrollTo(0,0);
}