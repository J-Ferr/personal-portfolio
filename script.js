document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded and running!");
    // Add your JavaScript code here
});
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            link.classList.toggle('dark-mode');
        });
    });
});
