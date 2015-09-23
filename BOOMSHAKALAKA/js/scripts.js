/*
responsive menu
*/
(function(){
	function updateHeader(menu){
		var header = menu.find('.menu-toggle');
		var title = menu.find('.menu-collapse li.selected > a').data('title');
		if (!title) title = menu.find('.menu-collapse li.selected > a').text();
		if (title) header.text(title);
	}
	var menus = jQuery('.menu-respond');
	var buttons = jQuery('.menu-toggle');
	buttons.click(function(){
		jQuery(this).toggleClass('open');
		var menu = jQuery(this).next('.menu-collapse');
		menu.slideToggle();
		return false;
	});
	menus.each(function(){
		var menu = jQuery(this);
		var menu_links = menu.find('.menu-collapse a');
		updateHeader(menu);
		menu_links.click(function(){
			if (jQuery(this).attr('href').substr(0,1) != '#') return;
			var header = menu.find('.menu-toggle');
			var collapse = menu.find('.menu-collapse');
			var title = jQuery(this).data('title');
			if (!title) title = jQuery(this).text();
			if (title) header.text(title);
			collapse.hide();
		});
	});
})();

/* Usercontent Wraps */
jQuery('.usercontent iframe').wrap('<div class="iframe-wrap"></div>');
jQuery('.usercontent table').wrap('<div class="table-wrap"></div>');

/*
Smooth scrolling on anchors
*/
jQuery(document).ready(function(){
	jQuery('.anchor').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var jQuerytarget = jQuery(target);

	    jQuery('html, body').animate({
	        scrollTop: jQuerytarget.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

/* =====================================
EXPANDABLE SEARCH
======================================== */
var searchBox = jQuery('#header-search');
var searchButton = jQuery('#js-header-search-button');
var searchInput = jQuery('#js-header-search-input');

function expandSearch() {
	if(searchBox.hasClass('open') && searchInput.val() != '') {
		searchBox.submit();
	} else if(searchBox.hasClass('open') && searchInput.val() == '') {
		searchBox.toggleClass('open');
		searchInput.animate({width:'0', padding:'0'});
	} else {
		searchBox.toggleClass('open');
		searchInput.animate({width:'225', padding:'15px 25px'});
	}
}

jQuery(window).load(function() {
	
		searchButton.click(function(e) {
			if (e.preventDefault) {
			    e.preventDefault();
			} else {
			    e.returnValue = false;
			}

			expandSearch();
		
		});
});

$(document).on('click', function(e){
	var clickedId = e.target.id;
	// console.log(e.target);
	
	if (clickedId != 'js-header-search-button' && clickedId != 'js-header-search-input') {

		if(searchInput.css('width') == '225px') {
			searchInput.animate({width:'0', padding:'0'});
			searchBox.toggleClass('open');
		}
	}
});

/* =====================================
STICKY FOOTER
======================================== */
jQuery(window).load(function(){
	var footerHeight = jQuery(".footer").outerHeight();
	
	jQuery('.wrapper').css({'padding-bottom': footerHeight + 40});
});

jQuery(window).resize(function(){
	var footerHeight = jQuery(".footer").outerHeight();
	
	jQuery('.wrapper').css({'padding-bottom': footerHeight + 40});
});


/* =====================================
CUSTOM CHECKBOXES AND RADIOBUTTONS
======================================== */
/* RADIOBUTTONS */
jQuery('.radiobuttons input').change(function() {
		console.log('clicked');
    	if (jQuery(this).is(':checked')) {
			jQuery(this).closest('.radiobuttons').find('label').removeClass('checked')
	        jQuery(this).parent().addClass('checked');
        }
});

jQuery('.radiobuttons label input:checked').parent().addClass('checked');


/* CHECKBOXES */
jQuery('.checkboxes input').change(function() {
    if (jQuery(this).is(':checked')) {
        jQuery(this).parent().addClass('checked');
    } else {
        jQuery(this).parent().removeClass();
    }
});

jQuery('.checkboxes label input:checked').parent().addClass('checked');