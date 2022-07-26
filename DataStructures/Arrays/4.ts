/**
 * @Question - Sort an array of 0s, 1s and 2s
 * @Difficulty -  easy
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
    eg - 
Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
 */

// BRUTEFORCE - O(NlogN) - sort.
// Better approach - Dutch National Flag algorithm.
type AllowedNumbers = 0 | 1 | 2;

const sort012 = (initial: AllowedNumbers[]) => {
  let low = 0;
  let mid = 0;
  let high = initial.length - 1;
  while (mid <= high) {
    // 0check  - if(a[mid] = 0) swap low and mid
    if (initial[mid] === 0) {
      const temp = initial[low];
      initial[low] = initial[mid];
      initial[mid] = temp;
      low++;
      mid++;
    } else if (
      // 1check  - if(a[mid] = 1) mid is fine, mid ++
      initial[mid] === 1
    )
      mid++;
    // 2check  - if(a[mid] = 2) swap mid and high
    else {
      const temp = initial[mid];
      initial[mid] = initial[high];
      initial[high] = temp;
      high--;
    }
  }
};

const arr: AllowedNumbers[] = [1, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
sort012(arr);
console.log(arr);
