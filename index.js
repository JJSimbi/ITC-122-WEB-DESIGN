// change the background image
function changeBackground(image) {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

// Set default background
changeBackground('home-background.gif');

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home-link");
    const projectsLink = document.getElementById("projects-link");
    const aboutLink = document.getElementById("about-link");

    const projectsSection = document.getElementById("projects-section");
    const aboutSection = document.getElementById("about-section");
    const homeSection = document.getElementById("home-section"); // Optional if you use a home section

    const projectTabs = document.querySelectorAll(".project-tab");
    const htmlTabBtn = document.querySelector(".project-tab-html");
    const cssTabBtn = document.querySelector(".project-tab-css");
    const jsTabBtn = document.querySelector(".project-tab-js");

    // Hide all main sections
    function hideAllSections() {
        if (projectsSection) projectsSection.style.display = "none";
        if (aboutSection) aboutSection.style.display = "none";
        if (homeSection) homeSection.style.display = "none";
    }

    // Hide all project tab content
    function hideAllTabs() {
        projectTabs.forEach(tab => tab.style.display = "none");
        htmlTabBtn?.classList.remove("active");
        cssTabBtn?.classList.remove("active");
        jsTabBtn?.classList.remove("active");
    }

    // Show specific tab and change background
    window.showProjectTab = function(tab) {
        hideAllTabs();

        if (tab === "html") {
            document.getElementById("html-projects").style.display = "block";
            htmlTabBtn?.classList.add("active");
            changeBackground("html-background.gif");
        } else if (tab === "css") {
            document.getElementById("css-projects").style.display = "block";
            cssTabBtn?.classList.add("active");
            changeBackground("css-background.gif");
        } else if (tab === "js") {
            document.getElementById("js-projects").style.display = "block";
            jsTabBtn?.classList.add("active");
            changeBackground("js-background.gif");
        }
    };

    // Navigation - HOME
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideAllSections();
        changeBackground("home-background.gif");
        if (homeSection) homeSection.style.display = "block";
    });     

    // Navigation - PROJECTS
    projectsLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideAllSections();
        if (projectsSection) projectsSection.style.display = "block";
        showProjectTab("html");
    });

    // Navigation - ABOUT
    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        hideAllSections();
        if (aboutSection) aboutSection.style.display = "flex";
        changeBackground("about-background.gif");
    });
});
