//fading effect
let duration = 3000; /* fade duration in millisecond */
let hidtime = 2000; /* time to stay hidden */
let showtime = 2000; /* time to stay visible */

function SetOpa(Opa, finalImagePath) {
		let element = document.getElementById("main-div");
		element.style.opacity = Opa;
		element.style.MozOpacity = Opa;
		element.style.KhtmlOpacity = Opa;
		element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
		if(Opa == 0.009999999999999343) {
				document.getElementById("main-div").remove();
				//now load new image with fadeIn
				loadFinalImage(finalImagePath);
		}               
}

function fadeOut(finalImagePath) {
	for (i = 0; i <= 1; i += 0.01) {
					setTimeout("SetOpa(" + (1 - i) +",'" + finalImagePath+ "')", i * duration);
	}
}

function FadeIn(finalImagePath) {
	for (i = 0; i <= 1; i += 0.01) {
			setTimeout("SetOpa(" + i +",'" + finalImagePath+ "')", i * duration);
	}
}