$(function() {
	console.log('fdsgfdg');
	

	$('.menu ul li:nth-child(3) a').on('click',  function(event) {
	event.preventDefault();
	$('body').animate({scrollTop:1000}, 400);
		
	});

	$('.menu ul li:nth-child(4) a').on('click',  function(event) {
	event.preventDefault();
	
		$('body').animate({
        scrollTop: $(".round2").offset().top}, 500);
	});
	
});



