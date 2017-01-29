$(document).ready(function() {
    
    // hidden-menu
    $('.btn-menu, .hidden-menu ul a').click(function() {
    	// if ($('.hidden-menu').is(':hidden')) {
    	// 	$('.hidden-menu').show();
    	// } else {
    	// 	$('.hidden-menu').hide();
    	// }
    	$('.hidden-menu').toggle();
    });
    
    // Page Scroll
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	offset: 30
	});

	// Slider
	$("#owl-demo").owlCarousel({
		autoplay: 3000,
		items: 3,
		itemDekstop: [1199,3],
		itemDekstopSmall: [979,3]
	});

	// Tabs
	$('#responsiveTabsDemo').responsiveTabs({
    	startCollapsed: 'accordion'
	});

});