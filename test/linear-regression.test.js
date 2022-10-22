import { expect } from "chai";
import "mocha";
import { linearRegression, predict } from "../app/linear-regression.js";
import { costFunction, score } from "../app/covariance.js";
import {
  negAsc,
  negCst,
  posAsc,
  posCst,
  posDesc,
  rng,
} from "./test.constants.js";

describe("../app/linear-regression.js", () => {
  describe("#linearRegression()", () => {
    it("linear graph without offset", () =>
      expect(linearRegression(posAsc, posAsc))
        .to.be.an("Object")
        .to.deep.equal({ a: 1, b: 0 }));

    it("negative graph without offset", () =>
      expect(linearRegression(posAsc, negAsc))
        .to.be.an("Object")
        .to.deep.equal({ a: -1, b: 0 }));

    it("negative graph with offset", () =>
      expect(linearRegression(posAsc, posDesc))
        .to.be.an("Object")
        .to.deep.equal({ a: -1, b: 6 }));

    it("only positive offset", () =>
      expect(linearRegression(posAsc, posCst))
        .to.be.an("Object")
        .to.deep.equal({ a: 0, b: -2 }));

    it("only negative offset", () =>
      expect(linearRegression(posAsc, negCst))
        .to.be.an("Object")
        .to.deep.equal({ a: 0, b: -2 }));
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
      expect(costFunction(posAsc, posAsc)).to.be.an("number").to.be.equal(0));

    it("cost for a bad prediction", () =>
      expect(costFunction(posAsc, rng)).to.be.an("number").to.be.above(1));
  });
  describe("#score()", () => {
    it("score for a prefect prediction", () =>
      expect(score(posAsc, posAsc)).to.be.an("number").to.be.above(0.9));
    it("score for a bad prediction", () =>
      expect(score(posAsc, rng)).to.be.an("number").to.be.below(0.5));
  });
});
