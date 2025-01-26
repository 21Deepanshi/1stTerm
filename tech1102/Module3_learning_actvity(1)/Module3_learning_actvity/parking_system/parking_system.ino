#include <Servo.h>



#include <LiquidCrystal.h>

const int trigPin = 3;
const int echoPin = 4;
const int buttonPin = 2; // Pin connected to the push button
const int redLedPin = 28;
const int greenLedPin = 24;
const int servoPin = 5;

Servo gateServo;

int RS = 8;
int E = 9;
int D4 = 10;
int D5 = 11;
int D6 = 12;
int D7 = 13;

LiquidCrystal lcd(RS, E, D4, D5, D6, D7);

const int distanceThreshold = 20; // Adjust as needed

void setup() {

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP); // Use internal pull-up resistor
  pinMode(redLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  gateServo.attach(servoPin);
  
  lcd.begin(16,2);
  Serial.begin(9600);
  lcd.setCursor(0,0);
  lcd.print("Welcome,");
  lcd.setCursor(0, 1); // Move cursor to the second line
  lcd.print("Get Ticket");
}

void loop() {
  if (digitalRead(buttonPin) == LOW) { // Check if the button is pressed
    lcd.clear();
    lcd.print("Proceed");
    delay(1000);
    digitalWrite(greenLedPin, HIGH);
    delay(2000); // Assuming 2 seconds to cross the gate
    digitalWrite(greenLedPin, LOW);
  }

  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  if (distance < distanceThreshold) {
    digitalWrite(redLedPin, HIGH);
    openGate();
    delay(5000); // Assuming 5 seconds to exit the gate
    digitalWrite(redLedPin, LOW);
    lcd.clear();
      lcd.setCursor(0,0);
  lcd.print("Welcome,");
  lcd.setCursor(0, 1); // Move cursor to the second line
  lcd.print("Get Ticket");
  } else {
    digitalWrite(redLedPin, LOW);
  }
}

void openGate() {
  gateServo.write(90); // Assuming 90 degrees is the open position
  delay(5000); // Wait for the gate to open
  gateServo.write(0); // Return to closed position
}
