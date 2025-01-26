#include<iostream>
using namespace std;
int main()
{
  cout << "Welcome to the digital drink fountain!" << endl;
  cout << "What drink would you like? " << endl << endl;
  cout << " 1 - Pepsi" << endl;
  cout << " 2 - 7up" << endl;
  cout << " 3 - Root Beer" << endl;
  cout << " 4 - Water" << endl;
  int selection;
  cout<<"The selected item is:"<<endl;
  cin >> selection;
  switch (selection)
  {

      case 1:
      cout << "Pepsi" << endl;
      break;
      case 2:
      cout << "7up" << endl;
      break;
      case 3:
      cout << "Root Beer" << endl;
      break;
      case 4:
      cout << "Water" << endl;
      break;
      default:
      cout << "Invalid selection" << endl;
      break;
  }
  return 0;
}
