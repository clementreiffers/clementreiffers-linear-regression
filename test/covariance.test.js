import { covariance } from "../app/covariance.js";
import { expect } from "chai";
import "mocha";
import { negAsc, negCst, posAsc, posCst, rng } from "./test.constants.js";

describe("../app/covariance.js", () => {
  describe("#covariance()", () => {
    it("variance positive constant graph", () => {
      expect(covariance(posAsc, posCst)).to.be.an("number").to.be.equal(0);
    });
    it("variance negative constant graph", () => {
      expect(covariance(posAsc, negCst)).to.be.an("number").to.be.equal(0);
    });
    it("variance positive linear graph without offset", () => {
      expect(covariance(posAsc, posAsc)).to.be.an("number").to.be.equal(1.25);
    });
    it("variance negative linear graph without offset", () => {
      expect(covariance(posAsc, negAsc)).to.be.an("number").to.be.equal(-1.25);
    });
    it("covariance of random graph", () => {
      expect(covariance(posAsc, rng)).to.be.an("number").to.be.equal(1.125);
    });
  });
});
