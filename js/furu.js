var btn, ding, hoursDropdown, minutesDropdown
btn = document.getElementById('btn').addEventListener('click', alarm)
ding = document.getElementById('ding')
hoursDropdown = document.getElementById('hoursdropdown')
minutesDropdown = document.getElementById('minutesdropdown')

function alarm(){
	var ampm = document.getElementById('ampm').value
	var userHours = parseInt(hoursDropdown.value)
	var userMins = parseInt(minutesDropdown.value)
	var clockHours = window.rawHours
	var clockMins = parseInt(window.minutes)

	// messege to the user showing they set up the alarm
	var mess = (userMins < 10)  ? '0' + userMins : userMins

	document.getElementById('messege').textContent = "Alarm set for " + hoursDropdown.value + ":" + mess + " " + ampm + '.'


	// If selected PM
	if(ampm === 'PM'){
		userHours = userHours + 12

		if(userHours === 24){
			userHours = 12
		}
	} else {
		if(userHours ===12) {
			userHours = 0
		}
	}

	if(clockHours === userHours && clockMins === userMins) {
		document.getElementById('messege').textContent = "DONE"

		ding.play()
		return
	}

	setTimeout(alarm, 1000)
} 

// create two loops to create the contents in side the hourdropdown and minutedropdown

for(let i = 1; i <= 12; i++) {
	let hourOption = document.createElement('option');
	hourOption.textContent = i
	hoursDropdown.appendChild(hourOption)
}

for(let i = 1; i <=60; i++){
	let minOption = document.createElement('option')
	let minuteText = (i < 10) ? '0' + i : i
	minOption.textContent = minuteText
	minOption.value = i
	minutesdropdown.appendChild(minOption)
}