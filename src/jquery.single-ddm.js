/*!
 * Single Drop Down Menu [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function( $ ){


// bgiframe is needed to fix z-index problem for IE6 users.
$.fn.bgiframe = $.fn.bgiframe ? $.fn.bgiframe : $.fn.bgIframe ? $.fn.bgIframe : function(){
	// For applications that don't have bgiframe plugin installed, create a useless 
	// function that doesn't break the chain
	return this;
};

// Drop Menu Plugin
$.fn.singleDropMenu = function(options){
	return this.each(function(){
		// Default Settings
		var $main = $(this), timer, $menu, $li,
			settings = $.extend({
				timer: 500,
				parentMO: '',
				childMO: '',
				show: 'show',
				hide: 'hide'
			}, options||{}, $.metadata ? $main.metadata() : {});

		// Run Menu
		$main.delegate('li', 'mouseenter.single-ddm', function(){
			// Clear any open menus
			if ( ( $li = $(this) ).data('single-ddm-toplevel') !== true ) {
				$li.children('a').addClass( settings.childMO );
				return true;
			}
			else if ( ! $menu || $menu[0] !== $li[0] ) {
				closemenu();
				$li.children('a').addClass( settings.parentMO ).siblings('ul')[ settings.show ]();
			}
			else {
				$menu = false;
				if ( timer ) {
					timer = clearTimeout( timer );
				}
			}
		})
		.delegate('li', 'mouseleave.single-ddm', function(){
			if ( ( $li = $(this) ).data('single-ddm-toplevel') !== true ) {
				$li.children('a').removeClass( settings.childMO );
				return true;
			}
			else if ( timer ) {
				clearTimeout( timer );
			}

			$menu = $li;
			timer = setTimeout( closemenu, settings.timer );
		})
		// Each nested list needs to be wrapper with bgiframe if possible
		.children('li').each(function(){
			$(this).data('single-ddm-toplevel', true);
		})
		.children('ul').bgiframe();

		// Function to close set menu
		function closemenu(){
			if ( $menu && timer ){
				$menu.children('a').removeClass( settings.parentMO ).siblings('ul')[ settings.hide ]();
				timer = clearTimeout( timer );
				$menu = false;
			}
		}

		// Closes any open menus when mouse click occurs anywhere else on the page
		$(document).click( closemenu );
	});
};


})( jQuery );
