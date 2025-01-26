#include <iostream>
using namespace std;
int main()
{
    int A,B,C,D,E;
    cout<<"Enter A:"<<endl;
    cin>>A;
    cout<<"Enter B:"<<endl;
    cin>>B;
    cout<<"Enter C:"<<endl;
    cin>>C;
    cout<<"Enter D"<<endl;
    cin>>D;
    cout<<"Enter E:"<<endl;
    cin>>E;

    int m=(A>B?A:B);
    //max=(m>z?m:z);
    int m1=((C>D?C:D)>E?(C>D?C:D):E);
   // int max=((x>y?x:y)>z?(x>y?x:y):z);
   int max=(m1>m?m1:m);
    cout<<"The Ternary Operator of five number:"<<endl<<max;
    return 0;
}
