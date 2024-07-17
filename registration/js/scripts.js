window.onload = function() {
    setTheme();
    document.getElementById('region').addEventListener('change', function() {
        townLabel = document.getElementById('town-label');
        if(this.value.includes("Россия, Москва")) {
            townLabel.innerHTML = "<b>Ближайшие станции метро</b>";
            
        } else if(this.value.includes("Россия, Московская область")) {
            townLabel.innerHTML = "<b>Населенный пункт</b>";
        } else if(this.value.includes("Россия, другой регион")) {
            townLabel.innerHTML = "<b>Регион и населенный пункт</b>";
        } else if(this.value.includes("Другое государство")) {
            townLabel.innerHTML = "<b>Страна, регион и населенный пункт</b>";
        } else { /* If the text of the region options was edited, we have to fall back to something */
            townLabel.innerHTML = "<b>Страна, регион и населенный пункт</b> ";
            /* Yes, we can combine the last two cases, but we'll separate them for code redability
               and ease of edit in the future */
        }
    });
};

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
    var main_block = document.getElementById("main-block");

    if(localStorage.getItem('theme') == 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        main_block.style.backgroundColor = "var(--white)";
        main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
        return;
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        main_block.style.backgroundColor = "var(--blue)";
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