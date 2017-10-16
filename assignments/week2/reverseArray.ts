// write a comment explaining why this function exchanges a[position1] and a[position2]
function swap(position1: number, position2: number, a: string[]) {
    var temp = a[position1];
    a[position1] = a[position2];
    a[position2] = temp;
    return a;
}
//The function gets p1 and p2 which are numbers as well as a whitch is the array. Then it defines temp as equal to p1 of the array and sets it equal to p2
//then it defines p2 as equal to temp essentially switching p1 and p2 in the array, reversing the array. A(the array) is then returned.

var testArray = ["a", "cardinal", "is", "a", "bird"];
var testArray2 = ["Hola","Hello","Bienvinidos", "Welcome","Buenos Dias", "Good!"]

console.log("The original array is: " + testArray.toString());
testArray = swap(1, 4, testArray);
console.log("The array with positions 1 and 4 swapped is: " + testArray.toString());

testArray = swap(4, 1, testArray);
console.log("The array with positions 1 and 4 swapped again: " + testArray.toString());

// change this function so that it uses swap to reverse its parameter a
// before returning a
// write a comment explaining how you did it
function reverseArray(a: string[]) {
    for (let i = 0; i < a.length / 2; i++) {
        swap(i, (a.length - i) - 1, a);
    }
    return a;
}

testArray = reverseArray(testArray);

console.log("The reversed array is: " + testArray.toString());
testArray2 = reverseArray(testArray2);

console.log("The reversed array is: " + testArray2.toString());

