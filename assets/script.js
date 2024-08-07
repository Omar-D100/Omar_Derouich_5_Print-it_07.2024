
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


// Sélecteurs des flèches droite et gauche
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');

// Sélecteurs de l'image et du texte de la bannière
const imgBanner = document.querySelector('.banner-img');
const txtBanner = document.querySelector('#banner p');

// Sélecteur du conteneur des "pastilles" (dot) de navigation de la bannière
const dotContainerBanner = document.querySelector('.dots');

// Déclaration de la variable "tabActiv"
let tabActiv = 0;


// Variable qui permet de changer les éléments HTML du carrousel (image et tagline)
const updateSlider = () => {

	//on met à jour la source (src) d'une image (imgBanner) pour qu'elle affiche une nouvelle image.
	//Le chemin de cette image est construit  en fonction du nom de l'image stocké dans un objet au sein du tableau 'slides' à  'tabActiv'.
	imgBanner.src = `./assets/images/slideshow/${slides[tabActiv].image}`;
	
	//on change le texte affiché dans l'élément HTML txtBanner,
	// pour refléter le texte contenu dans tagLine de l'objet actuellement sélectionné dans slides.
	txtBanner.innerHTML = slides[tabActiv].tagLine;
};

// Ecouteur evènement au clique sur la flèche gauche
arrowleft.addEventListener(`click`, function () {

	// lorsque l'on clique l'index est décrémenter (--)
	tabActiv--;

	// si tabActiv est inférieur à 0
	if (tabActiv < 0) {

		// il est défini sur le dernier index de slides
		tabActiv = slides.length - 1;
		// .length définit (ou renvoie) le nombre d'éléments dans le tableau "slides"
		// -1 = l'index revient de 1 en arrière

	}
	updateSlider();
	updateDots();
});


// Ecouteur évènement au clique sur la flèche droite
arrowright.addEventListener(`click`, function () {

	// Lorsque l'on clique, l'index est incrémenté (++)
	tabActiv++;

	// Si l'index est supérieur ou égal au nombre total d'éléments de slides
	if (tabActiv >= slides.length) {

		// l'index reviens à 0
		tabActiv = 0;
	}
	updateSlider();
	updateDots();
});



// Ecouteur évènement au chargement copmlet de la page
window.addEventListener('load', () => {


	//on déclare la variable index à 0,
    //Vérifie si index est inférieur au nombre d'elements dans le tableau.Si c'est le cas, exécute le corps de la boucle.
    // avec index ++ a la fin de chaque itération de la boucle, la valeur de index est augmentée de 1.
	for (let index = 0; index < slides.length; index++) {

		//on crée un button dans le html
		const dot = document.createElement('button')

		// on crée la classe 'dot' dans le html
		dot.classList.add('dot')

		//on ajouté la classe 'dot' qu'on a crée avant a dotContainerBanner
		dotContainerBanner.appendChild(dot)
	}

	updateDots();
});



// on crée la variable 'updateDots' 
const updateDots = () => {

	//on déclare la variable index à 0,
    //Vérifie si index est inférieur au nombre d'enfants de dotContainerBanner.Si c'est le cas, exécute le corps de la boucle.
    // avec index ++ a la fin de chaque itération de la boucle, la valeur de index est augmentée de 1.
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
};








