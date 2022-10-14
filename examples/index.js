// you need to change the library name, it's juste shown here for test
// the library name is "clementreiffers-linear-regression" instead of "../app/covariance.js"
import { covariance, variance } from "../app/covariance.js";
import { linearRegression, predict } from "../app/linear-regression.js";

const example1 = variance([1, 2, 3, 4]);
const example2 = covariance([1, 2, 3, 4], [1, 2, 3, 4]);
const example3 = linearRegression([1, 2, 3, 4], [1, 2, 3, 4]);

console.log(predict(example3, 10));
console.log(predict(example3, [10, 20, 30, 40]));
