//store the values
function localStorageValues() {

	for(let i =0;i<finalSelected.length;i++){
			console.log("Inside Local Storage");
			localStorage.setItem(i.toString(),finalSelected[i])
	}
}
