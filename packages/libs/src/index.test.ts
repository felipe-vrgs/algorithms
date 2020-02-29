import { swap, shuffle } from './index';

describe('libs', () => {
  const arrLen = 30;
  const randIdx = (): number => Math.floor(Math.random() * arrLen);
  const array = new Array(arrLen).fill(0).map((_, idx) => idx);

  test('should swap array itens', () => {
    const idx1 = randIdx();
    const idx2 = randIdx();
    const pre1 = array[idx1];
    const pre2 = array[idx2];
    swap(array, idx1, idx2);

    expect(pre1).toEqual(array[idx2]);
    expect(pre2).toEqual(array[idx1]);
  });

  test('should shuffle array itens', () => {
    const origArr = array;

    shuffle(array);

    expect(origArr).toEqual(array);
  });
});
