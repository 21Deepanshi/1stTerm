

/*

Program A: BMI Calculator

Overview

Write a program to calculate the user’s body mass index (BMI).
Directions:

A person’s body mass index (BMI) is calculated using height and weight. The
formula for BMI is: BMI = kg / m2; where kg is the person’s mass in kilograms,
and m2 is their height in meters squared. Write a program to calculate a
person’s BMI. Your program should first ask the user to enter their height in
feet and inches, then their weight in pounds. Your program should then use the
data to calculate the person’s BMI.

Your program should also display the person’s height and weight in meters and
kilograms.

There are 12 inches in a foot, 3.28084 feet in a meter, and 2.20462 pounds in a
kilogram.

The listing below shows an example of what the input and output for this program
might look like.

Sample Input/Output:

What is your height?
Feets: 5
Inches: 10{}
What is your weight (lbs)? 160
Height (m): 1.78
Weight (kg): 72.57
BMI: 22.96

 */
#include <iostream>
#include<iomanip>
#include<math.h>
using namespace std;
const double inches_to_meters= 0.0254;
const double pounds_to_kg= 0.453592;
const double inches_per_foot= 12;
// const double feet_to_meters= 0.3048;
double convertHeightToMeter(double feet, double inches)  //function that convert feet and inches to meters
{
    double heightInches = feet * inches_per_foot + inches;
    return heightInches* inches_to_meters;
}
double convertWeightToMeters(double weight_pounds)   // function that convert pounds to kilogram
{
    return weight_pounds* pounds_to_kg;
}
double calculateBMI(double height, double weight)  // function that calculate the Body mass index
{
    return weight/(height*height);
}
int main() {
    double feet, inches, weight_pounds;
    cout << "What is your height?" << endl;
    cout << "Feets: ";
    cin >> feet;
    cout << "Inches: ";
    cin >> inches;
    cout << "What is your weight (lbs)? ";
    cin >> weight_pounds;
  cout<<endl;
// call the function
    double height= convertHeightToMeter(feet, inches);
    double weight= convertWeightToMeters(weight_pounds);
    double bmi= calculateBMI(height,weight);


    cout << "Height (m): " <<fixed <<setprecision(2) << height << endl;
    cout << "Weight (kg): " <<fixed<<setprecision(2) << weight << endl;
   cout << "BMI: " <<fixed<<setprecision(2) << bmi << endl;
    return 0;
}
