/* These two arrays contain the words that are shown in the background of the main page. */
const SUBJECTS_ARR = ["Математика", "Физика", "Информатика"];
// const PRINCIPLES_ARR = ["Любопытство", "Уважение", "Свобода", "Смелость", "Упорство"];
const PRINCIPLES_ARR = ["любопытство", "уважение", "свобода", "смелость", "упорство", 'дискуссия', 'открытость', 'независимость', 'неравнодушие', 'профессионализм', 'обоснованность', 'понимание', 'благожелательность', 'честность', 'доброта', 'ответственность', 'интерес', 'сомнение', 'осторожность', 'поддержка', 'терпение']

window.onload = function() {
    setTheme();

    /* Setting up the mobile menu and the footer */
    localStorage.setItem('menu', 'closed');
    document.getElementById("theme-switcher").addEventListener("click", switchTheme);
    document.getElementById("mobile-navbar").addEventListener("click", switchMenu);
    document.getElementById("main-page-redirector").addEventListener("click", () => {location.href = "https://fmsh.ru";});
    document.getElementById("email-mobile").addEventListener("click", () => {location.href = "mailto:info@fmsh.ru";});
    document.getElementById("telegram-mobile").addEventListener("click", () => {location.href = "https://t.me/fmshru";});
    document.getElementById("phone-mobile").addEventListener("click", copyPhoneNumber);
};

/**
 * copyPhoneNumber() copies the phone number to the clipboard. It's
 * supposed to be called on mobile devices when a button is clicked.
 * It redirects to the default phone app if possible.
 */
async function copyPhoneNumber () {
    try {
        await navigator.clipboard.writeText("+74955806928");
        console.log('Номер телефона скопирован в буфер обмена!');
    } catch (err) {
        console.error('Не смогли скопировать телефон в буфер обмена из-за ошибки: ', err);
    }
    location.href = "tel:84955806928";
}

/**
 * setMenu() sets the mobile menu up, changing the classlists of
 * some elements. It's usually called from the switchMenu() function.
 */
function setMenu() {
    if(localStorage.getItem('menu') === null){
        localStorage.setItem('menu', 'closed');
    }
    var menu_items = document.getElementsByClassName("mobile-navbar-link");
    if(localStorage.getItem('menu') == 'closed'){
        for (let i = 0; i < menu_items.length; ++i){
            var menu_item = menu_items[i];
            menu_item.classList.add("appearing");
            menu_item.classList.remove("disappearing");
            menu_item.addEventListener("animationend", function(e) {
                menu_item.style.transform = "translateX(150%)";
            });
        }
        document.getElementById("menu-button").classList.remove("rotating-back");
        document.getElementById("menu-button").classList.add("rotating");
        return;
    }
    else {
        for (let i = 0; i < menu_items.length; ++i){
            var menu_item = menu_items[i];
            menu_item.classList.remove("appearing");
            menu_item.classList.add("disappearing");
            menu_item.addEventListener("animationend", function(e) {
                menu_item.style.transform = "translateX(0)";
            });
        }
        document.getElementById("menu-button").classList.remove("rotating");
        document.getElementById("menu-button").classList.add("rotating-back");
        return;
    }
}

/**
 * switchMenu() changes the current state of the mobile menu.
 * It uses localStorage to store the state.
 */
function switchMenu() {
    if(localStorage.getItem('menu') === null){
        localStorage.setItem('menu', 'closed');
    }
    if(localStorage.getItem('menu') == 'closed'){
        setMenu();
        localStorage.setItem('menu', 'opened');
        return;
    }
    else {
        setMenu();
        localStorage.setItem('menu', 'closed');
        return;
    }
}

/**
 * setTheme() sets up the current theme, changing the variables in
 * the css. It's usually called from the switchTheme() function.
 */
function setTheme() {
    var root = document.documentElement;
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
    }
    var white_color = "#ffffff";
    var dark_color = "#1d2458";
    var light_filter = "invert(13%) sepia(42%) saturate(3586%) hue-rotate(220deg) brightness(86%) contrast(127%)";
    var dark_filter = "invert(100%) sepia(5%) saturate(19%) hue-rotate(180deg) brightness(106%) contrast(105%)";
    var header = document.getElementById("header");
    var main_block = document.getElementById("main-block");

    if(localStorage.getItem('theme') == 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        header.style.backgroundColor = "var(--blue)";
        header.style.color = "var(--white)";
        main_block.style.backgroundColor = "var(--white)";
        main_block.style.color = "var(--dark-blue)";
        main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
        return;
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        header.style.backgroundColor = "var(--white)";
        header.style.color = "var(--dark-blue)";
        main_block.style.backgroundColor = "var(--blue)";
        main_block.style.color = "var(--white)";
        main_block.style.backgroundImage = "url( './main_block_bg_light.svg' )";
        return;
    }
}

/**
 * switchTheme() changes the current theme of the mobile menu.
 * It uses localStorage to store the theme.
 */
function switchTheme() {
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
    }
    if(localStorage.getItem('theme') == 'dark'){
        localStorage.setItem('theme', 'light');
        setTheme();
        return;
    }
    else {
        localStorage.setItem('theme', 'dark');
        setTheme();
        return;
    }
}