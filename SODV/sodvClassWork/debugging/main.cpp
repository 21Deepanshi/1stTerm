#include <iostream>
using namespace std;

int GetQuarters(int cents)
{
  int remainder = cents % 25;
  int quarters = cents - remainder / 25;
  return quarters;
}

int GetDimes(int cents)
{
  int dimes = cents % 10;
  return dimes;
}

int GetNickels(int cents)
{
  int nickels = cents / 5;
  return nickels;
}

int GetPennies(int cents)
{
  return 0;
}

int main()
{
  int cents;
  cout << "How much change do you need? " << endl;
  cin >> cents;
  int quarters = 0, nickels = 0, dimes = 0, pennies = 0;
  quarters = GetQuarters(cents);
  cents -= quarters * 25;
  nickels = GetNickels(cents);
  cents -= nickels * 5;
  cents -= dimes * 10;
  dimes = GetDimes(cents);
  pennies = GetPennies(cents);
  cents -= pennies * 1;
  cout << "Quarters: " << quarters << endl;
  cout << "Dimes:    " << dimes    << endl;
  cout << "Nickels:  " << nickels  << endl;
  cout << "Pennies:  " << quarters << endl;
  return 0;
}
