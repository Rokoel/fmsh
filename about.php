<!doctype html>
<html lang="ru">

<head>
  <title>ФМШ :: О ФМШ</title>

  <!-- General meta-tags -->
  <meta charset="utf-8">
  <meta name="description" content="Страница с основной информацией о ФМШ">
  <meta name="keywords" content="ФМШ, физико-математическая, физмат, школа, образование, дополнительное образование, дистант, дистанционное образование, математика, физика, информатика">
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <!-- Robots' meta-tags -->
  <meta name="robots" content="index, follow">

  <!-- Resources -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="./common-files/css/global-styles.css">
  <link rel="stylesheet" href="./common-files/css/animations.css">
  <link rel="stylesheet" href="./common-files/css/header-styles.css">
  <link rel="stylesheet" href="./common-files/css/footer-styles.css">
  <link rel="stylesheet" href="./about/css/styles.css">
  <script src="./about/js/scripts.js"></script>
</head>

<body>
  <?php include("./header.php"); ?>
    
  <main id="content">
    <article id="article-1">
      <div class="article-header" style="text-align: center;">Что такое ФМШ?</div>
      <div class="article-body-holder" id="about-fmsh-article">
        <div class="article-text" id="about-fmsh-text">
          <b>Физико-математическая школа FMSH.RU</b> – это социальный развивающий образовательный проект, в рамках которого проходят обучение школьники 7-11 классов, заинтересованные в серьёзном изучении <b>математики, физики, информатики и других предметов</b>, не связанном с подготовкой к тем или иным испытаниям (ЕГЭ, олимпиады и др.). Кроме этого, учащиеся ФМШ под руководством преподавателей имеют возможность получить свой первый педагогический опыт.
          <br><br>
          Обучение в ФМШ проходит в онлайн формате. Занятия проводятся <b>от 1 до 3 раз в неделю после 17:00.</b>
        </div>
        <div class="in-text-block-holder" id="idroo-screenshot-holder">
          <img src="./about/idroo.gif" class="in-text-block" id="idroo-gif" alt="Пример занятия в ФМШ">
          <img src="./about/replit.gif" class="in-text-block" id="replit-gif" alt="Пример занятия в ФМШ">
        </div>
      </div>
    </article>
    <hr>
    <article id="article-2">
      <div class="article-header text-align-center">Особенности обучения в ФМШ</div>
      <div class="article-body-holder" id="fmsh-features-article">
        <div class="in-text-block-holder" id="features-menu-holder">
          <div class="in-text-block" id="features-menu">
            <div class="change-article" id="features-menu-option-1" tabindex="0" role="button" onclick="chooseFeature(1, 'features-menu-option-', 'feature-', 6)">
              <a>
                <b>Заинтересованные студенты</b>
              </a>
            </div>
            <div class="change-article" id="features-menu-option-2" tabindex="0" role="button" onclick="chooseFeature(2, 'features-menu-option-', 'feature-', 6)">
              <a>
                Гибкая программа обучения
              </a>
            </div>
            <div class="change-article" id="features-menu-option-3" tabindex="0" role="button" onclick="chooseFeature(3, 'features-menu-option-', 'feature-', 6)">
              <a>
                Расширение кругозора учащихся
              </a>
            </div>
            <div class="change-article" id="features-menu-option-4" tabindex="0" role="button" onclick="chooseFeature(4, 'features-menu-option-', 'feature-', 6)">
              <a>
                Главное – понимание
              </a>
            </div>
            <div class="change-article" id="features-menu-option-5" tabindex="0" role="button" onclick="chooseFeature(5, 'features-menu-option-', 'feature-', 6)">
              <a>
                Наука «в действии»
              </a>
            </div>
            <div class="change-article" id="features-menu-option-6" tabindex="0" role="button" onclick="chooseFeature(6, 'features-menu-option-', 'feature-', 6)">
              <a>
                Первый опыт преподавания
              </a>
            </div>
          </div>
        </div>
        <div class="article-text" id="feature-1">
          <b>В ФМШ поступают действительно заинтересованные в глубоком изучении материала студенты.</b>
          <br><br>
          Поступление в ФМШ осуществляется по результатам письменного экзамена по математике, творческого конкурса или обучающих семинаров. Проверяется умение креативно мыслить и осознанно применять знания, что позволяет набирать школьников, ориентированных на глубокое изучение материала.
        </div>
        <div class="article-text" id="feature-2" style="display: none;">
          <b>Преподаватели подстраивают программу обучения по результатам и вопросам студентов.</b>
          <br><br>
          В ФМШ не используются фиксированные программы: преподаватели планируют занятия в зависимости от результатов предыдущих занятий и вопросов учащихся. Это делает обучение максимально комфортным и эффективным.
        </div>
        <div class="article-text" id="feature-3" style="display: none;">
          <b>Многие преподаватели уделяют время расширению кругозора учащихся.</b>
          <br><br>
          Обучение в ФМШ проходит в форме семинаров, на которых преподаватели выделяют время для обсуждения тем, косвенно связанных с основным материалом, но интересных для учащихся.
        </div>
        <div class="article-text" id="feature-4" style="display: none;">
          <b>В ФМШ особое внимание уделяется осознанию материала.</b>
          <br><br>
          В процессе обучения в ФМШ преподаватели стимулируют учащихся задавать любые вопросы по изучаемому материалу. Это помогает студентам понять, что формальные знания без учёта их ограничений могут приводить к неверным результатам. Учащиеся стремятся выяснять все детали и находить связь с ранее изученным материалом. Занятия часто продолжаются после формального времени окончания, так как в ФМШ традиционно работают «до последнего вопроса».
        </div>
        <div class="article-text" id="feature-5" style="display: none;">
          <b>Преподаватели показывают науку «в действии».</b>
          <br><br>
          Преподаватели ФМШ демонстрируют, как строится наука, какие проблемы она решает и какие вопросы остаются за её пределами. Это создаёт у учащихся целостное представление о науке как о системе взаимосвязанных знаний.
        </div>
        <div class="article-text" id="feature-6" style="display: none;">
          <b>Учащиеся ФМШ участвуют в различных форматах работы наравне с преподавателями.</b>
          <br><br>
          Учащиеся ФМШ проводят семинары для поступающих и оценивают их работу на вступительных испытаниях. Это помогает учащимся лучше понимать взаимодействие между участниками учебного процесса и помогает новым поступающим быстрее адаптироваться.
        </div>
      </div>
    </article>
    <hr>
    <article id="article-3">
      <div class="article-header text-align-center">История ФМШ</div>
      <div class="article-body-holder" id="timeline-article-body-holder">
        <div class="mobile-timeline">
          <div class="timeline-event-holder">
            <div class="event-date">1966</div>
            <button class="event-name" id="mobile-timeline-event-1" onclick="chooseFeature(1, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)"><b>Основание ФМШ МИЭМ Тарасовым Л. В.</b></button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-1">
            <div class="person-holder">
              <img src="./tarasov-lev-vasilyevich.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Тарасов Лев Васильевич</b>
                <br>
                К.ф.-м.н., профессор. Известный специалист по образовательным технологиям, популяризатор науки.
                <br>
                <br>
                Автор более 100 книг: пяти научных монографий по прикладной физике, трёх учебных пособий для высшей школы и более трёх десятков учебно-популярных книг для школьников, педагогов и студентов.
                <br>
                <br>
                В 1994 награжден знаком «Отличник народного просвещения» за разработку новой образовательной технологии «Экология и диалектика» и научное руководство педагогическим экспериментом по практическому внедрению технологии.
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">1970-1978</div>
            <button class="event-name" id="mobile-timeline-event-2" onclick="chooseFeature(2, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">Директором ФМШ МИЭМ является Родионов А.М.</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-2" style="display: none;">
            <div class="person-holder">
              <img src="./rodionov-alexander-mikhailovich-2.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <!-- <img src="./rodionov-alexander-mikhailovich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
              <div class="person-bio">
                <b>Родионов Александр Михайлович</b>
                <br>
                Д.т.н., к началу 1980-х годов Родионов А.М. защитил докторскую диссертацию и стал профессором, внеся значительный вклад в научную деятельность кафедры Кибернетики МИЭМ.
                <br>
                <br>
                Математик, специалист в области вычислительной математики, теории систем и теории управления, автор многих научных статей в этих разделах математики.
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">1978-1982</div>
            <button class="event-name" id="mobile-timeline-event-3" onclick="chooseFeature(3, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">Директором ФМШ МИЭМ является Волков Н.В.</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-3" style="display: none;">
            <div class="person-holder">
              <img src="./volkov-nikolay-vasilyevich.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Волков Николай Васильевич</b>
                <br>
                Д.т.н., окончил МИЭМ по специальности "прикладная математика", профессор. Автор более 30 научных трудов. 
                <br>
                <br>
                Был проректором по учебной и методической работе МГТУ "СТАНКИН".
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">1982-2012</div>
            <button class="event-name" id="mobile-timeline-event-4" onclick="chooseFeature(4, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">Директором ФМШ МИЭМ является Боголюбов Д.П.</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-4" style="display: none;">
            <div class="person-holder">
              <img src="./bogolyubov-dmitry-petrovich.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Боголюбов Дмитрий Петрович</b>
                <br>
                К.т.н.,
                научный руководитель ФМШ МИЭМ с 2012 по 2024 год. С 1980 по настоящее время преподает в различных учебных заведениях, включая МИЭМ, МГУ, РГГУ, МГАПИ, МИРЭА.
                <br>
                <br>
                Соавтор учебника по информатике, соучредитель и главный редактор международного журнала "Компьютеры в образовании".
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">2012</div>
            <button class="event-name" id="mobile-timeline-event-5" onclick="chooseFeature(5, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">Чернацкий С. Г. становится директором ФМШ МИЭМ</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-5" style="display: none;">
            <div class="person-holder">
              <img src="./chernatskiy-sergey-genrikhovich.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Чернацкий Сергей Генрихович</b>
                <br>
                Директор ФМШ МИЭМ с 2012 по настоящее время. Получил высшее образование в МГУ им. М.В. Ломоносова (факультет психологии) и МИЭМ (прикладная математика)
                <br>
                <br>
                Является генеральным директором ООО "Е-ПОС", имеет опыт работы в научно-исследовательской сфере (РИНКЦЭ), с 1990 года работает в сфере образования.
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">2022</div>
            <button class="event-name" id="mobile-timeline-event-6" onclick="chooseFeature(6, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">ФМШ выходит из ведомства МИЭМ ВШЭ</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-6" style="display: none;">
            <div class="person-holder">
              <img src="./building-near-fmsh.jpeg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Вид из окна МИЭМ</b>
                <br>
                <br>
                Физико-математическая школа FMSH.RU продолжает работу как самостоятельный проект.
                <br>
                <br>
                Нас поддерживают преподаватели и учащимиея, до этого момента, соответственно, работавшие и учившиеся в Вечерней физико-математической школе Московского института электроники и математики (ФМШ МИЭМ).
              </div>
            </div>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">2023</div>
            <button class="event-name" id="mobile-timeline-event-7" onclick="chooseFeature(7, 'mobile-timeline-event-', 'mobile-timeline-element-', 7, false)">Введение системы "непрерывного набора"</button>
          </div>
          <div class="timeline-element mobile-timeline-element" id="mobile-timeline-element-7" style="display: none;">
            <div class="person-holder">
              <img src="./half-a-century-fmsh.jpg" class="person-avatar" style="width: 50vw; max-width: 300px;">
              <div class="person-bio">
                <b>Непрерывный набор идёт непрерывно</b>
                <br>
                Теперь поступать к нам можно на протяжении всего семестра. Больше никаких дедлайнов, фиксированных сроков и прочих мешающих спокойной работе ограничений!
                <br>
                <br>
                Если хочется у нас учиться, то самостоятельно выбирайте время и не торопясь начинайте работать.
              </div>
            </div>
          </div>
        </div>
        <div class="timeline">
          <!-- <div class="timeline-event-holder">
            <div class="event-date">1966</div>
            <button class="event-name" id="timeline-event-1" onclick="chooseFeature(1, 'timeline-event-', 'timeline-element-', 7, false)"><b>Основание ФМШ МИЭМ Тарасовым Л. В.</b></button>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">1970-1978</div>
            <button class="event-name" id="timeline-event-2" onclick="chooseFeature(2, 'timeline-event-', 'timeline-element-', 7, false)">Директором ФМШ МИЭМ является Родионов А.М.</button>
          </div> -->
          <div class="timeline-event-holder">
            <div class="event-date">1966-1982</div>
            <button class="event-name" id="timeline-event-1" onclick="chooseFeature(1, 'timeline-event-', 'timeline-element-', 4, false)">Название периода</button>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">1982-2012</div>
            <button class="event-name" id="timeline-event-2" onclick="chooseFeature(2, 'timeline-event-', 'timeline-element-', 4, false)">Название периода</button>
          </div>
          <!-- <div class="timeline-event-holder">
            <div class="event-date">2012</div>
            <button class="event-name" id="timeline-event-5" onclick="chooseFeature(5, 'timeline-event-', 'timeline-element-', 7, false)">Чернацкий С. Г. становится директором ФМШ МИЭМ</button>
          </div> -->
          <div class="timeline-event-holder">
            <div class="event-date">2012-2022</div>
            <button class="event-name" id="timeline-event-3" onclick="chooseFeature(3, 'timeline-event-', 'timeline-element-', 4, false)">Название периода</button>
          </div>
          <div class="timeline-event-holder">
            <div class="event-date">2022-н.в.</div>
            <button class="event-name" id="timeline-event-4" onclick="chooseFeature(4, 'timeline-event-', 'timeline-element-', 4, false)">Название периода</button>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-1">
          <div class="person-holder">
            <!-- <img src="./tarasov-lev-vasilyevich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
            <div class="person-bio">
              <b>Тарасов Лев Васильевич</b>
              <br>
              К.ф.-м.н., профессор. Известный специалист по образовательным технологиям, популяризатор науки.
              <br>
              <br>
              Автор более 100 книг: пяти научных монографий по прикладной физике, трёх учебных пособий для высшей школы и более трёх десятков учебно-популярных книг для школьников, педагогов и студентов.
              <br>
              <br>
              В 1994 награжден знаком «Отличник народного просвещения» за разработку новой образовательной технологии «Экология и диалектика» и научное руководство педагогическим экспериментом по практическому внедрению технологии.
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-2" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./rodionov-alexander-mikhailovich-2.jpg" class="person-avatar" style="width: 35vw; max-width: 600px;"> -->
            <!-- <img src="./rodionov-alexander-mikhailovich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
            <div class="person-bio">
              <b>Родионов Александр Михайлович</b>
              <br>
              Д.т.н., к началу 1980-х годов Родионов А.М. защитил докторскую диссертацию и стал профессором, внеся значительный вклад в научную деятельность кафедры Кибернетики МИЭМ.
              <br>
              <br>
              Математик, специалист в области вычислительной математики, теории систем и теории управления, автор многих научных статей в этих разделах математики.
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-3" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./volkov-nikolay-vasilyevich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
            <div class="person-bio">
              <b>Волков Николай Васильевич</b>
              <br>
              Д.т.н., окончил МИЭМ по специальности "прикладная математика", профессор. Автор более 30 научных трудов. 
              <br>
              <br>
              Был проректором по учебной и методической работе МГТУ "СТАНКИН".
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-4" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./bogolyubov-dmitry-petrovich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
            <div class="person-bio">
              <b>Боголюбов Дмитрий Петрович</b>
              <br>
              К.т.н.,
              научный руководитель ФМШ МИЭМ с 2012 по 2024 год. С 1980 по настоящее время преподает в различных учебных заведениях, включая МИЭМ, МГУ, РГГУ, МГАПИ, МИРЭА.
              <br>
              <br>
              Соавтор учебника по информатике, соучредитель и главный редактор международного журнала "Компьютеры в образовании".
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-5" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./chernatskiy-sergey-genrikhovich.jpg" class="person-avatar" style="width: 20vw; max-width: 300px;"> -->
            <div class="person-bio">
              <b>Чернацкий Сергей Генрихович</b>
              <br>
              Директор ФМШ МИЭМ с 2012 по настоящее время. Получил высшее образование в МГУ им. М.В. Ломоносова (факультет психологии) и МИЭМ (прикладная математика)
              <br>
              <br>
              Является генеральным директором ООО "Е-ПОС", имеет опыт работы в научно-исследовательской сфере (РИНКЦЭ), с 1990 года работает в сфере образования.
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-6" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./building-near-fmsh.jpeg" class="person-avatar" style="width: 35vw; max-width: 600px;"> -->
            <div class="person-bio">
              <b>Вид из окна МИЭМ</b>
              <br>
              <br>
              Физико-математическая школа FMSH.RU продолжает работу как самостоятельный проект.
              <br>
              <br>
              Нас поддерживают преподаватели и учащимиея, до этого момента, соответственно, работавшие и учившиеся в Вечерней физико-математической школе Московского института электроники и математики (ФМШ МИЭМ).
            </div>
          </div>
        </div>
        <div class="timeline-element desktop-timeline-element" id="timeline-element-7" style="display: none;">
          <div class="person-holder">
            <!-- <img src="./half-a-century-fmsh.jpg" class="person-avatar" style="width: 35vw; max-width: 600px;"> -->
            <div class="person-bio">
              <b>Непрерывный набор идёт непрерывно</b>
              <br>
              Теперь поступать к нам можно на протяжении всего семестра. Больше никаких дедлайнов, фиксированных сроков и прочих мешающих спокойной работе ограничений!
              <br>
              <br>
              Если хочется у нас учиться, то самостоятельно выбирайте время и не торопясь начинайте работать.
            </div>
          </div>
        </div>
      </div>
    </article>
    <hr>
    <article id="article-4">
      <div class="article-body-holder" id="administration-and-contacts">
        <div class="article-header text-align-center" id="administration-header">Администрация</div>
        <!-- <div class="article-header text-align-center" id="contacts-header">Контакты</div> -->
        <div class="flex-row-space-evenly" id="administration-holder">
          <div class="person-holder">
            <img src="./about/grishkina-maria-petrovna.jpg" class="person-avatar" alt="Фотография преподавателя">
            <div class="person-bio">
              <a href="/teachers.php#grishkina-maria-petrovna">Гришкина Мария Петровна</a>
              <br>
              к.т.н.,
              зам. директора ФМШ МИЭМ
              с 2002 по 2024 год
            </div>
          </div>
          <div class="person-holder" id="chernatskiy-sergey-genrikhovich">
            <img src="./about/chernatskiy-sergey-genrikhovich.jpg" class="person-avatar" alt="Фотография преподавателя">
            <div class="person-bio">
              <a href="/teachers.php#chernatskiy-sergey-genrikhovich">Чернацкий Сергей Генрихович</a>
              <br>
              директор ФМШ МИЭМ с 2012 по 2024 год
            </div>
          </div>
          <div class="person-holder">
            <img src="./about/bogolyubov-dmitry-petrovich.jpg" class="person-avatar" alt="Фотография преподавателя">
            <div class="person-bio">
              <a href="/teachers.php#bogolyubov-dmitry-petrovich">Боголюбов Дмитрий Петрович</a>
              <br>
              к.т.н.,
              научный руководитель ФМШ МИЭМ с 2012 по 2024 год
            </div>
          </div>
        </div>
        <!-- <div id="contacts-holder">
          Телефон: <a href="#contacts-holder" id="contacts-page-phone-number">+7 (495) 580-69-28</a>
          <div id="contacts-page-email">
            E-mail: <a href="mailto:info@fmsh.ru">info@fmsh.ru</a>
          </div>
          <div id="contacts-page-telegram">
            Telegram: <a href="https://t.me/fmshru">@fmshru</a>
          </div>
        </div> -->
      </div>
    </article>
  </main>

  <?php include("./footer.php"); ?>
  <script src="./common-files/js/mobile-menu-setup.js"></script>
  <script src="./common-files/js/theme-setup.js"></script>
</body>
</html>