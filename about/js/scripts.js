window.onload = function() {

    /* Setting up the mobile menu and the footer */
    const simulatedClickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    document.getElementById("email-mobile").addEventListener("click", () => {location.href = "mailto:info@fmsh.ru";});
    document.getElementById("email-mobile").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("email-mobile").dispatchEvent(simulatedClickEvent);
        }
    });
    document.getElementById("telegram-mobile").addEventListener("click", () => {location.href = "https://t.me/fmshru";});
    document.getElementById("telegram-mobile").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("telegram-mobile").dispatchEvent(simulatedClickEvent);
        }
    });
    document.getElementById("phone-mobile").addEventListener("click", copyPhoneNumber);
    document.getElementById("phone-mobile").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("phone-mobile").dispatchEvent(simulatedClickEvent);
        }
    });
    document.getElementById("contacts-page-phone-number").addEventListener("click", copyPhoneNumber);
    document.getElementById("contacts-page-phone-number").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("contacts-page-phone-number").dispatchEvent(simulatedClickEvent);
        }
    });
    var featuresMenu = document.getElementById("features-menu");
    var optionsList = featuresMenu.children;
    for (let i = 0; i < optionsList.length; ++i) {
        optionsList[i].addEventListener("keydown", (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                optionsList[i].dispatchEvent(simulatedClickEvent);
            }
        });
    }
    if (location.hash) {
        var requested_hash = location.hash.slice(1);
        location.hash = '';
        location.hash = requested_hash;
    }
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
 * chooseFeature() is a function that's usually called upon a click.
 * It shows the respective block of information, highlighting the pressed
 * option and hiding the rest of blocks.
 * @param {number} optionFeatureNumber Clicked option number (starting from 1)
 * @param {string} optionPrefix This menu's option prefix
 * @param {string} featurePrefix This block's feature prefix
 * @param {number} menuSize Size of the menu
 * @param {boolean} addEmptyLinkTag Flag, indicating whether the clicked button should also be surrounded by an a tag
 */
function chooseFeature(optionFeatureNumber, optionPrefix, featurePrefix, menuSize, addEmptyLinkTag=true) {
    var openingLinkTag = "<a>";
    var closingLinkTag = "</a>";
    if (addEmptyLinkTag === false) {
        openingLinkTag = "";
        closingLinkTag = "";
    }
    for (let i = 1; i < menuSize+1; ++i) {
        if (i != optionFeatureNumber) {
            let currentOption = document.getElementById(optionPrefix + i);
            currentOption.innerHTML = openingLinkTag + currentOption.innerText + closingLinkTag;

            let currentFeature = document.getElementById(featurePrefix + i);
            currentFeature.style.display = "none";
        }
    }
    
    let chosenOption = document.getElementById(optionPrefix + optionFeatureNumber);
    chosenOption.innerHTML = openingLinkTag + "<b>" + chosenOption.innerText + "</b>" + closingLinkTag;

    let chosenFeature = document.getElementById(featurePrefix + optionFeatureNumber);
    chosenFeature.style.display = "";
}