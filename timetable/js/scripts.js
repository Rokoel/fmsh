document.addEventListener('DOMContentLoaded', () => {
    const gradeFilter = document.getElementById('gradeFilter');
    const groupFilter = document.getElementById('groupFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const courseRows = document.querySelectorAll('.course-row');
    const toggleButtons = document.querySelectorAll('.toggle-description');

    function filterCourses() {
        const gradeValue = gradeFilter.value;
        const groupValue = groupFilter.value.toLowerCase();
        const subjectValue = subjectFilter.value;

        courseRows.forEach(row => {
            let showRow = true;
            
            if (gradeValue) {
                const grades = row.dataset.grades.split(',').map(g => parseInt(g.trim()));
                showRow = grades.includes(parseInt(gradeValue));
            }

            if (showRow && groupValue) {
                showRow = row.dataset.group.toLowerCase().includes(groupValue);
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
            
            // Update button
            var showDesc = '<svg class="logo-white" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M17 8L12 3L7 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16L12 21L7 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
            var hideDesc = '<svg class="logo-white" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M17 4L12 9L7 4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20L12 15L7 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
            button.innerHTML = isVisible ? hideDesc : showDesc;
            button.title = isVisible ? 'Скрыть описание' : 'Показать описание';
        });
    });

    // Add filter event listeners
    gradeFilter.addEventListener('input', filterCourses);
    groupFilter.addEventListener('input', filterCourses);
    subjectFilter.addEventListener('change', filterCourses);
});