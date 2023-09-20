#include <bits/stdc++.h>
using namespace std;

int main() {
    string a = "NEGIE1";
    string ans = a;
    
    // Cek indeks angkanya
    int n=a.length();
    for(int i=0; i<a.length(); i++) {
        if(a[i]>='0' && a[i]<='9') {
            n=i;
            break;
        }
    }

    // Reverse alphabet
    for (int i = 0; i < n; i++)
    {
        ans[i] = a[n-1-i];
    }

    cout << ans;
    
}