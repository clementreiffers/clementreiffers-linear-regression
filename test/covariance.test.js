import { covariance } from "../app/covariance.js";
import { expect } from "chai";
import "mocha";

describe("../app/covariance.js", () => {
  describe("#covariance()", () => {
    it("variance positive constant graph", () => {
      expect(covariance([2, 2, 2, 2], [2, 2, 2, 2]))
        .to.be.an("number")
        .to.be.equal(0);
    });
    it("variance negative constant graph", () => {
      expect(covariance([-2, -2, -2, -2], [-2, -2, -2, -2]))
        .to.be.an("number")
        .to.be.equal(0);
    });
    it("variance positive linear graph without offset", () => {
      expect(covariance([1, 2, 3, 4], [1, 2, 3, 4]))
        .to.be.an("number")
        .to.be.equal(1.25);
    });
    it("variance negative linear graph without offset", () => {
      expect(covariance([1, 2, 3, 4], [-1, -2, -3, -4]))
        .to.be.an("number")
        .to.be.equal(-1.25);
    });
    it("covariance of random graph", () => {
      expect(covariance([1, 2, 3, 4], [5, 3, 9, 6]))
        .to.be.an("number")
        .to.be.equal(1.125);
    });
  });
});
