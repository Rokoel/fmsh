window.onload = function() {
    setupFormValidation();
};

/**
 * This function makes an error message appear near the violating element.
 * @param {HTMLElement} element An element near which to show the error message
 * @param {string} errorMsg An error message to be displayed
 */
function showError(element, errorMsg) {
    element.nextElementSibling.textContent = errorMsg;
}

/**
 * setupFormValidation() validates the form, preventing the form submition until its valid,
 * showing errors in the form.
 */
function setupFormValidation() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        var emailField = document.getElementById("email");
        var capchaField = document.getElementById("capcha-input");

        var emailsValidity = validateEmail(emailField.value);
        var capchaValidity = validateCapcha(capchaField.value);

        emailField.nextElementSibling.textContent = "";
        if (emailsValidity[0] == false) {
            showError(emailField, emailsValidity[1]);
            event.preventDefault();
        }
        capchaField.nextElementSibling.textContent = "";
        if (capchaValidity[0] == false) {
            showError(capchaField, capchaValidity[1]);
            event.preventDefault();
        }
    });
}

/**
 * validateCapcha() checks if capcha is a valid string.
 * @param {string} capcha A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateCapcha(capcha) {
    if (capcha.trim() === "") {
        return [false, "Пожалуйста, введите текст с картинки"];
    }
    return [true, ""];
}

/**
 * validateEmail() checks if one email is valid using regular expressions.
 * @param {string} emails A string to be checked
 * @returns True if the email is, well, an email and not something else (and false otherwise). The returned value is a list containing the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateEmail(email) {
    var emailValidationFlag = 0;
    var re;
    re = new RegExp ("^[.a-zA-Z0-9_-]{1,50}@[a-zA-Z0-9_-]{2,30}\\.[a-z]{2,4}$");
    emailValidationFlag += (email.match(re) == email);
    if (emailValidationFlag == 1) {
        return [true, ""];
    }
    return [false, "Неправильный формат ввода электронного адреса"];
}