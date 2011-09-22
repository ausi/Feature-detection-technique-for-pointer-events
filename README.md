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