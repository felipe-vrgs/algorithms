import { shuffle } from '@algorithms/libs';
import { mergesort, quicksort, bubblesort } from './index';

const arrLen = 50;
const array = new Array(arrLen).fill(0).map((_, idx) => idx);
let shuffled = [...array];

describe('quicksort', () => {
  beforeEach(() => {
    shuffled = shuffle([...array]);
  });

  test('should quicksort array', () => {
    expect(shuffled).not.toEqual(array);
    quicksort(shuffled);
    expect(shuffled).toEqual(array);
  });

  test('should mergesort array', () => {
    expect(shuffled).not.toEqual(array);
    shuffled = mergesort(shuffled);
    expect(shuffled).toEqual(array);
  });

  test('should bubblesort array', () => {
    expect(shuffled).not.toEqual(array);
    shuffled = bubblesort(shuffled);
    expect(shuffled).toEqual(array);
  });
});
