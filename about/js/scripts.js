var MENU_STATE = 'closed';

window.addEventListener("storage", (e) => {
    if (e.key == 'theme') {
        setTheme();
    }
});

window.onload = function() {
    setTheme();

    /* Setting up the mobile menu and the footer */
    document.getElementById("theme-switcher").addEventListener("click", switchTheme);
    document.getElementById("mobile-navbar").addEventListener("click", switchMenu);
    document.getElementById("main-page-redirector").addEventListener("click", () => {location.href = "https://fmsh.ru";});
    document.getElementById("email-mobile").addEventListener("click", () => {location.href = "mailto:info@fmsh.ru";});
    document.getElementById("telegram-mobile").addEventListener("click", () => {location.href = "https://t.me/fmshru";});
    document.getElementById("phone-mobile").addEventListener("click", copyPhoneNumber);
    document.getElementById("contacts-page-phone-number").addEventListener("click", copyPhoneNumber);
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
    var menu_items = document.getElementsByClassName("mobile-navbar-link");
    if(MENU_STATE === 'closed'){
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
    }
}

/**
 * switchMenu() changes the current state of the mobile menu.
 * It uses localStorage to store the state.
 */
function switchMenu() {
    if(MENU_STATE === 'closed'){
        setMenu();
        MENU_STATE = 'opened';
    }
    else {
        setMenu();
        MENU_STATE = 'closed';
    }
}

/**
 * setTheme() sets up the current theme, changing the variables in
 * the css. It's usually called from the switchTheme() function.
 */
function setTheme() {
    var root = document.documentElement;
    var white_color = "#ffffff";
    var dark_color = "#1d2458";
    var light_filter = "invert(13%) sepia(42%) saturate(3586%) hue-rotate(220deg) brightness(86%) contrast(127%)";
    var dark_filter = "invert(100%) sepia(5%) saturate(19%) hue-rotate(180deg) brightness(106%) contrast(105%)";
    var header = document.getElementById("header");

    if(localStorage.getItem('theme') === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        header.style.backgroundColor = "var(--blue)";
        header.style.color = "var(--white)";
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        header.style.backgroundColor = "var(--white)";
        header.style.color = "var(--dark-blue)";
    }
}

/*
 * switchTheme() changes the current theme of the website.
 * It uses localStorage to store the theme.
 */
function switchTheme() {
    if(localStorage.getItem("theme") === 'dark'){
        localStorage.setItem('theme', 'light');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }
    setTheme();
}

/**
 * chooseFeature() is a function that's usually called upon a click.
 * It shows the respective block of information, highlighting the pressed
 * option and hiding the rest of blocks.
 * @param {number} optionFeatureNumber Clicked option number (starting from 1)
 * @param {string} optionPrefix This menu's option prefix
 * @param {string} featurePrefix This block's feature prefix
 * @param {number} menuSize Size of the menu
 * @param {boolean} addEmptyLinkTag Flag, indicating whether the clicked button should also be surrounded by an a tag
 */
function chooseFeature(optionFeatureNumber, optionPrefix, featurePrefix, menuSize, addEmptyLinkTag=true) {
    var openingLinkTag = "<a>";
    var closingLinkTag = "</a>";
    if (addEmptyLinkTag === false) {
        openingLinkTag = "";
        closingLinkTag = "";
    }
    for (let i = 1; i < menuSize+1; ++i) {
        if (i != optionFeatureNumber) {
            let currentOption = document.getElementById(optionPrefix + i);
            currentOption.innerHTML = openingLinkTag + currentOption.innerText + closingLinkTag;

            let currentFeature = document.getElementById(featurePrefix + i);
            currentFeature.style.display = "none";
        }
    }
    
    let chosenOption = document.getElementById(optionPrefix + optionFeatureNumber);
    chosenOption.innerHTML = openingLinkTag + "<b>" + chosenOption.innerText + "</b>" + closingLinkTag;

    let chosenFeature = document.getElementById(featurePrefix + optionFeatureNumber);
    chosenFeature.style.display = "";
}