var MENU_STATE = 'closed';

var mobileMenuButton = document.getElementById("menu-button");
if (mobileMenuButton != null && mobileMenuButton != undefined) {
    mobileMenuButton.addEventListener("click", switchMenu);
    mobileMenuButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            let simulatedClickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            mobileMenuButton.dispatchEvent(simulatedClickEvent);
        }
    });
}
var moveUpButton = document.getElementById("move-up-button-icon");
if (moveUpButton != null && moveUpButton != undefined) {
    moveUpButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
    moveUpButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            let simulatedClickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            moveUpButton.dispatchEvent(simulatedClickEvent);
        }
    });
}
var moveDownButton = document.getElementById("move-down-button-icon");
if (moveDownButton != null && moveDownButton != undefined) {
    moveDownButton.addEventListener("click", () => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    moveDownButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            let simulatedClickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            moveDownButton.dispatchEvent(simulatedClickEvent);
        }
    });
}
var registerBlockButton = document.getElementById("register");
if (registerBlockButton != null && registerBlockButton != undefined) {
    registerBlockButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            let simulatedClickEvent = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            registerBlockButton.dispatchEvent(simulatedClickEvent);
        }
    });
}

/**
 * setMenu() sets the mobile menu up, changing the classlists of
 * some elements. It's usually called from the switchMenu() function.
 */
function setMenu() {
    var menuItems = Array.from(document.getElementsByClassName("mobile-navbar-link"));
    if(MENU_STATE === 'closed'){
        menuItems.forEach(menuItem => {
            menuItem.style.display = "";
            menuItem.classList.add("appearing");
            menuItem.classList.remove("disappearing");
            menuItem.addEventListener("animationend", function(e) {
                menuItem.style.transform = "translateX(150%)";
            });
        });
        mobileMenuButton.classList.remove("rotating-back");
        mobileMenuButton.classList.add("rotating");
    }
    else {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove("appearing");
            menuItem.classList.add("disappearing");
            menuItem.addEventListener("animationend", function(e) {
                menuItem.style.transform = "translateX(0)";
                if (menuItem.classList.contains("disappearing")) {
                    menuItem.style.display = "none";
                }
            });
        });
        mobileMenuButton.classList.remove("rotating");
        mobileMenuButton.classList.add("rotating-back");
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

var scrollTimeout;
window.addEventListener('scroll', function() {
    var moveUpButton = document.getElementById("move-up-button");
    var moveDownButton = document.getElementById("move-down-button");
    var mobileMenuButton = document.getElementById("mobile-navbar");
    if (moveUpButton != null && moveUpButton != undefined) {
        moveUpButton.style.display = "";
        moveDownButton.style.display = "";
        mobileMenuButton.style.display = "";
        moveUpButton.style.transition = "opacity 0.5s";
        moveDownButton.style.transition = "opacity 0.5s";
        mobileMenuButton.style.transition = "opacity 0.5s";
        moveUpButton.style.opacity = "1";
        moveDownButton.style.opacity = "1";
        mobileMenuButton.style.opacity = "1";
    }

    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(function() {
        if (moveUpButton != null && moveUpButton != undefined) {
            moveUpButton.style.opacity = "0";
            moveDownButton.style.opacity = "0";
            mobileMenuButton.style.opacity = "0";
            moveUpButton.addEventListener('transitionend', function() {
                moveUpButton.style.display = "none";
            }, { once: true });
            moveDownButton.addEventListener('transitionend', function() {
                moveDownButton.style.display = "none";
            }, { once: true });
            mobileMenuButton.addEventListener('transitionend', function() {
                mobileMenuButton.style.display = "none";
            }, { once: true });
            scrollTimeout = null;
        }
    }, 2000);
});