var toggle = document.getElementById("myToggle");
toggle.addEventListener("click",myToggler);
function myToggler(e){
    var myEvent = e.target;
    if(myEvent.className === 'btn-open'){
        myEvent.className = 'btn-close';
    }
    else if(myEvent.className === 'btn-close'){
        myEvent.className = 'btn-open';
    }
}
/*..............................Animation with wow.js and animation.css..............................*/
new WOW().init();

// carousel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/*.......................................Scrolling activation effect..........................................*/
$(function(){
  $('.scrolling').scrollWatchMapTo('nav ul li a');
});