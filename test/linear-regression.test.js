import { expect } from "chai";
import "mocha";
import { linearRegression, predict } from "../app/linear-regression.js";

describe("../app/linear-regression.ts", () => {
  describe("#linearRegression()", () => {
    it("linear graph without offset", () => {
      const lr = linearRegression([1, 2, 3, 4], [1, 2, 3, 4]);
      const { a, b } = lr;
      expect(lr).to.be.an("Object");
      expect(a).to.be.an("number").to.be.equal(1);
      expect(b).to.be.an("number").to.be.equal(0);
    });
    it("negative graph without offset", () => {
      const lr = linearRegression([1, 2, 3, 4], [-1, -2, -3, -4]);
      const { a, b } = lr;
      expect(lr).to.be.an("Object");
      expect(a).to.be.an("number").to.be.equal(-1);
      expect(b).to.be.an("number").to.be.equal(0);
    });
    it("negative graph with offset", () => {
      const lr = linearRegression([1, 2, 3, 4], [4, 3, 2, 1]);
      const { a, b } = lr;
      expect(lr).to.be.an("Object");
      expect(a).to.be.an("number").to.be.equal(-1);
      expect(b).to.be.an("number").to.be.equal(5);
    });
    it("only positive offset", () => {
      const lr = linearRegression([1, 2, 3, 4], [1, 1, 1, 1]);
      const { a, b } = lr;
      expect(lr).to.be.an("Object");
      expect(a).to.be.an("number").to.be.equal(0);
      expect(b).to.be.an("number").to.be.equal(1);
    });
    it("only negative offset", () => {
      const lr = linearRegression([1, 2, 3, 4], [-1, -1, -1, -1]);
      const { a, b } = lr;
      expect(lr).to.be.an("Object");
      expect(a).to.be.an("number").to.be.equal(0);
      expect(b).to.be.an("number").to.be.equal(-1);
    });
  });
  describe("#predict()", () => {
    it("prediction of a number for given parameters", () => {
      const pred = predict({ a: 5, b: 1 }, 1);
      expect(pred).to.be.an("number").to.be.equal(6);
    });
    it("prediction of an array for given parameters", () => {
      const pred = predict({ a: 5, b: 1 }, [1, 2]);
      expect(pred).to.be.an("array");
      const [x1, x2] = pred;
      expect(x1).to.be.equal(6);
      expect(x2).to.be.equal(11);
    });
  });
});
