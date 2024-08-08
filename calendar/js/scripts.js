var MENU_STATE = 'closed';

window.addEventListener("storage", (e) => {
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

    generateMonthAround(-1, -1, 3, document.getElementById("calendar"));
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
 * It uses localStorage to store the state.
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

    if(localStorage.getItem('theme') === 'dark'){
        root.style.setProperty('--dark-blue', white_color);
        root.style.setProperty('--white', dark_color);
        root.style.setProperty('--theme-emoji-bright', dark_filter);
        root.style.setProperty('--theme-emoji-dark', light_filter);
        header.style.backgroundColor = "var(--blue)";
        header.style.color = "var(--white)";
    }
    else {
        root.style.setProperty('--white', white_color);
        root.style.setProperty('--dark-blue', dark_color);
        root.style.setProperty('--theme-emoji-bright', light_filter);
        root.style.setProperty('--theme-emoji-dark', dark_filter);
        header.style.backgroundColor = "var(--white)";
        header.style.color = "var(--dark-blue)";
    }
}

/*
 * switchTheme() changes the current theme of the website.
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

function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year &&
           date.getMonth() === month - 1 &&
           date.getDate() === day;
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
 * returnMonthAndYear() returns a list of a month and a year
 * in a format of ['mm', 'yyyy'] depending on its parameters.
 * @param {(number|string)} requestedYear A string or a number representing the requested year's number, -1 (or '-1') for current year
 * @param {(number|string)} monthNumber A string or a number representing the number of a month, -1 (or '-1') for current month or for using monthName
 * @param {string} monthName A string that is a month name in either Russian or English (or empty for current month or for using monthNumber)
 * @returns A list ['mm', 'yyyy'] of a month and a year strings
 */
function returnMonthAndYear(requestedYear=-1, monthNumber=-1, monthName='') {
    var date = new Date();
    var month = (date.getMonth()+1).toString().length == 1 ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1).toString(); // add 1 to month as in js its from 0 to 11
    var year = date.getFullYear().toString();
    if (requestedYear.toString() != '-1') {
        year = requestedYear.toString();
    }
    if (monthNumber.toString() == '-1') {
        if (monthName == '') {
            // this case is covered by default
        }
        else {
            if (monthName == "Январь" || monthName == "January") {
                month = '01';
            }
            if (monthName == "Февраль" || monthName == "February") {
                month = '02';
            }
            if (monthName == "Март" || monthName == "March") {
                month = '03';
            }
            if (monthName == "Апрель" || monthName == "April") {
                month = '04';
            }
            if (monthName == "Май" || monthName == "May") {
                month = '05';
            }
            if (monthName == "Июнь" || monthName == "June") {
                month = '06';
            }
            if (monthName == "Июль" || monthName == "July") {
                month = '07';
            }
            if (monthName == "Август" || monthName == "August") {
                month = '08';
            }
            if (monthName == "Сентябрь" || monthName == "September") {
                month = '09';
            }
            if (monthName == "Октябрь" || monthName == "October") {
                month = '10';
            }
            if (monthName == "Ноябрь" || monthName == "November") {
                month = '11';
            }
            if (monthName == "Декабрь" || monthName == "December") {
                month = '12';
            }
        }
    }
    else {
        month = monthNumber.toString().length == 1 ? '0' + monthNumber.toString() : monthNumber.toString();
    }
    return [month, year];
}

function generateMonthDict(requestedYear=-1, monthNumber=-1, monthName='', daysOfTheWeekList=null, lang='short_ru') {
    var monthAndYear = returnMonthAndYear(requestedYear, monthNumber, monthName);
    var month = monthAndYear[0];
    var year = monthAndYear[1];
    var daysOfTheWeek;
    if (daysOfTheWeekList === null) {
        if (lang == 'en' || lang == 'eng') {
            daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        }
        else if (lang == 'short_en' || lang == 'short_eng') {
            daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        }
        else if (lang == 'short_ru' || lang == 'short_rus') {
            daysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        }
        else if (lang == 'ru' || lang == 'rus') {
            daysOfTheWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        }
        else {
            daysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        }
    }
    else {
        daysOfTheWeek = daysOfTheWeekList;
    }

    var resultingDict = {};
    for (let i = 0; i < daysOfTheWeek.length; ++i) {
        resultingDict[daysOfTheWeek[i]] = [];
    }
    var firstDayOfTheMonthWeekIndex;
    var lastDayOfTheMonthWeekIndex;
    for (let day = 1; day < 32; ++day) {
        var dayStr = day.toString().length == 1 ? '0' + day.toString() : day.toString();
        if (day >= 28) {
            var validateDateResult = validateDate(dayStr + '.' + month + '.' + year, true);
            if (validateDateResult[0] == true) {
                let dayIndex = validateDateResult[2].getDay();
                let dictKey = daysOfTheWeek[(dayIndex+6) % 7];
                resultingDict[dictKey].push(day);
                lastDayOfTheMonthWeekIndex = (dayIndex+6) % 7; // we can do that because we'll get here on the latest day of the month
            }
        }
        else {
            var dateObj = new Date(year + '/' + month + '/' + dayStr);
            let dayIndex = dateObj.getDay();
            if (day == 1) {
                firstDayOfTheMonthWeekIndex = (dayIndex+6) % 7;
            }
            let dictKey = daysOfTheWeek[(dayIndex+6) % 7];
            resultingDict[dictKey].push(day);
        }
    }
    for (let i = 0; i < firstDayOfTheMonthWeekIndex; ++i) {
        let dictKey = daysOfTheWeek[i];
        resultingDict[dictKey].splice(0, 0, '.');
    }
    for (let i = 6; i > lastDayOfTheMonthWeekIndex; --i) {
        let dictKey = daysOfTheWeek[i];
        resultingDict[dictKey].splice(Object.keys(resultingDict[dictKey]).length, 0, '.');
    }
    return [year, month, resultingDict];
}

function printMonthDict(monthDict) {
    var daysOfTheWeek = Object.keys(monthDict);
    for (let i = 0; i < 7; ++i) {
        console.log(daysOfTheWeek[i], monthDict[daysOfTheWeek[i]]);
    }
    console.log("");
}

function generateAndAttachMonthElement(monthDict, parentElement) {
    var daysOfTheWeek = Object.keys(monthDict);
    var monthElement = document.createElement("div");
    var maxNumberOfWeekDaysOfOneType = monthDict[daysOfTheWeek[0]].length;
    monthElement.classList.add("month-with-width-of-" + maxNumberOfWeekDaysOfOneType);
    monthElement.classList.add("month");
    for (let dayIndex = 0; dayIndex < 7; ++dayIndex) {
        let dayNameElement = document.createElement("div");
        dayNameElement.textContent = daysOfTheWeek[dayIndex];
        dayNameElement.classList.add("day-name");
        monthElement.appendChild(dayNameElement);
        for (let j = 0; j < maxNumberOfWeekDaysOfOneType; ++j) {
            let element = document.createElement("div");
            if (monthDict[daysOfTheWeek[dayIndex]][j] != '.') {
                element.textContent = monthDict[daysOfTheWeek[dayIndex]][j];
                element.classList.add("has-border");
            }
            monthElement.appendChild(element);
        }
    }
    parentElement.appendChild(monthElement);
}

function generateMonthAround(year, startingMonthIndex, numberOfMonthTotal, parentElement, lang='rus') {
    for (let monthNumber = startingMonthIndex + 1; monthNumber < startingMonthIndex + 1 + numberOfMonthTotal; ++monthNumber) {
        var monthGridHolder = document.createElement("div");
        monthGridHolder.classList.add("month-grid-holder");
        monthGridHolder.id = ("month-grid-holder-" + year + '-') + monthNumber;
        [year, month, monthDict] = generateMonthDict(year, monthNumber);
        var monthText;
        if (month === '01') {
            if (lang === 'rus') {
                monthText = "Январь";
            }
            else {
                monthText = "January";
            }
        }
        if (month === '02') {
            if (lang === 'rus') {
                monthText = "Феварль";
            }
            else {
                monthText = "February";
            }
        }
        if (month === '03') {
            if (lang === 'rus') {
                monthText = "Март";
            }
            else {
                monthText = "March";
            }
        }
        if (month === '04') {
            if (lang === 'rus') {
                monthText = "Апрель";
            }
            else {
                monthText = "April";
            }
        }
        if (month === '05') {
            if (lang === 'rus') {
                monthText = "Май";
            }
            else {
                monthText = "May";
            }
        }
        if (month === '06') {
            if (lang === 'rus') {
                monthText = "Июнь";
            }
            else {
                monthText = "June";
            }
        }
        if (month === '07') {
            if (lang === 'rus') {
                monthText = "Июль";
            }
            else {
                monthText = "July";
            }
        }
        if (month === '08') {
            if (lang === 'rus') {
                monthText = "Август";
            }
            else {
                monthText = "August";
            }
        }
        if (month === '09') {
            if (lang === 'rus') {
                monthText = "Сентябрь";
            }
            else {
                monthText = "September";
            }
        }
        if (month === '10') {
            if (lang === 'rus') {
                monthText = "Октябрь";
            }
            else {
                monthText = "Oktober";
            }
        }
        if (month === '11') {
            if (lang === 'rus') {
                monthText = "Ноябрь";
            }
            else {
                monthText = "November";
            }
        }
        if (month === '12') {
            if (lang === 'rus') {
                monthText = "Декабрь";
            }
            else {
                monthText = "December";
            }
        }
        var monthTitleElement = document.createElement("div");
        monthTitleElement.classList.add("month-title");
        monthTitleElement.textContent = year + ', ' + monthText;
        monthGridHolder.appendChild(monthTitleElement);
        generateAndAttachMonthElement(monthDict, monthGridHolder);
        parentElement.appendChild(monthGridHolder);
    }
}