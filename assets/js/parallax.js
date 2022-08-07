let parallax_container = document.querySelector('.parallax_container');
let parallax_image = document.querySelector('.parallax_image');
let secondary_image = document.querySelector('.secondary_image');
let parallax_title = document.querySelector('.parallax_title2');
let parallax_subtitle = document.querySelector('.parallax_subtitle');

function ScrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax_image.style.transform = 'translateY(' + scrollTop * -0.2 + 'px)';
    parallax_title.style.transform = 'translateY(' + scrollTop * 1 + 'px)';
    parallax_subtitle.style.transform = 'translateY(' + scrollTop * 1 + 'px)';
    secondary_image.style.transform = 'translateY(' + scrollTop * -0.2 + 'px)';
}

window.addEventListener('scroll', ScrollParallax);