import { shuffle } from '@algorithms/libs';
import quicksort from './index';

describe('quicksort', () => {
  const arrLen = 50;
  const array = new Array(arrLen).fill(0).map((_, idx) => idx);
  const shuffled = shuffle([...array]);

  test('should shuffle', () => {
    expect(shuffled).not.toEqual(array);
  });

  test('should quicksort array', () => {
    quicksort(shuffled);
    expect(shuffled).toEqual(array);
  });
});
