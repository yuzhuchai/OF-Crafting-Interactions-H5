console.log('connected app.js')

// console.log(currentPage)

// const pageAnimation = {
// 	page: null,
// 	touchstartX: 0,
// 	touchstartY: 0,
// 	touchendX: 0,
// 	touchendY: 0,

// 	createPage(currentPage, leftPage, rightPage){
// 		this.page = new Page(currentPage, leftPage, rightPage)
// 	},


// 	getTouchStart(touch){
// 		this.touchstartX = touch.screenX;
// 		this.touchstartY = touch.screenY;
// 	},

// 	getTouchEnd(touch){
// 		this.touchendX = touch.screenX;
// 		this.touchendY = touch.screenY;
// 		this.handleGesure();
// 	},


// 	handleGesure(){
// 		if (this.touchendX < this.touchstartX) {
// 	        console.log('swipped left, show right page.')
// 	        $(`#${this.page.currentPage}`).hide()
// 	        $(`#${this.page.rightPage}`).show()
// 	    }
// 	    if (this.touchendX > this.touchstartX) {
// 	        // alert(swiped + 'left!');
// 	        console.log('swipped right, show left page')
// 	       	$(`#${this.page.currentPage}`).hide()
// 	        $(`#${this.page.leftPage}`).show()
// 	    }
// 	},



// 	initNewPage(){
// 		if(this.currentPage == 'homePageContianer'){

// 		}
// 	}
// }




// $( document ).ready(function() {
//     console.log( 'ready!');

//     swipeFunc('homePageContainer','teacherPageContainer','firstQuestionContainer')
   	
// 	// console.log(document.getElementById('mainContainer'))

   	

//  //    if (currentPage == 'homePageContainer'){
// 	// 	swipeFunc('homePageContainer','teacherPageContainer','firstQuestionContainer')
// 	// }

// 	// if(currentPage == 'teacherPageContainer'){	
// 	// 	console.log('hello? I dont think this will be triggered?')
// 	// 	console.log(currentPage,'<----this is the current page ')
// 	// 	swipeFunc('teacherPageContainer','teacherPageContainer','failedPageContainer')
// 	// }

// })



