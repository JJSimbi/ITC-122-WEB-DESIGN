// Function to generate Fibonacci sequence up to n terms
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
  
// Output the Fibonacci sequence to the page
const fibContainer = document.getElementById('fibonacci');
const fibSequence = generateFibonacci(10); // You can change the number for more terms
fibContainer.innerHTML = "<strong>Fibonacci Sequence (first 10 terms):</strong><br>" + fibSequence.join(', ');  