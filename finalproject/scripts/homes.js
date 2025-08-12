const cribs = 'data/homes.json';
const cards = document.querySelector('#home');

async function getData() {
    try {
        const response = await fetch(cribs);
        const info = await response.json();
        displayInfo(info.houses);
    } catch (error) {
        console.error(error);
    }
}

getData();

const displayInfo = (houses) => {
    houses.forEach((house) => {
        let card = document.createElement('div')
        card.classList.add('container');

        let houseType = document.createElement('h3');
        let houseAddress = document.createElement('address');
        let houseImage = document.createElement('img');
        let housePrice = document.createElement('p');
        let houseYearBuilt = document.createElement('h4')
        
        houseType.textContent = house.housetype;
        houseAddress.textContent = house.location;

        houseImage.setAttribute('src', house.image);
        houseImage.setAttribute('alt', `${house.housetype}`);
        houseImage.setAttribute('loading', 'lazy');
        houseImage.setAttribute('width', '1');
        houseImage.setAttribute('height', '1');

        housePrice.textContent = house.price;
        houseYearBuilt.textContent = house.yearbuilt;
        
        card.appendChild(houseType);
        card.appendChild(houseAddress);
        card.appendChild(houseImage);
        card.appendChild(housePrice);
        card.appendChild(houseYearBuilt);

        cards.appendChild(card)

    });
}