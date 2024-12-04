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
    registerBlockButton.addEventListener("click", switchMenu);
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
        mobileMenuButton.classList.remove("rotating-back");
        mobileMenuButton.classList.add("rotating");
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

window.addEventListener('scroll', function() {
    const scrolledTo = window.scrollY + window.innerHeight + 15;
    const isBottomReached = (document.body.scrollHeight <= scrolledTo);
    if ( isBottomReached == true ) {
        if (this.document.getElementById("move-down-button") != null && this.document.getElementById("move-down-button") != undefined) {
            this.document.getElementById("move-down-button").style.bottom = "calc(var(--header-height)*1.5)";
            this.document.getElementById("move-up-button").style.bottom = "calc(var(--header-height)*1.5)";
            this.document.getElementById("mobile-navbar").style.bottom = "calc(var(--header-height)*1.5)";
        }
    }
    else {
        if (this.document.getElementById("move-down-button") != null && this.document.getElementById("move-down-button") != undefined) {
            this.document.getElementById("move-down-button").style.bottom = "";
            this.document.getElementById("move-up-button").style.bottom = "";
            this.document.getElementById("mobile-navbar").style.bottom = "";
        }
    }
  });