// Remove all pages except the selected onces
function removePages() {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("viewPage");
  });
}

// Home

const LOGO = document.querySelector("#main-logo");

LOGO.addEventListener("click", () => {
  removePages();

  const SELECTED_PAGE = document.querySelector(LOGO.dataset.switchTo);

  SELECTED_PAGE.classList.add("viewPage");

  // Scroll to top
  window.scrollTo(0, 0);
});

// Product Sub Menu list

const PRODUCT_SUB_MENU = document.querySelector("#product");

PRODUCT_SUB_MENU.addEventListener("click", (event) => {
  removePages();

  const SELECTED_PAGE = document.querySelector(event.target.dataset.switchTo);

  SELECTED_PAGE.classList.add("viewPage");

  // Scroll to top
  window.scrollTo(0, 0);
});
