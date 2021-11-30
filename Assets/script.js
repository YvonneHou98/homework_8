
if ($(".text-slider").length == 1) {
    var typed_strings = 
    $(".text-slider-items").text();
    
    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
        });
    }
   



var slideIndex = 1;

showSlides(slideIndex);
          
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
          
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
          
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
     }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideactive", "");
    }
    console.log(slides);
    console.log(slideIndex-1);
    console.log(slides[slideIndex-1]);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slideactive";
}