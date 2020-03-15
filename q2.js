const array = [1,2,3,4,5,6,2,3,7]
const target = 10

const set = new Set(array);
const curry = (a) => (b) => a+b;
const result = [];
let na = Array.from(set);

if (na.length<2){
	console.log("NADA")
}

for (let i=0; i<na.length; ){
	for (let x=i+1; x<na.length; x++){
		if (na[i] + na[x] == target){
			result.push([na[i],na[x]])
		}
	}
	na.shift(i)
}
console.log(result)