// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr(string) {
	var result = "";
	var word = string.length - 1;
	for (var i = string.length - 1; i >= 0; i--){
		if(string[i] === " " || string[i] === "," || string[i] === "." || i === 0){
			for(var j = i; j <= word; j++){
				result += string[j]
			}
			word = i;
		}
	}
	return result
}