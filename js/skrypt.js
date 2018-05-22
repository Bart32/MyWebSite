
window.onload = function(){
// Back to top button
var btt = document.getElementById('backToTop');
var test = document.getElementById('test');
btt.style.display = "none";

window.onscroll = function(){
  if(window.pageYOffset > 350){
    btt.style.display = "block";
  }
  else{
    btt.style.display = "none";
  }
}

$("#backToTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 900);
});
// End Back to top button

// Scroll down on click at menu
$("#aboutMenu").click(function (){
  $("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
});
$("#projectsMenu").click(function (){
  $("html, body").animate({ scrollTop: $('#projects').offset().top }, 1000);
});
$("#contactMenu").click(function (){
  $("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);
});

// End Scroll down on click at menu
}
