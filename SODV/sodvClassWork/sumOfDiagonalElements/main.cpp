//exapmle: **Populate a 2D Array Randomly and Display the Diagonals (top left to bottom right) Summation and the total sum of diagonal elemrnt**

#include <iostream>
using namespace std;
void displayArray2D(int a[][20], int r, int c)
{
for (int i = 0; i < r; i++)
{
for (int j = 0; j < c; j++)
{
cout << a[i][j] << " ";
}
cout << endl;
}
}

void populate(int a[][20], int r, int c, int seed)
{
srand(seed);
for (int i = 0; i < r; i++)
{
for (int j = 0; j < c; j++)
{
a[i][j] = rand() % 10;
}
}
}

int findSumDiagonal(int a[][20], int r, int c)
{
int sum = 0;
for (int i = 0; i < r; i++)
{
sum += a[i][i];
}
return sum;
}

int findRightSumDiagonal(int a[][20], int r, int c)
{
int sum = 0;
for (int i = 0; i < r; i++)
{
sum += a[i][r-1-i];
}
return sum;
}
int main()
{
int a[20][20] = {0};
cout << "Enter Array Size \'n\' (in range 1..20):" << endl;
int n;
cin >> n;
cout << "Enter Random Seed Number: " << endl;
int seed;
cin >> seed;
populate(a, n, n, seed);
cout << "Elements of the array: " << endl;
displayArray2D(a,n,n);
cout << "The summation of left diagonal elements is: " << findSumDiagonal(a,n,n) << endl;
cout << "The summation of right diagonal elements is: " << findRightSumDiagonal(a,n,n) << endl;
int result = findSumDiagonal(a,n,n) + findRightSumDiagonal(a,n,n);
cout<<"The summation of diagonal elements is:"<<result;
return 0;
}
