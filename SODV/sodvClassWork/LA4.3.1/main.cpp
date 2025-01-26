#include <iostream>
#include<algorithm>
using namespace std;


void randomPouplate(int a[], int s)
{
    srand(time(0));
    for(int i = 0; i< s;i++)
    {
        a[i]=rand()%20;
    }
}
void display(int a[], int s)
{
    cout<<endl;
   for(int i =0;i< s;i++){
    cout<<a[i]<<" ";
   }
}


void *getTheUniqueElement(int a[], int &n)
{
    int *ptr;
    sort(a, a+n); int count=0;
    for(int i = 0; i< n;i++)
    {
        if(i==0|| a[i-1]!= a[i]){
            count++;
        }
    }
    ptr = new int[count]; // dynamic memory
    int count=0;
      for(int i = 0; i< n;i++)
    {
        if(i==0|| a[i-1]!= a[i]){
            ptr[count++] =a[i];
        }
    }
    //cout<<count;

    return ptr;
}
int main()
{
const int n = 100;
int x[n];
 randomPouplate(x, n);
 display(x,n);
return 0;
}
