/**
 * @Question - Write a program to reverse an array or string
 * @Difficulty -  Basic

    eg - 
    Input  : arr[] = {1, 2, 3}
    Output : arr[] = {3, 2, 1}
 */

import { swap } from "../../utils/swap.ts";

const _reverseArr = (initial: number[]): number[] => {
  // BRUTREFORCE O(N) S(N)
  const newArr: number[] = [];
  for (let i = initial.length - 1; i >= 0; i--) {
    newArr.push(initial[i]);
  }
  return newArr;
};

// better approach , Pointers
//  ON S(1)
const reverseArr2 = (initial: number[]) => {
  let i = 0,
    j = initial.length - 1;

  while (i < j) {
    swap(initial, i, j);
    i += 1;
    j -= 1;
  }
  return initial;
};

// console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr2([1, 2, 3, 4]));
