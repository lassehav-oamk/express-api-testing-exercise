var assert = require("assert");
const { sum, minus } = require("../demo");

describe("Demo tests", function () {
  describe("Sum", function () {
    it("should calculate 1+1 correct", function () {
      const result = sum(1, 1);
      assert.equal(result, 2, "1+1 failed");
    });

    it("should calculate 5+3 correct", function () {
      assert.equal(sum(5, 3), 8, "5+3 failed");
    });

    it("should calculate 100+(-66) correct", function () {
      assert.equal(sum(100, -66), 34);
    });
  });

  describe("Minus", function () {
    it("should calculate 1-1 correct", function () {
      assert.equal(minus(1, 1), 0, "1-1 failed");
    });

    it("should calculate 0 - 6600 correct", function () {
      assert.equal(minus(0, 6600), -6600);
    });

    it("should calculate -1000 - 123 correct", function () {
      assert.equal(minus(-1000, 123), -1123);
    });

    it("should calculate 2-1 correct", function () {
      assert.equal(minus(2, 1), 1);
    });

    it("should calculate 10-9 correct", function () {
      assert.equal(minus(10, 9), 1);
    });

    it("should calculate 2 - -4 correct", function () {
      assert.equal(minus(2, -4), 6);
    });
  });
});
