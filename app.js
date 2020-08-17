console.log('connected')

$('.answers').click(function(){
	console.log("clicked")
	$('.answers').css({'background-color':'white', 'color':'black'})
	$(this).css({'background-color':'black', 'color':'white'})
})

