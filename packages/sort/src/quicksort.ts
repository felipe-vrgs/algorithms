import { swap } from '@algorithms/libs';

const partition = (arr: number[], low: number, high: number): number => {
  let q = low;
  let i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swap(arr, i, q);
      q++;
    }
  }
  swap(arr, i, q);
  return q;
};

export const quicksort = (
  arr: number[],
  low?: number,
  high?: number,
): number[] => {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;
  if (low < high) {
    const pivot: number = partition(arr, low, high);
    quicksort(arr, low, pivot - 1);
    quicksort(arr, pivot + 1, high);
  }
  return arr;
};
