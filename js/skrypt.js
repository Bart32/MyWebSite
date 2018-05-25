
window.onload = function(){


// Back to top and leftIcons

var btt = document.getElementById('backToTop');
var leftIcon = document.getElementById('LeftIcons');

btt.style.display = 'none';
leftIcon.style.display = 'none';

window.onscroll = function(){
  if(window.pageYOffset > 350){
    btt.style.display = 'block';
    leftIcon.style.display = 'block';
  }
  else{
    btt.style.display = 'none';
    leftIcon.style.display = 'none';
  }
}

$('#backToTop').click(function () {
   $('html, body').animate({scrollTop: 0}, 900);
});

// Hidden HTML/CSS/JS elements

  $('#jsimg').hover(function(){
    $('#jqueryimg').slideDown();
        $(this).css('opacity', '1');
  });
  $('#htmlimg').hover(function(){
    $('#responsiveimg').slideDown();
    $(this).css('opacity', '1');
  });
  $('#cssimg').hover(function(){
    $('#bootstrapimg').slideDown();
    $(this).css('opacity', '1');
  });

// Menu

$('#aboutMenu').click(function (){
  $('html, body').animate({ scrollTop: $('#about').offset().top }, 1000);
});
$('#projectsMenu').click(function (){
  $('html, body').animate({ scrollTop: $('#projects').offset().top }, 1000);
});
$('#contactMenu').click(function (){
  $('html, body').animate({ scrollTop: $('#contact').offset().top }, 1000);
});

// Left icon's
$('#leftIcons')



}
