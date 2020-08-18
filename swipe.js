console.log("linked swipe")
let landingPageShow = true;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


let swipeLeft = false;
let swipeRight = false;


function swipeFunc(idHide, idShow){


	let gesuredZone = document.getElementById(idHide);
	console.log(gesuredZone,'<-----gesureZone')


	gesuredZone.addEventListener('touchstart', function(e){

		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<======touchstart')

	}, false)


	gesuredZone.addEventListener('touchend', function(e){
		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
		// console.log(touchstartX,touchstartY,'<=====touched')
		handleGesure();
	},false);


	function handleGesure(){
		let swiped = 'swiped: ';
		console.log("this is triggered")

		if (touchendX < touchstartX) {
	        // alert(swiped + 'left!');
	        $(`#${idHide}`).hide()
	        $(`#${idShow}`).show()
	        landingPageShow = false; 
	    }
	    if (touchendX > touchstartX) {
	        // alert(swiped + 'right!');
	    }
	    if (touchendY < touchstartY) {
	        // alert(swiped + 'down!');
	    }
	    if (touchendY > touchstartY) {
	        // alert(swiped + 'left!');
	    }
	    if (touchendY == touchstartY) {
	        // alert('tap!');
	    }
	}

}

