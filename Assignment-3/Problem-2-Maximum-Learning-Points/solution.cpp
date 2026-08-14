#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> points(n);

    for (int i = 0; i < n; i++) {
        cin >> points[i];
    }

    if (n == 1) {
        cout << points[0] << endl;
        return 0;
    }

    int previousTwo = 0;
    int previousOne = points[0];

    for (int i = 1; i < n; i++) {
        int current = max(previousOne, previousTwo + points[i]);

        previousTwo = previousOne;
        previousOne = current;
    }

    cout << previousOne << endl;

    return 0;
}