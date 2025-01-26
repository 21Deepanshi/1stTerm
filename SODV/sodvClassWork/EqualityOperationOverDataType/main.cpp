#include <iostream>
#include<iomanip>
using namespace std;
int main() // Example of Hierarchical-if-else Statement
{
  float score, factor;
  cout << "Enter a score out of 20: " << endl;
  cin >> score;
  factor = score / 20.0f;
  if (factor > 0.499)
  {
    if (factor > 0.699)
    {
       // cout<<setprecision(10)<<factor<<endl;
      if (factor>= 0.8999)
      {
        cout << "Congrats! Your team score exceeded 90%." << endl;
      }
      else
      {
        cout << "Great! Your team score exceeded 70%." << endl;
      }
    }
    else
    {
      cout << "Your team score exceeded 50%." << endl;
    }
  }
  else
  {
    cout << "Your team performance is low. Keep working…!" << endl;
  }
  return 0;
}
