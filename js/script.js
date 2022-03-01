const images = ['01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg'];

let carouselContent = '';

for( let i = 0; i < images.length; i++){
    carouselContent += `
        <div class="col-10 carousel-element">
            <img src="img/${images[i]}" alt="random picture">
        </div>`;
};

const carouselWrapper = document.querySelector('div.my-first-row');
carouselWrapper.innerHTML += carouselContent;

const carouselElement = document.getElementsByClassName('carousel-element');
carouselElement[0].classList.add('active');

const imagesCarouselList = document.getElementsByClassName('my-img-list');
imagesCarouselList[0].classList.add('my-padding-carousel');
imagesCarouselList[0].classList.remove('my-brightness');


const bottomButton = document.querySelector('button.my-bottom-btn');

let elementActive = 0;

bottomButton.addEventListener('click' , function() {
    imagesCarouselList[elementActive].classList.add('my-brightness');
    imagesCarouselList[elementActive].classList.remove('my-padding-carousel');
    carouselElement[elementActive].classList.remove('active');
    elementActive++;
    imagesCarouselList[elementActive].classList.remove('my-brightness');
    imagesCarouselList[elementActive].classList.add('my-padding-carousel');
    carouselElement[elementActive].classList.add('active');
});

const topButton = document.querySelector('button.my-top-btn');
topButton.addEventListener('click' , function() {
    imagesCarouselList[elementActive].classList.add('my-brightness');
    imagesCarouselList[elementActive].classList.remove('my-padding-carousel');
    carouselElement[elementActive].classList.remove('active');
    elementActive--;
    imagesCarouselList[elementActive].classList.remove('my-brightness');
    carouselElement[elementActive].classList.add('active');
    imagesCarouselList[elementActive].classList.add('my-padding-carousel');
});