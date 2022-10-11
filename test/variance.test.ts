import { expect } from "chai";
import "mocha";
import variance from "../app/variance.js";

describe("../app/variance.ts", () => {
  describe("#variance()", () => {
    it("should be a number", () => {
      expect(variance([1, 2, 3, 4])).to.be.an("number");
    });
  });
});
