import "../scss/imports.scss";

// Load Event - run script once window has loaded
window.addEventListener("load", () => {
  const nav = document.querySelector("#header-nav");

  // Mobile Menu, Hamburger and Close Icon function
  function mobileMenu() {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const closeMenuIcon = document.querySelector("#close-menu-icon");

    hamburgerIcon.addEventListener("click", () => {
      nav.classList.add("header__nav-show");
      closeMenuIcon.classList.add("header__close-menu--toggle");
      hamburgerIcon.classList.add("header__hamburger-icon--toggle");
    });

    closeMenuIcon.addEventListener("click", () => {
      nav.classList.remove("header__nav-show");

      hamburgerIcon.classList.toggle("header__hamburger-icon--toggle");
      closeMenuIcon.classList.toggle("header__close-menu--toggle");
    });
  }

  mobileMenu();
});
