const buttons = document.querySelectorAll('[data-time]');
const timer = (function(){
	var countdown,
	timerDisplay,
	endTime;
	// alarmSound;
function init(settings){
	timerDisplay = document.querySelector(settings.timeLeftSelector)
	endTime = document.querySelector(settings.timeEndSelector);
	// if(settings.alarmSound){
	// 	alarmSound = new Audio(settings.alarmSound)
	// }
}
	function start(seconds){
		if(!timerDisplay || !endTime) return console.log('Please init module first');
		if(!seconds || typeof seconds !== 'number') return console.log('Please provide seconds');
		// reset timer
		clearInterval(countdown);
		//reset sound
		// alarmSound.pause();
		// alarmSound.currentTime = 0;

		const now = Date.now();
		const then = now + seconds * 1000;

		displayTimeLeft(seconds);
		displayEndTime(then);

		countdown = setInterval(() => {const secondsLeft = Math.round((then - Date.now())/1000);
		if(secondsLeft < 0){
			clearInterval(countdown);
		// 	//playSound();
			return;
		}
		displayTimeLeft(secondsLeft);
		}, 1000);
	}
	
	function displayTimeLeft(seconds){
	
		const minutes = Math.floor(seconds/60);
			///
			const hour = Math.floor(minutes/60);
			///
			const day = Math.floor(hour/24);
			///
		const reminderSeconds = seconds % 60;

		const display = `${day} day : ${hour >= 24 ? hour - (day*24) : hour} hour : ${minutes >= 60 ? minutes-(hour*60) : minutes } minutes : ${reminderSeconds < 10 ? '0' : ''}${reminderSeconds} seconds`;
		document.title = display;
		timerDisplay.textContent = display;
	}
	function displayEndTime(timestamp){
		const end = new Date(timestamp);
		const hour = end.getHours();
		const minutes = end.getMinutes();

		endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
	}
	function stop(){
		clearInterval(countdown);
		countdown = setInterval(() => {
			displayTimeLeft(0);
		}, 005);
	}
	// function playSound(){
	// 	alarmSound.play()
	// }
	return{
		init,
		start,
		stop
	}
}());

timer.init({
	timeLeftSelector: '.display__time-left',
	timeEndSelector: '.display__time'
})
function startTimer(e){
const seconds = parseInt(this.dataset.time);
timer.start(seconds);
}
buttons.forEach( btn => btn.addEventListener('click', startTimer) );
//
const form =document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
	e.preventDefault();		
	let seconds = parseInt(document.getElementById('asd').value)*60;
	timer.start(seconds)
});

const stopVar = document.getElementsByName('stop')[0];
stopVar.addEventListener('click',timer.stop)