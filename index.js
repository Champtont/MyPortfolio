//getting nav buttons
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const homeBtn = document.getElementById("homeBtn");
const projectsBtn = document.getElementById("projectsBtn");

//getting page sections
const skillSlide = document.getElementById("leftSlide");
const homeSlide = document.getElementById("middleSlide");
const projectSlide = document.getElementById("rightSlide");

//functions for nav
const navigateToSkills = (e) => {
  skillSlide.style.left = 0;
  homeSlide.style.transform = "translateX(100dvw)";
  projectSlide.style.right = "-100dvw";
  if (skillSlide) {
    skillsBtn.classList.add("active");
    homeBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    aboutBtn.style.opacity = 100;
  }
};
const navigateToHome = (e) => {
  skillSlide.style.left = "-100dvw";
  homeSlide.style.transform = "translateX(0)";
  projectSlide.style.right = "-100dvw";
  if (homeSlide) {
    homeBtn.classList.add("active");
    skillsBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    aboutBtn.style.opacity = 0;
  }
};
const navigateToProjects = (e) => {
  skillSlide.style.left = 0;
  homeSlide.style.transform = "translateX(-100dvw)";
  projectSlide.style.right = 0;
  console.log("projects");
};

//calling functions on click
skillsBtn.addEventListener("click", navigateToSkills);
homeBtn.addEventListener("click", navigateToHome);
projectsBtn.addEventListener("click", navigateToProjects);
