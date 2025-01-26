#include <iostream>

using namespace std;

int main()
{

    int x=4;
    int y =3;
    int z = 5;

  /*  if(x>y)
    {

        cout<<y<<endl;
    }
    else
    {
        cout<<x<<endl;
    }
}

int max = x>y?x:y; //ternary Operator (condition? value 1: value 2 ) if value 1 is true it will print value 1 otherwise print the value 2
cout<<max;
*/
//ternary Operator (condition? value 1: value 2 ) if value 1 is true it will print value 1 otherwise print the value 2
int max2=((x>y?x:y)>z?(x>y?x:y):z);
cout<<max2;
return 0;
}
