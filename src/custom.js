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