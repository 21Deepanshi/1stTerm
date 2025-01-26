
// C++ program to check vowel or consonant using find()
// function
#include <iostream>
#include <string>

using namespace std;

int isVowel(char ch)
{
    // Make the list of vowels
    string str = "aeiouAEIOU";
    return (str.find(ch) != string::npos);
}

// Driver code
int main()
{
    if (isVowel('a'))
        cout << "a is vowel" << endl;
    else
        cout << "a is consonant" << endl;

    return 0;
}
