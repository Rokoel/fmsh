window.onload = function() {
    setTheme();
    document.getElementById("theme").addEventListener("click", switchTheme);
    
    cutElementByQuerySelector('.article-text');
    window.addEventListener('resize', (e) => {
        cutElementByQuerySelector('.article-text');
    });

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

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top
    };
}

function willElementBeFullyVisible(element) {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    var height_str = getComputedStyle(element).height;
    var height = height_str.substring(0, height_str.length - 2)
    if(getOffset(element).top + height > vh + getOffset(element.parentElement).top) {
        return false;
    }
    return true;
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Function that hides part of the element
function cutElement(element) {
    // Loop through every element inside our cuttable element
    element.querySelectorAll('*').forEach(element => {
        // If it is not going to be visible...
        if (!willElementBeFullyVisible(element)  && !element.classList.contains("show-more-button")) {
            // We hide it
            element.style.display = "none";
        }
    });
}

// Function that hides part of every query element and creates the button to show it
function cutElementByQuerySelector(queryString){
    // Getting elements which we want to cut
    var parents = document.querySelectorAll(queryString);
    // Cycling through them
    for(var i = 0; i < parents.length; i++){
        var was_part_hidden = false;
        // Going through each element contained in them
        parents[i].querySelectorAll('*').forEach(element => {
            // If the element isn't going to be visible once we scroll to it's parent
            if (!willElementBeFullyVisible(element)) {
                //  And if it's the upper-level element (not element inside element inside parent, but element inside parent)
                if(element.parentElement == parents[i] && !element.classList.contains("show-more-button")){
                    // We hide it
                    element.style.display = "none";
                    // And save it
                    was_part_hidden = true;
                }
            }
        });
        // If we did hide anything, we need to show a button that will be used for showing more of cut element
        if(was_part_hidden){
            // We create button element
            var button = document.createElement("button");
            button.innerHTML = "Показать еще";
            button.classList.add("show-more-button");
            button.id = String(i);
            // If button is clicked in the future
            button.addEventListener('click', (e) => {
                // And if it is a "show-more" button
                if(e.target.innerHTML == "Показать еще"){
                    // We go through every element inside our cutable element
                    document.querySelectorAll(queryString)[Number(e.target.id)].querySelectorAll('*').forEach(element => {
                        // And if it has been hidden, we show it
                        if(element.style.display == "none") {
                            element.style.display = "";
                        }
                    });
                    // We change the button type to be "show-less"
                    e.target.innerHTML = "Показать меньше";
                }
                // If it is a "show-less" button
                else {
                    // We cut the element the simple way
                    cutElement(e.target.parentElement);
                    // And change the button type
                    e.target.innerHTML = "Показать еще";
                }
            });
            // We add our newly-created button to the layout right after our cuttable element
            if(document.getElementById(Number(i))){
                document.getElementById(Number(i)).remove();
            }
            parents[i].after(button);
        }
    }
}

// TODO: refactor html, js and css code a little bit (mostly add comments), change styling