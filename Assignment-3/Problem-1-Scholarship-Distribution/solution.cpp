#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    long long budget;
    cin>>n>>budget;

    vector<int> scholarship(n);

    for(int i = 0; i < n; i++) {
        cin>>scholarship[i];
    }

    sort(scholarship.begin(), scholarship.end());

    int count = 0;

    for(int amount : scholarship) {
        if(budget < amount) {
            break;
        }

        budget -= amount;
        count++;
    }

    cout<<count<<endl;

    return 0;
}