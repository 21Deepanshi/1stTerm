#include <iostream>

using namespace std;

int main()
{
  char c;
  cout<<"Enter the name:";
  cin>>c;
  if(isupper(c))
    //if(c>=65&&c<=65+25)
    //if(c>='A'&&c<='Z')
  {
      cout<<"This is upper case";
  }
  else if(islower(c))
  //else if(c>=97&&c<=(97+25)
            //else if(c>='a'&&c<=='z')
  {
      cout<<"this is lower case";
  }
  else
  {
      cout<<"Unknown Character";
  }
    return 0;
}
