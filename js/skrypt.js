
window.onload = function(){
// Showing button, left icons and html, css, js images
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.hiddenClass');
}
else{
$('.hiddenClass').hide();
}


window.onscroll = function(){
  var test = document.getElementById('testy')
test.innerHTML = window.pageYOffset;

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
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('#aboutMenu').click(function (){
    $('html, body').animate({ scrollTop: $('#about').offset().top }, 1200);
  });
  $('#projectsMenu').click(function (){
    $('html, body').animate({ scrollTop: $('#projects').offset().top }, 1200);
  });
  $('#contactMenu').click(function (){
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 1200);
  });
}
else{
  $('#aboutMenu').click(function (){
    $('html, body').animate({ scrollTop: $('#about').offset().top }, 1200);
  });
  $('#projectsMenu').click(function (){
    $('html, body').animate({scrollTop: '+=1704px'}, 1200);
  });
  $('#contactMenu').click(function (){
    $('html, body').animate({scrollTop: '+=2401px'}, 1200);
  });
}
// Project name and Project technologies
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.ProjectTechnologies').show();
  $('.projectName').show();
}
else{
  $('.ProjectTechnologies').hide();
  $('.projectName').hide();
}

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
