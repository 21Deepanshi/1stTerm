#include <iostream>
#include <string>
using namespace std;
enum class foodMenu{   //User defined data type
  chickenWings=1,
  Pizza =2,
  Burger = 3,

};

int main() {
  cout<<"WELCOME TO MY CAFE"<<endl;
  foodMenu menu;   // decalre object of user defined data type
  int items;
  string name;
  cout<<"What is your name"<<endl;
  getline(cin,name);
  cout<<endl;
  cout << "Enter a Food Item:" << endl;
  cin >> items;
  cout<<endl;

  menu = {static_cast<foodMenu>(items)};
  switch(menu)
    {
      case foodMenu::chickenWings:
      cout << "ChickenWings for"<<" "<<name<<endl;
      break;
      case foodMenu::Pizza:
      cout << "Pizza for"<<" "<<name<<endl;
      break;
      case foodMenu::Burger:
      cout << "Burger for"<<" "<<name<<endl;
      break;
      default:
      cout<< "If you miss the option please reset the order"<< endl;
      break;
    }
  cout<<"Thank you for visit"<<" "<<name<<endl;
}
