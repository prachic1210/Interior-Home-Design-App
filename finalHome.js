function FinalNodes() {
	let bodyEle = document.getElementById('main-div');
	let summaryEle = document.getElementById("summary_div");
	summaryEle != null && summaryEle != "" ? summaryEle.remove() : "";

	let finalDivEle = createNewElement("div", "", bodyEle, "summary_div", true);
	 
	createNewElement("h2", "Please verify your choices...", finalDivEle, "", true);

	for(let i=0;i<finalSelected.length;i++) {
			createNewElement("h2", (i+1) + ") " + questionArray[i], finalDivEle, "", true);
			createNewElement("h3", " - " + finalSelected[i], finalDivEle, "", true);         
	}

	let finalSubmitButton = createNewElement("BUTTON", "Let's discover your dream home", finalDivEle, "finalBtn", true);
	finalSubmitButton.addEventListener("click", showFinalHome);
}

function showFinalHome() {

	// local storage
	localStorageValues();
	document.getElementById("main-div").remove();
	document.body.style.background      = "none";
	document.body.style.backgroundColor = "(221,210,210)";

	let bodyEle = document.getElementById('main-body');
	mainDivEle = createNewElement("div", "", bodyEle, "main-div", true);
	h1Ele   = createNewElement("h1","Which rooms can you imagine as your dream home?",mainDivEle,"dreamId");
		 
			h1Ele.style
	//load big images
	//load big images
	loadMainImg(mainDivEle);

	//create small div for image
	let stripDivEle = createNewElement("div","",mainDivEle,"strip-div", true);

	//load small images
	loadSmallImg(stripDivEle);

}