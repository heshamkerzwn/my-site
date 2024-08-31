let p = document.querySelector("#light-button");
let body = document.querySelector("body");
let mainPage = document.querySelector(".main-page");
let aboutMe = document.querySelector(".about-me");
let information = document.querySelector(".information");
let formPage = document.querySelector(".section-form");
let navCont = document.querySelector(".nav-cont");
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let info = document.querySelector("#info");
let form = document.querySelector("#form");

p.onclick = () => {
  mainPage.classList.add("show-main");
  aboutMe.classList.add("show-about");
  information.classList.add("show-info");
  formPage.classList.add("show-form");
  navCont.classList.add("show-nav");
};

main.onclick = () => {
  mainPage.classList.add("visibile");
  body.classList.add("overflow");
  mainPage.classList.toggle("show-main");
  navCont.classList.toggle("show-nav");
  aboutMe.classList.remove("visibile");
  information.classList.remove("visibile");
  formPage.classList.remove("visibile");
};
about.onclick = () => {
  aboutMe.classList.add("visibile");
  body.classList.remove("overflow");
  aboutMe.classList.toggle("show-about");
  navCont.classList.toggle("show-nav");
  mainPage.classList.remove("visibile");
  information.classList.remove("visibile");
  formPage.classList.remove("visibile");
};
info.onclick = () => {
  information.classList.add("visibile");
  body.classList.add("overflow");
  information.classList.toggle("show-info");
  navCont.classList.toggle("show-nav");
  aboutMe.classList.remove("visibile");
  mainPage.classList.remove("visibile");
  formPage.classList.remove("visibile");
};
form.onclick = () => {
  formPage.classList.add("visibile");
  body.classList.add("overflow");
  formPage.classList.toggle("show-form");
  navCont.classList.toggle("show-nav");
  aboutMe.classList.remove("visibile");
  information.classList.remove("visibile");
  mainPage.classList.remove("visibile");
  console.log("click");
};
