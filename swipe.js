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

$( document ).ready(function() {

	let gesuredZone = document.getElementById(currentPageDisplay);
	console.log(gesuredZone,'<-----gesureZone')

	let width = $( window ).width()

	document.addEventListener('touchstart', function(e){

		touchstartX = e.changedTouches[0].screenX;
		// console.log(touchstartX,touchstartY,'<======touchstart')

	}, false)


	document.addEventListener('touchend', function(e){

		touchendX = e.changedTouches[0].screenX;
		// console.log(touchstartX,touchstartY,'<=====touched')
		// console.log(currentPage,'<after touch')
		// console.log(touchstartX, touchendX, touchesArray)

		if(currentPageDisplay == 'homePageContainer'){
			handleGesure('homePageContainer','teacherPageContainer','firstQuestionContainer')
			// this is displaying the page on the right, with color blue to red 
			if(swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #e8005f, #1818ed)','background-size':'400% 400%'})
				swipedLeft = false
			}
		} else if(currentPageDisplay == 'teacherPageContainer'){
			// $('body').css('background-color', '#1818ed');
			handleGesure(currentPageDisplay, currentPageDisplay,'firstQuestionContainer')
			//yhid id displayin the page on the right, with color no change 
			//thi is dispayign thr page on the left, with color, blue to red 
		 	if (swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #e8005f, #1818ed)','background-size':'400% 400%'})
				swipedLeft = false
			}
		} else if(currentPageDisplay == 'firstQuestionContainer'){
			handleGesure('firstQuestionContainer','secondQuestionContainer','teacherPageContainer')
			//htsi is dsiplaying the page on the rihgt 

	
			if(swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
				
				swipedLeft = false
			} else if(swipedRight){
				$('body').css({'background':'linear-gradient(270deg, #14e236, #e8005f)','background-size':'400% 400%'})
				// $('.arrow-right.icon').css({'color': 'black'})
				swipedRight = false
			}
		} else if (currentPageDisplay == 'secondQuestionContainer'){
			// $('body').css('background-color','#e8005f');

			handleGesure('secondQuestionContainer','thirdQuestionContainer','teacherPageContainer')
			if(swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
				swipedLeft = false
			} else if(swipedRight){
				$('body').css({'background':'linear-gradient(270deg, #14e236, #f4ee19)','background-size':'400% 400%'})
				swipedRight = false
			}
		} else if (currentPageDisplay == 'thirdQuestionContainer'){
			// $('body').css('background-color','#14e236');
			console.log('change bg color triggered')

			handleGesure('thirdQuestionContainer','teacherPageContainer','successPageContainer')
			if(swipedLeft){
				$('body').css({'background':'linear-gradient(270deg, #1818ed, #f4ee19)','background-size':'400% 400%'})
				swipedLeft = false
			} else if(swipedRight){
				$('body').css({'background':'linear-gradient(270deg, #1818ed, #12002b)','background-size':'400% 400%'})
				swipedRight = false
			}
		} else if (currentPage == 'successPageContainer'){
			// $('body').css('background-color','yellow');
			// console.log('body BCcolor greem')
		}

	},false);


	function arrowGrowing(){

		console.log('')
		document.addEventListener('touchmove', handleMove, false)

		function handleMove(e){
			// e.preventDefault()
			// let el = doucument.getElementbyId()
			let touches = e.changedTouches[0].screenX;
			touchesArray.push(touches)
			// console.log(touchesArray)
			distanceA = touchesArray.map((num, i) => {
					return Math.abs(touchesArray[i+1] - num) * 100/ width 
					// return (touchesArray[i+1] - num) * 100/ width 
			})
			// console.log(distanceA)
			let changedDistance = distanceA[distanceA.length -2]
			// console.log(changedDistance)
			if(growLeft){
				console.log(changedDistance)
				$('.arrow-left.icon').animate({'width':`+=${changedDistance}`})
				// $('.arrow-left.icon:before').animate
				growLeft = false
			} else if (growRight){
				console.log(changedDistance)
				$('.arrow-right.icon').css({'width': `+=${changedDistance}`})
				growRight = false
			}
		}

	}

	arrowGrowing()

	function handleGesure(currentPage, leftPage, rightPage){

		if (touchendX < touchstartX) {
	        console.log('display rightPage')
	        growLeft = true 
	        if((touchstartX - touchendX) > 250){
	        	distance = touchstartX - touchendX
	        	console.log('trigger now')
	        	$(`#${currentPage}`).hide()
	        	$(`#${rightPage}`).show()
	        	currentPageDisplay = rightPage
	        	// console.log(distance, width)  
	        	swipedLeft = true;
	        	$('.arrow-left.icon').css({'width':'10vw'})
	        	$('.arrow-right.icon').css({'width':'10vw'})
	        }
	    }
	    if (touchendX > touchstartX) {
	    	growRight = true;
	    	if((touchendX - touchstartX) > 250){
	    		distance = touchendX - touchstartX
	    		console.log('display left page.')
	        	$(`#${currentPage}`).hide()
	        	$(`#${leftPage}`).show()
	        	currentPageDisplay = leftPage
	        	// console.log(distance, width)
	        	swipedRight= true;
	        	$('.arrow-left.icon').css({'width':'10vw'})
	        	$('.arrow-right.icon').css({'width':'10vw'})
	    	}
	    }

	    // console.log(distance, width)
	    // arrowGrow = (distance * 100) / width

	    // // let arrowGrow = map(distance, 0, width, 0, 100)
	    // console.log(arrowGrow,'<-----this is arrowGrow')

	}


	// function mapMyTouches(value, domainStart, domainEnd, rangeStart, rangeEnd){
	// 	const t = (value - domainStart) / (domainEnd - domainStart);
 //    	return rangeStart * (1 - t) +  t * rangeEnd;
	// }

	// function mapMyTouches(dsitance, width){

 //    	return (distance*100)/width
	// }


})

