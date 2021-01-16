function loadMainImg(mainDivEle) {

	//find img path
	let imgPath = findImgPath();

	// big image
	let bigImg = document.createElement('img');
	bigImg.setAttribute("src",imgPath +1+".jpeg");
	bigImg.setAttribute("alt","BigImg");
	bigImg.setAttribute("id","big-pic");
	mainDivEle.appendChild(bigImg);

	bigImg.addEventListener("click",function (evt) {
			if(evt.target.nodeName=="IMG"){
					formBuilder(mainDivEle, this.src);
			}
	})
}

function loadSmallImg(stripDivEle) {
	//find img path
	let imgPath     = findImgPath(),
			totalImg    = 15;

	// big image
	for(let i=2;i<totalImg;i++){
			let smallImg = document.createElement('img');
			smallImg.setAttribute("src",imgPath+i+".jpeg");
			smallImg.setAttribute("alt","SmallImg"+i);
			smallImg.setAttribute("id","SmallImg"+i);
			smallImg.style.height = "200px";
			stripDivEle.append(smallImg);

			smallImg.addEventListener("click",function (evt) {
					if(evt.target.nodeName == "IMG"){
							showPic(this.src);
					}
			});
	}
}

function findImgPath() {
	let imgPath = "images/"+finalSelected[0]+"/"+finalSelected[1]+"/"+finalSelected[2]+"/";
	return imgPath;
}

function showPic(imgSrc){
	document.getElementById('big-pic').src = imgSrc;
}

function loadFinalImage (finalImagePath) {
	FadeIn(finalImagePath);

	let bodyEle = document.getElementById('main-body'),
			mainDivEle = document.createElement("div");

	mainDivEle.setAttribute("id", "main-div");
	bodyEle.appendChild(mainDivEle);

	document.body.style.backgroundColor = "none";
	document.body.style.background = "none";

	document.getElementById("main-div").style.backgroundImage = "url(" + finalImagePath+ ")";
	document.getElementById("main-div").style.backgroundRepeat = "no-repeat";

	createNewElement("p", "Thank You for chossing our service...", mainDivEle, "thankYouId", true );
}