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
    // instantiate header nav
    const idContentDivArray = [
        'content-wrapper',
        'header-nav',
        'reservation-button',
        'menu-section',
        'allergy-disclaimer',
        'pre-footer-image',
        'footer-nav',
    ];
    const idHeaderSpanArray = ['menu', 'contact', 'location', 'image', 'restaurant', 'social'];
    idContentDivArray.forEach((e) => {
        const div = createDiv();
        body.appendChild(div);
        div.setAttribute('id', e);
    });
    idHeaderSpanArray.forEach((e) => {
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
    const nodeSpanArray = Array.from(document.querySelectorAll('span'));
    nodeSpanArray.forEach((e) => {
        nodeDivArray[1].appendChild(e);
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
            'Hamburber',
            'Cheese Burger',
            'Bacon, Lettuce, Tomato',
            "Chef's Salad",
            'Tossed Green Salad',
            'Steak Tartare',
            'Roast Cornish Hen',
        ];
        const menuItemsArray = Array.from(document.getElementsByClassName('menu-item-title'));
        console.log(menuItemsArray);
        menuItemsArray.forEach((e, i) => {
            const div = createDiv();
            div.setAttribute('class', 'menu-item-text');
            div.textContent = menuItems[i];
            e.appendChild(div);
        });
        const menuDescriptions = [
            'Spicy Bulgogi Beef, Gochujang-Infused Beans',
            'With Sesame Mayo, Fresh Kimchi',
            'With American Cheese, Gochujang Mayo',
            'Guanciale, Pickled Daikon',
            'Crispy Quinoa, Purple Shiso Leaves, Gochujang Dressing',
            'Watermelon Radish, Yuzu-Infused Avocado, Furikake',
            'With Quail Egg, Shiso Cress, Black Sesame Crackers',
            'With Kimchi Pancakes, Pickled Perilla Leaves',
        ];
        const menuDescriptionsArray = Array.from(
            document.getElementsByClassName('menu-item-description')
        );

        menuDescriptionsArray.forEach((e, i) => {
            const div = createDiv();
            div.setAttribute('class', 'menu-description-text');
            div.textContent = menuDescriptions[i];
            e.appendChild(div);
        });
    })();
    // instantiate allergy disclaimer
    const allergyP = createP();
    allergyP.setAttribute('id', 'allergy-paragraph');
    nodeDivArray[4].appendChild(allergyP);
    allergyP.textContent =
        'Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.';
}
