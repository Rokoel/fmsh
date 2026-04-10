document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-description');

    if (isSafari()) {
        document.querySelectorAll('.science-description-row').forEach(elem => {
            elem.classList.remove('science-description-row');
            elem.classList.add('safari-only-science-description-row');
        });
    }

    // Toggle description visibility
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseRow = button.closest('tr');
            const descriptionRow = courseRow.nextElementSibling;
            
            // Toggle visibility
            const isVisible = descriptionRow.classList.toggle('visible');
            descriptionRow.setAttribute('aria-hidden', !isVisible);
            
            // Update button
            var showDesc = '<path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>';
            var hideDesc = '<path d="M17 4L12 9L7 4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20L12 15L7 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>';
            button.children[0].innerHTML = isVisible ? hideDesc : showDesc;
            button.title = isVisible ? 'Скрыть описание' : 'Показать описание';
        });
    });
});

function isSafari() {
    // Taken from https://stackoverflow.com/a/9851769, because detecting Safari is difficult...
    // Safari 3.0+
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    return isSafari;
}