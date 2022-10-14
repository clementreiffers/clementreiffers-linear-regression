import { expect } from "chai";
import "mocha";
import { linearRegression, predict } from "../app/linear-regression.js";
import { costFunction } from "../app/covariance.js";

describe("../app/linear-regression.ts", () => {
  describe("#linearRegression()", () => {
    it("linear graph without offset", () =>
      expect(linearRegression([1, 2, 3, 4], [1, 2, 3, 4]))
        .to.be.an("Object")
        .to.deep.equal({ a: 1, b: 0 }));

    it("negative graph without offset", () =>
      expect(linearRegression([1, 2, 3, 4], [-1, -2, -3, -4]))
        .to.be.an("Object")
        .to.deep.equal({ a: -1, b: 0 }));

    it("negative graph with offset", () =>
      expect(linearRegression([1, 2, 3, 4], [4, 3, 2, 1]))
        .to.be.an("Object")
        .to.deep.equal({ a: -1, b: 5 }));

    it("only positive offset", () =>
      expect(linearRegression([1, 2, 3, 4], [1, 1, 1, 1]))
        .to.be.an("Object")
        .to.deep.equal({ a: 0, b: 1 }));

    it("only negative offset", () =>
      expect(linearRegression([1, 2, 3, 4], [-1, -1, -1, -1]))
        .to.be.an("Object")
        .to.deep.equal({ a: 0, b: -1 }));
  });

  describe("#predict()", () => {
    it("prediction of a number for given parameters", () => {
      const pred = predict({ a: 5, b: 1 }, 1);
      expect(pred).to.be.an("number").to.be.equal(6);
    });
    it("prediction of an array for given parameters", () =>
      expect(predict({ a: 5, b: 1 }, [1, 2]))
        .to.be.an("array")
        .to.deep.equal([6, 11]));
  });

  describe("#costFunction()", () => {
    it("cost for a perfect prediction", () =>
      expect(costFunction([1, 2, 3, 4], [1, 2, 3, 4]))
        .to.be.an("number")
        .to.be.equal(0));

    it("cost for a bad prediction", () =>
      expect(costFunction([1, 2, 3, 4], [10, 9, 2, 6]))
        .to.be.an("number")
        .to.be.above(1));
  });
});
