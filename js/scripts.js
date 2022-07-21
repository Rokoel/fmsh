window.onload = function() {
    var theme_switcher = document.getElementById("theme");

    setTheme();
    theme_switcher.addEventListener("click", switchTheme);


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
        var root = document.documentElement;
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
};