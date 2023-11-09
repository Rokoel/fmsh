window.onload = function() {
    setTheme();
    localStorage.setItem('menu', 'closed');
    document.getElementById("theme-switcher").addEventListener("click", switchTheme);
    document.getElementById("mobile-navbar").addEventListener("click", switchMenu);
    document.getElementById("main-page-redirector").addEventListener("click", () => {location.href = "https://fmsh.ru";});
    document.getElementById("email-mobile").addEventListener("click", () => {location.href = "mailto:info@fmsh.ru";});
    document.getElementById("telegram-mobile").addEventListener("click", () => {location.href = "https://t.me/fmshru";});
    document.getElementById("phone-mobile").addEventListener("click", copyPhoneNumber);

    var style = getComputedStyle(document.body);
    var header_height_str = style.getPropertyValue('--header-height');
    var header_height = Number(header_height_str.substring(0, header_height_str.length-3));
    document.getElementById('scroller-1').addEventListener('click', function(e) {
        window.scrollTo({
            top: window.innerHeight - header_height*16,
            behavior: "smooth"
        });
    });
};

async function copyPhoneNumber () {
    try {
        await navigator.clipboard.writeText("+74955806928");
        console.log('Номер телефона скопирован в буфер обмена!');
    } catch (err) {
        console.error('Не смогли скопировать телефон в буфер обмена из-за ошибки: ', err);
    }
    location.href = "tel:84955806928";
}

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

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}