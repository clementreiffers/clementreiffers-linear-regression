import * as R from "ramda";

const valueGap_ = (val: number, meanOfVals: number) =>
  R.subtract(val, meanOfVals);

const productOfValuesGap_ = (x: number[], y: number[]) => (index: number) =>
  R.multiply(
    valueGap_(R.nth(index, x), R.mean(x)),
    valueGap_(R.nth(index, y), R.mean(y))
  );

const sumOfProductValuesGap_ = (x: number[], y: number[]) =>
  R.sum(R.times(productOfValuesGap_(x, y), R.length(x)));

const covariance = (x: number[], y: number[]) =>
  R.divide(sumOfProductValuesGap_(x, y), R.length(x));

const variance = (x: number[]) => covariance(x, x);

export { covariance, variance };
