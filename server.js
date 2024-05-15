const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const sendEmail = require('./sendDailyEmail');
const moment = require('moment-timezone');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

let emailJob;

app.post('/scheduleEmail', (req, res) => {
  const { to, subject, message, date, time } = req.body;

  if (emailJob) {
    emailJob.stop();
  }

  const [hour, minute] = time.split(':').map(Number);
  const scheduleDate = moment.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', 'America/Buenos_Aires');

  if (scheduleDate.isBefore(moment())) {
    return res.status(400).json({ success: false, error: 'Scheduled time must be in the future' });
  }

  emailJob = cron.schedule(scheduleDate.format('m H D M *'), () => {
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
