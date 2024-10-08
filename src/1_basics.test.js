import { multiply, isSmallerThan10 } from "./1_basics";

describe("1_Basics", () => {
  describe("multiply()", () => {
    it("multiples a and b", () => {
      const result = multiply(3, 4);

      expect(result).toBe(12);
    });
  });

  describe("isSmallerThan10()", () => {
    it("Your tests here...", () => {
      const result = isSmallerThan10(9);
      expect(result).toBe("yes dah!");

      const result7 = isSmallerThan10(7);
      expect(result7).toBe("yes dah!");

      const result10 = isSmallerThan10(10);
      expect(result10).toBe("not really...");

      const result11 = isSmallerThan10(11);
      expect(result11).toBe("not really...");
    });
  });
});
