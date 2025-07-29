document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.querySelector('#joinForm');
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
                email: document.querySelector('#email').value,
                phoneNumber: document.querySelector('#number').value,
                businessName: document.querySelector('#business').value,
                submissionDate: timestampField.value 
            };

            localStorage.setItem('chamberFormData', JSON.stringify(formData));

            window.location.href = 'thankyou.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const formDataString = localStorage.getItem('chamberFormData');
    const submissionDetailsDiv = document.querySelector('.submission-details');

    if (formDataString && submissionDetailsDiv) {
        const formData = JSON.parse(formDataString);

        document.querySelector('#display-firstName').textContent = formData.firstName;
        document.querySelector('#display-lastName').textContent = formData.lastName;
        document.querySelector('#display-email').textContent = formData.email;
        document.querySelector('#display-phoneNumber').textContent = formData.phoneNumber;
        document.querySelector('#display-businessName').textContent = formData.businessName;

        const submissionDate = new Date(formData.submissionDate);
        document.querySelector('#display-submissionDate').textContent = submissionDate.toLocaleString();

    } else if (submissionDetailsDiv) {
        submissionDetailsDiv.innerHTML = '<p>No submission details found. Please submit the form first.</p>';
    }
});