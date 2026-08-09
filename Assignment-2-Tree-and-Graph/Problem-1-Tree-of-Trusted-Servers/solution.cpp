#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main() {
    int N;
    long long K;

    cin>>N>>K;

    vector<long long> key(N + 1);

    for(int i = 1; i <= N; i++) {
        cin>>key[i];
    }

    vector<vector<int>> graph(N + 1);

    for(int i = 0; i < N - 1; i++) {
        int u, v;
        cin>>u>>v;

        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    vector<long long> pathXor(N + 1, 0);
    vector<int> parent(N + 1, 0);

    queue<int> q;

    pathXor[1] = key[1];
    parent[1] = -1;

    q.push(1);

    int trustedCount = 0;

    while(!q.empty()) {
        int current = q.front();
        q.pop();

        if(pathXor[current] >= K) {
            trustedCount++;
        }

        for(int next : graph[current]) {
            if(next == parent[current]) {
                continue;
            }

            parent[next] = current;
            pathXor[next] = pathXor[current] ^ key[next];

            q.push(next);
        }
    }

    cout<<trustedCount<<endl;

    return 0;
}