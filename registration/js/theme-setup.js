window.addEventListener("storage", (e) => {
    if (e.key == 'theme') {
        setTheme();
    }
});

setTheme();

var themeSwitcher = document.getElementById("theme-switcher");
if (themeSwitcher != null && themeSwitcher != undefined) {
    themeSwitcher.addEventListener("click", switchTheme);
    themeSwitcher.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            let simulatedClickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            themeSwitcher.dispatchEvent(simulatedClickEvent);
        }
    });
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
    var header = document.getElementsByTagName("header")[0];
    var main_block = document.getElementById("main-block");
    var placeholder_text_opacity_light = "0.3";
    var placeholder_text_opacity_dark = "0.7";

    if(localStorage.getItem("theme") === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_dark);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_light);
        if (header != null && header != undefined) {
            header.style.backgroundColor = "var(--blue)";
            header.style.color = "var(--white)";
        }
        if (main_block != null && main_block != undefined) {
            main_block.style.backgroundColor = "var(--white)";
            main_block.style.color = "var(--dark-blue)";
            main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
        }
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_light);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_dark);
        if (header != null && header != undefined) {
            header.style.backgroundColor = "var(--white)";
            header.style.color = "var(--dark-blue)";
        }
        if (main_block != null && main_block != undefined) {
            main_block.style.backgroundColor = "var(--blue)";
            main_block.style.color = "var(--white)";
            main_block.style.backgroundImage = "url( './main_block_bg_light.svg' )";
        }
    }
}

/**
 * switchTheme() changes the current theme of the mobile menu.
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