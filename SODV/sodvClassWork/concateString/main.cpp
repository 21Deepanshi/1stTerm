#include <iostream>

using namespace std;

int main()
{
    string string1,string2, resultconcatenation;
    cout << "Enter first string: " << endl;
    getline(cin, string1);

    cout << "Enter second string: " << endl;
    getline(cin, string2);

    resultconcatenation=string1+string2;
    cout<<resultconcatenation<<endl;
    return 0;
}
