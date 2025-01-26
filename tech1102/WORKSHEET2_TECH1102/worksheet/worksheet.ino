//Function that is used to calculate the minimum, maximum and Mean
void calculateArray(int array[], int size, int &min, int &max, float &Mean) {
// Checking if the array is empty
if (size == 0) {
   min = max = Mean = 0;
   return;
}

// Initializing minimum and maximum with the first element
min = max = array[0];
// Initially, Initializing the Mean is equal to 0
Mean = 0;

for (int i = 0; i < size; i++) { // Changed i<=size to i<size
     if (array[i] < min) {
            // Update the element if it is smaller
            min = array[i];
     }
     if (array[i] > max) {
            // Update the element if it is larger
            max = array[i];
     }
        // Add all elements
      Mean = Mean + array[i];
    }
    // Find the mean by dividing the sum by the size of the array
      Mean = Mean / size;
}


void setup(){
  Serial.begin(9600); //INitialize the serial monitior 
  int myArray[] ={20, 5 , 19, 10, 50};
  int arraySize = sizeof(myArray)/ sizeof(myArray[0]);
  int minimum;
  int maximum;
  float mean;
  calculateArray(myArray, arraySize, minimum, maximum, mean);

  //Print results
  Serial.print("Min:");
  Serial.println(minimum);
  Serial.print("Max:");
  Serial.println(maximum); 
  Serial.print("Mean:");
  Serial.println(mean);
}
void loop(){
  
}
