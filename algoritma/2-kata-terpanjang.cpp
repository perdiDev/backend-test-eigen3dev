#include <bits/stdc++.h>
using namespace std;


int main() {
    string sentence = "Saya sangat senang mengerjakan soal algoritma";
    int akhirIndeks, panjangIndeks=0;

    int n = sentence.length();
    int awalTemp=0, panjangTemp;
    
    for(int i=0; i<=n; i++) {
        if(sentence[i] == ' ' || i==n) {
            panjangTemp = i-awalTemp;
            awalTemp = i+1;

            if(panjangIndeks < panjangTemp) {
                panjangIndeks = panjangTemp;
                akhirIndeks = i;
            }
        }
    }

    // Tampilkan kata terpanjang
    for(int i=akhirIndeks-panjangIndeks; i<akhirIndeks; i++) {
        cout << sentence[i];
    }

    cout << ": " << panjangIndeks << " character";
}