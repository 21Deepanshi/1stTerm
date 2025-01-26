#include <iostream>

using namespace std;

int main()
{
/*int count = 0;
while(count<10)
{
    cout<<10-count<<endl;
    count++;
}
*/
/*
int n;
int sum=0;
cout<<"enter the number"<<endl;
cin>>n;
int count=1;
while(count<=n)
{
   cout<<count<<"+";
    sum=sum+count;
    // cout<<sum<<" ";
    count++;

}
cout<<"\b="<<sum<<endl;
*/
//factorial
int n;
int fact=1;
cout<<"Enter the number=";
cin>>n;
int i=1;
while(i<=n)
{
fact=fact*i;
cout<<i;
i++;
cout<<"*";
}
cout<<"\b \nFactorial of a number "<<n<<" is: "<<fact;
return 0;
}
