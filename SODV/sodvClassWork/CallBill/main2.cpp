#include<iostream>

using namespace std;

int phone_call(int); //function declaration

int main()
{
   int numOfCalls, bill;
   cout << "Enter the total number of calls:";
   cin >> numOfCalls;
   bill = phone_call(numOfCalls); //call the function
  cout<<endl;
   cout << "Your monthly bill is: $" << bill;
   cout << endl;
   return 0;
}

int phone_call(int numOfCalls) // function definition
{
   int charge;
   if(numOfCalls <= 100)
   {
      charge = 20;
   }
   else if(numOfCalls> 100 && numOfCalls <= 150)
   {
     numOfCalls = numOfCalls - 100;
      charge = 20 + (0.30 * numOfCalls);
   }
   else if (numOfCalls> 150 && numOfCalls<= 200)
   {
     numOfCalls = numOfCalls- 150;
      charge = 20 + (0.30 * 50) + (0.20 * numOfCalls);
   }
   else
   {
     numOfCalls = numOfCalls - 200;
      charge = 20 + (0.30 * 50) + (0.20 * 50) + (0.10 * numOfCalls);
   }
   return charge;
}
