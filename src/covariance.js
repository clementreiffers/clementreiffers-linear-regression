import * as R from 'ramda';

const valueGap_ = (val, mean) => R.subtract(val, mean);

const square_ = x => x * x;

const root_ = x => x ** (1 / 2);

const productOfValuesGap_ = (x, y) => index =>
	R.multiply(
		valueGap_(R.nth(index, x), R.mean(x)),
		valueGap_(R.nth(index, y), R.mean(y)),
	);

const sumOfProductValuesGap_ = (x, y) =>
	R.sum(R.times(productOfValuesGap_(x, y), R.length(x)));

const errorRate_ = trueAndPred =>
	R.subtract(R.nth(0, trueAndPred), R.nth(1, trueAndPred));

const squareErrorRate_ = R.pipe(errorRate_, square_);

const squareErrorRateArray_ = R.map(squareErrorRate_);

const cost_ = R.pipe(R.zip, squareErrorRateArray_, R.mean);

/* EXPORTED FUNCTIONS */

const costFunction = (yTrue, yPred) => cost_(yTrue, yPred);

const covariance = (x, y) =>
	R.divide(sumOfProductValuesGap_(x, y), R.length(x));

const variance = x => covariance(x, x);

const std = x => root_(variance(x));

const pearson = (x, y) =>
	R.divide(covariance(x, y), R.multiply(std(x), std(y)));

const score = (x, y) => square_(pearson(x, y));

export {covariance, variance, score, costFunction, pearson};
