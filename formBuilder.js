function formBuilder(mainDivEle, finalImagePath) {
	//check for previous form
	let formDivEle = document.getElementById("formId"); 
	if(formDivEle != null && formDivEle != "")
			formDivEle.remove();

	formDivEle = createNewElement("div","",mainDivEle,"formId", true);
	createNewElement("h1","Great Choice",formDivEle,"", true);
	createNewElement("h2","Getting to know you...",formDivEle,"", false);
	
	let formInternalDiv = createNewElement("div", "", formDivEle, "formInternalDiv", true);

	let fNameDiv = createNewElement("div", "", formInternalDiv, "fNameDiv", true);
	createNewElement("label","First Name : ",fNameDiv,"fNameLabel", false);
	fName = document.createElement("input");
	fName.setAttribute("type", "text");
	fName.setAttribute("name", "firstName");
	fName.setAttribute("id", "firstNameId");
	fNameDiv.append(fName);
	let fnameError = createNewElement("p", "*Please enter First Name", formInternalDiv, "errorP", true);
	fnameError.style.visibility = "hidden";

	let lNameDiv = createNewElement("div", "", formInternalDiv, "lNameDiv", true);
	createNewElement("label","Last Name : ",lNameDiv ,"lNameLabel", false);
	lName = document.createElement("input");
	lName.setAttribute("type", "text");
	lName.setAttribute("name", "lastName");
	lName.setAttribute("id", "lastNameId");
	lNameDiv.append(lName);
	let lnameError = createNewElement("p", "*Please enter Last Name", formInternalDiv, "errorP", true);
	lnameError.style.visibility = "hidden";

	let emailDiv = createNewElement("div", "", formInternalDiv, "emailDiv", true);
	createNewElement("label","E-mail : ",emailDiv ,"emailLabel", false),
	email = document.createElement("input");
	email.setAttribute("type", "text");
	email.setAttribute("name", "email");
	email.setAttribute("id", "emailId");
	emailDiv.append(email);
	let emailError = createNewElement("p", "*Please enter Enail", formInternalDiv, "errorP", true);
	emailError.style.visibility = "hidden";

	let infoSubmitButton = createNewElement("BUTTON", "Submit", formInternalDiv, "infoSubmitButton", true);
	infoSubmitButton.setAttribute("class", "btn-primary");

	infoSubmitButton.addEventListener("click", function(){
		//delete previous error message
		let errorDiv = document.getElementById("errorDiv");
		if(errorDiv != null && errorDiv != "") {
				errorDiv.remove();
		}

		let errorDivEle = createNewElement("div", "", formInternalDiv, "errorDiv", true);
		//validate the fields
		let fNameVal = document.getElementsByName("firstName")[0].value,
				lNameVal = document.getElementsByName("lastName")[0].value,
				emailVal = document.getElementsByName("email")[0].value;
		if (fNameVal == "") {
				fnameError.style.visibility = "visible";
		}
		
		if (lNameVal == "") {
				lnameError.style.visibility = "visible";
		}
		
		if (emailVal == "") {
				emailError.style.visibility = "visible";
		}
		//when all fields are present
		if(fNameVal != "" && lNameVal != "" && emailVal != "") {
				fadeOut(finalImagePath);
		}  
		//store Cookies
		// document.cookie = "test=valueFname";
		cookies.setCookie("firstName" ,fNameVal);
		cookies.setCookie("lastName"  ,lNameVal);
		cookies.setCookie("emailId"   ,emailVal);
	});
}
