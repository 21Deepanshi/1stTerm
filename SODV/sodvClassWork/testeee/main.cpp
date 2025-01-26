#include <iostream>
using namespace std;
void q2(int n) {
    int i = 1;
    while (i < n) {
        cout << i;
        i *= 2;
    }i++;
}
int main() {
    q2(40);
    return 0;
}
