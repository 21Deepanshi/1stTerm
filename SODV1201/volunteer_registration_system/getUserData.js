// Move all functions related to getting user data into this file, then export them as local modules to be used by app.js
// readVolunteerData(), promptVolunteerInput(), validateVolunteerData(), registerMoreVolunteers()

const fs = require('fs');

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

function validateVolunteerData(volunteerData) {

    const requiredFields = ['name', 'email', 'phone', 'availability', 'experience'];
  
    for (const field of requiredFields) {
        if (!volunteerData[field] || volunteerData[field].trim() === '') {
            return false;
        }
    }
  
    return true;
}

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

module.express = { readVolunteerData, promptVolunteerInput, validateVolunteerData, registerMoreVolunteers };