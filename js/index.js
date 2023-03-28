function toggleButton(show){
    const nav = document.querySelector('.nav-container')
    if(show) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }
}