// ADD LICENSE HERE


// Navbar configuration START
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
// Navbar configuration END



// Pagination START
document.addEventListener('DOMContentLoaded', () => {
  const paginationLiATags = document.querySelectorAll('.pagination li a');

  for (let i = 0; i < paginationLiATags.length; i++) {
    paginationLiATags[i].addEventListener("click", () => {
      paginationLiATags.forEach((aTag) => aTag.className = "");
      paginationLiATags[i].className = "pagination-active";
    });
  } 
});
// Pagination END



// TOC START
document.addEventListener('DOMContentLoaded', () => {
  const mainLi = document.querySelectorAll('.ol-toc .ol-toc-item:nth-child(odd)');
  const nestedLi = document.querySelectorAll('.ol-toc .ol-toc-item .ol-toc-nested li');

  for(let i = 0; i < mainLi.length; i++) {
    let nextEle = mainLi[i].nextElementSibling;
    nextEle.style.display = "none";
    
    mainLi[i].addEventListener('click', () => {
      if(nextEle.style.display === "none") nextEle.style.display = "block";
      else nextEle.style.display = "none";
    });
  }

  for(let i = 0; i < nestedLi.length; i++) {
    nestedLi[i].addEventListener('click', () => {
      window.location.href = "#" + nestedLi[i].dataset.href;
    });
  }
});
// TOC END