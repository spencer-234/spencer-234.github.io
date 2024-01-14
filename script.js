// Set variables for elements
const aboutDialog = document.querySelector(".about");
const closebtn = document.querySelector(".closeBtn");
const projectsBtn = document.querySelector(".projectsBtn");

// function to open the about tab
document.querySelector(".aboutBtn").addEventListener("click", () => {
    aboutDialog.style.display = "flex";
})

// function to close the about tab
closebtn.addEventListener("click", () => {
    aboutDialog.style.display = "none";
})

// function to open github repos
projectsBtn.addEventListener("click", () => {
    window.open("https://github.com/spencer-234?tab=repositories");
})

