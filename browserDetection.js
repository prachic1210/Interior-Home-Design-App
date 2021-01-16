//browser detection
function startBrowserDetection() {
	//Code is functional in Chrome browser
	if (navigator.userAgent.indexOf("Chrome") != -1) {
					//alert('You are in Chrome');
	} else if (navigator.userAgent.indexOf("Safari") != -1) {
			alert('You are in Safari');
			window.location.href = "https://www.google.com/chrome/browser/";
			// "https://www.google.com/chrome/";
	} else if (navigator.userAgent.indexOf("Firefox") != -1) {
			alert('You are in Firefox');
	} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
			if((navigator.userAgent.indexOf("MSIE 7.")!=-1)) {
					alert('The browser you have opened is IE 7!!');
					window.location.href="browsers.html";
			 }
			else {
					alert("You are in IE Browser");
			}
	}
	else {
			alert('You are in a broswer which I dont recognise');
	}
}