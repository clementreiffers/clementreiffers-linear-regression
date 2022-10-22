import * as R from "ramda";
import {
  costFunction,
  covariance,
  pearson,
  score,
  variance,
} from "./covariance.js";

// type arrayOrNumber = Number[] | Number;
// type trainDataType = { x: Number[], y: Number[] };
// type statisticsType = { r2: Number, pearson: Number, cost: Number };
// type lrLightType = { parameters: { a: Number, b: Number } };
// type lrLoudType = {
//   ...lrLightType,
//   trainData: trainDataType,
//   trainCurvePredict: Number[],
//   statistics: statisticsType,
// };
// type lrLoudOrLightType = lrLightType | lrLoudType;

const getA_ = (x, y) => R.divide(covariance(x, y), variance(x));

const getB_ = (x, y) => (a) => R.subtract(R.mean(y), R.multiply(a, R.mean(x)));

const getBFromListWithA_ = (x, y) => R.pipe(R.nth(0), getB_(x, y));

const predictNumber_ = (params) => (x) => params.a * x + params.b;

const predictArray_ = (params) => (x) => R.map(predictNumber_(params))(x);

const isPredictNumber_ = (x) => R.equals(R.type(x), "Number");

const predict = (x, params) => computePred_(R.prop("parameters", params), x);

const computePred_ = (params, x) =>
  R.ifElse(isPredictNumber_, predictNumber_(params), predictArray_(params))(x);

const computeLightLinearRegression = (x, y) =>
  R.applySpec({
    parameters: R.pipe(
      R.append(getA_(x, y)),
      R.converge(R.append, [getBFromListWithA_(x, y), R.identity]),
      R.applySpec({
        a: R.nth(0),
        b: R.nth(1),
      })
    ),
  })([]);

const computeLoudLinearRegression = (x, y) => {
  const lr = computeLightLinearRegression(x, y);
  const yPred = predict(x, lr);
  return {
    ...lr,
    trainData: { x: x, y: y },
    trainCurvePredict: yPred,
    statistics: {
      r2: score(x, y),
      cost: costFunction(y, yPred),
      pearson: pearson(x, y),
    },
  };
};

const linearRegression = (x, y, light = false) =>
  light
    ? computeLightLinearRegression(x, y)
    : computeLoudLinearRegression(x, y);

export {
  linearRegression,
  computeLightLinearRegression,
  computeLoudLinearRegression,
  predict,
};
