$(document).ready(function() {
	//toggle class active for li (catalogs)
	$(".hmenu-list > li").click(function(e) {
  		e.preventDefault();
  		$(".hmenu-list > li").removeClass('active');
  		$(this).addClass('active');
	});
})