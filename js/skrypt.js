
window.onload = function(){


// Showing button, left icons and html, css, js images

$('.hiddenClass').hide();

window.onscroll = function(){
  var testy = document.getElementById('testy');
  testy.innerHTML = window.pageYOffset;
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

  if(window.pageYOffset > 575){
  $('#responsivepng').slideDown();
  $('#bootstrappng').slideDown();
  $('#jquerypng').slideDown();
  }

  if(window.pageYOffset > 820){
  $('#gitpng').slideDown();
  $('#joomlapng').slideDown();
  $('#mysqlpng').slideDown();
  }

  if(window.pageYOffset > 1254){
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
  $('html, body').animate({scrollTop: '+=1596px'}, 1200);
});
$('#contactMenu').click(function (){
  $('html, body').animate({scrollTop: '+=2238px'}, 1200);
});

// Projects



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

// Projects image change

$(".firstProject").mouseover(function () {
  $('#debon').attr("src","images/projects/debon2Small.png");
}).mouseout(function () {
  $('#debon').attr("src","images/projects/debonSmall.png");
});

$(".secondProject").mouseover(function () {
  $('#template').attr("src","images/projects/template2Small.png");
}).mouseout(function () {
  $('#template').attr("src","images/projects/templateSmall.png");
});

$(".thirdProject").mouseover(function () {
  $('#bartek').attr("src","images/projects/bartek2Small.png");
}).mouseout(function () {
  $('#bartek').attr("src","images/projects/bartekSmall.png");
});

}
