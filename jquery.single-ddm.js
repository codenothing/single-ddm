/**
 * Single Drop Down Menu 1.1
 * August 22, 2009
 * Corey Hart @ http://www.codenothing.com
 */
;(function($){
 	// Define the function
	$.fn.singleDropMenu = function(options){
		return this.each(function(){
			// Default Settings
			var $obj = $(this), timer, menu,
				settings = $.extend({
					timer: 500,
					parentMO: 'non-404',
					childMO: 'non-404'
				}, options||{}, $.metadata ? $obj.metadata() : {});
	
			// Run Menu
			$obj.children('li').mouseover(function(){
				// Clear any open menus
				closemenu();
				// Open nested list
				$(this).children('a').addClass(settings.parentMO).siblings('ul').show();
			}).mouseout(function(){
				// Prevent auto close
				menu = $(this);
				timer = setTimeout(closemenu, settings.timer);
			});

			// Dropped Menu Highlighting
			$('li > ul > li', $obj).hover(function(){
				$('a', this).addClass(settings.childMO);
			}, function(){
				$('a', this).removeClass(settings.childMO);
			});
	
			// Closes any open menus when mouse click occurs anywhere else on the page
			$(document).click(closemenu);
	
			// Function to close set menu
			function closemenu(){
				if (menu && timer){
					menu.children('a').removeClass(settings.parentMO).siblings('ul').hide();
					clearTimeout(timer);
					menu = false;
				}
			}
		});
	};
})(jQuery);
