const realms = 'data/lands.json';
const boards = document.querySelector('#land');

async function getInfo() {
    try {
        const response = await fetch(realms);
        const data = await response.json();
        displayData(data.lands)
    } catch (error) {
        console.error(error);
    }
}

getInfo();

const displayData = (lands) => {
    lands.forEach((land) => {
        let board = document.createElement('div')
        board.classList.add('box');

        let landTitle = document.createElement('h3');
        let landLocation = document.createElement('address');
        let landImage = document.createElement('img');
        let landPrice = document.createElement('p');
        let landSize = document.createElement('h4')

        landTitle.textContent = land.title;
        landLocation.textContent = land.location;

        landImage.setAttribute('src', land.image);
        landImage.setAttribute('alt', `${land.title}`);
        landImage.setAttribute('loading', 'lazy');
        landImage.setAttribute('width', '1');
        landImage.setAttribute('height', '1');

        landPrice.textContent = land.price;
        landSize.textContent = land.size;

        board.appendChild(landTitle);
        board.appendChild(landLocation);
        board.appendChild(landImage);
        board.appendChild(landPrice);
        board.appendChild(landSize);

        boards.appendChild(board)

    });
}