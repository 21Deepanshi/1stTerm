#include <iostream>

using namespace std;

void Younger()
{
    cout<<"Sorry!Access Denied";
}
void Adult()
{

    cout<<"Hey!Welcome to the Gaming World";
}
int main()
{
    int age;
   cout<<"Enter your age=";
   cin>>age;
   if(age<18)
   {
       Younger();
   }
   else
   {
       Adult();
   }
    return 0;
}
