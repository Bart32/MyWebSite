
window.onload = function(){

  // ENG / PL
  $('#engButton').click(function(){
    $('.menuItem, .textHeader, .text, .wyslijWiad, .languageChoiceText').fadeOut(500, function() {
        $('#about').text('About me').fadeIn(500);
        $('#projectsMenu').text('Projects').fadeIn(500);
        $('#contactMenu').text('Contact').fadeIn(500);
        $('#aboutMenu').text('About me').fadeIn(500);
        $('.languageChoiceText').text('Language choice:').fadeIn(500);
        $('#about1paraghraph').text('Hello, my name is Bartek. Junior front-end developer.').fadeIn(500);
        $('#about2paraghraph').text("At this moment, I'm working as a freelancer, accomplishing the miscellaneous tasks.").fadeIn(500);
        $('#about3paraghraph').text('I would like to continue to gain valuable experience and develop my passion, what is creating websites.').fadeIn(500);
        $('#about4paraghraph').html(" <p class='text'>I'm looking for job as <strong> junior front-end developer </strong> or <strong>junior web-developer. </strong>Techonolgies what I'm working with: </p>").fadeIn(500);
        $('#projects').text('Projects').fadeIn(500);
        $('#about5paraghraph').html('<p class="text"><strong>I"m also using: </strong></p>').fadeIn(500);
        $('#projects1paraghraph').text('Below you can find a few of my realizations.').fadeIn(500);
        $('#projects2paraghraph').text('I can create templates and also integrate ready project with CMS.').fadeIn(500);
        $('#projects3paraghraph').text('So far, I have been working on projects with CMS Joomla, but I am open to new solutions.').fadeIn(500);
        $('#projects4paraghraph').text('At this moment I can be proud of one completed commercial project, but the next one is in realization.').fadeIn(500);
        $('.wyslijWiad').text('Visit website').fadeIn(500);
        $('#contact').text('Contact').fadeIn(500);
        $('#contact1paraghraph').text('Are you interested cooperation? Maybe you"re looking for a junior to you"r team?').fadeIn(500);
        $('#contact2paraghraph').html(' Write to me, we"ll be in touch. If you want to, check out my <a href="CV/CV.pdf">CV.</a> See you later!').fadeIn(500);
        $('#messageSend').text('Send message').fadeIn(500);
        $('#messageTopic').attr("placeholder", "Subject");
        $('#messageText').attr("placeholder", "Message");
    });

  });


    $('#plButton').click(function(){
      $('.menuItem, .textHeader, .text, .wyslijWiad, .languageChoiceText').fadeOut(500, function() {
          $('#about').text('O mnie').fadeIn(500);
          $('#projectsMenu').text('Projekty').fadeIn(500);
          $('#contactMenu').text('Kontakt').fadeIn(500);
          $('#aboutMenu').text('O mnie').fadeIn(500);
        $('.languageChoiceText').text('Wybór języka:').fadeIn(500);
          $('#about1paraghraph').text('Cześć, jestem Bartek. Początkujący front-end developer.').fadeIn(500);
          $('#about2paraghraph').text("Na ten moment działam jako freelancer, realizujac różnego rodzaju zlecenia.").fadeIn(500);
          $('#about3paraghraph').text('Chciałbym dalej zdobywać cenne doświadczenie oraz rozwijac swoją pasję, jaką jest tworzenie stron internetowych.').fadeIn(500);
          $('#about4paraghraph').html("<p class='text' id='about4paraghraph'>Poszukuję stałej pracy, jako <strong> junior front-end developer </strong> lub <strong>junior web-developer. </strong>Technologie w jakich pracuje to: </p>").fadeIn(500);
          $('#projects').text('Projects').fadeIn(500);
          $('#about5paraghraph').html('<p class="text"><strong>Pracuje także z: </strong></p>').fadeIn(500);
          $('#projects1paraghraph').text('Poniżej znajdziesz kilka projektów, nad którymi pracowałem. ').fadeIn(500);
          $('#projects2paraghraph').text('Potrafie zarówno sam stworzyć szablon lub zintegrować gotowy projekt z systemem zarządzania treścią.').fadeIn(500);
          $('#projects3paraghraph').text('Do tej pory przy projektach pracowałem głównie z CMS Joomla, lecz jestem otwarty na nowe rozwiązania.').fadeIn(500);
          $('#projects4paraghraph').text('Na ten moment mogę pochwalić się jednym gotowym projektem komercyjnym, kolejny projekt jest juz w realizacji. ').fadeIn(500);
          $('.wyslijWiad').text('Odwiedź witrynę').fadeIn(500);
          $('#contact').text('Kontakt').fadeIn(500);
          $('#contact1paraghraph').text('Jesteś zainteresowany współpracą? A może szukasz juniora do swojego teamu?').fadeIn(500);
          $('#contact2paraghraph').html('    <p class="text" id="contact2paraghraph"> Napisz do mnie, na pewno się odezwę! Jeśli masz ochotę, zerknij również na moje <a href="CV/CV.pdf" target="_blank">CV.</a> Do usłyszenia! </p>').fadeIn(500);
          $('#messageSend').text('Wyślij wiadomość').fadeIn(500);
          $('#messageTopic').attr("placeholder", "Temat");
          $('#messageText').attr("placeholder", "Treść wiadomości");
        });

      });
// Showing button, left icons and html, css, js images
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.hiddenClass');
}
else{
$('.hiddenClass').hide();
}


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
