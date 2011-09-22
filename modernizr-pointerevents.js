Modernizr.addTest('pointerevents', function(){
    var element = document.createElement('script'),
		supports;
    if(!('pointerEvents' in element.style)){
        return false;
    }
    element.style.pointerEvents = 'auto';
    element.style.pointerEvents = 'x';
    document.documentElement.appendChild(element);
	supports = document.defaultView && 
		document.defaultView.getComputedStyle && 
		document.defaultView.getComputedStyle(element, '').getPropertyValue('pointer-events') === 'auto';
    document.documentElement.removeChild(element);
    return supports;
});