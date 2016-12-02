$(document).ready(function() {
	//toggle class active for li (catalogs)
	$("#categories > li > a").click(function(e) {
  		e.preventDefault();
  		$("#categories > li > a").removeClass('active');
  		$(this).addClass('active');
	});

	//toggle 
	$('.hel-menu').click(function() {
		$('.helicopters').slideToggle();
	})
})