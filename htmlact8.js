// Get the input field and output element
const typefaceInput = document.getElementById('typeface-input');
const outputWord = document.getElementById('output-word');

// Function to update the word based on input
typefaceInput.addEventListener('input', function() {
    const inputText = typefaceInput.value.toLowerCase();

    // Reset classes
    outputWord.className = 'output-word';  // Remove all styles

    // Add class based on the input value
    if (inputText === 'italicized') {
        outputWord.classList.add('italic');
    } else if (inputText === 'bold') {
        outputWord.classList.add('bold');
    } else if (inputText === 'underlined') {
        outputWord.classList.add('underline');
    } else if (inputText === 'strikethrough') {
        outputWord.classList.add('strikethrough');
    } else if (inputText === 'superscript') {
        outputWord.classList.add('superscript');
    } else if (inputText === 'subscript') {
        outputWord.classList.add('subscript');
    } else if (inputText === 'big') {
        outputWord.classList.add('big');
    } else if (inputText === 'small') {
        outputWord.classList.add('small');
    }
});