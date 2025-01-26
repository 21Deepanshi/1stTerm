#include<iostream>
using namespace std;

bool isLowercaseVowel(int c){
    // returns true if char matches any of below
    return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

bool isUppercaseVowel(int c){
    // returns true if char matches any of below
    return (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');
}
int main() {
    char c;

    cout << "Enter an alphabet: "; cin >> c;

    // show error message if c is not an alphabet

    if (isLowercaseVowel(c) || isUppercaseVowel(c))
        cout << c << " is a vowel";

    else
        cout << c << " is a consonant";

    return 0;
}
