document.addEventListener('DOMContentLoaded', function() {
  const allBtnsSection = document.getElementById('allBtnsSection');
  const componentsContentSection = document.getElementById('componentsContentSection');
  
  const allBtnsSectionChildren = allBtnsSection.children;
  const componentsContentSectionChildren = componentsContentSection.children;
  
  for(let i = 0; i < allBtnsSectionChildren.length; i++) {
    (function() {
      let temp = i;
      allBtnsSectionChildren[temp].addEventListener('click', function() {
        hideAllContentExceptMentioned(componentsContentSectionChildren[temp]);
        window.location.href = "#content";
      });
    }()); // Run immediately - IE Support
  };

  function hideAllContentExceptMentioned(mentionedContent){
    for(let i = 0; i < componentsContentSectionChildren.length; i++) {
      (function() {
        let temp = i;

        if (componentsContentSectionChildren[temp] === mentionedContent) {
          componentsContentSectionChildren[temp].style.display = "block";
        } else {
          componentsContentSectionChildren[temp].style.display = "none";
        }
      }());
    }
  };

  hideAllContentExceptMentioned("");
});



// Pagination Demo START
document.addEventListener('DOMContentLoaded', function() {
  const paginationLiATags = document.querySelectorAll('.pagination li a');

  if(paginationLiATags) {
    for (let i = 0; i < paginationLiATags.length; i++) {
      (function(){
        let temp = i;
        paginationLiATags[temp].addEventListener("click", function() {
          for(let j = 0; j < paginationLiATags.length; j++) {
            paginationLiATags[j].className = "";
          }
          paginationLiATags[temp].className = "pagination-active";
        });
      }()); // Run immediately - IE Support
    } 
  }
});
// Pagination Demo END



// TOC Demo START
document.addEventListener('DOMContentLoaded', function() {
  const mainLi = document.querySelectorAll('.ol-toc .ol-toc-item:nth-child(odd)');
  const nestedLi = document.querySelectorAll('.ol-toc .ol-toc-item .ol-toc-nested li');

  if(mainLi) {
    for(let i = 0; i < mainLi.length; i++) {
      (function() {
        let temp = i;

        let nextEle = mainLi[temp].nextElementSibling;
        nextEle.style.display = "none";

        mainLi[temp].addEventListener('click', function() {
          if(nextEle.style.display === "none") nextEle.style.display = "block";
          else nextEle.style.display = "none";
        });
      }()); // Run immediately - IE Support
    }

    for(let i = 0; i < nestedLi.length; i++) {
      (function(){
        let temp = i;
        nestedLi[temp].addEventListener('click', function() {
          window.location.href = nestedLi[temp].dataset.href;
        });
      }()); // Run immediately - IE Support
    }
  }
});
// TOC Demo END



// Image Click fullscreen Demo START
document.addEventListener('DOMContentLoaded', function() {
  const allImageClickFullscreen = document.querySelectorAll('.image-click-fullscreen');

  const body = document.querySelector('body');

  let isImageFullscreenOpen = false;

  for(let i = 0; i < allImageClickFullscreen.length; i++) {
    (function() {
      let temp = i;

      allImageClickFullscreen[temp].addEventListener('click', function(e) {
        const createImageFullscreenOverlay = document.createElement("div");
        const createNestedImageFullscreenOverlay = document.createElement("div");
  
        createImageFullscreenOverlay.className = "image-fullscreen-overlay align-center";
  
        createNestedImageFullscreenOverlay.className = "image-fullscreen-overlay-nested";
  
        let imageInsideFullscreenOverlay = e.target.cloneNode(true);
        imageInsideFullscreenOverlay.className = "image-inside-fullscreen-overlay-nested";
  
        createNestedImageFullscreenOverlay.innerHTML = imageInsideFullscreenOverlay.outerHTML;
  
        if(allImageClickFullscreen[temp].dataset.caption) {
          const caption = allImageClickFullscreen[temp].dataset.caption;
          const spanCaption = document.createElement("span");
          const br = document.createElement("br");
          const br2 = document.createElement("br");
          spanCaption.className = "fs-1-2 italic py-5";
          spanCaption.innerText = caption;
          createNestedImageFullscreenOverlay.appendChild(br);
          createNestedImageFullscreenOverlay.appendChild(br2);
          createNestedImageFullscreenOverlay.appendChild(spanCaption);
        }
  
        createImageFullscreenOverlay.appendChild(createNestedImageFullscreenOverlay);
        e.target.parentElement.appendChild(createImageFullscreenOverlay);
  
        body.style.overflow = "hidden";
        isImageFullscreenOpen = true;
  
        createImageFullscreenOverlay.addEventListener('click', function() {
          createImageFullscreenOverlay.parentNode.removeChild(createImageFullscreenOverlay);
          body.style.overflow = "scroll";
          isImageFullscreenOpen = false;
        });
      });
    }()); // Run immediately - IE Support
  }
});
// Image Click fullscreen Demo END



// Content click modal Demo START
document.addEventListener('DOMContentLoaded', function() {
  const allContentClickModals = document.querySelectorAll('.content-click-modal');
  const allModals = document.querySelectorAll('.modal');

  const body = document.querySelector('body');

  let isModalOpened = false;
  let modalNumber;

  for (let i = 0; i < allModals.length; i++) {
    (function(){
      let temp = i;

      allContentClickModals[temp].addEventListener('click', function() {
        body.style.overflow = "hidden";
        allModals[temp].style.display = "block";
        modalNumber = temp;
        isModalOpened = true;
        window.location.href = "#modal-dialog";
      });
  
      allModals[temp].addEventListener('click', function(e) {
        if(isModalOpened) {
          if(e.target.id === "modal" || e.target.id === "modal-close") {
            body.style.overflow = "auto";
            allModals[modalNumber].style.display = "none";
            isModalOpened = false;
            window.location.href = "#componentsContentSection";
          }
        }
      });
    }());
  }
});
// Content click modal Demo END