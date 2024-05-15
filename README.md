# Email Scheduler

Email Scheduler is a Node.js application that allows users to schedule daily emails at a specified date and time. This application uses Node.js, Express, Node-Cron, Nodemailer, and Moment-Timezone to provide a simple yet powerful email scheduling service.

## Features

- **Email Scheduling**: Schedule emails to be sent on a specified date and time.
- **User-friendly Interface**: Simple and intuitive web interface for scheduling emails.
- **Real-time Notifications**: Receive real-time feedback on the status of your scheduled emails.
- **Timezone Support**: Schedule emails based on your local timezone.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Scheduling**: Node-Cron
- **Email Service**: Nodemailer
- **Date/Time Handling**: Moment-Timezone

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/email-scheduler.git
    cd email-scheduler
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Configure the email transporter in `sendDailyEmail.js`:
    ```javascript
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Fill in the recipient's email address, subject, message, date, and time in the provided form.
2. Click "Schedule Email" to set the schedule.
3. You will receive a confirmation message once the email is successfully scheduled.

## License

This project is licensed under the MIT License.

---

Replace `your-username` with your actual GitHub username and `your-email@gmail.com` and `your-email-password` with your actual email and password or use environment variables for better security practices.
