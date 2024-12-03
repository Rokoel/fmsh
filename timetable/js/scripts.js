document.addEventListener('DOMContentLoaded', () => {
    const gradeFilter = document.getElementById('gradeFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const courseRows = document.querySelectorAll('.course-row');
    const toggleButtons = document.querySelectorAll('.toggle-description');

    function filterCourses() {
        const gradeValue = gradeFilter.value;
        const subjectValue = subjectFilter.value;

        courseRows.forEach(row => {
            let showRow = true;
            
            if (gradeValue) {
                const grades = row.dataset.grades.split(',').map(g => parseInt(g.trim()));
                showRow = grades.includes(parseInt(gradeValue));
            }

            if (showRow && subjectValue) {
                showRow = row.dataset.subject === subjectValue;
            }

            row.style.display = showRow ? '' : 'none';
            
            // Hide description row if course row is hidden
            const descriptionRow = row.nextElementSibling;
            if (!showRow && descriptionRow.classList.contains('course-description-row')) {
                descriptionRow.classList.remove('visible');
            }
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

    // Add filter event listeners
    gradeFilter.addEventListener('input', filterCourses);
    subjectFilter.addEventListener('change', filterCourses);

    const filtersToggle = document.querySelector('.filters-toggle');
    const filtersContainer = document.querySelector('.filters-container');

    filtersToggle.addEventListener('click', () => {
        const isVisible = filtersContainer.classList.toggle('visible');
        filtersToggle.classList.toggle('active');
        // Change icon based on state
        if (!isVisible) {
            filtersToggle.querySelector('svg').innerHTML = '<path d="M3.99961 3H19.9997C20.552 3 20.9997 3.44764 20.9997 3.99987L20.9999 5.58569C21 5.85097 20.8946 6.10538 20.707 6.29295L14.2925 12.7071C14.105 12.8946 13.9996 13.149 13.9996 13.4142L13.9996 19.7192C13.9996 20.3698 13.3882 20.8472 12.7571 20.6894L10.7571 20.1894C10.3119 20.0781 9.99961 19.6781 9.99961 19.2192L9.99961 13.4142C9.99961 13.149 9.89425 12.8946 9.70672 12.7071L3.2925 6.29289C3.10496 6.10536 2.99961 5.851 2.99961 5.58579V4C2.99961 3.44772 3.44732 3 3.99961 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
        } else {
            filtersToggle.querySelector('svg').innerHTML = '<path d="M4.0001 3H20.0002C20.5525 3 21.0002 3.44764 21.0002 3.99987L21.0004 5.58569C21.0005 5.85097 20.8951 6.10538 20.7075 6.29295L14.293 12.7071C14.1055 12.8946 14.0001 13.149 14.0001 13.4142L14.0001 19.7192C14.0001 20.3698 13.3887 20.8472 12.7576 20.6894L10.7576 20.1894C10.3124 20.0781 10.0001 19.6781 10.0001 19.2192L10.0001 13.4142C10.0001 13.149 9.89474 12.8946 9.7072 12.7071L3.29299 6.29289C3.10545 6.10536 3.0001 5.851 3.0001 5.58579V4C3.0001 3.44772 3.44781 3 4.0001 3Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
        }
    });
});