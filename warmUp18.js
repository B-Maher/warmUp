// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function countOccurance(str){
	var result = "";
	var obj = {};
	for (var i = 0; i < str.length; i++){
		if(obj[str[i]] === undefined){
			obj[str[i]] = 1;
			result += obj[str[i]];
		}else {
			obj[str[i]]++;
			result += obj[str[i]];
		}
	}
	return result;
}