document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav__list');

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('active');


        navList.classList.toggle('active');
    });
});






const images = ["./images/1.png", "./images/2.png", "./images/3.png"];
let index = 0;
const header = document.querySelector(".header");

setInterval(() => {
    index = (index + 1) % images.length;
    header.style.backgroundImage = `url(${images[index]})`;
}, 5000);




const counters = document.querySelectorAll('.section__title');
const speed = 200;

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const runCountUp = () => {
    counters.forEach(counter => {

        if (counter.classList.contains('animated')) return;


        if (isElementInViewport(counter)) {


            const target = +counter.getAttribute('data-val');
            let start = 0;


            const increment = target / speed;

            const animate = () => {
                start += increment;

                if (start < target) {

                    let displayValue = Math.ceil(start);
                    if (target >= 1000) {

                        if (displayValue >= 1000) {
                            displayValue = (displayValue / 1000).toFixed(1) + 'K';
                        }
                    }

                    counter.innerText = displayValue;


                    setTimeout(animate, 1);
                } else {

                    let finalValue = target;
                    if (target === 3000) {
                        finalValue = '3K';
                    } else if (target === 1500) {
                        finalValue = '1.5K';
                    } else if (target === 12) {
                        finalValue = '12+';
                    }
                    counter.innerText = finalValue;
                    counter.classList.add('animated');
                }
            };

            animate();
        }
    });
};


window.addEventListener('scroll', runCountUp);
window.addEventListener('load', runCountUp);

