#include <iostream>
#include <string>
using namespace std;

void GreetCustomer(string name)
{

  cout << "Hi"<<name<< endl;
  cout << "Thank you very much for shopping with us." << endl;
  cout << "Our shop usually keeps special offers for customers like you;"<<name<< endl;
  cout << "So"<<name<<", do you want to explore your offer?" << endl;
}


int main() {
   /* string name[3]= {"Alex", "Susan", "Kim"};
  cout<<"The Names are: "<<name[0]<<name[1]<<name[2]<<endl;

   GreetCustomer(name[0]);
   GreetCustomer(name[1]);
   GreetCustomer(name[2]);
  */
 string name;
 cout<<"enter the value:"<<endl;
 getline(cin,name);
 GreetCustomer(name);

    return 0;
}
