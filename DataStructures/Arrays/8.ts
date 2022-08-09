/**
 * @Question -Kadane's Algorithm
 * @Difficulty -  Medium
 * 
Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
 * 
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.
 */

// THERE IS O3 APPROACH
//better - prefix sum arr approach

// best - kadane's algo O(N) S(1)

const arr = [7, 5, -13, 5, 10, -2, 5];

function kadane(initial: number[]) {
  let max = Number.MIN_SAFE_INTEGER;
  let maxTH = 0;

  for (let i = 0; i < initial.length; i++) {
    maxTH = initial[i] + maxTH;
    if (maxTH > max) {
      max = maxTH;
    }
    if (maxTH < 0) {
      maxTH = 0;
    }
  }
  console.log(max);
}

kadane(arr);
