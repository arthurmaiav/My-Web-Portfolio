var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var descs = document.getElementsByClassName("description");
  
  if (n > slides.length) {
      slideIndex = 1; //Se passar do ultimo volta pro primeiro
    }    

  if (n < 1) {
      slideIndex = slides.length; //Se voltar alem do primeiro vai pro ultimo
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < descs.length; i++) {
    descs[i].style.display = "none";  
}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  descs[slideIndex-1].style.display = "block";
}