// Your tests here...
// You'll practice how to mock dependencies
// in this case, validatePasswordApi() and randomizer()

import { randomizer } from "./3_mockDep.utils";

it("Given the range between 1 to 3, the Randomizer returns 1 or 2 or 3", () => {
  const result = randomizer(1, 3);
  console.log("result", result);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(3);
});
