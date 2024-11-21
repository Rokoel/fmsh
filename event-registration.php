<!doctype html>
<html lang="ru">

<head>
  <title>ФМШ :: Регистрация на событие</title>

  <!-- General meta-tags -->
  <meta charset="utf-8">
  <meta name="description" content="Страница регистрации на событие сайта ФМШ">
  <meta name="keywords" content="ФМШ, физико-математическая, физмат, школа, образование, дополнительное образование, дистант, дистанционное образование, математика, физика, информатика">
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <!-- Robots' meta-tags -->
  <meta name="robots" content="noindex">

  <!-- Resources -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="./common-files/css/global-styles.css">
  <link rel="stylesheet" href="./common-files/css/animations.css">
  <link rel="stylesheet" href="./common-files/css/always-mobile-menu-styles.css">
  <link rel="stylesheet" href="./common-files/css/footer-styles.css">
  <link rel="stylesheet" href="./event-registration/css/styles.css">
  <script src="./event-registration/js/scripts.js"></script>
</head>

<body>
  <?php include("./always-mobile-menu.php"); ?>

  <div id="content">
    <div id="main-block" style="height: 100vh;">
      <div class="screen-third small-padding">
        <!-- This block is a spacing block -->
      </div>
      <div class="screen-third" style="flex: auto">
        <div></div>
        <form action method="POST" class="form-holder" style="font-size: 80%;">

          <div style="padding: var(--proportional-x-small-padding); text-align: center;">
            <h3>Регистрация на событие</h3>
          </div>
          <p>
            Для регистрации и получения параметров подключения к семинару из серии <b>"Поговорим о математике?"</b> укажите адрес электронной почты (один из адресов), с которым Вы регистрировались на нашем сайте (на указанный адрес придёт необходимая информация).
          </p>
          <div class="form-body-holder" id="registration-form-holder">
            <div class="text-input-holder" id="email-holder">
              <label class="form-label" for="email"><b>Адрес электронной почты</b><span class="tooltip" tabindex="0" aria-describedby="email-tooltip-text">?<span id="email-tooltip-text" class="tooltip-text has-border">Необходимо ввести ровно один адрес электронной почты,<br>который связан с вашим аккаунтом</span></span></label>
              <input id="email" class="register-form-input highlight-left temp" type="text" name="emails" placeholder="example@email.com" autocomplete="email">
              <span class="error-msg"></span>
            </div>
            <div class="flex-row-center" id="capcha-holder">
              <a href="javascript:window.history.back();" style="text-align: left; width: 30%; font-size: 80%;">Назад</a>
              <div class="text-input-holder">
                <label id="capcha-label" class="form-label" for="capcha-input"><b>Введите текст с картинки</b></label>
                <input id="capcha-input" class="register-form-input highlight-left" type="text" name="capcha-input">
                <span class="error-msg"></span>
              </div>
              <div class="flex-column-center">
                <div></div>
                <img id="capcha-image" src="shpic.php?code=<?php echo md5(uniqid()); ?>">
                <div></div>
              </div>
            </div>
            <div class="text-input-holder" id="submit-form-holder">
              <button id="submit-form" type="submit">Зарегистрироваться</button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
      <div class="screen-third small-padding">
        <!-- This block is a spacing block -->
      </div>
    </div>
  </div>
  <script src="./common-files/js/theme-setup.js"></script>
  <script src="./common-files/js/mobile-menu-setup.js"></script>
</body>
</html>