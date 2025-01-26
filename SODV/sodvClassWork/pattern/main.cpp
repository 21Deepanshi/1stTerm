#include<iostream>

using namespace std;


void displaySeries(int x, int n)
{
int sign =1;
for(int i =1; i<=n; i+=2)
{
    if(i==1)
    {

        cout<<x;
    }
    else{

cout<<x<<"^"<<i<<"/"<<i<<"!";
}
sign = -1;
if(sign<0) cout<<"-";
else cout<<"+";
}
}
int main()
{
int n;
int x;
cout<<"n:";
cin>>n;
cout<<"x:";
cin>>x;
displaySeries(x,n);
return 0;
}
