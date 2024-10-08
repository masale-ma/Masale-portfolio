var technicalskills;
var softskills;
var experience;
var university;
var highschool;
var moreprojects;
var contact;

let infoList = [];

// Function to add user input information
function addInformation() {
    const userInput = document.getElementById('userInput').value.trim();
    const infoContainer = document.getElementById('infoContainer');

    if (userInput === '') {
        alert('Please enter some information.');
        return;
    }

    // Add the new information to the array
    infoList.push(userInput);

    // Create a new paragraph to display the information
    const newInfo = document.createElement('p');
    newInfo.textContent = userInput;
    infoContainer.appendChild(newInfo);

    // Clear the input field after adding
    document.getElementById('userInput').value = '';
}

// Function to remove the last added information
function removeInformation() {
    const infoContainer = document.getElementById('infoContainer');
    const lastInfo = infoContainer.lastElementChild;

    if (lastInfo) {
        // Remove the last information from the array
        infoList.pop();
        infoContainer.removeChild(lastInfo);
    } else {
        alert('No information to remove!');
    }
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addInfoButton').addEventListener('click', addInformation);
    document.getElementById('removeInfoButton').addEventListener('click', removeInformation);
});