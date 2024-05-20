document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const to = document.getElementById('to').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value
  const date = document.getElementById('date').value
  const time = document.getElementById('time').value

  axios.post('/scheduleEmail', { to, subject, message, date, time })
    .then(response => {
      const alertDiv = document.getElementById('alert')
      alertDiv.style.display = 'block'
      alertDiv.className = 'alert alert-success'
      alertDiv.innerText = 'Email successfully scheduled!'
    })
    .catch(error => {
      const alertDiv = document.getElementById('alert')
      alertDiv.style.display = 'block'
      alertDiv.className = 'alert alert-danger'
      alertDiv.innerText = 'Error scheduling email: ' + error.response.data.error
    })
})
