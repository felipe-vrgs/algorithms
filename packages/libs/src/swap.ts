export const swap = (arr: number[], i: number, j: number): void => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
