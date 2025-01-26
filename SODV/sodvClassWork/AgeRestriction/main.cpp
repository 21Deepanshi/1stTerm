#include <iostream>
using namespace std;

void youngChildren()
{
    cout<<"Sorry! to purchase the game you need permission of your parents"<<endl;
}
void  adult(){
    cout<<"Welcome to GTA! Thanks,for choosing our game!"<<endl;
}
int main()
{
    int age;
    cout << "Enter your age: " << endl;
    cin>>age;
    if(age<=17)
    {
        youngChildren();
    }
    else{
        adult();
    }
    return 0;
}
