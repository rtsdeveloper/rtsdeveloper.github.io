$(function () {
	new WOW().init();
	$(".rotate").textrotator();
});

function blink_text() {
	$('.blink').fadeOut(700);
	$('.blink').fadeIn(700);
}
setInterval(blink_text, 1400);

function sendmail() {
	let name = $('#Name').val();
	let email = $('#Sender').val();
	let subject = $('#Subject').val();
	let message = $('#Message').val();
	let phone = $('#Phone').val();
	// let body = $('#body').val();
	let Body = 'Name: ' + name + '<br>Phone: ' + phone + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
	//console.log(name, phone, email, message);
	Email.send({
		//SecureToken: "101f535-74f7-4272-9cb9-1661d39af048 ",
		Host: "smtp.elasticemail.com",
		Username: "sharmaritesh9794@gmail.com",
		Password: "5912ED2BFC61895B9E8E178017BB6AE06822",
		To: 'sharmaritesh9696@gmail.com',
		From: "sharmaritesh9794@gmail.com",
		Subject: "New message on contact from " + name,
		Body: Body
	}).then(
		message => {
			console.log(message);
			if (message == 'OK') {
				alert('Your mail has been send.Thank you for connecting with us.');
			}
			else {
				console.error(message);
				alert('There is error at sending message. ')
			}
		}
	);
}