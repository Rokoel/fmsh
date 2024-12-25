/**
 * This function makes an error message appear near the violating element.
 * @param {HTMLElement} element An element near which to show the error message
 * @param {string} errorMsg An error message to be displayed
 */
function showError(element, errorMsg) {
    element.nextElementSibling.textContent = errorMsg;
}


/**
 * Sets up event listeners for form submission and form field input.
 * It validates input in real-time and prevents form submission until all fields are valid.
 * If form is valid, it sends form data to the server via AJAX, shows a success message and clears the form.
 * If there are errors, it shows an error message next to the violating field.
 */
function setupFormsValidation() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            var errors = 0;
            const formFields = form.querySelectorAll("input");
            formFields.forEach((field) => {
                var validity;
                if (field.name == "surname") {
                    validity = validateSurname(field.value);
                }
                if (field.name == "firstname") {
                    validity = validateFirstname(field.value);
                }
                if (field.name == "lastname") {
                    validity = validateLastname(field.value);
                }
                if (field.name == "emails") {
                    validity = validateEmails(field.value);
                }
                if (field.name == "email") {
                    validity = validateEmail(field.value);
                }
                if (field.name == "birthday") {
                    validity = validateDate(field.value);
                }
                if (field.name == "grade") {
                    validity = validateGrade(field.value);
                }
                if (field.name == "school") {
                    validity = validateSchool(field.value);
                }
                if (field.name == "region") {
                    validity = validatePlace(field.value);
                }
                if (field.name == "capcha-input") {
                    validity = validateCapcha(field.value);
                }
                field.nextElementSibling.textContent = "";
                if (validity[0] == false) {
                    errors += 1;
                    showError(field, validity[1]);
                }
            });
            var submitButton = event.target.querySelector("button[type=submit]");
            var eventId = submitButton.getAttribute('data-event-id');
            console.log("Проверяем количество ошибок. EventId: " + eventId);
            if (errors == 0) {
                const formData = new FormData(event.target);
                var submitUrl;
                if (!eventId) {
                    submitUrl = "register.php";
                    console.log("Отправляем форму main на сервер.");
                }
                else {
                    submitUrl = `register.php?event=${eventId}`;
                    console.log("Отправляем форму event на сервер. EventId: " + eventId);
                }
                // Submit the form data via AJAX
                var eventMessage;
                fetch(submitUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    eventSuccess = data.success;
                    if (!eventSuccess) {
                        console.log("Произошла ошибка при отправке формы :(");
                        showSuccessMessage(eventMessage);
                    }
                    eventMessage = data.message;
                    console.log("Показываем сообщение об успехе. EventMessage: " + eventMessage);
                    showSuccessMessage(eventMessage);
                    clearForm(event.target.id);
                })
                .catch(error => {
                    console.error('Error:', error);
                    console.log('Произошла ошибка при отправке формы.');
                    return;
                });
            }
            else {
                console.log("Ошибка валидации формы. Количество ошибок: " + errors);
            }
        });
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

const mainFormKey = 'main-registration-block';
const mainRegProgressBarKey = 'main-registration-progress-bar';
const mainRegProgressBarKeyInForm = 'main-registration-progress-bar-in-form';
const eventFormKey = 'event-registration-block';

/**
 * This event listener is triggered after the initial HTML document has been completely loaded and parsed.
 * It is used to setup form validation, show the main registration block and load the form data into the inputs.
 * It also sets up event listeners for the "Next" and "Back" buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
    setupFormsValidation();

    const mainRegBlock = document.getElementById(mainFormKey);
    const eventRegBlock = document.getElementById(eventFormKey);
    const endRegBlock = document.getElementById('end-registration-block');

    updateProgressBar(mainFormKey, mainRegProgressBarKey);
    updateProgressBar(mainFormKey, mainRegProgressBarKeyInForm);
    
    /**
     * Shows the specified form (main or event) and loads the form data into the inputs.
     * @param {string} formType - The type of form to show ('main' or 'event').
     * @param {number|null} eventId - The event id to load form data for, if applicable.
     */
    function showForm(formType, eventId=null) {
        mainRegBlock.classList.add('hidden');
        eventRegBlock.classList.add('hidden');
        endRegBlock.classList.add('hidden');
      
        if (formType === 'main') {
            mainRegBlock.classList.remove('hidden');
            loadFormData(mainFormKey);
            updateProgressBar(mainFormKey, mainRegProgressBarKey);
            updateProgressBar(mainFormKey, mainRegProgressBarKeyInForm);
        } else if (formType === 'event') {
            eventRegBlock.classList.remove('hidden');
            loadFormData(eventFormKey, eventId);
        }
    }
  
    
    /**
     * loadFormData() loads form data from localStorage and populates the form fields
     * @param {string} formKey - The key used to identify the form's data in localStorage.
     * @param {number|null} eventId - The ID of the event to load data for, if applicable. Defaults to null.
     */
    function loadFormData(formKey, eventId=null) {
        if (eventId) {
            const storedData = localStorage.getItem(formKey + ":" + eventId);
            if (storedData) {
                const formData = JSON.parse(storedData);
                for (const key in formData) {
                    const field = document.querySelector(`#${formKey} [name=${key}]`);
                    if (field) field.value = formData[key];
                }
            }
            else {
                const fields = document.querySelectorAll(`#${formKey} input`);
                fields.forEach((field) => {
                    field.value = '';
                });
            }
        } else {
            const storedData = localStorage.getItem(formKey);
            if (storedData) {
                const formData = JSON.parse(storedData);
                for (const key in formData) {
                    const field = document.querySelector(`#${formKey} [name=${key}]`);
                    if (field) field.value = formData[key];
                }
            }
            else {
                const fields = document.querySelectorAll(`#${formKey} input`);
                fields.forEach((field) => {
                    field.value = '';
                });
            }
        }
    }

    /**
     * Saves the current value of a form field to localStorage.
     * @param {string} formKey - The key used to identify the form's data in localStorage.
     * @param {HTMLElement} field - The input field element whose data needs to be saved.
     * @param {number|null} eventId - The ID of the event to register for, if applicable. Defaults to null.
     */
    function saveFormData(formKey, field, eventId=null) {
        if (eventId) {
            let form = document.getElementById(formKey);
            let submitButton = form.querySelector('button[type="submit"]');
            if (submitButton.getAttribute('data-event-id') != eventId) {
                console.log("Trying to save data to " + eventId + " event, but currently open form is for " + submitButton.getAttribute('data-event-id') + " event");
                // Trying to save data to eventId event, but currently open form is for another event
                return;
            }
            let storedData = localStorage.getItem(formKey + ":" + eventId) ? JSON.parse(localStorage.getItem(formKey + ":" + eventId)) : {};
            storedData[field.name] = field.value;
            localStorage.setItem(formKey + ":" + eventId, JSON.stringify(storedData));
        }
        else {
            let storedData = localStorage.getItem(formKey) ? JSON.parse(localStorage.getItem(formKey)) : {};
            storedData[field.name] = field.value;
            localStorage.setItem(formKey, JSON.stringify(storedData));
        }
    }
  
    /**
     * Shows a success message and hides the registration form.
     * @param {string} message - The text of the success message to display.
     */
    function showSuccessMessage(message) {
        mainRegBlock.classList.add('hidden');
        eventRegBlock.classList.add('hidden');
        document.getElementById('registration-success-text').innerHTML = message;
        endRegBlock.classList.remove('hidden');
    }
  
    /**
     * Clears the stored data for a form and resets all of its input fields to empty.
     * @param {string} formKey - The key used to identify the form's data in localStorage.
     * @param {number|null} eventId - The ID of the event to register for, if applicable. Defaults to null.
     */
    function clearFormData(formKey, eventId=null) {
        if (eventId) {
            localStorage.removeItem(formKey + ":" + eventId);
        }
        else {
            localStorage.removeItem(formKey);
        }
    }
  
    window.showForm = showForm;
    window.saveFormData = saveFormData;
    window.showSuccessMessage = showSuccessMessage;
    window.clearFormData = clearFormData;
});


/**
 * Shows the specified form (main or event) and loads the form data into the inputs.
 * Sets the header and text of the event registration form based on the caller element.
 * Sets up event listeners for form data handling.
 * @param {string} formType - The type of form to show ('main' or 'event').
 * @param {HTMLElement} callerElement - The element that called this function, used to get the header and text of the event registration form.
 * @param {number|null} eventId - The ID of the event to register for, if applicable. Defaults to null.
 */
function openForm(formType, callerElement, eventId=null) {
    showForm(formType, eventId);
    document.getElementById(eventFormKey).querySelector('#event-registration-header').innerHTML = callerElement.getAttribute('data-event-header');
    document.getElementById(eventFormKey).querySelector('#event-registration-text').innerHTML = callerElement.getAttribute('data-event-text');
    setupEventListeners(eventId);
    if (eventId) {
        console.log("Setting attribute of the submit button of the form, Event ID: " + eventId);
        document.getElementById(eventFormKey).querySelector('button[type="submit"]').setAttribute('data-event-id', eventId);   
    }
}

/**
 * Sets up event listeners for form data handling.
 * @param {number|null} eventId - The ID of the event to register for, if applicable.
 */
function setupEventListeners(eventId) {
    if (!eventId) {
        document.querySelectorAll('#main-registration-block input').forEach(input => {
            input.addEventListener('input', (e) => {
                saveFormData(mainFormKey, e.target);
                updateProgressBar(mainFormKey, mainRegProgressBarKey);
                updateProgressBar(mainFormKey, mainRegProgressBarKeyInForm);
            });
        });
    }
    else {
        document.querySelectorAll('#event-registration-block input').forEach(input => {
            input.addEventListener('input', (e) => {
                saveFormData(eventFormKey, e.target, eventId);
            });
        });   
    }
}

/**
 * Hides the form with the specified ID.
 * @param {string} formId - The ID of the form to hide.
 */
function closeBlock(formId) {
    document.getElementById(formId).classList.add('hidden');
}

/**
 * Clears the stored data for a form and resets all of its input fields to empty.
 * @param {string} formId - The ID of the form to clear.
 */
function clearForm(formId, progressBarIds=null, showEmpty=true) {
    const form = document.getElementById(formId);
    
    // Determine which form key to use based on the form ID
    const formKey = formId === 'main-registration-form' ? mainFormKey : eventFormKey;
    
    // Check if there's an event ID for event forms
    const submitButton = form.querySelector('button[type="submit"]');
    const eventId = submitButton ? submitButton.getAttribute('data-event-id') : null;
    
    clearFormData(formKey, eventId);
    if (progressBarIds) {
        progressBarIds.forEach(progressBarId => {
            updateProgressBar(formKey, progressBarId, showEmpty);
        });
    }
}



/**
 * Calculates the progress of a form and updates the progress bar.
 * @param {string} formKey - The ID of the form to calculate the progress for.
 * @param {string} progressBarKey - The ID of the progress bar to update.
 * @param {boolean} [showEmpty=false] - If true, shows the progress bar even if there is no data in localStorage.
 * @returns {number} The progress of the form as a percentage.
 */
function calculateFormProgress(formKey, progressBarKey, showEmpty=false) {
    const form = document.getElementById(formKey);
    const fields = form.querySelectorAll('input');
    
    // Get the stored form data from localStorage
    const storedData = localStorage.getItem(formKey);
    let filledFields = 0;
    if (storedData) {
        const formData = JSON.parse(storedData);
        
        // Count how many fields have data in localStorage
        fields.forEach(field => {
            if (formData[field.name] && formData[field.name].trim() !== '') {
                filledFields++;
            }
        });
    }
    
    // Calculate the progress
    const totalFields = fields.length;
    const progress = (filledFields / totalFields) * 100;

    // If the progress is 0 and showEmpty is false, hide the progress bar
    if (progress === 0 && !showEmpty) {
        const progressBarParent = document.getElementById(progressBarKey).parentNode;
        if (progressBarParent) {
            progressBarParent.style.display = 'none';
        }
        return;
    }

    // Update the progress bar visibility and progress
    const progressBarParent = document.getElementById(progressBarKey).parentNode;
    if (progressBarParent) {
        progressBarParent.style.display = 'block';
        document.getElementById(progressBarKey).style.width = `${progress}%`;
    }

    return progress;
}


/**
 * Updates the width of the progress bar based on the current state of the form.
 * @param {string} formId - The ID of the form to calculate the progress for.
 * @param {string} progressBarId - The ID of the progress bar element.
 * @param {boolean} showEmpty - If true, the progress bar will be shown even if 0% complete.
 */
function updateProgressBar(formId, progressBarId, showEmpty=false) {
    const progress = calculateFormProgress(formId, progressBarId, showEmpty);
    const progressBar = document.getElementById(progressBarId);

    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    else {
        console.log("No progress bar found with ID: " + progressBarId);
    }
}

window.addEventListener('resize', function() {
    if (window.innerHeight < 415) {
        document.getElementById("main-registration-form").nextElementSibling.style.display = 'none';
        document.getElementById("event-registration-form").nextElementSibling.style.display = 'none';
        document.getElementById("end-registration").nextElementSibling.style.display = 'none';
        document.getElementById("main-registration-form").previousElementSibling.style.display = 'none';
        document.getElementById("event-registration-form").previousElementSibling.style.display = 'none';
        document.getElementById("end-registration").previousElementSibling.style.display = 'none';
        document.getElementById("main-registration-form").style.maxHeight = '100dvh';
        document.getElementById("main-registration-form").parentElement.style.maxHeight = '100dvh';
        document.getElementById("event-registration-form").style.maxHeight = '100dvh';
        document.getElementById("event-registration-form").parentElement.style.maxHeight = '100dvh';
        document.getElementById("end-registration").style.maxHeight = '100dvh';
        document.getElementById("end-registration").parentElement.style.maxHeight = '100dvh';
        document.getElementById("header").style.zIndex = '1';
    } else {
        document.getElementById("main-registration-form").nextElementSibling.style.display = '';
        document.getElementById("event-registration-form").nextElementSibling.style.display = '';
        document.getElementById("end-registration").nextElementSibling.style.display = '';
        document.getElementById("main-registration-form").previousElementSibling.style.display = '';
        document.getElementById("event-registration-form").previousElementSibling.style.display = '';
        document.getElementById("end-registration").previousElementSibling.style.display = '';
        document.getElementById("main-registration-form").style.maxHeight = '';
        document.getElementById("main-registration-form").parentElement.style.maxHeight = '';
        document.getElementById("event-registration-form").style.maxHeight = '';
        document.getElementById("event-registration-form").parentElement.style.maxHeight = '';
        document.getElementById("end-registration").style.maxHeight = '';
        document.getElementById("end-registration").parentElement.style.maxHeight = '';
        document.getElementById("header").style.zIndex = '';
    }
});