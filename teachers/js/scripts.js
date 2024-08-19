window.onload = function() {

    /* Setting up the mobile menu and the footer */
    const simulatedClickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    document.getElementById("main-page-redirector").addEventListener("click", () => {location.href = "https://fmsh.ru";});
    document.getElementById("main-page-redirector").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("main-page-redirector").dispatchEvent(simulatedClickEvent);
        }
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
};

/**
 * copyPhoneNumber() copies the phone number to the clipboard. It's
 * supposed to be called on mobile devices when a button is clicked.
 * It redirects to the default phone app if possible.
 */
async function copyPhoneNumber () {
    try {
        await navigator.clipboard.writeText("+74955806928");
    } catch (err) {
        console.error('Не смогли скопировать телефон в буфер обмена из-за ошибки: ', err);
    }
    location.href = "tel:84955806928";
}

