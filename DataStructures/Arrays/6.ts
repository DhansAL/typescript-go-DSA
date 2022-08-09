/**
 * @Question - Union of two array
 * @Difficulty -  easy
 * 
 * Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.
 * 
Input:
5 3
1 2 3 4 5
1 2 3
Output: 
5
Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.
 */

/**
 * solution - put the both arr elements in set, give the length of that set
 */

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5];

function countUnion(arr1: number[], arr2: number[]) {
  const unionArr = [...arr1, ...arr2];
  const unionSet = new Set(unionArr);
  console.log(unionSet.size);
}
countUnion(arr1, arr2);
