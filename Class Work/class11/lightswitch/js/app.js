$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){
		if (lights == 'on') {
			lights = 'off';

			// $('#lightswitch').css({'background': 'white','color': 'black','background': 'black'});
			// $('#lightswitch').addClass('switch-off');
			// $('#lightswitch').removeClass('switch-on');
			// $('#lightswitch').html('OFF');
			// $('#lightswitch')
			// 	.addClass('lights-off')
			// 	.removeClass('switch-on')
			// 	.html('OFF');
			$('#lightswitch')
				.toggleClass('switch-on')
				.html('OFF')
			$('body').addClass('lights-off');
			
		} else {
			lights = 'on';

			// $('#lightswitch').css({'background':'black','color': 'white', 'background': 'white'});
			// $('#lightswitch').addClass('switch-on');
			// $('#lightswitch').removeClass('switch-off');
			// $('#lightswitch').html('ON');
			$('#lightswitch')
				.addClass('switch-on')
				.removeClass('switch-off')
				.html('ON')
			$('body').removeClass('lights-off');
		}
	})



})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;