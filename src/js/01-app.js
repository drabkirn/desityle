// ADD LICENSE HERE


// Navbar configuration START
document.addEventListener('DOMContentLoaded', () => {
  const htmlTag = document.querySelector('html');

  const fixedNavbar = document.querySelector('.fixed-navbar');

  if(fixedNavbar) {
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
  }
});
// Navbar configuration END



// Pagination START
document.addEventListener('DOMContentLoaded', () => {
  const paginationLiATags = document.querySelectorAll('.pagination li a');

  if(paginationLiATags) {
    for (let i = 0; i < paginationLiATags.length; i++) {
      paginationLiATags[i].addEventListener("click", () => {
        paginationLiATags.forEach((aTag) => aTag.className = "");
        paginationLiATags[i].className = "pagination-active";
      });
    } 
  }
});
// Pagination END



// TOC START
document.addEventListener('DOMContentLoaded', () => {
  const mainLi = document.querySelectorAll('.ol-toc .ol-toc-item:nth-child(odd)');
  const nestedLi = document.querySelectorAll('.ol-toc .ol-toc-item .ol-toc-nested li');

  if(mainLi) {
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
        window.location.href = nestedLi[i].dataset.href;
      });
    }
  }
});
// TOC END



// Image Click fullscreen START
document.addEventListener('DOMContentLoaded', () => {
  const allImageClickFullscreen = document.querySelectorAll('.image-click-fullscreen');

  const body = document.querySelector('body');

  let isImageFullscreenOpen = false;

  for(let i = 0; i < allImageClickFullscreen.length; i++) {
    allImageClickFullscreen[i].addEventListener('click', (e) => {
      const createImageFullscreenOverlay = document.createElement("div");
      const createNestedImageFullscreenOverlay = document.createElement("div");

      createImageFullscreenOverlay.className = "image-fullscreen-overlay align-center";

      createNestedImageFullscreenOverlay.className = "image-fullscreen-nested-overlay";

      let imageInsideFullscreenOverlay = e.target.cloneNode(true);
      imageInsideFullscreenOverlay.className = "image-inside-fullscreen-overlay";

      createNestedImageFullscreenOverlay.innerHTML = imageInsideFullscreenOverlay.outerHTML;

      if(allImageClickFullscreen[i].dataset.caption) {
        const caption = allImageClickFullscreen[i].dataset.caption;
        const spanCaption = document.createElement("span");
        const br = document.createElement("br");
        const br2 = document.createElement("br");
        spanCaption.className = "fs-1-2 font-italic";
        spanCaption.innerText = caption;
        createNestedImageFullscreenOverlay.appendChild(br);
        createNestedImageFullscreenOverlay.appendChild(br2);
        createNestedImageFullscreenOverlay.appendChild(spanCaption);
      }

      createImageFullscreenOverlay.appendChild(createNestedImageFullscreenOverlay);
      e.target.parentElement.appendChild(createImageFullscreenOverlay);

      body.style.overflow = "hidden";
      isImageFullscreenOpen = true;

      createImageFullscreenOverlay.addEventListener('click', (e1) => {
        createImageFullscreenOverlay.remove();
        body.style.overflow = "scroll";
        isImageFullscreenOpen = false;
      });
    });
  }
});
// Image Click fullscreen END