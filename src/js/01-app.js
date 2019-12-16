document.addEventListener('DOMContentLoaded', () => {
  const htmlTag = document.querySelector('html');

  const fixedNavbar = document.querySelector('.fixed-navbar');
  const fixedNavbarHamburgerMenuButton = document.querySelector('.fixed-navbar-hamburger a');
  const fixedNavbarHamburgerMenuAllLinks = document.querySelector('.fixed-navbar-hamburger .fixed-navbar-hamburger-links');
  const defaultNavbarHamburgerMenuButton = document.querySelector('.default-navbar-hamburger a');
  const defaultNavbarHamburgerMenuAllLinks = document.querySelector('.default-navbar-hamburger .default-navbar-hamburger-links');

  // Navbar Scroll
  document.addEventListener('scroll', () => {
    if(htmlTag.scrollTop > 70) {
      fixedNavbar.style.display = "block";
    }
    else {
      fixedNavbar.style.display = "none";
    }
  });

  // Navbar Hamburgers
  fixedNavbarHamburgerMenuButton.addEventListener('click', () => {
    if (fixedNavbarHamburgerMenuAllLinks.style.display === "block") {
      fixedNavbarHamburgerMenuAllLinks.style.display = "none";
    } else {
      fixedNavbarHamburgerMenuAllLinks.style.display = "block";
    }
  });

  defaultNavbarHamburgerMenuButton.addEventListener('click', () => {
    if (defaultNavbarHamburgerMenuAllLinks.style.display === "block") {
      defaultNavbarHamburgerMenuAllLinks.style.display = "none";
    } else {
      defaultNavbarHamburgerMenuAllLinks.style.display = "block";
    }
  });
});