Modernizr plugin feature detection for css property "pointer-events"
====================================================================

How to use
----------

    <script src="modernizr-pointerevents.min.js"></script>
    <script>
        if(Modernizr.pointerevents){
            alert('pointer events are supported :)');
        }
        else{
            alert('pointer events are NOT supported!');
        }
    </script>

Example / testing
-----------------

[on this page][] you can see the Modernizr plugin in action
[on this page]: http://ausi.github.com/Feature-detection-technique-for-pointer-events/

Currently tested browsers
-------------------------

### pointer-events supported
- Firefox 6
- Safari 5
- Chrome 14

### pointer-events not supported
- InternetExplorer 6-9
- Opera 10
