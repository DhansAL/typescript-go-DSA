/**
 * @Question -Minimize the Heights II
 * @Difficulty -  Medium
 * 
https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1
 */

function getMinDiff(arr: number[], n: number, k: number) {
    //1 sort array 
    arr.sort((a, b) => (a - b))
    let ans = arr[n - 1] - arr[0]; // Maximum possible height difference

    let tempmin, tempmax;
    tempmin = arr[0];
    tempmax = arr[n - 1];

    for (let i = 1; i < n; i++) {
        tempmin = Math.min(arr[0] + k, arr[i] - k); // Minimum element when we
        // add k to whole array
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we
        // subtract k from whole array
        ans = Math.min(ans, tempmax - tempmin);
    }
    return ans;
}

const k = 6, n = 6;
const arr = [7, 4, 8, 8, 8, 9];
const ans = getMinDiff(arr, n, k);
console.log(ans);
