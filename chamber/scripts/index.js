const city = document.querySelector('#current-city');
const icon = document.querySelector('#weather-icon');
const description = document.querySelector('#weather-description');
const temperature = document.querySelector('#current-temperature');
const forecast = document.querySelector('#forecast-container');

const biz = 'data/members.json';
const cards = document.querySelector('#spotlight-container');

const key = "9cc0736186f6dc560c71decda190c73c"
const lat = "-1.272273"
const long = "36.726438"

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=4&appid=${key}`;


async function apiFetch() {
    try {
        const currentResponse = await fetch(currentUrl);
        if (currentResponse.ok) {
          const currentData = await currentResponse.json();
            displayCurrentWeather(currentData);

            const forecastResponse = await fetch(forecastUrl);
            if (forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                displayForecast(forecastData);
            } else {
                throw Error(await forecastResponse.text());
            }

        } else {
            throw Error(await currentResponse.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    city.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
}

function displayForecast(data) {
    forecast.innerHTML = '';

    if (!data.list || data.list.length < 4) {
        console.error('Not enough forecast data available');
        forecast.innerHTML = '<p>Forecast data not available</p>';
        return;
    }

    for (let i = 1; i <= 3; i++) {
        const day = data.list[i];
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', {
            weekday: 'short'
        });

        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <h4>${dayName}</h4>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
            <p>${day.weather[0].description}</p>
            <p>Temperature: ${Math.round(day.main.temp)}&deg;C</p>
        `;

        forecast.appendChild(forecastItem);
    }
}

async function getCompanyData() {
    const response = await fetch(biz);
    const companyData = await response.json();
    displaySpotlights(companyData.companies);
}

function displaySpotlights(companies) {
    const displayGold = Math.random() > 0.5;
    // Filter for gold or silver members
    const eligibleCompanies = companies.filter(company => {
        const levels = Object.values(company.membershiplevel);
        return displayGold ? levels.includes('gold') : levels.includes('silver');
    });

    // Randomly shuffle the array
    const shuffled = [...eligibleCompanies].sort(() => 0.5 - Math.random());

    // Select 2-3 companies
    const selectedCount = Math.min(2 + Math.floor(Math.random() * 2), shuffled.length);
    const selectedCompanies = shuffled.slice(0, selectedCount);

    selectedCompanies.forEach((company) => {
        let card = document.createElement('section');
        card.classList.add('company-card');

        let companyImage = document.createElement('img');
        let companyName = document.createElement('h2');
        let companyAddress = document.createElement('p');
        let companyNumber = document.createElement('p');
        let companyMembership = document.createElement('p');
        let companyYear = document.createElement('p');
        let companyWebsite = document.createElement('a');

        companyName.textContent = `${company.name}`;
        companyAddress.textContent = `${company.address}`;
        companyNumber.textContent = `${company.phonenumbers}`;

        companyMembership.textContent = `Membership Level: ${displayGold ? 'gold' : 'silver'}`;
            
        companyYear.textContent = `${company.yearofformation}`;
        companyWebsite.href = company.websiteurl;
        companyWebsite.textContent = `${company.websiteurl}`;

        companyImage.setAttribute('src', company.image);
        companyImage.setAttribute('alt', `Logo of ${company.name}`);
        companyImage.setAttribute('loading', 'lazy');
        companyImage.setAttribute('width', '1');
        companyImage.setAttribute('height', '1');

        card.appendChild(companyImage);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyNumber);
        card.appendChild(companyMembership);
        card.appendChild(companyYear);
        card.appendChild(companyWebsite);


        cards.appendChild(card);
    });
}

apiFetch();
getCompanyData();
