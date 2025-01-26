#include <iostream>
using namespace std;

int main() // Example of Hierarchical-if-else Statement
{
    float score;
      float factor;
  cout << "Enter a score out of 20: " << endl;
  cin >> score;
  factor = score/ 20.0; //use typeclusting (double) if we use score as int type
  // cout<<"percentage="<<factor;
  if (factor > 0.5)
  {
    if (factor > 0.7)
    {
      if (factor > 0.9)
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
