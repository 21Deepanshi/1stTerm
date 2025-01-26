#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter total no. of students: ";
  cin >> n; //created in static block
  float* gpa;
  // memory allocation for 'n' number of floats
  cout << "Allocating memory using \'new\' operator..." << endl;
  gpa = new float[n]; //occuping the memory from dynamic
  cout << "Enter the GPA of "<<n<<" students..." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Student "<< i + 1 << ", GPA: ";
    cin >> *(gpa + i); // only one memory read loacation
    //pointer type operation why this is fast? i is in cache memory  in ptr[i](base address, one for i we have to read 2 memory location
  }
  cout << "\nDisplaying the GPA of all students." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Student " << i + 1 << ", GPA: " << *(gpa + i) << endl;
  }
  cout << "Releasing memory using \'delete\' operator..." << endl;
  // gpa memory is released
  delete[] gpa;
  return 0;
}
