$(document).ready(function () {
	$('.submit').click(function (event) {
		event.preventDefault()
		console.log('clicked button')
	    
		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		window.open("mailto:" +email);
		// statusElm.empty()
		console.log(email);
		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
		}
	
		if (subject.length > 2) {
			statusElm.append('<div>Subject is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Subject is not valid</div>')
		}

		if (message.length > 20) {
			statusElm.append('<div>Message is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Message is not valid</div>')
		}
	})

})

