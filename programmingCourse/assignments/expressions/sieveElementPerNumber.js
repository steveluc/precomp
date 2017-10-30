// The famous Sieve of Eratosthenes 
// this version uses 32 times the memory of the other version
// but some of its functions are shorter

function getIsPrime(n, isPrime) {
    return isPrime[n]===0;
}

function setIsNotPrime(n, isPrime) {
    isPrime[n] = 1;
}

function findPrimes(maxNumber) {
    var sqrtMax = Math.ceil(Math.sqrt(maxNumber));
    let isPrime = Array(maxNumber+1);
    // from here down this program is identical to
    // the version that uses bitwise operators.
    // initially all numbers are marked prime
    isPrime.fill(0);
    // only test up to the square root of the max number,
    // because by the square root, we'll have found one
    // of the prime factors
    for (p = 2; p < sqrtMax; p++) {
        if (getIsPrime(p, isPrime)) {
            // set as not prime all multiples of the
            // prime number p
            for (i = p * 2; i <= maxNumber; i += p) {
                setIsNotPrime(i, isPrime);
            }
        }
    }
    // now print out all of the numbers not eliminated as a
    // multiple of a smaller prime number
    console.log(`The primes up to ${maxNumber}...`);
    let primesBuf = "";
    for (i = 2; i <= maxNumber; i++) {
        if (getIsPrime(i, isPrime)) {
            primesBuf += ` ${i}`;
        }
    }
    console.log(primesBuf);
}

findPrimes(50);