// Selectors

const HEADER = document.querySelector("#header");
const PRIMARY_NAVIGATION = document.querySelector(".primary_navigation");
const LOGIN_AND_SIGNUP = document.querySelector(".logIn-and-SignUp");

// Event
HEADER.addEventListener("click", (event) => {
  if (
    event.target.className === "dropDownBtn" ||
    event.target.className === "hamburgerBtn"
  ) {
    PRIMARY_NAVIGATION.classList.toggle("view");
    LOGIN_AND_SIGNUP.classList.toggle("view");
  }
});
