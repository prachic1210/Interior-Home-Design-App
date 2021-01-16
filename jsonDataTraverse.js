function getInnerObject(value, data) {

	//this is the first hierarchy
	if(value == "") {
			return data;
	}

	let dataKey="";

	Object.keys(data).some(key => {

			//this is the last hierarchy
			if(data[key] == value){
					return null;
			}

			//this is the middle hierarchy
			if (key == value) {
					dataKey = data[key];
					// console.log(dataKey);
					return dataKey;
			}
			//if the data[key] is an object call the find function again
			if (data[key] && typeof data[key] === 'object' ) {
					dataKey = getInnerObject(value, data[key]);
					return dataKey;
			}
	});

	//we are comparing keys so return dataKey value
	return dataKey;
}