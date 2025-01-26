// Require the File System and Path modules in order to work with files on my computer
const fs = require('fs');
const path = require('path');

// Search through the given directory for the filename
// This is a recursive function
function searchDirectory(directory, filename) {
    
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const fileStats = fs.statSync(filePath);

        if (fileStats.isDirectory()) {
            const location = searchDirectory(filePath);
            if (location) {
                return location;
            }
        } else if (file === filename) {
            return filePath;
        }
    }

    return null;
}

// Display the location of the given filename
function displayFileLocation(filename) {

    // Get the current working directory
    const currentDirectory = process.cwd();

    const filePath = searchDirectory(currentDirectory, filename);

    if (filePath) {
        console.log(`${filename} file stored at: ${filePath}`);
    } else {
        console.log(`ERROR: ${filename} file not found.`);
    }
}

module.exports = { displayFileLocation };