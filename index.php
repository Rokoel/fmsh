<!doctype html>
<html lang="ru">

<head>
  <title>ФМШ :: Главная</title>

  <!-- General meta-tags -->
  <meta charset="utf-8">
  <meta name="description" content="Главная страница сайта ФМШ">
  <meta name="keywords" content="ФМШ, физико-математическая, физмат, школа, образование, дополнительное образование, дистант, дистанционное образование, математика, физика, информатика">
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <!-- Robots' meta-tags -->
  <meta name="robots" content="index, follow">

  <!-- Resources -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="preload" href="./index/main_block_bg_light.svg" as="image">

  <link rel="preload" as="font" href="./common-files/Ubuntu-Regular.woff" type="font/woff" crossorigin>

  <link rel="stylesheet" href="./common-files/css/global-styles.css">
  <link rel="stylesheet" href="./index/css/styles.css">
  <link rel="stylesheet" href="./common-files/css/header-styles.css">
  <link rel="stylesheet" href="./common-files/css/animations.css">
  <link rel="stylesheet" href="./common-files/css/footer-styles.css">
  <script src="./index/js/scripts.js"></script>
</head>

<body>
  <?php include "./header.php"; ?>
  <?php include "./mobile-move-buttons.php"; ?>
  <?php include "./forms.php"; ?>

  <main>
    <div id="main-block">
      <div id="words" aria-hidden="true">
        <!-- Holder of any background words on the main page, it doesn't interfere with page's flow -->
        <!-- Subjects and principles elements are generated dynamically with JS -->
        <div id="subjects"></div>
        <div id="principles"></div>
      </div>
      <div class="screen-third small-padding">
        <!-- This block is a spacing block -->
      </div>
      <div class="screen-third">
        <div id="website-name" class="vertical-align-center">
          <h1>FMSH.RU</h1>
        </div>
        <div id="slogan" class="vertical-align-center">
          <h2>Школа для тех, кому нравится мыслить</h2>
        </div>
        <div class="vertical-align-center">
          <h3 id="scroller-1" class="floating cursor-pointer scroller">
            ▼
          </h3>
        </div>
      </div>
      <div class="screen-third small-padding">
        <!-- This block is a spacing block -->
      </div>
    </div>
    <div id="news">
      <article id="about-us-article-holder">
        <h3 class="article-header" style="text-align: center;">О нас</h3>
        <div class="article-body-holder" id="about-fmsh-article">
          <div class="article-text" id="about-fmsh-text">
          <b>Физико-математическая школа FMSH.RU</b> – социальный развивающий образовательный проект, в котором обучаются школьники 6-11 классов, заинтересованные в углубленном изучении математики, физики, информатики и других предметов.
          <br>
          У нас <b>не готовят к олимпиадам, ЕГЭ и подобным испытаниям</b> – мы нацелены на создание основательного понимания изучаемых предметов и комфортной учебной среды, в которой не страшно ошибаться, задавать вопросы и дискутировать.
          </div>
          <div class="in-text-block-holder" id="idroo-screenshot-holder">
            <img loading="lazy" src="./index/replit.gif" class="in-text-block" id="replit-gif" alt="Пример занятия в ФМШ">
            <img loading="lazy" src="./index/idroo.gif" class="in-text-block" id="idroo-gif" alt="Пример занятия в ФМШ">
          </div>
        </div>
        <!-- В кнопки ниже в любом случае нужно будет передавать айдишники ивентов, поэтому заголовки и текст также можно передавать из PHP -->
      </article>
      <hr>
      <article id="how-to-enter-article-holder">
        <h3 class="article-header" style="text-align: center;">Как к нам поступить?</h3>
        <div class="article-body-holder" id="about-admission-article">
          <div class="article-text" id="about-admission-text">
            <h4>I этап: самостоятельное решение задач</h4>
            Этот этап предполагает решение задач предыдущих экзаменов ФМШ. Не обязательно решать все задачи или даже большую их часть. Как при обучении в ФМШ, так и при поступлении, главное не количество, а интерес.
            <h4>II этап: обсуждение задач на семинарах</h4>
            Здесь обсуждение задач продолжится уже в интерактивном режиме, семинары пройдут в системе Zoom. Главный критерий, по которому преподаватели, ведущие семинары, будут принимать решение о зачисление в ФМШ – активность участников (не связанная с количеством решённых задач) и их заинтересованность в обсуждении материала.
            <br>
            <br>
            Скорее всего, одного-двух семинаров будет достаточно, чтобы, с одной стороны, разрешить все вопросы по решавшимся задачкам, а с другой – Вы поняли, как проходят регулярные занятия ФМШ (поскольку семинары будут проходить в том же стиле). Если всё понравится – мы будем рады зачислить Вас в наши группы.
            <br>
            <br>
            <br>
            <b>Варианты для решения и более подробную информацию о поступлении можно прочитать на <a href="entrance.php">странице поступления</a>.</b>
          </div>
        </div>
      </article>
      <hr>
      <article id="teachers-article-holder">
        <h3 class="article-header" style="text-align: center;">Наши преподаватели</h3>
        <div class="carusel-holder">
          <div id="arrow-left" class="arrow" tabindex="0" aria-label="Прокрутить список преподавателей влево" role="button">&#10094;</div>
            <div id="teacher-container">
              <div id="teacher-list" class="teacher-list">
                <div class="person-holder has-border" id="ashkinazi-leonid-alexandrovich">
                  <img loading="lazy" src="./common-files/ashkinazi-leonid-alexandrovich.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#ashkinazi-leonid-alexandrovich">Леонид Александрович Ашкинази</a>
                    <p>
                      преподаватель физики
                    </p>
                  </div>
                </div>

                <div class="person-holder has-border" id="bogolyubov-dmitry-petrovich">
                  <img loading="lazy" src="./common-files/bogolyubov-dmitry-petrovich.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#bogolyubov-dmitry-petrovich">Дмитрий Петрович Боголюбов</a>
                    <p>
                      преподаватель математики и информатики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="grishkina-maria-petrovna">
                  <img loading="lazy" src="./common-files/grishkina-maria-petrovna.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#grishkina-maria-petrovna">Мария Петровна Гришкина</a>
                    <p>
                      преподаватель информатики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="dvorkin-vladimir-vitalievich">
                  <img loading="lazy" src="./common-files/dvorkin-vladimir-vitalievich.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#dvorkin-vladimir-vitalievich">Владимир Витальевич Дворкин</a>
                    <p>
                      преподаватель математики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="dvorkina-ludmila-valerievna">
                  <img loading="lazy" src="./common-files/dvorkina-ludmila-valerievna.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#dvorkina-ludmila-valerievna">Людмила Валерьевна Дворкина</a>
                    <p>
                      преподаватель русского языка и литературы
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="zologina-anastasia-nikolaevna">
                  <img loading="lazy" src="./common-files/zologina-anastasia-nikolaevna.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#zologina-anastasia-nikolaevna">Анастасия Николаевна Зологина</a>
                    <p>
                      преподаватель математики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="ilyukhin-denis-olegovich">
                  <img loading="lazy" src="./common-files/ilyukhin-denis-olegovich.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#ilyukhin-denis-olegovich">Денис Олегович Илюхин</a>
                    <p>
                      преподаватель математики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="skobeleva-ekaterina-yurievna">
                  <img loading="lazy" src="./common-files/skobeleva-ekaterina-yurievna.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#skobeleva-ekaterina-yurievna">Екатерина Юрьевна Скобелева</a>
                    <p>
                      преподаватель информатики
                    </p>
                  </div>
                </div>
          
                <div class="person-holder has-border" id="chernatskiy-sergey-genrikhovich">
                  <img loading="lazy" src="./common-files/chernatskiy-sergey-genrikhovich.webp" class="person-avatar" alt="Фотография преподавателя">
                  <div class="person-bio">
                    <a href="teachers.php#chernatskiy-sergey-genrikhovich">Сергей Генрихович Чернацкий</a>
                    <p>
                      преподаватель математики и информатики
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <div id="arrow-right" class="arrow" tabindex="0" aria-label="Прокрутить список преподавателей вправо" role="button">&#10095;</div>
        </div>
        <a href="teachers.php" class="link-to-more-info">Подробнее</a>
      </article>
      <hr>
      <article id="calendar-article-holder">
        <div id="latest-news-block" class="has-border">
          <b>Завершение зимне-весеннего семестра 2023/24 учебного года</b>
          <br><br>
          Последний учебный день в зимне-весеннем семестре – <b>28 мая</b>. Для автоматического перевода в следующий учебный год необходимо не позже этого дня получить хотя бы один финальный зачёт по любому предмету.
        </div>
        <div id="info-block-for-latest-news">
          <h4>События ФМШ</h4>
          Кроме обучения в группах, вы также можете посещать разовые семинары и события ФМШ. Инофрмацию о них вы сможете узнать <a href="/calendar.php">здесь, в календаре событий ФМШ</a>.
        </div>
      </article>
    </div>
  </main>

  <?php include "./footer.php"; ?>
  
  <script src="./common-files/js/mobile-menu-setup.js"></script>
  <script src="./common-files/js/theme-setup.js"></script>
  <script src="./index/js/fade-in-out.js"></script>
  <script src="./index/js/teachers-list.js"></script>
</body>
</html>