const merge = (left: number[], right: number[]): number[] => {
  const result = [];
  const leftLen = left.length;
  const rightLen = right.length;
  let l = 0,
    r = 0;
  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};

export const mergesort = (arr: number[]): number[] => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergesort(left), mergesort(right));
};
