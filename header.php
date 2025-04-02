<div id="header-replacer">
  <!-- This block is used for spacing (as the actual header is removed from page's flow) -->
</div>
<header id="header">
  <svg id="main-page-redirector" tabindex="0" aria-label="Переход на главную" role="button" class="logo logo-fill cursor-pointer colorless" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" alt="Главная">
    <path d="M 126.655 191.862 L 125.856 190.673 Q 124.646 191.062 124.042 192.026 Q 123.437 192.989 123.437 194.527 L 123.437 200.513 Q 123.437 201.435 123.652 202.194 Q 123.867 202.952 124.329 203.506 Q 124.79 204.059 125.538 204.357 Q 126.286 204.654 127.332 204.654 L 128.049 204.654 L 128.049 205.679 L 129.566 205.863 L 129.566 204.654 L 130.407 204.654 Q 131.76 204.654 132.611 204.141 Q 133.461 203.629 133.851 202.706 Q 134.24 201.784 134.24 200.513 L 134.24 194.67 Q 134.24 193.42 133.789 192.497 Q 133.338 191.575 132.498 191.073 Q 131.657 190.57 130.468 190.57 Q 129.833 190.57 129.382 190.765 Q 128.931 190.96 128.634 191.298 Q 128.336 191.636 128.193 192.067 Q 128.049 192.497 128.049 192.969 L 128.049 203.383 L 127.332 203.383 Q 126.573 203.383 126.04 203.065 Q 125.507 202.747 125.231 202.163 Q 124.954 201.579 124.954 200.841 L 124.954 194.527 Q 124.954 193.707 125.169 193.164 Q 125.384 192.62 125.764 192.303 Q 126.143 191.985 126.655 191.862 Z M 130.407 203.383 L 129.566 203.383 L 129.566 193.276 Q 129.566 192.907 129.669 192.631 Q 129.771 192.354 130.007 192.2 Q 130.243 192.046 130.632 192.046 Q 131.35 192.046 131.821 192.436 Q 132.293 192.825 132.529 193.471 Q 132.764 194.117 132.764 194.916 L 132.764 200.841 Q 132.764 201.579 132.498 202.163 Q 132.231 202.747 131.709 203.065 Q 131.186 203.383 130.407 203.383 Z" transform="matrix(13.681724, 0, 0, 12.94599, -1689.293725, -2309.327882)"/>
    <path style="fill: var(--blue);" d="M 137.254 190.796 L 135.716 190.796 L 135.716 205.146 L 137.254 205.146 L 137.254 195.306 L 140.513 205.146 L 141.907 205.146 L 145.208 195.306 L 145.208 205.146 L 146.725 205.146 L 146.725 190.796 L 145.208 190.796 L 141.19 202.542 Z" transform="matrix(13.681724, 0, 0, 12.94599, -1689.293725, -2309.327882)"/>
    <path d="M 158.348 190.796 L 158.348 203.608 L 154.986 203.608 L 154.986 190.796 L 153.428 190.796 L 153.428 203.608 L 150.066 203.608 L 150.066 190.796 L 148.508 190.796 L 148.508 205.146 L 159.906 205.146 L 159.906 190.796 Z" transform="matrix(13.681724, 0, 0, 12.94599, -1689.293725, -2309.327882)"/>
  </svg>
  <script> /* We place this script in the HTML file because it's related to the navigation bar */
    let simulateClickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    let mainPageRedirector = document.getElementById("main-page-redirector");
    mainPageRedirector.addEventListener("click", function() {
      window.location.href = "index.php";
    });
    mainPageRedirector.addEventListener("keydown", (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        mainPageRedirector.dispatchEvent(simulateClickEvent);
      }
  });
  </script>
  
  <nav id="desktop-navbar">
    <div class="dropdown vertical-align-center">
      <div class="dropbtn" tabindex="0" aria-label="Открыть выпадающий текст" role="button">
        <a tabindex="-1" aria-disabled="true">О нас</a>
        <div class="dropdown-content">
          <a href="about.php">Про ФМШ</a>
          <a href="teachers.php">Наши преподаватели</a>
        </div>
      </div>
    </div>
    <div class="dropdown vertical-align-center">
      <div class="dropbtn">
        <a href="calendar.php">Календарь событий</a>
      </div>
    </div>
    <div class="dropdown vertical-align-center">
      <div class="dropbtn">
        <a href="entrance.php">Поступающим</a>
      </div>
    </div>
    <div class="dropdown vertical-align-center">
      <div class="dropbtn">
        <a href="timetable.php">Расписание</a>
      </div>
    </div>
  </nav>
  <div class="horizontal-align-center" id="register-holder">
    <div id="register" onclick="openForm('main', this)" tabindex="0" aria-label="Открыть регистрацию" role="button">
      <a tabindex="-1" aria-disabled="true">Регистрация</a>
      <div class="progress-bar-container">
        <div class="progress-bar" id="main-registration-progress-bar"></div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" alt="Переключение темы" class="x-small-padding logo logo-stroke cursor-pointer colorless" id="theme-switcher" tabindex="0" aria-label="Переключатель темы" role="button" fill="none" viewBox="0 0 24 24" color="#000000"><path stroke="#000000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"></path></svg>
  </div>
</header>
<nav id="mobile-navbar">
  <!-- The mobile navbar is only shown on devices with appropriate screen sizes -->
  <div class="vertical-align-center" style="height: 100%;">
    <!-- Mobile menu icon SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" tabindex="0" aria-label="Меню навигации" role="button" class="emoji small-padding cursor-pointer colorless" fill="none" viewBox="0 0 24 24" color="#000000"><path stroke="#000000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18"></path></svg>
  </div>
  <div class="mobile-navbar-link">
    <a href="about.php">О ФМШ</a>
  </div>
  <div class="mobile-navbar-link">
    <a href="teachers.php">Преподаватели</a>
  </div>
  <div class="mobile-navbar-link">
    <a href="calendar.php">Календарь событий</a>
  </div>
  <div class="mobile-navbar-link">
    <a href="entrance.php">Поступающим</a>
  </div>
  <div class="mobile-navbar-link">
    <a href="timetable.php">Расписание</a>
  </div>
</nav>