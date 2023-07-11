const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowRight = document.querySelector(".arrow_right");
const currentBanner = document.querySelector(".banner-img");

const currentPath = './assets/images/slideshow/';//chemin des images
let cpt = 0;// compteur à 0

const init = () => { // afficher la première diapositive
  currentBanner.src = currentPath + slides[cpt].image;
  

for(let i =0; i < slides.length;i++){ //chaque elements
    const span = document.createElement('span'); //Crée balise span
    span.classList = "dot"; //class .dot
    dots.appendChild(span); //envoie parents
    }
    
};

init();