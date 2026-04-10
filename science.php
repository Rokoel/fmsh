<!doctype html>
<html lang="ru">

<head>
    <title>ФМШ :: В гости к науке</title>

    <!-- General meta-tags -->
    <meta charset="utf-8">
    <meta name="description" content="Страница с информацией о проекте В гости к науке">
    <meta name="keywords"
        content="ФМШ, физико-математическая, физмат, школа, образование, дополнительное образование, дистант, дистанционное образование, математика, физика, информатика, В гости к науке">
    <meta content="width=device-width, initial-scale=1" name="viewport" />

    <!-- Robots' meta-tags -->
    <meta name="robots" content="index, follow">

    <!-- Resources -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./common-files/css/global-styles.css">
    <link rel="stylesheet" href="./common-files/css/animations.css">
    <link rel="stylesheet" href="./common-files/css/header-styles.css">
    <link rel="stylesheet" href="./common-files/css/footer-styles.css">
    <link rel="stylesheet" href="./science/css/styles.css">

    <script src="./science/js/scripts.js" defer></script>
</head>

<body>
    <?php include "./header.php"; ?>
    <?php include "./mobile-move-buttons.php"; ?>
    <?php include "./forms.php"; ?>

    <main class="page-container">

        <h3 class="page-title">В гости к науке</h3>
        <div class="text-description">
            <p class="table-explainer">
                Описание проекта на нескольких строчках
                <br>
                Добро пожаловать "В гости к науке"!
            </p>
        </div>
        <div class="science-container has-border">
            <table class="sciencetable">
                <thead>
                    <tr>
                        <th>Классы</th>
                        <th>Тематика</th>
                        <th>Форма проведения</th>
                        <th>Ведущий</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="science-row">
                        <td class="grade-number">6-9</td>
                        <td>
                            <div class="theme-name">Этноматематические этюды.<br>Цифры и числа (40-90 минут)
                            <button class="toggle-description" title="Показать описание">
                                <svg class="logo logo-stroke" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            </div>
                        </td>
                        <td>очная, дистанционная</td>
                        <td class="teacher-name"><a href="/teachers.php#chernatskiy-sergey-genrikhovich"
                                class="teacher-link dotted-underline">Сергей Генрихович<br>Чернацкий</a>
                        </td>
                    </tr>
                    <tr class="science-description-row" aria-hidden="true">
                        <td colspan="5" class="science-description">
                            <p>Вероятно, мы настолько свыклись с определёнными правилами записи чисел, что готовы считать их чуть ли не единственно возможными. Но на самом деле это всего лишь наша внутренняя установка, формирующаяся под мощным внешним воздействием на протяжении всей жизни. Если допустить, что любые правила являются лишь выражением чувства числа (number sense), опосредствованного используемым языком, то это даст возможность по-новому взглянуть как на способы записи чисел, так и на правила работы с ними. На занятии мы введём понятие узловых и алгоритмических записей чисел и в качестве примера рассмотрим ка́ктовикскую числовую систему, построенную с учётом особенностей инупиатского языка, которую около 30 лет назад придумали самые обычные школьники. А, может, и не ограничимся ей.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </main>

    <?php include("./footer.php"); ?>

    <script src="./common-files/js/mobile-menu-setup.js"></script>
    <script src="./common-files/js/theme-setup.js"></script>
</body>

</html>