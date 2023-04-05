const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');



tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
    tab.addEventListener('click', changeContent);
    console.log(tab);
}
);

let tabFocus = 0;

function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);

        if (e.keyCode === keyDownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        }

        if (e.keyCode === keyDownLeft) {
            tabFocus--;

            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }

        tabs[tabFocus].setAttribute('tabindex', 0);
        tabs[tabFocus].focus();
    }

};

function changeContent(e) {

    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")
    console.log(targetPanel);


    const currentTab = targetTab.parentNode;
    const mainPanel = currentTab.parentNode;

    //changing the active tab

    mainPanel.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
    targetTab.setAttribute('aria-selected', true);

    //hiding images and showing images
    mainPanel.querySelectorAll('[role="tablist"]').forEach((attr) => {
        attr.setAttribute("hidden", true)
    }
    );

    mainPanel.querySelectorAll('[role="tab-image"]').forEach((attr) => {
        attr.setAttribute("hidden", true)

    }
    );

    mainPanel.querySelector([`#${targetImage}`]).removeAttribute('hidden');


    //hiding and showing content
    showContent(mainPanel, targetPanel);




}

//hiding content

// function hideContent(parent, target) {
//     parent.querySelectorAll('target').forEach((attr) =>
//         attr.setAttribute('hidden', true))
// }

//showing content

function showContent(parent, target) {
    parent.querySelector([`#${target}`]).removeAttribute('hidden');
}