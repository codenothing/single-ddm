/*!
 * Single Drop Down Menu [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(a){a.fn.bgiframe=a.fn.bgiframe?a.fn.bgiframe:a.fn.bgIframe?a.fn.bgIframe:function(){return this};a.fn.singleDropMenu=function(g){return this.each(function(){function e(){if(c&&b){c.children("a").removeClass(d.parentMO).siblings("ul")[d.hide]();b=clearTimeout(b);c=false}}var f=a(this),b,c,d=a.extend({timer:500,parentMO:"",childMO:"",show:"show",hide:"hide"},g||{},a.metadata?f.metadata():{});f.children("li").bind({"mouseover.single-ddm":function(){if(c&&c.data("single-ddm-i")!=a(this).data("single-ddm-i"))e();
else{c=false;if(b)b=clearTimeout(b)}a(this).children("a").addClass(d.parentMO).siblings("ul")[d.show]()},"mouseout.single-ddm":function(){c=a(this);b&&clearTimeout(b);b=setTimeout(e,d.timer)}}).each(function(h){a(this).data("single-ddm-i",h)}).children("ul").bgiframe();f.find("li > ul > li").bind({"mouseover.single-ddm":function(){a(this).children("a").addClass(d.childMO)},"mouseout.single-ddm":function(){a(this).children("a").removeClass(d.childMO)}});a(document).click(e)})}})(jQuery);
