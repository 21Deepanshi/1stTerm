#include <iostream>
#include <ctime>
#include <algorithm>
#include <iomanip>

using namespace std;

const int row=5;
const int col=5;

void displayArr(int arr[row][col])
{
    cout<<"Elements of the 2D Array are: "<<endl;
    for (int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    cout<<endl;
}

void randomPopulateArr(int arr[row][col])
{
    srand(time(0));
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            arr[i][j] = rand()%5;
        }
    }
}
int sumOfArrayBoundary(int arr[row][col])
{
    int sum=0;
    for (int i=0;i<col-1;i++)
    {
        sum += arr[0][i];
        sum += arr[row-1][col-1-i];
    }
    for (int i=0;i<row-1;i++)
    {
        sum += arr[i][col-1];
        sum += arr[row-1-i][0];
    }
    return sum;
}
int sumOfDiagonalElements (int arr[row][col])
{
    int sum = 0;
    for (int i=0;i<row;i++)
    {
        sum += arr[i][row-1-i];
    }
    return sum;
}
int sumOfDiagonalElementsRight (int arr[row][col])
{
    int sum = 0;
    for (int i=0;i<row;i++)
    {
        sum += arr[i][i];
    }
    return sum;
}

int main()
{
    int multiDimenArr[row][col];
    randomPopulateArr(multiDimenArr);
    displayArr(multiDimenArr);
    cout<<"Sum of boundary elements of the Array is: "<<sumOfArrayBoundary(multiDimenArr)<<endl;
    cout<<"Sum of Diagonal elements of the Array is: "<<sumOfDiagonalElements(multiDimenArr)<<endl;
    cout<<"Sum of Diagonal elements of the Array is: "<<sumOfDiagonalElementsRight(multiDimenArr)<<endl;
    int result= sumOfDiagonalElements(multiDimenArr) + sumOfDiagonalElementsRight(multiDimenArr);
     cout<<"Sum of Diagonal elements: "<<result<<endl;
}
