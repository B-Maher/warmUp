/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 //there is a lot of possibilites for exemple for the string '1568141291110137';
 //The 10 numbers in this string can be:
 //       15 6 8 14 12 9 11 10 13 7
 //       15 68 14 
 //or     1 56 8 14 12 9 11 10 13 7
 //or     15 68 1 4 12 6 11 10 13 7
 //so the choise of the 10 number in this exercice is not restricted and is arbitrery


//this function will only give us the max and min of an array
 function searchMaxAndMin(array){
    var max = array[0];
    var min = array[0];
    for (var i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }else if(array[i] < min){
            min = array[i];
        }
    }
    return [min, max]
 }

 function mysteryRange(string, n){
    var result = [];
    var newString = string;
    var number = string.length - ((n - (string.length / 2)) * 2)
    if(string.split('').lastIndexOf('0') > number - 1){
        newString = string.split('').reverse().join('');
    }
    for (var i = 0; i < number; i = i + 2){
        result.push(newString[1] + newString[0])
        newString = newString.slice(2)
    }
    result = result.concat(newString.split(''));
    return searchMaxAndMin(result)
 } 

//this function take the range from 0 to 99 so it is not working for this exercice;
/* function mysteryRange(string, n, result, i){
    i = i || 0;
    result = result || [];
    if(string.length === n){
        result = result.concat(string.split(''));
        return searchMaxAndMin(result)
    }
    result[i] = string[0] + string[1];
    return mysteryRange(string.slice(2), n - 1, result, i + 1)
 }*/