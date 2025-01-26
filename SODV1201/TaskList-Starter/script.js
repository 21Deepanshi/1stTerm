$(document).ready(function() {

    // Variable to keep track of the number of tasks entered
    var taskCounter = 1;

    $("#addTaskButton").click(function(){
        
        // Write your code here
        var taskInput = $("#taskInput").val();
        if(taskInput.trim() !== ""){
            var newRow = "<tr><td>" + taskCounter + "</td><td>" + taskInput + "</td></tr>";
            $("#taskTable").append(newRow);
            $("#taskInput").val("");
            taskCounter++;
            //clear the textbox
            
        }else{
            alert("Enter the task.");
        }
        
    });

$("#deleteTaskButton").click(function() {
        
        var taskNumber = parseInt($("#taskNumberInput").val());
        if (!isNaN(taskNumber) && taskNumber > 0 && taskNumber < taskCounter) {
            $("#taskTable tr").eq(taskNumber).remove();
            taskCounter--;
            $("#taskNumberInput").val(""); //clear the task number input

            // Adjust the task numbers in the table
            $("#taskTable tr").each(function(index) {
                if (index > 0) {
                    $(this).find("td:first").text(index);
                }
            });
        } else {
            alert("Please enter a valid task number.");
        }
    });
});
 