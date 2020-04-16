const allBtnsSection = document.getElementById('allBtnsSection');
const componentsContentSection = document.getElementById('componentsContentSection');

const allBtnsSectionChildren = allBtnsSection.children;
const componentsContentSectionChildren = componentsContentSection.children;

for(let i = 0; i < allBtnsSectionChildren.length; i++) {
  allBtnsSectionChildren[i].addEventListener('click', (e) => {
    hideAllContentExceptMentioned(componentsContentSectionChildren[i]);
    window.location.href = "#content";
  });
};

function hideAllContentExceptMentioned(mentionedContent = ""){
  for(let i = 0; i < componentsContentSectionChildren.length; i++) {
    if (componentsContentSectionChildren[i] === mentionedContent) {
      componentsContentSectionChildren[i].style.display = "block";
    } else {
      componentsContentSectionChildren[i].style.display = "none";
    }
  }
};

hideAllContentExceptMentioned();



// Pagination Demo START
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
// Pagination Demo END



// TOC Demo START
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
// TOC Demo END



// Image Click fullscreen Demo START
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
// Image Click fullscreen Demo END