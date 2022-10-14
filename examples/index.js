// you need to change the library name, it's juste shown here for test
// the library name is "clementreiffers-linear-regression" instead of "../app/covariance.js"
import {
  costFunction,
  covariance,
  score,
  variance,
} from "../app/covariance.js";
import { linearRegression, predict } from "../app/linear-regression.js";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];

const lr = linearRegression(x, y);
const pred = predict(lr, x);

const cost = costFunction(y, pred);
console.log(cost);
