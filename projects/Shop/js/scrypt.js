$(document).ready(function() {
	$(".categories > li > a").click(function(e) {
  	e.preventDefault();
  	$(".categories > li > a").removeClass('active');
  	$(".categories > li > a").addClass('active');
	});
})