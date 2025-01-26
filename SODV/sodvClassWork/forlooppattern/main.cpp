/* #include <iostream>

using namespace std;

void createBottomWidthTriangle(int n)

{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=i;j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}

void createTopWidthTriangle(int n)
{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=n-i+1;j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}
int main()
{
    int n;
    cout << "Enter n: " << endl;
    cin>>n;

    createBottomWidthTriangle(n);
    createTopWidthTriangle(n);
    //print1toN(n);
    return 0;
} */
#include <iostream>

using namespace std;

void createBottomWidthTriangle(int n)

{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=i;j++)
        {
            cout<<n-j+1<<" ";
        }
        cout<<endl;
    }
}

void createTopWidthTriangle(int n)
{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=n-i+1;j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}
int main()
{
    int n;
    cout << "Enter n: " << endl;
    cin>>n;

    createBottomWidthTriangle(n);
    //createTopWidthTriangle(n);
    //print1toN(n);
    return 0;
}
/*
#include <iostream>

using namespace std;

void createBottomWidthTriangle(int n)

{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=i;j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}

void createTopWidthTriangle(int n)
{
    for(int i=1;i<=n;i++)
    {
      for(int j=1;j<=n-i+1;j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }
}
int main()
{
    int n;
    cout << "Enter n: " << endl;
    cin>>n;

    createBottomWidthTriangle(n);
    createTopWidthTriangle(n);
    //print1toN(n);
    return 0;
}
*/

