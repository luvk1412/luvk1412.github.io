---
title: Binary Indexed Trees / Fenwick Trees Tutorial
author: luv
date: 2020-10-18
hero: ./images/bit_part_1.png
excerpt: Binary Indexed Trees(BIT) is considered as an advanced data structure but it's quite easy to implement and use and has a lot of applications in CP as well
---

## Introduction

Just because a data structure has a word **tree** in it, doesn't mean it's hard to understand or implement. One such data structure is Binary Indexed Trees a.k.a Fenwick Trees. BIT is a data structure that you can understand a lot more easily as compared to other data structures that are capable of performing the same tasks which BIT does and also BIT is _much much much_ easier to implement especially in short contests or situations where you have time constraints. **Just FYI the full code of BIT can be written in less than 10 lines**. That's how easy to code it is.

## Applications

BIT is ds which in general is used to perform range queries over an array or let's generalize and say a collection that can be indexed. In Competitive programming, you will encounter a lot of questions which require you to perform range queries as well as updates in a collection or an array the simplest one being

> For Q queries, in each query update ith index of an array with some value or provide a sum from index l to r in the array.

Segment Trees is a popular data structure that can solve these kinds of problems and though segment trees are not that hard to understand they can be quite tedious to write and consume a lot of time to debug as well if you do a mistake in case. BIT is a very good alternative to segment trees for a lot of questions and when I say alternative I don't at all mean that BIT can replace Segment trees in all the situations. **_Segment Trees can solve a lot more complex problems related to range queries which BIT cannot do but for a lot of questions where BIT can be used, it's just bliss for all competitive programmers._**. Also as most of the people use recursive segment trees and binary indexed trees are based on bit manipulation, hence BIT have faster execution times as compared to recursive segment trees even though the overall complexities of both of them is O(log(n))

## Understanding BIT

I have made a small video in which I start from the beginning assuming you have zero knowledge of BIT. I am pretty sure after watching this video you will have a good understanding of BIT.

`youtube: https://youtu.be/DPiY9wFxGIw`

## Code and Implementation

The code of BIT as discussed earlier is quite easy. Below is the C++ code for the update and sum function of BIT.

```c
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
```

## BIT Questions

As important it is to learn a new data structure, more important is to practice questions related to it. In my next article, I will be discussing two very popular questions that are solved in a very different way using BIT only. Also, I will leave links to more questions related to BIT in that article as well.

_I hope you all found the article as well as the video helpful. If you have any questions or doubt you can comment on the youtube video itself. I try to reply to most of the doubt questions. Feel free to ping me on any social media. Links can be found at bottom of the page._
