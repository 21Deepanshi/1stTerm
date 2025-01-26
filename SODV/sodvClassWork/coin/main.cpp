#include <iostream>
using namespace std;

int GetQuarters(int cents)
{
  int remainder = cents % 25;
  int quarters = (cents - remainder) / 25;
  return quarters;
}

int GetDimes(int cents)
{
  int dimes = cents / 10;
  return dimes;
}

int GetNickels(int cents)
{
  int nickels = cents / 5;
  return nickels;
}

int GetPennies(int cents)
{
  return cents;
}
#define FLAG true       // false not able to execute the output window
int main()
{
  int cents;
  if(!FLAG)
  {
       cout << "How much change do you need? " << endl;
       cin >> cents;
  }
else {
    cents=45;
}
  int quarters = 0, nickels = 0, dimes = 0, pennies = 0;
  quarters = GetQuarters(cents);
  cents -= quarters * 25;
  dimes = GetDimes(cents);
  cents -= dimes * 10;
  nickels = GetNickels(cents);
  cents -= nickels * 5;


  pennies = GetPennies(cents);
  cents -= pennies * 1;
  cout << "Quarters: " << quarters << endl;
  cout << "Dimes:    " << dimes    << endl;
  cout << "Nickels:  " << nickels  << endl;
  cout << "Pennies:  " << pennies<< endl;
  return 0;
}
//break point allows us to break the  running program
