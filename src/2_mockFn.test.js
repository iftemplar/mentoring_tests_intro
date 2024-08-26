import { guardMove } from "./2_mockFn";

describe("Moving a Guard", () => {
  test("Sends a move or run action to the guard", () => {
    const realFuntion = (value) => {
      if (["walk", "run"].includes(value)) {
        return value;
      }
    };

    const shadowCallback = jest.fn(realFuntion);

    const result = guardMove(shadowCallback, "walk", 7);
    expect(shadowCallback).toHaveBeenCalledTimes(1);
    expect(result).toBe("walk");
  });
});
