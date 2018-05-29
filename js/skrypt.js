
window.onload = function(){


// Showing button, left icons and html, css, js images

$('.hiddenClass').hide();

window.onscroll = function(){
  if(window.pageYOffset < 50){
    $('.flags').show();
  }
  else{
  $('.flags').hide();
  }

  if(window.pageYOffset > 320){
    $('#jspng').slideDown();
    $('#htmlpng').slideDown();
    $('#csspng').slideDown();

  }

  if(window.pageYOffset > 350){
    $('#backToTop').show();
    $('#LeftIcons').show();
  }
  else{
    $('#backToTop').hide();
    $('#LeftIcons').hide();
  }

  if(window.pageYOffset > 525){
  $('#responsivepng').slideDown();
  $('#bootstrappng').slideDown();
  $('#jquerypng').slideDown();
  }

  if(window.pageYOffset > 820){
  $('#gitpng').slideDown();
  $('#joomlapng').slideDown();
  $('#mysqlpng').slideDown();
  }

  if(window.pageYOffset > 1450){
  $('#debon').slideDown();
  $('#template').slideDown();
  $('#bartek').slideDown();
  }
}


$('#backToTop').click(function () {
   $('html, body').animate({scrollTop: 0}, 900);
});

// Menu

$('#aboutMenu').click(function (){
  $('html, body').animate({ scrollTop: $('#about').offset().top }, 1200);
});
$('#projectsMenu').click(function (){
  $('html, body').animate({scrollTop: '+=1400px'}, 1200);
});
$('#contactMenu').click(function (){
  $('html, body').animate({scrollTop: '+=2460px'}, 1200);
});

// Project name and Project technologies
$('.ProjectTechnologies').hide();
$('.projectName').hide();

$('.firstProject').mouseover(function (){
    $('#debonName').show( "fast", function() {
  });
    $('#debonTechnologies').show( "fast", function() {
  });
  }).mouseout (function () {
      $('#debonName').hide( "fast", function() {
    });
      $('#debonTechnologies').hide( "fast", function() {
    });
  });

  $('.secondProject').mouseover(function (){
      $('#templateName').show( "fast", function() {
    });
      $('#templateTechnologies').show( "fast", function() {
    });
    }).mouseout (function () {
        $('#templateName').hide( "fast", function() {
      });
        $('#templateTechnologies').hide( "fast", function() {
      });
    });

$('.thirdProject').mouseover(function (){
    $('#kosiecName').show( "fast", function() {
  });
    $('#kosiecTechnologies').show( "fast", function() {
  });
  }).mouseout (function () {
      $('#kosiecName').hide( "fast", function() {
    });
      $('#kosiecTechnologies').hide( "fast", function() {
    });
  });


}
