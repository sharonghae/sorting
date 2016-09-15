var bubbleSort = function(arr) {

function orderCheck(curr, index, arr) {
	if (index < arr.length - 1) 
		return curr < arr[index + 1];
	else if (index === arr.length - 1)
		return curr > arr[index -1];
};
 	//base case
 	if(arr.length === 1) return arr;


	if (!arr.every(orderCheck)) {

		for (var i = 0; i < arr.length -1; i++) {
			if(arr[i] > arr[i+1]) {
				var temp = arr[i]; 
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			} 

		}
		console.log(arr);
		bubbleSort(arr);
	}

	return arr;

}


