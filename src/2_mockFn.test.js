const guardMove = require("./2_mockFn.js");
const mockMoveCallback = jest.fn((action, extras) => {
  if (["walk", "run"].includes(action)) {
    return action;
  }
  console.error(`Invalid ${action}...`);
  return null;
});

// Test returns NULL when unexpected parameter was given.
test("Guard moves not. Test failed because unexpected parameter was given", () => {
  const result = guardMove(mockMoveCallback, "Rumba", 4);
  expect(result).toBeNull();
});

// Test returns 'walk', when 'walk' is sent
test("Guard moves when a string 'walk' is provided", () => {
  const result = guardMove(mockMoveCallback, "walk", 4);
  expect(result).toBe("walk");
});

// Test returns 'run', when 'run' is sent
test("Guard moves when a string 'run' is provided", () => {
  const result = guardMove(mockMoveCallback, "run", 4);
  expect(result).toBe("run");
});
