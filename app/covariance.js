import * as R from "ramda";

const valueGap_ = (val, mean) => R.subtract(val, mean);

const productOfValuesGap_ = (x, y) => (index) =>
  R.multiply(
    valueGap_(R.nth(index, x), R.mean(x)),
    valueGap_(R.nth(index, y), R.mean(y))
  );

const sumOfProductValuesGap_ = (x, y) =>
  R.sum(R.times(productOfValuesGap_(x, y), R.length(x)));

const covariance = (x, y) =>
  R.divide(sumOfProductValuesGap_(x, y), R.length(x));

const variance = (x) => covariance(x, x);

export { covariance, variance };
