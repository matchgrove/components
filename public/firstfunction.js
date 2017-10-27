
// Global Scope
var firstFunction = function () {
// firstFunction Scope
 var secondFunction = function () {
 	// secondFunction Scope
 }

}
function doSomething() {
	var num = 1;
	if (num >=0) {
		var secondNum = 2;
		console.log(num) //
		console.log(secondNum) //
	}
		console.log(num);
		console.log(secondNum) // 

	}

}