import { guardMove } from "./2_mockFn";

describe("Moving a Guard", () => {
  it('Given the action "walk", it calls the moveCallback and returns its value', () => {
    const realFuntion = (value) => {
      return value;
    };

    const shadowCallback = jest.fn(realFuntion);
    const result = guardMove(shadowCallback, "walk", 7);
    expect(shadowCallback).toHaveBeenCalledWith("walk", 7);
    expect(shadowCallback).toHaveBeenCalledTimes(1);
    expect(result).toBe("walk");
  });

  it('Given the action "run", it calls the moveCallback and returns its value', () => {
    const realFuntion = (value) => {
      return value;
    };

    const shadowCallback = jest.fn(realFuntion);
    const result = guardMove(shadowCallback, "run", 7);
    expect(shadowCallback).toHaveBeenCalledWith("run", 7);
    expect(shadowCallback).toHaveBeenCalledTimes(1);
    expect(result).toBe("run");
  });

  it("Given any other action, it does not call the moveCallback and returns null", () => {
    const realFuntion = (value) => {
      return value;
    };

    const shadowCallback = jest.fn(realFuntion);
    const result = guardMove(shadowCallback, "Sloooowly go", 7);
    expect(result).toBe(null);
    expect(shadowCallback).toHaveBeenCalledTimes(0);
  });
});
