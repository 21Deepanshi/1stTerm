#include<iostream>
#include <iomanip> // for setprecision
using namespace std;

float afterTax(float tax, float bill)
{
    float Tax = (tax/100)* bill;
    return Tax + bill;
}

float afterTip(float tip, float billAfterTax)
{
    float Tip = (tip/100)* billAfterTax;
    return Tip + billAfterTax;
}

float billPerPerson(float billAfterTip, int numOfPeople)
{
    return billAfterTip / numOfPeople;
}

int main()
{
    float bill, tax, tip;
    int numOfPeople;

    cout <<"How much is the bill?" << endl;
    cin >> bill;
    cout <<"How much is the tax (%)?" << endl;
    cin >> tax;
    cout <<"How much is the tip (%)?" << endl;
    cin >> tip;
    cout <<"How many people are paying?" << endl;
    cin >> numOfPeople;

    float billAfterTax = afterTax(tax, bill);
    float billAfterTip = afterTip(tip, billAfterTax);
    float perPerson = billPerPerson(billAfterTip, numOfPeople);

   cout << fixed << setprecision(2);

    cout << "Bill before tax: " << bill << endl;
    cout << "Bill after tax: "<< billAfterTax << endl;
    cout << "Bill after tip: "<< billAfterTip << endl;
    cout << "Bill per person: "<< perPerson << endl;

    return 0;
}
