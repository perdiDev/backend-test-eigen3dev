#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<string> input {"xc", "dz", "bbb", "dz"};
    vector<string> query {"bbb", "ac", "dz"};
    int n = query.size();

    int ans[n];
    for(int i=0; i<n; i++) {
        int f = 0;

        for(int j=0; j<input.size(); j++) {
            if(query[i] == input[j]) 
                f++;
        }

        ans[i] = f;
    }

    for(int i=0; i<n; i++) {
        cout << ans[i] << " ";
    }

}