#include <iostream>
#include <string>
using namespace std;

int main()
{
  string name;
  cout<< "What is your name?"<<endl;
  getline(cin, name);
  int age;
  cin>>age;
  cout<<age<<": Hello, "<<name<<"!"<<endl;
  return 0;
  }
