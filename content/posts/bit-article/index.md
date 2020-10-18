---
title: Binary Indexed Trees / Fenwick Trees Tutorial
author: luv
date: 2020-10-18
hero: ./images/bit_part_1.png
excerpt: Binary Indexed Trees(BIT) is considered as an advanced data structure but its quite easy to implement and use and has a lot of applications in CP as well
---

## Introduction

Just because a data structure has a word **tree** in it, doesnt means its hard to understand or implemet. One such data structure is Binary Indexed Trees a.k.a Fenwick Trees. BIT is a data structure which you can understand a lot more easily as compared to other data structures which are capable of performing same tasks which BIT does and also BIT is _much much much_ easier to implement specially in short contests or situations where you have time constraints. **Just FYI the full code of BIT can be written in less than 10 lines**. Thats how easy to code it is.

## Applications

BIT is ds which in general is used to perform range queries over an array or lets generalise and say a collection which can be indexed. In Competitive programming you will encounter a lot of questions which require yout o perform range queries as well as updates in a colletion or an array the most simplest when being

> For Q queries, in each query update ith index of an array with some value or provide sum from index l to r in the array.

Segement Trees is a popular data tructure which can solve these kind of problems and though Segment Trees are not that hard to understand but they can be quite tedious to write and consume a lot of time to debug as well if you do a mistake in case. BIT is a very good alternative to segment trees for a lot of questions and when I say alternative I dont at all mean that BIT can replace Segemnt trees in all the situations. **_Segment Trees can solve a lot more complex problems related to range quries which BIT cannot do but for a lot of question where BIT can be used, its just a bliss for all competive programmers._**. Also as most of the people use recurive segment trees and binary indexed trees are based on bit manipulation, hence BIT have faster execution times as compared to recursive segment trees even though overall complexities of both of them is O(log(n))

## Understanding BIT

I have amde a small video in which i start from beginning assuming you have zero knowledege of BIT. I am pretty sure after watching watching this video you will have good udnerstanding of BIT.

`youtube: https://youtu.be/DPiY9wFxGIw`

## Code and Implementation

The code of BIT as discussed earlier is quite easy. Below is the C++ code for update and sum function of BIT.

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

As important it is to learn a new data structure, more important is to pratice questions realted to it. In my next article i will be discssuing two very popular questions which are solved in very different way using BIT only. Also i will leave links to more questions related to BIT in that articale as well.

_I hope you all found the article as well as the video helpful. If you have any question or doubt you can comment on youtube video itself. I try to reply to most of the doubt questions. Feel free to ping me on any social media. Links can be found on bottom of the page._
