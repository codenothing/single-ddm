/**
 * Single Drop Down Menu
 * March 24, 2008
 * Corey Hart @ http://www.codenothing.com
 *
 * @timer: milliseconds to keep dropped menus open
 * @parentMO: CSS class to add/remove to parent list on mouseover/mouseout's
 * @childMO: CSS class to add/remove to child list on mouseover/mouseout's
 */ 
;(function($){
 	// Define the function
	$.fn.singleDropMenu = function(options){
		// Function Vars
		var timer; // ID of timeout set
		var menu; // ID of menu open
		// Default Settings
		var settings = $.extend({
			timer: 500,
			parentMO: null,
			childMO: null
		},options||{});

		// Run Menu
		this.each(function(){
			$('li', this).mouseover(function(){
				// Clear any open menus
				closemenu();
				// Open nested list
				$('a', this).addClass(settings.parentMO).siblings('ul').show();
			}).mouseout(function(){
				// Prevent auto close
				menu = this;
				timer = setTimeout(function(){closemenu()}, settings.timer);
			});
			// Dropped Menu Highlighting
			$('li ul li', this).mouseover(function(){
				if (settings.childMO) $('a', this).addClass(settings.childMO);
			}).mouseout(function(){
				if (settings.childMO) $('a', this).removeClass(settings.childMO);
			});
		});

		// Closes any open menus when mouse click occurs anywhere else on the page
		$(document).click(function(){closemenu();});

		// Function to close set menu
		var closemenu = function(){
			if (menu && timer){
				$('a', menu).removeClass(settings.parentMO).siblings('ul').hide();
				clearTimeout(timer);
				menu = '';
			}
		}
	}
})(jQuery);
