import pageLoad from './page-load';
import { menuRender, menuPopulate } from './menu';
import './style.css';
import { locationRender, locationPopulate } from './location';

pageLoad();
const menuNode = menuRender();
const locationNode = locationRender();
const anchorsArray = Array.from(document.querySelectorAll('a'));
const infoSection = document.getElementById('info-section');
const menuNav = anchorsArray.filter((e) => e.innerText === 'menu');
const contactNav = anchorsArray.filter((e) => e.innerText === 'contact');
const locationNav = anchorsArray.filter((e) => e.innerText === 'location');

(() => {
    infoSection.appendChild(menuNode);
    menuPopulate();
})();

function switchSection(newSectionNode: HTMLElement, populateFunction: any) {
    // Remove the current section (if any)
    while (infoSection.firstChild) {
        infoSection.removeChild(infoSection.firstChild);
    }

    // Append the new section and populate it
    infoSection.appendChild(newSectionNode);
    populateFunction();
}

// Add event listeners for the "menu" and "location" links
locationNav.forEach((element) =>
    element.addEventListener('click', () => {
        switchSection(locationNode, locationPopulate);
    })
);

menuNav.forEach((element) =>
    element.addEventListener('click', () => {
        switchSection(menuNode, menuPopulate);
    })
);
