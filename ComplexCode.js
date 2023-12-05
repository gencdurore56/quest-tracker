/*
Filename: ComplexCode.js

Description: This complex JavaScript code demonstrates a unique algorithm for finding prime numbers in a given range. It utilizes advanced mathematical concepts and optimizations to improve performance.

Author: [Your Name]

Date: [Current Date]
*/

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    
    return true;
}

// Function to generate prime numbers within a given range
function generatePrimesInRange(start, end) {
    let primes = [];

    if (start <= 2) {
        primes.push(2);
        start = 3;
    }
    
    if (start % 2 === 0) start++;

    for (let num = start; num <= end; num += 2) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    
    return primes;
}

// Main function to execute the code
function main() {
    console.log("Enter the range for prime number generation: ");
    let start = prompt("Enter the starting number: ");
    let end = prompt("Enter the ending number: ");

    start = parseInt(start);
    end = parseInt(end);

    if (Number.isNaN(start) || Number.isNaN(end)) {
        console.log("Invalid range! Please enter valid numbers.");
        return;
    }

    console.log(`Generating prime numbers between ${start} and ${end}:`);

    const startTime = Date.now();
    const primes = generatePrimesInRange(start, end);
    const endTime = Date.now();

    console.log(`Found ${primes.length} prime numbers:`);
    console.log(primes);
    console.log(`Execution time: ${(endTime - startTime) / 1000} seconds`);
}

main();