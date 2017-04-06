(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-78765228-3', 'auto');
ga('send', 'pageview');

var toggleclassname = function(el, classname) {
	var children = el.parentNode.childNodes;
	for (i in children) {
		if (children[i] != null && children[i].className != null) 
		{
			if (children[i].className.indexOf(classname) != -1)
			{
				if (children[i].style.display == 'block')
					children[i].style.display = 'none';
				else
					children[i].style.display = 'block';
			}
			//if (children[i].tagName.toLowerCase() =='pre' )
			//	children[i].style.display = 'none';
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
