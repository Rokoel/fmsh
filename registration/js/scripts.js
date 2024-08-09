window.onload = function() {
    setTheme();

    setupFormValidation();
};

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
    var main_block = document.getElementById("main-block");
    var placeholder_text_opacity_light = "0.3";
    var placeholder_text_opacity_dark = "0.7";

    if(localStorage.getItem('theme') === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_dark);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_light);
        main_block.style.backgroundColor = "var(--white)";
        main_block.style.backgroundImage = "url( './main_block_bg_dark.svg' )";
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        root.style.setProperty('--placeholder-text-opacity', placeholder_text_opacity_light);
        root.style.setProperty('--placeholder-text-dark-theme-opacity', placeholder_text_opacity_dark);
        main_block.style.backgroundColor = "var(--blue)";
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
        var surnameField = document.getElementById("surname");
        var firstnameField = document.getElementById("firstname");
        var lastnameField = document.getElementById("lastname");
        var emailsField = document.getElementById("email");
        var birthdayField = document.getElementById("birthday");
        var gradeField = document.getElementById("grade");
        var schoolField = document.getElementById("school");
        var placeField = document.getElementById("region");
        var capchaField = document.getElementById("capcha-input");

        var surnameValidity = validateSurname(surnameField.value);
        var firstnameValidity = validateFirstname(firstnameField.value);
        var lastnameValidity = validateLastname(lastnameField.value);
        var emailsValidity = validateEmails(emailsField.value);
        var birthdayValidity = validateDate(birthdayField.value);
        var gradeValidity = validateGrade(gradeField.value);
        var schoolValidity = validateSchool(schoolField.value);
        var placeValidity = validatePlace(placeField.value);
        var capchaValidity = validateCapcha(capchaField.value);

        surnameField.nextElementSibling.textContent = "";
        if (surnameValidity[0] == false) {
            showError(surnameField, surnameValidity[1]);
            event.preventDefault();
        }
        firstnameField.nextElementSibling.textContent = "";
        if (firstnameValidity[0] == false) {
            showError(firstnameField, firstnameValidity[1]);
            event.preventDefault();
        }
        lastnameField.nextElementSibling.textContent = "";
        if (lastnameValidity[0] == false) {
            showError(lastnameField, lastnameValidity[1]);
            event.preventDefault();
        }
        emailsField.nextElementSibling.textContent = "";
        if (emailsValidity[0] == false) {
            showError(emailsField, emailsValidity[1]);
            event.preventDefault();
        }
        birthdayField.nextElementSibling.textContent = "";
        if (birthdayValidity[0] == false) {
            showError(birthdayField, birthdayValidity[1]);
            event.preventDefault();
        }
        gradeField.nextElementSibling.textContent = "";
        if (gradeValidity[0] == false) {
            showError(gradeField, gradeValidity[1]);
            event.preventDefault();
        }
        schoolField.nextElementSibling.textContent = "";
        if (schoolValidity[0] == false) {
            showError(schoolField, schoolValidity[1]);
            event.preventDefault();
        }
        placeField.nextElementSibling.textContent = "";
        if (placeValidity[0] == false) {
            showError(placeField, placeValidity[1]);
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
 * isNonNegativeInteger() checks the str for being a non-negative integer.
 * @param {string} str A string to be checked
 * @returns True, if string is a non-negative integer, and false otherwise
 */
function isNonNegativeInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
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
 * validateSurname() checks if surname is a valid string.
 * @param {string} surname A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateSurname(surname) {
    if (surname.trim() === "") {
        return [false, "Фамилия не должна быть пустой"];
    }
    return [true, ""];
}

/**
 * validateFirstname() checks if firstname is a valid string.
 * @param {string} firstname A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateFirstname(firstname) {
    if (firstname.trim() === "") {
        return [false, "Имя не должно быть пустым"];
    }
    return [true, ""];
}

/**
 * validateLastname() checks if lastname is a valid string.
 * @param {string} lastname A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateLastname(lastname) {
    if (lastname.trim() === "") {
        return [false, "Отчество не должно быть пустым"];
    }
    return [true, ""];
}

/**
 * validateEmails() checks if one (or multiple) emails separated with ", " are valid using regular expressions.
 * @param {string} emails A string to be checked
 * @returns True if emails are, well, emails and not something else (and false otherwise). The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateEmails(emails) {
    var emailList = emails.replace(" ", "").split(",");
    var emailValidationSum = 0;
    var re;
    re = new RegExp ("^[.a-zA-Z0-9_-]{1,50}@[a-zA-Z0-9_-]{2,30}\\.[a-z]{2,4}$");
    for (let i = 0; i < emailList.length; ++i) {
        email = emailList[i];
        emailValidationSum += (email.match(re) == email);
    }
    if (emailValidationSum == emailList.length) {
        return [true, ""];
    }
    return [false, "Неправильный формат ввода электронных адресов"];
}

/**
 * validateGrade() checks if grade is an integer between 4 and 11, validating it.
 * @param {string} grade A string to be checked
 * @returns True if 4 <= grade <= 11, grade being an integer, and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateGrade(grade) {
    if (isNonNegativeInteger(grade)) {
        if (grade >= 4 && grade <= 11) {
            return [true, ""];
        }
        else {
            return [false, "Класс меньше 4 или больше 11"];
        }
    }
    else {
        return [false, "Введенное значение не является числом"];
    }
}

/**
 * validateDate() checks if a string is a valid date.
 * @param {string} date A string to be checked in a format 'dd.mm.yyyy'
 * @param {boolean} returnDateObject A flag indincating whether to return the Date object or not
 * @returns True if the string is a valid date separated by fullstops and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateDate(dateString, returnDateObject=false) { // could've named the function "valiDate" :)
    if (returnDateObject == false) {
        if (dateString.length == "dd.mm.yyyy".length) {
            if (dateString.indexOf('.') > -1) {
                let dateArray = dateString.split(".");
                if (dateArray.length != 3) {
                    return [false, "Неправильный формат даты"];
                }
                const [day, month, year] = dateString.split('.').map(Number);
        
                let dateObj = new Date(year, month - 1, day); // trying to convert the date (JS does the validation for us)
        
                if (Object.prototype.toString.call(dateObj) === "[object Date]") { // if the Date object is valid
                    if (dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day) { // if the date isn't actually a date (even if its a valid date object)
                        return [true, ""];
                    }
                    else {
                        return [false, "Такой даты не существует"];
                    }
                }
                return [false, "Неправильный формат даты"];
            }
            return [false, "Неправильный формат даты"];
        }
        return [false, "Дата имеет недостаточную длину"];
    }
    else {
        if (dateString.length == "dd.mm.yyyy".length) {
            if (dateString.indexOf('.') > -1) {
                let dateArray = dateString.split(".");
                if (dateArray.length != 3) {
                    return [false, "Неправильный формат даты", null];
                }
                const [day, month, year] = dateString.split('.').map(Number);
        
                let dateObj = new Date(year, month - 1, day); // trying to convert the date (JS does the validation for us)
        
                if (Object.prototype.toString.call(dateObj) === "[object Date]") { // if the Date object is valid
                    if (dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day) { // if the date isn't actually a date (even if its a valid date object)
                        return [true, "", dateObj];
                    }
                    else {
                        return [false, "Такой даты не существует", null];
                    }
                }
                return [false, "Неправильный формат даты", null];
            }
            return [false, "Неправильный формат даты", null];
        }
        return [false, "Дата имеет недостаточную длину", null];
    }
}

/**
 * validateSchool() checks if school is a valid string.
 * @param {string} school A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validateSchool(school) {
    if (school.trim() === "") {
        return [false, "Название школы не заполнено"];
    }
    return [true, ""];
}

/**
 * validateSchool() checks if place is a valid string.
 * @param {string} place A string to be checked
 * @returns True if the string is not empty and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
 */
function validatePlace(place) {
    if (place.trim() === "") {
        return [false, "Информация о месте проживания не заполнена"];
    }
    return [true, ""];
}