/**
 * @Question -Maximum and minimum of an array 
 * @Difficulty -  easy

 */

// bruteforce O(N)S(1)
const minMaxArr = (initial: number[]) => {
  let min = initial[0],
    max = initial[0];
  for (let i = 0; i < initial.length - 1; i++) {
    min = Math.min(min, initial[i + 1]);
    max = Math.max(max, initial[i + 1]);
  }
  return [min, max];
};
console.log(minMaxArr([22, 4, 2])[0], "min");
console.log(minMaxArr([22, 4, 2])[1], "max");
