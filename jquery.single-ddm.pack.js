/**
 * Single Drop Down Menu
 * March 24, 2008
 * Corey Hart @ http://www.codenothing.com
 *
 * @timer: milliseconds to keep dropped menus open
 * @parentMO: CSS class to add/remove to parent list on mouseover/mouseout's
 * @childMO: CSS class to add/remove to child list on mouseover/mouseout's
 */ 
(function(A){A.fn.singleDropMenu=function(C){var F;var E;var D=A.extend({timer:500,parentMO:null,childMO:null},C||{});this.each(function(){A("li",this).mouseover(function(){B();A("a",this).addClass(D.parentMO).siblings("ul").show()}).mouseout(function(){E=this;F=setTimeout(function(){B()},D.timer)});A("li ul li",this).mouseover(function(){if(D.childMO){A("a",this).addClass(D.childMO)}}).mouseout(function(){if(D.childMO){A("a",this).removeClass(D.childMO)}})});A(document).click(function(){B()});var B=function(){if(E&&F){A("a",E).removeClass(D.parentMO).siblings("ul").hide();clearTimeout(F);E=""}}}})(jQuery);
