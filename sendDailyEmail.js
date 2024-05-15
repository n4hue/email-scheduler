const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Gmail host
  port: 465, // 465 for SSL
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'nahuelgamer584@gmail.com',
    pass: 'kymq ojkb bhwd eprv',
  },
});

const sendEmail = async ({ to, subject, message }) => {
  try {
    await transporter.sendMail({
      from: '"Nahuel Nicolás Vignolo" <nahuelgamer584@gmail.com>',
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
