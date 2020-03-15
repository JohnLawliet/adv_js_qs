var sol3 = document.getElementById("sol-3");
var solbox = document.querySelector(".sol-box");
var colarray = document.querySelectorAll(".colarray");
var colvalue = document.querySelectorAll(".col-value");





const r = 100;
const g = 100;
const b = 100;
const colarray = [r,g,b];


const rgbToHex = (colarray) => {
	let hex = "";
	for (let i=0; i<3; i++){
		let v = colarray[i].toString(16);
		if (v.length < 2){
			v = "0" + v;
		}
		hex += v;
	}	
	 return ("#"+hex); 
}

console.log(rgbToHex(colarray))