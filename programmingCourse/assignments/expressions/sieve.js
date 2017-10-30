// The famous Sieve of Eratosthenes

function getIsPrime(n, isPrime) {
    // each array element has 32 bits, so divide
    // by 32 to find the array element to use
    // shift right 5 is the same as divide by 32
    var index = Math.floor(n >>> 5 );
    // the bit to check is n % 32, which is the same as
    // n & 31
    let bitToCheck = 1 << (n & 31); 
    return (isPrime[index] & bitToCheck) === 0;
}

function setIsNotPrime(n, isPrime) {
    // each array element has 32 bits, so divide
    // by 32 to find the array element to use
    // shift right 5 is the same as divide by 32
    var index = Math.floor(n >>> 5 );
    // the bit to set is n % 32, which is the same as
    // n & 31
    let bitToSet = 1 << (n & 31); 
    // use bitwise or to set the correct bit to 1, 
    // indicating n is not prime
    isPrime[index] = isPrime[index] | bitToSet;
}

function findPrimes(maxNumber) {
    var sqrtMax = Math.ceil(Math.sqrt(maxNumber));
    let isPrime = Array(Math.ceil(maxNumber / 32));
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