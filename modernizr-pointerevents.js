Modernizr.addTest('pointerevents', function(){
	var element = document.createElement('x');
	element.style.cssText = 'pointer-events:auto';
	return element.style.pointerEvents === 'auto';
});
