


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25279294-1']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var toggleclassname = function(el, classname) {
	var children = el.parentNode.childNodes;
	for (i in children) {
		if (children[i] != null && children[i].className != null && children[i].className.indexOf(classname) != -1) {
			if (children[i].style.display == 'block')
				children[i].style.display = 'none';
			else
				children[i].style.display = 'block';
		}
	}
	return false;
};


var getelementpos = function(el) {
	var main = document.getElementById('main');
	var style = main.currentStyle || window.getComputedStyle(main);
	var pos = -parseInt(style.marginTop) - parseInt(style.paddingTop);
	var e = document.getElementById(el);
	do {
		pos += e.offsetTop;
	} while (e = e.offsetParent);
	return pos;
};

var getcurrentpos = function() {
	return (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0);
}

var scrollto = function(pos) {
	window.scroll(0, pos);
	return false;
};

var smoothscrollto = function(pos) {
	var time = 10;
	var step = 100;
	var currentpos = getcurrentpos();
	var scrolldirection = (pos - currentpos) >= 0 ? 1 : -1;
	
	var scrolltimer = setInterval(function() {
		currentpos += scrolldirection * step;
		if (scrolldirection * currentpos < scrolldirection * pos) {
			window.scroll(0, currentpos);
		} else {
			window.scroll(0, pos);
			clearInterval(scrolltimer);
		}
	}, time);
	return false;
};
