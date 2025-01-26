#include <iostream>
using namespace std;
// this program has memory leaks
// function causes memory leak
void memoryAllocationWitoutDeallocation()
{
  float* gpa = new float(5);

  // body of the function

  return;  // return without deallocation
}
void memoryAllocationWithDeallocation()
{
  float* gpa = new float(5);
  delete []gpa;
  // body of the function

  return;  // return with deallocation
}


int main()
{
  // call the function that causes memory leak
  memoryAllocationWitoutDeallocation();
  cout<<"-----after fix-----"<<endl;
  memoryAllocationWithDeallocation();
  return 0;
}


