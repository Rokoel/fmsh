if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("theme") === null) {
    localStorage.setItem('theme', 'dark');
    console.log("theme set to dark because of user's OS preference");
}

window.addEventListener("storage", (e) => {
    if (e.key == 'theme') {
        console.log("changed the theme from event listener to " + localStorage.getItem("theme"));
        setTheme();
    }
});

console.log("changed the theme" + localStorage.getItem("theme"));
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
    console.log("Current theme:", localStorage.getItem("theme"));
    var root = document.documentElement;
    var white_color = "#e5e5e5";
    var dark_color = "#1d2458";
    var lighter_blue_color = "#75BFFF";
    var blue_color = "#2C74B3";
    var light_filter = "invert(13%) sepia(42%) saturate(3586%) hue-rotate(220deg) brightness(86%) contrast(127%)";
    var dark_filter = "invert(100%) sepia(5%) saturate(19%) hue-rotate(180deg) brightness(106%) contrast(105%)";
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];
    var dark_theme_switcher_svg = '<path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>';
    var light_theme_switcher_svg = '<path stroke="#000000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"></path>';
    var main_block = document.getElementById("main-block");
    var placeholder_text_opacity_light = "0.3";
    var placeholder_text_opacity_dark = "0.7";

    if(localStorage.getItem("theme") === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--blue', lighter_blue_color);
        root.style.setProperty('--lighter-blue', blue_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_dark);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_light);
        if (header != null && header != undefined) {
            header.style.backgroundColor = blue_color;
            header.style.color = "var(--white)";
        }
        if (footer != null && footer != undefined) {
            footer.style.backgroundColor = blue_color;
        }
        if (main_block != null && main_block != undefined) {
            main_block.style.backgroundColor = "var(--white)";
            main_block.style.color = "var(--dark-blue)";
            main_block.style.backgroundImage = "url( './index/main_block_bg_dark.svg' )";    
        }
        if (document.getElementById("theme-switcher") != null && document.getElementById("theme-switcher") != undefined) {
            document.getElementById("theme-switcher").innerHTML = dark_theme_switcher_svg;
        }
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--blue', blue_color);
        root.style.setProperty('--lighter-blue', lighter_blue_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_light);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_dark);
        if (header != null && header != undefined) {
            header.style.backgroundColor = "var(--white)";
            header.style.color = "var(--dark-blue)";
        }
        if (footer != null && footer != undefined) {
            footer.style.backgroundColor = "var(--blue)";
        }
        if (main_block != null && main_block != undefined) {
            main_block.style.backgroundColor = "var(--blue)";
            main_block.style.color = "var(--white)";
            main_block.style.backgroundImage = "url( './index/main_block_bg_light.svg' )";
        }
        if (document.getElementById("theme-switcher") != null && document.getElementById("theme-switcher") != undefined) {
            document.getElementById("theme-switcher").innerHTML = light_theme_switcher_svg;
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