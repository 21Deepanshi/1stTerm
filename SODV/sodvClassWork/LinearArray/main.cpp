#include <iostream>
#include<ctime>

using namespace std;


void displayArray(int arr[], int n)
{
    cout<<"Elements of the array: "<<endl;
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
}


void randomPopulate(int arr[], int n)
{
    srand(time(0));
    for(int i=0; i<n; i++)
    {
        arr[i]=rand()%100;
    }
}

int getSearchIndex(int arr[], int n, int sv)
{
    for(int i=0; i<n; i++)
    {
        if(arr[i]==sv){
            return i;
        }
    }
    return -1;
}

int main()
{


    int arr[100];
    int n=100;  //size of the array


    randomPopulate(arr, n);
    displayArray(arr,100);

    int sv;
    cout<<"\nEnter a search value: "<<endl;
    cin>>sv;
    int index=getSearchIndex(arr,n,sv);

    if(index!=-1)
    {
        cout<<"The search value was found at index: "<<index<<endl;
    }
    else{
        cout<<"The search value was not found!"<<endl;
    }

    return 0;
}
