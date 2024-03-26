import { expect, test } from "bun:test";
import { division } from "./division";

test("division 1 / 2", () => {
    expect(division(1, 2)).toBe(0.5);
});

test("division 2030 / 0", () => {
    expect(() => division(2030, 0)).toThrow();
});

throw new Error("Division par 0 impossible");