export default function menuRender() {
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const createSpan = () => {
        const span = document.createElement('span');
        return span;
    };
    const menu = createDiv();
    // string sanitizer
    function capitalizeWith(input: string) {
        return input.replace(/^\bwith\b|\b\w+\b/g, (match) =>
            match.toLowerCase() === 'with' ? 'With' : match.toLowerCase()
        );
    }
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
            menu.appendChild(menuItem);
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
}
