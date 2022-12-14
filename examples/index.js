import {linearRegression, predict} from '../src/linear-regression.js';

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const lr = linearRegression(x, y, true); // If you want values into an Object

// executed only if true in linearRegression Function, it gives the same result as above
// computeLightLinearRegression(x, y);

const pred1 = predict([1, 2], lr);
const pred2 = predict(6, lr);

console.log(lr); // To show the object which represents the linear regression
console.log(pred1); // To show the prediction of an array
console.log(pred2); // To show th prediction of a number

