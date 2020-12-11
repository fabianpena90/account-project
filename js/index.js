const navbar = document.querySelector('#navbar');
let scroll = false

window.onscroll = function() {
  if(window.pageYOffset > 100) {
    navbar.classList.remove('top')
    if(!scroll) {
      navbar.style.transform = 'translateY(-70px)'
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0)'
      scroll = true
    }, 200)
  } else {
    navbar.classList.add('top')
    scroll = false
  }
}