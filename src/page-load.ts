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
    // string sanitizer
    function capitalizeWith(input: string) {
        return input.replace(/^\bwith\b|\b\w+\b/g, (match) =>
            match.toLowerCase() === 'with' ? 'With' : match.toLowerCase()
        );
    }
    // instantiate header nav
    const idContentDivArray = [
        'content-wrapper',
        'header-nav',
        'reservation-button',
        'menu-section',
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
        if (i < 3) {
            const span = createSpan();
            const a = createAnchor();
            e.appendChild(a);
            a.textContent = idSpanArray[i];
            nodeDivArray[6].appendChild(span);
            span.textContent = idSpanArray[i];
        } else if (i >= 3 && i < 6) {
            const div = createDiv();
            e.appendChild(div);
            div.textContent = imageArray[i - 3];
        }
        if (i === 1) {
            const div = createDiv();
            nodeDivArray[5].appendChild(div);
            [, , , div.textContent] = imageArray;
        }
    });
    // instantiate menu section
    (() => {
        for (let i = 0; i < 8; i += 1) {
            const menuItem = createDiv();
            const menuItemTitle = createDiv();
            const menuItemDescritpion = createDiv();
            const menuItemPrice = createSpan();
            const currencySign = createSpan();
            menuItem.setAttribute('class', 'menu-item');
            menuItemTitle.setAttribute('class', 'menu-item-title');
            menuItemDescritpion.setAttribute('class', 'menu-item-description');
            menuItemPrice.setAttribute('class', 'menu-item-price');
            currencySign.setAttribute('class', 'currency-sign');
            nodeDivArray[3].appendChild(menuItem);
            menuItemPrice.appendChild(currencySign);
            menuItem.appendChild(menuItemPrice);
            menuItem.appendChild(menuItemTitle);
            menuItem.appendChild(menuItemDescritpion);
        }
        const menuItems = [
            'Chili Cup',
            'Hamburger',
            'Cheese Burger',
            'Bacon, Lettuce, Tomato',
            "Chef's Salad",
            'Tossed Green Salad',
            'Steak Tartare',
            'Roast Cornish Hen',
        ];
        const menuItemsArray = Array.from(document.querySelectorAll('.menu-item-title'));
        menuItemsArray.forEach((e, i) => {
            const div = createDiv();
            div.setAttribute('class', 'menu-item-text');
            div.textContent = capitalizeWith(menuItems[i]);
            e.appendChild(div);
        });
        const menuDescriptions = [
            'Spicy Mapo Chicken, Gochujang-Infused Beans',
            'With Waygu Chop, Fresh Kimchi, Sesame Mayo ',
            'With Bulgogi Beef, American Cheese, Gochujang Mayo',
            'Guanciale, Pickled Daikon',
            'Crispy Quinoa, Purple Shiso Leaves, Gochujang Dressing',
            'Watermelon Radish, Yuzu-Infused Avocado, Furikake',
            'With Quail Egg, Shiso Cress, Black Sesame Crackers',
            'With Kimchi Pancakes, Pickled Perilla Leaves',
        ];
        const menuDescriptionsArray = Array.from(
            document.querySelectorAll('.menu-item-description')
        );

        menuDescriptionsArray.forEach((e, i) => {
            const div = createDiv();
            div.setAttribute('class', 'menu-description-text');
            div.textContent = capitalizeWith(menuDescriptions[i]);
            e.appendChild(div);
        });
        const menuItemPrices = ['7', '16', '19', '18', '17', '15', '28', '35'];
        const menuItemPricArray = Array.from(document.querySelectorAll('.menu-item-price'));
        menuItemPricArray.forEach((e, i) => {
            const span = createSpan();
            span.setAttribute('class', 'item-price');
            span.textContent = menuItemPrices[i];
            e.appendChild(span);
        });
        const currencySignArray = Array.from(document.querySelectorAll('.currency-sign'));
        currencySignArray.forEach((e) => {
            e.textContent = '$';
        });
    })();
    // instantiate allergy disclaimer
    const allergyP = createP();
    allergyP.setAttribute('id', 'allergy-paragraph');
    nodeDivArray[4].appendChild(allergyP);
    allergyP.textContent =
        'Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.';
    // instantiate pre-footer image
    nodeDivArray[7].textContent = '©Zardoz8901';
}
