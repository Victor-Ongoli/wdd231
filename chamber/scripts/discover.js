const things = 'data/interest.json';
const cards = document.querySelector('#area');

async function getData() {
    const response = await fetch(things);
    const data = await response.json();
    displayData(data.interests);
}

getData();

const displayData = (interests) => {
    interests.forEach((interest) => {
        let card = document.createElement('div');
        card.classList.add('box');

        let companyName = document.createElement('h2');
        let companyAddress = document.createElement('address');
        let companyImage = document.createElement('img');
        let companyInfo = document.createElement('p');
        let companyWebsite = document.createElement('a');

        companyName.textContent = interest.title;
        companyAddress.textContent = interest.address;
        companyInfo.textContent = interest.description;

        companyImage.setAttribute('src', interest.image);
        companyImage.setAttribute('alt', `${interest.title}`);
        companyImage.setAttribute('loading', 'lazy');
        companyImage.setAttribute('width', '1'); 
        companyImage.setAttribute('height', '1');

        companyWebsite.textContent = 'Visit Website';
        companyWebsite.setAttribute('href', interest.website);
        companyWebsite.setAttribute('target', '_blank');

        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyImage);
        card.appendChild(companyInfo);
        card.appendChild(companyWebsite);

        cards.appendChild(card);
    });
}


const visitMessage = document.getElementById('visit');

const currentDate = Date.now();

const lastVisitDate = localStorage.getItem('display-submissionDate');

// --- localStorage and Visit Message Logic ---
if (lastVisitDate) {
    // If a last visit date exists, calculate the time difference
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysSinceLastVisit = Math.floor((currentDate - lastVisitDate) / millisecondsInDay);

    if (daysSinceLastVisit < 1) {
        // If it's the same day or less than 24 hours
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        // If it's exactly 1 day ago, use 'day' (singular)
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        // Otherwise, use 'days' (plural)
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
} else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('last-visit', currentDate);
