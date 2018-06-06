window.onload = function() {

 // Turning off animations on phone
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.hiddenClass');
  } else {
    $('.hiddenClass').hide();
  }

  // ENG / PL
  $('#engButton').click(function() {
    $('.menuItem, .textHeader, .text, .wyslijWiad,#projectInRealization').fadeOut(500, function() {
      $('#projectsMenu').html('Projects').fadeIn(500);
      $('#contactMenu').html('Contact').fadeIn(500);
      $('#aboutMenu').html('About me').fadeIn(500);

      $("#about").html(" <h1> About me </h1><p class='text'> Hello, my name is Bartek. I'm an junior front-end developer. <br> At this moment, I'm working as a freelancer, accomplishing the miscellaneous tasks. <br> I would like to continue to gain valuable experience and develop my passion, what is creating websites. <br>I'm looking for job as <strong> junior front-end developer </strong> or <strong>junior web-developer. </strong>Techonolgies what I'm working with: </p>").fadeIn(500);

      $('#alsoWorkingWith').html('<p class="text"><strong>I"m also using: </strong></p>').fadeIn(500);
      $('#projectInRealization').html("IN REALIZATION").fadeIn(500);

      $("#projects").html(" <h1> Projects </h1><p class='text'> Below you can find a few of my realizations. <br> I can create templates and also integrate ready project with CMS. <br> So far, I have been working on projects with CMS Joomla, but I am open to new solutions. <br>At this moment I can be proud of one completed commercial project, but the next one is in realization. </p>").fadeIn(500);

      $('#projectInRealization').html("IN REALIZATION").fadeIn(500);
      $('.wyslijWiad').html('Visit website').fadeIn(500);

      $("#contact").html(" <h1> Contact </h1><p class='text'> Would you like to cooperate with me? Maybe you're looking for a junior to you'r team? <br> Write to me, we'll be in touch. If you want to, check out my <a href='CV/cvENG.pdf'>CV.</a> See you later! </p>").fadeIn(500);

      $('#messageSend').html('Send message').fadeIn(500);
      document.getElementById('messageTopic').setAttribute("placeholder", "Subject");
      document.getElementById('messageText').setAttribute("placeholder", "Message");
      document.contactFormName.action = "php/contact.php";
    });

  });


  $('#plButton').click(function() {

    $('.menuItem, .textHeader, .text, .wyslijWiad,#projectInRealization').fadeOut(500, function() {
      $('#projectsMenu').html('Projekty').fadeIn(500);
      $('#contactMenu').html('Kontakt').fadeIn(500);
      $('#aboutMenu').html('O mnie').fadeIn(500);

      $("#about").html(" <h1> O mnie </h1><p class='text'> Cześć, jestem Bartek. Początkujący front-end developer. <br> Na ten moment działam jako freelancer, realizując różnego rodzaju zlecenia. <br> Chciałbym dalej zdobywać cenne doświadczenie oraz rozwijać swoją pasję, jaką jest tworzenie stron internetowych. <br>Poszukuję stałej pracy, jako <strong> junior front-end developer </strong> lub <strong>junior web-developer. </strong>Technologie w jakich pracuję to: </p>").fadeIn(500);

      $('#alsoWorkingWith').html('<p class="text"><strong>Pracuję także z: </strong></p>').fadeIn(500);
      $('#projectInRealization').html("IN REALIZATION").fadeIn(500);

      $("#projects").html(" <h1> Projekty </h1><p class='text'>Poniżej znajdziesz kilka projektów, nad którymi pracowałem. <br> Potrafię zarówno sam stworzyć szablon, jak i zintegrować gotowy projekt z systemem zarządzania treścią. <br> Do tej pory przy projektach pracowałem głównie z CMS Joomla, lecz jestem otwarty na nowe rozwiązania. <br>Na ten moment mogę pochwalić się jednym gotowym projektem komercyjnym, kolejny projekt jest już w realizacji. </p>").fadeIn(500);

      $('#projectInRealization').html("W REALIZACJI").fadeIn(500);
      $('.wyslijWiad').html('Odwiedź witrynę').fadeIn(500);

      $("#contact").html(" <h1> Contact </h1><p class='text'> Jesteś zainteresowany współpracą? A może szukasz juniora do swojego teamu?' <br>Napisz do mnie, na pewno się odezwę! Jeśli masz ochotę, zerknij również na moje <a href='CV/cvPL.pdf' target='_blank'>CV.</a> Do usłyszenia! </p>").fadeIn(500);

      $('#messageSend').html('Wyślij wiadomość').fadeIn(500);
      document.getElementById('messageTopic').setAttribute("placeholder", "Temat");
      document.getElementById('messageText').setAttribute("placeholder", "Treść wiadomości");
      document.contactFormName.action = "php/kontakt.php";
    });

  });
  // Showing button, left icons and html, css, js images



  window.onscroll = function() {

    if (window.pageYOffset < 50) {
      $('.flags').show();
    } else {
      $('.flags').hide();
    }

    if (window.pageYOffset > 320) {
      $('#jspng').slideDown();
      $('#htmlpng').slideDown();
      $('#csspng').slideDown();

    }

    if (window.pageYOffset > 350) {
      $('#backToTop').show();
      $('#LeftIcons').show();
    } else {
      $('#backToTop').hide();
      $('#LeftIcons').hide();
    }

    if (window.pageYOffset > 525) {
      $('#responsivepng').slideDown();
      $('#bootstrappng').slideDown();
      $('#jquerypng').slideDown();
    }

    if (window.pageYOffset > 820) {
      $('#gitpng').slideDown();
      $('#joomlapng').slideDown();
      $('#mysqlpng').slideDown();
    }

    if (window.pageYOffset > 1450) {
      $('#debon').slideDown();
      $('#template').slideDown();
      $('#bartek').slideDown();
    }
  }


  $('#backToTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  // Menu
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('#aboutMenu').click(function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 1200);
    });
    $('#projectsMenu').click(function() {
      $('html, body').animate({
        scrollTop: $('#projects').offset().top
      }, 1200);
    });
    $('#contactMenu').click(function() {
      $('html, body').animate({
        scrollTop: $('#contact').offset().top
      }, 1200);
    });
  } else {
    $('#aboutMenu').click(function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 1200);
    });
    $('#projectsMenu').click(function() {
      $('html, body').animate({
        scrollTop: '+=1704px'
      }, 1200);
    });
    $('#contactMenu').click(function() {
      $('html, body').animate({
        scrollTop: '+=2421px'
      }, 1200);
    });
  }
  // Project name and Project technologies
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.ProjectTechnologies').show();
    $('.projectName').show();
  } else {
    $('.ProjectTechnologies').hide();
    $('.projectName').hide();
  }

  $('.firstProject').mouseover(function() {
    $('#debonName').show("fast", function() {});
    $('#debonTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#debonName').hide("fast", function() {});
    $('#debonTechnologies').hide("fast", function() {});
  });

  $('.secondProject').mouseover(function() {
    $('#templateName').show("fast", function() {});
    $('#templateTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#templateName').hide("fast", function() {});
    $('#templateTechnologies').hide("fast", function() {});
  });

  $('.thirdProject').mouseover(function() {
    $('#kosiecName').show("fast", function() {});
    $('#kosiecTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#kosiecName').hide("fast", function() {});
    $('#kosiecTechnologies').hide("fast", function() {});
  });
}
