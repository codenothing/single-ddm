/*
 * Single Drop Down Menu [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(a){a.fn.bgiframe=a.fn.bgiframe?a.fn.bgiframe:a.fn.bgIframe?a.fn.bgIframe:function(){return this};a.fn.singleDropMenu=function(h){return this.each(function(){function f(){if(c&&b){c.children("a").removeClass(d.parentMO).siblings("ul")[d.hide]();b=clearTimeout(b);c=false}}var g=a(this),b,c,e,d=a.extend({timer:500,parentMO:"",childMO:"",show:"show",hide:"hide"},h||{},a.metadata?g.metadata():{});g.delegate("li","mouseenter.single-ddm",function(){if((e=a(this)).data("single-ddm-toplevel")!==
true){e.children("a").addClass(d.childMO);return true}else if(!c||c[0]!==e[0]){f();e.children("a").addClass(d.parentMO).siblings("ul")[d.show]()}else{c=false;if(b)b=clearTimeout(b)}}).delegate("li","mouseleave.single-ddm",function(){if((e=a(this)).data("single-ddm-toplevel")!==true){e.children("a").removeClass(d.childMO);return true}else b&&clearTimeout(b);c=e;b=setTimeout(f,d.timer)}).children("li").each(function(){a(this).data("single-ddm-toplevel",true)}).children("ul").bgiframe();a(document).click(f)})}})(jQuery);
