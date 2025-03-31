// Get the form and message elements
const form = document.getElementById('myForm');
const message = document.getElementById('message');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const consent = document.querySelector('input[name="consent"]:checked').value;

    // Basic validation (add more as needed)
    if (!fname || !lname || !email) {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Construct message
    let msg = `Thank you, ${fname} ${lname}! Your email is ${email}.`;
    if (consent === 'Yes') {
        msg += ' We will contact you via email.';
    } else {
        msg += ' We will not contact you via email.';
    }

    message.textContent = msg;
});
