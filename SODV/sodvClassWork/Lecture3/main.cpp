#include <iostream>

using namespace std;
void myFirstFunction()
{
    cout<<"1st output"<<endl<<"2nd output";
    cout<<endl;
}
void mysecondFunction()
{
    cout<<"3rd output"<<endl<<"4th output";
    cout<<endl;
}
int main()
{
    bool flag;
    flag= true;
    cout<<flag<<endl;
    myFirstFunction();
    mysecondFunction();
    return 0;
}
