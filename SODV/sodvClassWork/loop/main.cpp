#include <iostream>
#include <string>
using namespace std;

bool isVowel(char c)
{

    c= tolower(c);
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
       return true;
    else
        return false;
}
bool isConsonant(char c)
{

    c= tolower(c);
    if(c>='a' && c<='z' && !isVowel(c))
       return true;
    else
        return false;
}
int main()
{
string s;
cout<<"Enter a line of text"<<endl;
getline(cin,s);
{
    if(isVowel(s[i]))
        cout<<"Vowel Character:"<<endl;
    cout<<s[i];

{

{



        if(isConsonant(s[i]))
cout<<"Vowel Character:"<<endl;

    cout<<s[i];
}
return 0;


}
