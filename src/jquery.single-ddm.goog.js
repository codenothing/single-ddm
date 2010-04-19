/*
 * Single Drop Down Menu [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(a,f){function i(){return this}a.fn.singleDropMenu=function(j){return this.each(function(){function g(){if(d&&b){d.children("a").removeClass(c.parentMO).siblings("ul")[c.hide]();b=clearTimeout(b);d=false}}var h=a(this),b,d,e,c=a.extend({timer:500,parentMO:f,childMO:f,bgiframe:f,show:"show",hide:"hide"},j||{},a.metadata?h.metadata():{}),k=a.fn.bgiframe||a.fn.bgIframe||i;h.delegate("li","mouseenter.single-ddm",function(){if(a.data(e=this,"single-ddm-toplevel")!==true){a(e).children("a").addClass(c.childMO);
return true}else if(!d||d[0]!==e){g();a(e).children("a").addClass(c.parentMO).siblings("ul")[c.show]()}else{d=false;if(b)b=clearTimeout(b)}}).delegate("li","mouseleave.single-ddm",function(){if(a.data(e=this,"single-ddm-toplevel")!==true){a(e).children("a").removeClass(c.childMO);return true}b&&clearTimeout(b);d=a(e);b=setTimeout(g,c.timer)});k.call(h.children("li").data("single-ddm-toplevel",true).children("ul"),c.bgiframe);a(document).click(g)})}})(jQuery);
