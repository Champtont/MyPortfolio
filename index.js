//getting nav buttons
const backToTopBtn = document.getElementById("backToTopBtn");
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const homeBtn = document.getElementById("homeBtn");
const projectsBtn = document.getElementById("projectsBtn");
const resumeBtn = document.getElementById("experienceBtn");

//getting navSlider
const navSlide = document.getElementById("navBtnBox");

//getting page sections
const skillSlide = document.getElementById("leftSlide");
const homeSlide = document.getElementById("middleSlide");
const projectSlide = document.getElementById("rightSlide");
const aboutSect = document.getElementById("about");

//functions for nav
const navigateToSkills = (e) => {
  skillSlide.style.left = 0;
  homeSlide.style.transform = "translateX(100dvw)";
  projectSlide.style.right = "-100dvw";
  if (skillSlide) {
    setWiggle();
    navSlide.style.transform = "translateX(50px)";
    skillsBtn.classList.add("active");
    homeBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    backToTopBtn.classList.remove("active");
    aboutBtn.style.opacity = 100;
    skillsBtn.style.opacity = 100;
    projectsBtn.style.opacity = 0;
    resumeBtn.style.opacity = 0;
  }
};
const navigateToHome = (e) => {
  skillSlide.style.left = "-100dvw";
  homeSlide.style.transform = "translateX(0)";
  projectSlide.style.right = "-100dvw";
  if (homeSlide) {
    setWiggle();
    navSlide.style.transform = "translateX(-50px)";
    homeBtn.classList.add("active");
    skillsBtn.classList.remove("active");
    projectsBtn.classList.remove("active");
    backToTopBtn.classList.remove("active");
    skillsBtn.style.opacity = 100;
    projectsBtn.style.opacity = 100;
    aboutBtn.style.opacity = 0;
    resumeBtn.style.opacity = 0;
  }
};
const navigateToProjects = (e) => {
  skillSlide.style.left = 0;
  homeSlide.style.transform = "translateX(-100dvw)";
  projectSlide.style.right = 0;
  if (projectSlide) {
    navSlide.style.transform = "translateX(-140px)";
    projectsBtn.classList.add("active");
    skillsBtn.classList.remove("active");
    homeBtn.classList.remove("active");
    backToTopBtn.classList.remove("active");
    aboutBtn.style.opacity = 0;
    skillsBtn.style.opacity = 0;
    projectsBtn.style.opacity = 100;
    resumeBtn.style.opacity = 100;
  }
};

//link buttons
const navigateToAbout = (e) => {
  aboutBtn.style.display = "none";
  backToTopBtn.style.display = "block";
  backToTopBtn.classList.add("active");
  skillsBtn.classList.remove("active");
};
const navigateToTop = (e) => {
  backToTopBtn.style.display = "none";
  aboutBtn.style.display = "block";
  skillsBtn.classList.add("active");
  backToTopBtn.classList.remove("active");
};

//calling functions on click
skillsBtn.addEventListener("click", navigateToSkills);
homeBtn.addEventListener("click", navigateToHome);
projectsBtn.addEventListener("click", navigateToProjects);
aboutBtn.addEventListener("click", navigateToAbout);
backToTopBtn.addEventListener("click", navigateToTop);

//setting change on scroll
skillSlide.onscroll = function (event) {
  let scroll = skillSlide.scrollTop;
  let nav = document.getElementById("nav");
  if (scroll > 100) {
    nav.style.borderBottom = "#90ddf0 solid 1pt";
    nav.style.boxShadow = "#90ddf0 0 0 15px";
    skillSlide.classList.add("scrollBar");
    aboutSect.style.opacity = 100;
    navigateToAbout();
  } else if (scroll < 100) {
    nav.style.border = "none";
    nav.style.boxShadow = "#0a090c 0 0 15px";
    skillSlide.classList.remove("scrollBar");
    aboutSect.style.opacity = 0;
    navigateToTop();
  }
};

//set wiggle animation on random skills
const skillsList = document.querySelectorAll(".pngSkill");
const setWiggle = async () => {
  for (let i = 0; i < skillsList.length; i++) {
    skillsList[i].animate(wiggle, 1050, "swing") * 2;
  }
};

//set wiggle animation here:
const wiggle = [
  { transform: "rotate(0)" },
  { transform: "rotate(15deg)" },
  { transform: "rotate(0)" },
  { transform: "rotate(-15deg)" },
  { transform: "rotate(0)" },
];
