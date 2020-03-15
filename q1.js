const array = [1,"2",4,"591",392,391,"2",5,"10","2",1,1,1,20,20];
const final_list = []
const filters = {
	numbers: [],
	strings: []
}
const arr1 = filters.numbers;
const arr2 = filters.strings;

array.map(item => {
	typeof(item) === "number" ? arr1.push(item) :arr2.push(item);
})

arr1.sort(function(a,b){ return a - b })
arr2.sort()

const choice = (a) => {
	const num_list = []
	for (let i=0; i<a.length ;){
	z = a[0]
	let arr = a.filter(item => item === z)
	num_list.push([arr])
	for (var x=0;x<arr.length; x++){
		a.shift(z)
		}
	}
	final_list.push(num_list);
}
choice(arr1);
choice(arr2);
console.log(final_list)