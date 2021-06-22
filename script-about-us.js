////////////////////////slider///////////////////////////////////
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const slider = document.querySelector('.slider');

let currSlide = 0;
const maxSlide = slides.length;
const minSlide = 0;

// slider.style.transform = 'scale(0.2) translateX(-1200px)';
// slider.style.overflow = 'visible';


const leftButton = function(e) {
    console.log("LEFT BUTTON");
    currSlide--;
    if (currSlide == -1) currSlide = maxSlide - 1;
    slides.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    })
}

const leftButtonKey = function(e) {
    console.log("LEFT BUTTON");
    currSlide--;
    if (currSlide == -1) currSlide = maxSlide - 1;
    slides.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    })
}

const rightButton = function(e) {
    console.log("Right BUTTON");
    currSlide++;
    if (currSlide == maxSlide) currSlide = 0;
    slides.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    })
}
slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * i}%)`;
})

btnLeft.addEventListener('click', leftButton);
btnRight.addEventListener('click', rightButton);

document.addEventListener('keydown', function(e) {
    console.log(e);

    if (e.key === "ArrowRight") {
        rightButton();
    } else if (e.key === "ArrowLeft") {
        leftButton();
    }
})

//////////////////////////////////////////////////////////////////
