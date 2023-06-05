document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled')
    }
})

let text = document.getElementById('parallax-text');
let image1 = document.getElementById('image-1');
let image2 = document.getElementById('image-2');
let image3 = document.getElementById('image-3');
let image4 = document.getElementById('image-4');
let image5 = document.getElementById('image-5');
let image6 = document.getElementById('image-6');
let image7 = document.getElementById('image-7');
let box10 = document.getElementById('box10');
let box11 = document.getElementById('box11');
let box12 = document.getElementById('box12');
let box13 = document.getElementById('box13');
let box14 = document.getElementById('box14');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.left = value * 1.5 + 'px';
    image1.style.bottom = value * 0.7 + 'px';
    image2.style.bottom = value * 0.15 + 'px';
    image3.style.bottom = value * 1.2 + 'px';
    image4.style.bottom = value * 0.7 + 'px';
    image5.style.bottom = value * -0.15 + 'px';
    image6.style.bottom = value * .25 + 'px';
    image7.style.bottom = value * 0.35 + 'px';
    box10.style.bottom = value * 0.05 + 'px';
    box11.style.bottom = value * 0.1 + 'px';
    box12.style.bottom = value * 0.15 + 'px';
    box13.style.bottom = value * 0.18 + 'px';
    box14.style.bottom = value * 0.25 + 'px';
});

ScrollReveal({ 
    reset: false,
    distance: '0px',
    duration: 1000,
    delay: 400,
});

ScrollReveal().reveal('.main-title', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.button_lg', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('#button2', { delay: 200, origin: 'bottom', distance: '60px'});
ScrollReveal().reveal('#cta', { delay: 200, origin: 'right', distance: '25px'});
ScrollReveal().reveal('#button4', { delay: 200, origin: 'top', distance: '30px'});