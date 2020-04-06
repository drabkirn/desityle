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