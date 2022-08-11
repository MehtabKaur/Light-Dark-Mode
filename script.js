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

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // black, 50% opacity
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'; // white, 50% opacity
    // change toggle-text (light mode to dark mode)
    toggleIcon.children[0].textContent = 'Dark Mode';
    // replace icon (sun to moon)
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // images for dark mode
    imageMode('dark');
}


// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'; // white, 50% opacity
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // black, 50% opacity
    // change toggle-text (to light mode)
    toggleIcon.children[0].textContent = 'Light Mode';
    // replace icon (moon to sun)
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // images for light mode
    imageMode('light');

}

// Switch Theme Dynamically
function switchTheme(event) {
    // when boolean is checked (True)  - enable dark mode
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    // when boolean is unchecked (False) - enable light mode
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
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
        // call dark mode function
        darkMode();
    }
}