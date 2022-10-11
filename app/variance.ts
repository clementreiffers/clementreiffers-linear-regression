import * as R from "ramda";

const square_ = (val: number) => R.multiply(val, val);

const valueGapSquared_ = (mean: number) => (val: number) =>
  square_(R.subtract(val, mean));

const sumOfProductValuesGapSquared = (x: number[]) =>
  R.sum(R.map(valueGapSquared_(R.mean(x)), x));

const variance = (x: number[]) =>
  R.divide(sumOfProductValuesGapSquared(x), R.subtract(R.length(x), 1));

export default variance;
