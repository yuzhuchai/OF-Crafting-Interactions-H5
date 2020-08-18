console.log('connected')

let firstClick = null;
let secondClick = null;

let correctAnswerPick = false;
let wrongAnswerPick = false;

// bug, jquery not working on the site, but works when written in console.
$( document ).ready(function() {
    console.log( 'ready!');
    
    if(landingPageShow){
    	swipeFunc('landingPage','play')
    	console.log('this is fhsdkjfsdhfs ss')
    }

    questionsGesture()

});



function questionsGesture(){
	//mimicing hover on touchscreen 
    $('.answers').click(function(){
    	console.log('clicked')
		$('.answers').css({'background-color':'white', 'color':'black'})
		$(this).css({'background-color':'black', 'color':'white'})
			
    	if(!firstClick){
    		firstClick = $(this).attr('id')	
			
    	} else {
    		secondClick = $(this).attr('id')
    		// console.log(firstClick, secondClick)
    		compare(this)
    	}
    	// console.log(firstClick, secondClick)
	}) 
}

//this funciton compares two tap, to see if the user has chosen the answer, and if the answer is correct. 
function compare(e){
	if(firstClick == secondClick){
		if(firstClick.includes('correctAnswer')){
			// console.log('correctAnswer picked')
			correctAnswerPick = true;
			rightAnswerPageAnimation(e)
		} else {
			wrongAnswerPick = true; 
			wrongAnswerPageAnimation(e);
			// console.log('wrong answer picked')
		}
	} else {
		firstClick = secondClick;
		secondClick = null; 
	}
}


//this functon will display animations for the correct answers 
function rightAnswerPageAnimation(e){
	if(correctAnswerPick){
		console.log(e)
		$('#play').slideUp()
		$('#info').slideDown()
		$('#wrongAnswer').hide();
	}
}


//this functon will display animations for the wrong answers 
function wrongAnswerPageAnimation(e){
	if(wrongAnswerPick){
		console.log(e)
		$('#play').slideUp()
		$('#info').slideDown()
		$('#correctAnswer').hide()
	}
}
