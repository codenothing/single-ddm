/*!
 * Single Drop Down Menu [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(a){a.fn.bgiframe=a.fn.bgiframe?a.fn.bgiframe:a.fn.bgIframe?a.fn.bgIframe:function(){return this};a.fn.singleDropMenu=function(g){return this.each(function(){var e=a(this),b,c,d=a.extend({timer:500,parentMO:"",childMO:"",show:"show",hide:"hide"},g||{},a.metadata?e.metadata():{});e.children("li").bind("mouseover.single-ddm",function(){if(c&&c.data("single-ddm-i")!=a(this).data("single-ddm-i"))f();else{c=false;if(b)b=clearTimeout(b)}a(this).children("a").addClass(d.parentMO).siblings("ul")[d.show]()}).bind("mouseout.single-ddm",
function(){c=a(this);b&&clearTimeout(b);b=setTimeout(f,d.timer)}).each(function(h){a(this).data("single-ddm-i",h)}).children("ul").bgiframe();e.find("li > ul > li").bind("mouseover.single-ddm",function(){a("a",this).addClass(d.childMO)}).bind("mouseout.single-ddm",function(){a("a",this).removeClass(d.childMO)});a(document).click(f);function f(){if(c&&b){c.children("a").removeClass(d.parentMO).siblings("ul")[d.hide]();b=clearTimeout(b);c=false}}})}})(jQuery);
