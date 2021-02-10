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

// Show success Moddal on successful submission of Enquiry form
$('#enquiry-form').on('submit', (e) => {
	$('#successModal').modal('show');
	e.preventDefault();
});
