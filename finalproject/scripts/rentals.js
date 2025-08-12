const rentals = 'data/rentals.json';
const posters = document.querySelector('#rentals');

async function getRentals() {
    try {
        const response = await fetch(rentals);
        const data = await response.json();
        displayRentals(data.rentals)
    } catch (error) {
        console.error(error);
    }
}

getRentals();

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let poster = document.createElement('div')
        poster.classList.add('cube');

        let rentalSize = document.createElement('h3');
        let rentalLocation = document.createElement('address');
        let rentalImage = document.createElement('img');
        let rentalPrice = document.createElement('p');

        rentalSize.textContent = rental.Size;
        rentalLocation.textContent = rental.location;

        rentalImage.setAttribute('src', rental.image);
        rentalImage.setAttribute('alt', `${rental.location}`);
        rentalImage.setAttribute('loading', 'lazy');
        rentalImage.setAttribute('width', '1');
        rentalImage.setAttribute('height', '1');

        rentalPrice.textContent = rental.price;

        poster.appendChild(rentalSize);
        poster.appendChild(rentalLocation);
        poster.appendChild(rentalImage);
        poster.appendChild(rentalPrice);

        posters.appendChild(poster)

    });
}