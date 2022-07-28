window.onload = function() {
    setTheme();
    document.getElementById("theme").addEventListener("click", switchTheme);

    hideElementByButtonClick(document.getElementById("visible_block-1"), document.getElementById("show-1"));
    hideElementByButtonClick(document.getElementById("visible_block-2"), document.getElementById("show-2"));

    var style = getComputedStyle(document.body);

    var header_height_str = style.getPropertyValue('--header-height');
    var header_height = Number(header_height_str.substring(0, header_height_str.length-2));

    document.getElementById('scroller-1').addEventListener('click', function(e) {
        window.scrollTo({
            top: window.innerHeight - header_height,
            behavior: "smooth"
        });
    });
};

function setTheme() {
    var root = document.documentElement;
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
    }
    if(localStorage.getItem('theme') == 'dark'){
        console.log('dark');
        root.style.setProperty('--dark-blue', "white");
        root.style.setProperty('--white', "#000b5e");
        root.style.setProperty('--theme-emoji', " invert(100%) sepia(5%) saturate(19%) hue-rotate(180deg) brightness(106%) contrast(105%)"); 
        document.getElementById('light-themed-logo').style.display = "none";
        document.getElementById('dark-themed-logo').style.display = "block";
        return;
    }
    else {
        console.log('light');
        root.style.setProperty('--white', "white");
        root.style.setProperty('--dark-blue', "#000b5e");
        root.style.setProperty('--theme-emoji', "invert(13%) sepia(42%) saturate(3586%) hue-rotate(220deg) brightness(86%) contrast(127%)");
        document.getElementById('dark-themed-logo').style.display = "none";
        document.getElementById('light-themed-logo').style.display = "block";
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

function hideElementByButtonClick(element, button) {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "Развернуть") {
            element.style.display = "";
            e.target.innerHTML = "Свернуть";
        }
        else {
            if(e.target.innerHTML == "Свернуть") {
                element.style.display = "none";
                e.target.innerHTML = "Развернуть";
            }
        }
    });
}