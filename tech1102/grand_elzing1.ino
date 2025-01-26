// C++ code
#define red 12
void setup()
{
  pinMode(red, OUTPUT);
}

void loop()
{
  digitalWrite(red, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(red, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}