export function locationRender() {
    const createDiv = () => {
        const div = document.createElement('div');
        return div;
    };
    const locationDivArray = [
        'location-header',
        'location-header-paragraph',
        'location-directions',
        'location-directions-paragraph',
    ];
    const location = createDiv();
    location.setAttribute('id', 'location-section');

    locationDivArray.forEach((e) => {
        const div = createDiv();
        div.setAttribute('id', e);
        location.appendChild(div);
    });
    return location;
}

export function locationPopulate() {
    const createSpan = () => {
        const span = document.createElement('span');
        return span;
    };
    const createP = () => {
        const p = document.createElement('p');
        return p;
    };
    const locationHeaderP = document.getElementById('location-header-paragraph');
    const locationDirectionsP = document.getElementById('location-directions-paragraph');
    const spanDescriptionArray = ['Moon Shuttle', 'Lunar Rover'];
    spanDescriptionArray.forEach((e) => {
        const span = createSpan();
        span.textContent = e;
        locationDirectionsP.appendChild(span);
    });
    const paragraphDescriptionArray = [
        "You'll find us in the serene and picturesque Tranquility Base, on the rim of the moon's South Pole-Aitken basin. ",
        "Our diner offers breathtaking views of the moon's surface, and celestial views of the blue dot.",
        'Hop on one of the frequent shuttles departing from various lunar transit hubs. Our shuttle service operates 24/7 for your convenience.',
        "For a more adventurous journey, rent a lunar rover and follow the pioneer trail to Dalg's Diner. The route takes you through a slice of the pre-Nectarian epoch.",
    ];
    paragraphDescriptionArray.forEach((e, i) => {
        if (i < 2) {
            const p = createP();
            p.textContent = e;
            locationHeaderP.appendChild(p);
        } else {
            const p2 = createP();
            p2.textContent = e;
            locationDirectionsP.appendChild(p2);
        }
    });
}
