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

  // Skill's description

  const skillImgSrc = [
    'images/ikony/js.png',
    'images/ikony/css.png',
    'images/ikony/html.png',
    'images/ikony/react.png',
    'images/ikony/bootstrap.png',
    'images/ikony/responsive.png',
    'images/ikony/jquery.jpg',
    'images/ikony/sass.png',
    'images/ikony/git.jpg'
  ];
  const skillTextDescriptionPL = [
    "Na nauke Javascript poświęcam dużo czasu. Uważam, że należy poznać ten język od podstaw, aby lepiej rozumieć, co dzieje się podczas używania róznych bibliotek czy frameworków. Zawsze staram się znaleźć najoptymalniejsze rozwiązanie problemu. Stworzyłem juz kilka projektów, częsć z nich mozna znaleź na moim githubie.",
    "W CSS czuję się dobrze. Potrafie min. nadawać responsywnść elementom na stronie, manipulowac ich wyglądem z wykorzystaniem pseudoklas, tworzyć proste animacje z użyciem transition. Lubię nieszablonowe rozwiązania, praca z arkuszem stylów sprawia mi przyjemność.",
    "W HTML poruszam się bardzo sprawnie, dobrze znam jego składnie, przez co praca w tej technologi idzie mi płynnie oraz bezproblemowo.",
    "Aktualnie jestem w trakcie nauki biblioteki React.js. Znam już podstawowe założenia oraz widze korzyści płynące z dzielenia kodu na moduły. Powoli zaczynam dostrzegać możliwości Reacta poznając innego jego funkcje. Jestem także w trakcie tworzenia projektu, który niedługo znajdzie się na moim githubie.",
    "Framework Bootstrap głównie pomaga mi przy tworzeniu responsywności strony, czasami korzystam z innych jego elementów, takich jak gotowe menu, czy gotowe buttony.",
    "Zawsze staram się, aby moje projekty wyglądały dobrze w każdej rozdzielczości, zarówno na szerokich monitorach, tabletach, na telefonach komórkowych kończąc.",
    "Biblioteka jQuery znacznie przyśpiesza moją prace z javascriptem. Rozumiem minusy związane z wydajnością strony podczas korzystania z tej biblioteki, dlatego staram się jej nie nadużywać. Do tej pory używałem głównie prostych funkcji, które pomagały mi uzyskiwać animacje na stronach. Cały czas poznaję możliwości jQuery, po przez wykorzystanie niektórych elementów w moich projektach.",
    "Preprocesor Sass to świetne narzędzie,znacznie przyśpieszające prace z CSS. Z powodzeniem używam takich elementów jak zmienne, mixiny, operatory czy funkcje.",
    "System kontroli wersji GIT, służy mi głównie do dziela się moim kodem z innymi. Pozwala mi także, w razie problemów, wrócić do poprzedniej wersji mojego projektu"
  ]
  const skillTextDescriptionENG = [
    "I devote a lot of time to learning Javascript. I believe that you should learn this language from scratch in order to better understand what happens when using different libraries or frameworks. I always try to find the most optimal solution to the problem. I have already created a few projects, some of them can be found on my github.",
    "I feel good in CSS. For example I can make page elements responsive, manipulate their appearance using pseudoclas, create simple animations using the transition. I like unconventional solutions, working with a style sheet is a pleasure for me",
    "I work very well in HTML, I know its syntax well, which makes working in this technology smooth and problem-free.",
    "I am currently in the process of learning the React.js library. I know the basic assumptions and I see the benefits of dividing the code into modules.I'm slowly starting to see see possibilities of React, learning his other functions. I am also in the process of creating a project that will be avilable soon be on my github.",
    "The Bootstrap framework mainly helps me make the website responsive, sometimes I'm also use other elements, such as a ready menu or ready buttons.",
    "I always try to make my projects look good in every resolution, both on wide monitors, tablets and on mobile phones.",
    "jQuery library accelerates my work with Javascript. I know cons related to performance website when using this library, so I try not to abuse it. So far, I've used mainly simple functions that helped me get animations on pages. I learn jQuery all the time, by using some elements in my projects.",
    "Sass preprocessor is a great tool for accelerating work with CSS. I successfully use elements such as variables, mixins, operators and functions.",
    "GIT version control system , is mainly used to share my code with others. It also allows me to return to the previous version of my project in case of any problem"
  ]

  var skillTextDescription = skillTextDescriptionPL;
  const arrayOfSkillsImg = document.getElementById('arrayOfSkillsImg').getElementsByTagName('img');
  var descriptionImg = $("#descriptionImg");
  var descriptionText = $("#descriptionText");
  for (var i = 0; i <= arrayOfSkillsImg.length - 1; i++) {
    $(arrayOfSkillsImg[i]).click(function() {
      var indexOfClickedElement = ($(arrayOfSkillsImg).index(this));
      descriptionImg.fadeOut('fast', function() {
        descriptionImg.attr('src', skillImgSrc[indexOfClickedElement]);
        descriptionText.text(skillTextDescription[indexOfClickedElement]);
        descriptionImg.fadeIn('fast');
      });
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html, body').animate({
          scrollTop: $('#descriptionImg').offset().top
        }, 1200);
      }
    });
  };

  // ENG / PL
  const projectsHeader = document.getElementsByClassName('projectsHeader');
  const wyslijWiad = document.getElementsByClassName('wyslijWiad');
  const contact = document.getElementById('contactMenuScroll');
  const messageSend = document.getElementById('messageSend');
  const projectInRealization = document.getElementById('projectInRealization');

  $('#engButton').click(function() {

    skillTextDescription = skillTextDescriptionENG;
    descriptionImg.attr('src', skillImgSrc[0]);

    $('#projectsMenu,#contactMenu,#aboutMenu, #aboutMenuScroll').fadeOut(500, function() {
      $('#projectsMenu').html('Projects').fadeIn(500);
      $('#contactMenu').html('Contact').fadeIn(500);
      $('#aboutMenu').html('About me').fadeIn(500);

      $("#aboutMenuScroll").html(" <h1> About me </h1><p class='text'> Hello, my name is Bartek. I'm an junior front-end developer. <br> At this moment, I'm working as a freelancer, accomplishing the miscellaneous tasks. <br> I would like to continue to gain valuable experience and develop my passion, what is creating websites. <br>I'm looking for job as <strong> junior front-end developer </strong> or <strong>junior web-developer. </strong>Technologies in which I feel best:  <br> (Click icon for more) </p>").fadeIn(500);

      descriptionText.html("I devote a lot of time to learning Javascript. I believe that you should learn this language from scratch in order to better understand what happens when using different libraries or frameworks. I always try to find the most optimal solution to the problem. I have already created a few projects, some of them can be found on my github.");

      projectsHeader[0].innerHTML = " <h1> Projects </h1><p class='text'> Below you can find a few of my realizations. <br> I can create templates and also integrate ready project with CMS. <br> So far, I have been working on projects with CMS Joomla, but I am open to new solutions. <br>At this moment I can be proud of one completed commercial project, but the next one is in realization. </p>";

      projectInRealization.innerHTML = "IN REALIZATION";

      for (j = 0; j < wyslijWiad; j++) {
        wyslijWiad[j].innerHTML = 'Visit website';
      }

      contact.innerHTML = "<h1> Contact </h1><p class='text'> Would you like to cooperate with me? Maybe you're looking for a junior to you'r team? <br> Write to me, we'll be in touch. If you want to, check out my <a href='CV/cvENG.pdf'>CV.</a> See you later! </p>";


      messageSend.innerHTML = 'Send message';
      document.getElementById('messageTopic').setAttribute("placeholder", "Subject");
      document.getElementById('messageText').setAttribute("placeholder", "Message");
      document.getElementById("ContactForm").action = "php/contact.php";
    });
  });
  $('#plButton').click(function() {

    skillTextDescription = skillTextDescriptionPL;
    descriptionImg.attr('src', skillImgSrc[0]);

    $('#projectsMenu,#contactMenu,#aboutMenu, #aboutMenuScroll').fadeOut(500, function() {
      $('#projectsMenu').html('Projekty').fadeIn(500);
      $('#contactMenu').html('Kontakt').fadeIn(500);
      $('#aboutMenu').html('O mnie').fadeIn(500);

      $("#aboutMenuScroll").html(" <h1> O mnie </h1><p class='text'> Cześć, jestem Bartek. Początkujący front-end developer. <br> Na ten moment działam jako freelancer, realizując różnego rodzaju zlecenia. <br> Chciałbym dalej zdobywać cenne doświadczenie oraz rozwijać swoją pasję, jaką jest tworzenie stron internetowych. <br>Poszukuję stałej pracy, jako <strong> junior front-end developer </strong> lub <strong>junior web-developer. </strong>Technologie w jakich czuję się najlepiej: <br> (Kliknij w ikonę po więcej) </p>").fadeIn(500);

      descriptionText.html(" Na nauke Javascript poświęcam dużo czasu. Uważam, że należy poznać ten język od podstaw, aby lepiej rozumieć, co dzieje się podczas używania róznych bibliotek czy frameworków. Zawsze staram się znaleźć najoptymalniejsze rozwiązanie problemu. Stworzyłem juz kilka projektów, częsć z nich mozna znaleź na moim githubie.");

      projectsHeader[0].innerHTML = " <h1> Projekty </h1><p class='text'>Poniżej znajdziesz kilka projektów, nad którymi pracowałem. <br> Potrafię zarówno sam stworzyć szablon, jak i zintegrować gotowy projekt z systemem zarządzania treścią. <br> Do tej pory przy projektach pracowałem głównie z CMS Joomla, lecz jestem otwarty na nowe rozwiązania. <br>Na ten moment mogę pochwalić się jednym gotowym projektem komercyjnym, kolejny projekt jest już w realizacji. </p>";

      projectInRealization.innerHTML = "W realizacji";

      for (j = 0; j < wyslijWiad; j++) {
        wyslijWiad[j].innerHTML = 'Odwiedź witrynę';
      }

      contact.innerHTML = "<h1> Kontakt </h1><p class='text'> Jesteś zainteresowany współpracą? A może szukasz juniora do swojego teamu?' <br>Napisz do mnie, na pewno się odezwę! Jeśli masz ochotę, zerknij również na moje <a href='CV/cvPL.pdf' target='_blank'>CV.</a> Do usłyszenia! </p>";


      messageSend.innerHTML = 'Wyślij wiadomość';
      document.getElementById('messageTopic').setAttribute("placeholder", "Temat");
      document.getElementById('messageText').setAttribute("placeholder", "Treść wiadomości");
      document.getElementById("ContactForm").action = "php/kontakt.php";
    });
  });

  // Loading images
  window.onscroll = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      if (window.pageYOffset < 150) {
        $('.languageChoice').show();
      } else {
        $('.languageChoice').hide();
      }
    }

    if (window.pageYOffset > 500) {
      $('#arrayOfSkillsImg').slideDown();
      $('.skillDescription').slideDown();
    }

    if (window.pageYOffset > 350) {
      $('#backToTop').show();
      $('#LeftIcons').show();
    } else {
      $('#backToTop').hide();
      $('#LeftIcons').hide();
    }
    if (window.pageYOffset > 1500) {
      $('.wholeProject').slideDown();
    }
  }

  $('#backToTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  // Menu

  $('nav a').on('click', function (e) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('#navbarNavAltMarkup').attr("class", 'navbar-collapse collapse');
    } 
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $('#' + this.id + "Scroll").offset().top
    }, 1200);
 });
  
  // Project name and Project technologies
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.projectDescription').show();
  } else {
    $('.projectDescription').hide();
  }

  const arrayOfProjectsButtons = document.getElementById('projectsRow').getElementsByTagName('button')

  $(arrayOfProjectsButtons[0]).mouseover(function() {
    $('#debonDescription').show("fast", function() {});
  }).mouseout(function() {
    $('#debonDescription').hide("fast", function() {});
  });

  $(arrayOfProjectsButtons[1]).mouseover(function() {
    $('#futureProjectDescription').show("fast", function() {});
  }).mouseout(function() {
    $('#futureProjectDescription').hide("fast", function() {});
  });

  $(arrayOfProjectsButtons[2]).mouseover(function() {
    $('#portfolioDescription').show("fast", function() {});
  }).mouseout(function() {
    $('#portfolioDescription').hide("fast", function() {});
  });
}
