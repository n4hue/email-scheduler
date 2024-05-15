const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const sendEmail = require('./sendDailyEmail');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

let emailJob;

app.post('/scheduleEmail', (req, res) => {
  const { to, subject, message, time } = req.body;

  if (emailJob) {
    emailJob.stop();
  }

  const [hour, minute] = time.split(':').map(Number);

  emailJob = cron.schedule(`${minute} ${hour} * * *`, () => {
    sendEmail({ to, subject, message });
  }, {
    scheduled: true,
    timezone: "America/Buenos_Aires"
  });

  emailJob.start();

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
