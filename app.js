console.log('connected')

// bug, jquery not working on the site, but works when written in console.
$( document ).ready(function() {
    console.log( "ready!" );
    $('.answers').click(function(){
		console.log("clicked")
		$('.answers').css({'background-color':'white', 'color':'black'})
		$(this).css({'background-color':'black', 'color':'white'})
	})
});



