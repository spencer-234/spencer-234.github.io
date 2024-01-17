// Get variables to change dark and light mode
const root = document.documentElement;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// start on dark mode
root.classList.add("dark");

// functions to change mode on button click'
function light() {
    root.classList.remove("dark");
    root.classList.add("light");
    sun.style.display = "none";
    moon.style.display = "block";
}

function dark() {
    root.classList.remove("light");
    root.classList.add("dark");
    moon.style.display = "none";
    sun.style.display = "block";
}

// function to open github repos
function openRepos() {
    window.open("https://github.com/spencer-234?tab=repositories");
}
