// Get elements
const themeSelect = document.getElementById('theme');
const saveButton = document.getElementById('save-settings');

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    themeSelect.value = savedTheme;
    document.body.className = savedTheme + '-theme'; // Set the class on body for theme
});

// Save settings and apply theme
saveButton.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    localStorage.setItem('theme', selectedTheme);
    document.body.className = selectedTheme + '-theme'; // Set the class on body for theme
});
