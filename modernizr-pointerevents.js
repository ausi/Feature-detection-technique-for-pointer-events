Modernizr.addTest('pointerevents', function(){
    var element = document.createElement('script'),
        documentElement = document.documentElement,
        supports;
    if(!('pointerEvents' in element.style)){
        return false;
    }
    element.style.pointerEvents = 'auto';
    element.style.pointerEvents = 'x';
    documentElement.appendChild(element);
    supports = window.getComputedStyle && 
        window.getComputedStyle(element, '').getPropertyValue('pointer-events') === 'auto';
    documentElement.removeChild(element);
    return supports;
});