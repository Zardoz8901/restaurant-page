import pageLoad from './page-load';
import { menuRender, menuPopulate } from './menu';
import './style.css';
import { locationRender, locationPopulate } from './location';
import { contactRender, contactPopulate } from './contact';

pageLoad();
const menuNode = menuRender();
const locationNode = locationRender();
const contactNode = contactRender();
const anchorsArray = Array.from(document.querySelectorAll('a'));
const infoSection = document.getElementById('info-section');
const menuNav = anchorsArray.filter((e) => e.innerText === 'menu');
const contactNav = anchorsArray.filter((e) => e.innerText === 'contact');
const locationNav = anchorsArray.filter((e) => e.innerText === 'location');

(() => {
    infoSection.appendChild(menuNode);
    menuPopulate();
})();

function switchSection(newSectionNode: HTMLElement) {
    // Remove the current section (if any)
    while (infoSection.firstChild) {
        infoSection.removeChild(infoSection.firstChild);
    }

    // Append the new section and populate it
    infoSection.appendChild(newSectionNode);
}

// Add event listeners for the "menu", "contact", and "location" links
locationNav.forEach((element, i) =>
    element.addEventListener('click', () => {
        switchSection(locationNode);
        // jamming a stick in the works
        if (i < 1) {
            locationPopulate();
            i = 1;
        }
    })
);

contactNav.forEach((element, i) =>
    element.addEventListener('click', () => {
        switchSection(contactNode);
        // jamming a stick in the works
        if (i < 1) {
            contactPopulate();
            i = 1;
        }
    })
);

menuNav.forEach((element) =>
    element.addEventListener('click', () => {
        switchSection(menuNode);
    })
);
