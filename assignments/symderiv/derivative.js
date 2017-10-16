var polyOne = [4, -3, 0, 4];

function derivative(coef) {
    var result = [];
    var degreePlusOne = coef.length;
    for (var i = 1; i < degreePlusOne; i++) {
        result[i - 1] = i * coef[i];
    }
    return result;
}

console.log("The input is: \n");
printPoly(polyOne);

function printPoly(coef) {
    var wholePoly = "";
    var degreePlusOne = coef.length

    for (var i = degreePlusOne - 1; i > 0; i--) {
        if (coef[i] !== 0) {
            var term = `${coef[i]}X`;
            if (i !== 1) {
                term = term + `^${i}`;
            }
            if ((coef[i] >= 0) && (i < (degreePlusOne - 1))) {
                term = "+" + term;
            }
            wholePoly = wholePoly + term;
        }
    }
    console.log(wholePoly);
}

console.log("The derivative is: \n");
printPoly(derivative(polyOne))

