
//  image de slidershow      
let images = [
    "public/images/slider1.jpg","public/images/slider2.jpg","public/images/slider3.jpg"
] 
//container de slidershow
let slides = document.getElementById("wrapper");
let slideIndex = 0; 
//mettre l'image dans le container
slides.innerHTML = "<img src='"+images[slideIndex]+"'>";
let len= images.length;


showSlides()
function showSlides() {

    if (slideIndex == len) {
        slideIndex = 0}    
    
    slides.innerHTML = "<img src='"+images[slideIndex]+"'>";
    slideIndex++;
    setTimeout(showSlides, 2000); 
}

