<link rel="stylesheet" href="./registration/css/styles.css">

<script src="./registration/js/scripts.js"></script>
<!-- Main form -->
<div id="main-registration-block" class="hidden" style="height: 100vh;">
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
  <div class="screen-third" style="flex: auto">
    <div></div>
    <form id="main-registration-form" action method="POST" class="has-border form-holder" style="font-size: 80%;">
      <div class="top-form-row">
        <div style="padding: var(--proportional-x-small-padding); text-align: center; flex: 3">
          <b>Регистрация</b>
          <div class="progress-bar-container">
            <div class="progress-bar" id="main-registration-progress-bar-in-form"></div>
          </div>
        </div>
        <div>
          <button class="emoji-button" title="Очистить форму" onclick="clearForm('main-registration-form', ['main-registration-progress-bar', 'main-registration-progress-bar-in-form'], false)" type="reset" name="Кнопка очистить">
            <div class="vertical-align-center">
              <!-- Clear button icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="emoji cursor-pointer colorless" fill="none" viewBox="0 0 24 24" color="#000000"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </button>
          <button class="emoji-button" title="Закрыть форму" onclick="closeBlock('main-registration-block')" type="button" name="Кнопка закрыть форму">
            <div class="vertical-align-center">
              <!-- Clear button icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="emoji cursor-pointer colorless" fill="none" viewBox="0 0 24 24" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </button>
        </div>
      </div>
      <div class="form-body-holder" id="registration-form-holder">
        <div class="text-input-holder" id="surname-holder">
          <label class="form-label" for="surname"><b>Фамилия</b></label>
          <input id="surname" placeholder="Степанов" class="register-form-input highlight-left" type="text" name="surname">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="firstname-holder">
          <label class="form-label" for="firstname"><b>Имя</b></label>
          <input id="firstname" placeholder="Иван" class="register-form-input highlight-left" type="text" name="firstname">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="lastname-holder">
          <label class="form-label" for="lastname"><b>Отчество</b><span class="tooltip" tabindex="0" aria-describedby="lastname-tooltip-text">?<span id="lastname-tooltip-text" class="tooltip-text has-border">Введите отчество<br>или поставьте прочерк</span></span></label>
          <input id="lastname" placeholder="Алексеевич" class="register-form-input highlight-left" type="text" name="lastname">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="email-holder">
          <label class="form-label" for="email"><b>Адрес электронной почты или несколько адресов</b><span class="tooltip" tabindex="0" aria-describedby="emails-tooltip-text">?<span id="emails-tooltip-text" class="tooltip-text has-border">Нужно ввести как минимум один адрес, если адресов<br>больше одного, введите их через запятую с пробелом</span></span></label>
          <input id="email" class="register-form-input highlight-left temp" type="text" name="emails" placeholder="example@email.com, additional@email.com" autocomplete="email">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="birthday-holder">
          <label class="form-label" for="birthday"><b>Дата рождения</b></label>
          <input id="birthday" type="text" name="birthday" placeholder="ДД.ММ.ГГГГ" maxlength="10" class='register-form-input highlight-left'>
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="grade-holder">
          <label class="form-label" for="grade"><b>Класс обучения</b><span class="tooltip" tabindex="0" aria-describedby="grade-tooltip-text">?<span id="grade-tooltip-text" class="tooltip-text has-border">Введите класс, в котором вы учитесь на 2024/25 гг.</span></span></label>
          <input id="grade" class="register-form-input highlight-left" type="text" name="grade" placeholder="4 – 11" maxlength="2" min="4" max="11">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="school-holder">
          <label class="form-label" for="school"><b>Учебное заведение</b><span class="tooltip" tabindex="0" aria-describedby="school-tooltip-text">?<span id="school-tooltip-text" class="tooltip-text has-border">Если нет номера или названия, введите только то, что есть, или поставьте прочерк</span></span></label>
          <input id="school" class="register-form-input highlight-left" type="text" name="school" placeholder="Название школы и номер">
          <span class="error-msg"></span>
        </div>
        <div class="text-input-holder" id="region-holder">
          <label id="region-label" class="form-label" for="region"><b>Страна, регион, населенный пункт</b></label>
          <input id="region" class="register-form-input highlight-left" type="text" name="region" placeholder="Россия, Челябинская обл., г. Магнитогорск">
          <span class="error-msg"></span>
        </div>
        <div class="flex-row-center" id="capcha-holder">
          <div class="text-input-holder">
            <label id="capcha-label" class="form-label" for="capcha-input"><b>Введите текст с картинки</b></label>
            <input id="capcha-input" class="register-form-input highlight-left" type="text" name="capcha-input">
            <span class="error-msg"></span>
          </div>
          <div class="flex-column-center">
            <div></div>
            <img id="capcha-image" loading="lazy" alt="Капча" src="shpic.php?code=<?php echo md5(uniqid()); ?>">
            <div></div>
          </div>
        </div>
        <div class="text-input-holder" id="submit-form-holder">
          <button id="submit-main-form" type="submit" class="in-form-button">Зарегистрироваться</button>
        </div>
      </div>
    </form>
    <div></div>
  </div>
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
</div>

<!-- Event form -->
<div id="event-registration-block" class="hidden" style="height: 100vh;">
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
  <div class="screen-third" style="flex: auto">
    <div></div>
    <form id="event-registration-form" class="has-border form-holder hidden" style="font-size: 80%;">
      <div class="top-form-row">
        <div style="padding: var(--proportional-x-small-padding); text-align: center; width: fit-content;" id="event-registration-header">
        </div>
        <div>
          <button class="emoji-button" title="Очистить форму" onclick="clearForm('event-registration-form')" type="reset" name="Кнопка очистить">
            <div class="vertical-align-center">
              <!-- Clear button icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="emoji cursor-pointer colorless" fill="none" viewBox="0 0 24 24" color="#000000"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </button>
          <button class="emoji-button" title="Закрыть форму" onclick="closeBlock('event-registration-block')" type="button" name="Кнопка закрыть форму">
            <div class="vertical-align-center">
              <!-- Clear button icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="emoji cursor-pointer colorless" fill="none" viewBox="0 0 24 24" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </button>
        </div>
      </div>
      <p id="event-registration-text">
      </p>
      <div id="event-registration-form-holder">
        <div class="text-input-holder">
          <label class="form-label" for="event-email">Адрес электронной почты</label>
          <input id="event-email" class="register-form-input" type="text" name="email" placeholder="example@email.com" autocomplete="email">
          <span class="error-msg"></span>
        </div>
      </div>
      <div class="flex-row-center" id="capcha-holder">
        <div class="text-input-holder">
          <label id="capcha-label" class="form-label" for="capcha-input"><b>Введите текст с картинки</b></label>
          <input id="capcha-input" class="register-form-input highlight-left" type="text" name="capcha-input">
          <span class="error-msg"></span>
        </div>
        <div class="flex-column-center">
          <div></div>
          <img id="capcha-image" loading="lazy" alt="Капча" src="shpic.php?code=<?php echo md5(uniqid()); ?>">
          <div></div>
        </div>
      </div>
      <button id="submit-event-form" type="submit" class="in-form-button">Зарегистрироваться</button>
    </form>
    <div></div>
  </div>
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
</div>

<!-- End of registration block -->
<div id="end-registration-block" class="hidden" style="height: 100vh;">
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
  <div class="screen-third" style="flex: auto">
    <div></div>
    <div id="end-registration" class="has-border">
    <p id="registration-success-text">
    </p>
    <button type="button" class="in-form-button" onclick="closeBlock('end-registration-block')">Закрыть</button>
    </div>
    <div></div>
  </div>
  <div class="screen-third small-padding">
    <!-- This block is a spacing block -->
  </div>
</div>