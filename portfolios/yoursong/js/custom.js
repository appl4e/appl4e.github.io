(function($){
	$(document).ready(function(){
		var clock;

		clock= $('.clock').FlipClock({
			clockFace: 'HourCounter',
			autoStart: true
		})
		clock.setTime(172800);
		clock.setCountdown(true);
		clock.start();
	});

}(jQuery))