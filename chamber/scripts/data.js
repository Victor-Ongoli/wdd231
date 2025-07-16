const biz = 'data/members.json';
const cards = document.querySelector('#business');

async function getCompanyData() {
    const response = await fetch(biz);
    const companyData = await response.json();
    displayCompanies(companyData.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
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
        
        companyMembership.textContent = `${company.membershiplevel}`;
        const levels = Object.values(company.membershiplevel).join(', ');
        companyMembership.textContent = `Membership Levels: ${levels}`;

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
