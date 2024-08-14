var MENU_STATE = 'closed';

window.addEventListener("storage", (e) => {
    if (e.key == 'theme') {
        setTheme();
    }
});

window.onload = function() {
    setTheme();

    /* Setting up the mobile menu and the footer */
    const simulatedClickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    document.getElementById("theme-switcher").addEventListener("click", switchTheme);
    document.getElementById("theme-switcher").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("theme-switcher").dispatchEvent(simulatedClickEvent);
        }
    });
    document.getElementById("mobile-navbar").addEventListener("click", switchMenu);
    document.getElementById("mobile-navbar").addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            document.getElementById("mobile-navbar").dispatchEvent(simulatedClickEvent);
        }
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

    var calendarElement = document.getElementById("calendar");
    var leftArrow = document.getElementById("arrow-left");
    var rightArrow = document.getElementById("arrow-right");

    var lastEventYear;
    var lastEventMonth;
    var latestEventDateObject;
    [lastEventYear, lastEventMonth, latestEventDateObject] = returnNthEventYearAndMonth(-1, true); // getting the last event's date

    var currentYearAndMonth = resetCalendar(calendarElement, rightArrow, leftArrow, lastEventYear, lastEventMonth);
    
    leftArrow.addEventListener("click", () => {
        let year = currentYearAndMonth[0];
        let month = currentYearAndMonth[1];
        rightArrow.style.display = "";
        [currentYearAndMonth[0], currentYearAndMonth[1]] = scrollMonth(calendarElement, year, month, -1);
        if (year <= 2022 && month <= 5) { // we can just hard-code it 'cause we actually know that there won't be any year change occuring (as the first month is June)
            leftArrow.style.display = "none";
            calendarElement.children[0].style.marginLeft = "var(--proportional-small-padding)";
        }
    });
    leftArrow.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            leftArrow.dispatchEvent(simulatedClickEvent);
        }
    });
    rightArrow.addEventListener("click", () => {
        let year = currentYearAndMonth[0];
        let month = currentYearAndMonth[1];

        let currentMonthStringRepresentation = returnMonthAndYear(year, month);
        let dateRepresentationOfCurrentMonth = new Date(currentMonthStringRepresentation[1] + '.' + currentMonthStringRepresentation[0] + '.01');
        
        [currentYearAndMonth[0], currentYearAndMonth[1]] = scrollMonth(calendarElement, year, month, +1);

        let dateRepresentationOfLastMonth = new Date(lastEventYear + '.' + lastEventMonth + '.01');
        leftArrow.style.display = "";
        if (addNMonths(dateRepresentationOfCurrentMonth, 2) >= dateRepresentationOfLastMonth) {
            rightArrow.style.display = "none";
            calendarElement.children[calendarElement.children.length - 1].style.marginRight = "var(--proportional-small-padding)";
        }
    });
    rightArrow.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            rightArrow.dispatchEvent(simulatedClickEvent);
        }
    });

    var jumpButton = document.getElementById("jump-button");
    jumpButton.addEventListener("click", () => {
        let previousYear = currentYearAndMonth[0];
        let previousMonth = currentYearAndMonth[1];
        let scrollValueCalculationsResult = calculateScrollValue(previousYear, previousMonth, lastEventYear + '.' + lastEventMonth + '.01', '2022.05.01');
        if (scrollValueCalculationsResult[0] == true) {
            [currentYearAndMonth[0], currentYearAndMonth[1]] = scrollMonth(calendarElement, currentYearAndMonth[0], currentYearAndMonth[1], scrollValueCalculationsResult[2]);

            document.getElementsByClassName("shown-event")[0].scrollIntoView(false);
            let currentMonthStringRepresentation = returnMonthAndYear(currentYearAndMonth[0], currentYearAndMonth[1]);
            let dateRepresentationOfCurrentMonth = new Date(currentMonthStringRepresentation[1] + '.' + currentMonthStringRepresentation[0] + '.01');
            let dateRepresentationOfLastMonth = new Date(lastEventYear + '.' + lastEventMonth + '.01');
            leftArrow.style.display = "";
            rightArrow.style.display = "";
            if (addNMonths(dateRepresentationOfCurrentMonth, 1) >= dateRepresentationOfLastMonth) {
                rightArrow.style.display = "none";
                calendarElement.children[calendarElement.children.length - 1].style.marginRight = "var(--proportional-small-padding)";
            }
            if (currentYearAndMonth[0] <= 2022 && currentYearAndMonth[1] <= 4) { // we can just hard-code it 'cause we actually know that there won't be any year change occuring (as the first month is June)
                leftArrow.style.display = "none";
                calendarElement.children[0].style.marginLeft = "var(--proportional-small-padding)";
            }
            document.getElementById("month-and-year-error").textContent = "";
        }
        else {
            document.getElementById("month-and-year-error").textContent = scrollValueCalculationsResult[1];
        }
    });
    jumpButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            jumpButton.dispatchEvent(simulatedClickEvent);
        }
    });

    var resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
        currentYearAndMonth = resetCalendar(calendarElement, rightArrow, leftArrow, lastEventYear, lastEventMonth);
    });
    resetButton.addEventListener("keydown", (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            resetButton.dispatchEvent(simulatedClickEvent);
        }
    });

    var closestEventHolder = document.getElementById("closest-event-holder");   
    let closestEventInTheFuture = findClosestEventInTheFuture(new Date(), latestEventDateObject);
    closestEventHolder.children[closestEventHolder.children.length-1].innerHTML = closestEventInTheFuture.innerHTML;
};

function resetCalendar(calendarElement, rightArrow, leftArrow, lastEventYear, lastEventMonth) {
    calendarElement.innerHTML = "";
    rightArrow.style.display = "";
    leftArrow.style.display = "";
    var currentYearAndMonth = generateMonthStartingFrom(-1, -1, 3, calendarElement); // set the initial position of the scroll window
    let year = currentYearAndMonth[0];
    let month = currentYearAndMonth[1];
    let currentMonthStringRepresentation = returnMonthAndYear(year, month);
    // we obtain the date of the current month
    let dateRepresentationOfCurrentMonth = new Date(currentMonthStringRepresentation[1] + '.' + currentMonthStringRepresentation[0] + '.01');
    // we obtain the date of the last month
    let dateRepresentationOfLastMonth = new Date(lastEventYear + '.' + lastEventMonth + '.01');

    if (addNMonths(dateRepresentationOfCurrentMonth, 2) >= dateRepresentationOfLastMonth) { // now we can easily compare the two dates
        rightArrow.style.display = "none"; // hide the scroll-right button
        calendarElement.children[calendarElement.children.length - 1].style.marginRight = "var(--proportional-small-padding)"; // add some margin in place of the button
        // we don't need to worry about removing the "style" attribute as we delete all the "calendar" contents on every scroll
    }
    return currentYearAndMonth;
}

function addNMonths(date, N) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var yearInMonths = year*12 + month;
    var newYear = integerDiv(yearInMonths + N, 12);
    var newMonthNumber = mod((month + N), 12) + 1;
    var newMonthStr = returnMonthAndYear(newYear, newMonthNumber)[0];
    var day = (date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate().toString());
    return new Date(newYear + '.' + newMonthStr + '.' + day);
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function findClosestEventInTheFuture(date, latestEventDate) {
    let i = 0;
    var incrementedDate = date;
    var closestEventInTheFuture;
    while (incrementedDate <= latestEventDate) {
        let currentYear = incrementedDate.getFullYear();
        let currentMonth = incrementedDate.getMonth() + 1;
        let currentMonthStringRepresentation = (currentMonth.toString().length == 1 ? '0' + currentMonth : currentMonth.toString());
        let currentDay = incrementedDate.getDate();
        let currentDayStringRepresentation = (currentDay.toString().length == 1 ? '0' + currentDay : currentDay.toString());
        let eventsOfTheDay = document.getElementsByClassName("event-" + currentYear.toString() + currentMonthStringRepresentation + currentDayStringRepresentation);
        if (eventsOfTheDay.length != 0) {
            closestEventInTheFuture = eventsOfTheDay[0];
            break;
        }
        ++i;
        incrementedDate = addDays(date, i);
    }
    return closestEventInTheFuture;
}

/**
 * returnNthEventYearAndMonth() returns Nth event from the page.
 * @param {number} N An index of the event
 * @returns {[string, string]} A list of a year and a month [year, month]
 */
function returnNthEventYearAndMonth(N=-1, returnDateObject=false) {
    if (returnDateObject == false) {
        if (N == -1) {
            var listOfEvents = document.getElementsByClassName("date");
            var lastEvent = listOfEvents[listOfEvents.length - 1].parentElement;
            var lastEventClasses = lastEvent.classList.toString().split(" ");
            var lastEventDate;
            var lastEventYear;
            var lastEventMonth;
            for (let i = 0; i < lastEventClasses.length; ++i) {
                if (lastEventClasses[i].includes("event")) {
                    if (lastEventClasses[i].split("-")[1] != "event") {
                        lastEventDate = lastEventClasses[i].split("-")[1];
                        lastEventYear = lastEventDate.slice(0, 4);
                        lastEventMonth = lastEventDate.slice(4, 6);
                    }
                }
            }
            return [lastEventYear, lastEventMonth];
        }
        else {
            var listOfEvents = document.getElementsByClassName("date");
            var NthEvent = listOfEvents[N].parentElement;
            var NthEventClasses = NthEvent.classList.toString().split(" ");
            var NthEventDate;
            var NthEventYear;
            var NthEventMonth;
            for (let i = 0; i < NthEventClasses.length; ++i) {
                if (NthEventClasses[i].includes("event")) {
                    if (NthEventClasses[i].split("-")[1] != "event") {
                        NthEventDate = NthEventClasses[i].split("-")[1];
                        NthEventYear = NthEventDate.slice(0, 4);
                        NthEventMonth = NthEventDate.slice(4, 6);
                    }
                }
            }
            return [NthEventYear, NthEventMonth];
        }
    }
    else {
        if (N == -1) {
            var listOfEvents = document.getElementsByClassName("date");
            var lastEvent = listOfEvents[listOfEvents.length - 1].parentElement;
            var lastEventClasses = lastEvent.classList.toString().split(" ");
            var lastEventDate;
            var lastEventYear;
            var lastEventMonth;
            var lastEventDay;
            for (let i = 0; i < lastEventClasses.length; ++i) {
                if (lastEventClasses[i].includes("event")) {
                    if (lastEventClasses[i].split("-")[1] != "event") {
                        lastEventDate = lastEventClasses[i].split("-")[1];
                        lastEventYear = lastEventDate.slice(0, 4);
                        lastEventMonth = lastEventDate.slice(4, 6);
                        lastEventDay = lastEventDate.slice(6, 8);
                    }
                }
            }
            return [lastEventYear, lastEventMonth, new Date(lastEventYear + '.' + lastEventMonth + '.' + lastEventDay)];
        }
        else {
            var listOfEvents = document.getElementsByClassName("date");
            var NthEvent = listOfEvents[N].parentElement;
            var NthEventClasses = NthEvent.classList.toString().split(" ");
            var NthEventDate;
            var NthEventYear;
            var NthEventMonth;
            var NthEventDay;
            for (let i = 0; i < NthEventClasses.length; ++i) {
                if (NthEventClasses[i].includes("event")) {
                    if (NthEventClasses[i].split("-")[1] != "event") {
                        NthEventDate = NthEventClasses[i].split("-")[1];
                        NthEventYear = NthEventDate.slice(0, 4);
                        NthEventMonth = NthEventDate.slice(4, 6);
                        NthEventDay = NthEventDate.slice(6, 8);
                    }
                }
            }
            return [NthEventYear, NthEventMonth, new Date(NthEventYear + '.' + NthEventMonth + '.' + NthEventDay)];
        }
    }
}

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
 * validateDate() checks if a string is a valid date.
 * @param {string} date A string to be checked in a format 'dd.mm.yyyy'
 * @param {boolean} returnDateObject A flag indincating whether to return the Date object or not
 * @returns {[boolean, string, Date]} True if the string is a valid date separated by fullstops and false otherwise. The returned value is a list containing of the boolean and an error message if false is returned and an empty string otherwise.
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
 * @returns A list ['mm', 'yyyy'] of a month and a year strings
 */
function returnMonthAndYear(requestedYear=-1, monthNumber=-1) {
    var date = new Date();
    var month = (date.getMonth()+1).toString().length == 1 ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1).toString(); // add 1 to month as in js its from 0 to 11
    var year = date.getFullYear().toString();
    if (requestedYear.toString() != '-1') { // the other case is covered by default
        year = requestedYear.toString();
    }
    if (monthNumber.toString() != '-1') { // the other case is covered by default
        month = monthNumber.toString().length == 1 ? '0' + monthNumber.toString() : monthNumber.toString();
    }
    return [month, year];
}

/**
 * generateMonthDict() creates a dictionary with keys being days of the week and values being
 * lists filled with days of the month being of this day of the week and fullstops representing
 * empty days of the week. It does so by:
 * 1. Initializing all the values including the names of the days of the week and the resulting dictionary
 * 2. Looping through all possible 1-31 days of the month and verifying the existance of each date (for example, excluding 30th and 31st of february)
 * 3. Filling the rest of the days of the first and last weeks with fullstops
 * 4. Combines year, month and the resulting list and returns it
 * @param {(number|string)} requestedYear The year of the month to generate the dict for, leave empty or -1 to use current year
 * @param {(number|string)} monthNumber The month number (meaning it starts from 1), leave empty or -1 to use current month
 * @param {[string]} daysOfTheWeekList The list of the names of the days of the week
 * @param {string} lang Either 'short_rus', 'short_ru', 'short_eng', 'short_en', 'ru', 'rus', 'en' or 'eng'
 * @returns {[number, string, {
 *  string:[(number|string)],
 *  string:[(number|string)],
 *  string:[(number|string)],
 *  string:[(number|string)],
 *  string:[(number|string)],
 *  string:[(number|string)],
 *  string:[(number|string)]
 * }]} A list of a year, month in a format of 'mm' and a dictionary/object described above
 */
function generateMonthDict(requestedYear=-1, monthNumber=-1, daysOfTheWeekList=null, lang='short_ru') {
    var monthAndYear = returnMonthAndYear(requestedYear, monthNumber);
    var month = monthAndYear[0];
    var year = Number(monthAndYear[1]); // we'll always work with a number representing the year in the future, so this is basically required
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

    // initializing the resulting dict that we'll return
    var resultingDict = {};
    for (let i = 0; i < daysOfTheWeek.length; ++i) {
        resultingDict[daysOfTheWeek[i]] = [];
    }

    var firstDayOfTheMonthWeekIndex; // this is used when filling the beginning of the months with fullstops
    var lastDayOfTheMonthWeekIndex; // this is used when filling the rest of the months with fullstops
    // we basically check whether the day exists in the selected month and place it
    // into the dictionary with a key being its dayname
    for (let day = 1; day < 32; ++day) {
        var dayStr = day.toString().length == 1 ? '0' + day.toString() : day.toString();
        if (day >= 28) { // we don't have to check if date exists for first 28 days, only for 29-31
            var validateDateResult = validateDate(dayStr + '.' + month + '.' + year, true);
            if (validateDateResult[0] == true) {
                let dayIndex = validateDateResult[2].getDay();
                let dictKey = daysOfTheWeek[(dayIndex+6) % 7];
                resultingDict[dictKey].push(day);
                lastDayOfTheMonthWeekIndex = (dayIndex+6) % 7; // we can do that because we'll get here on the latest day of the month
            }
            // if the date doesn't exist, we do nothing
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
    // we fill empty days of the week with fullstops
    for (let i = 0; i < firstDayOfTheMonthWeekIndex; ++i) { // fill the first week with fullstops
        let dictKey = daysOfTheWeek[i];
        resultingDict[dictKey].splice(0, 0, '.');
    }
    for (let i = 6; i > lastDayOfTheMonthWeekIndex; --i) { // fill the last week with fullstops
        let dictKey = daysOfTheWeek[i];
        resultingDict[dictKey].splice(Object.keys(resultingDict[dictKey]).length, 0, '.');
    }
    return [year, month, resultingDict];
}

/**
 * generateAndAttachMonthGrid() generates a month grid from a dictionary,
 * adding names of days of the week to it and attaches it to the parent element.
 * @param {[number, string, {
 *  string:[(number|string)],
*  string:[(number|string)],
*  string:[(number|string)],
*  string:[(number|string)],
*  string:[(number|string)],
*  string:[(number|string)],
*  string:[(number|string)]
* }]} monthDict A dictionary which is usually gotten from the generateMonthDict() function
 * @param {HTMLElement} parentElement An element to attach the month's grid to
 */
function generateAndAttachMonthGrid(monthDict, parentElement, year=-1, month=-1) {
    var daysOfTheWeek = Object.keys(monthDict); // list of the names of the days of the week (will differ depending on the translation)

    var monthElement = document.createElement("div");
    var maxNumberOfWeekDaysOfOneType = monthDict[daysOfTheWeek[0]].length; // number of days of the week of the same type (this number is the same for all days of the week) + 1 (one is because we include names of the days of the week in the grid)
    monthElement.classList.add("month-with-width-of-" + maxNumberOfWeekDaysOfOneType);
    monthElement.classList.add("month");

    for (let dayIndex = 0; dayIndex < 7; ++dayIndex) { // loop throught the days of the week
        let dayNameElement = document.createElement("div");
        dayNameElement.textContent = daysOfTheWeek[dayIndex];
        dayNameElement.classList.add("day-name");
        monthElement.appendChild(dayNameElement);

        for (let j = 0; j < maxNumberOfWeekDaysOfOneType; ++j) { // loop through each element of the monthDict
            let element = document.createElement("div");
            if (monthDict[daysOfTheWeek[dayIndex]][j] != '.') { // if the day isn't empty
                element.textContent = monthDict[daysOfTheWeek[dayIndex]][j];
                if (year != -1 && month != -1) {
                    let dayFromMonthDict = monthDict[daysOfTheWeek[dayIndex]][j];
                    let dayString = (dayFromMonthDict > 9 ? dayFromMonthDict.toString() : '0' + dayFromMonthDict);
                    element.id = "day-" + year.toString() + month + dayString;
                }
                element.classList.add("has-border"); // we don't want a border for empty elements for readability
            }
            monthElement.appendChild(element);
        }
    }
    parentElement.appendChild(monthElement);
}

/**
 * integerDiv() returns the quotient of integer division of a and b. If a is negative,
 * the result will be negative as well.
 * @param {number} a 
 * @param {number} b 
 * @returns An integer representing the quotient
 */
function integerDiv(a, b) {
    return a/b|0;
}

/**
 * returnMonthName() returns the name of the month in the specified language.
 * @param {*} month A string representing a month number in a format of 'mm'
 * @param {*} lang A string representing the language in which to return the name of the month 
 * @returns {string} The month's name
 */
function returnMonthName(month, lang='rus') {
    var monthText = "";
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
    return monthText;
}

/**
 * generateMonthStartingFrom() generates numberOfMonthTotal number of month
 * in the yearInput year starting from startingMonthIndexInput and attaches
 * these months to the parentElement.
 * @param {number} yearInput A number representing the year of the first month; if assigned -1, gets the current year
 * @param {number} startingMonthIndexInput A number representing the index (that starts from 0) of the first month; if assigned -1, gets the current month
 * @param {number} numberOfMonthTotal A number representing the total number of month that will be generated
 * @param {HTMLElement} parentElement An element to attach the months to
 * @param {string} lang A string representing the language of the months' names (either 'rus' or 'eng')
 * @returns {[number, number]} A list [year, startingMonthIndex] containing the calculated year and the startingMonthIndex (meaning -1 will be converted to the current year/month)
 */
function generateMonthStartingFrom(yearInput=-1, startingMonthIndexInput=-1, numberOfMonthTotal=3, parentElement, lang='rus') {
    var year = yearInput; // we assume that the year isn't -1
    if (yearInput == -1) { // if it is, however
        let currentDate = new Date();
        year = currentDate.getFullYear(); // get the current year
    }
    var startingMonthIndex = startingMonthIndexInput; // we assume that the month index isn't -1
    if (startingMonthIndexInput == -1) { // if it is, however
        let currentDate = new Date();
        startingMonthIndex = (currentDate.getMonth() + 12 - (numberOfMonthTotal - 1) / 2) % 12; // get the current month, calculate the starting index (as the current month has to be in the middle and not on the left)
    }
    var initialYear = year;
    for (let initialMonthNumber = startingMonthIndex; initialMonthNumber < startingMonthIndex + numberOfMonthTotal; ++initialMonthNumber) {
        var monthNumber = initialMonthNumber % 12 + 1; // we use a number in the generateAndAttachMonthGrid() function, not an index, so we add 1
        year = initialYear + integerDiv(initialMonthNumber, 12);

        // we create a month element for each month
        // it has the grid of the days itself, a line of day names on the left and a month label (year + monthName)
        var monthGridHolder = document.createElement("div");
        monthGridHolder.classList.add("month-grid-holder");
        monthGridHolder.id = ("month-grid-holder-" + year + '-') + monthNumber;

        [year, month, monthDict] = generateMonthDict(year, monthNumber);

        var monthText = returnMonthName(month, lang);

        var monthTitleElement = document.createElement("div");
        monthTitleElement.classList.add("month-title");
        monthTitleElement.textContent = year + ', ' + monthText;
        monthGridHolder.appendChild(monthTitleElement);

        generateAndAttachMonthGrid(monthDict, monthGridHolder, year, month);

        parentElement.appendChild(monthGridHolder);
        highlightAndShowEvents(year, month);
    }
    return [initialYear, startingMonthIndex];
}

function abs(N) {
    if (N >= 0) {
        return N;
    }
    return -N;
}

function mod(a, n) {
    return a - (n * Math.floor(a/n));
}

/**
 * scrollMonth() changes parent's contents to newly generated months according to how many month were scrolled.
 * @param {HTMLElement} parentElement An element to change contents of
 * @param {number} previousYear Year of the previous month to scroll from
 * @param {number} previousMonth Index of the previous month to scroll from
 * @param {number} numberOfMonthToScroll Number of month to scroll, positive values for scrolling "left" (decreasing the month), negative for scrolling "right" (increasing the month)
 * @returns {[number, number]} A list [year, startingMonthIndex] containing the new year and index of the starting month after the scroll
 */
function scrollMonth(parentElement, previousYear, previousMonth, numberOfMonthToScroll=1) {
    parentElement.innerHTML = "";
    var shownEvents = document.getElementsByClassName("shown-event");
    var numberOfShownElements = shownEvents.length;
    for (let event = 0; event < numberOfShownElements; ++event) {
        shownEvents[0].classList.add("hidden-event");
        shownEvents[0].classList.remove("shown-event");
    }
    var previousYearInMonths = previousYear*12 + previousMonth;
    var newYear = integerDiv(previousYearInMonths + numberOfMonthToScroll, 12);
    var newMonth = mod((previousMonth + numberOfMonthToScroll), 12);
    return generateMonthStartingFrom(newYear, newMonth, 3, parentElement);
}

/**
 * highlightAndShowEvents() shows only events from the scrolled-to months and higlights
 * any events in the calendar from these same months.
 * @param {number} year 
 * @param {string} month 
 */
function highlightAndShowEvents(year, month) {
    for (let i = 1; i < 31; ++i) {
        let day = (i > 9 ? i.toString() : '0' + i);
        let eventsOfTheDay = document.getElementsByClassName("event-" + year.toString() + month + day);
        if (eventsOfTheDay.length != 0) { // if there were (or will be) events that day
            var dayElement = document.getElementById("day-" + year.toString() + month + day);
            dayElement.classList.add("eventfull-day");
            dayElement.addEventListener("click", () => {
                document.getElementsByClassName("event-" + year.toString() + month + day)[0].scrollIntoView(false); 
            });
            dayElement.addEventListener("keydown", (event) => {
                let simulatedClickEvent = new MouseEvent("click", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                });
                if (event.code === 'Space' || event.code === 'Enter') {
                    dayElement.dispatchEvent(simulatedClickEvent);
                }
            });
            dayElement.tabIndex = "0";
            let firstEventClasses = eventsOfTheDay[0].children[0].classList.toString().split(" ");
            for (let classNameIndex = 0; classNameIndex < firstEventClasses.length; ++classNameIndex) {
                if (firstEventClasses[classNameIndex].includes("colored")) {
                    dayElement.classList.add(firstEventClasses[classNameIndex]);
                }
            }
            for (let j = 0; j < eventsOfTheDay.length; ++j) {
                eventsOfTheDay[j].classList.remove("hidden-event");
                eventsOfTheDay[j].classList.add("shown-event");
            }
        }
    }
}

function calculateScrollValue(previousYear, previousMonth, limitRight, limitLeft) {
    let monthAndYearInput = document.getElementById("month-and-year");
    var dateValidationResult;
    if (monthAndYearInput.value.includes(".")) {
        let dateList = monthAndYearInput.value.split(".");
        dateValidationResult = validateDate('01.' + dateList[1] + '.' + dateList[0], true);
    }
    else {
        return [false, "Неправильный формат ввода даты", -1];
    }
    dateValidationResult[2] = addNMonths(dateValidationResult[2], -2);
    var newYear;
    var newMonth;
    if (dateValidationResult[0] == true) {
        if (dateValidationResult[2] < new Date(limitLeft)){
            return [false, "События за этот месяц можно посмотреть в архиве новостей :)", -1];
        }
        if (dateValidationResult[2] > addNMonths(new Date(limitRight), -2)) {
            return [false, "Событий на этот месяц пока нет. Stay tuned :)", -1];
        }

        newYear = dateValidationResult[2].getFullYear();
        newMonth = dateValidationResult[2].getMonth();
        var scrollValue = (newYear-previousYear) * 12 + newMonth - Number(previousMonth);
        return [true, "", scrollValue];
    }
    else {
        return [false, dateValidationResult[1], -1];
    }
}