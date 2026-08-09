#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main() {
    int N, M, D;

    cin>>N>>M>>D;

    vector<vector<int>> graph(N + 1);

    for(int i = 0; i < M; i++) {
        int u, v;

        cin>>u>>v;

        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    vector<int> distance(N + 1, -1);

    queue<int> q;

    distance[1] = 0;
    q.push(1);

    int reachableCount = 0;

    while(!q.empty()) {
        int current = q.front();
        q.pop();

        if(distance[current] <= D) {
            reachableCount++;
        }

        for(int next : graph[current]) {
            if(distance[next] != -1) {
                continue;
            }

            distance[next] = distance[current] + 1;
            q.push(next);
        }
    }

    cout<<reachableCount<<endl;

    return 0;
}