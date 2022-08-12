const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Light images
function imageMode(color) {
    // pass in light or dark mode for image color
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle between dark and light mode - change colors and icons
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // change toggle-text
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    // change toggle-icon
    isDark ?  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // change images
    isDark ? imageMode('dark') : imageMode('light');
}
                                               
// Switch Theme Dynamically
function switchTheme(event) {
    // when boolean is checked (True)  - enable dark mode
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    }
    // when boolean is unchecked (False) - enable light mode
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
// check if value for theme exists before we retrieve it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    // set toggle switch to dark mode if theme is dark
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        // toggle to dark mode
        toggleDarkLightMode(true);
    }
}