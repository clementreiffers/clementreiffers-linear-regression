import * as R from "ramda";
import { covariance, variance } from "./covariance.js";

const getA_ = (x, y) => R.divide(covariance(x, y), variance(x));

const getB_ = (x, y) => (a) => R.subtract(R.mean(y), R.multiply(a, R.mean(x)));

const getBFromListWithA_ = (x, y) => R.pipe(R.nth(0), getB_(x, y));

const linearRegression = (x, y) =>
  R.pipe(
    R.append(getA_(x, y)),
    R.converge(R.append, [getBFromListWithA_(x, y), R.identity]),
    R.applySpec({
      a: R.nth(0),
      b: R.nth(1),
    })
  )([]);

export default linearRegression;
