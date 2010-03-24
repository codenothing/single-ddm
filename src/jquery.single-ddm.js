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
		var $obj = $(this), timer, $menu,
			settings = $.extend({
				timer: 500,
				parentMO: '',
				childMO: '',
				show: 'show',
				hide: 'hide'
			}, options||{}, $.metadata ? $obj.metadata() : {});

		// Run Menu
		$obj.children('li').bind({
			'mouseenter.single-ddm': function(){
				// Clear any open menus
				if ( $menu && $menu.data('single-ddm-i') != $(this).data('single-ddm-i') ) {
					closemenu();
				} else {
					$menu = false;
					if ( timer ) {
						timer = clearTimeout( timer );
					}
				}
				
				// Open nested list
				$(this).children('a').addClass( settings.parentMO ).siblings('ul')[ settings.show ]();
			},
			'mouseleave.single-ddm': function(){
				if ( timer ) {
					clearTimeout( timer );
				}

				$menu = $(this);
				timer = setTimeout( closemenu, settings.timer );
			}
		})
		.each(function(i){
			// Attach indexs to each menu
			$(this).data( 'single-ddm-i', i );
		})
		// Each nested list needs to be wrapper with bgiframe if possible
		.children('ul').bgiframe();

		// Dropped Menu Highlighting
		$obj.find('li > ul > li').bind({
			'mouseenter.single-ddm': function(){
				$(this).children('a').addClass( settings.childMO );
			},
			'mouseleave.single-ddm': function(){
				$(this).children('a').removeClass( settings.childMO );
			}
		});

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
