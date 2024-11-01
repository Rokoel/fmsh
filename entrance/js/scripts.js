document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown containers
    const dropdowns = document.querySelectorAll('.text-dropdown-container');

    // Add click event listener to each dropdown
    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.text-dropdown-header');
        const content = dropdown.querySelector('.text-dropdown-content');
        const arrow = dropdown.querySelector('.text-dropdown-arrow');

        header.addEventListener('click', () => {
            // Toggle active class for this specific dropdown
            content.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    });
});