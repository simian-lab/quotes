$('.menu').click(function(event) {
	event.preventDefault();
	$('#menu-options').toggleClass('hidden');
});

$(".video iframe").fitVids();