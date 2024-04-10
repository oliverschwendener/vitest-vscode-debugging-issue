import { describe, expect, it } from "vitest";
import { add } from "./Calculator";

describe(add, () => {
    it("should add two numbers", () => {
        const actual = add(1, 2);
        expect(actual).toBe(3);
    });
});
