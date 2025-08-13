const navMenu = document.querySelector('#menu');
const navButton = document.querySelector('#navButton');
const currentYear = new Date().getFullYear();

navButton.addEventListener
('click', () => {
    navButton.classList.toggle('show');
    navMenu.classList.toggle('show');
});

document.querySelector("#current-year").textContent = `© ${currentYear}`;

// wayfinding
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navigation ul li a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPath.endsWith(linkHref)) {
            navLinks.forEach(otherLink => otherLink.parentElement.classList.remove('current'));
            link.parentElement.classList.add('current');
        }
    });
});


// user input display
document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.querySelector('#enquiryForm');
    const timestampField = document.querySelector('#timestamp');

    if (timestampField) {
        const now = new Date();

        timestampField.value = now.toISOString();
    }

    if (joinForm) {
        joinForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = {
                firstName: document.querySelector('#firstname').value,

                lastName: document.querySelector('#lastname').value,

                location: document.querySelector('#location').value,

                email: document.querySelector('#email').value,

                reason: document.querySelector('#search').value,

                description: document.querySelector('#description').value,

                submissionDate: timestampField.value
            };

            localStorage.setItem('finalprojectFormData', JSON.stringify(formData));

            window.location.href = 'response.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const formDataString = localStorage.getItem('finalprojectFormData');
    const submissionDetails = document.querySelector('.submission');

    if (formDataString && submissionDetails) {
        const formData = JSON.parse(formDataString);

        document.querySelector('#display-firstName').textContent = formData.firstName;

        document.querySelector('#display-lastName').textContent = formData.lastName;

        document.querySelector('#display-location').textContent = formData.location;

        document.querySelector('#display-email').textContent = formData.email;

        document.querySelector('#display-reason').textContent = formData.reason;

        document.querySelector('#display-description').textContent = formData.description;

        const submissionDate = new Date(formData.submissionDate);
        document.querySelector('#display-submissionDate').textContent = submissionDate.toLocaleString();

    } else if (submissionDetails) {
        submissionDetails.innerHTML = '<p>No submission details found. Please submit the form first.</p>';
    }
});
