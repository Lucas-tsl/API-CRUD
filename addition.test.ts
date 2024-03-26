import { expect, test } from "bun:test";
import { addition } from "./addition";

test("addition 1 + 2", () => {
    expect(addition(1, 2)).toBe(3);
});

test("addition 2030 + 1020", () => {
    expect(addition(2030, 1020)).toBe(3050);
});

