#include <iostream>

using namespace std;

int main()
{
bool coffee, donuts;
cout<<"Welcome to Deepanshi's Cafe"<<endl;
cout<<"Would you like to order coffee"<<endl;
cin>>coffee;
cout<<"Would you like to order donuts"<<endl;
cin>>donuts;
if(coffee && donuts)
   {
       cout<<"You ordered the coffee and donuts"<<endl;
   }
   else if(!(coffee || donuts))
   {
       cout<<"You Ordered nothing, Thanks for your visit, See you soon"<<endl;
    }
    else
    {
        if(coffee)
        {
            cout<<"You ordered coffee"<<endl;
        }
        else
        {
            cout<<"You ordered donuts"<<endl;
        }
    }
    return 0;
}
