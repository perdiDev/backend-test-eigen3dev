#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 3;
    int m[n][n] = {
        {1, 2, 0}, 
        {4, 5, 6}, 
        {7, 8, 9}
    };

    int diagonalSatu = 0, diagonalDua=0;
    for(int i=0; i<n; i++) {
        diagonalSatu += m[i][i];
        diagonalDua += m[i][n-1-i];
    }

    cout << diagonalSatu - diagonalDua << "\n";
}