export default function pageLoad() {
    const body = document.querySelector('body');
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
    idArray.forEach((i) => {
        const div = document.createElement('div');
        body.appendChild(div);
        div.setAttribute('id', i);
    });
    const contentWrapper = document.getElementById('content-wrapper');
    const divArray = Array.from(document.querySelectorAll('div'));
    divArray.slice(1).forEach((e) => {
        contentWrapper.appendChild(e);
    });
}
