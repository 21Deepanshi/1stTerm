#include <iostream>

using namespace std;

int main()
{
int x;

int y;

int *p;

p= new int(10); //operating memory from the dynamic
cout<<"Address of x = "<<&x<<endl;
cout<<"Address of x = "<<&y<<endl;
cout<< "Address of the pointer p = "<<p;


// dynamic memory with array
 int * a = new int[1000];
 delete a;  // only one memory location is delete //memory leak


 delete [] a;



return 0;

}
