console.log("linked swipe")
let currentPageDisplay = 'homePageContainer';
// let currentPageDisplay = 'firstQuestionContainer';
let leftPage = null;
let rightPage = null;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;




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
		} else if(currentPageDisplay == 'teacherPageContainer' || currentPageDisplay == 'teacherPageContainerFromQ3' || currentPageDisplay =='teacherPageContainerFromQ2'){
			$('body').css('background-color', '#1818ed');
			console.log('this should be triggered')
			handleGesure(currentPageDisplay, 'firstQuestionContainer', currentPageDisplay)
		} else if(currentPageDisplay == 'firstQuestionContainer'){
			handleGesure('firstQuestionContainer','secondQuestionContainer','teacherPageContainer')
		} else if (currentPageDisplay == 'secondQuestionContainer'){
			$('body').css('background-color','#e8005f');
			handleGesure('secondQuestionContainer','thirdQuestionContainer','teacherPageContainerFromQ2')
		} else if (currentPageDisplay == 'thirdQuestionContainer'){
			$('body').css('background-color','#14e236');
			console.log('change bg color triggered')
			handleGesure('thirdQuestionContainer','teacherPageContainerFromQ3','successPageContainer')
		} else if (currentPage == 'successPageContainer'){
			// $('body').css('background-color','yellow');
			// console.log('body BCcolor greem')
		}

	},false);



	function handleGesure(currentPage, leftPage, rightPage){

		if (touchendX < touchstartX) {
	        console.log('display rightPage')
	        $(`#${currentPage}`).hide()
	        $(`#${rightPage}`).show()
	        currentPageDisplay = rightPage
	    }
	    if (touchendX > touchstartX) {
	        console.log('display left page.')
	        $(`#${currentPage}`).hide()
	        $(`#${leftPage}`).show()
	        currentPageDisplay = leftPage
	    }
	}
})

