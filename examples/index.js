// you need to change the library name, it's juste shown here for test
// the library name is "clementreiffers-linear-regression" instead of "../src/covariance.js"
import {
  costFunction,
  covariance,
  score,
  variance,
} from "../src/covariance.js";
import { linearRegression, predict } from "../src/linear-regression.js";
import { posAsc } from "../test/test.constants.js";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];

const lr = linearRegression(x, y, true);
const pred = predict(x, lr);
console.log(pred);

linearRegression(posAsc, posAsc);
//
// const cost = costFunction(y, pred);
// console.log(cost);
