#include <iostream>
using namespace std;

int main() {
    char letter;

    cout << "Please enter a letter: ";
    cin >> letter;

    switch(tolower(letter)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cout << "This is a vowel." << endl;
            break;
      case 'y':
            cout << "This is sometimes a vowel." << endl;
            break;
        default:
            if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')) {
                cout << "This is a consonant." << endl;
            } else {
                cout << "Invalid input." << endl;
            }
    }

    return 0;
}
