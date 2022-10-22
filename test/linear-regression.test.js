import { expect } from "chai";
import "mocha";
import { linearRegression, predict } from "../src/linear-regression.js";
import { costFunction, score } from "../src/covariance.js";
import {
  negAsc,
  negCst,
  posAsc,
  posCst,
  posDesc,
  rng,
} from "./test.constants.js";

describe("../src/linear-regression.js", () => {
  describe("#linearRegression()", () => {
    it("linear graph without offset", () =>
      expect(linearRegression(posAsc, posAsc, true))
        .to.be.an("Object")
        .to.deep.equal({ parameters: { a: 1, b: 0 } }));

    it("negative graph without offset", () =>
      expect(linearRegression(posAsc, negAsc, true))
        .to.be.an("Object")
        .to.deep.equal({ parameters: { a: -1, b: 0 } }));

    it("negative graph with offset", () =>
      expect(linearRegression(posAsc, posDesc, true))
        .to.be.an("Object")
        .to.deep.equal({ parameters: { a: -1, b: 6 } }));

    it("only positive offset", () =>
      expect(linearRegression(posAsc, posCst, true))
        .to.be.an("Object")
        .to.deep.equal({ parameters: { a: 0, b: -2 } }));

    it("only negative offset", () =>
      expect(linearRegression(posAsc, negCst, true))
        .to.be.an("Object")
        .to.deep.equal({ parameters: { a: 0, b: -2 } }));
  });

  describe("#predict()", () => {
    it("prediction of a number for given parameters", () => {
      const pred = predict(1, { parameters: { a: 5, b: 1 } });
      expect(pred).to.be.an("number").to.be.equal(6);
    });
    it("prediction of an array for given parameters", () =>
      expect(predict([1, 2], { parameters: { a: 5, b: 1 } }))
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
