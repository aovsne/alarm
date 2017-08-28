// add 0 if less than 10

function zero(i){
	if(i < 10){
		i = '0' + i
	}
	return i
}


// creating clock function with some variables

function time(){
	var today, hour, minute, second, ampm, didi
	 today = new Date()
	 didi = today.getHours()
	 hour = today.getHours()
	 minute = today.getMinutes()
	 second = today.getSeconds()

	 // making the hour global so that we can use it nex time without having to change it to military time
	 window.rawHours = hour;

// changing military timing into normal timing
if(hour > 12){

	hour = hour - 12

}

if(didi < 12){
	ampm = "AM"
}
else{
	ampm = "PM"
}

// adding 0 if less than 10 on minutes and seconds

minute = zero(minute)
second = zero(second)

window.minutes = minute

// put the time in html using DOM event
document.getElementById('time').innerHTML = hour + " : " + minute + " : " + second + " " + ampm

document.getElementById('body').addEventListener('onload', false)

setTimeout(function(){
	time()
}, 1000)

}
time()



