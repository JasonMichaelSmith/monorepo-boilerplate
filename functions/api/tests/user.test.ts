import { expect, test } from "vitest";
import { user } from "../src/user";

// https://vitest.dev/guide/
test("api user test get", () => {
    expect(async () => {
        const result = await user();
        expect(result.data).toBeDefined();
    });
});