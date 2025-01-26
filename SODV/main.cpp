#include <iostream>

using namespace std;

void GreetCustomer(string customerName)

 {

  cout << "Hi "<<customerName<< "!" <<endl;
  cout << "Thank you very much for shopping with us." << endl;
  cout << "Our shop usually keeps special offers for customers like you,"<<customerName <<"." <<endl;
  cout << "So  " << customerName<<",do you want to explore your offer?" << endl;
}


int main()

    {
    string customerName;
    cout <<" Enter Customer Name: "<<endl;
    getline(cin,customerName);

    GreetCustomer(customerName);
    cout << endl;

    return 0;
}

