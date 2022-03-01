const images = ['01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg'];

let carouselContent = '';

for( let i = 0; i < images.length; i++){
    carouselContent += `
        <div class="col-10 carousel-element">
            <img src="img/${images[i]}" alt="random picture">
        </div>`
};

const carouselWrapper = document.querySelector('div.my-first-row');
carouselWrapper.innerHTML += carouselContent;

