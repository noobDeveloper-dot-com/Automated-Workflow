// Selectors

const HEADER = document.querySelector("#header");
const PRIMARY_DROPDOWN_BTN = document.querySelector("#primary-dropDownBtn");
const HAMBURGER_BTN = document.querySelector("#hamburgerBtn");
const PRIMARY_NAVIGATION = document.querySelector(".primary_navigation");
const LOGIN_AND_SIGNUP = document.querySelector(".logIn-and-SignUp");

// Events
PRIMARY_DROPDOWN_BTN.addEventListener("click", () => {
  PRIMARY_NAVIGATION.classList.toggle("view");
  LOGIN_AND_SIGNUP.classList.toggle("view");
});

HAMBURGER_BTN.addEventListener("click", () => {
  PRIMARY_NAVIGATION.classList.toggle("view");
  LOGIN_AND_SIGNUP.classList.toggle("view");
});
