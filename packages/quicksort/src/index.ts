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

const quickSort = (arr: number[], low?: number, high?: number): number[] => {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;
  if (low < high) {
    const pivot: number = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
};

export default quickSort;
