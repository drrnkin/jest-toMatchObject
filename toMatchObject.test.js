/**
 * @jest-environment jsdom
 */

describe("toMatchObject", () => {
    it("should not hang", () => {
        const element1 = document.createElement("img");
        const element2 = document.createElement("img");
        console.log("Compare", {element1, element2})
        // This comparison hangs until there's a time-out
        expect(element1).toMatchObject(element2);
    })
});
