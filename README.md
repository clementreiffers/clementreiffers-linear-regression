# linear-regression 

[![javascript](icon/javascript.svg)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![npm](icon/node.svg)](https://nodejs.dev/en/)
[![npm](icon/npm.svg)](https://www.npmjs.com/package/clementreiffers-linear-regression)
![GitHub CI](https://github.com/clementreiffers/linear-regression/actions/workflows/node.js.yml/badge.svg)

Simple linear regression made in JavaScript

## How to install 

`npm i clementreiffers-linear-regression` or `yarn add clementreiffers-linear-regression` if you
use yarn instead of npm.

## How to use 

### Linear Regression

```js
import linearRegression from "clementreiffers-linear-regression/app/linear-regression.js";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const lr = linearRegression(x, y); // if you want values into an Object
const { a, b } = lr // if you only want a and b values
```

### Covariance 

```js
import { covariance } from "clementreiffers-linear-regression/app/covariance.js";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const cov = covariance(x, y); // it gives you the covariance of x and y
```

### Variance 

```js
import { variance } from "clementreiffers-linear-regression/app/covariance.js";

const x = [1, 2, 3, 4];
const vari = variance(x); // it gives you the variance of x
```

## How it is calculated 

this package use the Covariance and Variance to calculate the linear regression,
see here : https://en.wikipedia.org/wiki/Linear_regression

## Links

See the source code on [![github](icon/github.svg)](https://github.com/clementreiffers/clementreiffers-linear-regression)

See the package on [![npm](icon/npm.svg)](https://www.npmjs.com/package/clementreiffers-linear-regression)
