// Constructor function for Volunteer objects
function Volunteer(name, email, phone, availability) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.availability = availability;
}

// Array to store registered volunteers
let volunteers = [];

// Function to add a new volunteer to the array and update the list
function registerVolunteer(event) {

    // Prevent default action after clicking the submit button
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const availability = document.getElementById('availability').value;

    // Create a new Volunteer object
    const volunteer = new Volunteer(name, email, phone, availability);

    // Add the object to the array
    volunteers.push(volunteer);

    console.log(volunteers);

    // Update the display of volunteers
    displayVolunteers();

    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('availability').value = '';
}

// Function to display registered volunteers
function displayVolunteers() {
    const volunteersList = document.getElementById('volunteers-list');

    // Clear any previously displayed information
    volunteersList.innerHTML = '';

    // Display each volunteer in the array
    volunteers.forEach(function(volunteer) {
        const listItem = document.createElement('li');
        listItem.textContent = `${volunteer.name} (${volunteer.email}, ${volunteer.phone}) is available on ${volunteer.availability}`;
        volunteersList.appendChild(listItem);
    });
}

// Add an event listener for the form's submission
document.getElementById('registration-form').addEventListener('submit', registerVolunteer);
