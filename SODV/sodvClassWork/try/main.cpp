#include <iostream>
#include <string>
using namespace std;

int main()
{
    string firstname, lastname;
    int age;
    cout<<"what is your name?"<<endl;
    getline(cin,firstname);
    getline(cin,lastname);
    cout<<"what is your age"<<endl;
    cin>>age;
    cout<<age<<": hello,"<<firstname<<lastname<<endl;

    return 0;
}
