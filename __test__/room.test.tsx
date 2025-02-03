import { describe, test } from "vitest";

describe("Room", () => {
  describe("Not explored", () => {
    test("no data is displayed", () => {});

    test("not on fire", () => {});

    test("not malufunctioning", () => {});

    test("does not have occupants", () => {});
  });

  describe("Explored", () => {
    describe("Data showing", () => {
      test("name is correct and displayed", () => {});

      test("number of items is correct", () => {});

      test("computer availability is correct", () => {});

      test("fire indicator", () => {});

      test("malufunction indicator", () => {});

      test("occupants", () => {});
    });

    describe("Functionality", () => {
      test("cannot use room action or computer if malufunctioning", () => {});
    });
  });
});
