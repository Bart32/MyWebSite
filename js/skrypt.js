window.onload = function() {

 // Turning off animations on phone
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.hiddenClass');
  } else {
    $('.hiddenClass').hide();
  }

// LOADER
 function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("webSite").style.display = "block";
}
      setTimeout(showPage, 700);


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
      document.getElementById("ContactForm").action = "php/contact.php";
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
      document.getElementById("ContactForm").action = "php/kontakt.php";
    });

  });
  // Loading images
  window.onscroll = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (window.pageYOffset < 50) {
      $('.flags').show();
    }
    else {
      $('.flags').hide();
    }
  }

    if (window.pageYOffset > 250) {
      $('#jspng').slideDown();
      $('#descriptionText').slideDown();
      $('#descriptionImg').slideDown();
      $('#htmlpng').slideDown();
      $('#csspng').slideDown();
      $('#hiddenJS').slideDown();
      $('#hiddenHTML').slideDown();
      $('#hiddenCSS').slideDown();

    }

    if (window.pageYOffset > 350) {
      $('#backToTop').show();
      $('#LeftIcons').show();
    } else {
      $('#backToTop').hide();
      $('#LeftIcons').hide();
    }

    if (window.pageYOffset > 1150) {
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
        scrollTop: '+=1750px'
      }, 1200);
    });
    $('#contactMenu').click(function() {
      $('html, body').animate({
        scrollTop: '+=2500px'
      }, 1200);
    });
  }

  // Skill's description

    const skillImgSrc = [
      'images/ikony/js.png',
      'images/ikony/css.png',
      'images/ikony/html.png',
      'images/ikony/react.png',
      'images/ikony/bootstrap.png',
      'images/ikony/responsive.png',
      'images/ikony/jquery.jpg',
      'images/ikony/joomla.png',
      'images/ikony/git.jpg'
    ];
    const skillTextDescription = [
      "Na nauke Javascript poświęcam dużo czasu. Uważam, że należy poznać ten język od podstaw, aby lepiej rozumieć, co dzieje się podczas używania róznych bibliotek czy frameworków. Zawsze staram się znaleźć najoptymalniejsze rozwiązanie problemu. Stworzyłem juz kilka projektów, częsć z nich mozna znaleź na moim githubie.",
      "CSS ipsum ",
      "HTML ipsum ipsum",
      "Aktualnie jestem w trakcie nauki biblioteki React.js. Znam już podstawowe założenia oraz widze korzyści płynące z dzielenia kodu na moduły. Powoli zaczynam dostrzegać możliwości Reacta poznając innego jego funkcje. Jestem także w trakcie tworzenia projektu, który niedługo znajdzie się na moim githubie.",
      "Framework Bootstrap głównie pomaga mi przy tworzeniu responsywności strony, czasami korzystam z innych jego elementów, takich jak gotowe menu, czy dobrze wystylizowane buttony.",
      "Zawsze staram się, aby moje projekty wyglądały dobrze w każdej rozdzielczości, zarówno na szerokich monitorach, jak i na tabletach, na telefonach komórkowych kończąc.",
      "Biblioteka jQuery znacznie przyśpiesza moją prace z javascriptem, niestety często kosztem wydajności strony. Do tej pory używałem głównie prostych funkcji, które pomagały mi uzyskiwać animacje na stronach. Cały czas poznaję możliwości tej biblioteki, po przez stosowanie jej w moich projektach.",
      "Dwa projekty komercyjne, oraz kilka projektów niekomercyjnych, pozwoliły mi poznać CMS, jakim jest Joomla! Potrafie podpiąć pod Joomle gotowy szablon, tworząc włąsne moduły, jak i zaprojektować stronę od początku do samego końca.",
      "System kontroli wersji GIT, pomaga mi w utrzymaniu mojego kodu. Poprzez dość częste commity, w razie problemu mogę cofnąć program do działającej wersji."
    ]
    const arrayOfSkillsImg = document.getElementById('arrayOfSkillsImg').getElementsByTagName('img');
    var descriptionImg = $("#descriptionImg");
    var descriptionText = $("#descriptionText");
    for (var i = 0; i <= arrayOfSkillsImg.length-1; i++){
      $(arrayOfSkillsImg[i]).click(function(){
        var indexOfClickedElement = ( $(arrayOfSkillsImg).index(this) );
        descriptionImg.fadeOut('fast', function(){
        descriptionImg.attr('src', skillImgSrc[indexOfClickedElement]);
        descriptionText.text(skillTextDescription[indexOfClickedElement]);
        descriptionImg.fadeIn('fast');
        });
});
};

  // Project name and Project technologies
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.ProjectTechnologies').show();
    $('.projectName').show();
  } else {
    $('.ProjectTechnologies').hide();
    $('.projectName').hide();
  }

   const arrayOfProjectsButtons = document.getElementById('projectsRow').getElementsByTagName('button')

  $(arrayOfProjectsButtons[0]).mouseover(function() {
    $('#debonName').show("fast", function() {});
    $('#debonTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#debonName').hide("fast", function() {});
    $('#debonTechnologies').hide("fast", function() {});
  });

  $(arrayOfProjectsButtons[1]).mouseover(function() {
    $('#templateName').show("fast", function() {});
    $('#templateTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#templateName').hide("fast", function() {});
    $('#templateTechnologies').hide("fast", function() {});
  });

  $(arrayOfProjectsButtons[2]).mouseover(function() {
    $('#kosiecName').show("fast", function() {});
    $('#kosiecTechnologies').show("fast", function() {});
  }).mouseout(function() {
    $('#kosiecName').hide("fast", function() {});
    $('#kosiecTechnologies').hide("fast", function() {});
  });
}
