#include <iostream>

using namespace std;

int main()
{
    int number;
    cout<<"Enter the value";
    cin>>number;
    int currentNumber;
    int firstNumber = 0;
    int secondNumber = 1 ;
    cout<<firstNumber<<" "<<secondNumber<<" ";
    for(int i=2;i<=number;i++)
    {

        currentNumber = firstNumber+secondNumber;
          cout<<currentNumber<<" ";

        firstNumber = secondNumber;
        secondNumber = currentNumber;


    }
  //  cout<<"The Fibonacci number is "<<firstNumber<<endl;
    return 0;
}
