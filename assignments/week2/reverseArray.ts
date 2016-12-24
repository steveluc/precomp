// write a comment explaining why this function exchanges a[position1] and a[position2]
function swap(position1: number, position2: number, a: string[]) {
    var temp = a[position1];
    a[position1] = a[position2];
    a[position2] = temp;
    return a;
}

var testArray = ["a", "cardinal", "is", "a", "bird"];

console.log("The original array is: " + testArray.toString());
testArray = swap(1, 4, testArray);
console.log("The array with positions 1 and 4 swapped is: " + testArray.toString());

testArray = swap(4, 1, testArray);
console.log("The array with positions 1 and 4 swapped again: " + testArray.toString());

// change this function so that it uses swap to reverse its parameter a
// before returning a
// write a comment explaining how you did it
function reverseArray(a: string[]) {
    return a;
}

testArray=reverseArray(testArray);

console.log("The reversed array is: " + testArray.toString());

