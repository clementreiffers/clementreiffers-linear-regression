# linear-regression 

[![javascript](icon/javascript.svg)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![npm](icon/node.svg)](https://nodejs.dev/en/)
[![npm](icon/npm.svg)](https://www.npmjs.com/package/clementreiffers-linear-regression)
![GitHub CI](https://github.com/clementreiffers/linear-regression/actions/workflows/node.js.yml/badge.svg)

Simple linear regression made in JavaScript.

## How to install 

`npm i clementreiffers-linear-regression` or `yarn add clementreiffers-linear-regression` if you
use yarn instead of npm.

## How to use 

### Linear Regression

```js
import { linearRegression, predict } from "clementreiffers-linear-regression";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const lr = linearRegression(x, y); // if you want values into an Object

const pred1 = predict(lr, [1, 2]);
const pred2 = predict(lr, 6);

console.log(lr); // to show the object which represents the linear regression
console.log(pred1); // to show the prediction of an array
console.log(pred2); // to show th prediction of a number

```

by trying this example above, you will have :

```terminal
{ a: 1, b: 0 }
[ 1, 2 ]
6
```

### Covariance 

```js
import { covariance } from "clementreiffers-linear-regression";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const cov = covariance(x, y); // it gives you the covariance of x and y
console.log(cov);
```

by trying this example above you will have : 

```terminal
1.25
```

### Variance 

```js
import { variance } from "clementreiffers-linear-regression";

const x = [1, 2, 3, 4];
const vari = variance(x); // it gives you the variance of x
console.log(vari);
```

by trying this example, you will have : 

```terminal 
1.25
```

### score

the score represents the capacity to do a linear regression with the data given.

```js 
import { score } from "clementreiffers-linear-regression";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];

console.log(score(x, y));

```

by executing this code you will have :

```terminal
0.9999999999999996
```

### cost function

```js
import { linearRegression, costFunction } from "clementreiffers-linear-regression";

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];

const lr = linearRegression(x, y);
const pred = predict(lr, x);

const cost = costFunction(y, pred);
console.log(cost);
```

by executing this function you will have :

```terminal
0
```

## unit test realized 

you can try them by executing the command `yarn test` or `npm test` in your terminal.

All tests are in `test` folder.
```terminal
  ../app/covariance.js
    #covariance()
      ✔ variance positive constant graph
      ✔ variance negative constant graph
      ✔ variance positive linear graph without offset
      ✔ variance negative linear graph without offset
      ✔ covariance of random graph

  ../app/linear-regression.js
    #linearRegression()
      ✔ linear graph without offset
      ✔ negative graph without offset
      ✔ negative graph with offset
      ✔ only positive offset
      ✔ only negative offset
    #predict()
      ✔ prediction of a number for given parameters
      ✔ prediction of an array for given parameters
    #costFunction()
      ✔ cost for a perfect prediction
      ✔ cost for a bad prediction
    #score()
      ✔ score for a prefect prediction
      ✔ score for a bad prediction
```

## How it is calculated 

this package use the Covariance and Variance to calculate the linear regression,
see here : https://en.wikipedia.org/wiki/Linear_regression

## Contacts

any idea to improve this package ? 

- send me a message on [![discord](icon/discord.svg)]()
- do a git issue on [![github](icon/github.svg)](https://github.com/clementreiffers/clementreiffers-linear-regression/issues)

## Links

See the source code on [![github](icon/github.svg)](https://github.com/clementreiffers/clementreiffers-linear-regression)

See the package on [![npm](icon/npm.svg)](https://www.npmjs.com/package/clementreiffers-linear-regression)
