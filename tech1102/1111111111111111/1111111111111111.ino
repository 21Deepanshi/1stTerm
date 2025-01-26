
#include <LiquidCrystal.h>
#include <Servo.h>

Servo MyServoMotor;
int servoMotorPin = 5;
int trigPin = 2;
int echoPin = 3;
int RS = 6;
int E = 7;
int D4 = 8;
int D5 = 9;
int D6 = 10;
int D7 = 12;
LiquidCrystal lcd(RS, E, D4, D5, D6, D7);


void setup ()
{
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT); 
  MyServoMotor.attach(servoMotorPin);
  Serial.begin(9600);

  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Distance");
}

void loop() {

  digitalWrite(trigPin, LOW);
  delayMicroseconds(10);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trigPin, LOW);

  pinMode(echoPin, INPUT);
  long x = pulseIn(echoPin, HIGH);
  long cm = (x / 2)/ 29.1;
  
  Serial.print("The distance is:");
  Serial.println(cm);
  lcd.setCursor(0,1);
  lcd.print("Distance:");
  lcd.print(cm); 
  lcd.print("cm");
  delay(1000);
  if(cm <= 20)
  {
    for(int a = 0; a <= 90; a += 1)
  {
    MyServoMotor.write(a);
    delay(100);
  }
  }
  else
  {
    for(int a = 90; a >= 0; a -= 5)
  {
    MyServoMotor.write(a);

    delay(100);

  }
  }
}
