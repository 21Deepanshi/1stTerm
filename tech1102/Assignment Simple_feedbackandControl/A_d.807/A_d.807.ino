// Define pins for water sensor, red LED (pump), blue LED (fan), and potentiometer
const int waterSensorPin = A0;
const int pumpPin = 3; // Red LED
const int fanPin = 5;  // Blue LED
const int potentiometerPin = A1;

// Define constants for maximum sensor reading and maximum water level
const int maxSensorReading = 1023;
const int maxWaterLevel = 30; // Maximum water level in millimeters

void setup() {
  Serial.begin(9600);
  
  // Set pin modes
  pinMode(waterSensorPin, INPUT);
  pinMode(pumpPin, OUTPUT);
  pinMode(fanPin, OUTPUT);
}

void loop() {
  // Read sensor value
  int sensorReading = analogRead(waterSensorPin);
  
  // Convert sensor reading to millimeters
  float waterLevel = (float(sensorReading) / maxSensorReading) * maxWaterLevel;
  
  // Read potentiometer value to adjust setpoint
  int potentiometerReading = analogRead(potentiometerPin);
  float setpoint = (float(potentiometerReading) / maxSensorReading) * 145; // Adjusted to sensor's range 

  // Print current water level and setpoint
  Serial.print("Water Level (mm): ");
  Serial.print(waterLevel);
  Serial.print("\t Setpoint (mm): ");
  Serial.println(setpoint);

  // Control pump and fan based on water level compared to setpoint
  if (waterLevel > setpoint + 5) {
    digitalWrite(fanPin, HIGH);   // Turn on fan
    digitalWrite(pumpPin, LOW);    // Turn off pump
  } else if (waterLevel < setpoint + 5) {
    digitalWrite(fanPin, LOW);     // Turn off fan
    digitalWrite(pumpPin, HIGH);   // Turn on pump
  } else {  // Water level is within 5, turn off both pump and fan
    digitalWrite(fanPin, LOW);     // Turn off fan
    digitalWrite(pumpPin, LOW);    // Turn off pump
  }

  delay(5000);  // Wait for 5 seconds before the next reading
}
