/* These two arrays contain the words that are shown in the background of the main page. */
const SUBJECTS_ARR = ["Математика", "Физика", "Информатика"];
// const PRINCIPLES_ARR = ["Любопытство", "Уважение", "Свобода", "Смелость", "Упорство"];
const PRINCIPLES_ARR = ["любопытство", "уважение", "свобода", "смелость", "упорство", 'дискуссия', 'открытость', 'независимость', 'неравнодушие', 'профессионализм', 'обоснованность', 'понимание', 'благожелательность', 'честность', 'доброта', 'ответственность', 'интерес', 'сомнение', 'осторожность', 'поддержка', 'терпение']

var MENU_STATE = 'closed';

window.addEventListener("storage", (e) => {
    console.log(e.key + " was changed in the other tab. It changed from " + e.oldValue + " to " + e.newValue);
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

    /* Setting up the scroller so that it scrolls to the news *exactly* */
    var bodyStyle = getComputedStyle(document.body);
    var header_height_str = bodyStyle.getPropertyValue('--header-height');
    var header_height = Number(header_height_str.substring(0, header_height_str.length-3));
    document.getElementById('scroller-1').addEventListener('click', function(e) {
        window.scrollTo({
            top: window.innerHeight - header_height*16,
            behavior: "smooth"
        });
    });

    /* Placing words from arrays to the background randomly and setting the parallax effect up */
    placeElements();
    document.getElementById("main-block").addEventListener("mousemove", parallax);
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
    var main_block = document.getElementById("main-block");

    if(localStorage.getItem("theme") === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        header.style.backgroundColor = "var(--blue)";
        header.style.color = "var(--white)";
        main_block.style.backgroundColor = "var(--white)";
        main_block.style.color = "var(--dark-blue)";
        main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
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

/**
 * removeElementsByClass(className) removes all the elements that have className
 * as one of their css classes.
 * @param  {string} className a string representing the class of the elements to be removed.
 */
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/**
 * getRandomAndRemoveIt(arr) gets a random element from the array arr and removes it.
 * @param  {any []} arr Array to apply the function to.
 * @returns {any} A random element from the array arr.
 */
function getRandomAndRemoveIt(arr) {
    rIndex = Math.floor((Math.random()*arr.length));
    rEl = arr[rIndex];
    arr.splice(rIndex, 1);
    return rEl;
}

/**
 * placeElements() places elements from the SUBJECTS_ARR and the PRINCIPLES_ARR
 * to the main page, choosing elements randomly from both arrays.
 */
function placeElements() {
    subjects_div = document.getElementById("subjects");
    principles_div = document.getElementById("principles");

    subject = document.createElement("div");
    subject.classList.add("floating-word");
    subject.innerHTML = getRandomAndRemoveIt(SUBJECTS_ARR);
    subject.style.top = "var(--header-height)";
    subject.style.left = "calc(var(--header-height))";
    let rotation_value = 'rotate(-20deg)';
    subject.style.transform = rotation_value;
    subject.setAttribute("rotation_value", rotation_value);

    subject2 = document.createElement("div");
    subject2.classList.add("floating-word");
    subject2.innerHTML = getRandomAndRemoveIt(SUBJECTS_ARR);
    subject2.style.top = "calc(var(--header-height) * 4)";
    subject2.style.right = "calc(-100vw + var(--header-height))";
    let rotation_value2 = 'rotate(20deg)';
    subject2.style.transform = rotation_value2;
    subject2.setAttribute("rotation_value", rotation_value2);

    subject3 = document.createElement("div");
    subject3.classList.add("floating-word");
    subject3.innerHTML = getRandomAndRemoveIt(SUBJECTS_ARR);
    subject3.style.bottom = "calc(-100vh + var(--header-height) * 3.5)";
    subject3.style.left = "calc(var(--header-height) * 2)";
    let rotation_value3 = 'rotate(20deg)';
    subject3.style.transform = rotation_value3;
    subject3.setAttribute("rotation_value", rotation_value3);

    subjects_div.append(subject);
    subjects_div.append(subject2);
    subjects_div.append(subject3);

    principle = document.createElement("div");
    principle.classList.add("floating-word");
    principle.innerHTML = getRandomAndRemoveIt(PRINCIPLES_ARR);
    principle.style.bottom = "calc(-50vh + var(--header-height))";
    principle.style.left = "calc(var(--header-height) / 2)";
    let rotation_value4 = 'rotate(5deg)';
    principle.style.transform = rotation_value4;
    principle.setAttribute("rotation_value", rotation_value4);

    principle2 = document.createElement("div");
    principle2.classList.add("floating-word");
    principle2.innerHTML = getRandomAndRemoveIt(PRINCIPLES_ARR);
    principle2.style.top = "calc(var(--header-height) * 1.2)";
    principle2.style.right = "calc(-100vw + var(--header-height))";
    let rotation_value5 = 'rotate(-30deg)';
    principle2.style.transform = rotation_value5;
    principle2.setAttribute("rotation_value", rotation_value5);

    principle3 = document.createElement("div");
    principle3.classList.add("floating-word");
    principle3.innerHTML = getRandomAndRemoveIt(PRINCIPLES_ARR);
    principle3.style.bottom = "calc(-100vh + 2 * var(--header-height))";
    principle3.style.left = "calc(var(--header-height) / 0.8)";
    let rotation_value6 = 'rotate(-20deg)';
    principle3.style.transform = rotation_value6;
    principle3.setAttribute("rotation_value", rotation_value6);

    principle4 = document.createElement("div");
    principle4.classList.add("floating-word");
    principle4.innerHTML = getRandomAndRemoveIt(PRINCIPLES_ARR);
    principle4.style.bottom = "calc(-100vh + 2 * var(--header-height))";
    principle4.style.right = "calc(-100vw + var(--header-height) * 4.5)";
    let rotation_value7 = 'rotate(10deg)';
    principle4.style.transform = rotation_value7;
    principle4.setAttribute("rotation_value", rotation_value7);

    principle5 = document.createElement("div");
    principle5.classList.add("floating-word");
    principle5.innerHTML = getRandomAndRemoveIt(PRINCIPLES_ARR);
    principle5.style.bottom = "calc(-100vh + 3.5 * var(--header-height))";
    principle5.style.right = "calc(-100vw + 2 * var(--header-height))";
    let rotation_value8 = 'rotate(-30deg)';
    principle5.style.transform = rotation_value8;
    principle5.setAttribute("rotation_value", rotation_value8);

    principles_div.append(principle);
    principles_div.append(principle2);
    principles_div.append(principle3);
    principles_div.append(principle4);
    principles_div.append(principle5);
}

/**
 * getOffset() calculates the position of a given HTML element
 * relative to the entire document.
 * @param  {HTMLElement} element The element to find the offset for.
 * @return {{left: number, right: number}} The offset of the element relative to the entire document.
 */
function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

/**
 * sizeOf(element) returns an object with two properties. This object represents the size of the element.
 * @param  {HTMLElement} element The element to find the size of.
 * @return {{width: number, height: number}} The size of the element.
 */
function sizeOf(element) {
    const rect = element.getBoundingClientRect();
    return {
        width: Math.abs(rect.right - rect.left),
        height: Math.abs(rect.top - rect.bottom)
    };
}

/**
 * centerOf(element) returns an object with two properties. This object represents
 * the position of the center of the element relative to the entire document.
 * @param  {HTMLElement} element The element to find the center of.
 * @return {{x: number, y: number}} The position of the center of the element relative to the entire document.
 */
function centerOf(element) {
    return {
        x: getOffset(element).left + sizeOf(element).width/2,
        y: getOffset(element).top + sizeOf(element).height/2
    };
}

/**
 * dist(element, mouseX, mouseY) return the distance between the mouse and the center of the element.
 * @param  {HTMLElement} element The element to find the center of.
 * @param  {number} mouseX The X coordinate of the mouse pointer relative to the whole document.
 * @param  {number} mouseY The Y coordinate of the mouse pointer relative to the whole document.
 * @return {number} The distance between the mouse position and the element's center.
 */
function dist(element, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - centerOf(element).x, 2) + Math.pow(mouseY - centerOf(element).y, 2)));
}

/**
 * parallax(event) offsets each floating-word element relative to the mouse position.
 * @param  {Event} event The mousemove event.
 */
function parallax(event) {
  var words = Array.from(document.getElementsByClassName("floating-word"));
  words.forEach((word) => {
    let offsetX = centerOf(word).x - event.pageX;
    let offsetY = centerOf(word).y - event.pageY;
    let distance = dist(word, event.pageX, event.pageY);
    var x;
    var y;
    if (distance < 20) {
        x = -Math.floor(offsetX / 2);
        y = -Math.floor(offsetY / 2);
    }
    else {
        x = -Math.floor(offsetX / (0.1*distance));
        y = -Math.floor(offsetY / (0.1*distance));
    }
    var tr = `${word.getAttribute("rotation_value")} translate(${x}px, ${y}px)`;
    word.style.transform = tr;
    word.style.webkitTransform = tr;
    word.style.msTransform = tr;
  });
}