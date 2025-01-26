#include <iostream>
using namespace std;

int main() {
    double temperature;

    // Ask the user to enter the temperature in Celsius
    cout << "Enter the temperature in Celsius: ";
    cin >> temperature;
    cout<< "The observed temperature is: "<<temperature<<"°C"<<endl;


    if (temperature <= 0) {
      cout << "Water is in solid state (ice) at " << temperature << " degrees Celsius." << endl;
    } else if (temperature >= 100) {
        cout << "Water is in gaseous state (steam) at " << temperature << " degrees Celsius." << endl;
    } else {
        cout << "Water is in liquid state at " << temperature << " degrees Celsius." << endl;
    }



    return 0;
}
