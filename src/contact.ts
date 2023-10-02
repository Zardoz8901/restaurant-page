export function contactRender() {
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const contact = createDiv();
    contact.setAttribute('id', 'contact-section');
    const contactDivArray = ['address', 'phone'];
    contactDivArray.forEach((e) => {
        const div = createDiv();
        div.setAttribute('id', e);
        contact.appendChild(div);
    });
    return contact;
}

export function contactPopulate() {
    const createSpan = () => {
        const span = document.createElement('span');
        return span;
    };
    const createP = () => {
        const p = document.createElement('p');
        return p;
    };
    const contactAddressId = document.getElementById('address');
    const contactPhoneId = document.getElementById('phone');
    const spanArray = ['Address', 'Moon Phone'];
    const paragraphArray = ['Tranquility Base, Moon', '+1000 (555) 123-4567'];
    spanArray.forEach((e, i) => {
        if (i < 1) {
            const span = createSpan();
            span.textContent = e;
            contactAddressId.appendChild(span);
        } else {
            const span2 = createSpan();
            span2.textContent = e;
            contactPhoneId.appendChild(span2);
        }
    });
    paragraphArray.forEach((e, i) => {
        if (i < 1) {
            const p = createP();
            p.textContent = e;
            contactAddressId.appendChild(p);
        } else {
            const p2 = createP();
            p2.textContent = e;
            contactPhoneId.appendChild(p2);
        }
    });
}
