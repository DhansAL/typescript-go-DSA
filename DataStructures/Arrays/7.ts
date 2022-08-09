/**
 * @Question - Union of two array
 * @Difficulty -  easy
 * 
 *rotate cyclically array

Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
 */
const arr1 = [1, 2, 3, 4, 5];

function rotate(arr: number[]) {
  const pivot = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = pivot;
  console.log(arr);
}
rotate(arr1);
