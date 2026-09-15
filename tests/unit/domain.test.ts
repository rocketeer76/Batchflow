import { describe, expect, it } from "vitest";
import { isConsistent, progressPercent } from "../../src/lib/domain";
describe("import progress", () => {
  it("calculates bounded progress", () =>
    expect(
      progressPercent({ total: 10, processed: 4, succeeded: 3, failed: 1 }),
    ).toBe(40));
  it("checks counters", () =>
    expect(
      isConsistent({ total: 10, processed: 4, succeeded: 3, failed: 1 }),
    ).toBe(true));
});
