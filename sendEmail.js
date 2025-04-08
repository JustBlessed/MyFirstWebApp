const sgMail = require('@sendgrid/mail');

// Set your SendGrid API Key
sgMail.setApiKey('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'); 

const form = document.getElementById('myForm'); 
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const consent = document.querySelector('input[name="consent"]:checked').value;

    if (!fname || !lname || !email) {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Send the email
    const msg = {
        to: email, // User's email address
        from: 'your-email@example.com', // Your verified sender email
        subject: 'JESUS LOVES YOU',
        text: `Hello ${fname} ${lname}, welcome to the family! Thanks for making the important decision to make JESUS the LORD of your life. Kindly reply to this message by requesting for a bible and we will send you one. GOD bless you!`,
        html: `<strong>Hello ${fname} ${lname}, welcome to the family!</strong>`,
    };

    sgMail.send(msg)
        .then(() => {
            message.textContent = `Thank you, ${fname} ${lname}! Your email is ${email}. We have sent you a welcome message.`; 
        })
        .catch((error) => {
            message.textContent = 'Error sending email. Please try again later.';
            console.error('Error sending email:', error);
        });
});
