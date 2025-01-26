
#include <iostream>

using namespace std;
#define METER_TO_FEET 3.28084
double getEquivalentLengthInFeet(double meter)
{
     double result = meter*METER_TO_FEET;
     return result;
}
int main()
{
    double meter, feet;
    cout<<"Enter meters"<<endl;
    cin>>meter;

  feet= getEquivalentLengthInFeet(meter);
  cout<<"equivalent the length in feet is: "<<feet;
    return 0;
}

