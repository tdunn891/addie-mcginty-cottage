//Change active Navigation Bar Item after click
$('.navbar-nav li').click((e) => {
	console.log(e);
	$(e.currentTarget).addClass('active');
	$(e.currentTarget).siblings().removeClass('active');
});

// Adjust Navigation Bar size and margin based on scroll location
window.onscroll = () => scrollFunction();
const scrollFunction = () => {
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		$('#navbar').css({ margin: '0', padding: '2px 10px' });
		$('#obelisk-nav-logo').css({ padding: '2px', width: '40px' });
		$('#limestone').css({ display: 'none' });
	} else {
		$('#navbar').css({ margin: '12px 0', padding: '10px' });
		$('#obelisk-nav-logo').css({ height: 'auto', width: '48px' });
		$('limestone').css({ display: 'block' });
	}
};

// Handle User Query via Email JS
const btn = document.getElementById('form-submit-btn');

document
	.getElementById('enquiry-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.innerText = 'Sending...';
		const serviceID = 'default_service';
		const templateID = 'addie-mcginty-template';

		emailjs.sendForm(serviceID, templateID, this).then(
			() => {
				btn.innerHTML = 'Query Sent <i class="fas fa-check"></i>';
				// Reset Form
				this.reset();
				btn.disabled = true;
			},
			(err) => {
				btn.innerText = 'Send Query';
				alert(JSON.stringify(err));
			}
		);
	});
