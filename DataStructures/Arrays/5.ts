/**
 * @Question - Move all negative numbers to beginning and positive to end with constant extra space
 * @Difficulty -  easy
An array contains both positive and negative numbers in random order.
 Rearrange the array elements so that all negative numbers appear before all positive numbers..
    eg - 
Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
 */

// BRUTEFORCE - SORT O(NlogN)

// better approach O(N) 2 pointers

const rearrangeArr = (initial: number[]) => {
  let neg = 0,
    pos = initial.length - 1;
  while (neg <= pos) {
    if (initial[neg] > 0) {
      const temp = initial[neg];
      initial[neg] = initial[pos];
      initial[pos] = temp;
      pos--;
    }
    if (initial[pos] < 0) {
      const temp = initial[pos];
      initial[pos] = initial[neg];
      initial[neg] = temp;
      neg++;
    }
  }
};
