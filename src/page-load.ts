export default function pageLoad() {
    const body = document.querySelector('body');
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const contentWrapper = createDiv();
    const headerNavBar = createDiv();
    const reservationButton = createDiv();
    const headerDinnerMenu = createDiv();
    const aLaCarte = createDiv();
    const allergyDisclaimer = createDiv();
    const preFooterImage = createDiv();
    const footerNavBar = createDiv();
    const divArray = [
        contentWrapper,
        headerNavBar,
        reservationButton,
        headerDinnerMenu,
        aLaCarte,
        allergyDisclaimer,
        preFooterImage,
        footerNavBar,
    ];
    const idArray = [
        'content-wrapper',
        'header-nav-bar',
        'reservation-button',
        'header-dinner-menu',
        'a-la-carte',
        'allergy-disclaimer',
        'pre-footer-image',
        'footer-nav-bar',
    ];
    divArray.forEach((e, i) => {
        body.appendChild(e);
        e.setAttribute('id', idArray[i]);
    });
    divArray.slice(1).forEach((e) => {
        contentWrapper.appendChild(e);
    });

    // contentWrapper.setAttribute('id', 'content-wrapper');
    // body.appendChild(contentWrapper);
    // headerNavBar.setAttribute('id', 'header-nav-bar');
    // contentWrapper.appendChild(headerNavBar);
}
