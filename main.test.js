const { default: TestRunner } = require("jest-runner");
const concatStrings = require('./main');

test("retrun one string", () => {
    expect(concatStrings("abc","def")).toBe("abcdef");
})