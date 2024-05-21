const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com', // Gmail host
	port: 465, // 465 for SSL
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
})

const sendEmail = async ({ to, subject, message }) => {
	try {
		await transporter.sendMail({
			from: `"${process.env.NICKNAME}" <${process.env.EMAIL_USER}>`,
			to,
			subject,
			text: message,
			html: `<p>${message}</p>`
		})
		console.log('Email sent successfully!')
	} catch (error) {
		console.error('Error sending email:', error)
	}
}

module.exports = sendEmail
