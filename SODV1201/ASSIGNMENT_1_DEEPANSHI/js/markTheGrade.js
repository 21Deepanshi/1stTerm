// Mark to Grade form validation and processing
const gradeForm = document.getElementById('gradeForm');
gradeForm.onsubmit = function(event) {
    event.preventDefault();
    const markInput = document.getElementById('mark').value;
    const result = document.getElementById('result');
    result.style.color = 'red'; // Set the color for error messages
    
    let grade;
    
    try {
        const mark = parseInt(markInput, 10);
        if (isNaN(mark) || mark < 0 || mark > 100) {
            throw new Error('Invalid input. Please enter a number between 0 and 100.');
        }    
        if (mark >= 85 && mark <= 100) {
            grade = 'Grade A';
        } else if (mark >= 70 && mark <= 84) {
            grade = 'Grade B';
        } else if (mark >= 60 && mark <= 69) {
            grade = 'Grade C';
        } else if (mark >= 50 && mark <= 59) {
            grade = 'Grade D';
        } else if (mark >= 0 && mark <= 49) {
            grade = 'Grade F';
        }
        result.textContent = grade;
        result.style.color = 'green'; // Set the color for valid messages
        } 
        catch (error) {
            result.textContent = error.message;
        }
};
