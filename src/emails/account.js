const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: "shree.krishna.sap1@gmail.com",
        subject: "Thanks for Signing In",
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    });
};
const sendCancellationEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: "shree.krishna.sap1@gmail.com",
        subject: "Sorry to see you go!!",
        text: `Goodbye, ${name}. Hope to see you sometime soon.`
    });
};

module.exports = {sendWelcomeEmail, sendCancellationEmail};