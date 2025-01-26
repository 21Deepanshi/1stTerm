// Require the File System module in order to work with files on my computer
const fs = require('fs');

// Require the Readline module in order to create an interface to get input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Import local modules
const { displayFileLocation } = require('./displayFileLocation.js');

// Set the file name
const VOLUNTEER_DATA_FILENAME = 'volunteers.json';

// This function reads the existing volunteer data from volunteers.json
// It returns a Promise
function readVolunteerData(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {

            if (err) {
                reject(err);
                return;
            }

            try {
                const volunteerData = JSON.parse(data);
                resolve(volunteerData);
            } catch (error) {
                reject(error);
            }

        });
    });
}

// This function handles the asking of asking of questions to the user
// It returns a Promise
function promptVolunteerInput(readln) {
    return new Promise((resolve, reject) => {

        readln.question('Enter the volunteer\'s Name: ', (name) => {
            readln.question('Enter the volunteer\'s Email: ', (email) => {
                readln.question('Enter the volunteer\'s Phone Number: ', (phone) => {
                    readln.question('Enter the volunteer\'s Availability: ', (availability) => {
                        readln.question('Enter the volunteer\'s Years of Experience: ', (experience) => {
                      
                            const volunteerData = {name, email, phone, availability, experience};
                            resolve(volunteerData);
                        });
                    });
                });
            });
        });
    });
}

// This function verifies that each field has some sort of entry in it
function validateVolunteerData(volunteerData) {

    const requiredFields = ['name', 'email', 'phone', 'availability', 'experience'];
  
    for (const field of requiredFields) {
        if (!volunteerData[field] || volunteerData[field].trim() === '') {
            return false;
        }
    }
  
    return true;
}

// This function asks the user if they want to register more volunteers
// It returns a Promise
function registerMoreVolunteers(readln) {
    return new Promise((resolve, reject) => {

        readln.question('Do you want to register more volunteers? (yes/no): ', (answer) => {
            
            if (answer.toLowerCase() === 'yes') {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

// This function performs the actual registration
async function runRegistration() {

    try {
        // Get the existing volunteer data (if any)
        const existingVolunteerData = await readVolunteerData(VOLUNTEER_DATA_FILENAME);

        // Print the list of existing volunteers the console
        console.log('Existing Volunteer Data:');
        console.log(existingVolunteerData);
        console.log('------------------------');

        // Set a flag to determine when we are done registering volunteers
        let registerMore = true;
        while (registerMore) {

            // Ask the user for their data
            const volunteerData = await promptVolunteerInput(rl);

            // Validate the data
            if (validateVolunteerData(volunteerData)) {

                // The data is good, therefore add it to the existing data
                existingVolunteerData.push(volunteerData);
    
                // Check if we should register more volunteers
                registerMore = await registerMoreVolunteers(rl);
            } else {
                // The data is not good. Print an error and start again.
                console.error('Incomplete volunteer details. Please try again.');
            }
        }

        // We are done accepting inputs from the user. Now we want to write the data to the file.
        const jsonData = JSON.stringify(existingVolunteerData, null, 2);
        fs.writeFileSync(VOLUNTEER_DATA_FILENAME, jsonData);

        // Display a success message
        console.log('Volunteer details saved successfully.');

        // Display the location of the JSON file
        displayFileLocation(VOLUNTEER_DATA_FILENAME);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Properly close the readline interface
        rl.close();
    }
}

// Start the registration process
runRegistration();