console.log("linked swipe")
let currentPageDisplay = 'homePageContainer';
// let currentPageDisplay = 'firstQuestionContainer';
let leftPage = null;
let rightPage = null;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
let arrowGrow;

let swipedLeft = false;
let swipedRight = false;

let distance; 
let touchesArray = []

let distanceA
let growLeft;
let growRight;

let perviousTouch = 0;

let touches;

let switchPage = false;

$( document ).ready(function() {

	let gesuredZone = document.getElementById(currentPageDisplay);
	console.log(gesuredZone,'<-----gesureZone')

	let width = $( window ).width()

	document.addEventListener('touchstart', function(e){

		touchstartX = e.changedTouches[0].screenX;
		perviousTouch = touchstartX;

	}, false)


	document.addEventListener('touchend', function(e){

		touchendX = e.changedTouches[0].screenX;


		if(currentPageDisplay == 'homePageContainer'){
			handleGesure('homePageContainer','teacherPageContainer','firstQuestionContainer')
			if(swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #e8005f, #1818ed)','background-size':'400% 400%'})
				swipedLeft = false
			}
		} else if(currentPageDisplay == 'teacherPageContainer'){
			
			handleGesure(currentPageDisplay, currentPageDisplay,'firstQuestionContainer')

		 	if (swipedLeft){
		 		
				$('body').css({'background':'linear-gradient(270deg, #e8005f, #1818ed)','background-size':'400% 400%'})
				swipedLeft = false
			}
		} else if(currentPageDisplay == 'firstQuestionContainer' ){
			console.log(switchPage,'<====switch page')
			if(switchPage){
				// arrowGrowing()

				$(`.answers`).css({'display':'flex'})
	        	$(`.explain`).hide()
				handleGesure('firstQuestionContainer','secondQuestionContainer','teacherPageContainer')
				if(swipedLeft){
					$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
					swipedLeft = false
				} else if(swipedRight){
					$('body').css({'background':'linear-gradient(270deg, #14e236, #e8005f)','background-size':'400% 400%'})
					swipedRight = false
				}
				switchPage = false 
			} else {
				handleTurnDiv()

			}
		} else if (currentPageDisplay == 'secondQuestionContainer'){

			if(switchPage){
				// arrowGrowing()

				$(`.answers`).css({'display':'flex'})
	        	$(`.explain`).hide()
				handleGesure('secondQuestionContainer','thirdQuestionContainer','teacherPageContainer')
				if(swipedLeft){
					$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
					swipedLeft = false
				} else if(swipedRight){
					$('body').css({'background':'linear-gradient(270deg, #14e236, #9650e6)','background-size':'400% 400%'})
					swipedRight = false
				}
				switchPage = false 
			} else {
				handleTurnDiv()
			}

		} else if (currentPageDisplay == 'thirdQuestionContainer'){

			if(switchPage){
				// arrowGrowing()

				$(`.answers`).css({'display':'flex'})
	        	$(`.explain`).hide()
				handleGesure('thirdQuestionContainer','teacherPageContainer','successPageContainer')
				if(swipedLeft){
					$('body').css({'background':'linear-gradient(270deg, #1818ed, #9650e6)','background-size':'400% 400%'})
					swipedLeft = false
				} else if(swipedRight){
					$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
					swipedRight = false
				}
				switchPage = false 
			} else {
				handleTurnDiv()
			}
			

		} 

	},false);


	function arrowGrowing(){

		document.addEventListener('touchmove', handleMove, false)

		function handleMove(e){

			 touches = e.changedTouches[0].screenX;
			
			// touchesArray.push(touches)
			// distanceA = touchesArray.map((num, i) => {
			// 		return Math.abs(touchesArray[i+1] - num) * 100/ width 
			// })
			distanceMoved = Math.abs(touches - perviousTouch) * 1000/width 


			// let changedDistance = distanceA[distanceA.length -2]
			if(growLeft){
				// console.log(changedDistance)
				$('.arrow-left.icon').animate({'width':`+=${distanceMoved}`}, function(){
					console.log(growLeft, growRight)
				})
				$('.answerTwo').animate({'margin-right': `+=${distanceMoved}`}, function(){
					console.log(growLeft, growRight)
					// growLeft = false
				})
				growLeft = false
				growRight = false

			} else if (growRight){
				// console.log(changedDistance)
				$('.arrow-right.icon').animate({'width': `+=${distanceMoved}`}, function(){
					console.log(growLeft, growRight)

				})
				$('.answerOne').animate({'margin-left': `+=${distanceMoved}`}, function(){
					console.log(growLeft, growRight)
					// growRight = false

				})

				growRight = false
				growRight = false
			}
			perviousTouch = touches
		}

	}

	// arrowGrowing()

	function handleGesure(currentPage, leftPage, rightPage){

		if (touchendX < touchstartX) {
	        growLeft = true 
	        if((touchstartX - touchendX) > 100){
	        	distance = touchstartX - touchendX
	        	$(`#${currentPage}`).hide()
	        	$(`#${rightPage}`).show()
	        	currentPageDisplay = rightPage
	        	swipedLeft = true;
	        	$('.arrow-left.icon').css({'width':'80vw'})
	        	$('.arrow-right.icon').css({'width':'80vw'})
	        	$('.answerOne').css({'margin-left':'0'})
	        	$('.answerTwo').css({'margin-right':'0'})

	        }
	    }
	    if (touchendX > touchstartX) {
	    	growRight = true;
	    	if((touchendX - touchstartX) > 100){
	    		distance = touchendX - touchstartX
	        	$(`#${currentPage}`).hide()
	        	$(`#${leftPage}`).show()
	        	currentPageDisplay = leftPage
	        	swipedRight= true;
				$('.arrow-left.icon').css({'width':'80vw'})
        		$('.arrow-right.icon').css({'width':'80vw'})
        		$('.answerOne').css({'margin-left':'0'})
	        	$('.answerTwo').css({'margin-right':'0'})
	    	}
	    }

	}

	function handleTurnDiv(){
		if (touchendX < touchstartX) {
	        // console.log('display rightPage')
	        // growLeft = true 
	        if((touchstartX - touchendX) > 100){
	        	$(`.answers`).hide()
	        	$(`.explain`).css({'display':'flex'})
	        	swipedLeft = true;
	        	console.log('hello')
	        	$('.arrow-left.icon').css({'width':'80vw'})
	        	$('.arrow-right.icon').css({'width':'80vw'})
	        }
	    }
	    if (touchendX > touchstartX) {
	    	// growRight = true;
	    	if((touchendX - touchstartX) > 100){
	        	$(`.answers`).hide()
	        	$(`.explain`).css({'display':'flex'})
	        	swipedRight= true;
	        	$('.arrow-left.icon').css({'width':'80vw'})
        		$('.arrow-right.icon').css({'width':'80vw'})
	    	}
	    }
		switchPage = true;
	}

})

