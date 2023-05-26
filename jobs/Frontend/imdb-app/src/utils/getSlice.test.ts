import { expect, test } from "@jest/globals";

import { getSlice } from "./getSlice";

test("tests getSlice with 28 as totalPages and default 5 slice array length", () => {
  expect(getSlice(18, 28)).toStrictEqual([16, 17, 18, 19, 20]);
  expect(getSlice(24, 28)).toStrictEqual([22, 23, 24, 25, 26]);
  expect(getSlice(28, 28)).toStrictEqual([24, 25, 26, 27, 28]);
  expect(getSlice(23, 28)).toStrictEqual([21, 22, 23, 24, 25]);
  expect(getSlice(25, 28)).toStrictEqual([23, 24, 25, 26, 27]);
  expect(getSlice(1, 28)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(getSlice(5, 28)).toStrictEqual([3, 4, 5, 6, 7]);
  expect(getSlice(4, 28)).toStrictEqual([2, 3, 4, 5, 6]);
});

test("tests getSlice with 28 as totalPages and different array length", () => {
  expect(getSlice(1, 28, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(getSlice(5, 28, 4)).toStrictEqual([4, 5, 6, 7]);
  expect(getSlice(28, 28, 9)).toStrictEqual([
    20, 21, 22, 23, 24, 25, 26, 27, 28,
  ]);
  expect(getSlice(14, 28, 3)).toStrictEqual([13, 14, 15]);
});
