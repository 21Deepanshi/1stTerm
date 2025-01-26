#include <iostream>
#include<iomanip>

using namespace std;
const int n=20;

void Populate(int array[]) //to do a random array
{
    srand (time(0));
    for(int i=0; i<n; i++)
    {
        array[i]=rand()%10;
    }
}

void Display(int array[])  //to print the array
{
    cout<<"Elements of the array: "<<endl;
    for(int i=0; i<n; i++)
    {
        cout<<array[i]<<" ";
    }
    cout<<endl;
}

int findSmallestNumber(int array[]) // to find the smallest number
{
    int smallest=array[0];
    for(int i=1; i<n; i++)
    {
        if(smallest>array[i])
        smallest=array[i];
    }
    return smallest;
}

int findLargestNumber(int array[]) // to find the largest number
{
    int largest=array[0];
    for(int i=1; i<n; i++)
    {
        if(largest<array[i])
        largest=array[i];
    }
    return largest;
}

int main()
{
    int a[n];
    Populate(a);
    Display(a);


    int smallest=findSmallestNumber(a);
    cout<<"Smallest number of the array: "<<smallest<< endl;

    int largest=findLargestNumber(a);
    cout<<"Largest number of the array: "<<largest<< endl;

}
