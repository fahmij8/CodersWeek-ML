jQuery(window).load(function () {
	// preloader
	$('.preloader-background').delay(1000).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(100)
		.fadeOut();

	$('.collapsible').collapsible();

	// Floating Action Button Init
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });

    $('.parallax').parallax();

    $('.modal').modal();

});

function showMean(idhere) {
	var x = document.getElementById(idhere.id);
	if (x.classList.contains("scale-out") === true) {
		x.className = x.className.replace( /(?:^|\s)scale-out(?!\S)/g , ' scale-in' );
	} else {
		x.className = x.className.replace( /(?:^|\s)scale-in(?!\S)/g , ' scale-out' );
	    
	}
}

// Text-color change
function changeColor() {
	setTimeout(trans, 300)
}

function colorChange() {
	setTimeout(snart, 300)
}

function trans() {
	document.getElementById('text-color1').className = document.getElementById('text-color1').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );	
	document.getElementById('text-color2').className = document.getElementById('text-color2').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );	
	document.getElementById('text-color3').className = document.getElementById('text-color3').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );	
	document.getElementById('text-color4').className = document.getElementById('text-color4').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );		
}

function snart() {
	document.getElementById('text-color1').className = document.getElementById('text-color1').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );	
	document.getElementById('text-color2').className = document.getElementById('text-color2').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );	
	document.getElementById('text-color3').className = document.getElementById('text-color3').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );	
	document.getElementById('text-color4').className = document.getElementById('text-color4').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );		
}