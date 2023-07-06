document.addEventListener('click', function(event) {
    // Close dropdown menus when clicking outside
    if (!event.target.matches('.dropdown-input')) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
});

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

var sourceInput = document.getElementById('sourceInput');
var sourceDropdown = document.getElementById('sourceDropdown');
sourceInput.addEventListener('click', function() {
    toggleDropdown('sourceDropdown');
});

var destinationInput = document.getElementById('destinationInput');
var destinationDropdown = document.getElementById('destinationDropdown');
destinationInput.addEventListener('click', function() {
    toggleDropdown('destinationDropdown');
});

sourceDropdown.addEventListener('click', function(event) {
    var selectedValue = event.target.textContent;
    sourceInput.value = selectedValue;
    sourceDropdown.style.display = 'none';
});

destinationDropdown.addEventListener('click', function(event) {
    var selectedValue = event.target.textContent;
    destinationInput.value = selectedValue;
    destinationDropdown.style.display = 'none';
});

var textElement = document.getElementById('humm');
var text = textElement.textContent;
var index = 0;

textElement.textContent = ''; // Clear the initial text

function displayText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(displayText, 100); // Adjust the timeout value (in milliseconds) to control the speed of the effect
  } else {
    index = 0; // Reset the index once all the letters have been displayed
    textElement.textContent = ''; // Clear the text to start again
    setTimeout(displayText, 1000); // Adjust the timeout value for the pause before repeating the effect
  }
}

displayText();