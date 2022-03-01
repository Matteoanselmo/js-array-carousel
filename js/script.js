const images = ['01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg'];

let carouselContent = '';
let carouselImgList = '';

for( let i = 0; i < images.length; i++){
    carouselContent += `
        <div class="col-10 carousel-element">
            <img src="img/${images[i]}" alt="random picture">
        </div>`;
    carouselImgList += `
        <div class="col-12 my-img-list my-brightness">
            <img src="img/${images[i]}" alt="">
        </div>`;
};

const carouselWrapper = document.querySelector('div.my-first-row');
carouselWrapper.innerHTML += carouselContent;

const carouselImgWrapper = document.querySelector('div.my-second-row');
carouselImgWrapper.innerHTML += carouselImgList;
//creo una costante prendendola dalla classe del DOM e aggiungo altre classi alla costante
const carouselElement = document.getElementsByClassName('carousel-element');
carouselElement[0].classList.add('active');
//creo una costante prendendola dalla classe del DOM e aggiungo altre classi alla costante
const imagesCarouselList = document.getElementsByClassName('my-img-list');
imagesCarouselList[0].classList.add('my-padding-carousel');
imagesCarouselList[0].classList.remove('my-brightness');


const bottomButton = document.querySelector('button.my-bottom-btn');
// creo un indice che servira per selezionare l'immagine da portare in display block
let elementActive = 0;
bottomButton.addEventListener('click' , function() {
    console.log(elementActive);
    console.log(images.length);
    imagesCarouselList[elementActive].classList.add('my-brightness');
    imagesCarouselList[elementActive].classList.remove('my-padding-carousel');
    carouselElement[elementActive].classList.remove('active');
    elementActive++;
    //verifico che la variabile elementActive non sia superiore alla lunghezza dell'array
    // se è superiore le do valore 0 cosi torno alla prima immagine con indice 0
    if(elementActive >= images.length){
        elementActive = 0;
    };
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
    //verifico che la variabile elementActive non sia inferiore alla lunghezza dell'array
    // se è inferiore le do valore dell'array -1 cosi vado alla ultima immagine  
    if(elementActive < 0){
        elementActive = images.length -1;
    };
    imagesCarouselList[elementActive].classList.remove('my-brightness');
    carouselElement[elementActive].classList.add('active');
    imagesCarouselList[elementActive].classList.add('my-padding-carousel');
});