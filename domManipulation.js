let     trackCreated   = [],
		finalSelected  = [],
		questionArray  = [],
		divCreated     = [],
		countSelectEle =  1;

function init() {
		//delete first div
		let firstDiv = document.getElementById("div1");
		firstDiv != null && firstDiv != "" ? firstDiv.remove() : "";

		deleteDivs(trackCreated);
		let summaryEle = document.getElementById("summary_div");
		summaryEle != null && summaryEle != "" ? summaryEle.remove() : "";

		trackCreated = [];
		let parentEle = document.getElementById("main-div");
		let divEle = createNewElement("div", "", parentEle, "div1", true);
		divCreated[0] = 1;
		populateDropDown(divEle,'',countSelectEle);
}

function deleteDivs(divDeleteArray){
	//delete all the previously loaded dropdowns
	//remove last div
	if(divDeleteArray.length > 0) {
			let lastIndex = divDeleteArray.length-1;
			let lastDD = document.getElementById("div" + divDeleteArray[lastIndex]);
			if(lastDD != null && lastDD != "" && lastDD.nextElementSibling != null) {
					lastDD.nextElementSibling.remove();
					divCreated[divDeleteArray[lastIndex]-1] = "";
			}

			for (let i=0;i<divDeleteArray.length;i++) {
					lastDD = document.getElementById("div" + divDeleteArray[i]);
					if(lastDD != null && lastDD != "" ) {
							lastDD.remove();
							divCreated[divDeleteArray[i]-1] = "";
					}
			}
	}//when nothing is selected
}

function populateDropDown(divEle,interiorKey,countSelectEle)
{
	let  selectEle = document.createElement('select'),
		 currentObject = getInnerObject(interiorKey, interiorObj);

	selectEle.setAttribute("id",countSelectEle);
	countSelectEle = countSelectEle+1;

	//setting the default value for drop down
	if(currentObject != null && currentObject != ""){
		const optEle = document.createElement("option");
		optEle.value = "Choose any one:";
		optEle.text =  "Choose any one:";
		optEle.setAttribute("disabled", true);
		optEle.setAttribute("selected", true);
		selectEle.appendChild(optEle);
	}

	if(currentObject != null && currentObject != "") {
		//populating the drop down
		for (let i = 0; i < Object.keys(currentObject).length; i++) {
				let optionValue = Object.keys(currentObject)[i];

				if(Object.keys(currentObject)[i] == "Question"){
						createNewElement("h2", currentObject[optionValue], divEle, "", true);
						questionArray[countSelectEle-2] = currentObject[optionValue];
						continue;
				}
				
				const optEle = document.createElement("option");
				optEle.value =  Object.keys(currentObject)[i];
				optEle.text =  Object.keys(currentObject)[i];
				selectEle.appendChild(optEle);
		}

			//no child element should be append
		if(Object.keys(currentObject).length > 0)
				divEle.appendChild(selectEle);
	}

	// add event listeners
	selectEle.addEventListener("change", function () {
		let id = parseInt(selectEle.id),
				nextDivId="";

		finalSelected[id-1]=selectEle.value;
		console.log("Final Selected :",finalSelected);
		
		//not visited drop down 
		if(!trackCreated.includes(id)){
				let parentID = selectEle.parentElement.id;
				nextDivId = parseInt(parentID.substring(parentID.length-1, parentID.length))+1;
				let parentEle = document.getElementById("main-div");
				let divEle = createNewElement("div", "", parentEle, "div" + nextDivId, true);
				divCreated[nextDivId-1] = parseInt(nextDivId);
				trackCreated.push(id);
				populateDropDown(divEle,selectEle.value,countSelectEle);
		}
		else{
					//create an array for the Id's which we need to delete
					let trackCreatedDrop = divCreated.filter(function (x) {
						return x > id;
				});

				//retain the tracked Id's
				trackCreated = divCreated.filter(function (x) {
						return x <= id;
				});

				//remove last div
				deleteDivs(trackCreatedDrop);

				//after dropping the previously loaded dropDown 
				//load the new one as per selection
				let parentID = selectEle.parentElement.id;
				nextDivId = parseInt(parentID.substring(parentID.length-1, parentID.length))+1; 
				let parentEle = document.getElementById("main-div");
				let divEle = createNewElement("div", "", parentEle, "div" + nextDivId, true);
				divCreated[nextDivId-1] = parseInt(nextDivId);
				populateDropDown(divEle,selectEle.value,countSelectEle);
		}
		
		if(id===3){
				FinalNodes();
		}

	}, false);
}
			 
function createNewElement (elemType, text, appendToElem, id, isAppendChild) {
	let newEle = document.createElement(elemType);
	if (text != ""){
			let newEleText = document.createTextNode(text);
			newEle.appendChild(newEleText);
	}
	if(appendToElem != "" && appendToElem != null){
			if(isAppendChild)
					appendToElem.appendChild(newEle);
			else
					appendToElem.append(newEle);
	}

	id != "" && id != null ? newEle.setAttribute("id",id) : null;
	return newEle;
}

