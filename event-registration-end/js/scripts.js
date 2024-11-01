document.addEventListener('DOMContentLoaded', () => {
    const codeElements = document.querySelectorAll('code');

    // Iterate over each <code> element and add a click event listener
    codeElements.forEach(codeElement => {
      codeElement.addEventListener('click', () => {
        // Create a range and select the contents of the clicked <code> element
        const range = document.createRange();
        range.selectNode(codeElement);
        
        // Use window.getSelection to select the range
        const selection = window.getSelection();
        selection.removeAllRanges(); // Clear any previous selections
        selection.addRange(range);    // Add the new selection
        
        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(codeElement.innerText)
          .then(() => {
            // Optionally, provide feedback that the text was copied
            console.log('Text copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
        
        // Remove the selection after copying
        selection.removeAllRanges();
      });
    });
});