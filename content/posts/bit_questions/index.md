---
title: Inversion Count and Range Sum Querries using BIT
author: luv
date: 2020-10-19
hero: ./images/bit_part_2.png
excerpt: Inversion Count and Range Sum Queries are two failry medium questions which can be solved easily using Binary Indexed Trees.
---

## Introduction

In the last article, we studied how Binary Indexed Trees work and how they can be implemented. If you haven't read that article yet, I would highly suggest to first go and take a look at that article first [here](https://codewithluv.in/binary-indexed-trees-fenwick-trees-tutorial "Binary Indexed Trees Tutorial")

## Questions

BIT can be used in many questions and there are various techniques to use BIT as well. For example, it can be directly used to perform Range sum queries or it can be used as a hash array to solve questions like Inversion Count. I have discussed both these approaches in the video below in detail.

`youtube: https://youtu.be/NOykDuH1_OY`

## BIT Questions and Code

The C++ code of both the questions discussed in the video above is as follows.

### Range Sum Query

Given an array of size N and Q queries
Solve two types of quereies<br />
**Type 1 :** i x : replace ith index by value x<br />
**Type 2 :** l r : find sum from l to r

##### Input

```
5 4
3 4 5 6 3
2 2 4
1 2 6
2 2 4
2 1 5
```

##### Output

```
15
17
23
```

##### Code

```c
#include<bits/stdc++.h>
using namespace std;

const int N = 1e5+10;
int bit[N];

void update(int i, int x){
    for(; i < N; i += (i&-i))
        bit[i] += x;
}

int sum(int i){
    int ans = 0;
    for(; i > 0; i -= (i&-i))
        ans += bit[i];
    return ans;
}

int main(){
    int n, q;
    cin >> n >> q;
    int a[n+10];
    for(int i = 1;i <= n; ++i){
        cin >> a[i];
        update(i, a[i]);
    }

    while(q--){
        int type;
        cin >> type;
        if(type == 1){
            int i, x;
            cin >> i >> x;
            update(i, x - a[i]);
            a[i] = x;
        }
        else{
            int l, r;
            cin >> l >> r;
            cout << sum(r) - sum(l-1) << endl;
        }
    }
}
```

### Inversion Count

Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j. We need to count all such pairs.

##### Input

```
5
8 4 9 2 8
```

##### Output

```
5
```

##### Input

```
5
100000000 10000 10000000000 10 100000000
```

##### Output

```
5
```

##### Code

```c
#include<bits/stdc++.h>
using namespace std;

const int N = 1e5+10;
int bit[N];

void update(int i, int x){
    for(; i < N; i += (i&-i))
        bit[i] += x;
}

int sum(int i){
    int ans = 0;
    for(; i > 0; i -= (i&-i))
        ans += bit[i];
    return ans;
}

int main(){
    int n;
    cin >> n;
    long long a[n+10];
    map<long long,int> mp;
    for(int i = 1;i <= n; ++i){
        cin >> a[i];
        mp[a[i]];
    }


    // compression of numbers for the case where a[i] > 10 ^ 6
    int ptr = 1;
    for(auto &pr : mp){
        pr.second = ptr++;
    }

    for(int i = 1; i <= n; ++i){
        a[i] = mp[a[i]];
    }

    // Finding Inversion count


    int inversion_ct = 0;
    for(int i = 1; i<= n; ++i){
        inversion_ct += (sum(N-5) - sum(a[i]));
        update(a[i], 1);
    }

    cout << inversion_ct << endl;


}

```

## BIT Questions

[Range Sumer Queries| Leetcode](https://leetcode.com/problems/range-sum-query-mutable/ "Range sum queries") <br />
[Inversion Count| Spoj](https://www.spoj.com/problems/INVCNT/ "Range sum queries") <br />
[Almost Difference | Codeforces](https://codeforces.com/contest/903/problem/D "Almost Difference")

_I hope you all found the article as well as the video helpful. If you have any questions or doubt you can comment on the youtube video itself. I try to reply to most of the doubt questions. Feel free to ping me on any social media. Links can be found at bottom of the page._
