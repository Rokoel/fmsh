window.onload = function() {
    setTheme();
    document.getElementById("theme-switcher").addEventListener("click", switchTheme);

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

function setTheme() {
    var root = document.documentElement;
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
    }
    var white_color = "white";
    var dark_color = "#0E2954";
    var light_filter = "invert(13%) sepia(42%) saturate(3586%) hue-rotate(220deg) brightness(86%) contrast(127%)";
    var dark_filter = "invert(100%) sepia(5%) saturate(19%) hue-rotate(180deg) brightness(106%) contrast(105%)";
    if(localStorage.getItem('theme') == 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        return;
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
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