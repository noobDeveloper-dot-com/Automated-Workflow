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

document.addEventListener("click", (e) => {
  // This line checks if the element that was clicked (e.target) is a dropdown button. It does this by checking if the clicked element matches the CSS selector [data-dropdown-button].
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  //This line selects all dropdown menus that are currently active (i.e., visible) on the page.
  const dropDownMenus = document.querySelectorAll("[data-dropDownMenu].active");

  //This block of code loops over each active dropdown menu and removes the ‘active’ class from it, which hides the dropdown menu.
  dropDownMenus.forEach((ddm) => {
    ddm.classList.remove("active");
  });

  // This block of code checks if the clicked element is a dropdown button.
  //If it is, it finds the dropdown menu associated with the clicked dropdown button and adds the ‘active’ class to it, which shows the dropdown menu.
  if (isDropdownButton) {
    const currentDropDownMenu = e.target
      .closest("[data-dropdown]")
      .querySelector("[data-dropDownMenu]");
    currentDropDownMenu.classList.toggle("active");
  }
});
