console.log("linked swipe")

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

function swipeFunc(id){


	let gesuredZone = document.getElementById(id);
	console.log(gesuredZone,'<-----gesureZone')


	gesuredZone.addEventListener('touchstart', function(e){
		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
	}, false)


	gesuredZone.addEventListener('touched', function(e){
		touchstartX = e.changedTouches[0].screenX;
		touchstartY = e.changedTouches[0].screenY;
		handleGesure();
	},false);


	function handleGesure(){
		let swiped = 'swiped: ';

		if (touchendX < touchstartX) {
	        alert(swiped + 'left!');
	    }
	    if (touchendX > touchstartX) {
	        alert(swiped + 'right!');
	    }
	    if (touchendY < touchstartY) {
	        alert(swiped + 'down!');
	    }
	    if (touchendY > touchstartY) {
	        alert(swiped + 'left!');
	    }
	    if (touchendY == touchstartY) {
	        alert('tap!');
	    }
	}

}

