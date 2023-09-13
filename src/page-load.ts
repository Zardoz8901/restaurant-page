export default function pageLoad() {
    const body = document.querySelector('body');
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const contentWrapper = createDiv();
    const headerNavBar = createDiv();
    contentWrapper.setAttribute('id', 'content-wrapper');
    body.appendChild(contentWrapper);
    headerNavBar.setAttribute('id', 'header-nav-bar');
    contentWrapper.appendChild(headerNavBar);
}
