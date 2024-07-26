window.onload = function() {
    setTheme();
    
    document.getElementById('region').addEventListener('change', function() {
        townLabel = document.getElementById('town-label');
        townInput = document.getElementById('town');
        if(this.value.includes("Россия, Москва")) {
            townLabel.innerHTML = "<b>Ближайшие станции метро</b>";
            town.placeholder = "м. Китай-город, м. Таганская";
        } else if(this.value.includes("Россия, Московская область")) {
            townLabel.innerHTML = "<b>Населенный пункт</b>";
            town.placeholder = "г. Серпухов";
        } else if(this.value.includes("Россия, другой регион")) {
            townLabel.innerHTML = "<b>Регион и населенный пункт</b>";
            town.placeholder = "Челябинская обл., г. Магнитогорск";
        } else if(this.value.includes("Другое государство")) {
            townLabel.innerHTML = "<b>Страна, регион и населенный пункт</b>";
            town.placeholder = "Казахстан, Акмолинская обл., г. Астана";
        } else { /* If the text of the region options was edited, we have to fall back to something */
            townLabel.innerHTML = "<b>Страна, регион и населенный пункт</b> ";
            town.placeholder = "Казахстан, Акмолинская обл., г. Астана";
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
    var placeholder_text_opacity_light = "0.3";
    var placeholder_text_opacity_dark = "0.7";

    if(localStorage.getItem('theme') == 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_dark);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_light);
        main_block.style.backgroundColor = "var(--white)";
        main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
        return;
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_light);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_dark);
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

function validateDate(date) { // could've named the function "valiDate" :)
    if (date.length == "dd.mm.yyyy".length) {
        if (date.indexOf('.') > -1) {
            let dateArray = date.split(".");
            if (dateArray.length != 3) {
                return "Неправильный формат даты";
            }
            let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    
            let dateObj = new Date(newDate); // trying to convert the date (JS does the validation for us)
    
            if (!isNaN(dateObj)) { // if the date is actually a date
                return "Дата введена верно";
            }
            return "Такой даты не существует";
        }
        return "Неправильный формат даты";
    }
    return "Дата имеет недостаточную длину";
}