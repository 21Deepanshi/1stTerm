#include <iostream>
using namespace std;
void sortArray(int a[], int n)
{
  int temporary_number;
  for (int i = 0; i < n-1; i++)
  {
    for (int j = i + 1; j < n; j++)
    {
      if (a[j] < a[i])
      {
        temporary_number = a[i];
        a[i] = a[j];
        a[j] = temporary_number;
      }
    }
  }
}

int main()
{
  int array[] = { 1, 5, 8, 9, 6, 7, 3, 4, 2, 0 };
  int arrayLength = 10;
  sortArray(array, arrayLength);
  cout << "\nArray after sorting: " << endl;
  for (int i = 0; i < arrayLength; i++)
    cout << array[i] << " ";
  return 0;
}
