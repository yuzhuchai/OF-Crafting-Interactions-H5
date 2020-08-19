console.log("linked swipe")
let currentPageDisplay = 'homePageContainer';
// let currentPageDisplay = 'firstQuestionContainer';
let leftPage = null;
let rightPage = null;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


let swipedLeft = false;
let swipedRight = false;


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



	function handleGesure(currentPage, leftPage, rightPage){

		if (touchendX < touchstartX) {
	        console.log('display rightPage')
	        $(`#${currentPage}`).hide()
	        $(`#${rightPage}`).show()
	        currentPageDisplay = rightPage
	        swipedLeft = true;
	    }
	    if (touchendX > touchstartX) {
	        console.log('display left page.')
	        $(`#${currentPage}`).hide()
	        $(`#${leftPage}`).show()
	        currentPageDisplay = leftPage
	        swipedRight= true;
	    }
	}
})

