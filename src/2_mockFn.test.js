import { guardMove } from "./2_mockFn";

describe("Moving a Guard", () => {
  test("Sends a move or run action to the guard", () => {
    const testFunction = (value) => {
      if (["walk", "run"].includes(value)) {
        return value;
      }
    };

    const mockCallback = jest.fn(testFunction); // create a mock fn
    const result = guardMove(mockCallback, "walk", 7);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(result).toBe("walk");
  });
});
