// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

// 1-
var fullName = "first name" + " " + "last name";

//2- 
//this function return true if the number entred is a multiple of 3; for 13 it return false
function multipleOf3(n) {
    return n % 3 === 0;
}

//3-
function averageAge(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result += array[i];
    }
    return result / array.length;
}

//4- 
var myAgeInSeconds = 26 * 365 * 24 * 60 + " Seconds";