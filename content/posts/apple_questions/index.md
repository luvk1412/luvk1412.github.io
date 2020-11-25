---
title: Apple Online Coding Round 2020 questions
author: luv
date: 2020-11-25
hero: ./images/APPLE.png
excerpt: Today we will discuss two questions of recent Online Coding round of Apple
---

## Introduction

Recently Apple visted in one of the colleges of India for On Campus placement. Today we are going to dicuss two coding questions asked in that online coding round.

## Question 1 (Easy)

This question which came was failry easy and was adhoc to solve. Below is the statement as well as solution.

### Statement

The computing cluster has multiple processors, each with 4 cores. The number of tasks to handle is
equal to the total number of cores in the cluster. Each task has a predicted execution time and each
processor has a specified time when its core becomes available. Assuming that exactly 4 tasks are assigned
to each processor and those tasks run independently(asynchronously) on the cores of the chosen processor,
what is the earliest time that all tasks can be processed.

##### Input

```
processortTime = [8,10]
taskTime = [2,2,3,1,8,7,4,5]
```

##### Output

```
16
```

##### Input

```
processorTime = [10,20]
taskTime = [2,3,1,2,5,8,4,3]
```

##### Output

```
23
```

##### Code

```c
#include<bits/stdc++.h>
using namespace std;

int minTime(vector<int> processorTime, vector<int> taskTime){
  sort(processorTime.begin(), processorTime.end());
  sort(taskTime.begin(), taskTime.end());
  reverse(taskTime.begin(), taskTime.end());
  int ans = 0;
  int curTask = 0;
  for(int proctime : processorTime){
  	for(int i = 0; i <4 ; ++i){
  		int completionTime = taskTime[curTask] + proctime;
  		curTask++;
  		ans = max(ans, completionTime);
  	}
  }
  return ans;
}

int main(){
  cout << minTime({8,10},{2,2,3,1,8,7,4,5});
}
```

## Question 2 (Easy-Medium)

This question was easy medium level and was put forward in staement to be thought as a graph question but it can be easily solved using normal STL. Below is the statement as well as solution.

### Statement

A social network has n active users. numbered from 0 to n-1. users selectively friend one another to create
groups of friends within the network.

- Two users x and y are direct friends if they friend each other on the network.
- Two users x and z are indirect friends if there is some y common to both x and z
- Two users x and y belong to the same group if they are friends directly or indirectly.
- The numbers of people in each group is given as an array of n integers, counts where counts[i] denotes
  the total number of users in the group that the user belongs to.
- All of the users in a particular group must have minimal id numbers.

Print the information of each valid group in a new line as space separated integers in ASC order.
And groups themselves are ordered by smallest member ID in ASC order.

##### Input

```
counts = [3,3,3,3,3,1,3]
```

##### Output

```
0 1 2
3 4 6
5
```

##### Input

```
counts = [2,2,2,2]
```

##### Output

```
0 1
2 3
```

##### Code

```c
#include<bits/stdc++.h>
using namespace std;

void socialGraphs(vector<int> counts){
	vector<vector<int>> groups;
	map<int, pair<int,int> > m;
	for(int i = 0; i < counts.size(); ++i){
		auto it  = m.find(counts[i]);
		if(it == m.end()){
			if(counts[i] != 1){
				m[counts[i]] = {1, groups.size()};
			}
			groups.push_back({i});
		}
		else{
			int groupNum = m[counts[i]].second;
			int groupCount = m[counts[i]].first;
			groups[groupNum].push_back(i);
			if(groupCount + 1 == counts[i]){
				m.erase(counts[i]);
			}
			else{
				m[counts[i]] = {groupCount+1, groupNum};
			}
		}
	}
	sort(groups.begin(), groups.end());
	for(auto group : groups){
		for(int person : group){
			cout << person << " ";
		}
		cout << endl;
	}


}

int main(){
	socialGraphs({3,3,3,3,3,1,3});
}
```

## Explanation

For detailed explanation on both of the above questions you can watch my explanation video.

`youtube: https://youtu.be/ICdGWdv9EdI`

_I hope you all found the article as well as the video helpful. If you have any questions or doubt you can comment on the youtube video itself. I try to reply to most of the doubt questions. Feel free to ping me on any social media. Links can be found at bottom of the page._
