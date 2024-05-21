// Function to generate the first 'n' Fibonacci numbers
function fibonacci(n) {
    // Initialize the array with the first two Fibonacci numbers
    const fib = [0, 1];
    
    // Loop from the 3rd position (index 2) to the nth position
    for (let i = 2; i < n; i++) {
        // Calculate the next Fibonacci number and add it to the array
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    // Return the array containing the first 'n' Fibonacci numbers
    return fib;
}

// Print the first 10 Fibonacci numbers to the console
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// recursive fibonacci
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));


