// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function howManyBallon(str){
	var obj = {};
	result = 0;
	for (var i = 0; i < str.length; i++) {
		if(obj[str[i]] !== undefined){
			obj[str[i]]++;
		}else{
			obj[str[i]] = 1;
		}
	}
	for (var key in obj){
		if(obj['b'] > 0 && obj['a'] > 0 && obj['n'] > 0 && obj['l'] > 1 && obj['o'] > 1){
			result++;
			obj['b']--;
			obj['a']--;
			obj['n']--;
			obj['o'] = obj['o'] - 2;
			obj['l'] = obj['l'] - 2;
		}
	}
	return result
}