export default function pageLoad() {
    const body = document.querySelector('body');
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const createSpan = () => {
        const span = document.createElement('span');
        return span;
    };
    const createP = () => {
        const p = document.createElement('p');
        return p;
    };
    const createAnchor = () => {
        const a = document.createElement('a');
        return a;
    };
    // instantiate header nav
    const idContentDivArray = [
        'content-wrapper',
        'header-nav',
        'reservation-button',
        'info-section',
        'allergy-disclaimer',
        'pre-footer-image',
        'footer-nav',
        'copyright',
    ];
    const idSpanArray = [
        'menu',
        'contact',
        'location',
        'header-logo',
        'header-restaurant-name',
        'header-social-icon',
        'spacer',
        'spacer2',
    ];

    const imageArray = ['img1', "dalg's diner", 'img3', 'img4'];
    idContentDivArray.forEach((e) => {
        const div = createDiv();
        body.appendChild(div);
        div.setAttribute('id', e);
    });
    idSpanArray.forEach((e) => {
        const span = createSpan();
        body.appendChild(span);
        span.setAttribute('id', e);
    });
    // instantiate divs and spans
    const contentWrapper = document.getElementById('content-wrapper');
    const nodeDivArray = Array.from(document.querySelectorAll('div'));
    nodeDivArray.slice(1).forEach((e) => {
        contentWrapper.appendChild(e);
    });
    nodeDivArray[1].setAttribute('role', 'navigation');
    nodeDivArray[1].setAttribute('aria-label', 'Main');
    // instantiate span menu and images on header and footer
    const nodeSpanArray = Array.from(document.querySelectorAll('span'));
    nodeSpanArray.forEach((e, i) => {
        nodeDivArray[1].appendChild(e);
        // set contact menu location links
        if (i < 3) {
            const a = createAnchor();
            const a2 = createAnchor();
            const span2 = createSpan();
            e.appendChild(a);
            a.textContent = idSpanArray[i];
            nodeDivArray[6].appendChild(span2);
            span2.appendChild(a2);
            a2.textContent = idSpanArray[i];
        } else if (i >= 3 && i < 6) {
            const div = createDiv();
            e.appendChild(div);
            div.textContent = imageArray[i - 3];
        }
        // insantiate images
        if (i === 1) {
            const div = createDiv();
            nodeDivArray[5].appendChild(div);
            [, , , div.textContent] = imageArray;
        }
    });
    // instantiate allergy disclaimer
    const allergyP = createP();
    allergyP.setAttribute('id', 'allergy-paragraph');
    nodeDivArray[4].appendChild(allergyP);
    allergyP.textContent =
        'Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.';
    // instantiate pre-footer image
    nodeDivArray[7].textContent = '©Zardoz8901';
    return nodeDivArray;
}
