
const slides = [
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
	},
	{
		image: 'slide2.jpg',
		tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
	}
]

const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');
const imgBanner = document.querySelector('.banner-img');
const txtBanner = document.querySelector('#banner p');
const dotContainerBanner = document.querySelector('.dots');


let tabActiv = 0;

const updateSlider = () => {

	imgBanner.src = `./assets/images/slideshow/${slides[tabActiv].image}`;
	txtBanner.innerHTML = slides[tabActiv].tagLine;
};

arrowleft.addEventListener(`click`, function () {

	tabActiv--;

	if (tabActiv < 0) {

		tabActiv = slides.length - 1;
	}
	updateSlider();
	updateDots();
});


arrowright.addEventListener(`click`, function () {

	tabActiv++;

	if (tabActiv >= slides.length) {

		tabActiv = 0;
	}
	updateSlider();
	updateDots();
});

const updateDots = () => {
	// On parcourt les enfants de dotContainerBanner
	for (let index = 0; index < dotContainerBanner.children.length; index++) {
		// On récupère l'élément à l'index
		const element = dotContainerBanner.children[index];
		// Si l'élément existe
		if (element) {
			// Si l'index est égal à tabActiv
			if (tabActiv === index) {
				// On ajoute la classe dot_selected
				element.classList.add('dot_selected')
			} else {
				// Sinon on retire la classe dot_selected
				element.classList.remove('dot_selected')
			}
		}
	}
}
console.log('coucou');


window.addEventListener('load', () => {
	for (let index = 0; index < slides.length; index++) {
		const dot = document.createElement('button')
		dot.classList.add('dot')
		dotContainerBanner.appendChild(dot)
	}

	updateDots();
});






