// Get the input field and output element
const typefaceInput = document.getElementById('typeface-input');
const outputWord = document.getElementById('output-word');

// Function to update the word based on input
typefaceInput.addEventListener('input', function() {
    const inputText = typefaceInput.value.toLowerCase();

    // Reset classes and direction to left-to-right
    outputWord.className = 'output-word';  // Remove all styles
    outputWord.style.direction = "ltr";    // Reset text direction to left-to-right
    outputWord.textContent = "Blueberry is in fact a Berry painted in Blue"; // Reset to original text

    // Add class and style based on the input value
    if (inputText === 'emphasized' || inputText === 'emphasize') {
        outputWord.classList.add('emphasized');
    } else if (inputText === 'marked' || inputText === 'mark') {
        outputWord.classList.add('marked');
    } else if (inputText === 'bdo' || inputText === 'rtl') {
        // Apply right-to-left direction when 'bdo' is typed
        outputWord.classList.add('bdo');
        outputWord.style.direction = "rtl";  // Change direction to RTL
    } else if (inputText === 'quote') {
        outputWord.classList.add('quote');
        outputWord.textContent = `"${outputWord.textContent}"`; // Add quotes around the text dynamically
    } else if (inputText === 'code') {
        outputWord.classList.add('code');
    } else if (inputText === 'address') {
        outputWord.classList.add('address');
    }
});