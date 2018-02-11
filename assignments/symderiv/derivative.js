/**
 * Sample input.  The coefficients are in order of increasing
 * power with the constant term on the left.
 */
var polyOne = [8, 2, -10, 3, 5];

var c = "c";

function derivative(coef) {
    var result = [];
    for (var i = 1; i < coef.length; i++) {
        result[i - 1] = i * coef[i];
    }
    return result;
}

function antiDerivative(coef) {
    var result = ["c"];
    for (i = 0; i < coef.length; i++) {
        result[i + 1] = coef[i] / (i + 1);
    }
    return result;
}

console.log(derivative(polyOne));
console.log(antiDerivative(polyOne));

console.log("The input is: \n");
printPoly(polyOne);

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        return gcd(b, a % b);
    }
}

function rationalToString(rat) {
    var g = gcd()
}

function printPoly(coef) {
    var wholePoly = "";
    var degreePlusOne = coef.length

    for (var i = degreePlusOne - 1; i >= 0; i--) {
        if (coef[i] !== 0) {
            var term = "";
            if (coef[i] !== 1) {
                var a = coef[i];
                var coefString = a;
                if (a !== "c") {
                    var fl = Math.floor(a);
                    if (fl !== a) {
                        coefString = a.toFixed(2);
                    } else {
                        coefString = a.toString();
                    }
                }
                term = coefString;
            }
            if (i >= 1) {
                term += "X";
            }
            if (i >= 2) {
                term = term + `^${i}`;
            }
            if (((coef[i] >= 0) || (coef[i] === "c")) && (i < (degreePlusOne - 1))) {
                term = "+" + term;
            }
            wholePoly = wholePoly + term;
        }
    }
    console.log(wholePoly);
}

console.log("The derivative is: \n");
printPoly(derivative(polyOne));
console.log("The integral is: \n");
printPoly(antiDerivative(polyOne));
console.log("The derivative of the integral is: \n");
printPoly(derivative(antiDerivative(polyOne)));


