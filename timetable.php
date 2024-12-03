<!doctype html>
<html lang="ru">

<head>
    <title>ФМШ :: Учащимся</title>

    <!-- General meta-tags -->
    <meta charset="utf-8">
    <meta name="description" content="Страница с расписанием и другой информацией для обучающихся ФМШ">
    <meta name="keywords"
        content="ФМШ, физико-математическая, физмат, школа, образование, дополнительное образование, дистант, дистанционное образование, математика, физика, информатика">
    <meta content="width=device-width, initial-scale=1" name="viewport" />

    <!-- Robots' meta-tags -->
    <meta name="robots" content="index, follow">

    <!-- Resources -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./common-files/css/global-styles.css">
    <link rel="stylesheet" href="./common-files/css/animations.css">
    <link rel="stylesheet" href="./common-files/css/header-styles.css">
    <link rel="stylesheet" href="./common-files/css/footer-styles.css">
    <link rel="stylesheet" href="./timetable/css/styles.css">
    <script src="./timetable/js/scripts.js"></script>
</head>

<body>
    <?php include("./header.php"); ?>
    <main class="page-container">

        <h3 class="page-title">Расписание занятий</h3>

        <button class="filters-toggle has-border">
            <span>Фильтры</span>
            <svg class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="2" fill="none"
                xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path
                    d="M3.99961 3H19.9997C20.552 3 20.9997 3.44764 20.9997 3.99987L20.9999 5.58569C21 5.85097 20.8946 6.10538 20.707 6.29295L14.2925 12.7071C14.105 12.8946 13.9996 13.149 13.9996 13.4142L13.9996 19.7192C13.9996 20.3698 13.3882 20.8472 12.7571 20.6894L10.7571 20.1894C10.3119 20.0781 9.99961 19.6781 9.99961 19.2192L9.99961 13.4142C9.99961 13.149 9.89425 12.8946 9.70672 12.7071L3.2925 6.29289C3.10496 6.10536 2.99961 5.851 2.99961 5.58579V4C2.99961 3.44772 3.44732 3 3.99961 3Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

        <div class="filters-container has-border">
            <div class="text-input-holder">
                <label class="filter-label" for="gradeFilter">Класс</label>
                <input type="text" id="gradeFilter" class="register-form-input highlight-left" placeholder="4 – 11"
                    maxlength="2">
            </div>
            <div class="text-input-holder">
                <label class="filter-label" for="subjectFilter">Тематика</label>
                <select id="subjectFilter" class="register-form-input highlight-left select-css">
                    <option value="">Все</option>
                    <option value="Математика">Математика</option>
                    <option value="Физика">Физика</option>
                    <option value="Информатика">Информатика</option>
                </select>
            </div>
        </div>

        <div class="timetable-container has-border">
            <table class="timetable">
                <thead>
                    <tr>
                        <th>Группа</th>
                        <th>Классы</th>
                        <th>Тематика</th>
                        <th>Даты занятий<br>(по МСК)</th>
                        <th>Преподаватель</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="course-row course-full-semester" data-grades="6,7" data-group="М421 M421"
                        data-subject="Математика">
                        <td><a href="/M202421G.htm" class="group-link dotted-underline" target="_blank">М421</a></td>
                        <td class="grade-number">6, 7</td>
                        <td class="theme-name">Математика</td>
                        <td>вторник, 19:30-21:00<br>12 занятий<br>с 1 октября по 17 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#chernatskiy-sergey-genrikhovich"
                                class="teacher-link dotted-underline" target="_blank">Сергей Генрихович<br>Чернацкий</a>
                        </td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="8,9" data-group="М422 M422"
                        data-subject="Математика">
                        <td><a href="/M202422G.htm" class="group-link dotted-underline" target="_blank">М422</a></td>
                        <td class="grade-number">8, 9</td>
                        <td class="theme-name">Математика</td>
                        <td>пятница, 18:00-20:00<br>12 занятий<br>с 4 октября по 20 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#ilyukhin-denis-olegovich"
                                class="teacher-link dotted-underline" target="_blank">Денис Олегович<br>Илюхин</a></td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="9,10" data-group="М423 M423"
                        data-subject="Математика">
                        <td><a href="/M202423G.htm" class="group-link dotted-underline" target="_blank">М423</a></td>
                        <td class="grade-number">9, 10</td>
                        <td>
                            <div class=theme-name>
                                Множества и комбинаторика
                                <button class="toggle-description" title="Показать описание">
                                    <svg class="logo" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>четверг, 18:30-20:00<br>12 занятий<br>с 3 октября по 19 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#bogolyubov-dmitry-petrovich"
                                class="teacher-link dotted-underline" target="_blank">Дмитрий Петрович<br>Боголюбов</a>
                        </td>
                    </tr>
                    <tr class="course-description-row" aria-hidden="true">
                        <td colspan="5" class="course-description">
                            <p>Несмотря на то, что данный курс относится к математическим, рассматриваемые в нём вопросы
                                являются основой для изучения различных разделов информатики: теории алгоритмов, языков
                                программирования, баз данных и знаний, криптографии, искусственного интеллекта.</p>
                            <p>В этом семестре мы рассмотрим следующие темы:</p>
                            <ol>
                                <li>Логический язык математики. Как мы рассуждаем.</li>
                                <li>Теория множеств, операции над множествами.</li>
                                <li>Соответствия, отношения и функции. Мощность множеств.</li>
                                <li>Комбинаторика: от простых задач к сложным.</li>
                            </ol>
                            <p>Курс предусматривает обязательное выполнение домашних заданий.</p>
                            <p>Преподаватель: Дмитрий Петрович Боголюбов</p>
                        </td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="9,10,11" data-group="М424 M424"
                        data-subject="Математика">
                        <td><a href="/M202424G.htm" class="group-link dotted-underline" target="_blank">М424</a></td>
                        <td class="grade-number">9, 10, 11</td>
                        <td>
                            <div class="theme-name">
                                Пара-пара-параметры
                                <button class="toggle-description" title="Показать описание">
                                    <svg class="logo" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>понедельник, 19:00-21:00<br>12 занятий<br>с 7 октября по 23 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#bogolyubov-dmitry-petrovich"
                                class="teacher-link dotted-underline" target="_blank">Дмитрий Петрович<br>Боголюбов</a>
                        </td>
                    </tr>
                    <tr class="course-description-row" aria-hidden="true">
                        <td colspan="5" class="course-description">
                            <p>Цель этого курса – снять страх и неуверенность многих из вас при виде задач с
                                параметрами.</p>
                            <p><b>Что будет.</b> Мы освоим технику эквивалентных схем решения уравнений и неравенств,
                                без которой очень трудно, а иногда и невозможно решать уравнения и неравенства с
                                параметрами. Рассмотрим, как решение задачи с параметрами представить графически и
                                правильно записать ответ. Познакомимся с вариантами метода областей для решения данных
                                задач. Подробно разберем задачи расположения корней квадратного трёхчлена. Рассмотрим
                                следующие виды задач с параметрами: решить уравнение (неравенство, систему), при каких
                                значениях параметра задача имеет решения, найти количество решений в зависимости от
                                значения параметра, исследовать уравнения (неравенства) на эвивалентность. Посмотрим
                                "страшные" с виду задачи с несколькими параметрами.</p>
                            <p><b>Чего не будет.</b> Мы не будем разбирать егэшные задачи с параметрами, а также
                                тригонометрические и логарифмические уравнения и неравенства. Это другая сказка.</p>
                        </td>
                    </tr>

                    <tr class="course-row course-partial-semester" data-grades="10,11" data-group="М425 M425"
                        data-subject="Математика">
                        <td><a href="/M202425G.htm" class="group-link dotted-underline" target="_blank">М425</a></td>
                        <td class="grade-number">10, 11</td>
                        <td>
                            <div class="theme-name">
                                Вычисления с погрешностями
                                <button class="toggle-description" title="Показать описание">
                                    <svg class="logo-white" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>суббота, 19:00-20:30<br>8 занятий<br>с 5 октября по 16 ноября, 30 ноября</td>
                        <td class="teacher-name"><a href="/teachers.php#dvorkin-vladimir-vitalievich"
                                class="teacher-link dotted-underline" target="_blank">Владимир Витальевич<br>Дворкин</a>
                        </td>
                    </tr>
                    <tr class="course-description-row" aria-hidden="true">
                        <td colspan="5" class="course-description">
                            <p>В пределах самой математики все вычисления могут быть выполнены "точно", поэтому введение
                                каких-либо погрешностей излишне. Однако представители других наук, которые используют
                                математику как инструмент, часто хотят видеть числовые результаты записанными
                                исключительно в виде последовательности цифр. Но многие числа могут записываться лишь с
                                помощью бесконечного количества цифр, а это уже невозможно технически. Чтобы частично
                                решить описанную проблему, приходится вводить дополнительные понятия, позволяющие
                                оценивать, насколько результат, записываемый с помощью конечного количества цифр,
                                отличается от того, который должен получиться в идеале. Важно помнить и о том, что с
                                точки зрения математики результаты любых измерений в реальном мире – это не конкретные
                                значения, а лишь принадлежащие некоторому диапазону.</p>
                            <p>На занятиях поговорим о том, что такое относительная и абсолютная погрешности, как они
                                зависят от того, что именно и как мы вычисляем; может ли так получиться, что некоторые
                                вычисления вообще окажутся бессмысленными, поскольку погрешности поглотят содержательный
                                результат.</p>
                            <p>Дополнительно попробуем ввести понятие производной и посмотреть, как связанное с ней
                                понятие дифференциала предоставляет нам новые инструменты для оценки точности
                                производимых вычислений.</p>
                        </td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="9,10" data-group="Ф421 F421"
                        data-subject="Физика">
                        <td><a href="/F202421G.htm" class="group-link dotted-underline" target="_blank">Ф421</a></td>
                        <td class="grade-number">9, 10</td>
                        <td>
                            <div class="theme-name">
                                Физика
                            </div>
                        </td>
                        <td>воскресенье, 12:00-15:15<br>12 занятий<br>с 6 октября по 22 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#ashkinazi-leonid-alexandrovich"
                                class="teacher-link dotted-underline" target="_blank">Леонид
                                Александрович<br>Ашкинази</a></td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="10,11" data-group="Ф422 F422"
                        data-subject="Физика">
                        <td><a href="/F202422G.htm" class="group-link dotted-underline" target="_blank">Ф422</a></td>
                        <td class="grade-number">10, 11</td>
                        <td>
                            <div class="theme-name">
                                Физика
                            </div>
                        </td>
                        <td>воскресенье, 17:00-20:15<br>12 занятий<br>с 6 октября по 22 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#ashkinazi-leonid-alexandrovich"
                                class="teacher-link dotted-underline" target="_blank">Леонид
                                Александрович<br>Ашкинази</a></td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="8,9,10" data-group="И421 I421"
                        data-subject="Информатика">
                        <td><a href="/I202421G.htm" class="group-link dotted-underline" target="_blank">И421</a></td>
                        <td class="grade-number">8, 9, 10</td>
                        <td>
                            <div class="theme-name">
                                Работа с памятью и другие особенности программирования на языке Си
                                <button class="toggle-description" title="Показать описание">
                                    <svg class="logo" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>среда, 17:15-20:15<br>12 занятий<br>с 2 октября по 18 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#chernatskiy-sergey-genrikhovich"
                                class="teacher-link dotted-underline" target="_blank">Сергей Генрихович<br>Чернацкий</a>
                        </td>
                    </tr>
                    <tr class="course-description-row" aria-hidden="true">
                        <td colspan="5" class="course-description">
                            <p>При изучении программирования нечасто обращают внимание на то, как именно компьютер
                                размещает в памяти используемые данные. Это, в свою очередь, не даёт возможность понять,
                                насколько эффективно работает программа с точки зрения распределения памяти. В рамках
                                нашего курса мы постараемся с этим разобраться.</p>
                            <p>Ещё один важный вопрос: насколько корректно конструкции языка, изучаемые в рамках теории,
                                реализуются на практике. Оказывается, есть ситуации, в которых программа работает совсем
                                не так, как предполагается в теории. И хотя обычно это остаётся незамеченным, без
                                понимания соотношения теории и практики невозможно получить полное представление о том,
                                как работает то, что мы написали.</p>
                            <p>Третий вопрос, который рассмотрим в рамках курса, связан с тем, что одна и та же
                                программа может по-разному исполняться и выводить различные результаты, если она
                                обработана различными компиляторами. От чего зависит, насколько результаты программы
                                будут соответствовать нашим ожиданиям, и какие конструкции языка являются наиболее
                                неоднозначными для компиляторов – обсудим на наших занятиях.</p>
                        </td>
                    </tr>

                    <tr class="course-row course-full-semester" data-grades="10, 11" data-group="И422 I422"
                        data-subject="Информатика">
                        <td><a href="/I202422G.htm" class="group-link dotted-underline" target="_blank">И422</a></td>
                        <td class="grade-number">8, 9, 10</td>
                        <td>
                            <div class="theme-name">
                                Алгоритмизация и программирование
                                <button class="toggle-description" title="Показать описание">
                                    <svg class="logo" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>вторник, 17:00-19:15<br>12 занятий<br>с 1 октября по 17 декабря</td>
                        <td class="teacher-name"><a href="/teachers.php#grishkina-maria-petrovna"
                                class="teacher-link dotted-underline" target="_blank">Мария Петровна<br>Гришкина</a>
                        </td>
                    </tr>
                    <tr class="course-description-row" aria-hidden="true">
                        <td colspan="5" class="course-description">
                            <p>Познакомимся с элементами процедурного программирования, которые используются для
                                реализации алгоритмических конструкций. Поработаем с основными видами алгоритмов:
                                простая последовательность операторов, ветвление, циклы. Затронем вопросы эффективности
                                алгоритмов. Будем не только решать задачи, но и пытаться найти оптимальный путь к
                                получению ответа.</p>
                            <p><i>Инструменты:</i> решать задачи можно будет на любом языке программирования,
                                позволяющем работать в рамках процедурной парадигмы. Основной язык при объяснении
                                материала Python.</p>
                            <p><i>Требования к учащимся:</i> базовые знания математики.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="above-info-container">
            <p class="table-explainer">Чтобы посмотреть список студентов какой-либо группы, можете найти ее в списке с
                помощью фильтров и нажать на название группы в левой колонке.</p>
            <div class="color-explainer has-border">
                <li><span class="no-user-select color-example course-full-semester">____</span> - занятия,
                    продолжающиеся в течение всего семестра; зачёт по ним ставится в конце семестра</li>
                <li><span class="no-user-select color-example course-full-semester-blocks">____</span> - занятия,
                    состоящие из нескольких блоков, в совокупности покрывающих весь семестр; зачёт может выставляться по
                    каждому блоку отдельно либо в конце семестра по результатам работы на протяжении всех блоков</li>
                <li><span class="no-user-select color-example course-partial-semester">____</span> - занятия, состоящие
                    из одного блока, не покрывающего весь семестр; зачёт ставится по результатам работы в этом блоке
                </li>
                <li><span class="no-user-select color-example course-partial-semester-blocks">____</span> - занятия,
                    состоящие из нескольких блоков, не покрывающих весь семестр; зачёт может выставляться по каждому
                    блоку отдельно либо в конце последнего блока</li>
            </div>
        </div>

    </main>
    <?php include("./footer.php"); ?>

    <script src="./common-files/js/mobile-menu-setup.js"></script>
    <script src="./common-files/js/theme-setup.js"></script>
</body>

</html>