$('.nav-collapse a').click(function(e) {
    var target = $(this).attr('href');
    e.preventDefault();

    var offset = ($(window).width() < 768) ? 0 : 119;

	$('html,body').animate({
		scrollTop: $(target).offset().top - offset
	}, 800);

});