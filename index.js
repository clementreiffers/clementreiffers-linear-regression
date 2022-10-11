import { covariance, variance } from "./app/covariance.js";
import linearRegression from "./app/linear-regression.js";

const example1 = variance([1, 2, 3, 4]);
const example2 = covariance([1, 2, 3, 4]);
const example3 = linearRegression([1, 2, 3, 4], [1, 2, 3, 4]);
