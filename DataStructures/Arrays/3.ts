/**
 * @Question -Kth smallest element
 * @Difficulty -  mid
 * 
 * Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth **(can be 0th) 
 * smallest element in the given array. It is given that all array elements are distinct.
 * 
 * eg - 
Input:
N = 6
arr[] = 7 10 4 3 20 15
K = 3
Output : 7
Explanation :
3rd smallest element in the given 
array is 7.

 */
const smallestK = (initial: number[], k: number): number => {
  // BRUTEFORCE O(NLOGN)
  initial.sort((a, b) => a - b);
  return initial[k];
};

// const smallestK2 = (initial: number[], k: number): number => {
//     // BRUTEFORCE O(NLOGN)
//     return initial[k];
//   };

console.log(smallestK([2, 3, 4, 5, 6, 7], 3));
