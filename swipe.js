console.log("linked swipe")
let currentPage = 'homePageContainer';
let leftPage = null;
let rightPage = null;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


let swipeLeft = false;
let swipeRight = false;





	// let gesuredZone = document.getElementById(currentPage);
	// console.log(gesuredZone,'<-----gesureZone')


	document.addEventListener('touchstart', function(e){

		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<======touchstart')

	}, false)


	document.addEventListener('touchend', function(e){
		touchendX = e.changedTouches[0].screenX;
		touchendY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<=====touched')
		

		if(currentPage == 'homePageContainer'){
			handleGesure('homePageContainer','teacherPageContainer','firstQuestionContainer')
			console.log(currentPage,'<inside event listener')
		} else if(currentPage == 'teacherPageContainer'){
			handleGesure('teacherPageContainer', 'teacherPageContainer', 'failedPageContainer')
		}




	},false);



	function handleGesure(currentPage, leftPage, rightPage){
		let swiped = 'swiped: ';
		console.log("this is triggered")

		if (touchendX < touchstartX) {
	        console.log('swipped left, show right page.')
	        $(`#${currentPage}`).hide()
	        $(`#${rightPage}`).show()
	        currentPage = rightPage
	        console.log(currentPage,'<--iside gesture')
	    }
	    if (touchendX > touchstartX) {
	        // alert(swiped + 'left!');
	        console.log('swipped right, show left page')
	       	$(`#${currentPage}`).hide()
	        $(`#${leftPage}`).show()
	        currentPage = leftPage
	    }
	}



