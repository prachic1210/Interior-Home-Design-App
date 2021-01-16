var interiorObj;

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        interiorObj = JSON.parse(this.responseText);
        console.log(interiorObj);
    }
};
xmlhttp.open("GET", "InteriorData.json", true);
xmlhttp.send();