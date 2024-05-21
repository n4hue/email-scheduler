document.getElementById('emailForm').addEventListener('submit', (event) => {
	event.preventDefault()

	const to = document.getElementById("to").value
	const subject = document.getElementById('subject').value
	const message = document.getElementById('message').value
	const date = document.getElementById('date').value
	const time = document.getElementById('time').value

	fetch('/scheduleEmail', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ to, subject, message, date, time })
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success) {
				document.getElementById('status').textContent =
					'Email scheduled successfully!'
			} else {
				document.getElementById('status').textContent =
					'Failed to schedule email.'
			}
		})
		.catch((error) => {
			document.getElementById('status').textContent = 'Error scheduling email.'
			console.error('Error:', error)
		})
})
