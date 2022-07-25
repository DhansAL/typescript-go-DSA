/**
 * @util used to swap 2 numbers
 */
export const swap = (arr: number[], num1: number, num2: number) => {
  const temp = num1;
  arr[num1] = arr[num2];
  arr[num2] = temp;
};
