console.log("linked swipe")
let currentPageDisplay = 'homePageContainer';
let leftPage = null;
let rightPage = null;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


let swipeLeft = false;
let swipeRight = false;


$( document ).ready(function() {



	let gesuredZone = document.getElementById(currentPageDisplay);
	console.log(gesuredZone,'<-----gesureZone')


	document.addEventListener('touchstart', function(e){

		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<======touchstart')

	}, false)


	document.addEventListener('touchend', function(e){
		touchendX = e.changedTouches[0].screenX;
		touchendY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<=====touched')
		// console.log(currentPage,'<after touch')

		if(currentPageDisplay == 'homePageContainer'){
			handleGesure('homePageContainer','teacherPageContainer','firstQuestionContainer')
			// console.log(currentPage,'<inside event listener')
		} else if(currentPageDisplay == 'teacherPageContainer'){
			handleGesure('teacherPageContainer', 'teacherPageContainer', 'failedPageContainer')
		} else if (currentPageDisplay == 'failedPageContainer') {
			handleGesure('failedPageContainer', 'firstQuestionContainer', 'failedPageContainer')
		} else if(currentPageDisplay == 'firstQuestionContainer'){
			handleGesure('firstQuestionContainer','teacherPageContainer','secondQuestionContainer')
		} else if (currentPageDisplay == 'secondQuestionContainer'){
			handleGesure('secondQuestionContainer','teacherPageContainer','thirdQuestionContainer')
		} else if (currentPageDisplay == 'thirdQuestionContainer'){
			handleGesure('thirdQuestionContainer','teacherPageContainer','successPageContainer')
		}

	},false);



	function handleGesure(currentPage, leftPage, rightPage){
		console.log(currentPage,'<-----inside HandleGesure')
		let swiped = 'swiped: ';
		console.log("this is triggered")

		if (touchendX < touchstartX) {
			swipeLeft = true  
	        console.log('swipped left, show right page.')
	        $(`#${currentPage}`).hide()
	        $(`#${rightPage}`).show()
	        currentPageDisplay = rightPage
	        console.log(currentPage,'<--iside swip')
	    }
	    if (touchendX > touchstartX) {
	    	swipeLeft = true  
	        console.log('swipped left, show right page.')
	        $(`#${currentPage}`).hide()
	        $(`#${leftPage}`).show()
	        currentPageDisplay = leftPage
	        console.log(currentPage,'<--iside swip')
	    }
	}

})

